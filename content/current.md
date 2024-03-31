---
title: "Current shenanigans"
description: "Here's what I am upto these days"
---

##### Current, 2024

[Here's what I am reading and writing these days](/reading.html)

###### April

A melancholic April: I bid my best friend a final goodbye as he is leaving Bangalore permanently. He decided to quit his job and follow his passion. The current economic climate is not conducive to his interests, and the job market is extremely rough. He is planning a hiatus in his hometown while he hunts for open teaching positions in the education sector. I am going to miss him. I am going to miss our late-night conversations, our shared interests, and our shared dreams. A blue summer awaits.

April is all about spending time with my family visiting me in Bangalore. We have a trip ahead to *Gujrat* and *Rajasthan* in the second week. Excited!

###### March

An hectic beginning to the month; I just returned from home, and had a terrific week back at home. All of my best friends were back, together, and we meandered through familiar haunts, roaming around, exploring places, and restaurants, and talking about our current lives. The weekend after that was spent in Pondicherry, with Abinash. We explore bakeries, french architecture, *Auroville*, the beach, and the city. After a week-long hiatus with friends and family, and an excruciatingly tiring trip to Pondicherry, I am back in Bangalore now, and I am looking forward to a productive month.

I am not planning on taking up much work, and have thought of taking an hour of my day to figure out where this is all going. March is supposed to be an interlude, a time to reflect and recharge. I have long-term goals, and to be able to accomplish them, I need to be more disciplined and focused. The path must be streamlined. This daily routine will help me to stay on track and keep my goals in sight. This month would be spent planning out the next four odd years. My short-term goals would be to focus on my fitness journey and improve my writing. Writing has always been a passion of mine, serving as a conduit for connecting with others and sharing my insights. Lately, I've been particularly prolific, and I have been writing a lot.

March ends exciting. I finished up with [NiceDear](https://anubhavp.dev/blog/nicedear.html), a dynamic open-source avatar generator that crafts unique avatars based on user input. Looking to upgrade my desk setup, I finally made the switch to a fully customisable mechanical keyboard, and an ergonomic mouse. I initially planned on going with linear switches, but I ended up with tactile switches. They are pre-lubed, and the PCB is covered with a layer of tape. I am using the fully hot-swapable Keychron K2 Pro, with banana split switches, aluminium casing, south-facing RGB lights, and a custom keycap set. The mouse is the Logitech MX Master 3s Mac, white. I have mapped the horizontal scroll-wheel, and the back, and forward buttons to custom schortcuts. The next step would be upgrading my desk mat.

###### Feb

I went on a trip to Mangalore with my best friend, Abinash, for a night. I had been occupied with a lot of things lately and this was a much-needed escape. Back in Bangalore life is slow and boring. A few friends came over on the weekend and we had a ton of fun. This new place at HSR Layout, Plan B, is my go-to hangout destination. They serve the best damn chicken wings in town. Looking towards to chilling out with my friends and family, back home this last week.

Here's how Dough is shaping up:
<figure style="justify-content: center; align-items: center; display: flex;flex-direction: column;">
<img alt= 'introduction'  src ="https://anubhavp.dev/assets/img/dough/simple-presentation.gif" class="h-100 w-100">
</figure>

[Here's everything about Dough](https://anubhavp.dev/blog/dough.html)

If you're eager to dive into the world of Rust and looking for a project to contribute to, Dough presents an exciting opportunity. Here's a breakdown of what's currently working and what areas could benefit from your expertise:

- [ ]  Fix scrolling issue in highlight mode:
  - [ ] *bug* Over Scroll in infinite scrolling
  - [ ] *feat* Skip empty lines in highlight mode
- [ ] *bug* custom aligner adds empty lines after text-block alignment
- [ ] *feat.* Hot Module Reload
- [ ] *feat.* Add support for the maximum width and height of the terminal. Write a word wrapper.
- [ ] *feat.* Add comprehensive support for common Markdown elements.
- [ ] *feat.* Enhance rendering for complex markdown elements like links within headings or lists.
  - [ ] lists.
  - [ ] blockquotes.
  - [ ] tables.

I am looking for contributions from peers regarding the pending issues, making this a more robust open-source project.

At Radius AI I am involved in building an async uptime monitoring service using Rust, and also a concurrent heartbeat service in Python. I will update this page with more details soon.

Got a new idea about content summarization and accessibility (*codenamed 'Hoid'*). We are still in the early stages of the idea. I might share more details soon. Hoid has a lot of moving parts. Currently, I am focused on the market research. I believe that tech has become a commodity. There isn't anything that you cannot build using tech anymore. Money is in solving the right set of problems.

A sneak peek into Hoid:

- content aggregation; recommendation engine
- search engine
- bookmarks, and TL;DR, summarization

Meanwhile, I am exploring esoteric programming languages and also planning to build a distributed file system<a name="distributed-file-system"></a>in Rust.

###### Jan

Happy New Year, muchachos! I hope you had a good one. I just returned to Bangalore after a much-needed break in my hometown. Leaving home and returning to the city was a bit of a bummer, but such is life! The dreaded omicron variant is wreaking havoc in the city. I am starting a new career at RadiusAI as a Software Engineer, and I am pretty stoked :D

Here's an improved version of Llama Index's sub-querying engine used to generate SQL from Natural Language: [Neak](/blog/neak.html).

Coming onto Dough: a rich, modular, and customisable content generator, crafted in Rust, [here's everything](https://anubhavp.dev/blog/dough.html) you need to know.
This is a breakdown of the tasks I was working on:

v2:

- Improving the rendering engine:
  - ~~Add a refresh feature while rendering slides~~
    - Hot Module Reload( FIX )
  - ~~Add support for rendering **nested syntax**~~
  - Add support for the maximum width and height of the terminal. Write a word wrapper.
  - ~~Address the color storage issue for multiline elements, ensuring ANSI escape sequences are properly stripped: Refine color correction post-alignment~~
  - Enhance rendering for complex markdown elements like links within headings or lists.
    - ~~lists.~~
    - blockquotes.
  - Provide comprehensive support for common Markdown elements.
    - ~~Improve the rendering of thematic breaks~~
  - ~~Improve the design language.~~
  - Image support for terminals with image capabilities is pending. *(Kitty, iTerm2, etc.)*
- ~~Syntax Highlighting in code blocks~~
  - ~~Improve the performance of syntax highlighting. The current implementation is CPU intensive. Use a different library for syntax highlighting, or parallel threads to improve performance.~~
- ~~Custom text alignment: A regex match for individual text alignment~~
  - ~~Improve the alignment of segments of text.~~
- ~~Implement running code blocks on separate threads and displaying results in the current console.~~

I stumbled upon [Substack](https://fuzzymf.substack.com), a platform for independent writers. I will be writing on substack as well. This **does not change** the fact that this will still be my primary blog.

Feel free to [subscribe to my newsletter](https://fuzzymf.substack.com/subscribe) to get notifications about new posts.

---

[The past year](/blog/23.html)
