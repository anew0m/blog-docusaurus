"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["31865"],{30091:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>u,default:()=>g,assets:()=>d,toc:()=>h,frontMatter:()=>c});var t=JSON.parse('{"id":"configuration","title":"Configuration","description":"Configuring your site\'s behavior through docusaurus.config.js and more.","source":"@site/docs/configuration.mdx","sourceDirName":".","slug":"/configuration","permalink":"/docs/configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/edit/main/website/docs/configuration.mdx","tags":[],"version":"current","lastUpdatedBy":"Ryoga","lastUpdatedAt":1731918900000,"frontMatter":{"description":"Configuring your site\'s behavior through docusaurus.config.js and more."},"sidebar":"docs","previous":{"title":"Installation","permalink":"/docs/installation"},"next":{"title":"Playground","permalink":"/docs/playground"}}'),o=s("24246"),r=s("80980"),i=s("15398"),a=s("58636"),l=s("78596");let c={description:"Configuring your site's behavior through docusaurus.config.js and more."},u="Configuration",d={},h=[{value:"Syntax to declare <code>docusaurus.config.js</code>",id:"syntax-to-declare-docusaurus-config",level:2},{value:"What goes into a <code>docusaurus.config.js</code>?",id:"what-goes-into-a-docusaurusconfigjs",level:2},{value:"Site metadata",id:"site-metadata",level:3},{value:"Deployment configurations",id:"deployment-configurations",level:3},{value:"Theme, plugin, and preset configurations",id:"theme-plugin-and-preset-configurations",level:3},{value:"Custom configurations",id:"custom-configurations",level:3},{value:"Accessing configuration from components",id:"accessing-configuration-from-components",level:2},{value:"Customizing Babel Configuration",id:"customizing-babel-configuration",level:2}];function f(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"configuration",children:"Configuration"})}),"\n","\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Check the ",(0,o.jsx)(n.a,{href:"/docs/api/docusaurus-config",children:(0,o.jsxs)(n.strong,{children:[(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," API reference"]})})," for an exhaustive list of options."]})}),"\n",(0,o.jsx)(n.p,{children:"Docusaurus has a unique take on configurations. We encourage you to congregate information about your site into one place. We guard the fields of this file and facilitate making this data object accessible across your site."}),"\n",(0,o.jsxs)(n.p,{children:["Keeping a well-maintained ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," helps you, your collaborators, and your open source contributors to be able to focus on documentation while still being able to customize the site."]}),"\n",(0,o.jsxs)(n.h2,{id:"syntax-to-declare-docusaurus-config",children:["Syntax to declare ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," file is run in Node.js and should export either:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["a ",(0,o.jsx)(n.strong,{children:"config object"})]}),"\n",(0,o.jsxs)(n.li,{children:["a ",(0,o.jsx)(n.strong,{children:"function"})," that creates the config object"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," file supports:"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://flaviocopes.com/es-modules/",children:(0,o.jsx)(n.strong,{children:"ES Modules"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://flaviocopes.com/commonjs/",children:(0,o.jsx)(n.strong,{children:"CommonJS"})})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/typescript-support#typing-config",children:(0,o.jsx)(n.strong,{children:"TypeScript"})})}),"\n"]}),(0,o.jsx)(n.p,{children:"Constraints:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Required:"})," use ",(0,o.jsx)(n.code,{children:"export default /* your config*/"})," (or ",(0,o.jsx)(n.code,{children:"module.exports"}),") to export your Docusaurus config"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Optional:"})," use ",(0,o.jsx)(n.code,{children:"import Lib from 'lib'"})," (or ",(0,o.jsx)(n.code,{children:"require('lib')"}),") to import Node.js packages"]}),"\n"]})]}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus gives us the ability to declare its configuration in various ",(0,o.jsx)(n.strong,{children:"equivalent ways"}),", and all the following config examples lead to the exact same result:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"module.exports = {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"import type {Config} from '@docusaurus/types';\n\nexport default {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n} satisfies Config;\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"const config = {\n  title: 'Docusaurus',\n  url: 'https://docusaurus.io',\n  // your site config ...\n};\n\nexport default config;\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default function configCreator() {\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // your site config ...\n  };\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default async function createConfigAsync() {\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // your site config ...\n  };\n}\n"})}),"\n",(0,o.jsxs)(n.admonition,{title:"Using ESM-only packages",type:"tip",children:[(0,o.jsx)(n.p,{children:"Using an async config creator can be useful to import ESM-only modules (notably most Remark plugins). It is possible to import such modules thanks to dynamic imports:"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default async function createConfigAsync() {\n  // Use a dynamic import instead of require('esm-lib')\n  // highlight-next-line\n  const lib = await import('lib');\n\n  return {\n    title: 'Docusaurus',\n    url: 'https://docusaurus.io',\n    // rest of your site config...\n  };\n}\n"})})]}),"\n",(0,o.jsxs)(n.h2,{id:"what-goes-into-a-docusaurusconfigjs",children:["What goes into a ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"}),"?"]}),"\n",(0,o.jsxs)(n.p,{children:["You should not have to write your ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," from scratch even if you are developing your site. All templates come with a ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," that includes defaults for the common options."]}),"\n",(0,o.jsx)(n.p,{children:"However, it can be helpful if you have a high-level understanding of how the configurations are designed and implemented."}),"\n",(0,o.jsx)(n.p,{children:"The high-level overview of Docusaurus configuration can be categorized into:"}),"\n",(0,o.jsx)(l.Z,{toc:h,minHeadingLevel:3,maxHeadingLevel:3}),"\n",(0,o.jsx)(n.h3,{id:"site-metadata",children:"Site metadata"}),"\n",(0,o.jsxs)(n.p,{children:["Site metadata contains the essential global metadata such as ",(0,o.jsx)(n.code,{children:"title"}),", ",(0,o.jsx)(n.code,{children:"url"}),", ",(0,o.jsx)(n.code,{children:"baseUrl"}),", and ",(0,o.jsx)(n.code,{children:"favicon"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"They are used in several places such as your site's title and headings, browser tab icon, social sharing (Facebook, X) information or even to generate the correct path to serve your static files."}),"\n",(0,o.jsx)(n.h3,{id:"deployment-configurations",children:"Deployment configurations"}),"\n",(0,o.jsxs)(n.p,{children:["Deployment configurations such as ",(0,o.jsx)(n.code,{children:"projectName"}),", ",(0,o.jsx)(n.code,{children:"organizationName"}),", and optionally ",(0,o.jsx)(n.code,{children:"deploymentBranch"})," are used when you deploy your site with the ",(0,o.jsx)(n.code,{children:"deploy"})," command."]}),"\n",(0,o.jsxs)(n.p,{children:["It is recommended to check the ",(0,o.jsx)(n.a,{href:"/docs/deployment",children:"deployment docs"})," for more information."]}),"\n",(0,o.jsx)(n.h3,{id:"theme-plugin-and-preset-configurations",children:"Theme, plugin, and preset configurations"}),"\n",(0,o.jsxs)(n.p,{children:["List the ",(0,o.jsx)(n.a,{href:"/docs/using-plugins#using-themes",children:"themes"}),", ",(0,o.jsx)(n.a,{href:"/docs/using-plugins",children:"plugins"}),", and ",(0,o.jsx)(n.a,{href:"/docs/using-plugins#using-presets",children:"presets"})," for your site in the ",(0,o.jsx)(n.code,{children:"themes"}),", ",(0,o.jsx)(n.code,{children:"plugins"}),", and ",(0,o.jsx)(n.code,{children:"presets"})," fields, respectively. These are typically npm packages:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    '@docusaurus/plugin-content-blog',\n    '@docusaurus/plugin-content-pages',\n  ],\n  themes: ['@docusaurus/theme-classic'],\n};\n"})}),"\n",(0,o.jsxs)(n.admonition,{type:"tip",children:[(0,o.jsxs)(n.p,{children:["Docusaurus supports ",(0,o.jsx)(n.a,{href:"/docs/using-plugins#module-shorthands",children:(0,o.jsx)(n.strong,{children:"module shorthands"})}),", allowing you to simplify the above configuration as:"]}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: ['content-blog', 'content-pages'],\n  themes: ['classic'],\n};\n"})})]}),"\n",(0,o.jsx)(n.p,{children:"They can also be loaded from local directories:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"import path from 'path';\n\nexport default {\n  // ...\n  themes: [path.resolve(__dirname, '/path/to/docusaurus-local-theme')],\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"To specify options for a plugin or theme, replace the name of the plugin or theme in the config file with an array containing the name and an options object:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  plugins: [\n    [\n      'content-blog',\n      {\n        path: 'blog',\n        routeBasePath: 'blog',\n        include: ['*.md', '*.mdx'],\n        // ...\n      },\n    ],\n    'content-pages',\n  ],\n};\n"})}),"\n",(0,o.jsxs)(n.p,{children:["To specify options for a plugin or theme that is bundled in a preset, pass the options through the ",(0,o.jsx)(n.code,{children:"presets"})," field. In this example, ",(0,o.jsx)(n.code,{children:"docs"})," refers to ",(0,o.jsx)(n.code,{children:"@docusaurus/plugin-content-docs"})," and ",(0,o.jsx)(n.code,{children:"theme"})," refers to ",(0,o.jsx)(n.code,{children:"@docusaurus/theme-classic"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: './sidebars.js',\n        },\n        theme: {\n          customCss: ['./src/css/custom.css'],\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"presets: [['classic', {...}]]"})," shorthand works as well."]})}),"\n",(0,o.jsxs)(n.p,{children:["For further help configuring themes, plugins, and presets, see ",(0,o.jsx)(n.a,{href:"/docs/using-plugins",children:"Using Plugins"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"custom-configurations",children:"Custom configurations"}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus guards ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"})," from unknown fields. To add custom fields, define them in ",(0,o.jsx)(n.code,{children:"customFields"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  // ...\n  // highlight-start\n  customFields: {\n    image: '',\n    keywords: [],\n  },\n  // highlight-end\n  // ...\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"accessing-configuration-from-components",children:"Accessing configuration from components"}),"\n",(0,o.jsxs)(n.p,{children:["Your configuration object will be made available to all the components of your site. And you may access them via React context as ",(0,o.jsx)(n.code,{children:"siteConfig"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Basic example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n// highlight-next-line\nimport useDocusaurusContext from '@docusaurus/useDocusaurusContext';\n\nconst Hello = () => {\n  // highlight-start\n  const {siteConfig} = useDocusaurusContext();\n  // highlight-end\n  const {title, tagline} = siteConfig;\n\n  return <div>{`${title} \xb7 ${tagline}`}</div>;\n};\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If you just want to use those fields on the client side, you could create your own JS files and import them as ES6 modules, there is no need to put them in ",(0,o.jsx)(n.code,{children:"docusaurus.config.js"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"customizing-babel-configuration",children:"Customizing Babel Configuration"}),"\n",(0,o.jsxs)(n.p,{children:["Docusaurus transpiles your site's source code using Babel by default. If you want to customize the Babel configuration, you can do so by creating a ",(0,o.jsx)(n.code,{children:"babel.config.js"})," file in your project root."]}),"\n",(0,o.jsx)(n.p,{children:"To use the built-in preset as a base configuration, install the following package and use it"}),"\n",(0,o.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(a.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install --save @docusaurus/babel\n"})})}),(0,o.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @docusaurus/babel\n"})})}),(0,o.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @docusaurus/babel\n"})})})]}),"\n",(0,o.jsxs)(n.p,{children:["Then use the preset in your ",(0,o.jsx)(n.code,{children:"babel.config.js"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"export default {\n  presets: ['@docusaurus/babel/preset'],\n};\n"})}),"\n",(0,o.jsx)(n.p,{children:"Most of the time, the default preset configuration will work just fine. If you want to customize your Babel configuration (e.g. to add support for Flow), you can directly edit this file. For your changes to take effect, you need to restart the Docusaurus dev server."})]})}function g(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(f,{...e})}):f(e)}},78596:function(e,n,s){s.d(n,{Z:()=>i});var t=s("24246");s("27378");var o=s("89477");let r="tableOfContentsInline_2sru";function i(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:i}=e;return(0,t.jsx)("div",{className:r,children:(0,t.jsx)(o.Z,{toc:n,minHeadingLevel:s,maxHeadingLevel:i,className:"table-of-contents",linkClassName:null})})}},89477:function(e,n,s){s.d(n,{Z:()=>c});var t=s("24246"),o=s("27378"),r=s("26378");function i(e){let n=e.getBoundingClientRect();return n.top===n.bottom?i(e.parentNode):n}var a=s("35363");let l=o.memo(function e(n){let{toc:s,className:o,linkClassName:r,isChild:i}=n;return s.length?(0,t.jsx)("ul",{className:i?void 0:o,children:s.map(n=>(0,t.jsxs)("li",{children:[(0,t.jsx)(a.Z,{to:`#${n.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:n.value}}),(0,t.jsx)(e,{isChild:!0,toc:n.children,className:o,linkClassName:r})]},n.id))}):null});function c(e){let{toc:n,className:s="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:u,maxHeadingLevel:d,...h}=e,f=(0,r.L)(),g=u??f.tableOfContents.minHeadingLevel,p=d??f.tableOfContents.maxHeadingLevel,m=function(e){let{toc:n,minHeadingLevel:s,maxHeadingLevel:t}=e;return(0,o.useMemo)(()=>(function e(n){let{toc:s,minHeadingLevel:t,maxHeadingLevel:o}=n;return s.flatMap(n=>{var s;let r=e({toc:n.children,minHeadingLevel:t,maxHeadingLevel:o});return(s=n).level>=t&&s.level<=o?[{...n,children:r}]:r})})({toc:function(e){let n=e.map(e=>({...e,parentIndex:-1,children:[]})),s=Array(7).fill(-1);n.forEach((e,n)=>{let t=s.slice(2,e.level);e.parentIndex=Math.max(...t),s[e.level]=n});let t=[];return n.forEach(e=>{let{parentIndex:s,...o}=e;s>=0?n[s].children.push(o):t.push(o)}),t}(n),minHeadingLevel:s,maxHeadingLevel:t}),[n,s,t])}({toc:n,minHeadingLevel:g,maxHeadingLevel:p});return!function(e){let n=(0,o.useRef)(void 0),s=function(){let e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,o.useEffect)(()=>{e.current=n?0:document.querySelector(".navbar").clientHeight},[n]),e}();(0,o.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:t,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:a}=e;function l(){var e;let l=(e=t,Array.from(document.getElementsByClassName(e))),c=function(e,n){let{anchorTopOffset:s}=n,t=e.find(e=>i(e).top>=s);if(t){var o;return(o=i(t)).top>0&&o.bottom<window.innerHeight/2?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:n,maxHeadingLevel:s}=e,t=[];for(let e=n;e<=s;e+=1)t.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:r,maxHeadingLevel:a}),{anchorTopOffset:s.current}),u=l.find(e=>{var n;return c&&c.id===decodeURIComponent((n=e).href.substring(n.href.indexOf("#")+1))});l.forEach(e=>{var s;s=e,e===u?(n.current&&n.current!==s&&n.current.classList.remove(o),s.classList.add(o),n.current=s):s.classList.remove(o)})}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}},[e,s])}((0,o.useMemo)(()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:p}},[a,c,g,p])),(0,t.jsx)(l,{toc:m,className:s,linkClassName:a,...h})}},58636:function(e,n,s){s.d(n,{Z:()=>i});var t=s("24246");s("27378");var o=s("90496");let r="tabItem_pnkT";function i(e){let{children:n,hidden:s,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:s,children:n})}},15398:function(e,n,s){s.d(n,{Z:()=>v});var t=s("24246"),o=s("27378"),r=s("90496"),i=s("54947"),a=s("3620"),l=s("844"),c=s("97486"),u=s("32263"),d=s("16971");function h(e){return o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||o.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function f(e){let{value:n,tabValues:s}=e;return s.some(e=>e.value===n)}var g=s("71607");let p="tabList_Qoir",m="tabItem_AQgk";function j(e){let{className:n,block:s,selectedValue:o,selectValue:a,tabValues:l}=e,c=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),d=e=>{let n=e.currentTarget,s=l[c.indexOf(n)].value;s!==o&&(u(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{let s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{let s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:l.map(e=>{let{value:n,label:s,attributes:i}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...i,className:(0,r.Z)("tabs__item",m,i?.className,{"tabs__item--active":o===n}),children:s??n},n)})})}function x(e){let{lazy:n,children:s,selectedValue:i}=e,a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){let e=a.find(e=>e.props.value===i);return e?(0,o.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:s=!1,groupId:t}=e,r=function(e){let{values:n,children:s}=e;return(0,o.useMemo)(()=>{let e=n??h(s).map(e=>{let{props:{value:n,label:s,attributes:t,default:o}}=e;return{value:n,label:s,attributes:t,default:o}});return!function(e){let n=(0,u.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,s])}(e),[i,g]=(0,o.useState)(()=>(function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:s}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=s.find(e=>e.default)??s[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:r})),[p,m]=function(e){let{queryString:n=!1,groupId:s}=e,t=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s}),i=(0,c._X)(r);return[i,(0,o.useCallback)(e=>{if(!r)return;let n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})},[r,t])]}({queryString:s,groupId:t}),[j,x]=function(e){var n;let{groupId:s}=e;let t=(n=s)?`docusaurus.tab.${n}`:null,[r,i]=(0,d.Nk)(t);return[r,(0,o.useCallback)(e=>{if(!!t)i.set(e)},[t,i])]}({groupId:t}),b=(()=>{let e=p??j;return f({value:e,tabValues:r})?e:null})();return(0,l.Z)(()=>{b&&g(b)},[b]),{selectedValue:i,selectValue:(0,o.useCallback)(e=>{if(!f({value:e,tabValues:r}))throw Error(`Can't select invalid tab value=${e}`);g(e),m(e),x(e)},[m,x,r]),tabValues:r}}(e);return(0,t.jsxs)("div",{className:(0,r.Z)("tabs-container",p),children:[(0,t.jsx)(j,{...n,...e}),(0,t.jsx)(x,{...n,...e})]})}function v(e){let n=(0,g.Z)();return(0,t.jsx)(b,{...e,children:h(e.children)},String(n))}},80980:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(27378);let o={},r=t.createContext(o);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);