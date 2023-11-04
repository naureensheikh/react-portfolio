(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[3],{39:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-1.dbc2198e.jpg"},40:function(e,t,a){"use strict";t.a=a.p+"static/media/web-project-2.f0108702.jpg"},41:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-1.0aa0cb76.jpg"},42:function(e,t,a){"use strict";t.a=a.p+"static/media/mobile-project-2.a5aae786.jpg"},43:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-1.41def4d8.jpg"},44:function(e,t,a){"use strict";t.a=a.p+"static/media/ui-project-2.d2891914.jpg"},45:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return x}));var r=a(0),i=a(39),s=(a(40),a(41)),c=(a(42),a(43)),l=a(44),n=a.p+"static/media/646cec9623ba35bc3d313b86_Layer-1.7f89bd79.webp";const o=[{id:1,title:"WeClickk App",category:"Mobile Application",img:a.p+"static/media/Screenshot 2023-11-04 at 4.33.00 PM.e85bc11b.png",ProjectHeader:{title:"Project Management UI - From Context",publishDate:"Jul 26, 2021",tags:"UI / Frontend"}},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:n},{id:3,title:"Project Management UI",category:"UI/UX Design",img:c.a},{id:4,title:"Cloud Storage Platform",category:"UI/UX Design",img:l.a},{id:5,title:"React Social App",category:"Mobile Application",img:s.a},{id:6,title:"Apple Design System",category:"Web Application",img:i.a}];var d=a(2);const m=Object(r.createContext)(),x=e=>{const[t,a]=Object(r.useState)(o),[i,s]=Object(r.useState)(""),[c,l]=Object(r.useState)(""),n=t.filter((e=>e.title.toLowerCase().includes(i.toLowerCase())||""===i?e:"")),x=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(c)));return Object(d.jsx)(m.Provider,{value:{projects:t,setProjects:a,searchProject:i,setSearchProject:s,searchProjectsByTitle:n,selectProject:c,setSelectProject:l,selectProjectsByCategory:x},children:e.children})}},46:function(e,t,a){"use strict";var r=a(0),i=a(7),s=a(37),c=a(12),l=a(2);var n=e=>{let{title:t,category:a,image:r}=e;return Object(l.jsx)(s.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(l.jsx)(c.b,{to:"/projects/single-project","aria-label":"Single Project",children:Object(l.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(l.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(l.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(l.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},o=a(45);const d=["Web Application","Mobile Application","UI/UX Design","Branding"];var m=e=>{let{setSelectProject:t}=e;return Object(l.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(l.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((e=>Object(l.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})};t.a=()=>{const{projects:e,searchProject:t,setSearchProject:a,searchProjectsByTitle:s,selectProject:c,setSelectProject:d,selectProjectsByCategory:x}=Object(r.useContext)(o.a);return Object(l.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects portfolio"})}),Object(l.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(l.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by category"}),Object(l.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(l.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(l.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(l.jsx)(i.n,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(l.jsx)("input",{onChange:e=>{a(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(l.jsx)(m,{setSelectProject:d})]})]}),Object(l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:c?x.map((e=>Object(l.jsx)(n,{title:e.title,category:e.category,image:e.img},e.id))):t?s.map((e=>Object(l.jsx)(n,{title:e.title,category:e.category,image:e.img},e.id))):e.map((e=>Object(l.jsx)(n,{title:e.title,category:e.category,image:e.img},e.id)))})]})}},53:function(e,t,a){"use strict";a.r(t);var r=a(12),i=a(21),s=a(7),c=(a.p,a.p+"static/media/developer-dark.3f07bd13.svg"),l=a.p+"static/media/bsmn_j41w_220224.12a0a6fb.jpg",n=a(37),o=a(2);var d=()=>{const[e]=Object(i.a)();return Object(o.jsxs)(n.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(o.jsxs)("div",{className:"w-full md:w-1/3 text-left",children:[Object(o.jsx)(n.a.h1,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.1},className:"font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase",children:"Hi, I am Naureen"}),Object(o.jsx)(n.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"A Full Stack Developer."}),Object(o.jsx)(n.a.p,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"font-general-medium mt-4 text-sm md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200",children:"Who needs a social life when the bugs in your code provide all the drama you need?"}),Object(o.jsx)(n.a.div,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.3},className:"flex justify-center sm:block",children:Object(o.jsxs)("a",{download:"Stoman-Resume.pdf",href:"/files/Stoman-Resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(o.jsx)(s.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(o.jsx)("span",{className:"text-sm sm:text-lg font-general-medium duration-100",children:"Download CV"})]})})]}),Object(o.jsx)(n.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0",children:Object(o.jsx)("img",{src:"dark"===e?l:c,alt:"Developer"})})]})},m=a(46),x=a(45),j=a(17);t.default=()=>Object(o.jsxs)("div",{className:"container mx-auto",children:[Object(o.jsx)(d,{}),Object(o.jsx)(x.b,{children:Object(o.jsx)(m.a,{})}),Object(o.jsx)("div",{className:"mt-8 sm:mt-10 flex justify-center",children:Object(o.jsx)(r.b,{to:"/projects",className:"font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300","aria-label":"More Projects",children:Object(o.jsx)(j.a,{title:"More Projects"})})})]})}}]);
//# sourceMappingURL=3.7066b420.chunk.js.map