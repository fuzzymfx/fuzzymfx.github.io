---
title: 'Dough: A presentation tool'
date: "2024-01-31"
description: "A rich presentation tool built in Rust that uses markdown for content generation."
author: "fuzzymf"
---
<style>
 .centered {
 justify-content: center;
 align-items: center;
 display: flex;
 flex-direction: column;
 }
</style>

Imagine a presentation tool that seamlessly blends simplicity with power, all while being crafted in Rust. Welcome to Dough – your new favorite presentation companion. Say goodbye to clunky interfaces and hello to a tool that's as intuitive as it is efficient.

<figure class="centered">
<img alt= 'introduction'  src ="https://anubhavp.dev/assets/img/dough/introduction.png" class="h-100 w-100">
<figcaption>
A simple introduction slide
</figcaption>
</figure>

## Why Dough?

(Why, though? - *Get it? xD*)

At StackIt, the team gathers every Saturday for their weekly showcase. Each member presents their progress, showcasing the fruits of their week-long hiatus. Inspired by this collaborative spirit, I embarked on a journey to create Dough – a presentation generator tool like no other. Built in Rust, [Dough](https://github.com/fuzzymfx/dough) is a rich, modular, command-line tool to generate presentations. I found similar tools like [slidev](sli.dev) by [antfu](https://antfu.me/) and [presenterm](https://github.com/mfontanini/presenterm) that inspired me to create Dough.

## Features

- **Customization**: Dough's modular design allows for seamless customization, ensuring your presentations are as unique as you are. You can also customize the color scheme to suit your preferences. This lets you customize how each markdown element is rendered.

- **Alignment**: Dough also lets you align content both horizontally and vertically and also lets you specify the alignment of individual text segments, ensuring your presentations are visually refined. You can decide between having a margined presentation or one without margin anywhere, in the bottom, left, or centre, of the screen.

- **Design**: The design engine is a work in progress, which is built keeping in mind that customization is the biggest flex a presentation tool can have. Dough supports **syntax highlighting** in code blocks, and also will be supporting **images** in the terminal for the ones that have a GPU-enabled terminal like Kitty or iTerm2.

- **Navigation**: Scroll through slides with ease: Dough's intuitive navigation system lets you scroll through slides with ease. You can choose between scrolling top-down or bottom-up. Presentations start from `1` to the last slide. Dough supports arrow keys and VIM keybindings to navigate through slides.

- *Hot Module Reloading*: Dough will be supporting hot module reloading. This means that you can edit your markdown file and the changes will be reflected in the presentation. This is done by watching the file for changes and reloading the presentation when the file is changed.

- *Code Execution*: Dough will be supporting code execution in code blocks. This means that you can run your code and the output will be displayed in the presentation. This will be implemented by running the code block in a separate thread and displaying the output in the presentation.


<figure class="centered">
<img alt= 'example'  src ="https://anubhavp.dev/assets/img/dough/example.png" class="h-100 w-50">
<figcaption>
A basic example
</figcaption>
</figure>

<figure class="centered">
<img alt= 'introduction'  src ="https://anubhavp.dev/assets/img/dough/syntax-highlighting.png" class="h-50 w-50">
<figcaption>
Syntax Highlighting in code blocks
</figcaption>
</figure>

## Unveiling the Core

Dough thrives on markdown, transforming simple text files into captivating slides. Leveraging the syntax of [pulldown-cmark](https://talk.commonmark.org/t/pulldown-cmark-commonmark-in-rust/1205), it effortlessly transforms your ideas into visual stories.

Projects are created using the `new` command and presented using the `present` command. The optional `--template` flag is used to specify the template. The default template is used if not specified. The optional `--mode` flag is used to specify the mode. If not specified, the terminal mode is used. The *HTML* mode is not implemented yet.

Whether you prefer the simplicity of the terminal or the allure of HTML, Dough has you covered. While the HTML mode is still in the works, the terminal experience is nothing short of extraordinary.

### The rendering engine

The rendering engine serves as the backbone, seamlessly transforming markdown files into captivating presentations. At the heart of the rendering engine lie two pivotal components:

- Renderer: This component takes charge of the visual rendering of slides.
- Parser: Responsible for dissecting markdown files and converting them into a structured format.

The parser parses the markdown file, prettifies it, and then passes it to the renderer to render it. The renderer then renders the slide in the `terminal` to display it.

#### Navigating the Parser

Crafted in Rust, Dough's parser orchestrates the markdown-to-presentation transformation with finesse. The parser takes in the markdown text and converts it into `Nodes` of `mdast`. `mdast` is a markdown Abstract Syntax Tree. The tree is reccursively traversed and each node is then styled according to the `Node` ( Markdown Element ) type. After combining all the nodes, a `prettified` version of the text is returned.

#### Deciphering the Renderer's Logic

Dough's rendering logic in Rust orchestrates a seamless presentation experience. There are two stages of rendering:

1. The renderer takes in the `prettified` content, applies custom alignment, styles, spacing, and margin to the content, and then renders it in the terminal. The renderer also handles the color correction post-alignment to ensure a seamless visual experience.

2. The renderer then handles the navigation actions, the scrolling mechanism and the keybindings. It controls the flow of the presentation and is responsible for rendering the slides in the terminal.

## Contributing

If you're eager to dive into the world of Rust and looking for a project to contribute to, Dough presents an exciting opportunity. Here's a breakdown of what's currently working and what areas could benefit from your expertise:

**What's working and what's not?**

- Improving the rendering engine:
  - ~~Add a Hot Module Reload feature while rendering slides~~
  - ~~Add support for rendering **nested syntax**~~
  - Add a support for maximum width and height of the terminal. Write a word wrapper.
  - Address the color storage issue for multiline elements, ensuring ANSI escape sequences are properly stripped: Refine color correction post-alignment for a seamless visual experience.
  - Enhance rendering for complex markdown elements like links within headings or lists.
    - ~~lists.~~
    - blockquotes.
  - Provide comprehensive support for common Markdown elements.
    - ~~Improve the rendering of thematic breaks~~
  - ~~Improve the design language.~~
  - Image support for terminals with image capabilities is pending. *(Kitty, iTerm2, etc.)*
- ~~Syntax Highlighting in code blocks~~
  - Improve the performance of syntax highlighting. The current implementation is CPU intensive. Use a different library for syntax highlighting, or parallel threads to improve performance.
- ~~Custom text alignment: A regex match for individual text alignment~~
  - Improve the alignment of segments of text.
- Implement running code blocks on separate threads and displaying results in the current console.

Feel free to explore these areas, open new issues, or submit pull requests to contribute to Dough's evolution. Your insights and contributions are highly valued as we strive to make Dough the go-to presentation tool for Rust enthusiasts everywhere. So why wait? Dive into the world of Dough and let your presentations shine like never before.
