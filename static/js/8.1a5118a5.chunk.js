(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{237:function(t,e,r){"use strict";var n=r.p+"static/media/error.42292aa1.gif",c=r(0);e.a=function(){return Object(c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:n,alt:"Error"})}},238:function(t,e,r){"use strict";var n=r(239),c=r.n(n),a=r(240),s=r(14),i=r(1);e.a=function(){var t=function(){var t=Object(i.useState)("waiting"),e=Object(s.a)(t,2),r=e[0],n=e[1];return{request:Object(i.useCallback)(function(){var t=Object(a.a)(c.a.mark((function t(e){var r,a,s,i,o,u=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,s=u.length>3&&void 0!==u[3]?u[3]:{"Content-Type":"application/json"},n("loading"),t.prev=4,t.next=7,fetch(e,{method:r,body:a,headers:s});case 7:if((i=t.sent).ok){t.next=10;break}throw new Error("Could not fetch ".concat(e,", status: ").concat(i.status));case 10:return t.next=12,i.json();case 12:return o=t.sent,t.abrupt("return",o);case 16:throw t.prev=16,t.t0=t.catch(4),n("error"),t.t0;case 20:case"end":return t.stop()}}),t,null,[[4,16]])})));return function(e){return t.apply(this,arguments)}}(),[]),clearError:Object(i.useCallback)((function(){n("loading")}),[]),process:r,setProcess:n}}(),e=t.request,r=t.clearError,n=t.process,o=t.setProcess,u="https://gateway.marvel.com:443/v1/public/",l="apikey=7baff9ba7eb10679bf4c82b8346b3b08",p=function(){var t=Object(a.a)(c.a.mark((function t(){var r,n,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:210,t.next=3,e("".concat(u,"characters?limit=9&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(d));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",d(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"characters?name=").concat(r,"&").concat(l));case 2:return n=t.sent,t.abrupt("return",n.data.results.map(d));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=Object(a.a)(c.a.mark((function t(){var r,n,a=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:0,t.next=3,e("".concat(u,"comics?orderBy=issueNumber&limit=8&offset=").concat(r,"&").concat(l));case 3:return n=t.sent,t.abrupt("return",n.data.results.map(h));case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),j=function(){var t=Object(a.a)(c.a.mark((function t(r){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e("".concat(u,"comics/").concat(r,"?").concat(l));case 2:return n=t.sent,t.abrupt("return",h(n.data.results[0]));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(t){return{id:t.id,name:t.name,description:t.description?"".concat(t.description.slice(0,210),"..."):"There is no description for this character",fullDescription:t.description?"".concat(t.description):"There is no description for this character",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,comics:t.comics.items,stories:t.stories.items}},h=function(t){var e;return{id:t.id,title:t.title,writers:t.creators.items.length>0?t.creators.items.map((function(t){return t.name})).join(", "):"Unknown",description:t.description||"There is no description",originalSource:t.urls[0].url?"".concat(t.urls[0].url):"No information about the original source",thumbnail:t.thumbnail.path+"."+t.thumbnail.extension,language:(null===(e=t.textObjects[0])||void 0===e?void 0:e.language)||"en-us",price:t.prices[0].price?"".concat(t.prices[0].price,"$"):"Price is not available"}};return{clearError:r,process:n,setProcess:o,getAllCharacters:p,getCharacter:b,getCharacterByName:m,getAllComics:f,getComic:j}}},251:function(t,e,r){},253:function(t,e,r){"use strict";r(251);var n=r.p+"static/media/Avengers.4065c8f9.png",c=r.p+"static/media/Avengers_logo.9eaf2193.png",a=r(0);e.a=function(){return Object(a.jsxs)("div",{className:"app__banner",children:[Object(a.jsx)("img",{src:n,alt:"Avengers"}),Object(a.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",Object(a.jsx)("br",{}),"Stay tuned!"]}),Object(a.jsx)("img",{src:c,alt:"Avengers logo"})]})}},285:function(t,e,r){},298:function(t,e,r){"use strict";r.r(e);var n=r(242),c=r(253),a=r(252),s=r(14),i=r(1),o=r(20),u=r(238),l=r(255),p=r.n(l),b=r(62),m=r(237),f=(r(285),r(0)),j=function(t,e,r){switch(t){case"waiting":return Object(f.jsx)(b.a,{});case"loading":return r?Object(f.jsx)(e,{}):null;case"confirmed":return Object(f.jsx)(e,{});case"error":return Object(f.jsx)(m.a,{});default:throw new Error("Unexpected process state")}},d=function(){var t=Object(i.useState)([]),e=Object(s.a)(t,2),r=e[0],n=e[1],c=Object(i.useState)(!1),l=Object(s.a)(c,2),m=l[0],d=l[1],h=Object(i.useState)(0),v=Object(s.a)(h,2),O=v[0],g=v[1],x=Object(i.useState)(!1),w=Object(s.a)(x,2),_=w[0],k=w[1],y=Object(u.a)(),N=y.getAllComics,C=y.process,E=y.setProcess;Object(i.useEffect)((function(){S(O,!0)}),[]);var S=function(t,e){d(!e),N(t).then(A).then((function(){return E("confirmed")}))},A=function(t){var e=!1;t.length<8&&(e=!0),n([].concat(Object(a.a)(r),Object(a.a)(t))),d(!1),g(O+8),k(e)};return Object(f.jsx)(p.a,{pageStart:0,loadMore:function(){return S(O)},hasMore:!_,initialLoad:!1,loader:Object(f.jsx)(b.a,{},0),useWindow:!0,children:Object(f.jsx)("ul",{className:"comics__list",children:j(C,(function(){return function(t){var e=t.map((function(t,e){return Object(f.jsx)("li",{className:"comics__item",children:Object(f.jsxs)(o.b,{to:"/comics/".concat(t.id),children:[Object(f.jsx)("img",{src:t.thumbnail,alt:t.title,className:"comics__item-img"}),Object(f.jsx)("div",{className:"comics__item-name",children:t.title}),Object(f.jsx)("div",{className:"comics__item-price",children:t.price})]})},e)}));return Object(f.jsx)("ul",{className:"comics__grid",children:e})}(r)}),m)})})};e.default=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(n.a,{children:[Object(f.jsx)("meta",{name:"description",content:"Page with list of our comics"}),Object(f.jsx)("title",{children:"Comics Page"})]}),Object(f.jsx)(c.a,{}),Object(f.jsx)(d,{})]})}}}]);
//# sourceMappingURL=8.1a5118a5.chunk.js.map