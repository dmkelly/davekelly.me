(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{206:function(e,A,t){"use strict";t.r(A);t(272);var a=t(0),n=t.n(a),r=t(96),i=t(209),o=t(208),c=Object(o.a)(24),l=t(273),d=t(219),s=t.n(d),p=Object(i.a)(function(e){var A=e.className,t=e.children;e.fileName;return n.a.createElement(r.StaticQuery,{query:"4249057756",render:function(e){var a=e.background.childImageSharp.fluid;return n.a.createElement(s.a,{Tag:"div",className:A,fluid:a,backgroundColor:"#040e18"},t)},data:l})}).withConfig({displayName:"cityRight__StyledBackgroundSection",componentId:"sc-6to3wx-0"})(["height:100%;width:100%;background-attachment:fixed;background-position:center center;background-repeat:no-repeat;background-size:cover;"]),u=t(210);var m=i.a.div.withConfig({displayName:"leftEdge__Container",componentId:"bpz18t-0"})(["display:flex;"]),f=i.a.div.withConfig({displayName:"leftEdge__Body",componentId:"bpz18t-1"})(["max-width:",";min-height:100vh;padding:"," ",";background-color:rgba(255,255,255,0.8);"],c,Object(o.a)(1.5),Object(o.a)(.75)),E=function(e){var A,t;function a(){return e.apply(this,arguments)||this}return t=e,(A=a).prototype=Object.create(t.prototype),A.prototype.constructor=A,A.__proto__=t,a.prototype.render=function(){var e=this.props,A=e.location,t=e.title,a=e.children,i=null;return"/"!==A.pathname&&(i=n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},n.a.createElement(r.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},t))),n.a.createElement(p,null,n.a.createElement(m,null,n.a.createElement(f,null,n.a.createElement("header",null,i),n.a.createElement("main",null,a),n.a.createElement(u.a,null))))},a}(n.a.Component),g=t(211),b=(t(213),t(274)),h=t(275),B=t.n(h),w=t(276);function j(e){var A=e.Icon,t=e.children;return n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:Object(o.a)(.5)}},n.a.createElement("div",{style:{marginRight:Object(o.a)(.25)}},n.a.createElement(A,null)),n.a.createElement("div",null,t))}function Q(e){var A=e.to,t=e.children,a=e.title,r=e.style;return n.a.createElement("a",{style:r,href:A,title:a,rel:"noopener noreferrer"},t)}function y(e){var A=e.Icon,t=e.to,a=e.title;return n.a.createElement("div",{style:{marginRight:Object(o.a)(.25)}},n.a.createElement(Q,{to:t,title:a},n.a.createElement(A,null)))}var k=i.a.div.withConfig({displayName:"bio__Container",componentId:"dqgn4i-0"})(["display:flex;flex-direction:column;margin-bottom:",";"],Object(o.a)(2.5)),v=i.a.div.withConfig({displayName:"bio__Split",componentId:"dqgn4i-1"})(["display:flex;> *{width:50%;}"]),x=i.a.div.withConfig({displayName:"bio__ImageContainer",componentId:"dqgn4i-2"})(["display:flex;justify-content:center;"]),N=function(){var e=b.data,A=e.site.siteMetadata,t=A.author,a=A.location,r=A.social,i=e.bio.childMarkdownRemark.html;return n.a.createElement(k,null,n.a.createElement(v,null,n.a.createElement(x,null,n.a.createElement(B.a,{fixed:e.avatar.childImageSharp.fixed,alt:t,style:{marginBottom:Object(o.a)(.5),minWidth:200,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})),n.a.createElement("div",null,n.a.createElement("h3",null,t),n.a.createElement(j,{Icon:w.d},a),n.a.createElement("div",{style:{display:"flex",fontSize:Object(o.a)(1.5)}},n.a.createElement(y,{to:"https://github.com/"+r.github,Icon:w.b,title:"GitHub"}),n.a.createElement(y,{to:"https://linkedin.com/in/"+r.linkedin,Icon:w.c,title:"LinkedIn"}),n.a.createElement(y,{to:e.pdf.publicURL,Icon:w.a,title:"Resume"}),n.a.createElement(y,{to:"/rss.xml",Icon:w.e,title:"Feed"})))),n.a.createElement("section",{dangerouslySetInnerHTML:{__html:i}}))};var I=function(e){var A=e.posts;return n.a.createElement(n.a.Fragment,null,A.map(function(e){var A=e.node,t=A.frontmatter.title||A.fields.slug;return n.a.createElement("article",{key:A.fields.slug},n.a.createElement("header",null,n.a.createElement("h3",{style:{marginBottom:Object(o.a)(.25)}},n.a.createElement(r.Link,{style:{boxShadow:"none"},to:A.fields.slug},t)),n.a.createElement("small",null,A.frontmatter.date)),n.a.createElement("section",null,n.a.createElement("p",{dangerouslySetInnerHTML:{__html:A.frontmatter.description||A.excerpt}})))}))};t.d(A,"pageQuery",function(){return C});var R=function(e){var A,t;function a(){return e.apply(this,arguments)||this}return t=e,(A=a).prototype=Object.create(t.prototype),A.prototype.constructor=A,A.__proto__=t,a.prototype.render=function(){var e=this.props,A=e.data,t=e.location,a=A.site.siteMetadata.title,r=A.allMarkdownRemark.edges;return n.a.createElement(E,{location:t,title:a},n.a.createElement(g.a,{title:a}),n.a.createElement(N,null),n.a.createElement(I,{posts:r}))},a}(n.a.Component),C=(A.default=R,"2974378789")},208:function(e,A,t){"use strict";t.d(A,"a",function(){return d}),t.d(A,"b",function(){return s});var a=t(216),n=t.n(a),r=t(217),i=t.n(r),o=t(218),c=t.n(o);i.a.plugins=[new c.a];var l=new n.a(i.a);var d=l.rhythm,s=l.scale},210:function(e,A,t){"use strict";t.d(A,"a",function(){return r});var a=t(0),n=t.n(a);function r(){return n.a.createElement("footer",null,n.a.createElement("hr",null),"© ",(new Date).getFullYear(),", Dave Kelly")}},211:function(e,A,t){"use strict";var a=t(212),n=t(0),r=t.n(n),i=t(221),o=t.n(i);function c(e){var A=e.description,t=e.lang,n=e.meta,i=e.title,c=a.data.site,l=A||c.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:t},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},A.a=c},212:function(e){e.exports={data:{site:{siteMetadata:{title:"Dave's Blog",description:"Dave's approach to building web applications.",author:"Dave Kelly"}}}}},273:function(e){e.exports={data:{background:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUBBP/EABUBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAAHq2QpOkmh//8QAFxAAAwEAAAAAAAAAAAAAAAAAAAERE//aAAgBAQABBQLU1RsVlZWf/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAEgMTL/2gAIAQEABj8CKZmH/8QAGRAAAgMBAAAAAAAAAAAAAAAAAAEhUWEx/9oACAEBAAE/IUlMdkdOQ7DY2P/aAAwDAQACAAMAAAAQRB//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QFX//xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QQsv/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUHRUXGh/9oACAEBAAE/EBtfM7gL0DgO4huOnBQ8e5a2h58ybz//2Q==",aspectRatio:1.7802923149457803,src:"/static/ee7563bdf18eb65c8f17f75a37282646/654ed/background.jpg",srcSet:"/static/ee7563bdf18eb65c8f17f75a37282646/50ef4/background.jpg 480w,\n/static/ee7563bdf18eb65c8f17f75a37282646/3d63d/background.jpg 960w,\n/static/ee7563bdf18eb65c8f17f75a37282646/654ed/background.jpg 1920w,\n/static/ee7563bdf18eb65c8f17f75a37282646/7fff2/background.jpg 2880w,\n/static/ee7563bdf18eb65c8f17f75a37282646/a2b3e/background.jpg 3776w",srcWebp:"/static/ee7563bdf18eb65c8f17f75a37282646/67803/background.webp",srcSetWebp:"/static/ee7563bdf18eb65c8f17f75a37282646/04b66/background.webp 480w,\n/static/ee7563bdf18eb65c8f17f75a37282646/976d5/background.webp 960w,\n/static/ee7563bdf18eb65c8f17f75a37282646/67803/background.webp 1920w,\n/static/ee7563bdf18eb65c8f17f75a37282646/c99a3/background.webp 2880w,\n/static/ee7563bdf18eb65c8f17f75a37282646/a032a/background.webp 3776w",sizes:"(max-width: 1920px) 100vw, 1920px"}}}}}},274:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDAv/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABv4xoD5Sq0rFmgQ//xAAdEAABAwUBAAAAAAAAAAAAAAABAAITAxAUMTJB/9oACAEBAAEFApQpXrIbZuiCDQ69X//EABkRAAMAAwAAAAAAAAAAAAAAAAABAhASMf/aAAgBAwEBPwFyjVFdx//EABkRAAIDAQAAAAAAAAAAAAAAAAABAhARMf/aAAgBAgEBPwFM1keV/8QAGxAAAQQDAAAAAAAAAAAAAAAAAQACEDEREmH/2gAIAQEABj8CpZLRqqjsGf/EABkQAQEBAQEBAAAAAAAAAAAAAAEAESFhUf/aAAgBAQABPyH3R0I+N7em02CsOTNN2kEW/9oADAMBAAIAAwAAABDX34P/xAAWEQEBAQAAAAAAAAAAAAAAAAAQATH/2gAIAQMBAT8QgPQ//8QAFhEBAQEAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/EHZZT//EAB4QAQEBAAEEAwAAAAAAAAAAAAERACExQVFhkaHR/9oACAEBAAE/EO4/IawuvRbLLofqa8CPgwgiUKHGanE+/eAkFAD1gOPnILv/2Q==",width:200,height:200,src:"/static/c4a056543359a03018dcd8321bbfb01f/9067c/profile-pic.jpg",srcSet:"/static/c4a056543359a03018dcd8321bbfb01f/9067c/profile-pic.jpg 1x,\n/static/c4a056543359a03018dcd8321bbfb01f/792e8/profile-pic.jpg 1.5x,\n/static/c4a056543359a03018dcd8321bbfb01f/b9fa4/profile-pic.jpg 2x"}}},bio:{childMarkdownRemark:{html:'<p>Cofounder <a href="https://blogist.co">Blogist LLC</a></p>\n<p>I intend to use this blog to share my approach to building web applications.</p>'}},site:{siteMetadata:{author:"Dave Kelly",description:"Dave's approach to building web applications.",location:"Boston, MA",social:{github:"dmkelly",linkedin:"thedavekelly"}}},pdf:{publicURL:"/static/kelly-resume-a03ee820a2da67d1dbe2319070ac50b6.pdf",name:"kelly-resume"}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-cb04476e59bf124b288e.js.map