(this["webpackJsonpcurts-react-profile"]=this["webpackJsonpcurts-react-profile"]||[]).push([[0],[,,,,,,function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/DogDash.06903d97.png"},,function(e){e.exports=JSON.parse('[{"id":1,"title":"Dog Dash","image":"DogDash.png","github":"https://github.com/pro3gro3/walk-my-dog","link":"https://dog-dash.herokuapp.com","category":"MERN (Redux)"},{"id":2,"title":"Shop Shop","image":"ShopShop.png","github":"https://github.com/cjsmith1988/shop-shop","link":"https://curts-ecommerce.herokuapp.com/","category":"MERN"},{"id":3,"title":"Milestone","image":"Milestone.PNG","github":"https://github.com/proj2gr4/Milestone-Project","link":"https://milestone-goals.herokuapp.com/","category":"NodeJs"},{"id":4,"title":"Date-Concierge","image":"DateConcierge.png","github":"https://github.com/ProjectOneTeamFour/date-concierge","link":"https://projectoneteamfour.github.io/date-concierge/","category":"GraphQl"},{"id":5,"title":"WeatherDashboard","image":"WeatherDashboard.png","github":"https://github.com/cjsmith1988/weather-dashboard","link":"https://cjsmith1988.github.io/weather-dashboard/","category":"JavaScript, CSS, HTML, Third-party API"}]')},,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){var c={"./DateConcierge.png":17,"./DogDash.png":6,"./Milestone.PNG":18,"./ShopShop.png":19,"./WeatherDashboard.png":20};function s(e){var t=n(e);return a(t)}function n(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}s.keys=function(){return Object.keys(c)},s.resolve=n,e.exports=s,s.id=16},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/DateConcierge.f7071371.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Milestone.2aa5feb5.PNG"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/ShopShop.a857289b.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/WeatherDashboard.ec97e068.png"},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),r=a.n(n),i=(a(13),a(14),a(2));a.p;var o=a(0);var l=function(e){return Object(o.jsxs)("header",{className:"navbar navbar-dark",children:[Object(o.jsx)("h1",{className:"bg-dark",children:Object(o.jsx)("a",{href:"/",children:"Curtis Smith"})}),Object(o.jsx)("nav",{className:"navbar navbar-expand-lg ",children:Object(o.jsx)("ul",{className:"nav nav-tabs",children:["About","Portfolio","Contact","Resume"].map((function(t){return Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)}))})})]})};var d=function(){return Object(o.jsxs)("section",{className:"",children:[Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("div",{className:"image"})}),Object(o.jsxs)("div",{class:"d-block p-5",children:[Object(o.jsx)("p",{className:"mx-auto",children:"Welcome to my page. My name is Curtis Smith, Born and raised in London, Ontario, Canada. I lived in Ottawa for a decade where I worked and attended University, graduated from Carleton University for Civil Engineering. About 4 years ago I moved to the city of Toronto to pursue my passions and start my career in IT. I am currently an IT Architect Analyst for TD Bank, and as well as studying to become a full-stack developer."}),Object(o.jsx)("p",{children:"I am a lover of anything hockey and football. I have and always will support the Toronto Maple Leafs and will catch the game whenever I can. In the summers if not working on my projects you can usually find me at Algonquini Park exploring the back country. My interests are technology, sports, gadgets, architecture, and learning how things work."})]})]})},j=a(8);a(6);var h=function(e){var t=e.projects,s=Object(c.useState)(!1),n=Object(i.a)(s,2),r=n[0],l=n[1];return console.log(t),t.map((function(e){return Object(o.jsxs)("div",{className:"card text-white col-md-4 my-5",onMouseEnter:function(){return l(e.id)},onMouseLeave:function(){return l(!1)},children:[Object(o.jsx)("img",{src:a(16)("./".concat(e.image)).default,className:"card-img img-fluid img-thumbnail"}),r===e.id&&Object(o.jsxs)("div",{className:"card-img-overlay opac text-center text-dark p-5",children:[Object(o.jsx)("h3",{className:"text-dark mt-3",children:Object(o.jsx)("b",{children:e.title})}),Object(o.jsxs)("div",{className:"row",children:[e.link&&Object(o.jsxs)("div",{className:e.github?"col-6":"col-12",children:[Object(o.jsx)("a",{href:e.link,className:"fas fa-link largeicon",target:"_blank"}),Object(o.jsx)("div",{children:"Live Site"})]}),e.github&&Object(o.jsxs)("div",{className:e.link?"col-6":"col-12",children:[Object(o.jsx)("a",{href:e.github,className:"fab fa-github largeicon",target:"_blank"}),Object(o.jsx)("div",{children:"Git Repo"})]})]}),Object(o.jsxs)("p",{className:"custom-btn btn card-title text-center mx-3",children:["Focus: ",Object(o.jsx)("b",{children:e.category})]})]})]},e.id)}))};var u=function(){return Object(o.jsx)("section",{className:"about section-padding",id:"about",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("h1",{className:"my-5 text-center",children:[Object(o.jsx)("i",{className:"far fa-file-code mr-5"}),"My Portfolio"]}),Object(o.jsx)("div",{className:"row",children:Object(o.jsx)(h,{projects:j})})]})})},m=a(3),b=a(4);var g=function(){var e=Object(c.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),r=Object(i.a)(n,2),l=r[0],d=r[1],j=a.name,h=a.email,u=a.message;function g(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));l||s(Object(b.a)(Object(b.a)({},a),{},Object(m.a)({},e.target.name,e.target.value)))}return Object(o.jsx)("section",{className:"contactForm",children:Object(o.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),l||(s(Object(b.a)(Object(b.a)({},a),{},Object(m.a)({},e.target.name,e.target.value))),console.log(a))},children:[Object(o.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(o.jsx)("h1",{className:"",children:"Reach Out"}),l&&Object(o.jsx)("div",{className:"align-self-center",children:Object(o.jsx)("p",{className:"error-text text-danger",children:l})})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(o.jsx)("input",{class:"form-control",type:"text",defaultValue:j,onBlur:g,name:"name"})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(o.jsx)("input",{class:"form-control",type:"email",defaultValue:h,name:"email",onBlur:g})]}),Object(o.jsxs)("div",{className:"form-group",children:[Object(o.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(o.jsx)("textarea",{class:"form-control",name:"message",defaultValue:u,onBlur:g,rows:"5"})]}),Object(o.jsx)("button",{class:"btn btn-primary",type:"submit",children:"Submit"})]})})};var f=function(){return Object(o.jsx)("footer",{class:"page-section contact bg-dark",id:"contact",children:Object(o.jsx)("div",{children:Object(o.jsxs)("address",{children:[Object(o.jsx)("a",{href:"tel:+14169973360",children:"(416) 997-3360"}),Object(o.jsx)("a",{href:"mailto:cj1988333@hotmail.com",children:"cj1988333@hotmail.com"}),Object(o.jsx)("a",{href:"https://github.com/cjsmith1988/Curts_Page.git",children:"GitHub"}),Object(o.jsx)("a",{href:"https://open.spotify.com/user/jvg6fvnu67cfnjkkq45sfzie9?si=0I8kZsDPQTqr8nMZxPUoZQ",children:"Spotify"})]})})})},p=a.p+"static/media/Curtis Smith 2021.1daf993c.pdf";var x=function(){return Object(o.jsx)("section",{className:"d-flex flex-column justify-content-center",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h1",{className:"col-md-12",children:"Skills"}),Object(o.jsx)("div",{className:"col-md-12",children:Object(o.jsxs)("p",{children:["JavaScript, HTML, CSS, jQuery, Bootstrap, Node.js, MySQL, MongoDB, Express.js, React.js, GitHub.",Object(o.jsx)("br",{}),"Azure Cloud Fundamentals Certification - AZ900"]})}),Object(o.jsx)("div",{className:"col-md-12 mt-5",children:Object(o.jsx)("a",{className:"btn btn-primary ",href:p,target:"_blank",download:!0,children:" Download Resume"})})]})})})};var O=function(){var e=Object(c.useState)("About"),t=Object(i.a)(e,2),a=t[0],s=t[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{currentPage:a,handlePageChange:s}),Object(o.jsx)("main",{class:"hero-banner",children:Object(o.jsx)("div",{children:function(){switch(a){case"About":return Object(o.jsx)(d,{});case"Portfolio":return Object(o.jsx)(u,{});case"Contact":return Object(o.jsx)(g,{});case"Resume":return Object(o.jsx)(x,{});default:return Object(o.jsx)(d,{})}}()})}),Object(o.jsx)(f,{})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),v()}],[[21,1,2]]]);
//# sourceMappingURL=main.f8e0fe4b.chunk.js.map