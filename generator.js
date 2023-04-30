#!/usr/bin/env node

import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import mkdirp from 'mkdirp'
import path from 'path'
import hljs from 'highlight.js';
import MarkdownIt from 'markdown-it'
import markdownItAnchor from 'markdown-it-anchor'
import string from 'string'
import { mdToPdf } from 'md-to-pdf'

const slugify = s => string(s).slugify().toString()


const md = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight(str, language) {
        if (language && hljs.getLanguage(language)) {
            try {

                return hljs.highlight(str, { language: language }).value;
            } catch (err) {
                console.log(err)
            }
        }

        return null;
    }
}).use(markdownItAnchor, { slugify });


const readFile = (filename) => {
    const rawFile = fs.readFileSync(filename, 'utf8')
    const parsed = matter(rawFile)
    const html = md.render(parsed.content)

    return {...parsed, html }
}

const templatize = (template, { date, title, content, author }) =>
    template
    .replace(/<!-- PUBLISH_DATE -->/g, date)
    .replace(/<!-- TITLE -->/g, title)
    .replace(/<!-- CONTENT -->/g, content)
    .replace(/<!-- AUTHOR -->/g, author)
const indextemplatize = (template, { date, title, content, author }) =>
    template
    .replace(/<!-- CONTENT -->/g, content)
    

const saveFile = (filename, contents) => {
    const dir = path.dirname(filename)
    mkdirp.sync(dir)
    fs.writeFileSync(filename, contents)
}

const getOutputFilename = (filename, outPath) => {
    const basename = path.basename(filename)
    const newfilename = basename.substring(0, basename.length - 3) + '.html'
    const outfile = path.join(outPath, newfilename)
    return outfile
}

const getOutputPdfname = (filename, outPath) => {
    const basename = path.basename(filename)
    const newfilename = basename.substring(0, basename.length - 3) + '.pdf'
    const outfile = path.join(outPath, newfilename)
    return outfile
}

const processBlogFile = async(filename, template, outPath) => {
    const file = readFile(filename)
    const outfilename = getOutputFilename(filename, outPath)
    const outpdfname = getOutputPdfname(filename, outPath)

    const templatized = templatize(template, {
            date: file.data.date,
            title: file.data.title,
            content: file.html,
            author: file.data.author,
        })
        // await mdToPdf({ path:filename }, { dest: outpdfname }) ;
    saveFile(outfilename, templatized)
    console.log(`📝 ${outfilename}`)
        // console.log(`📝 ${outpdfname}`)
}
const processIndexFile = async(filename, template, outPath) => {
    const file = readFile(filename)
    const outfilename = getOutputFilename(filename, outPath)
    const templatized = indextemplatize(template, {
            content: file.html,
        })
    saveFile(outfilename, templatized)
    console.log(`📝 ${outfilename}`)
}

const main = () => {
    const srcPath = path.resolve('content')
    const outPath = path.resolve('blog')
    const indexoutPath = path.resolve('')
    const blogtemplate = fs.readFileSync('./templates/initial/blogtemplate.html', 'utf8')
    const indextemplate = fs.readFileSync('./templates/initial/indextemplate.html', 'utf8')
    const currenttemplate = fs.readFileSync('./templates/initial/currenttemplate.html', 'utf8')
    const filenames = glob.sync(srcPath + '/**/*.md')

    filenames.forEach((filename) => {
        if(filename.includes('index.md')) processIndexFile(filename, indextemplate, indexoutPath);
        else if(filename.includes('current.md')) processIndexFile(filename, currenttemplate, indexoutPath);
        else processBlogFile(filename, blogtemplate, outPath)
    })
}

main();