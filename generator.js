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

/*
 * Function: slugify
 * Description: Converts a string into a slug, which is a URL-friendly version of a string.
 * Parameters: s - The string to be converted into a slug.
 * Returns: The slug version of the input string.
 */
const slugify = (s) => string(s).slugify().toString();

// Initializing MarkdownIt with options
const md = MarkdownIt({
  html: true, // Enable HTML tags in source
  linkify: true, // Autoconvert URL-like text to links
  typographer: true, // Enable some language-neutral replacement + quotes beautification
  highlight(str, language) {
    // Highlight code blocks
    if (language && hljs.getLanguage(language)) {
      try {
        return hljs.highlight(str, { language }).value;
      } catch (err) {
        console.log(err);
      }
    }

    return null; // If no language is specified, return null
  },
}).use(markdownItAnchor, { slugify }); // Use markdown-it-anchor plugin with slugify function
/**
 * Reads a file and returns its content, parsed and rendered as HTML.
 * @param {string} filename - The filename to read.
 * @returns {object} - The parsed file content, including the rendered HTML.
 */
const readFile = (filename) => {
  const rawFile = fs.readFileSync(filename, "utf8");
  const parsed = matter(rawFile);
  const html = md.render(parsed.content);

  return { ...parsed, html };
};

/**
 * Replaces placeholders in a template string with provided data.
 * @param {string} template - The template string.
 * @param {object} data - The data object containing date, title, content, author, and description.
 * @returns {string} - The templated string with placeholders replaced by actual data.
 */
const templatize = (template, data) => {
  let result = template;
  for (let key in data) {
    if (data[key] !== undefined) {
      result = result.replace(
        new RegExp(`<!-- ${key.toUpperCase()} -->`, "g"),
        data[key]
      );
    }
  }
  return result;
};

/**
 * Saves a string to a file, creating the necessary directories if they don't exist.
 * @param {string} filename - The filename to save.
 * @param {string} contents - The contents to save.
 */
const saveFile = (filename, contents) => {
  const dir = path.dirname(filename);
  mkdirp.sync(dir);
  fs.writeFileSync(filename, contents);
};

/**
 * Generates the output filename for a given input filename and output path.
 * @param {string} filename - The filename to save.
 * @param {string} outPath - The output path.
 * @returns {string} - The output filename.
 */
const getOutputFilename = (filename, outPath) => {
  const basename = path.basename(filename);
  if (basename.includes("index.md")) return path.join(outPath, "index.html");
  const newfilename = `${basename.slice(0, -3)}.html`;
  const outfile = path.join(outPath, newfilename);
  return outfile;
};

/**
 * Generates the output PDF filename for a given input filename and output path.
 * @param {string} filename - The filename to save.
 * @param {string} outPath - The output path.
 * @returns {string} - The output PDF filename.
 */
const getOutputPdfname = (filename, outPath) => {
  const basename = path.basename(filename);
  const newfilename = `${basename.slice(0, -3)}.pdf`;
  const outfile = path.join(outPath, newfilename);
  return outfile;
};

/**
 * Processes a blog file: reads it, replaces placeholders in the template with actual data, and saves the result.
 * Builds a map of blog metadata, to be used for generating the blog index.
 * @param {Map} blogs - The map containing blog metadata.
 * @param {string} filename - The filename to process.
 * @param {string} template - The template to use.
 * @param {string} outPath - The output path.
 */
const processBlogFile = (filename, template, outPath, blogs) => {
  const file = readFile(filename);

  const draft = file.data.draft;
  if (draft) return;

  const outfilename = getOutputFilename(filename, outPath);

  blogs.set(filename.split("/").slice(-1).join("/").slice(0, -3), {
    title: file.data.title,
    date: file.data.date,
  });

  const templatized = templatize(template, {
    date: file.data.date,
    title: file.data.title,
    content: file.html,
    author: file.data.author,
    description: file.data.description,
  });
  saveFile(outfilename, templatized);
  //skipcq: JS-0002
  console.log(`📄 ${filename.split("/").slice(-1).join("/").slice(0, -3)}`);
};

/**
 * Processes a default file: reads it, replaces placeholders in the template with actual data, and saves the result.
 * Optionally generates a PDF version of the file.
 * @param {string} filename - The filename to process.
 * @param {string} template - The template to use.
 * @param {string} outPath - The output path.
 * @param {boolean} generatePdf - Whether to generate a PDF version of the file.
 */
