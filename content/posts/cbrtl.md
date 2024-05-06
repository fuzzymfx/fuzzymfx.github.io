---
title: 'cbrtl: a coding community'
date: "01-05-2024"
description: "This is how I would go about teaching software engineering if I were to teach it."
draft: false
tag: "tech"
---

I was offered to start an interesting venture: to curate a course for software engineering and to build a platform that aims at sharing my experience of getting into software engineering. Tons of platforms provide the same, but none of them are as comprehensive as I would like them to be. While fundamentally I want to impart knowledge for free, I also do not have enough time to sit with everybody and teach them. Hence, this idea of crafting a self-sustaining curriculum capable of imparting software engineering skills to anyone keen on learning seemed apt.

This became the guiding principle behind *cbrtl*, the platform I am building. Initially, [Srijan](https://injuly.in) and I thought of starting cbrtl, an open-source cult that comes together as a community to build fun stuff together.

This curriculum is designed to be self-sustaining: a collection of resources freely available on the internet. The idea is to curate these resources and present them in a structured manner. Comprehend this however you will; a guide to getting a job, or becoming a better engineer in general. **This is how I became a software engineer.**

## The Curriculum

1. **The Basics**: Familiarize yourself with the basics; programming languages, data structures, and algorithms, design patterns, etc. Not knowing how to drive, but buying a GT3 RS is a waste of money. Learning to drive in a Hyundai would be a good start. The job market is cruel, it makes you emphasize Nuxt, React, Node, Pandas, Django, Kafka, and what-not, but it wouldn't help until you know how to parse a column in *Pandas dataframe* as *Datetime* and process it, or how to push async messages in a queue and handle them in a worker thread. We would start off with an online platform like [LeetCode](https://leetcode.com) / [HackerRank](https://hackerrank.com), and then move on to building stuff.

    You can become a god-tier Python or TS dev, writing clean, efficient, and maintainable code, writing lambda functions, higher-order functions and closures while working with tech like databases, web development/ machine learning. With the basics cleared, it wouldn't be difficult to comprehend these. They start off scary but are pretty simple once you get the hang of it.

    This step also requires you to start building stuff parallelly. React may look like it's just `npx create-react-app`, `npm start`, and a bunch of useless `useStates`, `useEffects`, and `props`, but it's not. It's about building a component library, a design system, with a bunch of hooks, a bunch of context providers, and a full-fledged application that can handle a million users.

2. **The Advanced**: After you've built your first to-do app or your first ML model that predicts movie ratings, or maybe an FPS game, you feel contempt and proud, wiping the sweat off your forehead. You'd want to post on LinkedIn, share your code, manage it on GitHub, and show it off to your friends. This is where it gets more interesting.

    This is where you start to think about the architecture of your application, and how to make it scalable, fault-tolerant, and secure. You'd want to monitor your application, and make sure it's running smoothly. You would not want anybody accessing your data, securing them, and allowing only a selected few to access it. The differences between a monolith and a microservice architecture help.

<!-- The difference between the platform I am building, and this curriculum is that I would be writing code, building this right with you, and you'd be able to live the entire process from two perspectives and gain much more insight from start to finish. -->

While following this curriculum, you'd be doing it yourself. I'd still be available to help you out in any way I could.

- [Languages](#languages)
- [Problem Solving/ Data Structures](#problem-solving-data-structures)
- [Building](#building)
- [System Design & Architecture](#system-design-architecture)
- [Resume](#resume)
- [Next?](#next)

We'd start by learning to write code. This involves you to learn the basics of a programming language, and start solving a few problems to get the hang of it.

I'd be choosing *C++* here. Despite being categorized as a high-level language, it retains a lower-level essence when compared to the likes of Python or JavaScript/TypeScript. With its manual memory management and requirement to construct everything from scratch, C++ fosters a deeper understanding of coding principles. You become less reliant on pre-existing libraries and functions, thereby honing your coding prowess.

This doesn't mean that choosing anything else makes you lethargic. You could still choose what you want and proceed to write everything yourself, and not use built-in functions or libraries, it wouldn't matter. I choose C++ because it is the first programming language that I have learnt.

### Languages

**Pick up a language, and stick to it**. Python, JavaScript, Java *(well, not Java, that is shit. "But, but, but....." shhhhhhh.)*, C++, Go, Rust, etc. are all good choices. In the long run, it doesn't matter which language you pick. Real-world applications require you to know the basics and learn the rest on the go.

We start by getting into the [documentation](https://devdocs.io/cpp/), learning the basics, and then moving on to practising. There are a ton of tutorials on YouTube that help you learn C++. I am sharing a few here that I followed while I was learning to code:

- [C++ Tutorial for Beginners - Learn C++ in 1 Hour](https://youtu.be/ZzaPdXTrSb8?si=hD1z12yg6trfLPrs)
- [C++ Crash Course For Beginners](https://www.youtube.com/watch?v=1v_4dL8l8pQ&t=4s&pp=ygUQYysrIGNyYXNoIGNvdXJzZQ%3D%3D)
- [C++ Tutorial for Beginners - Full Course](https://www.youtube.com/watch?v=vLnPwxZdW4Y&t=528s&pp=ygUQYysrIGNyYXNoIGNvdXJzZQ%3D%3D)  
[*More...*](https://www.youtube.com/results?search_query=c%2B%2B+crash+course)  

We'd not be following anything mentioned above. The problem with visual-based learning is that it is **inherently slow**; I am trying to make this process faster and more efficient by sharing everything you need to know to get started. Here's a comprehensive guide on `C++`, and `stdlib`:

[**C++ for cbrtl**: a short guide to getting started with cbrtl ->](/blog/c++.html)

To get the hang of C++, let's start with HackerRank or Leetcode. Each platform has multiple levels, and each level is associated with a difficult jump.

### Problem Solving/ Data Structures

Moving on to **problem-solving and critical thinking**, there are multiple ways to develop this. You could go ahead and follow the [industry standard](https://leetcode.com), or do [what I did](https://github.com/fuzzymx). To approach a problem, you need to think about how to approach the problem, and then write code to solve it. This is where you'd want to learn about data structures and algorithms.

Here is one that teaches you Data Structures using C++: [C++ Full Course | C++ Tutorial | Data Structures & Algorithms](https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ)

Some of the most popular sought-after LeetCode problems are:

- [This 200 list of problems I found somewhere on the internet](https://github.com/fuzzymfx/LC-200/blob/main/Leetcode%20Questions%20-%20200.xlsx)
- [SDE sheet by Striver](https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/)
- [450 questions by Love Babbar](https://github.com/fuzzymfx/DSA-450/blob/main/Final-450.pdf)

There's no particular order in which you should solve these problems. You could start with the easy ones, and then move on to the hard ones. The idea is to get the hang of it, and then move on to building stuff. With our curriculum, we'd be following a curated mix of all of these; we'd be solving some problems from all of these lists. The number depends on the target you set. We could cover 250+ problems, or 100, or 50. It's up to you. There's no single way to do this.

I haven't completed all, this also essentially helps me as well. I could try solving the unsolved at my end in real-time with you. Here are my repos for the same, feel free to track my progress:

- [LC200](https://github.com/fuzzymfx/LC-200/)
- [DSA450](https://github.com/fuzzymfx/DSA-450/)
- [Striver's SDE Sheet](https://github.com/fuzzymfx/SDE-sheet)

DSA is vast and takes a lot of space. Resouces are scattered all over the internet. The ones that I have come across are either too verbose, or too concise We'd be following our in-house comprehensive guide to getting started with DSA:

[**DSA for cbrtl**: a comprehensive guide to getting started with most common data structures and algorithms ->](/blog/dsa.html) (*under construction*)

Parallelly, we'd be doing what I initially did to get into the industry. Build.

### Building

We'd be looking at building entirely new applications from scratch, deploying them to a server, making them accessible through the internet, or maybe using a serverless architecture. We can get a domain, and host it on a server, or use a cloud provider like AWS, GCP, or Azure, if you want.

Coming to building projects, you can have various interests and domains. You could be wanting to become a game developer, a data scientist, a web developer, or a backend developer. This article is a common guide for all of these. I'd primarily be focusing on application development and backend development in this article. Nevertheless, I'd be sharing resources for ML and AI as well; I have worked on quite a few projects in these domains.

I have curated a list of 9-12 projects that we could build together. The list keeps on changing, the same as with the DSA list. These include common topics, such as application dev, game dev, and ML/ AI, etc. All of these can be found on the internet. I'll explain a couple of projects here, and we could build the rest together.

A common starting point would be getting familiar with the language you want to build your project in. You could start off with a simple project, and then move on to more complex ones. Here are a few projects that I have built:

- Web:
  <span id="react-system-design"></span>
  - [A college resource-sharing platform built using Firebase and React](https://resoc.in)
  - [A decentralized chat application built using Svelte and GunJS](https://w3bchat-fadfa.web.app/)
  - [An API to generate random avatars](https://api.nicedear.vip/)
  - [A static site generator, zuzu](https://github.com/fuzzymfx/zuzu)
- Commandline:
  - [A command line tool to present presentations written in markdown](https://github.com/fuzzymfx/dough.git)
  - [A chat server](https://github.com/fuzzymfx/rust-tokio-chat-server)
- Machine Learning:
  - A [movie rating prediction](https://github.com/fuzzymfx/Movie-rating-prediction), and a [movie recommendation system](https://github.com/fuzzymfx/Movie-recommendation)
  - [Depression detection in tweets](https://github.com/fuzzymfx/Detecting-Depression-in-Tweets)
  - [An examination marks predictor](https://github.com/fuzzymfx/Marks-predictor) 
  - [Bird migration analysis over the west coast from SA to NA](https://github.com/fuzzymfx/Bird-Migration-data-analysis)
- Application Development:
  - [Fitness planner application](https://github.com/fuzzymfx/fitness-videoplayer)
  - [A minimal task manager](https://github.com/fuzzymfx/flutter-golang-taskapp)

Here are some of the projects that we'll be building here:

1. [A tiny cmd-line bit-torrent client written in TypeScript](/blog/bee.html) (*under construction*)
2. [A distributed chat application written in Rust and Svelte](/blog/druss.html) (*under construction*)

### System Design & Architecture

While building your distributed chat server, or asocial-media applications like Facebook, a smart parking system with ANPR detection and object detection using security cameras, or a content recommendation system like Netflix, you'd want to think about the architecture of your application. You could build a single monolithic application, a distributed microservice architecture, a message queue, a pub-sub system, a database, or a cache. 

Some of the things you could think about are:

- What happens if there are tens of thousands of requests coming in every second? How do you make sure there is no downtime?
- What if the server crashes?
- How do you make sure that the user data is secure?
- What could be the schema of the database? Should you use an SQL or a NoSQL database?
- How do you make sure the data is secure? What if there is a DDoS attack?
- How do you monitor the application? What if there is a bug in the code?
- How do you deploy your application seamlessly?
- What if you do not want the entire Internet to access your data/ app?
- Do the current users like the user interface? How do you make sure that the UI is user-friendly? 

System designing is essential to build solid, production-grade applications. It makes sure that the application is equipped to handle whatever is thrown at it. We'd be deploying, scaling and building inherent architectures for all the projects that we build. For ex., the react-based college resource-sharing platform [⏎](#react-system-design) is deployed on Firebase, and the chat application is deployed on Netlify. The chat server is deployed on a VPS, and the movie rating prediction system is deployed on Heroku. This article makes it clear why these decisions were made.

[**System Design for cbrtl**: a comprehensive guide to designing your own system ->](/blog/system-design.html) gives you a comprehensive guide on how to design your own system.

### Resume

Your resume/ portfolio makes you stand out in the crowd. It is the first thing that a recruiter sees. **If** you're pursuing this curriculum to get a job, you'd want to make sure that your resume is top-notch. There are a lot of varied opinions on how to build a resume. Some say it should be a single page, some say it can be two pages, and some ask you to only put in things that you have worked on and not lie on your resume. In the end, it's up to you how you want to build it.

Resumes are highly subjective, and you can choose to build them however you want. I'm sharing mine here. In the end, your projects, work experience, and skills would speak for themselves. Your resume should effectively communicate what you have done, and what you can do. Make sure you can highlight what you've done and it stands out.

[**Resume Building for cbrtl**: a short guide to building your resume](/blog/resume.html) is what I followed to build my resume. 

## Next?

I hope this series of articles was verbose enough to help you get started. The idea was to share everything I had knowledge and hands-on experience on and help you get started on your journey to becoming a software engineer.

<!-- `cbrtl` is a platform that aims at sharing this experience with you, first-hand. We would be building stuff together, writing code, and sharing resources. This is just the beginning of a long journey. cbrtl is in a private beta, and I'll be sharing the link to the platform soon. I deeply value my time, and I am sure you do too. The initial fee would be minimal, to cover the costs of running the platform and for the tremendous amount of effort and time I'd be putting in. You could always choose to donate and contribute more to building the platform. Optionally, you could follow this guide and get started on your own. -->

I'll be writing more on this, and sharing more resources as we move on. If you have any questions, feel free to reach out below. I'd be happy to help you out.
