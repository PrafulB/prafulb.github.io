(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{STHm:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r={wrapper:"block pt-6 md:flex",title:"pb-6 md:w-full md:max-w-150 md:p-0",heading:"pt-1 font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",content:"flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-5"};t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:"Publications"===t?r.wrapper.replace("pt-6","pt-10"):r.wrapper},l.a.createElement("div",{className:r.title},l.a.createElement("h2",{className:r.heading},t)),l.a.createElement("div",{className:r.content},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("q1tI"),r=a.n(l),i="mb-4",c="font-semibold text-gray-900 pb-1",s="text-md text-gray-600 font-light";t.a=function(e){var t,a=e.name,l=e.description,o=e.link,m=void 0!==o&&o,u=e.internal;return t=void 0!==u&&u?r.a.createElement(n.Link,{to:m},a):r.a.createElement("a",{href:m,target:"__blank"},a),r.a.createElement("div",{className:i},r.a.createElement("h3",{className:c+" "+(m?"hover:underline hover:text-black":"")},m?t:a),l.split("\n").map((function(e){return r.a.createElement("p",{className:s},e)})))}},pssB:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Wbzz"),i=a("6uTu"),c=a("ivnd"),s="text-lg font-bold",o="underline";t.default=function(){return l.a.createElement(i.a,null,l.a.createElement(c.a,{title:"Not found"}),l.a.createElement("h1",{className:s},"404: Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist."," ",l.a.createElement(r.Link,{className:o,to:"/"},"Return to safety"),"."))}},"xGn/":function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return d}));var n=a("q1tI"),l=a.n(n),r=a("STHm"),i=a("hbLQ"),c=function(e){var t=e.posts;return l.a.createElement(r.a,{title:"All Blog Posts"},t.map((function(e){return l.a.createElement(i.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})))},s=a("eNIv"),o=a("6uTu"),m=a("ivnd"),u=a("pssB"),d=(t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=!a||!a.length;return a&&a.length?l.a.createElement(o.a,null,l.a.createElement(m.a,{title:"Blog"}),l.a.createElement(s.a,{metadata:t.site.siteMetadata}),!n&&l.a.createElement(c,{posts:a})):l.a.createElement(u.default,null)},"1050845958")}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-8d5b60e8370d28ea4109.js.map