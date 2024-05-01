---
title: 'cbrtl: a community'
date: "01-05-2024"
description: "This is how I would go about teaching software engineering, if I were to teach it."
draft: true
tag: "tech"
---

I recently stumbled upon an interesting offer to start something new; build a platform that aims at sharing my experience of getting into software engineering. While fundamentally I want to impart knowledge for free, I also do not have enough time to sit with everybody and teach them. Hence, this idea of crafting a self-sustaining curriculum capable of imparting software engineering skills to anyone keen on learning seemed apt.

This became the guiding principle behind *cbrtl*, the platform I am building. Initially, [Srijan](https://injuly.in) and I thought of starting cbrtl, an open-soruce cult that comes together as a community to build fun stuff together.

This curriculum is designed to be self-sustaining; a collection of resources freely available on the internet. The idea is to curate these resources and present them in a structured manner. The entire point of this article is to share what exactly I did that landed me in the position that I am in now. Comprehend this however you will; a guide to getting a job, or becoming a better engineer in general. **This is how I became a software engineer.**

One more thing to note is that this is designed in the *ultimate*, *hard-tier* difficulty. The platform, on the other hand, has variable difficulty levels, and you could choose the one that suits you the best.

## The Curriculum

1. **The Basics**: Familiarize yourself with the basics; programming languages, data structures, and algorithms, design patterns, etc. Not knowing how to drive, but buying a GT3 RS is a waste of money. Learning to drive in a Hyundai would be a good start. The job market is cruel, it makes you emphasize Nuxt, React, Node, Pandas, Django, Kafka, and what-not, but it wouldn't help until you know how to parse a column in *Pandas dataframe* as *Datetime* and process it, or how to push async messages in a queue and handle them in a worker thread. We would start off with an online platform like [LeetCode](https://leetcode.com)/ HackerRank[https://hackerrank.com], and then move on to building stuff.

 You can become a god-tier Python or TS dev, writing clean, efficient, and maintainable code, writing lambda functions, higher-order functions and closures while working with tech like databases, web development/ machine learning. With the basics cleared, it wouldn't be difficult to comprehend these. They start off scary but are pretty simple once you get the hang of it.

 This step also requires you to start building stuff parallelly. React may look like it's just `npx create-react-app`, `npm start`, and a bunch of useless `useStates`, `useEffects`, and `props`, but it's not. It's about building a component library, a design system, with a bunch of hooks, a bunch of context providers, and a full-fledged application that can handle a million users.

2. **The Advanced**: After you've built your first to-do app, you feel contempt and proud, wiping the sweat off your forehead. You'd want to post on LinkedIn, share your code, manage it on GitHub, and show it off to your friends. This is where it gets more interesting.

 This is where you start to think about the architecture of your application, and how to make it scalable, fault-tolerant, and secure. You'd want to monitor your application, and make sure it's running smoothly. You would not want anybody accessing your data, securing them, and allowing only a selected few to access it. The differences between a monolith and a microservice architecture help.

The difference between the platform I am building, and this curriculum is that I would be writing code, building this right with you, and you'd be able to live the entire process from two perspectives and gain much more insight from start to finish. While following this curriculum, you'd be doing it yourself. I'd still be available to help you out in any way I could.

- [Languages](#languages)
  - [C++](/blog/c++.html)
- [Problem Solving/ Data Structures](#problem-solving-data-structures)
- [Building](#building)
- [System Design & Architecture](#system-design-architecture)
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
[*More...*](https://www.youtube.com/results?search_query=c%2B%2B+full+course)  
[*...*](https://www.youtube.com/results?search_query=c%2B%2B+crash+course)  

Here is one that teaches you Data Structures using C++:

- [C++ Full Course | C++ Tutorial | Data Structures & Algorithms](https://www.youtube.com/watch?v=z9bZufPHFLU&list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ)

We'd not be following anything mentioned above. The problem with visual-based learning is that it is **inherently slow**; I am trying to make this process faster and more efficient by sharing everything you need to know to get started. Here's a comprehensive guide on `C++`, and `stdlib`:

[C++ for cbrtl: a short guide to getting started with cbrtl ->](/blog/c++.html)

### Problem Solving/ Data Structures

To get the hang of C++, let's start with HackerRank or Leetcode Each platform has multiple levels, and each level is associated with a difficulty jump.

Once you are `3-5 starred` at HackerRank or have solved 40-50+ easy problems on LeetCode, we'd be good to move on.

Moving on to **problem-solving and critical thinking**, there are multiple ways to develop this. You could go ahead and follow the [industry standard](https://leetcode.com), or do [what I did](https://github.com/fuzzymx).

[DSA for cbrtl](/blog/dsa.html) is a comprehensive guide to solving problems, and building stuff.

We'd be doing a mix of both here. We'd start off with LeetCode, and then parallelly move on to building stuff.

Some of the most popular sought-after LeetCode problems are:

- [This 200 list of problems I found somewhere on the internet](https://github.com/fuzzymfx/LC-200/blob/main/Leetcode%20Questions%20-%20200.xlsx)
- [SDE sheet by Striver](https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/)
- [450 questions by Love Babbar](https://github.com/fuzzymfx/DSA-450/blob/main/Final-450.pdf)

There's no particular order in which you should solve these problems. You could start with the easy ones, and then move on to the hard ones. The idea is to get the hang of it, and then move on to building stuff. With our curriculum, we'd be following a curated mix of all of these; we'd be solving some problems from all of these lists. The number depends on the target you set. We could cover 250+ problems, or 100, or 50. It's up to you. There's no single way to do this.

I haven't completed all, this also essentially helps me as well. I could try solving the unsolved at my end in real-time with you. Here are my repos for the same:

- [LC200](https://github.com/fuzzymfx/LC-200/)
- [DSA450](https://github.com/fuzzymfx/DSA-450/)
- [Striver's SDE Sheet](https://github.com/fuzzymfx/SDE-sheet)

Parallelly, we'd be doing what I initially did to get into the industry. Build.

## Building

We'd be looking at building entirely new applications from scratch, deploying them to a server, making them accessible through the internet, or maybe using a serverless architecture. We can get a domain, and host it on a server, or use a cloud provider like AWS, GCP, or Azure, if you want.

I have curated a list of 9-12 projects that we could build together. The list keeps on changing, the same as with the DSA list. All of these can be found on the internet. I'll explain a couple of projects here, and we could build the rest together.

1. [A tiny cmd-line bit-torrent client written in TypeScript](/blog/bee.html)

### System Design & Architecture

While building your chat-server, you'd want to think about the architecture of your application. You could build a single monolithic application, or a distributed microservice architecture, a message queue, or a pub-sub system, a database, or a cache. Some of things you could think about are:

- What happens if there are tens of thousands of requests coming in every second? How do you make sure there is no downtime?
- What if the server crashes?
- What could be the schema of the database? Should you use a SQL or a NoSQL database?
- How do you make sure the data is secure? What if there is a DDoS attack?
- How do you monitor the application? What if there is a bug in the code?

[System Design for cbrtl: a comprehensive guide to designing your own system ->](/blog/system-design.html) gives you a comprehensive guide on how to design your own system.


2. [A distributed chat application using written in Rust and Svelte](/blog/druss.html).

## Next?

I hope this article was verbose enough to help you get started. The idea was to share everything I did to get into the industry, and how you could do the same.

`cbrtl` is a platform that aims at sharing this experience with you, first-hand. We would be building stuff together, writing code, and sharing resources. This is just the beginning of a long journey. cbrtl is in a private beta, and I'd be sharing the link to the platform soon. I deeply value my time, and I am sure you do too. The initial fee would be minimal, to cover the costs of running the platform and for the tremendous amount of effort and time I'd be putting in. You could always choose to donate and contribute more in building the platform. Optionally, you could follow this guide and get started on your own.

I'll be writing more on this, and sharing more resources as we move on. If you have any questions, feel free to reach out bellow. I'd be happy to help you out.
