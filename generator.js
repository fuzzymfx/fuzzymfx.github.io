#!/usr/bin/env node

import fs from "fs";
import glob from "glob";
import matter from "gray-matter";
import mkdirp from "mkdirp";
import path from "path";
import hljs from "highlight.js";
import MarkdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";
import string from "string";
import { mdToPdf } from "md-to-pdf";

const slugify = (s) => string(s).slugify().toString();

const md = MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight(str, language) {
    if (language && hljs.getLanguage(language)) {
      try {
        return hljs.highlight(str, { language: language }).value;
      } catch (err) {
        console.log(err);
      }
    }

    return null;
  },
}).use(markdownItAnchor, { slugify });

const readFile = (filename) => {
  const rawFile = fs.readFileSync(filename, "utf8");
  const parsed = matter(rawFile);
  const html = md.render(parsed.content);

  return { ...parsed, html };
};

const templatize = (template, { date, title, content, author, description }) =>
  template
    .replace(/<!-- PUBLISH_DATE -->/g, date)
    .replace(/<!-- TITLE -->/g, title)
    .replace(/<!-- CONTENT -->/g, content)
    // .replace(/<!-- AUTHOR -->/g, author)
    .replace(/<!-- DESCRIPTION -->/g, description);

const indextemplatize = (template, { title, content }) =>
  template
    .replace(/<!-- CONTENT -->/g, content)
    .replace(/<!-- TITLE -->/g, title);

const defaulttempletize = (template, { title, content, desc }) =>
  template
    .replace(/<!-- CONTENT -->/g, content)
    .replace(/<!-- TITLE -->/g, title)
    .replace(/<!-- DESCRIPTION -->/g, desc);

const saveFile = (filename, contents) => {
  const dir = path.dirname(filename);
  mkdirp.sync(dir);
  fs.writeFileSync(filename, contents);
};

const getOutputFilename = (filename, outPath) => {
  const basename = path.basename(filename);
  if (basename.includes("index.md")) return path.join(outPath, "index.html");
  const newfilename = basename.substring(0, basename.length - 3) + ".html";
  const outfile = path.join(outPath, newfilename);
  return outfile;
};

const getOutputPdfname = (filename, outPath) => {
  const basename = path.basename(filename);
  const newfilename = basename.substring(0, basename.length - 3) + ".pdf";
  const outfile = path.join(outPath, newfilename);
  return outfile;
};

const processBlogFile = async (filename, template, outPath) => {
  const file = readFile(filename);
  const outfilename = getOutputFilename(filename, outPath);

  const templatized = templatize(template, {
    date: file.data.date,
    title: file.data.title,
    content: file.html,
    author: file.data.author,
    description: file.data.description,
  });
  saveFile(outfilename, templatized);
  console.log(`📄 ${filename.split("/").slice(-1).join("/").slice(0, -3)}`);
};

const processDefaultFile = async (
  filename,
  template,
  outPath,
  generatePdf = false
) => {
  const file = readFile(filename);
  const outfilename = getOutputFilename(filename, outPath);

  const templatized = defaulttempletize(template, {
    title: file.data.title,
    content: file.html,
    description: file.data.description,
  });
  if (generatePdf) {
    const outpdfname = getOutputPdfname(filename, outPath);
    mdToPdf({ path: filename }, { dest: outpdfname });
  }
  saveFile(outfilename, templatized);
  console.log(`📄 ${filename.split("/").slice(-1).join("/").slice(0, -3)}`);
};

const processCurrentFile = async (filename, template, outPath) => {
  const file = readFile(filename);
  const outfilename = getOutputFilename(filename, outPath);
  const templatized = indextemplatize(template, {
    content: file.html,
    title: file.data.title,
  });
  saveFile(outfilename, templatized);
  console.log(`📄 ${filename.split("/").slice(-1).join("/").slice(0, -3)}`);
};

const processIndexFile = async (filename, template, outPath) => {
  const file = readFile(filename);
  const outfilename = getOutputFilename(filename, outPath);
  const templatized = indextemplatize(template, {
    content: file.html,
    title: file.data.title,
  });
  saveFile(outfilename, templatized);
  console.log(`📄 ${filename.split("/").slice(-1).join("/").slice(0, -3)}`);
};

const main = () => {
  const srcPath = path.resolve("content");
  const outPath = path.resolve("blog");
  const dir = path.resolve("blog");
  const indexoutPath = path.resolve("");
  const blogtemplate = fs.readFileSync("./templates/initial/blog.html", "utf8");
  const indextemplate = fs.readFileSync(
    "./templates/initial/index.html",
    "utf8"
  );
  const currenttemplate = fs.readFileSync(
    "./templates/initial/current.html",
    "utf8"
  );
  const blogindextemplate = fs.readFileSync(
    "./templates/initial/blogindex.html",
    "utf8"
  );
  const defaultemplate = fs.readFileSync(
    "./templates/initial/default.html",
    "utf8"
  );
  const filenames = glob.sync(srcPath + "/**/*.md");

  const expiredFiles = ["profile"];

  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir);

  const templateMap = {
    blog: blogtemplate,
    index: indextemplate,
    current: currenttemplate,
    blogindex: blogindextemplate,
    default: defaultemplate,
  };

  filenames.forEach((filename) => {
    switch (filename.split("/").slice(-1)[0]) {
      case "index.md":
        processIndexFile(filename, templateMap.index, indexoutPath);
        break;
      case "current.md":
        processCurrentFile(filename, templateMap.current, indexoutPath);
        break;
      case "blogindex.md":
        processIndexFile(filename, templateMap.blogindex, outPath);
        break;
      case "cv.md":
        processDefaultFile(filename, templateMap.default, indexoutPath, true);
        break;
      case "reading.md":
        processDefaultFile(filename, templateMap.default, indexoutPath);
        break;
      default:
        if (!expiredFiles.some((el) => filename.includes(el)))
          processBlogFile(filename, templateMap.blog, outPath);
    }
  });
};

main();
