import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

import remarkMath from 'remark-math';    // Latex(Katex) 플러그인-수식
import rehypeKatex from 'rehype-katex';  // Latex(Katex) 플러그인-수식

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'A New Zero Meters: Original Me',
  // title: 'A New Zero Meters',
  // title: 'Original Me',
  tagline: 'Dinosaurs are cool',
  // favicon: 'img/favicon.ico',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://blog.anew0m.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/it',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en', 'jp', 'fr', 'es'],
    localeConfigs: {
      'ko': {
        label: 'ko-한국어',
        htmlLang: 'ko',
      },
      'en': {
        label: 'en-English',
        htmlLang: 'en',
      },
      'jp': {
        label: 'jp-日本語',
        htmlLang: 'jp',
      },
      'fr': {
        label: 'fr-Français',
        htmlLang: 'fr',
      },
      'es': {
        label: 'es-Español',
        htmlLang: 'es',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-learn',
        path: 'docs-learn',
        routeBasePath: 'docs-learn',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        /**
         * Required for any multi-instance plugin
         */
        id: 'life',
        /**
         * URL route for the blog section of your site.
         * *DO NOT* include a trailing slash.
         */
        routeBasePath: 'life',
        /**
         * Path to data on filesystem relative to site dir.
         */
        path: 'life',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ANew Zero Meters: Original Me',
      logo: {
        alt: 'My Site Logo',
        // src: 'img/logo.svg',
        src: 'img/logo.png',
      },
      items: [
        { position: 'left', label: 'Tutorial', type: 'docSidebar', sidebarId: 'tutorialSidebar', },
        { position: 'left', label: 'Learn', to: '/docs-learn/intro', activeBaseRegex: `/docs-learn/`,}, // ./docs-api/Intro.md
        { position: 'left', label: 'Blog', to: '/blog', },
        // { position: 'left', label: 'Life', to: '/life', },
        { position: 'right', type: 'localeDropdown', },
        { position: 'right', label: 'GitHub', href: 'https://github.com/anew0m', },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Tutorial', to: '/docs/intro', },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/anew0m',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
