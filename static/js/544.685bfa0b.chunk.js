"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{368:function(t,e,r){r.d(e,{O:function(){return u}});var n=r(689),a=r(87),c=r(184),u=function(t){var e=t.movies,r=(0,n.TH)();return(0,c.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title,u=t.name,s=t.original_title;return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:"/movies/".concat(e),state:{from:r},children:n||u||s})},e)}))})}},544:function(t,e,r){r.r(e);var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),o=r(364),i=r(368),f=r(966),p=r(14),v=r(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],l=(0,s.useState)(!1),h=(0,a.Z)(l,2),d=h[0],m=h[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,o.f9)("day");case 4:e=t.sent,c(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),p.ZP.error("This didn't work.");case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{children:"Trending today"}),d&&(0,v.jsx)(f.a,{}),r.length>0&&(0,v.jsx)(i.O,{movies:r}),(0,v.jsx)(p.x7,{toastOptions:{style:{background:"#ff1111",color:"#fff"}}})]})}},364:function(t,e,r){r.d(e,{M1:function(){return f},Pt:function(){return v},TP:function(){return i},f9:function(){return o},tx:function(){return p},yA:function(){return s}});var n=r(861),a=r(757),c=r.n(a),u=r(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.params={api_key:"d525f3289f5c138ed98ba04c26330946",language:"en-US"};var s="https://image.tmdb.org/t/p/w300/",o=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("trending/movie/".concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e));case 3:return r=t.sent,t.abrupt("return",r.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/credits"));case 3:return r=t.sent,t.abrupt("return",r.data.cast);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("movie/".concat(e,"/reviews"));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(c().mark((function t(e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("search/movie?query=".concat(e));case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=544.685bfa0b.chunk.js.map