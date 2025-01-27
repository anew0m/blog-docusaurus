---
title: My Home Hackathon Participation Review
description: Introduction to the process of creating a personal blog through the 'My Home Hackathon'
date: 2019-09-21T00:00:00+09:00
lastmod: 2019-09-21T00:00:00+09:00
slug: hackerton_myhome
authors: [minho]
tags: [hackerton]
image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

# My Home Hackathon Participation Review

## **Hackathon**

### Introduction to the Hackathon

- Purpose

The [My Home Hackathon](https://www.notion.so/be735a45ff444a48bd4a23a0a299e2e5) is a hackathon aimed at building and improving a personal home (blog) that allows individuals to create and service their own websites, moving away from existing blogging platforms like [Naver Blog](https://section.blog.naver.com/BlogHome.nhn/), [Tistory](https://www.tistory.com/), and [Egloos](http://www.egloos.com).

Participants could form teams, or those who already had personal blogs could choose to improve their existing blogs or develop blog plugins, CMS, etc.

- Location and Date

The My Home Hackathon was held on Saturday, September 21, 2019, from 10:30 AM to 8:00 PM at [Hyperconnect](https://hyperconnect.com/) in Samseong-dong, ASEM Tower.

- Organizer
  - [GODORI](https://github.com/godori) from [post-a-week](https://github.com/post-a-week/blog)


### Motivation for Participating in the Hackathon

The motivation for participating in the hackathon was, of course, to create my own home (hereafter referred to as a blog).

Before creating a blog in this hackathon, I had tried building a blog site using [Jekyll](https://jekyllrb-ko.github.io/) and [Github](https://github.com/). However, juggling project deadlines and certification studies made it challenging to learn the [Ruby](https://www.ruby-lang.org/) language and understand the Jekyll structure.

Therefore, I started looking for platforms built on a JAVA basis instead of Ruby, and among them, [Gatsby](http://gatsbyjs.org/) and [Vuepress](https://vuepress.vuejs.org/) caught my eye. During this search, I discovered a markup language called [AsciiDoc](https://asciidoctor.org/), which attracted me with its advantage of supporting various formats like docx and PDF when converting files.

While searching for template engines that support AsciiDoc, I came across a related blog post __([Migration to a Static Site - Jung Sang-hyuk](https://blog.benelog.net/migration-to-static-site.html))__, and from this post, I finally chose [JBake](https://jbake.org/).

Links related to AsciiDoc:
- [Basic Usage of Asciidoc](https://narusas.github.io/2018/03/21/Asciidoc-basic.html)
- [Writing a Book Template Based on Asciidoc](http://honeymon.io/tech/2018/02/27/asiidoc-book-template.html)



### Purpose of Creating a Personal Blog

There are three main reasons why I am setting up a blog.

- Organizing Study Content

Even though I studied, I didn't record it anywhere, so while I remembered it well at the time of learning, I tended to forget it quickly after a short period. Therefore, by organizing the content I studied, I aim to review it and recall the content I studied more quickly even after time has passed.

- Organizing Portfolio

It wasn't easy to know what I had done at a specific point in time after some time had passed. Therefore, by recording related content on this blog, I aim to know what I have done and when.

- Practicing Writing

During my master's course, I felt that my writing skills were lacking. It is challenging to convey what I think to others in writing and to logically develop my writing. If, someday, I have the opportunity to write a book or pursue a doctoral course, I think that being able to write well might help me seize that opportunity.

### Impressions of Participating in the Hackathon

I am pleased to have completed the personal blog creation that I had been postponing due to being busy through this hackathon.

The hackathon started at 10:30 AM, not too early on a Saturday, and ended at 8:00 PM, not too late, making it a hackathon that was not burdensome even for busy office workers.

I don't know when it will be, but if the second My Home Hackathon is held, I would like to participate again and work on improving the parts I wanted to enhance on this blog.

## **Process of Building My Home**

This blog was created by following the [post written by Jung Sang-hyuk from the Development Cultivation Blog](https://blog.benelog.net/migration-to-static-site.html).

### Service Environment

- Static Site Generation Platform: [JBake](https://jbake.org/)
- Content Repository: GitHub
- Build and Deployment: [Netlify(Ubuntu 14.04)](https://www.netlify.com/), [Travis CI(Ubuntu 14.04)](https://travis-ci.org/)
- Visitor Statistics Aggregation: [Google Analytics](https://analytics.google.com/analytics/web/)

### Construction Steps

1. Fork the blog repository
2. Modify the source of the forked repository to suit me
3. Create and link Travis
4. Create and link Google Analytics
5. Create Netlify and link the forked repository in git

### Special Notes During Construction

Initially, errors occurred when building on Travis or Netlify, so I downgraded the Ubuntu version from 16.04 to 14.04 for the build. For Travis, I added the 'dist: trusty' code to the *.travis.yml* file, and for Netlify, I modified it in the 'Build image selection' under the *Setting - Build & deploy* menu. _(Netlify worked correctly on version 16.04, so I changed it back from 14.04 to 16.04.)_

Since the build and deployment are done on both Netlify and Travis CI, this blog can be accessed at the following two addresses:

- https://anew0m.netlify.com - Netlify
- https://anew0m.github.io/blog/ - Travis CI

The end.