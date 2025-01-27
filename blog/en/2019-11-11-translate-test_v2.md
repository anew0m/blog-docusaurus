```markdown
# My Experience Participating in the Homeownership Hackathon

## **Hackathon**

### Introduction to the Hackathon

- Purpose

The [Homeownership Hackathon](https://www.notion.so/be735a45ff444a48bd4a23a0a299e2e5) is an event aimed at moving away from existing blogging platforms ([Naver Blog](https://section.blog.naver.com/BlogHome.nhn/), [Tistory](https://www.tistory.com/), [Egloos](http://www.egloos.com), etc.) and allowing individuals to build and improve their own personal home (blog) websites. Participants could either form teams or work on improving their existing personal blogs by developing plugins, CMS, etc.

- Venue and Date

The Homeownership Hackathon took place on Saturday, September 21, 2019, from 10:30 AM to 8:00 PM at [Hyperconnect](https://hyperconnect.com/) in Samseong-dong, ASEM Tower.

- Organizer
  - [GODORI](https://github.com/godori) from [post-a-week](https://github.com/post-a-week/blog)

### Motivation for Participating in the Hackathon

The motivation for participating in the hackathon was, of course, to create my own home (blog).

Before creating a blog in this hackathon, I had tried setting up a blog site using [Jekyll](https://jekyllrb-ko.github.io/) and [Github](https://github.com/). However, juggling project deadlines and certification studies made it challenging to learn the [Ruby](https://www.ruby-lang.org/) language and understand Jekyll's structure.

Therefore, I started looking for platforms built on a JAVA base instead of Ruby, and among them, [Gatsby](http://gatsbyjs.org/) and [Vuepress](https://vuepress.vuejs.org/) caught my eye. During this search, I discovered a markup language called [AsciiDoc](https://asciidoctor.org/), which attracted me with its ability to convert files into various formats like docx and PDF.

While searching for template engines that support AsciiDoc, I came across a related blog post __([Migration to a Static Site - by Jeong Sang-hyuk](https://blog.benelog.net/migration-to-static-site.html))__, and ultimately decided to adopt [JBake](https://jbake.org/) as used in the post.

Links related to AsciiDoc:
- [Basic Usage of Asciidoc](https://narusas.github.io/2018/03/21/Asciidoc-basic.html)
- [Writing a Book Template Based on Asciidoc](http://honeymon.io/tech/2018/02/27/asiidoc-book-template.html)

### Purpose of Creating a Personal Blog

There are three main reasons why I decided to start a blog.

- Organizing Study Content

Previously, I didn't record my studies anywhere, so while I remembered them well at the time of learning, I tended to forget them after a while. By organizing what I've studied, I aim to review and recall the content more quickly even after time has passed.

- Organizing Portfolio

It wasn't easy to remember what I had done at specific points in time. By recording related content on this blog, I aim to keep track of what I've done and when.

- Practicing Writing

During my master's program, I felt that my writing skills were lacking. Conveying my thoughts to others through writing and logically developing my ideas felt challenging. If, by any chance, I get the opportunity to write a book or pursue a Ph.D., I believe that being able to write well could help me seize those opportunities.

### Thoughts on Participating in the Hackathon

I'm delighted to have completed the personal blog creation that I had been postponing due to being busy, thanks to this hackathon.

The hackathon started at a reasonable time of 10:30 AM and ended at 8:00 PM, making it manageable even for busy professionals.

Though I don't know when it will happen, if there's a second Homeownership Hackathon, I would like to participate again to improve the parts of my blog that I want to enhance.

## **Process of Building My Home**

This blog was created by following the [post written by Jeong Sang-hyuk from the Development Meditation Blog](https://blog.benelog.net/migration-to-static-site.html).

### Service Environment

- Static Site Generation Platform: [JBake](https://jbake.org/)
- Content Repository: GitHub
- Build and Deployment: [Netlify(Ubuntu 14.04)](https://www.netlify.com/), [Travis CI(Ubuntu 14.04)](https://travis-ci.org/)
- Visitor Statistics: [Google Analytics](https://analytics.google.com/analytics/web/)

### Construction Steps

1. Fork the blog repository
2. Modify the forked repository's source to suit my needs
3. Create and link Travis
4. Create and link Google Analytics
5. Create Netlify and link the forked repository in Git

### Special Notes During Construction

Initially, there were errors during the build process on Travis and Netlify, so I downgraded the Ubuntu version from 16.04 to 14.04 for the build. In Travis, I added 'dist: trusty' to the *.travis.yml* file, and in Netlify, I modified the 'Build image selection' under *Setting - Build & deploy*. _(Netlify worked correctly on version 16.04, so I changed it back from 14.04 to 16.04.)_

Since the build and deployment are done on both Netlify and Travis CI, this blog can be accessed via the following two addresses:

- https://anew0m.netlify.com - Netlify
- https://anew0m.github.io/blog/ - Travis CI

The end.
```