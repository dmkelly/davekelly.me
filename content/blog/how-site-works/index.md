---
title: How I Made This Site
date: "2020-01-19T22:00:00.000Z"
description: An overview of the tools I used to build and deploy davekelly.me
---

I use personal projects as an opportunity to explore and learn new technologies. I've found that not all new technologies pan out the way I hope. I try not to place too many bets on unfamiliar technologies when I'm working on a project that needs to be production-ready at some point. Personal projects give me a low-risk environment to do a deep dive on an interesting technology — if the technology doesn't pan out, I can scrap or rebuild the project at my leisure without any pressure to maintain a codebase with significant technical debt. When choosing a technology for my personal website, I saw it as an opportunity to do a deep dive into [Gatsby](https://www.gatsbyjs.org/).

## Gatsby

As you may be aware, Gatsby is a static site generator that runs webpack under the hood and uses React for it's presentation layer. Gatsby has been [growing in popularity](https://trends.builtwith.com/framework/Gatsby-JS) recently and its React-based implementation was appealing to me. It's able to provide a very fast experience for visitors because all the work required to generate a page is done upfront at build time instead of at request time. This makes it an ideal tool for powering a website that has a relatively low number of initial page states, like a blog.

After skimming through some of the documentation, I decided to branch off one of Gatsby's many [starter projects](https://www.gatsbyjs.org/docs/starters/) as the basis for my website. Using a starter project gave me an opportunity to dig into an existing codebase to understand best practices and how things worked, but still left a lot of room for me to get my hands dirty with custom development work to make the website mine.

I chose the [Gatsby Starter Blog](https://github.com/gatsbyjs/gatsby-starter-blog) template as the basis for my project. It comes out of the box with plugin support for dynamically adding new [markdown-based blog content](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/), [image processing](https://www.gatsbyjs.org/packages/gatsby-image/), and [sitemap](https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/) and [feed](https://www.gatsbyjs.org/packages/gatsby-plugin-feed/) generation. I first familiarized myself with the project by making some changes that didn't touch any critical paths, like adding support for code formatting on commit using [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). Then, dug a little deeper with a few style and layout changes. I also took the opportunity to try using [styled-components](https://styled-components.com/). This allowed me to deeply examine large portions of the codebase without making any critical changes to behavior. In my previous React projects I've preferred using [Sass](https://sass-lang.com/) combined with [CSS Modules](https://github.com/css-modules/css-modules) to keep my styles organized and well-scoped. I think both technologies are useful and effective and don't strongly prefer one over the other at this point although each may lend itself better to different use cases. The starter project also introduced me to the [Typography](https://github.com/KyleAMathews/typography.js) library, which allows for defining themes and whitespace based on a given font or set of fonts.

As I became more familiar with the codebase and workings of Gatsby, I added a [now](https://sivers.org/nowff) page and made changes to the `gatsby-node.js` file to add the `posts` segment to each blog post path.

## Build and Deploy

This website is hosted on [Github Pages](https://pages.github.com/) and uses a [Github Action](https://github.com/features/actions) to automatically deploy the latest commit on the project's `master` branch to Github pages. This project is my first time using Github actions and I'm impressed with the available ecosystem. There are available actions in the [marketplace](https://github.com/marketplace?type=actions) to help support a wide variety of workflows and tasks. This website's deploy workflow uses actions to [checkout the codebase](https://github.com/marketplace/actions/checkout), [setup a Node environment](https://github.com/marketplace/actions/setup-node-js-for-use-with-actions), and [deploy assets to Github Pages](https://github.com/marketplace/actions/deploy-to-github-pages). The entire workflow is defined in a yaml file as follows:

```yml
name: Deploy
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v1
      - name: Build
        uses: actions/setup-node@v1
        with:
          node-version: "10.x"
      - run: npm install
      - run: npm run build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@releases/v3
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: gh-pages # The branch the action should deploy to.
          FOLDER: public # The folder the action should deploy.
```

## Mailing List

To allow visitors to subscribe to website updates, I'm using [Mailchimp](https://mailchimp.com/). Mailchimp supports an automation workflow that subscribes to changes in an RSS feed and can send scheduled emails based on data in the feed when new items are detected. My email template is fairly simple and is mostly driven by data in the RSS feed:

```html
<h1>*|RSSFEED:TITLE|*</h1>
*|RSSITEMS:|*
<h2>*|RSSITEM:TITLE|*</h2>
*|RSSITEM:CONTENT_FULL|* *|END:RSSITEMS|*
<p>
  Read more at <a href="*|RSSFEED:URL|*" target="_blank">*|RSSFEED:URL|*</a>
</p>
```

Mailchimp uses `*|xxx|*` syntax to represent merge tags, or dynamic content that is powered by some metadata that is available in the context of the email. Merge tags are commonly used for personalization of emails sent to a large audience (like referring to the recipient by name). The template header tag is powered by the title tag in the RSS feed. The `*|RSSITEMS:|*` and `*|END:RSSITEMS|*` tags provide a simple control flow to iterate over each new post in the feed to be included in the email. For each new post, a secondary header is created, its content driven by the post (`RSSITEM`) title, and the content of the post is added below. Finally, a link to the website is added at the bottom, using the `link` tag of the channel.

## Final Thoughts

At this stage, I'm up and running with my blog and feel comfortable enough with Gatsby to be effective. I'd highly recommend Gatsby to a more technical blogger, especially someone familiar with React. I didn't examine Gatsby from the standpoint of a non-technical blogger, but I suspect it would be very challenging to launch a more custom Gatsby-powered website. Gatsby does support using more user-friendly CMS-based data sources for content, but I haven't looked into it for this project.
