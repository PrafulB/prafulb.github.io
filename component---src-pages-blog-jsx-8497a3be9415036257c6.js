(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{STHm:function(e,t,a){"use strict";var n=a("nNWW"),l=a.n(n),r="block pt-12 md:flex",s="pb-6 md:w-full md:max-w-150 md:p-0",i="font-xs font-light tracking-widest text-sm text-gray-600 leading-normal uppercase",c="flex-none text-lg text-gray-600 font-light md:flex-1 md:pl-20";t.a=function(e){var t=e.title,a=e.children;return l.a.createElement("div",{className:r},l.a.createElement("div",{className:s},l.a.createElement("h2",{className:i},t)),l.a.createElement("div",{className:c},a))}},hbLQ:function(e,t,a){"use strict";var n=a("Wbzz"),l=a("nNWW"),r=a.n(l),s="mb-6",i="font-semibold text-gray-900 pb-1",c="text-md text-gray-600 font-light";t.a=function(e){var t,a=e.name,l=e.description,o=e.link,m=void 0!==o&&o,d=e.internal;return t=void 0!==d&&d?r.a.createElement(n.Link,{to:m},a):r.a.createElement("a",{href:m,target:"__blank"},a),r.a.createElement("div",{className:s},r.a.createElement("h3",{className:i+" "+(m?"hover:underline hover:text-black":"")},m?t:a),r.a.createElement("p",{className:c},l))}},pssB:function(e,t,a){"use strict";a.r(t);var n=a("nNWW"),l=a.n(n),r=a("Wbzz"),s=a("6uTu"),i=a("ivnd"),c="text-lg font-bold",o="underline";t.default=function(){return l.a.createElement(s.a,null,l.a.createElement(i.a,{title:"Not found"}),l.a.createElement("h1",{className:c},"404: Not Found"),l.a.createElement("p",null,"You just hit a route that doesn't exist."," ",l.a.createElement(r.Link,{className:o,to:"/"},"Return to safety"),"."))}},"xGn/":function(e,t,a){"use strict";a.r(t);var n=a("nNWW"),l=a.n(n),r=a("STHm"),s=a("hbLQ"),i=function(e){var t=e.posts;return l.a.createElement(r.a,{title:"All Blog Posts"},t.map((function(e){return l.a.createElement(s.a,{key:e.node.fields.slug,name:e.node.frontmatter.title,description:e.node.frontmatter.description,link:e.node.fields.slug,internal:!0})})))},c=a("eNIv"),o=a("6uTu"),m=a("ivnd"),d=a("pssB");t.default=function(e){var t=e.data,a=t.allMarkdownRemark.edges,n=!a||!a.length;return a&&a.length?l.a.createElement(o.a,null,l.a.createElement(m.a,{title:"Blog"}),l.a.createElement(c.a,{metadata:t.site.siteMetadata}),!n&&l.a.createElement(i,{posts:a})):l.a.createElement(d.default,null)}}}]);
//# sourceMappingURL=component---src-pages-blog-jsx-8497a3be9415036257c6.js.map