---
title: "Current shenanigans"
---
<style>
 .image{
 justify-content: center;
 align-items: center;
 display: flex;
 flex-direction: column;
 }
</style>

##### Current, 2024

[Here's what I am reading and writing these days](/reading.html)

Happy New Year, muchachos! I hope you had a good one. I just returned to Bangalore after a much-needed break in my hometown. Leaving home and returning to the city was a bit of a bummer, but such is life! The dreaded omicron variant is wreaking havoc in the city. I am starting a new career at RadiusAI as a Software Engineer, and I am pretty stoked :D

Here's an improved version of Llama Index's sub-querying engine used to generate SQL from Natural Language: [Neak](/blog/neak.html).

At RadiusAI, I am exploring Prefect and will be working on automating workflows in Python. I am also involved in the team that is building auto-checkout terminals for retail stores. I am working on building the POS system for the terminals.

On a personal trajectory, [Srijan](https://injuly.in) and I have identified a pain point in the developer/ consumer tooling space. We are working on a solution to solve it. We are still in the early stages of the product, and I will be sharing more details soon. I am primarily dedicated to working on this now. The codename for the project is *'Hoid'*. Hoid has a lot of moving parts. I am focused on the market research now. I believe that tech has become a commodity. There isn't anything that you cannot build using tech now. Money is in solving the right set of problems.

To give a sneak into Hoid, here are some of the things that I am working on:

- content recommendation engine
- search engine using vectors
- content aggregation
- bookmarks, and TL;DR

Meanwhile, I am exploring esoteric programming languages, and I am having a blast. Will be updating this page with my progress with brainfuck.

Coming onto `Dough`: a rich, modular, and customisable content generator, crafted in Rust; [here's everything](https://anubhavp.dev/blog/dough.html) that you need to know about dough. This is a breakdown of the tasks I was working on:

- Rendering Engine
  - ~~Color coding elements~~
  - ~~Fixed bounding box dimensions to standardize the rendering area~~
  - Render most common markdown syntaxes
    - ~~The primary issue here is **rendering nested syntax**, lists, blockquotes, etc. The current implementation is stateless and thus doesn't pertain to any information about the previous element. My main focus is figuring out a way to implement this.~~
    - ~~Improve the design of the rendering engine~~
  - ~~Custom alignment implementation~~
    - ~~Text alignment~~
    - ~~Presentation alignment~~
    - (Extra) Improve the alignment system: Add support for group text alignments
  - ~~Custom scrolling mechanism for more granular control~~

- ~~Templating Engine~~
  - ~~Optional conf file to specify colors for a template~~
- ~~Improving accessibility, readability, and usability~~

I am done with most of what I had planned for Dough. Check out the entire [TODO list here](https://github.com/fuzzymfx/dough/blob/main/README.md#contributing). I will be picking up a few of the tasks from the list and will finish them off before handing this out to the community. The important ones, involving the rendering engine, nested syntax, multi-line syntax, etc. are still pending. I would want people to contribute to the ones pending, thus making this a more robust open-source project.

Meanwhile, I stumbled upon [Substack](https://substack.com/), a platform for independent writers. I will be writing on substack as well. This **does not change** the fact that this will still be my primary blog.

<div id="substack-feed-embed"></div>
<script>
  window.SubstackFeedWidget = {
    substackUrl: "fuzzymf.substack.com",
    posts: 3,
    hidden: ["image"]
  };
</script>
<script src="https://substackapi.com/embeds/feed.js" async></script>

Feel free to check out whatever [else I have written](https://fuzzymf.substack.com) and [subscribe to my newsletter](https://fuzzymf.substack.com/subscribe) to get notifications about new posts.

---

[The past year](/blog/23.html)
