---
title: 'System Design & Architecture for cbrtl'
date: "01-05-2024"
description: "Things to consider while building a system"
draft: false
index: false
tag: "tech"
---

Considering scalability, fault tolerance, security, and monitoring, you could broadly think about the following:

## Scalability

1. A Microservice Architecture: This is where you split your application into multiple services, each handling a specific task. Each service is independent of the other, and communicates with the other services. This is a good way to scale your application, and make it fault-tolerant.

	 This architecture helps you scale your application horizontally, and make it fault-tolerant. You could have multiple instances of the same service running, and if one fails, the other takes over.

2. A Monolithic Architecture: This is where you build your entire application in a single service. This is easier to build, and deploy, but harder to scale.

 	This helps you scale vertically, and is easier and quicker to build. You could have a single instance of the service running, and if it fails, you could restart it.

	| Aspect            | Monolithic Architecture | Microservices Architecture |
	|-------------------|-------------------------|----------------------------|
	| Structure         | Single, large application with all components tightly integrated | Multiple small services, each responsible for specific business functions |
	| Deployment       | Entire application deployed as a single unit | Services can be independently deployed, updated, and scaled |
	| Scalability      | Scaling requires replicating the entire application | Scaling can be done selectively for individual services |
	| Development      | One team typically works on the entire application | Different teams can work on separate services, allowing for faster development |
	| Technology Stack | Typically limited to a single technology stack | Each service can use different technology stacks, chosen based on requirements |
	| Fault Tolerance  | Failure in one module can bring down the entire application | Failures are isolated to specific services, reducing the impact on the overall system |
	| Complexity        | Simpler to understand and develop initially | Higher complexity due to distributed nature and inter-service communication |
	| Dependency       | Tight coupling between modules | Loose coupling between services, allowing for easier maintenance and updates |
	| Testing            | Testing the entire application can be complex | Services can be tested independently, facilitating easier testing and debugging |

	The best solution often is a combination of both the architectures. You could have a monolithic application, and then split it into multiple services as you grow. This is what most companies do.

3. A Message Queue: This is where you have a queue of messages, and each service reads from the queue, processes the message, and then sends it to the next service. This is a good way to handle asynchronous communication between services.

- Use Cases: Asynchronous communication between distributed systems, reliable message delivery, load leveling, and buffering.
- Examples: RabbitMQ, Apache ActiveMQ, Amazon SQS (Simple Queue Service).
- Suitable for: Task scheduling, job queues, order processing, workflow management, ensuring message delivery.

4. A Pub-Sub System: A publisher sends messages to a topic, and multiple subscribers receive messages from the topic. This is a good way to handle real-time communication between services.

- Use Cases: Real-time event-driven architectures, decoupling of components, broadcasting messages to multiple subscribers.
- Examples: Apache Kafka, RabbitMQ, Amazon SNS (Simple Notification Service).
- Suitable for: Event sourcing, logging and monitoring, real-time analytics, microservices communication, IoT data ingestion.

 A brief overview:

- Pub-Sub systems are designed for broadcasting messages to multiple subscribers (one-to-many), where subscribers express interest in specific topics or channels. They're often used in scenarios requiring real-time event-driven communication and are highly scalable.
- Message Queues, on the other hand, facilitate point-to-point (one-to-one) communication, where messages are sent to specific queues and consumed by exactly one consumer. They're focused on ensuring reliable message delivery and are commonly used for asynchronous communication, load leveling, and decoupling components.

## Databases

5. A Database: This is where you store the data. There are broadly two kinds: a SQL based and a NOSQL databse. The choice of a databse is hugely dependent on the use case.

 	You could use a SQL database, or a NoSQL database. You could use a relational database, or a non-relational database. You could use a database that is optimized for reads, or writes, or both based on what you need.

 Here's a brief overview:

- SQL Database (Relational Database Management System - RDBMS):
  - Use Cases: Structured data with complex relationships, transactions, and strict schemas.
  -Examples: MySQL, PostgreSQL, Oracle, SQL Server.
  - Suitable for: Financial transactions, e-commerce platforms, banking systems, accounting software.
- NoSQL Database:
  - Use Cases: Handling large volumes of unstructured or semi-structured data, distributed data models.
  - Examples: MongoDB, Cassandra, Redis, Couchbase.
  - Suitable for: Real-time analytics, content management systems, IoT applications, social networks, and mobile applications.
- Key-Value Stores:
  - Use Cases: Simple data models, high performance, and scalability.
  - Examples: Redis, DynamoDB.
  - Suitable for: Caching, session management, real-time bidding, gaming leaderboards.
