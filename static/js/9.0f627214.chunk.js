(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[9],{287:function(c,e,s){},293:function(c,e,s){"use strict";s.r(e);var a=s(20),n=s(242),i=(s(287),s(0));e.default=function(c){var e=c.data,s=e.name,l=e.fullDescription,r=e.thumbnail,t=e.comics,h=e.stories,m=t?t.map((function(c){if(c.resourceURI){var e,s=c.resourceURI.match(/comics\/(\d+)/);return s&&(e=s[1]),Object(i.jsx)("li",{children:Object(i.jsx)(a.b,{to:"/comics/".concat(e),className:"single-char__link",children:c.name},e)})}return null})):null,j=h?h.map((function(c,e){return Object(i.jsx)("li",{children:c.name},e)})):null;return Object(i.jsxs)("div",{className:"single-char",children:[Object(i.jsxs)(n.a,{children:[Object(i.jsx)("meta",{name:"description",content:"Page with a Marvel comic character"}),Object(i.jsx)("title",{children:s})]}),Object(i.jsx)("img",{src:r,alt:s,className:"single-char__char-img"}),Object(i.jsxs)("div",{className:"single-char__info",children:[Object(i.jsx)("h2",{className:"single-char__name",children:s}),Object(i.jsx)("p",{className:"single-char__descr",children:l}),Object(i.jsx)("h2",{className:"single-char__name",children:"In comics:"}),Object(i.jsx)("ul",{className:"single-char__list",children:t?m:"No comics found"}),Object(i.jsx)("h2",{className:"single-char__name",children:"In stories:"}),Object(i.jsx)("ul",{className:"single-char__list",children:h?j:"No stories found"})]}),Object(i.jsx)(a.b,{to:"/",className:"single-char__link",children:"Back to all characters"})]})}}}]);
//# sourceMappingURL=9.0f627214.chunk.js.map