const processDefaultFile = (
  filename,
  template,
  outPath,
  generatePdf = false
) => {
  const file = readFile(filename);
  const outfilename = getOutputFilename(filename, outPath);

  const templatized = templatize(template, {
    title: file.data.title,
    content: file.html,
    description: file.data.description,
  });
  if (generatePdf) {
    const outpdfname = getOutputPdfname(filename, outPath);
    mdToPdf({ path: filename }, { dest: outpdfname });
  }
  saveFile(outfilename, templatized);
  //skipcq: JS-0002
  console.log(`📄 ${filename.split("/").slice(-1).join("/").slice(0, -3)}`);
};

/**
 * Builds the blog index from the map of blog metadata and replaces the index placeholder in the blog index file.
 * Updates the index file with the new index HTML.
 * @param {Map} blogs - The map containing blog metadata.
 * @param {string} path - The output path.
 * @returns {string} - The index HTML.
 */

const buildBlogIndex = (blogs, path) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let indexHTML = "";

  const sortedBlogs = Array.from(blogs.entries()).sort((a, b) => {
    const [dayA, monthA, yearA] = a[1].date.split("-");
    const [dayB, monthB, yearB] = b[1].date.split("-");

    return (
      new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA)
    );
  });

  sortedBlogs.forEach(([key, value]) => {
    const [day, month, year] = value.date.split("-");
    const displayDate = `${monthNames[parseInt(month) - 1]} '${year.slice(-2)}`;
    indexHTML += `<li class="flex justify-between pb1"> 
                    <a href="./${key}.html" class="link">${value.title}</a> ${displayDate}
                  </li>`;
  });

  // Get index from path
  const indexFile = path + "/index.html";

  // Replace the id with the indexHTML
  const indexFileContent = fs.readFileSync(indexFile, "utf8");
  const replacedIndex = indexFileContent.replace(
    '<h2 id="posts" tabindex="-1">Posts</h2>',
    `<div id="tableofindex">${indexHTML}</div>`
  );

  fs.writeFileSync(indexFile, replacedIndex);
};

/**
 * Copies assets from the assets folder to the output folder.
 * @param {string} src - The source folder.
 * @param {string} dest - The destination folder.
 **/
const copyAssets = (src, dest, depth = 0) => {
  const files = fs.readdirSync(src);
  files.forEach((file) => {
    if (file === ".DS_Store") {
      return;
    }
    const srcFile = path.join(src, file);
    const destFile =
      depth === 0 && fs.statSync(srcFile).isDirectory()
        ? path.join(dest, "assets", file)
        : path.join(dest, file);
    if (fs.statSync(srcFile).isDirectory()) {
      fs.mkdirSync(destFile, { recursive: true });
      copyAssets(srcFile, destFile, depth + 1);
    } else {
      const destDir = path.dirname(destFile);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      const contents = fs.readFileSync(srcFile);
      fs.writeFileSync(destFile, contents);
    }
  });
};

/**
 * Main function that orchestrates the processing of all markdown files.
 */
const main = () => {
  const srcPath = path.resolve("content");
  const blogOutPath = path.resolve(".dist/blog");
  const dir = path.resolve(".dist");
  const indexOutPath = path.resolve(".dist");
  const assetsPath = path.resolve("assets");

  const blogTemplate = fs.readFileSync("./templates/initial/blog.html", "utf8");
  const defaulTemplate = fs.readFileSync(
    "./templates/initial/default.html",
    "utf8"
  );

  const indexFiles = glob.sync(`${srcPath}/*.md`);
  const blogFiles = glob.sync(`${srcPath}/posts/*.md`);

  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });

  indexFiles.forEach((filename) => {
    if (filename.includes("journey"))
      processDefaultFile(filename, defaulTemplate, indexOutPath, true);
    else processDefaultFile(filename, defaulTemplate, indexOutPath);
  });

  const blogs = new Map();

  blogFiles.forEach((filename) => {
    if (filename.includes("index.md")) {
      processDefaultFile(filename, defaulTemplate, blogOutPath);
      return;
    }
    processBlogFile(filename, blogTemplate, blogOutPath, blogs);
  });

  buildBlogIndex(blogs, blogOutPath);

  copyAssets(assetsPath, indexOutPath);
};

main();
