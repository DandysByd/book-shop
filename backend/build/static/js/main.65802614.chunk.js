(this["webpackJsonpbook-shop"]=this["webpackJsonpbook-shop"]||[]).push([[0],{104:function(e,t){},106:function(e,t){},115:function(e,t,c){"use strict";c.r(t);var n=c(4),i=c.n(n),r=c(62),o=c.n(r),s=c(19),j=c.p+"static/media/books-react.8d2525be.xml",a=(c(69),c(18)),h=c.n(a),d=c(0),l=function(e){var t;t="1"==e.x.unavailable?"yes":"no";var c=Object(n.useState)(t),i=Object(s.a)(c,2),r=i[0],o=i[1],j=function(){o("yes"),alert("The book you have chosen has been ordered!");var t=e.x.$.id;h.a.post("http://localhost:3000/ordered",t).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))};return Object(d.jsx)("tbody",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("button",{onClick:function(){"1"===e.x.unavailable[0]||"yes"===r?alert("The book has already been ordered!"):j()},children:"ORDER"})}),Object(d.jsx)("td",{children:e.x.author}),Object(d.jsx)("td",{children:e.x.title}),Object(d.jsx)("td",{children:e.x.genre}),Object(d.jsx)("td",{children:e.x.price}),Object(d.jsx)("td",{children:e.x.publish_date}),Object(d.jsx)("td",{children:e.x.description}),Object(d.jsx)("td",{children:r})]})})},b=c(91).parseString;var x=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),c=t[0],i=t[1];return Object(n.useEffect)((function(){h.a.get(j,{"Content-Type":"application/xml; charset=utf-8"}).then((function(e){b(e.data,(function(e,t){i(t.catalog.book)}))}))}),[]),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{}),Object(d.jsx)("th",{children:"Author"}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:"Genre"}),Object(d.jsx)("th",{children:"Price"}),Object(d.jsx)("th",{children:"Publish date"}),Object(d.jsx)("th",{children:"Description"}),Object(d.jsx)("th",{children:"Unavailable"})]})}),c.map((function(e,t){return Object(d.jsx)(l,{x:e},t)}))]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),i(e),r(e),o(e)}))};o.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(x,{})})),u()},69:function(e,t,c){}},[[115,1,2]]]);
//# sourceMappingURL=main.65802614.chunk.js.map