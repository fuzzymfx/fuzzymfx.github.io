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
	- [RAG pipelines](#rag-pipelines)
		- [Lang Chain](#lang-chain)
		- [Llama index](#llama-index)
		- [SQL Coder](#sql-coder)
- [Neak](#neak)
	- [Chunking](#chunking)
	- [Prompt Engineering](#prompt-engineering)
- [What's next?](#whats-next)

## The Problem

In recent times, after the advnet of LLMs there is a distinct surge in the applications of chat based LLMs. We have been conditioned to rely on LLMs for our usual tasks. From writing a letter to building scalable applications, LLMs like Chat-GPT, Bard, and Llama etc. have become the go-to tools for all our needs. The most complex of tasks, such as writing code or constructing queries have become a breeze. Chat applications have multitude of use cases, and one of the common ones is to generate or construct SQL queries.

## Prompt Engineering

*"Prompt engineering is the process of structuring text that can be interpreted and understood by a generative AI model. A prompt is natural language text describing the task that an AI should perform".* (Source: [Wikipedia](https://en.wikipedia.org/wiki/Prompt_engineering))

In the realm of AI, SQL query generation utilizes prompt engineering: a prompt, essentially a natural language query, is inputted into the AI model, which in turn generates the SQL query. For accurate query generation, the model necessitates training on an extensive dataset containing questions paired with their respective SQL queries.

While Language Models (LLMs) are trained on vast text datasets, they aren't specifically tailored for SQL query generation on a particular dataset. Consequently, to generate SQL queries, the model requires access to the dataset. Another viable approach involves fine-tuning the model using a dataset comprising questions and their corresponding SQL queries. However, this method becomes challenging, especially with larger datasets.

### Lang Chain SQL Generator

Lang Chain has a dedicated module for SQL query generation. The module is called `langchain.chat_models.ChatOpenAI`. To generate a SQL query from a DB, a short python code may look like this:

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
The function uses the schema of the db to generate a SQL and then runs the query to get the result. This is part of a code section to generate SQL from plain text. The full code can be found here: [*Reference*](https://python.langchain.com/docs/expression_language/cookbook/sql_db)

## RAG pipelines

A recent addition to the NLP landscape is the RAG (Retrieval Augmented Generation) pipeline. This invlolves retrieving relevant documents from a large corpus and then uses a generator to generate the answer. The retriever undergoes training on a vast repository of documents, while the generator is honed on a comprehensive compilation of questions and corresponding answers.

An RAG (Retriever-Generator) pipeline comprises two core components: a retriever and a generator. In this setup, the retriever functions as a vector store, while the generator is typically an AI model, often an LLM. Their collaboration involves the retriever's task of extracting pertinent data from the vector store based on the question, followed by the generator's role in crafting the answer.

The retriever's operation involves comparing the vector representation of the question with the vectors of stored data, identifying and returning the most relevant or nearest data match. Subsequently, the generator utilizes this retrieved data to produce the answer requested.

### Lang Chain

Lang chain also implements dedicated workflows using RAG pipelines. The data is stored in a vectorstore and the retriever is a FAISS index. The generator is a LLM. A code snippet to generate SQL from plain text using RAG pipelines looks like this:

```python
vectorstore = FAISS.from_texts(
    ["harrison worked at kensho"], embedding=OpenAIEmbeddings()
)
retriever = vectorstore.as_retriever()

template = """Answer the question based only on the following context:
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

The code attempts at creating a vector of data and then uses the vector to retrieve the answer. The generator breaks down the question into words and then generates vector for each word. The dataset is then searched for the most nearest vectors and **only** the relevant data is sent to the AI model to generate the SQL query.

The full code can be found here: [*Reference*](https://python.langchain.com/docs/expression_language/cookbook/retrieval)

### Llama index

### SQL Coder

Picture this: you need SQL queries for your database's data. Usually, an AI or LLM needs the dataset or context to generate these queries. But here's the catch – sharing sensitive data with the AI layer might not be safe. The data might be leaked, and the privacy of the users might be compromised. You would not want to share your data with the AI layer.

## Neak

Neak solves this problem by generating SQL queries from natural language questions without letting LLM touch the actual data. Neak uses the RAG pipeline to generate SQL queries from natural language questions. The retriever undergoes training on a vast repository of documents, while the generator is honed on a comprehensive compilation of questions and corresponding answers.

### Chunking

### Prompt Engineering

## What's next?