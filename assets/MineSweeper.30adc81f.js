import{_ as R,i as $,j,f as r,o as d,c,a as o,F as B,g as N,u as a,n as U,k as g,v as S,t as f,l as D,m,p as z,q as E}from"./app.d5c6f758.js";const M=v=>(z("data-v-ee9f8ca8"),v=v(),E(),v),L={class:"flexbox"},T=["onClick","onContextmenu","disabled"],G={key:0},H={key:1},J={class:"form"},K={class:"tableRow"},O=M(()=>o("label",{class:"tableCell"},"\u884C\u6570\uFF1A",-1)),P={class:"tableRow"},Q=M(()=>o("label",{class:"tableCell"},"\u5217\u6570\uFF1A",-1)),W={class:"tableRow"},X=M(()=>o("label",{class:"tableCell"},"\u96F7\u6570\uFF1A",-1)),Y={class:"tableRow"},Z=["disabled"],ee={class:"tableCell"},te={__name:"MineSweeper",setup(v){function*b(t,e){for(let l=0;l<e;l++)yield t}function A(t){let e=i.value;return t%e?(t+1)%e?[-e-1,-1,e-1,-e,e,1-e,1,e+1]:[-e-1,-1,e-1,-e,e]:[-e,e,1-e,1,e+1]}function q(t){var l;let e=0;for(let u of A(t))e+=(l=k.value[t+u])!=null?l:0;return e}function F(t){if(!y.includes(t)){y.push(t);for(let e of A(t)){let l=t+e;if(s.value[l]!=0)continue;let u=p.value[l];u===0?(s.value[l]=1,F(l)):u&&u!=9&&(s.value[l]=1)}}}function x(t){if(k.value[t]===1)return alert("\u6B64\u5904\u662F\u96F7,\u6E38\u620F\u7ED3\u675F"),s.value=s.value.map(e=>e||1),C.value=!0;if(s.value[t]=1,!s.value.includes(0))return alert("\u6240\u6709\u96F7\u5747\u5DF2\u6392\u9664,\u606D\u559C\u4F60\u83B7\u5F97\u80DC\u5229"),C.value=!0;p.value[t]==0&&F(t)}function V(){[_.value,i.value,w.value]=n,s.value=[...b(0,_.value*i.value)],C.value=!1,y=[];let t=[...b(1,w.value),...b(0,_.value*i.value-w.value)].sort(()=>.5-Math.random()).sort(()=>.5-Math.random());k.value=t,p.value=t.map((e,l)=>e?9:q(l))}let h=$(()=>{let[t,e,l]=n;return!!(t%1||e%1||l%1||t>25||t<5||e>25||e<5||l>t*e)}),n=j([15,15,20]),_=r(15),i=r(15),w=r(20),s=r([]),C=r(),y=[],k=r([]),p=r([]);return V(),(t,e)=>(d(),c("div",L,[o("div",{class:"grid",style:U(`grid-template: repeat(${a(_)}, 32px) / repeat(${a(i)}, 30px);`)},[(d(!0),c(B,null,N(a(p),(l,u)=>(d(),c("button",{onClick:I=>a(s)[u]==2?a(s)[u]=0:x(u),onContextmenu:D(I=>a(s)[u]=a(s)[u]?0:2,["prevent"]),disabled:a(s)[u]==1,class:"btn"},[m(" \u6570\u5B57 "),a(s)[u]==1?(d(),c("div",G,[o("b",null,f(l?l!=9?l:"\u{1F4A3}":""),1)])):m("v-if",!0),m(" \u6392\u96F7\u65D7 "),a(s)[u]==2?(d(),c("div",H,f("\u{1F6A9}"))):m("v-if",!0)],40,T))),256))],4),o("div",J,[o("div",K,[O,g(o("input",{type:"number",name:"h","onUpdate:modelValue":e[0]||(e[0]=l=>a(n)[0]=l),class:"tableCell",required:"",placeholder:"15"},null,512),[[S,a(n)[0]]])]),o("div",P,[Q,g(o("input",{type:"number",name:"w","onUpdate:modelValue":e[1]||(e[1]=l=>a(n)[1]=l),class:"tableCell",required:"",placeholder:"15"},null,512),[[S,a(n)[1]]])]),o("div",W,[X,g(o("input",{type:"number",name:"w","onUpdate:modelValue":e[2]||(e[2]=l=>a(n)[2]=l),class:"tableCell",required:"",placeholder:"20"},null,512),[[S,a(n)[2]]])]),o("div",Y,[o("button",{onClick:V,disabled:a(h)},f(a(h)?"\u{1F622}":"\u{1F60A}"),9,Z),o("div",ee,f(a(h)?"\u8BF7\u6B63\u786E\u8F93\u5165":"\u5F00\u59CB\u6E38\u620F"),1)])])]))}},ae=R(te,[["__scopeId","data-v-ee9f8ca8"],["__file","MineSweeper.vue"]]);export{ae as default};
