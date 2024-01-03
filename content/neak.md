---
title: 'Neak: An NL2SQL engine'
date: "2023-12-10"
description: "Neak is a natural language to SQL engine that uses the RAG pipeline to generate SQL queries from natural language questions."
---


In the realm of AI, it is evident that for those without technical expertise, the desire to steer away from coding or constructing intricate queries has intensified. You would not want to code/ write complex queries anymore. The advent of large language models has conditioned us to prioritize results. We do not want to do the manual labor of writing code or queries, we now tend to present a cluster of questions, offer contextual details, and allow GPT and similar tools to handle the rest.

However, a challenge arises when we seek to safeguard our data from direct interaction with the LLM layer. Neak expands upon the RAG framework by specializing in generating SQL queries from natural language inquiries without letting LLM touch the actual data.

*Caveat: This is a work in progress. The code is not yet available for public use. Below is a brief overview of the project.*

- [The Problem](#the-problem)
    - [Prompt Engineering](#prompt-engineering)
        - [Lang Chain SQL Generator](#lang-chain-sql-generator)
        - [SQL Coder](#sql-coder)
    - [RAG pipelines](#rag-pipelines)
        - [Lang Chain](#lang-chain)
        - [Llama index](#llama-index)
- [Neak](#neak)
    - [Chunking](#chunking)
    - [Prompt Engineering](#prompt-engineering)
- [What's next?](#whats-next)

## The Problem

In recent times, after the advent of LLMs, there has been a distinct surge in the applications of chat-based LLMs. We have been conditioned to rely on LLMs for our daily tasks. From writing a letter to building scalable applications, LLMs like Chat-GPT, Bard, Llama etc. have become the go-to tools for all our needs. The most complex of tasks, such as writing code or constructing queries have become a breeze. One of the common ones is to generate or construct SQL queries.

## Prompt Engineering

*"Prompt engineering is the process of structuring text that can be interpreted and understood by a generative AI model. A prompt is natural language text describing the task that an AI should perform".* (Source: [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering))

In the realm of AI, SQL query generation utilizes prompt engineering: a prompt, essentially a natural language query, is inputted into the AI model, which in turn generates the SQL query. For accurate query generation, the model necessitates training on an extensive dataset containing questions paired with their respective SQL queries.

While Language Models (LLMs) are trained on vast text datasets, they aren't specifically tailored for SQL query generation on a particular dataset. Consequently, to generate SQL queries, the model requires access to the dataset. Another viable approach involves fine-tuning the model using a dataset comprising questions and their corresponding SQL queries. However, this method becomes challenging, especially with larger datasets.

Some of the popular models for SQL query generation are:

### Lang Chain SQL Generator

Lang Chain has a dedicated module for SQL query generation. The module is called `langchain.chat_models.ChatOpenAI`. To generate a SQL query from a DB, a short Python code may look like this:

```python
model = ChatOpenAI()

sql_response = (
    RunnablePassthrough.assign(schema=get_schema)
    | prompt
    | model.bind(stop=["\nSQLResult:"])
    | StrOutputParser()
)

sql_response.invoke({"question": "How many employees are there?"})

```
The function uses the schema of the db to generate an SQL and then runs the query to get the result. This is part of a code section to generate SQL from plain text. The full code can be found here: [*Reference*](https://python.langchain.com/docs/expression_language/cookbook/sql_db)

### SQL Coder

Defog's SQLCoder is a state-of-the-art LLM for converting natural language questions to SQL queries. SQLCoder is a 15B parameter model that slightly outperforms GPT-3.5-turbo for natural language to SQL generation tasks on the 'sql-eval' framework and significantly outperforms all popular open-source models. It also significantly outperforms text-davinci-003, a model that's more than 10 times its size.

SQLCoder is fine-tuned on a base StarCoder model. Defog was trained on more than 20,000 human-curated questions. These questions were based on 10 different schemas. None of the schemas in the training data were included in the evaluation framework. [Reference](https://github.com/defog-ai/sqlcoder)

While these methods demonstrate effective performance, a notable drawback is their reliance on datasets to generate SQL queries. This poses a significant concern due to the potential sensitivity of the dataset. Sharing this data with the AI layer could result in a breach of confidentiality, potentially compromising user privacy.

## RAG pipelines

A recent addition to the NLP landscape is the RAG (Retrieval Augmented Generation) pipeline. This involves retrieving **relevant documents** from a large corpus and then using a generator to generate the answer. Retrieval-Augmented Generation (RAG) is the concept to provide LLMs with additional information from an external knowledge source. This allows them to generate more accurate and contextual answers while reducing hallucinations.

**Advantages of RAG pipelines:**

The retriever **only provides the relevant data** to the generator. This
- reduces the amount of data that the generator has to process,
- improves the accuracy of the generator as it hallucinates less, and
- **protects the privacy of the data**.

Some of the recent RAG pipelines are:

### Lang Chain

Lang chain also implements dedicated workflows using RAG pipelines. The data is stored in a vectorstore and the retriever is a FAISS index. The generator is a LLM. A code snippet to generate SQL from plain text using RAG pipelines looks like this:

```python
vector store = FAISS.from_texts(
    ["Harrison worked at Kensho"], embedding=OpenAIEmbeddings()
)
retriever = vectorstore.as_retriever()

template = " Answer the question based only on the following context:
{context}

Question: {question}
"""
prompt = ChatPromptTemplate.from_template(template)

model = ChatOpenAI()

chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt
    | model
    | StrOutputParser()
)

chain.invoke("where did harrison work?")
```

The code attempts to create a vector of data and then uses the vector to retrieve the answer. The generator breaks down the question into words and then generates a vector for each word. The dataset is then searched for the nearest vectors and **only** the relevant data is sent to the AI model to generate the SQL query.

The full code can be found here: [*Reference*](https://python.langchain.com/docs/expression_language/cookbook/retrieval)

### Llama index

Lang chain follows a similar RAG pipeline. In Llama Index, a query engine is a generic interface that allows you to ask questions about your data.

A query engine takes in a natural language query and returns a rich response. It is most often (but not always) built on one or many indexes via retrievers. You can compose multiple query engines to achieve more advanced capability.

```python
# paul_graham_essay.txt
documents = SimpleDirectoryReader("data").load_data()
index = VectorStoreIndex.from_documents(documents)

query_engine = index.as_query_engine()
response = query_engine.query("Who is Paul Graham.")

To stream response:

query_engine = index.as_query_engine(streaming=True)
streaming_response = query_engine.query("Who is Paul Graham.")
streaming_response.print_response_stream()
```

Here, the essay is vectorized, and then the query engine is used to generate the answer. The full code can be found here: [*Reference*](https://docs.llamaindex.ai/en/stable/getting_started/starter_example.html).

An RAG (Retriever-Generator) pipeline comprises two core components: a retriever and a generator. In this setup, the retriever functions as a vector store, while the generator is typically an AI model, often an LLM. Their collaboration involves the retriever's task of extracting pertinent data from the vector store based on the question, followed by the generator's role in crafting the answer.

The retriever's operation involves comparing the vector representation of the question with the vectors of stored data, identifying and returning the most relevant or nearest data match. Subsequently, the generator utilizes this retrieved data to produce the answer requested.

Picture this: you need SQL queries for your database's data. Usually, an AI or LLM needs the dataset or context to generate these queries. But here's the catch – sharing sensitive data with the AI layer might not be safe. The data might be leaked, and the privacy of the users might be compromised. You would not want to share your data with the AI layer.

## Neak

Neak solves this problem by generating SQL queries from natural language questions without letting LLM touch the actual data. It uses an RAG pipeline to generate SQL queries from natural language questions. 

Neak achieves this by:
- Chunking only the **schema** of the database and not the actual data. 
- Setting the chunk size efficiently. A single chunk corresponds to a single table in the database. The chunk size is small enough to not leak any sensitive information. 
- Using a sub-querying engine to generate better prompts from the original query/ question.


... to be continued ( working on the psuedo code and the explaining the implementation)

<!-- 
### Chunking
### Prompt Engineering
-->

## What's next?

RAG pipelines are not perfect. Neak is a fine model, but not ready for production yet. It is in a nascent stage and requires a lot of refinement. Some of the issues that I faced are:

- GPT-3.5 turbo and GPT-4  hallucinated a lot. The models need to be trained more to reduce hallucinations. I am planning to use StarCoder instead.
- prompt engineering proved to be better than chunking. The prompts and service prompts are not efficient enough. It results in a lot of false positives. I am planning to use a better service message. I am still figuring out how to improve prompts and service prompts.
- there is no context stored. I am planning to use a context store to store the context of the user. Or, I might use a chat-based approach and build the context from the chat.

While alternatives like Defog's SQLcoder, which operates locally using Huggingface's transformers, resolve data leakage concerns, their complex setup poses usability . Technically, the most apt way to generate SQL queries is using RAG pipelines with fine-tuned models. I might pick this up later. For now, I am working on a better prompt engineering and context store.