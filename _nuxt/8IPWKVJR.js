function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as m,r as p,V as f,F as d,t as h,v,P as E,M as _,W as n}from"./BvLadOvB.js";const I=["innerHTML"],g=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(u){let o,a;const i=u,r=p("");let c=!1;async function l(){try{const s=await Object.assign({"/assets/icons/check.svg":()=>n(()=>import("./DAS6JfgG.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default),"/assets/icons/delete.svg":()=>n(()=>import("./D6wsxL1P.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default),"/assets/icons/edit.svg":()=>n(()=>import("./Dw95pGwe.js"),__vite__mapDeps([]),import.meta.url).then(e=>e.default)})[`/assets/icons/${i.name}.svg`]();s.includes("stroke")&&(c=!0),r.value=s}catch{console.error(`[nuxt-icons] Icon '${i.name}' doesn't exist in 'assets/icons'`)}}return[o,a]=f(()=>l()),await o,a(),d(l),(t,s)=>(h(),v("span",{class:E(["nuxt-icon",{"nuxt-icon--fill":!t.filled,"nuxt-icon--stroke":_(c)&&!t.filled}]),innerHTML:_(r)},null,10,I))}});export{g as _};
