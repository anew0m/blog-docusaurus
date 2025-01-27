```markdown
---
title: Reflections on Participating in the Homeownership Hackathon
description: An Introduction to the Personal Blog Creation Process Through the 'Homeownership Hackathon'
date: 2019-09-21T00:00:00+09:00
lastmod: 2019-09-21T00:00:00+09:00
slug: hackerton_myhome
authors: [minho]
tags: [hackerton]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

# Reflections on Participating in the Homeownership Hackathon

## **Hackathon**

### Introduction to the Hackathon

- Purpose

The [Homeownership Hackathon](https://www.notion.so/be735a45ff444a48bd4a23a0a299e2e5) is designed to move away from existing blogging platforms like [Naver Blog](https://section.blog.naver.com/BlogHome.nhn/), [Tistory](https://www.tistory.com/), and [Egloos](http://www.egloos.com), allowing individuals to build and enhance their own personal blog (home) that they can host and manage.

Participants could form teams or, if they already had a personal blog, they could choose to improve it or develop blog plugins, CMS, etc.

- Venue and Date

The Homeownership Hackathon took place on Saturday, September 21, 2019, from 10:30 AM to 8:00 PM at [Hyperconnect](https://hyperconnect.com/) in Samseong-dong, ASEM Tower.

- Organizer
  - [GODORI](https://github.com/godori) from [post-a-week](https://github.com/post-a-week/blog)

### Motivation for Participating in the Hackathon

The obvious reason for participating in the hackathon was to create my own blog (home).

Before this hackathon, I had attempted to build a blog site using [Jekyll](https://jekyllrb-ko.github.io/) and [Github](https://github.com/). However, juggling project deadlines and certification studies made it challenging to learn the [Ruby](https://www.ruby-lang.org/) language and understand Jekyll's structure.

Thus, I began searching for a platform built on a JAVA-based framework, and I was intrigued by [Gatsby](http://gatsbyjs.org/) and [Vuepress](https://vuepress.vuejs.org/). During this search, I discovered a markup language called [AsciiDoc](https://asciidoctor.org/), which supports various formats like docx and PDF upon conversion, which was appealing.

While looking for template engines that support AsciiDoc, I stumbled upon a blog post about building a blog __([Migrating to a Static Site - Jung Sang-hyuk](https://blog.benelog.net/migration-to-static-site.html))__, and ultimately decided to use [JBake](https://jbake.org/) as mentioned in the post.

Links related to AsciiDoc:
- [Basic Usage of Asciidoc](https://narusas.github.io/2018/03/21/Asciidoc-basic.html)
- [Writing a Book with Asciidoc Templates](http://honeymon.io/tech/2018/02/27/asiidoc-book-template.html)

### Purpose of Creating a Personal Blog

There are three main reasons why I decided to start a blog:

- Organizing Study Materials

Previously, I didn't record my studies anywhere, so while I remembered things well at the time of learning, I tended to forget them after a while. By organizing my study materials, I aim to review and recall what I learned more quickly even after time has passed.

- Portfolio Organization

It was challenging to remember what I had done at specific points in time. By documenting related content on this blog, I can keep track of what I have accomplished and when.

- Practicing Writing

During my master's program, I felt that my writing skills were lacking. Conveying my thoughts to others through writing and developing logical arguments felt difficult. If I ever get the opportunity to write a book or pursue a Ph.D., I believe that improving my writing skills could help me make the most of such opportunities.

### Impressions of Participating in the Hackathon

I'm delighted to have completed the personal blog I had been postponing due to busyness through this hackathon.

The hackathon started at a reasonable time of 10:30 AM and ended at 8:00 PM, making it manageable even for busy professionals.

Although I don't know when it will happen, if a second Homeownership Hackathon is held, I would like to participate again to improve the areas of my blog that I want to enhance.

## **The Process of Building My Home**

This blog was created by following the [post by Jung Sang-hyuk from the Development Sooyanglog Blog](https://blog.benelog.net/migration-to-static-site.html).

### Service Environment

- Static Site Generation Platform: [JBake](https://jbake.org/)
- Content Repository: GitHub
- Build and Deployment: [Netlify(Ubuntu 14.04)](https://www.netlify.com/), [Travis CI(Ubuntu 14.04)](https://travis-ci.org/)
- Visitor Statistics: [Google Analytics](https://analytics.google.com/analytics/web/)

### Steps to Build

1. Fork the blog repository
2. Modify the forked repository's source to suit my needs
3. Create and integrate Travis
4. Create and integrate Google Analytics
5. Create Netlify and link it with the forked repository in Git

### Notable Points During Construction

Initially, errors occurred during builds on Travis and Netlify, so I downgraded the Ubuntu version from 16.04 to 14.04 for the build. For Travis, I added 'dist: trusty' to the *.travis.yml* file, and for Netlify, I modified the 'Build image selection' under *Setting - Build & deploy*. _(Netlify worked correctly on version 16.04, so I reverted from 14.04 to 16.04.)_

Since the blog is built and deployed on both Netlify and Travis CI, it can be accessed via the following two addresses:

- https://anew0m.netlify.com - Netlify
- https://anew0m.github.io/blog/ - Travis CI

The end.
```