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

- **Customization**: Dough's modular design allows for seamless customization, ensuring your presentations are as unique as you are. You can also customize the color scheme to suit your preferences. This lets you customize how each markdown element is rendered. You can customize the presentation by modifying the `style.yml` file in the project directory. The `config.yaml` file contains the default style settings for the terminal markdown renderer.

```yaml
# This file contains the default style settings for the terminal markdown renderer.

# Markdown styles
h1: red
h2: yellow
h3: green
h4: cyan
h5: blue
h6: purple
code: black on white
blockquote: black on white
ordered_list_bullet: yellow
unordered_list_bullet: yellow
ordered_list: white
unordered_list: white
link_text: black
link_url: blue
thematic_break: white on black

# Terminal styles

# clear will clear the terminal before rendering, you would need to scroll down to render each line
clear: false

box: false
box_color: black on white

# vertical_alignment will vertically align the text to the middle of the terminal
vertical_alignment: true

# horizontal_alignment will horizontally align the text to the middle of the terminal
horizontal_alignment: true

# syntax_highlighting will highlight the code syntax
# this works well with GPU accelerated terminals, but not with the default Mac OS terminal. We suggest using iTerm2 or Kitty, or disabling this feature.

syntax_highlighting: true
synatx_theme: base16-ocean.dark
#themes:[base16-ocean.dark,base16-eighties.dark,base16-mocha.dark,base16-ocean.light, Solarized (dark) and Solarized (light)]
syntax_bg: false

# Displays the slide number/total slides
progress: false 

# runtime map is used to store the runtimes for different languages
# you can add your own runtimes for different languages. Currently, the following runtimes are supported:

-runtime_map:
  python: python3
  sh: bash
  bash: bash
  javascript: node
  typescript: node
  ts: tsc
  c: gcc
  cpp: g++
  java: javac
  go: go run
  rust: cargo run
  ruby: ruby
  php: php
  swift: swift
  kotlin: kotlinc
```
<figure class="centered">
<img alt= 'introduction'  src ="https://anubhavp.dev/assets/img/dough/syntax-highlighting.png" class="h-50 w-50">
<figcaption>
Syntax Highlighting in code blocks
</figcaption>
</figure>

- **Alignment**: Dough also lets you align content both horizontally and vertically and also lets you specify the alignment of individual text segments, ensuring your presentations are visually refined. You can decide between having a margined presentation or one without margin anywhere, in the bottom, left, or centre, of the screen.

- **Design**: The design engine is a work in progress, which is built keeping in mind that customization is the biggest flex a presentation tool can have. Dough supports **syntax highlighting** in code blocks, and also will be supporting **images** in the terminal for the ones that have a GPU-enabled terminal like Kitty or iTerm2.

- **Navigation**: Scroll through slides with ease: Dough's intuitive navigation system lets you scroll through slides with ease. You can choose between scrolling top-down or bottom-up. Presentations start from `1` to the last slide. Dough supports arrow keys and VIM keybindings to navigate through slides. There are two modes of navigation:

  1. **Highlighting mode**: Highlight a line as you scroll through the slides.
  2. **Scrolling mode**: Scroll through the content of the slide.

  - `t` :
    - **highlighting** mode
    - **scrolling** mode
  - `q`, `Esc`, or `ctrl + c` to quit the presentation.
  - `ctrl + r` to refresh the presentation.
  - `l` or `right arrow` to move to the next slide.
  - `h` or `left arrow` to move to the previous slide.
  - `j` or `down arrow` to move to the next line.
  - `k` or `up arrow` to move to the previous line.

<figure class="centered">
<img alt= 'example'  src ="https://anubhavp.dev/assets/img/dough/example.png" class="h-50 w-50">
<figcaption>
Line highlighting
</figcaption>
</figure>


- **Code Execution**: Dough supports code execution in code blocks. You can run your code and the output will be displayed in the presentation. The code blocks run in a separate thread and the main thread displays the output in the terminal. The code blocks are internally ordered in the order they appear in the markdown file. The code blocks are run in a separate thread, and the results are displayed in the terminal.
  - `n`: runs the `n`th code block. and outputs the result in the terminal.


- *Hot Module Reloading*: Dough will be supporting hot module reloading. This means that you can edit your markdown file and the changes will be reflected in the presentation. This is done by watching the file for changes and reloading the presentation when the file is changed.


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

Crafted in Rust, Dough's parser orchestrates the markdown-to-presentation transformation with finesse. The parser takes in the markdown text and converts it into `Nodes` of `mdast`. `mdast` is a markdown Abstract Syntax Tree. The tree is reccursively traversed and each node is then styled according to the `Node` ( Markdown Element ) type. After combining all the nodes, a `prettified` version of the text is returned. It then modifies the `prettified` content, applies custom alignment, styles, spacing, and adds margin to the content to fit the terminal.

Here is an in-depth code walkthrough of the main pretiffy fn:

