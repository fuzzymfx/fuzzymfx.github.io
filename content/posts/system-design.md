---
title: 'System Design & Architecture for cbrtl'
date: "01-05-2024"
description: "Things to consider while building a system"
draft: true
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

 This helps you handle asynchronous communication between services, and makes sure that the messages are not lost. You could have multiple instances of the same service running, and if one fails, the other takes over.

4. A Pub-Sub System: This is where you have a publisher that sends messages to a topic, and multiple subscribers that read from the topic. This is a good way to handle real-time communication between services.

 This helps you handle real-time communication between services, and makes sure that the messages are not lost. You could have multiple instances
 of the same service running, and if one fails, the other takes over.

## Databases

5. A Database: This is where you store the data. You could use a SQL database, or a NoSQL database. You could use a relational database, or a non-relational database. You could use a database that is optimized for reads, or writes, or both.

 This helps you store the data, and make sure that it is secure. You could have multiple instances of the same service running, and if one fails, the other takes over.

6. A Cache: This is where you store the data temporarily, so that you can access it quickly. You could use a cache that is optimized for reads, or writes, or both.

 This helps you store the data temporarily, and make sure that it is secure. You could have multiple instances of the same service running, and if one fails, the other takes over.

## Networking & Security

7. A Load Balancer: This is where you distribute the load across multiple instances of the same service. This is a good way to make sure that the application is scalable, and fault-tolerant.

 This helps you distribute the load across multiple instances of the same service, and make sure that the application is scalable, and fault-tolerant. You could have multiple instances of the same service running, and if one fails, the other takes over.

8. A Reverse Proxy: This is where you route the requests to the appropriate service. This is a good way to make sure that the application is secure, and fault-tolerant.

 This helps you route the requests to the appropriate service, and make sure that the application is secure, and fault-tolerant. You could have multiple instances of the same service running, and if one fails, the other takes over.

<!-- You could also have a cache, and a database, and a message queue, and a pub-sub system, and a load balancer, and a reverse proxy, and a firewall, and a VPN, and a CDN, and a WAF, and a DDoS protection, and a monitoring system, and a logging system, and a CI/CD pipeline, and a containerization system, and a container orchestration system, and a service mesh, and a secret manager, and a configuration manager, and a DNS, and a domain, and a certificate, and the list goes on. -->

## Deploying

9. Continuous Integration/ Continuous Deployment: This is where you automate the process of building, testing, and deploying the application. This is a good way to make sure that the application is always up-to-date, and running smoothly.

 This helps you automate the process of building, testing, and deploying the application, and make sure that it is always up-to-date, and running smoothly. You could have multiple instances of the same service running, and if one fails, the other takes over.

10. Containerization: This is where you package the application, and its dependencies, into a container. This is a good way to make sure that the application runs the same way, regardless of the environment.

 This helps you package the application, and its dependencies, into a container, and make sure that it runs the same way, regardless of the environment. You could have multiple instances of the same service running, and if one fails, the other takes over.

11. Container Orchestration: This is where you manage the containers, and make sure that they are running smoothly. This is a good way to make sure that the application is always up-to-date, and running smoothly.

 This helps you manage the containers, and make sure that they are running smoothly. You could have multiple instances of the same service running, and if one fails, the other takes over.

12. Domain Name System: This is where you map the domain name to the IP address of the server. This is a good way to make sure that the application is accessible through the internet.

 This helps you map the domain name to the IP address of the server, and make sure that the application is accessible through the internet. You could have multiple instances of the same service running, and if one fails, the other takes over.

13. Content Delivery Network: This is where you cache the content, and serve it from the nearest server. This is a good way to make sure that the application is fast, and responsive.

 This helps you cache the content, and serve it from the nearest server, and make sure that the application is fast, and responsive. You could have multiple instances of the same service running, and if one fails, the other takes over.

## Monitoring

14. A Logging System: This is where you monitor the application, and make sure that it is running smoothly. This is a good way to make sure that the application is always up-to-date, and running smoothly.

 This helps you monitor the application, and make sure that it is running smoothly. You could have multiple instances of the same service running, and if one fails, the other takes over.