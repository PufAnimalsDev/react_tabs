(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),d=(n(10),n(11),n(12),n(4)),b=n.n(d),o=n(0),r=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,a=e.find((function(t){return n===t.id}))||e[0];return Object(o.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(o.jsx)("div",{className:"tabs is-boxed",children:Object(o.jsx)("ul",{children:e.map((function(t){var e=t.id,i=t.title;return Object(o.jsx)("li",{className:b()({"is-active":a.id===e}),"data-cy":"Tab",children:Object(o.jsx)("a",{href:"#".concat(e),"data-cy":"TabLink",onClick:function(){return function(t){n!==t.id&&c(t)}(t)},children:i})},e)}))})}),Object(o.jsx)("div",{className:"block","data-cy":"TabContent",children:a.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t,e=Object(s.useState)(l[0].id),n=Object(i.a)(e,2),c=n[0],a=n[1];return Object(o.jsxs)("div",{className:"section",children:[Object(o.jsx)("h1",{className:"title",children:"Selected tab is ".concat(null===(t=l.find((function(t){return c===t.id})))||void 0===t?void 0:t.title)}),Object(o.jsx)(r,{tabs:l,selectedTabId:c,onTabSelected:function(t){a(t.id)}})]})};a.a.render(Object(o.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.493e6689.chunk.js.map