- Document Stores:
  - Use Cases: Handling document-oriented data structures like JSON, XML, BSON.
  - Examples: MongoDB, Couchbase, CouchDB.
  - Suitable for: Content management systems, blogging platforms, user profiles, e-commerce product catalogs.
- Column-Family Stores (Wide-Column Stores):
  -Use Cases: Analytical workloads, time-series data, scalable and distributed storage.
  - Examples: Cassandra, HBase.
  - Suitable for: Big data analytics, time-series databases, recommendation systems.
- Graph Databases:
  - Use Cases: Representing and querying highly interconnected data, social networks, fraud detection, recommendation engines.
  - Examples: Neo4j, Amazon Neptune.
  - Suitable for: Social networks, recommendation engines, network and IT operations, fraud detection.

## Networking & Security

6. Load Balancers focus on distributing incoming traffic across multiple servers or instances to ensure scalability and fault tolerance. They operate at the network (Layer 4) or application (Layer 7) level and are primarily concerned with optimizing resource utilization and ensuring high availability.

- Use Cases: Distributing incoming network traffic across multiple servers or instances to ensure optimal resource utilization, scalability, and fault tolerance.
- Examples: NGINX, HAProxy, Amazon ELB (Elastic Load Balancer), Azure Load Balancer.
- Suitable for: Web servers, application servers, database servers, microservices architectures, high-traffic websites, and applications.

7. A Reverse Proxy is where how route the requests to the appropriate service. This is a good way to make sure that the application is secure, and fault-tolerant.

- Use Cases: Handling incoming client requests and routing them to appropriate backend servers or services, providing an additional layer of security, and improving performance by caching and compression.
- Examples: NGINX, Apache HTTP Server (with mod_proxy), HAProxy, Envoy Proxy.
- Suitable for: Web applications, APIs, microservices architectures, protecting backend servers from direct exposure to the internet, implementing SSL termination, load balancing, and content caching.


## Deploying

9. Continuous Integration/Continuous Deployment (CI/CD):
- Use Cases: Automating the process of building, testing, and deploying applications to ensure they are always up-to-date and running smoothly.
- Examples: Jenkins, GitLab CI/CD, CircleCI.
- Suitable for: Ensuring rapid and reliable software delivery, facilitating collaboration among development teams, maintaining code quality through automated testing and deployment pipelines.

10. Containerization:
- Use Cases: Packaging applications and their dependencies into containers to ensure consistent runtime environments across different platforms.
- Examples: Docker, containerd, Podman.
- Suitable for: Simplifying deployment, scaling, and management of applications, enabling portability and reproducibility, facilitating -  microservices architectures.

11. Container Orchestration:
- Use Cases: Managing and scaling containerized applications across a cluster of machines to ensure high availability, fault tolerance, and efficient resource utilization.
- Examples: Kubernetes, Docker Swarm, Amazon ECS (Elastic Container Service).
- Suitable for: Automating deployment, scaling, and management of containerized applications, providing self-healing capabilities, optimizing resource allocation, and ensuring consistent performance.

12. Domain Name System (DNS):
- Use Cases: Mapping domain names to IP addresses to enable users to access web applications and services through human-readable addresses.
- Examples: BIND, Google Cloud DNS, Amazon Route 53.
- Suitable for: Translating domain names to IP addresses, load balancing traffic across multiple servers, managing domain records and configurations.

13. Content Delivery Network (CDN):
- Use Cases: Caching content and serving it from the nearest edge server to improve performance, reduce latency, and enhance the scalability of web applications.
- Examples: Cloudflare, Akamai, Amazon CloudFront.
- Suitable for: Accelerating content delivery, mitigating DDoS attacks, optimizing bandwidth usage, improving user experience for globally distributed audiences.


## Monitoring

- Logging Framework:
- Use Cases: Capturing and recording events, errors, and activities within an application for troubleshooting, auditing, and monitoring purposes.
- Examples: Log4j, Logback, Winston (Node.js), Serilog (.NET).
- Suitable for: Generating structured logs with customizable formats, levels, and destinations, facilitating centralized logging and log aggregation.

There is a lot of information here, and it can be overwhelming. But, the key is to start small, and then grow as you need. You don't need to implement all of these at once. You could start with a monolithic application, and then split it into multiple services as you grow. You could start with a SQL database, and then move to a NoSQL database as you need. It is totaly understandable if you do not understand everything at once, that is also not expected. All of this will start making sense once you start building your application, and as you grow, you will learn more about what you need.
