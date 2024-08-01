"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[17930],{45742:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(24246),d=t(71670);const s={id:"head-metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},o="Head metadata",i={id:"guides/markdown-features/head-metadata",title:"Head metadata",description:"Declaring page-specific head metadata through MDX",source:"@site/docs/guides/markdown-features/markdown-features-head-metadata.mdx",sourceDirName:"guides/markdown-features",slug:"/markdown-features/head-metadata",permalink:"/docs/markdown-features/head-metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/markdown-features/markdown-features-head-metadata.mdx",tags:[],version:"current",lastUpdatedBy:"Sergio",lastUpdatedAt:1722507353e3,frontMatter:{id:"head-metadata",description:"Declaring page-specific head metadata through MDX",slug:"/markdown-features/head-metadata"},sidebar:"docs",previous:{title:"Diagrams",permalink:"/docs/markdown-features/diagrams"},next:{title:"Styling and Layout",permalink:"/docs/styling-layout"}},r={},c=[{value:"Customizing head metadata",id:"customizing-head-metadata",level:2},{value:"Markdown page description",id:"markdown-page-description",level:2}];function l(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components},{Head:t}=a;return t||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.header,{children:(0,n.jsx)(a.h1,{id:"head-metadata",children:"Head metadata"})}),"\n",(0,n.jsx)(a.h2,{id:"customizing-head-metadata",children:"Customizing head metadata"}),"\n",(0,n.jsxs)(a.p,{children:["Docusaurus automatically sets useful page metadata in ",(0,n.jsx)(a.code,{children:"<html>"}),", ",(0,n.jsx)(a.code,{children:"<head>"})," and ",(0,n.jsx)(a.code,{children:"<body>"})," for you. It is possible to add extra metadata (or override existing ones) with the ",(0,n.jsx)(a.code,{children:"<head>"})," tag in Markdown files:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-md",metastring:'title="markdown-features-head-metadata.mdx"',children:'---\nid: head-metadata\ntitle: Head Metadata\n---\n\n\x3c!-- highlight-start --\x3e\n<head>\n  <html className="some-extra-html-class" />\n  <body className="other-extra-body-class" />\n  <title>Head Metadata customized title!</title>\n  <meta charSet="utf-8" />\n  <meta name="twitter:card" content="summary" />\n  <link rel="canonical" href="https://docusaurus.io/docs/markdown-features/head-metadata" />\n</head>\n\x3c!-- highlight-end --\x3e\n\n# Head Metadata\n\nMy text\n'})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("html",{className:"some-extra-html-class"}),(0,n.jsx)("body",{className:"other-extra-body-class"}),(0,n.jsx)("title",{children:"Head Metadata customized title!"}),(0,n.jsx)("meta",{charSet:"utf-8"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("link",{rel:"canonical",href:"https://docusaurus.io/docs/markdown-features/head-metadata"})]}),"\n",(0,n.jsxs)(a.p,{children:["This ",(0,n.jsx)(a.code,{children:"<head>"})," declaration has been added to the current Markdown doc as a demo. Open your browser DevTools and check how this page's metadata has been affected."]}),"\n",(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["This feature is built on top of the Docusaurus ",(0,n.jsx)(a.a,{href:"/docs/docusaurus-core#head",children:(0,n.jsx)(a.code,{children:"<Head>"})})," component. Refer to ",(0,n.jsx)(a.a,{href:"https://github.com/nfl/react-helmet",children:"react-helmet"})," for exhaustive documentation."]})}),"\n",(0,n.jsx)(a.admonition,{title:"You don't need this for regular SEO",type:"tip",children:(0,n.jsxs)(a.p,{children:["Content plugins (e.g. docs and blog) provide front matter options like ",(0,n.jsx)(a.code,{children:"description"}),", ",(0,n.jsx)(a.code,{children:"keywords"}),", and ",(0,n.jsx)(a.code,{children:"image"}),", which will be automatically applied to both ",(0,n.jsx)(a.code,{children:"description"})," and ",(0,n.jsx)(a.code,{children:"og:description"}),", while you would have to manually declare two metadata tags when using the ",(0,n.jsx)(a.code,{children:"<head>"})," tag."]})}),"\n",(0,n.jsx)(a.h2,{id:"markdown-page-description",children:"Markdown page description"}),"\n",(0,n.jsxs)(a.p,{children:["The Markdown pages' description metadata may be used in more places than the head metadata. For example, the docs plugin's ",(0,n.jsx)(a.a,{href:"/docs/sidebar/items#generated-index-page",children:"generated category index"})," uses the description metadata for the doc cards."]}),"\n",(0,n.jsx)(a.p,{children:"By default, the description is the first content-ful line, with some efforts to convert it to plain text. For example, the following file..."}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-md",children:"# Title\n\nMain content... May contain some [links](./file.mdx) or **emphasis**.\n"})}),"\n",(0,n.jsxs)(a.p,{children:['...will have the default description "Main content... May contain some links or emphasis". However, ',(0,n.jsx)(a.strong,{children:"it's not designed to be fully functional"}),". Where it fails to produce reasonable descriptions, you can explicitly provide one through front matter:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-md",children:"---\ndescription: This description will override the default.\n---\n\n# Title\n\nMain content... May contain some [links](./file.mdx) or **emphasis**.\n"})})]})}function h(e={}){const{wrapper:a}={...(0,d.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},71670:(e,a,t)=>{t.d(a,{Z:()=>i,a:()=>o});var n=t(27378);const d={},s=n.createContext(d);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);