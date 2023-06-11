---
title: "StackIt-tech"
date: "2023-06-11"
description: The tech behind the spreadsheet monster.
tags: ["startup life", "Bangalore"]
ShowBreadCrumbs: true 
---

StackIt empowers you to automate the data importing process into your spreadsheets, making it more efficient and hassle-free. By eliminating the need for coding, StackIt enables users of all backgrounds to effortlessly create connections with various data sources and seamlessly import relevant data into their spreadsheets.

- [How does it work?](#how-does-it-work)
  - [Infrastructure](#infrastructure)
    - [The Plugin](#the-plugin)
    - [The Backend](#the-backend)
    - [The VPC & Data Pipelines](#the-vpc-data-pipelines)

## How does it work?

StackIt is a google workspace add-on available with Google Sheets. It connects to data sources such as Chargebee and PostgreSQL using your credentials. Credentials are stored in a secure Google Cloud Platform (GCP) project. StackIt uses Google Cloud's Secret Manager to store your credentials, which ensures that your credentials are encrypted and secure.

Chargbe credentials may look like this:  
\[testingchargebee-stackit\].chargebee.com  
djdiasjidusahdusa8na9sduaun9d_test_chargebee  

Once connected, StackIt provides the flexibility to choose from the available columns of the source data. You can select specific columns, like `subscription` or `customers`, and then map these columns respectively to your Sheets. StackIt also offers you to selectively import nested fields of the columns. For example, you can select `subscription` with `subscription_id` and `subscription_status` to import these fields into your Google Sheets. You have the liberty to select as many fields as you like.

<figure>
  <img src="/assets/img/stackit/stackit.png" alt="StackIt" style="width:100%">
  <figcaption>StackIt</figcaption>
</figure>

By providing the freedom to choose and map columns and their nested fields, StackIt enables you to have fine-grained control over the imported data and ensure that the relevant data is imported into your Google Sheets.

The seamless integration into Google Sheets allows you to work with the imported data directly within your spreadsheet, making it easily accessible for analysis, visualization, and further processing.

Note: ***StackIt does not store any of your data. It only acts as a bridge between your data sources and your Google Sheets.**

### Infrastructure

The infrastructure of the entire StackIt is divided into three parts:-

1. Plugin
2. The Backend
3. The Database/ Data Pipeline

#### The Plugin

**The Plugin** is built using ReactJs, AppScript(Google's version of JavaScript) and Network APIs. The code is structured into three segments:-

- The client-side code
- The server-side code
- The shared code

**The client-side code** is responsible for rendering the UI and handling user interactions, and is deployed on Google's AppScript.
**Clasp** is a cmd tool that enables you to push your code to Google's AppScript. It is similar to git but for AppScript. The client-side code, once built (the build folder in React ), is deployed on AppScript using Clasp. The plugin is rendered from those HTML files.

**The server-side code**  written in AppScript, is responsible for handling the API calls and the business logic. It communicates with the StackIt backend and is deployed on Google's AppScript. Clasp pushes the server-side code to AppScript, in the main file: **Code .gs**., which is the entry point for AppScript.

**The shared code** contains the APIs that are used by all the sections of the client-side code.

The structure of the source code looks like this:

```js

-dist // The final built source code that is deployed on AppScript via Clasp
  -code.gs
  -index.html
  -about.html
  -contact.html
-public
-src  
    -client
      -index
      -about
      -contact  
    -build1  // Transpiled React code -->*HTML  index.html --> moved to *dist 
    -build2  // Transpiled React code -->*HTML  about.html --> moved to *dist
    -src  
    -shared  // Common APIs for all the separate React Screens
  -server  
    -index.js // Entry point for AppScript --> Code.gs  --> moved to *dist
    -ui.js 
    -sheets.js //contains the spreadsheet APIs
  -appsscript.json  
  -package.json
  -webpack.config.js  // Webpack config file responsible for transpiring React and JS code
  -.clasp.json  
```

The final built source code is deployed on AppScript using Clasp and looks like this:

```js

-appsscript.json
-code.gs // Entry point for AppScript
-index.html // The HTML file that renders the plugin
-about.html
-contact.html

```

The AppScript code is deployed as a workspace add-on, the one that you see in the Google Sheets.

#### The Backend

#### The VPC & Data Pipelines
