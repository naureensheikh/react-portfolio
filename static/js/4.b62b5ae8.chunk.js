(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[4],{39:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));var r=a(0);const s=[{id:1,title:"Glam Seven",category:"Nest.JS",url:"https://www.glamseven.com",img:a.p+"static/media/glamseven.675fcc2d.png"},{id:2,title:"WeClickk App",category:"Nest.JS",url:"https://www.weclickk.com",img:a.p+"static/media/weclickk.44f1b3de.png"},{id:3,title:"Nanotek",category:"Laravel",url:"https://www.nanotek.lk",img:a.p+"static/media/nanotek.20545c44.png"},{id:4,title:"Browcode",category:"Shopify",url:"https://browcodepro.au",img:a.p+"static/media/browcode.39715fea.png"},{id:5,title:"Samuel Sohn",category:"Shopify",url:"https://samuelsohn.com",img:a.p+"static/media/samuelsohn.b0737d21.png"},{id:6,title:"Table Effect",category:"Shopify",url:"https://www.tableeffect.com",img:a.p+"static/media/tableeffect.fa62911a.png"},{id:7,title:"Powerhouse Supplements",category:"WordPress",url:"https://www.powerhousesupplements.com.au",img:a.p+"static/media/powerhouse.180586ea.png"},{id:8,title:"Foundspace",category:"WordPress",url:"https://foundspace.com.au",img:a.p+"static/media/foundspace.4b985d3f.png"},{id:9,title:"Passie voor slapen",category:"WordPress",url:"https://www.passievoorslapen.nl",img:a.p+"static/media/passievoorslapen.3f88cb39.png"},{id:10,title:"Tony gambino",category:"Squarespace",url:"https://tonygambinophoto.com",img:a.p+"static/media/tonygambiano.a183774c.png"},{id:11,title:"Ontap group",category:"Magento",url:"https://www.ontapgroup.com",img:a.p+"static/media/ontapgroup.f328bb24.png"},{id:12,title:"Amanda Jenny",category:"Wix",url:"https://www.amandajenny.com",img:a.p+"static/media/amandajenny.a0d3ed02.png"}];var c=a(2);const i=Object(r.createContext)(),o=e=>{const[t,a]=Object(r.useState)(s),[o,l]=Object(r.useState)(""),[n,d]=Object(r.useState)(""),m=t.filter((e=>e.title.toLowerCase().includes(o.toLowerCase())||""===o?e:"")),p=t.filter((e=>(e.category.charAt(0).toUpperCase()+e.category.slice(1)).includes(n)));return Object(c.jsx)(i.Provider,{value:{projects:t,setProjects:a,searchProject:o,setSearchProject:l,searchProjectsByTitle:m,selectProject:n,setSelectProject:d,selectProjectsByCategory:p},children:e.children})}},40:function(e,t,a){"use strict";var r=a(0),s=a(7),c=a(37),i=a(13),o=a(2);var l=e=>{let{title:t,category:a,image:r,url:s}=e;return Object(o.jsx)(c.a.div,{initial:{opacity:0},animate:{opacity:1,delay:1},transition:{ease:"easeInOut",duration:.7,delay:.15},children:Object(o.jsx)(i.b,{to:s,"aria-label":"Single Project",target:"_blank",children:Object(o.jsxs)("div",{className:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:r,className:"rounded-t-xl border-none",alt:"Single Project"})}),Object(o.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(o.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:t}),Object(o.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},n=a(39);const d=["Nest.JS","WordPress","Shopify","Squarespace","Magento","Wix"];var m=e=>{let{setSelectProject:t}=e;return Object(o.jsxs)("select",{onChange:e=>{t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:[Object(o.jsx)("option",{value:t,className:"text-sm sm:text-md",children:"All Projects"}),d.map((e=>Object(o.jsx)("option",{className:"text-normal sm:text-md",children:e},e)))]})};t.a=()=>{const{projects:e,searchProject:t,setSearchProject:a,searchProjectsByTitle:c,selectProject:i,setSelectProject:d,selectProjectsByCategory:p}=Object(r.useContext)(n.a);return Object(o.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(o.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(o.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Projects portfolio"}),Object(o.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(o.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(o.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(o.jsx)(s.l,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(o.jsx)("input",{onChange:e=>{a(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(o.jsx)(m,{setSelectProject:d})]})]}),Object(o.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:i?p.map((e=>Object(o.jsx)(l,{title:e.title,category:e.title,image:e.img},e.id))):t?c.map((e=>Object(o.jsx)(l,{title:e.title,category:e.title,image:e.img},e.id))):e.map((e=>Object(o.jsx)(l,{title:e.title,category:e.category,url:e.url,image:e.img},e.id)))})]})}},43:function(e,t,a){"use strict";a.r(t);var r=a(40),s=a(39),c=a(2);t.default=()=>Object(c.jsx)(s.b,{children:Object(c.jsx)("div",{className:"container mx-auto",children:Object(c.jsx)(r.a,{})})})}}]);
//# sourceMappingURL=4.b62b5ae8.chunk.js.map