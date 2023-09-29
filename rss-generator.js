import fs from "fs/promises";
import path from "path";
import rss from "rss";
import { JSDOM } from "jsdom";

// Set up RSS feed
const feed = new rss({
  title: "Anubhav's Blog",
  description:
    "Anubhab Patnaik's Blogs | Random chillpost on my daily drivers, chill outs & research stuff",
  feed_url: "https://anubhavp.dev/blog/feed.xml",
  site_url: "https://anubhavp.dev/blog",
  guid: "https://anubhavp.dev/blog",
  date: new Date(),
  author: "Anubhab Patnaik",
  custom_namespaces: {
    content: "http://purl.org/rss/1.0/modules/content/",
  },
  custom_elements: [
    {
      "atom:link": {
        _attr: {
          href: "https://anubhavp.dev/blog/feed.xml",
          rel: "self",
          type: "application/rss+xml",
        },
      },
    },
  ],
});

// Parse HTML files in directory
const months = [
  "index",
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

async function generateXmls() {
  try {
    const directoryPath = path.resolve("blog");
    const blogFiles = await fs.readdir(directoryPath);

    for (let file of blogFiles) {
      const filePath = path.join(directoryPath, file);
      if (
        path.extname(filePath) === ".html" &&
        !months.some((el) => filePath.includes(el))
      ) {
        const url = `https://anubhavp.dev/blog/${file}`;
        const html = await fs.readFile(filePath, "utf-8");

        const dom = new JSDOM(html);
        const title = dom.window.document.querySelector("title").textContent;
        const date = dom.window.document
          .querySelector('meta[name="publish-date"]')
          .getAttribute("content");
        const author = dom.window.document
          .querySelector('meta[name="author"]')
          .getAttribute("content");
        const description = dom.window.document
          .querySelector('meta[name="description"]')
          .getAttribute("content");
        const body = dom.window.document.querySelector("body").innerHTML;

        const item = {
          title,
          description,
          url,
          date,
          author,
          custom_elements: [{ "content:encoded": body }],
        };
        feed.item(item);
      }
    }

    const feedXML = feed.xml({ indent: true });
    const feedPath = path.resolve("blog", "feed.xml");
    await fs.writeFile(feedPath, feedXML); // Using await with promise-based writeFile
    console.log("RSS feed generated successfully.");

    const rootPath = path.resolve("./");
    const rootFiles = await fs.readdir(rootPath);
    const sitemapItems = [];

    for (let file of blogFiles) {
      const filePath = path.join(directoryPath, file);
      if (
        path.extname(filePath) === ".html" &&
        !months.some((el) => filePath.includes(el))
      ) {
        const url = `https://anubhavp.dev/blog/${file}`;
        const stat = await fs.stat(filePath);
        const lastmod = new Date(stat.mtime).toISOString();
        const changefreq = "monthly"; // You can adjust this as needed
        const priority = 0.5; // You can adjust this as needed

        const sitemapItem = `
              <url>
                  <loc>${url}</loc>
                  <lastmod>${lastmod}</lastmod>
                  <changefreq>${changefreq}</changefreq>
                  <priority>${priority}</priority>
              </url>
          `;

        sitemapItems.push(sitemapItem);
      }
    }

    for (let file of rootFiles) {
      const filePath = path.join(rootPath, file);
      if (file.endsWith(".html") && file !== "index.html") {
        const url = `https://anubhavp.dev/${file}`;
        const stat = await fs.stat(filePath);
        const lastmod = new Date(stat.mtime).toISOString();
        const changefreq = "monthly";
        const priority = 0.5;

        const sitemapItem = `
              <url>
                  <loc>${url}</loc>
                  <lastmod>${lastmod}</lastmod>
                  <changefreq>${changefreq}</changefreq>
                  <priority>${priority}</priority>
              </url>
          `;
        sitemapItems.push(sitemapItem);
      }
    }

    const sitemapXML = `<?xml version="1.0" encoding="utf-8" standalone="yes"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${sitemapItems.join("\n")}
    </urlset>`;
    const sitemapPath = path.resolve("./", "sitemap.xml");
    await fs.writeFile(sitemapPath, sitemapXML);
    console.log("Sitemap generated successfully.");
  } catch (err) {
    console.error(err);
  }
}

generateXmls();
