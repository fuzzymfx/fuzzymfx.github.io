---
title: 'Becoming a Software Engineer: A coursework'
date: "01-05-2024"
description: "This is how I would go about teaching software engineering, if I were to teach it."
draft: true
tag: "tech"
---

I recently stumbled upon an interesting offer to start something new; build a platform that aims at sharing my experience of getting into software engineering. While fundamentally I want to impart knowledge for free, I also do not have enough time to sit with everybody and teach them. Hence, this idea of crafting a self-sustaining curriculum capable of imparting software engineering skills to anyone keen on learning seemed apt.

This became the guiding principle behind *backendhire*, the platform I was asked to build.

This curriculum is designed to be self-sustaining; a collection of resources freely available on the internet. The idea is to curate these resources and present them in a structured manner. The entire point of this article is to share what exactly I did that landed me in the current position that I am in now. Comprehend this however you will; a guide to getting a job, or become a bettter engineer in general. **This is how I became a software engineer.**

One more thing to note is that this is designed in the *ultimate*, *hard-code* tire difficulty. The platform, in the other hand, has variable difficulty levels, and you could choose the one that suits you the best. 

## The Curriculum

1. **The Basics**: Familiarize yourself with the basics; programming languages, data structures, and algorithms, design patterns, etc. Not knowing how to drive, but buying a GT3 RS is a waste of money. Learning to drive in a Hyundai would be a good start. The job market is cruel, it makes you emphasize on Nuxt, React, Node, Pandas, Django, Kafka, and what-not, but it wouldn't help until you know how to parse a column in *Pandas dataframe* as *Datetime* and process it, or how to push async messages in a queue and handle them in a worker thread. We would start off with an online platform like [LeetCode](https://leetcode.com)/ HackerRank[https://hackerrank.com], and then move on to building stuff.

	After you're god-tier python or ts dev, writing clean, efficient, and maintainable code, writing lambda functions, higher-order functions and closures, you should be well off working with tech. This includes topics like databases, web development/ machine learning. With the basics, it wouldn't be difficult to comprehend these. They start off scary, but are pretty simple once you get the hang of it.

	This step also requires you to start building stuff parallelly. React may look like it's just `npx create-react-app`, `npm start`, and a bunch of useless `useStates`, `useEffects`, and `props`, but it's not. It's about building a component library, a design system, with a bunch of hooks, and a bunch of context providers, a full-fledged application that can handle a million users.

2. **The Advanced**: After you've built your first to-do app, you feel contempt, proud, wiping off the sweat off your forhead. You'd want to post on LinkedIn, share you code, manage it on GitHub, and show it off to your friends. This is where it gets interesting.

	This is where you start to think about the architecture of your application, how to make it scalable, fault-tolerant, and secure. You'd want to monitor your application, and make sure it's running smoothly. You would not want anybody accesing your data, securing them, allowing only a selected few to access it. The differences between a monolith and a microservice architecture help.

The difference between the platform I am building, and this curriculum is that I would be writing code, building this right with you, and you'd be able to live the entire process from two perspectives, and gaining much more insight from start to finish. While following this curriculum, you'd be doing it yourself. I'd still be available to help you out in anyway I could.

- [Languages](#languages)
- [Problem Solving/ Data Structures](#problem-solving-data-structures)
- [Building](#building)
	- [Clean, efficient code](#clean-code)
	- [Libraries & Frameworks](#libraries-frameworks)
	- [Design & Architecture](#design-architecture)
- [Databases](#databases)
- [Deploying](#deploying)
- [Scaling](#scaling)
- [Networking & Security](#networking)
- [Monitoring](#monitoring)
- [Next?](#next)

### Clean, efficient code

We'd start by learning to write code. This involves you to learn the basics of a programming language, and start solving a few problems to get the hang of it.

I'd be choosing *C++* here. Despite being categorized as a high-level language, it retains a lower-level essence when compared to the likes of Python or JavaScript/TypeScript. With its manual memory management and requirement to construct everything from scratch, C++ fosters a deeper understanding of coding principles. You become less reliant on pre-existing libraries and functions, thereby honing your coding prowess.

This doesn't mean that choosing anything else makes you lethargic. You could still choose what you want and proceed to write everythng yourself, and not use built in fucntions or libraries, it wouldn't matter. I choose C++ because it is the first programming language that I have learnt.

#### Languages

**Pick up a language, and stick to it**. Python, JavaScript, Java *(well, not Java, that is shit. "But, but, but....." shhhhhhh.)*, C++, Go, Rust, etc. are all good choices. In the long run, it doesn't matter which language you pick. Real world applications require you to know the basics, and learn the rest on the go.

We start by getting into the [documentation](https://devdocs.io/cpp/), learning the basics, and then moving on to practicing. There are a ton of tutorials on Youtube that help you learn C++. I am sharing a few here that I followed while I was learning to code.

We'd not be following anything mentioned above. The problem with visual based learning is that it is **inherently slow**; I am trying to make this process more efficient and sharing everything you need to know to get started. Here's a comprehensive guide on C++:

##### C++

- 
- 
- 
-


##### Hackerrank

To get the hang of C++, we'd start with Hackerrank and try to reach *five star* with it. Hackerrank has mulitple levels, and each level is associated with a significant information jump regarding a language. We'd start with the basics, and then move on to the advanced topics.
 
#### Problem Solving/ Data Structures

At this stage, we're good to improve **problem solving and critical thinking**, and there are mulitple ways to develop this. You could go ahead and follow the [industry standard](https://leetcode.com), or do [what I did](https://github.com/fuzzymx).

We'd be doing a mix of both. We'd start off with LeetCode, and then parallelly move on to building stuff.

##### LeetCode

Some of the most popular sought after LeetCode problems are:

- [This 200 list of problems I found somewhere on the internet]()
- [SDE sheet by Striver]()
- [450 questions by Love Babbar]()

There's no particular order in which you should solve these problems. You could start with the easy ones, and then move on to the hard ones. The idea is to get the hang of it, and then move on to building stuff. With our curriculum, we'd be following a currated mix of all of these; we'd be solving some problems from all of these lists. The number depends on the target you set. We could cover 250+ problems, or 100, or 50. It's upto you. There's no single way to do this.

### Building

We'd be looking at building entireley new applications from the scratch, deploying them to a server, making them accessible through the internet, or maybe using a serverless architecture. We can get a domain, and host it on a server, or use a cloud provider like AWS, GCP, or Azure, if you want.

I have curated a list of 9-12 projects that we could build together. The list keeps on changing, same as with the DSA list.