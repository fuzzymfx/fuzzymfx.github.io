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

Dough is presentation tool written in Rust. It parses markdown files and renders them in the terminal 

<figure class="centered">
<img alt= 'introduction'  src ="https://anubhavp.dev/assets/img/dough/introduction.png" class="h-50 w-50">
<figcaption>
A simple introduction slide
</figcaption>
</figure>

## Motivation

At StackIt, we decided to have a `demo round` each Saturday. We made presentations to show what we had built throughout the week. Inspired by this, I had a zeal to build my own presentation generator tool. Thus, I started [Dough](https://github.com/fuzzymfx/dough): a rich, modular, command-line tool to generate presentations written in Rust. I found similar tools like [slidev](sli.dev) by [antfu](https://antfu.me/) and [presenterm](https://github.com/mfontanini/presenterm) as well.

## Features

- **Markdown**: Dough uses markdown to generate slides. It uses [pulldown-cmark](https://talk.commonmark.org/t/pulldown-cmark-commonmark-in-rust/1205) to parse markdown files.
- **Text highlighting**: Dough supports block highlighting. It separates markdown elements like headers, code blocks, etc. and highlights them accordingly.

## The rendering engine

## Contributing to Dough