```rs

pub fn prettify(
    md_text: &str,
    style_map: &HashMap<String, String>,
    highlight_line_num: u32,
) -> Result<String, Box<dyn std::error::Error>> {
    let map = style_map.clone();
    let mut global_styles = STYLES.lock().unwrap();
    *global_styles = map;
    drop(global_styles);

    // codes stores the code blocks in the markdown file  
    let mut codes = CODES.lock().unwrap();
    *codes = BTreeMap::new();
    drop(codes);

    let mut lines = md_text.lines();
    let first_line = lines.next();
    let md_text = if let Some(line) = first_line {
        // If there are lines left, join them and add a newline at the end
        std::iter::once(line)
            .chain(lines)
            .collect::<Vec<&str>>()
            .join("\n")
            + "\n"
    } else {
        // If there are no lines left, return an empty string
        String::new()
    };

    let parsed = markdown::to_mdast(&md_text, &markdown::ParseOptions::default());
    let mut prettified = String::new();

    match parsed {
        Err(err) => return Err(format!("Error parsing markdown: {}", err).into()),
        Ok(node) => {
            let result = visit_md_node(node, 0);
            if let Some(text) = result {
                prettified.push_str(&text);
            }
        }
    }
    return Ok(align_content(prettified, style_map, highlight_line_num));
    // align content aligns the content according to the style map and the highlight line number
    // it aligns the content vertically, horizontally, and draws a margin around the content
}
```

#### Deciphering the Renderer's Logic

Dough's rendering logic in Rust orchestrates a seamless presentation experience. There are two stages of rendering:

1. The renderer takes in the `prettified` content and renders it in the terminal.
2. The renderer then handles the navigation actions, the scrolling mechanism and the keybindings. It controls the flow of the presentation and is responsible for rendering the slides in the terminal. It switches between presentation and highlighting mode, and also handles the code execution.

Taking a look at the rendering logic: -

```rs
fn render_term(
        self: &Self,
        file_contents: &str,
        style_map: &HashMap<String, String>,
        highlight: bool,
        render: bool,
        lines: &mut u32,
        current_slide: u32,
    ) -> std::result::Result<(NavigationAction, u32), Box<dyn Error>> {
      ...
        // The highlight mode
        if highlight {
            // The slide is rendered according to the rendered lines.
            slide = prettify::prettify(&file_contents.to_string(), &style_map, line_number)?;
            // The bounds are used to determine the number of lines to be rendered.
            // This code implements infinte scrolling while highlighting.
            let (upper_bound, lower_bound) = prettify::get_bounds();
            if (upper_bound - lower_bound as u32) - 1 < line_number {
                line_number = 0;
            } else if line_number < 1 {
                line_number = upper_bound - lower_bound - 1;
            }
            // The slide is rendered here
            print!("{}", slide);
            // if clear is true, the slide is cleared after rendering, enabling users to scroll down lines one by one
            if render && clear {
                return Ok((NavigationAction::ToggleHighlight, line_number));
            }
        }
        // The scroll mode
        ...
    }
```
Here is the source code of dough - [Dough](https://github.com/fuzzymfx/dough.git)

## Contributing

If you're eager to dive into the world of Rust and looking for a project to contribute to, Dough presents an exciting opportunity. Here's a breakdown of what's currently working and what areas could benefit from your expertise:

**What's working and what's not?**

- [ ] **IMP bug** Address the color storage issue for multiline elements, ensuring ANSI escape sequences are properly stripped: Refine color correction post-alignment.
- [ ] *bug* Fix scrolling issue in highlight mode:
  - [ ] Over Scroll in infinite scrolling
  - [ ] Scroll breaking in highlight mode in thematic break
  - [ ] *feat* Skip empty lines in highlight mode
- [ ] *bug* custom aligner adds empty lines after text-block alignment
- [ ] *feat.* Hot Module Reload
- [ ] *feat.* Add a support for maximum width and height of the terminal. Write a word wrapper.
- [ ] *feat.* Add comprehensive support for common Markdown elements.
- [ ] *feat.* Enhance rendering for complex markdown elements like links within headings or lists.
  - [ ] lists.
  - [ ] blockquotes.

Here's a breakdown of the tasks I was working on:

- Rendering Engine
  - ~~Color coding elements~~
  - ~~Fixed bounding box dimensions to standardize the rendering area~~
  - Render most common markdown syntaxes
    - ~~The primary issue here is **rendering nested syntax**, lists, blockquotes, etc. The current implementation is stateless and thus doesn't pertain to any information about the previous element. My main focus is figuring out a way to implement this.~~
    - ~~Improve the design of the rendering engine~~
  - ~~Custom alignment implementation~~
    - ~~Text alignment~~
    - ~~Presentation alignment~~
  - ~~Custom scrolling mechanism for more granular control~~

- ~~Templating Engine~~
  - ~~Optional conf file to specify colors for a template~~
- ~~Improving accessibility, readability, and usability~~

v2:

- Improving the rendering engine:
  - ~~Add a refresh feature while rendering slides~~
    - Hot Module Reload( *auto* )
  - ~~Add support for rendering **nested syntax**~~
  - Add a support for maximum width and height of the terminal. Write a word wrapper.
  - Address the color storage issue for multiline elements, ensuring ANSI escape sequences are properly stripped: Refine color correction post-alignment.
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


Feel free to explore these areas, open new issues, or submit pull requests to contribute to Dough's evolution. Your insights and contributions are highly valued as we strive to make Dough the go-to presentation tool for Rust enthusiasts everywhere. So why wait? Dive into the world of Dough and let your presentations shine like never before.
