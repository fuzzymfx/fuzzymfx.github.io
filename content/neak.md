---
title: 'Neak: An NL2SQL engine'
date: "2023-12-10"
description: "Neak is a natural language to SQL engine that uses the RAG model to generate SQL queries from natural language questions."
---

In the realm of AI, it is evident that for those without technical expertise, the desire to steer away from coding or constructing intricate queries has intensified. You would not want to code/ write complex queries anymore to get results. The advent of large language models has conditioned us to prioritize results. We do not want to do the manual labor of writing code or queries, we now tend to present a cluster of questions, offer contextual details, and allow GPT and similar tools to handle the rest. A recent addition to this landscape is the RAG (Retrieval Augmented Generation) model. This invlolves retrieving relevant documents from a large corpus and then uses a generator to generate the answer. The retriever undergoes training on a vast repository of documents, while the generator is honed on a comprehensive compilation of questions and corresponding answers.

However, a challenge arises when we seek to safeguard our data from direct interaction with the LLM layer. Neak expands upon the RAG framework by specializing in generating SQL queries from natural language inquiries without letting LLM touch the actual data.

*Caveat: This is a work in progress. The code is not yet available for public use. Below is a brief overview of the project.*

- [The Problem](#the-problem)
- [Prompt Engineering](#prompt-engineering)
	- [Lang Chain](#lang-chain)
- [RAG models](#rag-models)
	- [Llama index](#llama-index)
	- [SQL Coder](#sql-coder)
- [Neak](#neak)
	- [Chunking](#chunking)
	- [Prompt Engineering](#prompt-engineering)
- [What's next?](#whats-next)

*To be Continued...*