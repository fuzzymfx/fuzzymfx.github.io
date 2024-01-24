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

On a personal trajectory, [Srijan](https://injuly.in) and I have identified a pain point in the developer/ consumer tooling space. We are working on a solution to solve it. We are still in the early stages of the product, and I will be sharing more details soon. I am primarily dedicated on working on this now. The codename for the project is *'Hoid'*. Hoid has a lot of moving parts. I am focused on the market research now. I believe that tech has become a commodity. There isn't anything that you cannot build using tech now. Money is in solving the right set of problems.

To give a sneek into hoid, here are some of the things that I am working on:

- content recommendation engine
- search engine using vectors
- content aggregation
- bookmarks, and TL;DR

I will be updating soon with more details.

Meanwhile, I am exploring esoteric programming languages, and I am having a blast. Will be updating this page with my progress with brainfuck. 

<!-- I am also planning to brush up on advanced data structures and algorithms. I will be spending some time on Leetcode and will share my progress here. Feel free to check out my leetcode profile [here](https://leetcode.com/anubhabr50/) -->

Coming onto `Dough`: a rich, modular, and customisable content generator, crafted in Rust; here's what's up with it:

- Rendering Engine
  - ~~Color coding elements~~
  - Custom alignment implementation
  - Fixed bounding box dimenstions to standardize the console printing
  - Render most common markdown syntaxes
    - The primary issue here is **rendering nested syntax**, lists, blockquotes, etc. The current implementation is stateless, and thus doesn't pertain any information about the previous element. My main focus is figuring out a way to implement this.
- ~~Templating Engine~~
  - ~~Optional conf file to specify colors for a template~~
- ~~Improving accesibility, readability, and usability~~
- *Footer: Optional support for a footer

I plan to finish up with dough by the end of this month. Later, I will be reviving [Bee](https://github.com/fuzzymfx/b), a bit-torrent client I started working on a while back.

Finances are tough. I found a couple of interesting investment opportunities, and am learning more about investments and diversification of my portfolio. Will be updating my journey through investments here.

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
