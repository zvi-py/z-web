import{t as e}from"./rolldown-runtime.Dh6celcD.mjs";import{A as t,C as n,D as r,L as i,M as a,N as o,O as s,P as c,R as l,b as u,c as d,g as f,h as p,j as m,k as h,l as g,m as _,o as v,v as y,w as b,x,z as S}from"./react.OFqs3OOS.mjs";import{C,K as w,L as T,P as E,R as D,S as O,W as k,a as A,f as j,h as M,n as N,r as P,t as F}from"./motion.DhcGFrtN.mjs";import{At as I,C as ee,D as L,Dt as R,F as z,Mt as te,N as ne,O as re,Ot as ie,Pt as ae,St as oe,T as se,U as ce,V as le,W as B,X as ue,_t as V,a as de,bt as H,c as fe,d as pe,dt as me,g as he,ht as ge,k as _e,mt as ve,o as ye,p as U,s as W,u as be,ut as xe,wt as Se,x as Ce,xt as we,yt as Te}from"./framer.Ct7VPwvC.mjs";import{i as Ee,n as De,r as Oe,t as G}from"./iGznlXWfD.CE1Klnuv.mjs";import{n as ke,t as Ae}from"./SmoothScroll_Prod.DHZ2FjEa.mjs";import{n as je,t as Me}from"./Utils-FINc.XutGtR_m.mjs";import{n as Ne,t as Pe}from"./shared-lib.DItiYYAS.mjs";import Fe,{t as Ie}from"./PJJDeHfYrEA4y2mrogKV9Z6YgQEx87K72d14xUtqhw8.BU3M-cO6.mjs";function Le(e){let t=fe({state:Object.freeze({...e})}),n=e=>{typeof e==`function`&&(e=e(t.state)),t.state=Object.freeze({...t.state,...e})},r=typeof e==`object`?Object.freeze({...e}):e,i=new Set,o=e=>{typeof e==`function`&&(e=e(r)),r=typeof e==`object`?Object.freeze({...r,...e}):e,i.forEach(e=>e(r))};function s(){let[e,s]=c(r);return a(()=>(i.add(s),()=>i.delete(s)),[]),we()===!0?(we(),[t.state,n]):[e,o]}return s}var Re=e((()=>{n(),ue()})),ze=e((()=>{Re()})),Be,Ve=e((()=>{i(),v(),ue(),ze(),Be=({title:e,description:t,containerStyle:n})=>g(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`,justifyContent:`center`,backgroundColor:`rgba(136, 85, 255, 0.1)`,overflow:`hidden`,...n},children:[d(`span`,{role:`img`,"aria-label":`icon`,style:{fontSize:`32px`},children:`✨`}),g(`div`,{style:{maxWidth:`240px`},children:[d(`h1`,{style:{fontSize:11,color:`#96F`,fontWeight:600},children:e}),d(`p`,{style:{fontSize:11,color:`rgba(153, 102, 255, 0.7)`,lineHeight:1.5},children:t})]})]}),W.Object,W.Color,W.Number,W.Number,W.Number,W.Enum,W.Number,Le({initialLimit:void 0,initialOffset:void 0,limit:void 0,offset:void 0,totalItems:void 0,page:1,searchQuery:``,totalPages:void 0})})),He=e((()=>{Ve()}));function Ue(e){let[t,n]=c(!1);return a(()=>{let t=!0;return(async()=>{let r=e.map(e=>new Promise((t,n)=>{let r=new Image;r.src=e,r.onload=t,r.onerror=n}));try{await Promise.all(r),t&&n(!0)}catch(e){console.error(`Failed to preload images:`,e)}})(),()=>{t=!1}},[e]),t}function K({images:e=[],style:t={width:100,height:100,radius:0,fit:`fill`},frequency:n=50,visibleFor:i=1,perspective:o={enabled:!1,value:1e3},animation:s={in:{from:{opacity:0,scale:.5,blur:8,is3D:`2D`,rotate2D:0,rotate3D:{x:0,y:0,z:0}},to:{opacity:1,scale:1,blur:0,is3D:`2D`,rotate2D:0,rotate3D:{x:0,y:0,z:0}},transition:{type:`spring`,stiffness:300,damping:30}},out:{opacity:0,scale:.5,blur:8,is3D:`2D`,rotate2D:0,rotate3D:{x:0,y:0,z:0},transition:{type:`spring`,stiffness:300,damping:30}}},...l}){let u=200-(n-1)*199/49,[f,p]=c({x:0,y:0}),[m,h]=c(!1),[g,_]=c(0),[v,y]=c([]),[b,x]=c(!1),S=r(null),w=Ue(b?e:[]);a(()=>{let e=new IntersectionObserver(([e])=>{x(e.isIntersecting)},{root:null,rootMargin:`0px`,threshold:.1});return S.current&&e.observe(S.current),()=>{S.current&&e.unobserve(S.current)}},[]);let T=e=>{let t=e.currentTarget.getBoundingClientRect(),n=e.clientX-t.left,r=e.clientY-t.top;p({x:n,y:r})},E=()=>{h(!0)},D=()=>{h(!1)};return a(()=>{if(m&&e.length>0){let t=v[v.length-1];if((t?Math.hypot(f.x-t.x,f.y-t.y):1/0)>u){let t={id:Math.random(),position:g,x:f.x,y:f.y,createdAt:Date.now(),state:`entering`};y(e=>[...e,t]),_(t=>(t+1)%e.length),setTimeout(()=>{y(e=>e.map(e=>e.id===t.id?{...e,state:`exiting`}:e))},i*1e3),setTimeout(()=>{y(e=>e.filter(e=>e.id!==t.id))},1e4)}}},[f,m,e,u,g,i]),e.length===0?d(Be,{title:`Set Up the Component`,description:`Add images to the component through the 'Images' property on the right panel. Then preview the website, and hover over the component.`,containerStyle:{...l.style,width:`100%`,height:`100%`}}):d(be,{...l,ref:S,onMouseMove:T,onMouseEnter:E,onMouseLeave:D,background:``,children:w&&d(N,{children:v.map(({id:n,position:r,x:i,y:a,state:c})=>d(C.div,{initial:{opacity:s.in.from.opacity,scale:s.in.from.scale,filter:`blur(${s.in.from.blur}px)`,x:i-t.width/2,y:a-t.height/2,rotate:s.in.from.is3D===`2D`?s.in.from.rotate2D:0,rotateX:s.in.from.is3D===`3D`?s.in.from.rotate3D.x:0,rotateY:s.in.from.is3D===`3D`?s.in.from.rotate3D.y:0,rotateZ:s.in.from.is3D===`3D`?s.in.from.rotate3D.z:0},animate:c===`entering`?{opacity:s.in.to.opacity,scale:s.in.to.scale,filter:`blur(${s.in.to.blur}px)`,x:i-t.width/2,y:a-t.height/2,rotate:s.in.to.is3D===`2D`?s.in.to.rotate2D:0,rotateX:s.in.to.is3D===`3D`?s.in.to.rotate3D.x:0,rotateY:s.in.to.is3D===`3D`?s.in.to.rotate3D.y:0,rotateZ:s.in.to.is3D===`3D`?s.in.to.rotate3D.z:0}:{opacity:s.out.opacity,scale:s.out.scale,filter:`blur(${s.out.blur}px)`,x:i-t.width/2,y:a-t.height/2,rotate:s.out.is3D===`2D`?s.out.rotate2D:0,rotateX:s.out.is3D===`3D`?s.out.rotate3D.x:0,rotateY:s.out.is3D===`3D`?s.out.rotate3D.y:0,rotateZ:s.out.is3D===`3D`?s.out.rotate3D.z:0},transition:c===`entering`?s.in.transition:s.out.transition,style:{position:`absolute`,width:`${t.width}px`,height:`${t.height}px`,backgroundImage:`url(${e[r]??``})`,backgroundSize:t.fit===`fill`?`cover`:`contain`,backgroundPosition:`center`,backgroundRepeat:`no-repeat`,borderRadius:`${t.radius}px`,pointerEvents:`none`,perspective:o.enabled?`${o.value}px`:`none`}},n))})})}var We=e((()=>{v(),n(),ue(),F(),He(),K.displayName=`Cursor Image Trail`,_e(K,{images:{type:W.Array,title:`Images`,propertyControl:{type:W.ResponsiveImage}},style:{type:W.Object,title:`Style`,controls:{width:{type:W.Number,title:`Width`,defaultValue:100,min:0,max:1e3,unit:`px`,step:1,displayStepper:!0},height:{type:W.Number,title:`Height`,defaultValue:100,min:0,max:1e3,unit:`px`,step:1,displayStepper:!0},radius:{type:W.Number,title:`Radius`,defaultValue:0,min:0,max:500,unit:`px`,step:1,displayStepper:!0},fit:{type:W.Enum,title:`Type`,options:[`fill`,`fit`],optionTitles:[`Fill`,`Fit`],defaultValue:`fill`,description:`Style the images that will appear.`}}},frequency:{type:W.Number,title:`Frequency`,defaultValue:35,min:1,max:50,step:1,displayStepper:!1,description:`How frequently these images appear.`},visibleFor:{type:W.Number,title:`Visible For`,defaultValue:1,min:.1,max:10,step:.1,unit:`s`,displayStepper:!0,description:`How long they're visible for before they animate out.`},animation:{type:W.Object,title:`Animation`,controls:{in:{type:W.Object,title:`In`,controls:{from:{type:W.Object,title:`From`,controls:{opacity:{type:W.Number,title:`Opacity`,defaultValue:0,min:0,max:1,step:.1},scale:{type:W.Number,title:`Scale`,defaultValue:.5,min:0,max:10,step:.1},blur:{type:W.Number,title:`Blur`,defaultValue:10,min:0,max:50,step:1,unit:`px`},is3D:{type:W.Enum,title:`Rotation`,options:[`2D`,`3D`],optionTitles:[`2D`,`3D`],defaultValue:`2D`,displaySegmentedControl:!0},rotate2D:{type:W.Number,title:`2D Rotate`,defaultValue:0,min:-360,max:360,step:1,unit:`°`,hidden:e=>e.is3D===`3D`},rotate3D:{type:W.Object,title:`3D Rotate`,controls:{x:{type:W.Number,title:`X`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},y:{type:W.Number,title:`Y`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},z:{type:W.Number,title:`Z`,defaultValue:0,min:-360,max:360,step:1,unit:`°`}},hidden:e=>e.is3D===`2D`}}},to:{type:W.Object,title:`To`,controls:{opacity:{type:W.Number,title:`Opacity`,defaultValue:1,min:0,max:1,step:.1},scale:{type:W.Number,title:`Scale`,defaultValue:1,min:0,max:10,step:.1},blur:{type:W.Number,title:`Blur`,defaultValue:0,min:0,max:50,step:1,unit:`px`},is3D:{type:W.Enum,title:`Rotation`,options:[`2D`,`3D`],optionTitles:[`2D`,`3D`],defaultValue:`2D`,displaySegmentedControl:!0},rotate2D:{type:W.Number,title:`2D Rotate`,defaultValue:0,min:-360,max:360,step:1,unit:`°`,hidden:e=>e.is3D===`3D`},rotate3D:{type:W.Object,title:`3D Rotate`,controls:{x:{type:W.Number,title:`X`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},y:{type:W.Number,title:`Y`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},z:{type:W.Number,title:`Z`,defaultValue:0,min:-360,max:360,step:1,unit:`°`}},hidden:e=>e.is3D===`2D`}}},transition:{type:W.Transition,title:`Transition`}}},out:{type:W.Object,title:`Out`,controls:{opacity:{type:W.Number,title:`Opacity`,defaultValue:0,min:0,max:1,step:.1},scale:{type:W.Number,title:`Scale`,defaultValue:.5,min:0,max:10,step:.1},blur:{type:W.Number,title:`Blur`,defaultValue:10,min:0,max:50,step:1,unit:`px`},is3D:{type:W.Enum,title:`Rotation`,options:[`2D`,`3D`],optionTitles:[`2D`,`3D`],defaultValue:`2D`,displaySegmentedControl:!0},rotate2D:{type:W.Number,title:`2D Rotate`,defaultValue:0,min:-360,max:360,step:1,unit:`°`,hidden:e=>e.is3D===`3D`},rotate3D:{type:W.Object,title:`3D Rotate`,controls:{x:{type:W.Number,title:`X`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},y:{type:W.Number,title:`Y`,defaultValue:0,min:-360,max:360,step:1,unit:`°`},z:{type:W.Number,title:`Z`,defaultValue:0,min:-360,max:360,step:1,unit:`°`}},hidden:e=>e.is3D===`2D`},transition:{type:W.Transition,title:`Transition`}}}}},perspective:{type:W.Object,title:`Perspective`,description:`More components at [Framer University](https://frameruni.link/cc).`,controls:{enabled:{type:W.Boolean,title:`Enable`,defaultValue:!1},value:{type:W.Number,title:`Value`,defaultValue:1200,min:500,max:5e3,step:10,displayStepper:!0,hidden:e=>!e.enabled}}}})}));
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function qe(){let e=Ke(`canvas`);return e.style.display=`block`,e}function Je(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function q(...e){let t=`THREE.`+e.shift();console.warn(t,...e)}function Ye(...e){let t=`THREE.`+e.shift();console.error(t,...e)}function Xe(...e){let t=e.join(` `);t in aa||(aa[t]=!0,q(...e))}function Ze(){let e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(sa[255&e]+sa[e>>8&255]+sa[e>>16&255]+sa[e>>24&255]+`-`+sa[255&t]+sa[t>>8&255]+`-`+sa[t>>16&15|64]+sa[t>>24&255]+`-`+sa[63&n|128]+sa[n>>8&255]+`-`+sa[n>>16&255]+sa[n>>24&255]+sa[255&r]+sa[r>>8&255]+sa[r>>16&255]+sa[r>>24&255]).toLowerCase()}function J(e,t,n){return Math.max(t,Math.min(n,e))}function Qe(e,t,n){return(1-n)*e+n*t}function $e(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(4294967295*e);case Uint16Array:return Math.round(65535*e);case Uint8Array:return Math.round(255*e);case Int32Array:return Math.round(2147483647*e);case Int16Array:return Math.round(32767*e);case Int8Array:return Math.round(127*e);default:throw Error(`Invalid component type.`)}}function tt(){let e={enabled:!0,workingColorSpace:Wi,spaces:{},convert:function(e,t,n){return!1!==this.enabled&&t!==n&&t&&n?(this.spaces[t].transfer===Ki&&(e.r=nt(e.r),e.g=nt(e.g),e.b=nt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ki&&(e.r=rt(e.r),e.g=rt(e.g),e.b=rt(e.b)),e):e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===Hi?Gi:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return Xe(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return Xe(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Wi]:{primaries:t,whitePoint:r,transfer:Gi,toXYZ:ha,fromXYZ:ga,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ui},outputColorSpaceConfig:{drawingBufferColorSpace:Ui}},[Ui]:{primaries:t,whitePoint:r,transfer:Ki,toXYZ:ha,fromXYZ:ga,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ui}}}),e}function nt(e){return e<.04045?.0773993808*e:(.9478672986*e+.0521327014)**2.4}function rt(e){return e<.0031308?12.92*e:1.055*e**.41666-.055}function it(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?ya.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(q(`Texture: Unable to serialize Texture.`),{})}function at(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Ua.fromArray(e,a);let o=i.x*Math.abs(Ua.x)+i.y*Math.abs(Ua.y)+i.z*Math.abs(Ua.z),s=t.dot(Ua),c=n.dot(Ua),l=r.dot(Ua);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}function ot(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+6*(t-e)*(2/3-n):e}function st(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,vs),e.getVertexPosition(c,ys),e.getVertexPosition(l,bs);let u=function(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ws.copy(s),ws.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ws);return l<n.near||l>n.far?null:{distance:l,point:ws.clone(),object:e}}(e,t,n,r,vs,ys,bs,Cs);if(u){let e=new Y;Wo.getBarycoord(Cs,vs,ys,bs,e),i&&(u.uv=Wo.getInterpolatedAttribute(i,s,c,l,e,new ua)),a&&(u.uv1=Wo.getInterpolatedAttribute(a,s,c,l,e,new ua)),o&&(u.normal=Wo.getInterpolatedAttribute(o,s,c,l,e,new Y),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new Y,materialIndex:0};Wo.getNormal(vs,ys,bs,t.normal),u.face=t,u.barycoord=e}return u}function ct(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(q(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function lt(e){let t={};for(let n=0;n<e.length;n++){let r=ct(e[n]);for(let e in r)t[e]=r[e]}return t}function ut(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:!0===t.isXRRenderTarget?t.texture.colorSpace:_a.workingColorSpace}function dt(e,t,n,r){let i=function(e){switch(e){case Wr:case Gr:return{byteLength:1,components:1};case qr:case Kr:case Zr:return{byteLength:2,components:1};case Qr:case $r:return{byteLength:2,components:4};case Yr:case Jr:case Xr:return{byteLength:4,components:1};case ti:case ni:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}(r);switch(n){case 1021:return e*t;case 1028:case oi:return e*t/i.components*i.byteLength;case si:case ci:return e*t*2/i.components*i.byteLength;case 1022:return e*t*3/i.components*i.byteLength;case ri:case li:return e*t*4/i.components*i.byteLength;case ui:case di:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fi:case pi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case hi:case _i:return Math.max(e,16)*Math.max(t,8)/4;case mi:case gi:return Math.max(e,8)*Math.max(t,8)/2;case vi:case yi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case bi:case xi:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Si:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ci:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case wi:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Ti:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ei:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Di:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oi:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ki:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ai:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case ji:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Mi:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ni:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Pi:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Fi:case Ii:case Li:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ri:case zi:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Bi:case Vi:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function ft(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){!0!==t&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function pt(e){let t=new WeakMap;return{get:function(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))},update:function(n,r){if(n.isInterleavedBufferAttribute&&(n=n.data),n.isGLBufferAttribute){let e=t.get(n);(!e||e.version<n.version)&&t.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version});return}let i=t.get(n);if(i===void 0)t.set(n,function(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer(),s;if(e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback(),r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else{if(!(r instanceof Uint8ClampedArray))throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);s=e.UNSIGNED_BYTE}return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}(n,r));else if(i.version<n.version){if(i.size!==n.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);(function(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()})(i.buffer,n,r),i.version=n.version}}}}function mt(e,t,n,r,i,a,o){let s=new Jo(0),c,l,u=!0===a?0:1,d=null,f=0,p=null;function m(e){let r=!0===e.isScene?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t,n){t.getRGB(pc,ut(e)),r.buffers.color.setClear(pc.r,pc.g,pc.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),u=t,h(s,u)},getClearAlpha:function(){return u},setClearAlpha:function(e){u=e,h(s,u)},render:function(t){let n=!1,i=m(t);i===null?h(s,u):i&&i.isColor&&(h(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))},addToRenderList:function(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===Pr)?(l===void 0&&(l=new Ts(new Es(1,1,1),new Os({name:`BackgroundCubeMaterial`,uniforms:ct(fc.backgroundCube.uniforms),vertexShader:fc.backgroundCube.vertexShader,fragmentShader:fc.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),mc.copy(n.backgroundRotation),mc.x*=-1,mc.y*=-1,mc.z*=-1,r.isCubeTexture&&!1===r.isRenderTargetTexture&&(mc.y*=-1,mc.z*=-1),l.material.uniforms.envMap.value=r,l.material.uniforms.flipEnvMap.value=r.isCubeTexture&&!1===r.isRenderTargetTexture?-1:1,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(hc.makeRotationFromEuler(mc)),l.material.toneMapped=_a.getTransfer(r.colorSpace)!==Ki,d===r&&f===r.version&&p===e.toneMapping||(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):r&&r.isTexture&&(c===void 0&&(c=new Ts(new $s(2,2),new Os({name:`BackgroundMaterial`,uniforms:ct(fc.background.uniforms),vertexShader:fc.background.vertexShader,fragmentShader:fc.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=r,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=_a.getTransfer(r.colorSpace)!==Ki,!0===r.matrixAutoUpdate&&r.updateMatrix(),c.material.uniforms.uvTransform.value.copy(r.matrix),d===r&&f===r.version&&p===e.toneMapping||(c.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function ht(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=l(null),a=i,o=!1;function s(t){return e.bindVertexArray(t)}function c(t){return e.deleteVertexArray(t)}function l(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function u(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function d(e){f(e,0)}function f(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function p(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function m(t,n,r,i,a,o,s){!0===s?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function h(){g(),o=!0,a!==i&&(a=i,s(a.object))}function g(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:function(n,i,c,h,g){let _=!1,v=function(t,n,i){let a=!0===i.wireframe,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=o[n.id];s===void 0&&(s={},o[n.id]=s);let c=s[a];return c===void 0&&(c=l(e.createVertexArray()),s[a]=c),c}(h,c,i);a!==v&&(a=v,s(a.object)),_=function(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}(n,h,c,g),_&&function(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}(n,h,c,g),g!==null&&t.update(g,e.ELEMENT_ARRAY_BUFFER),(_||o)&&(o=!1,function(n,r,i,a){u();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,p=c.bytesPerElement,h=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===Jr;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,g=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)f(i.location+e,t.meshPerAttribute);!0!==n.isInstancedMesh&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)d(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)m(i.location+e,o/i.locationSize,u,r,c*p,(g+o/i.locationSize*e)*p,h)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)f(i.location+e,s.meshPerAttribute);!0!==n.isInstancedMesh&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)d(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)m(i.location+e,o/i.locationSize,u,r,o*p,o/i.locationSize*e*p,h)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}p()}(n,i,c,h),g!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(g).buffer))},reset:h,resetDefaultState:g,dispose:function(){h();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)c(n[e].object),delete n[e];delete t[e]}delete r[e]}},releaseStatesOfGeometry:function(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)c(n[e].object),delete n[e];delete t[e]}delete r[e.id]},releaseStatesOfProgram:function(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)c(i[e].object),delete i[e];delete n[e.id]}},initAttributes:u,enableAttribute:d,disableUnusedAttributes:p}}function gt(e,t,n){let r;function i(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}this.setMode=function(e){r=e},this.render=function(t,i){e.drawArrays(r,t,i),n.update(i,r,1)},this.renderInstances=i,this.renderMultiDraw=function(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)},this.renderMultiDrawInstances=function(e,a,o,s){if(o===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)i(e[t],a[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,a,0,s,0,o);let t=0;for(let e=0;e<o;e++)t+=a[e]*s[e];n.update(t,r,1)}}}function _t(e,t,n,r){let i;function a(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let o=n.precision===void 0?`highp`:n.precision,s=a(o);s!==o&&(q(`WebGLRenderer:`,o,`not supported, using`,s,`instead.`),o=s);let c=!0===n.logarithmicDepthBuffer,l=!0===n.reversedDepthBuffer&&t.has(`EXT_clip_control`),u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),d=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(i!==void 0)return i;if(!0===t.has(`EXT_texture_filter_anisotropic`)){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:a,textureFormatReadable:function(t){return t===ri||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(n){let i=n===Zr&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==Wr&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==Xr&&!i)},precision:o,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:u,maxVertexTextures:d,maxTextureSize:e.getParameter(e.MAX_TEXTURE_SIZE),maxCubemapSize:e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:e.getParameter(e.MAX_VERTEX_ATTRIBS),maxVertexUniforms:e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:e.getParameter(e.MAX_VARYING_VECTORS),maxFragmentUniforms:e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:d>0,maxSamples:e.getParameter(e.MAX_SAMPLES)}}function vt(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ks,s=new X,c={value:null,needsUpdate:!1};function l(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,!0!==i||l===null){let t=r+4*a,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=l(e,t,0)},this.setState=function(o,s,u){let d=o.clippingPlanes,f=o.clipIntersection,p=o.clipShadows,m=e.get(o);if(!i||d===null||d.length===0||a&&!p)a?l(null):function(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}();else{let e=a?0:r,t=4*e,i=m.clippingState||null;c.value=i,i=l(d,s,t,u);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}}}function yt(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=Mr:t===304&&(e.mapping=Nr),e}function r(e){let n=e.target;n.removeEventListener(`dispose`,r);let i=t.get(n);i!==void 0&&(t.delete(n),i.dispose())}return{get:function(i){if(i&&i.isTexture){let a=i.mapping;if(a===303||a===304){if(t.has(i))return n(t.get(i).texture,i.mapping);{let a=i.image;if(a&&a.height>0){let o=new Ls(a.height);return o.fromEquirectangularTexture(e,i),t.set(i,o),i.addEventListener(`dispose`,r),n(o.texture,i.mapping)}return null}}}return i},dispose:function(){t=new WeakMap}}}function bt(e,t,n){let r=new Da(e,t,n);return r.texture.mapping=Pr,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function xt(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function St(){return new Os({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:wt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ct(){return new Os({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function wt(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tt(e){let t=new WeakMap,n=null;function r(e){let n=e.target;n.removeEventListener(`dispose`,r);let i=t.get(n);i!==void 0&&(t.delete(n),i.dispose())}return{get:function(i){if(i&&i.isTexture){let a=i.mapping,o=a===303||a===304,s=a===Mr||a===Nr;if(o||s){let a=t.get(i),c=a===void 0?0:a.texture.pmremVersion;if(i.isRenderTargetTexture&&i.pmremVersion!==c)return n===null&&(n=new Tc(e)),a=o?n.fromEquirectangular(i,a):n.fromCubemap(i,a),a.texture.pmremVersion=i.pmremVersion,t.set(i,a),a.texture;if(a!==void 0)return a.texture;{let c=i.image;return o&&c&&c.height>0||s&&c&&function(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}(c)?(n===null&&(n=new Tc(e)),a=o?n.fromEquirectangular(i):n.fromCubemap(i),a.texture.pmremVersion=i.pmremVersion,t.set(i,a),i.addEventListener(`dispose`,r),a.texture):null}}}return i},dispose:function(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}}}function Et(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Xe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Dt(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),!0===s.isInstancedBufferGeometry&&delete s._maxInstanceCount,n.memory.geometries--}function s(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{if(i===void 0)return;{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}}let s=new(Ge(n)?is:rs)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}return{get:function(e,t){return!0===i[t.id]||(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++),t},update:function(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)},getWireframeAttribute:function(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&s(e)}else s(e);return a.get(e)}}}function Ot(e,t,n){let r,i,a;function o(t,o,s){s!==0&&(e.drawElementsInstanced(r,o,i,t*a,s),n.update(o,r,s))}this.setMode=function(e){r=e},this.setIndex=function(e){i=e.type,a=e.bytesPerElement},this.render=function(t,o){e.drawElements(r,o,i,t*a),n.update(o,r,1)},this.renderInstances=o,this.renderMultiDraw=function(e,a,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,a,0,i,e,0,o);let s=0;for(let e=0;e<o;e++)s+=a[e];n.update(s,r,1)},this.renderMultiDrawInstances=function(e,s,c,l){if(c===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)o(e[t]/a,s[t],l[t]);else{u.multiDrawElementsInstancedWEBGL(r,s,0,i,e,0,l,0,c);let t=0;for(let e=0;e<c;e++)t+=s[e]*l[e];n.update(t,r,1)}}}function kt(e){let t={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:t,programs:null,autoReset:!0,reset:function(){t.calls=0,t.triangles=0,t.points=0,t.lines=0},update:function(n,r,i){switch(t.calls++,r){case e.TRIANGLES:t.triangles+=n/3*i;break;case e.LINES:t.lines+=n/2*i;break;case e.LINE_STRIP:t.lines+=i*(n-1);break;case e.LINE_LOOP:t.lines+=i*n;break;case e.POINTS:t.points+=i*n;break;default:Ye(`WebGLInfo: Unknown draw mode:`,r)}}}}function At(e,t,n){let r=new WeakMap,i=new Ta;return{update:function(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;!0===e&&(f=1),!0===n&&(f=2),!0===a&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Oa(h,p,m,u);g.type=Xr,g.needsUpdate=!0;let _=4*f;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;!0===e&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),!0===n&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),!0===a&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}d={count:u,texture:g,size:new ua(p,m)},r.set(o,d),o.addEventListener(`dispose`,v)}if(!0===a.isInstancedMesh&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}}}function jt(e,t,n,r){let i=new WeakMap;function a(e){let t=e.target;t.removeEventListener(`dispose`,a),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:function(o){let s=r.render.frame,c=o.geometry,l=t.get(o,c);if(i.get(l)!==s&&(t.update(l),i.set(l,s)),o.isInstancedMesh&&(!1===o.hasEventListener(`dispose`,a)&&o.addEventListener(`dispose`,a),i.get(o)!==s&&(n.update(o.instanceMatrix,e.ARRAY_BUFFER),o.instanceColor!==null&&n.update(o.instanceColor,e.ARRAY_BUFFER),i.set(o,s))),o.isSkinnedMesh){let e=o.skeleton;i.get(e)!==s&&(e.update(),i.set(e,s))}return l},dispose:function(){i=new WeakMap}}}function Mt(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=jc[i];if(a===void 0&&(a=new Float32Array(i),jc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Nt(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Pt(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Ft(e,t){let n=Mc[t];n===void 0&&(n=new Int32Array(t),Mc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function It(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Lt(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y||(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nt(n,t))return;e.uniform2fv(this.addr,t),Pt(n,t)}}function Rt(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)n[0]===t.r&&n[1]===t.g&&n[2]===t.b||(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Nt(n,t))return;e.uniform3fv(this.addr,t),Pt(n,t)}}function zt(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nt(n,t))return;e.uniform4fv(this.addr,t),Pt(n,t)}}function Bt(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nt(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Pt(n,t)}else{if(Nt(n,r))return;Fc.set(r),e.uniformMatrix2fv(this.addr,!1,Fc),Pt(n,r)}}function Vt(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nt(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Pt(n,t)}else{if(Nt(n,r))return;Pc.set(r),e.uniformMatrix3fv(this.addr,!1,Pc),Pt(n,r)}}function Ht(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Nt(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Pt(n,t)}else{if(Nt(n,r))return;Nc.set(r),e.uniformMatrix4fv(this.addr,!1,Nc),Pt(n,r)}}function Ut(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Wt(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y||(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nt(n,t))return;e.uniform2iv(this.addr,t),Pt(n,t)}}function Gt(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nt(n,t))return;e.uniform3iv(this.addr,t),Pt(n,t)}}function Kt(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nt(n,t))return;e.uniform4iv(this.addr,t),Pt(n,t)}}function qt(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Jt(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y||(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Nt(n,t))return;e.uniform2uiv(this.addr,t),Pt(n,t)}}function Yt(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z||(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Nt(n,t))return;e.uniform3uiv(this.addr,t),Pt(n,t)}}function Xt(e,t){let n=this.cache;if(t.x!==void 0)n[0]===t.x&&n[1]===t.y&&n[2]===t.z&&n[3]===t.w||(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Nt(n,t))return;e.uniform4uiv(this.addr,t),Pt(n,t)}}function Zt(e,t,n){let r=this.cache,i=n.allocateTextureUnit(),a;r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),this.type===e.SAMPLER_2D_SHADOW?(Dc.compareFunction=515,a=Dc):a=Ec,n.setTexture2D(t||a,i)}function Qt(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||kc,i)}function $t(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Ac,i)}function en(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Oc,i)}function tn(e,t){e.uniform1fv(this.addr,t)}function nn(e,t){let n=Mt(t,this.size,2);e.uniform2fv(this.addr,n)}function rn(e,t){let n=Mt(t,this.size,3);e.uniform3fv(this.addr,n)}function an(e,t){let n=Mt(t,this.size,4);e.uniform4fv(this.addr,n)}function on(e,t){let n=Mt(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function sn(e,t){let n=Mt(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function cn(e,t){let n=Mt(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function ln(e,t){e.uniform1iv(this.addr,t)}function un(e,t){e.uniform2iv(this.addr,t)}function dn(e,t){e.uniform3iv(this.addr,t)}function fn(e,t){e.uniform4iv(this.addr,t)}function pn(e,t){e.uniform1uiv(this.addr,t)}function mn(e,t){e.uniform2uiv(this.addr,t)}function hn(e,t){e.uniform3uiv(this.addr,t)}function gn(e,t){e.uniform4uiv(this.addr,t)}function _n(e,t,n){let r=this.cache,i=t.length,a=Ft(n,i);Nt(r,a)||(e.uniform1iv(this.addr,a),Pt(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Ec,a[e])}function vn(e,t,n){let r=this.cache,i=t.length,a=Ft(n,i);Nt(r,a)||(e.uniform1iv(this.addr,a),Pt(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||kc,a[e])}function yn(e,t,n){let r=this.cache,i=t.length,a=Ft(n,i);Nt(r,a)||(e.uniform1iv(this.addr,a),Pt(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Ac,a[e])}function bn(e,t,n){let r=this.cache,i=t.length,a=Ft(n,i);Nt(r,a)||(e.uniform1iv(this.addr,a),Pt(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Oc,a[e])}function xn(e,t){e.seq.push(t),e.map[t.id]=t}function Sn(e,t,n){let r=e.name,i=r.length;for(zc.lastIndex=0;;){let a=zc.exec(r),o=zc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){xn(n,l===void 0?new Ic(s,e,t):new Lc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Rc(s),xn(n,e)),n=e}}}function Cn(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}function wn(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+function(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}(e.getShaderSource(t),r)}return i}function Tn(e,t){let n=function(e){_a._getMatrix(Hc,_a.workingColorSpace,e);let t=`mat3( ${Hc.elements.map(e=>e.toFixed(4))} )`;switch(_a.getTransfer(e)){case Gi:return[t,`LinearTransferOETF`];case Ki:return[t,`sRGBTransferOETF`];default:return q(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}(t);return[`vec4 ${e}( vec4 value ) {`,`\treturn ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function En(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:q(`WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}function Dn(){return _a.getLuminanceCoefficients(Uc),[`float luminance( const in vec3 rgb ) {`,`\tconst vec3 weights = vec3( ${Uc.x.toFixed(4)}, ${Uc.y.toFixed(4)}, ${Uc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function On(e){return e!==``}function kn(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function An(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function jn(e){return e.replace(Wc,Mn)}function Mn(e,t){let n=Z[t];if(n===void 0){let e=Gc.get(t);if(e===void 0)throw Error(`Can not resolve #include <`+t+`>`);n=Z[e],q(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e)}return jn(n)}function Nn(e){return e.replace(Kc,Pn)}function Pn(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Fn(e){let t=`precision ${e.precision} float;\n\tprecision ${e.precision} int;\n\tprecision ${e.precision} sampler2D;\n\tprecision ${e.precision} samplerCube;\n\tprecision ${e.precision} sampler3D;\n\tprecision ${e.precision} sampler2DArray;\n\tprecision ${e.precision} sampler2DShadow;\n\tprecision ${e.precision} samplerCubeShadow;\n\tprecision ${e.precision} sampler2DArrayShadow;\n\tprecision ${e.precision} isampler2D;\n\tprecision ${e.precision} isampler3D;\n\tprecision ${e.precision} isamplerCube;\n\tprecision ${e.precision} isampler2DArray;\n\tprecision ${e.precision} usampler2D;\n\tprecision ${e.precision} usampler3D;\n\tprecision ${e.precision} usamplerCube;\n\tprecision ${e.precision} usampler2DArray;\n\t`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function In(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=function(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}(n),l=function(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case Mr:case Nr:t=`ENVMAP_TYPE_CUBE`;break;case Pr:t=`ENVMAP_TYPE_CUBE_UV`}return t}(n),u=function(e){let t=`ENVMAP_MODE_REFLECTION`;return e.envMap&&e.envMapMode===Nr&&(t=`ENVMAP_MODE_REFRACTION`),t}(n),d=function(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}(n),f=function(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}(n),p=function(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(On).join(`
`)}(n),m=function(e){let t=[];for(let n in e){let r=e[n];!1!==r&&t.push(`#define `+n+` `+r)}return t.join(`
`)}(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(On).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(On).join(`
`),_.length>0&&(_+=`
`)):(g=[Fn(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&!1===n.flatShading?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&!1===n.flatShading?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(On).join(`
`),_=[Fn(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&!1===n.flatShading?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Z.tonemapping_pars_fragment,n.toneMapping===0?``:En(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Z.colorspace_pars_fragment,Tn(`linearToOutputTexel`,n.outputColorSpace),Dn(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(On).join(`
`)),o=jn(o),o=kn(o,n),o=An(o,n),s=jn(s),s=kn(s,n),s=An(s,n),o=Nn(o),s=Nn(s),!0!==n.isRawShaderMaterial&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===na?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===na?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Cn(i,i.VERTEX_SHADER,y),S=Cn(i,i.FRAGMENT_SHADER,b);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(!1===i.getProgramParameter(h,i.LINK_STATUS))if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=wn(i,x,`vertex`),n=wn(i,S,`fragment`);Ye(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?s!==``&&c!==``||(u=!1):q(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Bc(i,h),T=function(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}(i,h)}let w,T;i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?!0===n.morphTargets&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h),this.getUniforms=function(){return w===void 0&&C(this),w},this.getAttributes=function(){return T===void 0&&C(this),T};let E=!1===n.rendererExtensionParallelShaderCompile;return this.isReady=function(){return!1===E&&(E=i.getProgramParameter(h,37297)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Vc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}function Ln(e,t,n,r,i,a,o){let s=new mo,c=new Jc,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}return{getParameters:function(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===Pr?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&q(`WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E,D,O,k,A=0;if(y.morphAttributes.position!==void 0&&(A=1),y.morphAttributes.normal!==void 0&&(A=2),y.morphAttributes.color!==void 0&&(A=3),C){let e=fc[C];E=e.vertexShader,D=e.fragmentShader}else E=a.vertexShader,D=a.fragmentShader,c.update(a),O=c.getVertexShaderID(a),k=c.getFragmentShaderID(a);let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=!0===_.isInstancedMesh,P=!0===_.isBatchedMesh,F=!!a.map,I=!!a.matcap,ee=!!x,L=!!a.aoMap,R=!!a.lightMap,z=!!a.bumpMap,te=!!a.normalMap,ne=!!a.displacementMap,re=!!a.emissiveMap,ie=!!a.metalnessMap,ae=!!a.roughnessMap,oe=a.anisotropy>0,se=a.clearcoat>0,ce=a.dispersion>0,le=a.iridescence>0,B=a.sheen>0,ue=a.transmission>0,V=oe&&!!a.anisotropyMap,de=se&&!!a.clearcoatMap,H=se&&!!a.clearcoatNormalMap,fe=se&&!!a.clearcoatRoughnessMap,pe=le&&!!a.iridescenceMap,me=le&&!!a.iridescenceThicknessMap,he=B&&!!a.sheenColorMap,ge=B&&!!a.sheenRoughnessMap,_e=!!a.specularMap,ve=!!a.specularColorMap,ye=!!a.specularIntensityMap,U=ue&&!!a.transmissionMap,W=ue&&!!a.thicknessMap,be=!!a.gradientMap,xe=!!a.alphaMap,Se=a.alphaTest>0,Ce=!!a.alphaHash,we=!!a.extensions,Te=0;a.toneMapped&&(j!==null&&!0!==j.isXRRenderTarget||(Te=e.toneMapping));let Ee={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:E,fragmentShader:D,defines:a.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:!0===a.isRawShaderMaterial,glslVersion:a.glslVersion,precision:p,batching:P,batchingColor:P&&_._colorsTexture!==null,instancing:N,instancingColor:N&&_.instanceColor!==null,instancingMorph:N&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:j===null?e.outputColorSpace:!0===j.isXRRenderTarget?j.texture.colorSpace:Wi,alphaToCoverage:!!a.alphaToCoverage,map:F,matcap:I,envMap:ee,envMapMode:ee&&x.mapping,envMapCubeUVHeight:S,aoMap:L,lightMap:R,bumpMap:z,normalMap:te,displacementMap:f&&ne,emissiveMap:re,normalMapObjectSpace:te&&a.normalMapType===1,normalMapTangentSpace:te&&a.normalMapType===0,metalnessMap:ie,roughnessMap:ae,anisotropy:oe,anisotropyMap:V,clearcoat:se,clearcoatMap:de,clearcoatNormalMap:H,clearcoatRoughnessMap:fe,dispersion:ce,iridescence:le,iridescenceMap:pe,iridescenceThicknessMap:me,sheen:B,sheenColorMap:he,sheenRoughnessMap:ge,specularMap:_e,specularColorMap:ve,specularIntensityMap:ye,transmission:ue,transmissionMap:U,thicknessMap:W,gradientMap:be,opaque:!1===a.transparent&&a.blending===1&&!1===a.alphaToCoverage,alphaMap:xe,alphaTest:Se,alphaHash:Ce,combine:a.combine,mapUv:F&&h(a.map.channel),aoMapUv:L&&h(a.aoMap.channel),lightMapUv:R&&h(a.lightMap.channel),bumpMapUv:z&&h(a.bumpMap.channel),normalMapUv:te&&h(a.normalMap.channel),displacementMapUv:ne&&h(a.displacementMap.channel),emissiveMapUv:re&&h(a.emissiveMap.channel),metalnessMapUv:ie&&h(a.metalnessMap.channel),roughnessMapUv:ae&&h(a.roughnessMap.channel),anisotropyMapUv:V&&h(a.anisotropyMap.channel),clearcoatMapUv:de&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:H&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:me&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:he&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:ge&&h(a.sheenRoughnessMap.channel),specularMapUv:_e&&h(a.specularMap.channel),specularColorMapUv:ve&&h(a.specularColorMap.channel),specularIntensityMapUv:ye&&h(a.specularIntensityMap.channel),transmissionMapUv:U&&h(a.transmissionMap.channel),thicknessMapUv:W&&h(a.thicknessMap.channel),alphaMapUv:xe&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(te||oe),vertexColors:a.vertexColors,vertexAlphas:!0===a.vertexColors&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:!0===_.isPoints&&!!y.attributes.uv&&(F||xe),fog:!!v,useFog:!0===a.fog,fogExp2:!!v&&v.isFogExp2,flatShading:!0===a.flatShading&&!1===a.wireframe,sizeAttenuation:!0===a.sizeAttenuation,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:!0===_.isSkinnedMesh,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:A,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:F&&!0===a.map.isVideoTexture&&_a.getTransfer(a.map.colorSpace)===Ki,decodeVideoTextureEmissive:re&&!0===a.emissiveMap.isVideoTexture&&_a.getTransfer(a.emissiveMap.colorSpace)===Ki,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:we&&!0===a.extensions.clipCullDistance&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(we&&!0===a.extensions.multiDraw||P)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee},getProgramCacheKey:function(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return!1===t.isRawShaderMaterial&&(function(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}(n,t),function(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),t.gradientMap&&s.enable(22),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reversedDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()},getUniforms:function(e){let t=m[e.type],n;if(t){let e=fc[t];n=Ds.clone(e.uniforms)}else n=e.uniforms;return n},acquireProgram:function(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new In(e,n,t,a),u.push(r)),r},releaseProgram:function(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}},releaseShaderCache:function(e){c.remove(e)},programs:u,dispose:function(){c.dispose()}}}function Rn(){let e=new WeakMap;return{has:function(t){return e.has(t)},get:function(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n},remove:function(t){e.delete(t)},update:function(t,n,r){e.get(t)[n]=r},dispose:function(){e=new WeakMap}}}function zn(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bn(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Vn(){let e=[],t=0,n=[],r=[],i=[];function a(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}return{opaque:n,transmissive:r,transparent:i,init:function(){t=0,n.length=0,r.length=0,i.length=0},push:function(e,t,o,s,c,l){let u=a(e,t,o,s,c,l);o.transmission>0?r.push(u):!0===o.transparent?i.push(u):n.push(u)},unshift:function(e,t,o,s,c,l){let u=a(e,t,o,s,c,l);o.transmission>0?r.unshift(u):!0===o.transparent?i.unshift(u):n.unshift(u)},finish:function(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}},sort:function(e,t){n.length>1&&n.sort(e||zn),r.length>1&&r.sort(t||Bn),i.length>1&&i.sort(t||Bn)}}}function Hn(){let e=new WeakMap;return{get:function(t,n){let r=e.get(t),i;return r===void 0?(i=new Vn,e.set(t,[i])):n>=r.length?(i=new Vn,r.push(i)):i=r[n],i},dispose:function(){e=new WeakMap}}}function Un(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new Y,color:new Jo};break;case`SpotLight`:n={position:new Y,direction:new Y,color:new Jo,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new Y,color:new Jo,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new Y,skyColor:new Jo,groundColor:new Jo};break;case`RectAreaLight`:n={color:new Jo,position:new Y,halfWidth:new Y,halfHeight:new Y}}return e[t.id]=n,n}}}function Wn(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Gn(e){let t=new Un,n=function(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ua};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ua,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new Y);let i=new Y,a=new no,o=new no;return{setup:function(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Wn);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(.5*y.width,0,0),e.halfHeight.set(0,.5*y.height,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(!0===e.has(`OES_texture_float_linear`)?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;y.directionalLength===c&&y.pointLength===l&&y.spotLength===u&&y.rectAreaLength===d&&y.hemiLength===f&&y.numDirectionalShadows===p&&y.numPointShadows===m&&y.numSpotShadows===h&&y.numSpotMaps===g&&y.numLightProbes===v||(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Xc++)},setupView:function(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(.5*f.width,0,0),e.halfHeight.set(0,.5*f.height,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}},state:r}}function Kn(e){let t=new Gn(e),n=[],r=[],i={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:function(e){i.camera=e,n.length=0,r.length=0},state:i,setupLights:function(){t.setup(n)},setupLightsView:function(e){t.setupView(n,e)},pushLight:function(e){n.push(e)},pushShadow:function(e){r.push(e)}}}function qn(e){let t=new WeakMap;return{get:function(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Kn(e),t.set(n,[a])):r>=i.length?(a=new Kn(e),i.push(a)):a=i[r],a},dispose:function(){t=new WeakMap}}}function Jn(e,t,n){let r=new Xs,i=new ua,a=new ua,o=new Ta,s=new ec({depthPacking:3201}),c=new tc,l={},u=n.maxTextureSize,d={[rr]:1,[ir]:0,[ar]:2},f=new Os({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ua},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new ps;m.setAttribute(`position`,new ns(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Ts(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Da(i.x,i.y)),f.uniforms.shadow_pass.value=n.map.texture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=!0===r.isPointLight?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=!0===r.isPointLight?c:s,e.localClippingEnabled&&!0===n.clipShadows&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||!0===n.alphaToCoverage){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}return a.visible=n.visible,a.wireframe=n.wireframe,a.side=i===3?n.shadowSide===null?n.side:n.shadowSide:n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=!0===n.alphaToCoverage?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,!0===r.isPointLight&&!0===a.isMeshDistanceMaterial&&(e.properties.get(a).light=r),a}function b(n,i,a,o,s){if(!1===n.visible)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=y(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)b(c[e],i,a,o,s)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}this.render=function(t,n,s){if(!1===g.enabled||!1===g.autoUpdate&&!1===g.needsUpdate||t.length===0)return;let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),!0===f.buffers.depth.getReversed()?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==3&&this.type===3,m=_===3&&this.type!==3;for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){q(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(!1===d.autoUpdate&&!1===d.needsUpdate)continue;i.copy(d.mapSize);let h=d.getFrameExtents();if(i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y)),d.map===null||!0===p||!0===m){let e=this.type===3?{}:{minFilter:Rr,magFilter:Rr};d.map!==null&&d.map.dispose(),d.map=new Da(i.x,i.y,e),d.map.texture.name=l.name+`.shadowMap`,d.camera.updateProjectionMatrix()}e.setRenderTarget(d.map),e.clear();let g=d.getViewportCount();for(let e=0;e<g;e++){let t=d.getViewport(e);o.set(a.x*t.x,a.y*t.y,a.x*t.z,a.y*t.w),f.viewport(o),d.updateMatrices(l,e),r=d.getFrustum(),b(n,s,d.camera,l,this.type)}!0!==d.isPointLightShadow&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)}}function Yn(e,t){let n=new function(){let t=!1,n=new Ta,r=null,i=new Ta(0,0,0,0);return{setMask:function(n){r===n||t||(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){!0===s&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),!1===i.equals(n)&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}},r=new function(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?z(e.DEPTH_TEST):te(e.DEPTH_TEST)},setMask:function(t){i===t||n||(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=Zc[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:default:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}},i=new function(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?z(e.STENCIL_TEST):te(e.STENCIL_TEST))},setMask:function(r){n===r||t||(e.stencilMask(r),n=r)},setFunc:function(t,n,o){r===t&&i===n&&a===o||(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){o===t&&s===n&&c===r||(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}},a=new WeakMap,o=new WeakMap,s={},c={},l=new WeakMap,u=[],d=null,f=!1,p=null,m=null,h=null,g=null,_=null,v=null,y=null,b=new Jo(0,0,0),x=0,S=!1,C=null,w=null,T=null,E=null,D=null,O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,A=0,j=e.getParameter(e.VERSION);j.indexOf(`WebGL`)===-1?j.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=A>=1);let M=null,N={},P=e.getParameter(e.SCISSOR_BOX),F=e.getParameter(e.VIEWPORT),I=new Ta().fromArray(P),ee=new Ta().fromArray(F);function L(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let R={};function z(t){!0!==s[t]&&(e.enable(t),s[t]=!0)}function te(t){!1!==s[t]&&(e.disable(t),s[t]=!1)}R[e.TEXTURE_2D]=L(e.TEXTURE_2D,e.TEXTURE_2D,1),R[e.TEXTURE_CUBE_MAP]=L(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),R[e.TEXTURE_2D_ARRAY]=L(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),R[e.TEXTURE_3D]=L(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),r.setClear(1),i.setClear(0),z(e.DEPTH_TEST),r.setFunc(3),ae(!1),oe(1),z(e.CULL_FACE),ie(0);let ne={[or]:e.FUNC_ADD,[sr]:e.FUNC_SUBTRACT,[cr]:e.FUNC_REVERSE_SUBTRACT};ne[103]=e.MIN,ne[104]=e.MAX;let re={[lr]:e.ZERO,[ur]:e.ONE,[dr]:e.SRC_COLOR,[pr]:e.SRC_ALPHA,[yr]:e.SRC_ALPHA_SATURATE,[_r]:e.DST_COLOR,[hr]:e.DST_ALPHA,[fr]:e.ONE_MINUS_SRC_COLOR,[mr]:e.ONE_MINUS_SRC_ALPHA,[vr]:e.ONE_MINUS_DST_COLOR,[gr]:e.ONE_MINUS_DST_ALPHA,[br]:e.CONSTANT_COLOR,[xr]:e.ONE_MINUS_CONSTANT_COLOR,[Sr]:e.CONSTANT_ALPHA,[Cr]:e.ONE_MINUS_CONSTANT_ALPHA};function ie(t,n,r,i,a,o,s,c,l,u){if(t!==0){if(!1===f&&(z(e.BLEND),f=!0),t===5)a||=n,o||=r,s||=i,n===m&&a===_||(e.blendEquationSeparate(ne[n],ne[a]),m=n,_=a),r===h&&i===g&&o===v&&s===y||(e.blendFuncSeparate(re[r],re[i],re[o],re[s]),h=r,g=i,v=o,y=s),!1!==c.equals(b)&&l===x||(e.blendColor(c.r,c.g,c.b,l),b.copy(c),x=l),p=t,S=!1;else if(t!==p||u!==S){if(m===or&&_===or||(e.blendEquation(e.FUNC_ADD),m=or,_=or),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:Ye(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:Ye(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:Ye(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:Ye(`WebGLState: Invalid blending: `,t)}h=null,g=null,v=null,y=null,b.set(0,0,0),x=0,p=t,S=u}}else!0===f&&(te(e.BLEND),f=!1)}function ae(t){C!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),C=t)}function oe(t){t===0?te(e.CULL_FACE):(z(e.CULL_FACE),t!==w&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),w=t}function se(t,n,r){t?(z(e.POLYGON_OFFSET_FILL),E===n&&D===r||(e.polygonOffset(n,r),E=n,D=r)):te(e.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:r,stencil:i},enable:z,disable:te,bindFramebuffer:function(t,n){return c[t]!==n&&(e.bindFramebuffer(t,n),c[t]=n,t===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=n),!0)},drawBuffers:function(t,n){let r=u,i=!1;if(t){r=l.get(n),r===void 0&&(r=[],l.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)},useProgram:function(t){return d!==t&&(e.useProgram(t),d=t,!0)},setBlending:ie,setMaterial:function(t,a){t.side===2?te(e.CULL_FACE):z(e.CULL_FACE);let o=t.side===1;a&&(o=!o),ae(o),t.blending===1&&!1===t.transparent?ie(0):ie(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),r.setFunc(t.depthFunc),r.setTest(t.depthTest),r.setMask(t.depthWrite),n.setMask(t.colorWrite);let s=t.stencilWrite;i.setTest(s),s&&(i.setMask(t.stencilWriteMask),i.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),i.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),se(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),!0===t.alphaToCoverage?z(e.SAMPLE_ALPHA_TO_COVERAGE):te(e.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:ae,setCullFace:oe,setLineWidth:function(t){t!==T&&(k&&e.lineWidth(t),T=t)},setPolygonOffset:se,setScissorTest:function(t){t?z(e.SCISSOR_TEST):te(e.SCISSOR_TEST)},activeTexture:function(t){t===void 0&&(t=e.TEXTURE0+O-1),M!==t&&(e.activeTexture(t),M=t)},bindTexture:function(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+O-1:M);let i=N[r];i===void 0&&(i={type:void 0,texture:void 0},N[r]=i),i.type===t&&i.texture===n||(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||R[t]),i.type=t,i.texture=n)},unbindTexture:function(){let t=N[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)},compressedTexImage2D:function(){try{e.compressedTexImage2D(...arguments)}catch(e){e(`WebGLState:`,e)}},compressedTexImage3D:function(){try{e.compressedTexImage3D(...arguments)}catch(e){e(`WebGLState:`,e)}},texImage2D:function(){try{e.texImage2D(...arguments)}catch(e){e(`WebGLState:`,e)}},texImage3D:function(){try{e.texImage3D(...arguments)}catch(e){e(`WebGLState:`,e)}},updateUBOMapping:function(t,n){let r=o.get(n);r===void 0&&(r=new WeakMap,o.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))},uniformBlockBinding:function(t,n){let r=o.get(n).get(t);a.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),a.set(n,r))},texStorage2D:function(){try{e.texStorage2D(...arguments)}catch(e){e(`WebGLState:`,e)}},texStorage3D:function(){try{e.texStorage3D(...arguments)}catch(e){e(`WebGLState:`,e)}},texSubImage2D:function(){try{e.texSubImage2D(...arguments)}catch(e){e(`WebGLState:`,e)}},texSubImage3D:function(){try{e.texSubImage3D(...arguments)}catch(e){e(`WebGLState:`,e)}},compressedTexSubImage2D:function(){try{e.compressedTexSubImage2D(...arguments)}catch(e){e(`WebGLState:`,e)}},compressedTexSubImage3D:function(){try{e.compressedTexSubImage3D(...arguments)}catch(e){e(`WebGLState:`,e)}},scissor:function(t){!1===I.equals(t)&&(e.scissor(t.x,t.y,t.z,t.w),I.copy(t))},viewport:function(t){!1===ee.equals(t)&&(e.viewport(t.x,t.y,t.z,t.w),ee.copy(t))},reset:function(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),r.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),s={},M=null,N={},c={},l=new WeakMap,u=[],d=null,f=!1,p=null,m=null,h=null,g=null,_=null,v=null,y=null,b=new Jo(0,0,0),x=0,S=!1,C=null,w=null,T=null,E=null,D=null,I.set(0,0,e.canvas.width,e.canvas.height),ee.set(0,0,e.canvas.width,e.canvas.height),n.reset(),r.reset(),i.reset()}}}function Xn(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=l!==void 0&&/OculusBrowser/g.test(l.userAgent),u=new ua,d=new WeakMap,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):Ke(`canvas`)}function g(e,t,n){let r=1,i=ie(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),q(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&q(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function _(e){return e.generateMipmaps}function v(t){e.generateMipmap(t)}function y(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function b(n,r,i,a,o=!1){if(n!==null){if(e[n]!==void 0)return e[n];q(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let s=r;if(r===e.RED&&(i===e.FLOAT&&(s=e.R32F),i===e.HALF_FLOAT&&(s=e.R16F),i===e.UNSIGNED_BYTE&&(s=e.R8)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.R8UI),i===e.UNSIGNED_SHORT&&(s=e.R16UI),i===e.UNSIGNED_INT&&(s=e.R32UI),i===e.BYTE&&(s=e.R8I),i===e.SHORT&&(s=e.R16I),i===e.INT&&(s=e.R32I)),r===e.RG&&(i===e.FLOAT&&(s=e.RG32F),i===e.HALF_FLOAT&&(s=e.RG16F),i===e.UNSIGNED_BYTE&&(s=e.RG8)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RG8UI),i===e.UNSIGNED_SHORT&&(s=e.RG16UI),i===e.UNSIGNED_INT&&(s=e.RG32UI),i===e.BYTE&&(s=e.RG8I),i===e.SHORT&&(s=e.RG16I),i===e.INT&&(s=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGB8UI),i===e.UNSIGNED_SHORT&&(s=e.RGB16UI),i===e.UNSIGNED_INT&&(s=e.RGB32UI),i===e.BYTE&&(s=e.RGB8I),i===e.SHORT&&(s=e.RGB16I),i===e.INT&&(s=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(s=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(s=e.RGBA16UI),i===e.UNSIGNED_INT&&(s=e.RGBA32UI),i===e.BYTE&&(s=e.RGBA8I),i===e.SHORT&&(s=e.RGBA16I),i===e.INT&&(s=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_INT_5_9_9_9_REV&&(s=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(s=e.R11F_G11F_B10F)),r===e.RGBA){let t=o?Gi:_a.getTransfer(a);i===e.FLOAT&&(s=e.RGBA32F),i===e.HALF_FLOAT&&(s=e.RGBA16F),i===e.UNSIGNED_BYTE&&(s=t===Ki?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT_4_4_4_4&&(s=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(s=e.RGB5_A1)}return s!==e.R16F&&s!==e.R32F&&s!==e.RG16F&&s!==e.RG32F&&s!==e.RGBA16F&&s!==e.RGBA32F||t.get(`EXT_color_buffer_float`),s}function x(t,n){let r;return t?n===null||n===Yr||n===ei?r=e.DEPTH24_STENCIL8:n===Xr?r=e.DEPTH32F_STENCIL8:n===qr&&(r=e.DEPTH24_STENCIL8,q(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===Yr||n===ei?r=e.DEPTH_COMPONENT24:n===Xr?r=e.DEPTH_COMPONENT32F:n===qr&&(r=e.DEPTH_COMPONENT16),r}function S(e,t){return!0===_(e)||e.isFramebufferTexture&&e.minFilter!==Rr&&e.minFilter!==Vr?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function C(e){let t=e.target;t.removeEventListener(`dispose`,C),function(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&T(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}(t),t.isVideoTexture&&d.delete(t)}function w(t){let n=t.target;n.removeEventListener(`dispose`,w),function(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}(n)}function T(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source;delete p.get(i)[n.__cacheKey],o.memory.textures--}let E=0;function D(t,i){let a=r.get(t);if(t.isVideoTexture&&function(e){let t=o.render.frame;d.get(e)!==t&&(d.set(e,t),e.update())}(t),!1===t.isRenderTargetTexture&&!0!==t.isExternalTexture&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)q(`WebGLRenderer: Texture marked for update but no image data found.`);else{if(!1!==e.complete)return void P(a,t,i);q(`WebGLRenderer: Texture marked for update but image is incomplete`)}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}let O={[Fr]:e.REPEAT,[Ir]:e.CLAMP_TO_EDGE,[Lr]:e.MIRRORED_REPEAT},k={[Rr]:e.NEAREST,[zr]:e.NEAREST_MIPMAP_NEAREST,[Br]:e.NEAREST_MIPMAP_LINEAR,[Vr]:e.LINEAR,[Hr]:e.LINEAR_MIPMAP_NEAREST,[Ur]:e.LINEAR_MIPMAP_LINEAR},A={[Ji]:e.NEVER,[ta]:e.ALWAYS,[Yi]:e.LESS,[Zi]:e.LEQUAL,[Xi]:e.EQUAL,[ea]:e.GEQUAL,[Qi]:e.GREATER,[$i]:e.NOTEQUAL};function j(n,a){if(a.type!==Xr||!1!==t.has(`OES_texture_float_linear`)||a.magFilter!==Vr&&a.magFilter!==Hr&&a.magFilter!==Br&&a.magFilter!==Ur&&a.minFilter!==Vr&&a.minFilter!==Hr&&a.minFilter!==Br&&a.minFilter!==Ur||q(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,O[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,O[a.wrapT]),n!==e.TEXTURE_3D&&n!==e.TEXTURE_2D_ARRAY||e.texParameteri(n,e.TEXTURE_WRAP_R,O[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,k[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,k[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,A[a.compareFunction])),!0===t.has(`EXT_texture_filter_anisotropic`)){if(a.magFilter===Rr||a.minFilter!==Br&&a.minFilter!==Ur||a.type===Xr&&!1===t.has(`OES_texture_float_linear`))return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function M(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,C));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=function(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&T(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function N(e,t,n){return Math.floor(Math.floor(e/n)/t)}function P(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=M(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||!0===l){n.activeTexture(e.TEXTURE0+s);let t=_a.getPrimaries(_a.workingColorSpace),r=o.colorSpace===Hi?null:_a.getPrimaries(o.colorSpace),f=o.colorSpace===Hi||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,f);let p=g(o.image,!1,i.maxTextureSize);p=re(o,p);let m=a.convert(o.format,o.colorSpace),h=a.convert(o.type),y,C=b(o.internalFormat,m,h,o.colorSpace,o.isVideoTexture);j(c,o);let w=o.mipmaps,T=!0!==o.isVideoTexture,E=d.__version===void 0||!0===l,D=u.dataReady,O=S(o,p);if(o.isDepthTexture)C=x(o.format===ai,o.type),E&&(T?n.texStorage2D(e.TEXTURE_2D,1,C,p.width,p.height):n.texImage2D(e.TEXTURE_2D,0,C,p.width,p.height,0,m,h,null));else if(o.isDataTexture)if(w.length>0){T&&E&&n.texStorage2D(e.TEXTURE_2D,O,C,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)y=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,m,h,y.data):n.texImage2D(e.TEXTURE_2D,t,C,y.width,y.height,0,m,h,y.data);o.generateMipmaps=!1}else T?(E&&n.texStorage2D(e.TEXTURE_2D,O,C,p.width,p.height),D&&function(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=N(n.start,r.width,4),c=N(t.start,r.width,4);n.start<=i+1&&a===c&&N(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=e.getParameter(e.UNPACK_ROW_LENGTH),l=e.getParameter(e.UNPACK_SKIP_PIXELS),u=e.getParameter(e.UNPACK_SKIP_ROWS);e.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;e.pixelStorei(e.UNPACK_SKIP_PIXELS,u),e.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),e.pixelStorei(e.UNPACK_ROW_LENGTH,c),e.pixelStorei(e.UNPACK_SKIP_PIXELS,l),e.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}(o,p,m,h)):n.texImage2D(e.TEXTURE_2D,0,C,p.width,p.height,0,m,h,p.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){T&&E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,C,w[0].width,w[0].height,p.depth);for(let t=0,r=w.length;t<r;t++)if(y=w[t],o.format!==ri)if(m!==null)if(T){if(D)if(o.layerUpdates.size>0){let r=dt(y.width,y.height,o.format,o.type);for(let i of o.layerUpdates){let a=y.data.subarray(i*r/y.data.BYTES_PER_ELEMENT,(i+1)*r/y.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,i,y.width,y.height,1,m,a)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,y.width,y.height,p.depth,m,y.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,t,C,y.width,y.height,p.depth,0,y.data,0,0);else q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else T?D&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,t,0,0,0,y.width,y.height,p.depth,m,h,y.data):n.texImage3D(e.TEXTURE_2D_ARRAY,t,C,y.width,y.height,p.depth,0,m,h,y.data)}else{T&&E&&n.texStorage2D(e.TEXTURE_2D,O,C,w[0].width,w[0].height);for(let t=0,r=w.length;t<r;t++)y=w[t],o.format===ri?T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,m,h,y.data):n.texImage2D(e.TEXTURE_2D,t,C,y.width,y.height,0,m,h,y.data):m===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,y.width,y.height,m,y.data):n.compressedTexImage2D(e.TEXTURE_2D,t,C,y.width,y.height,0,y.data)}else if(o.isDataArrayTexture)if(T){if(E&&n.texStorage3D(e.TEXTURE_2D_ARRAY,O,C,p.width,p.height,p.depth),D)if(o.layerUpdates.size>0){let t=dt(p.width,p.height,o.format,o.type);for(let r of o.layerUpdates){let i=p.data.subarray(r*t/p.data.BYTES_PER_ELEMENT,(r+1)*t/p.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,r,p.width,p.height,1,m,h,i)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,C,p.width,p.height,p.depth,0,m,h,p.data);else if(o.isData3DTexture)T?(E&&n.texStorage3D(e.TEXTURE_3D,O,C,p.width,p.height,p.depth),D&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,p.width,p.height,p.depth,m,h,p.data)):n.texImage3D(e.TEXTURE_3D,0,C,p.width,p.height,p.depth,0,m,h,p.data);else if(o.isFramebufferTexture){if(E)if(T)n.texStorage2D(e.TEXTURE_2D,O,C,p.width,p.height);else{let t=p.width,r=p.height;for(let i=0;i<O;i++)n.texImage2D(e.TEXTURE_2D,i,C,t,r,0,m,h,null),t>>=1,r>>=1}}else if(w.length>0){if(T&&E){let t=ie(w[0]);n.texStorage2D(e.TEXTURE_2D,O,C,t.width,t.height)}for(let t=0,r=w.length;t<r;t++)y=w[t],T?D&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m,h,y):n.texImage2D(e.TEXTURE_2D,t,C,m,h,y);o.generateMipmaps=!1}else if(T){if(E){let t=ie(p);n.texStorage2D(e.TEXTURE_2D,O,C,t.width,t.height)}D&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,m,h,p)}else n.texImage2D(e.TEXTURE_2D,0,C,m,h,p);_(o)&&v(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function F(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=b(o.internalFormat,d,f,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,te(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function I(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=x(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,l=te(n);ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,l,o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,l,o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=b(o.internalFormat,c,l,o.colorSpace),d=te(n);r&&!1===ne(n)?e.renderbufferStorageMultisample(e.RENDERBUFFER,d,u,n.width,n.height):ne(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,d,u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ee(t,i){if(i&&i.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(n.bindFramebuffer(e.FRAMEBUFFER,t),!i.depthTexture||!i.depthTexture.isDepthTexture)throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let a=r.get(i.depthTexture);a.__renderTarget=i,a.__webglTexture&&i.depthTexture.image.width===i.width&&i.depthTexture.image.height===i.height||(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),D(i.depthTexture,0);let o=a.__webglTexture,c=te(i);if(i.depthTexture.format===ii)ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,o,0);else{if(i.depthTexture.format!==ai)throw Error(`Unknown depthTexture format`);ne(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,o,0)}}function L(t){let i=r.get(t),a=!0===t.isWebGLCubeRenderTarget;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)throw Error(`target.depthTexture not supported in Cube render targets`);let e=t.texture.mipmaps;e&&e.length>0?ee(i.__webglFramebuffer[0],t):ee(i.__webglFramebuffer,t)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),I(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),I(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}let R=[],z=[];function te(e){return Math.min(i.maxSamples,e.samples)}function ne(e){let n=r.get(e);return e.samples>0&&!0===t.has(`WEBGL_multisampled_render_to_texture`)&&!1!==n.__useRenderToTexture}function re(e,t){let n=e.colorSpace,r=e.format,i=e.type;return!0===e.isCompressedTexture||!0===e.isVideoTexture||n!==Wi&&n!==Hi&&(_a.getTransfer(n)===Ki?r===ri&&i===Wr||q(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):Ye(`WebGLTextures: Unsupported texture color space:`,n)),t}function ie(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(u.width=e.naturalWidth||e.width,u.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(u.width=e.displayWidth,u.height=e.displayHeight):(u.width=e.width,u.height=e.height),u}this.allocateTextureUnit=function(){let e=E;return e>=i.maxTextures&&q(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),E+=1,e},this.resetTextureUnits=function(){E=0},this.setTexture2D=D,this.setTexture2DArray=function(t,i){let a=r.get(t);!1===t.isRenderTargetTexture&&t.version>0&&a.__version!==t.version?P(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))},this.setTexture3D=function(t,i){let a=r.get(t);!1===t.isRenderTargetTexture&&t.version>0&&a.__version!==t.version?P(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)},this.setTextureCube=function(t,o){let s=r.get(t);t.version>0&&s.__version!==t.version?function(t,o,s){if(o.image.length!==6)return;let c=M(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||!0===c){n.activeTexture(e.TEXTURE0+s);let t=_a.getPrimaries(_a.workingColorSpace),r=o.colorSpace===Hi?null:_a.getPrimaries(o.colorSpace),d=o.colorSpace===Hi||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)m[e]=f||p?p?o.image[e].image:o.image[e]:g(o.image[e],!0,i.maxCubemapSize),m[e]=re(o,m[e]);let h=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=b(o.internalFormat,y,x,o.colorSpace),w=!0!==o.isVideoTexture,T=u.__version===void 0||!0===c,E=l.dataReady,D,O=S(o,h);if(j(e.TEXTURE_CUBE_MAP,o),f){w&&T&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,C,h.width,h.height);for(let t=0;t<6;t++){D=m[t].mipmaps;for(let r=0;r<D.length;r++){let i=D[r];o.format===ri?w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?q(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):w?E&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(D=o.mipmaps,w&&T){D.length>0&&O++;let t=ie(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<D.length;r++){let i=D[r].image[t].image;w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<D.length;r++){let i=D[r];w?E&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}_(o)&&v(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}(s,t,o):n.bindTexture(e.TEXTURE_CUBE_MAP,s.__webglTexture,e.TEXTURE0+o)},this.rebindTextures=function(t,n,i){let a=r.get(t);n!==void 0&&F(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&L(t)},this.setupRenderTarget=function(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,w);let l=t.textures,u=!0===t.isWebGLCubeRenderTarget,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&!1===ne(t)){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=b(r.internalFormat,i,o,r.colorSpace,!0===t.isXRRenderTarget),u=te(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),I(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),j(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)F(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else F(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);_(i)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),j(c,a),F(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),_(a)&&v(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),j(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)F(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else F(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);_(i)&&v(r),n.unbindTexture()}t.depthBuffer&&L(t)},this.updateRenderTargetMipmap=function(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(_(a)){let t=y(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),v(t),n.unbindTexture()}}},this.updateMultisampleRenderTarget=function(t){if(t.samples>0){if(!1===ne(t)){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),!0===c&&(R.length=0,z.length=0,R.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&!1===t.resolveDepthBuffer&&(R.push(l),z.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,z)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,R))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&!1===t.resolveDepthBuffer&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}},this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=F,this.useMultisampledRTT=ne}function Zn(e,t){return{convert:function(n,r=``){let i,a=_a.getTransfer(r);if(n===Wr)return e.UNSIGNED_BYTE;if(n===Qr)return e.UNSIGNED_SHORT_4_4_4_4;if(n===$r)return e.UNSIGNED_SHORT_5_5_5_1;if(n===ti)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===ni)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gr)return e.BYTE;if(n===Kr)return e.SHORT;if(n===qr)return e.UNSIGNED_SHORT;if(n===Jr)return e.INT;if(n===Yr)return e.UNSIGNED_INT;if(n===Xr)return e.FLOAT;if(n===Zr)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===ri)return e.RGBA;if(n===ii)return e.DEPTH_COMPONENT;if(n===ai)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===oi)return e.RED_INTEGER;if(n===si)return e.RG;if(n===ci)return e.RG_INTEGER;if(n===li)return e.RGBA_INTEGER;if(n===ui||n===di||n===fi||n===pi)if(a===Ki){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i===null)return null;if(n===ui)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===di)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fi)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pi)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(i=t.get(`WEBGL_compressed_texture_s3tc`),i===null)return null;if(n===ui)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===di)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fi)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pi)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===mi||n===hi||n===gi||n===_i){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i===null)return null;if(n===mi)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hi)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===gi)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_i)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===vi||n===yi||n===bi){if(i=t.get(`WEBGL_compressed_texture_etc`),i===null)return null;if(n===vi||n===yi)return a===Ki?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===bi)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}if(n===xi||n===Si||n===Ci||n===wi||n===Ti||n===Ei||n===Di||n===Oi||n===ki||n===Ai||n===ji||n===Mi||n===Ni||n===Pi){if(i=t.get(`WEBGL_compressed_texture_astc`),i===null)return null;if(n===xi)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Si)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ci)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wi)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ti)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ei)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Di)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oi)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ki)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ai)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ji)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mi)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ni)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pi)return a===Ki?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===Fi||n===Ii||n===Li){if(i=t.get(`EXT_texture_compression_bptc`),i===null)return null;if(n===Fi)return a===Ki?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ii)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Li)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===Ri||n===zi||n===Bi||n===Vi){if(i=t.get(`EXT_texture_compression_rgtc`),i===null)return null;if(n===Ri)return i.COMPRESSED_RED_RGTC1_EXT;if(n===zi)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Bi)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vi)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===ei?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}}}function Qn(e,t){function n(e,t){!0===e.matrixAutoUpdate&&e.updateMatrix(),t.value.copy(e.matrix)}function r(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,el.copy(o),el.x*=-1,el.y*=-1,el.z*=-1,a.isCubeTexture&&!1===a.isRenderTargetTexture&&(el.y*=-1,el.z*=-1),e.envMapRotation.value.setFromMatrix4(tl.makeRotationFromEuler(el)),e.flipEnvMap.value=a.isCubeTexture&&!1===a.isRenderTargetTexture?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}return{refreshFogUniforms:function(t,n){n.color.getRGB(t.fogColor.value,ut(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)},refreshMaterialUniforms:function(e,i,a,o,s){i.isMeshBasicMaterial||i.isMeshLambertMaterial?r(e,i):i.isMeshToonMaterial?(r(e,i),function(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}(e,i)):i.isMeshPhongMaterial?(r(e,i),function(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}(e,i)):i.isMeshStandardMaterial?(r(e,i),function(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}(e,i),i.isMeshPhysicalMaterial&&function(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}(e,i,s)):i.isMeshMatcapMaterial?(r(e,i),function(e,t){t.matcap&&(e.matcap.value=t.matcap)}(e,i)):i.isMeshDepthMaterial?r(e,i):i.isMeshDistanceMaterial?(r(e,i),function(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}(e,i)):i.isMeshNormalMaterial?r(e,i):i.isLineBasicMaterial?(function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}(e,i),i.isLineDashedMaterial&&function(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}(e,i)):i.isPointsMaterial?function(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=.5*i,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,i,a,o):i.isSpriteMaterial?function(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}(e,i):i.isShadowMaterial?(e.color.value.copy(i.color),e.opacity.value=i.opacity):i.isShaderMaterial&&(i.uniformsNeedUpdate=!1)}}}function $n(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(!1===e.equals(i))return e.copy(i),!0}return!1}function l(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?q(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):q(`WebGLRenderer: Unsupported uniform value type.`,e),t}function u(t){let n=t.target;n.removeEventListener(`dispose`,u);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}return{bind:function(e,t){let n=t.program;r.uniformBlockBinding(e,n)},update:function(n,d){let f=i[n.id];f===void 0&&(function(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=l(i[e]),a=n%16,o=a%r.boundary,s=a+o;n+=o,s!==0&&16-s<r.storage&&(n+=16-s),t.__data=new Float32Array(r.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=r.storage}}}let r=n%16;r>0&&(n+=16-r),e.__size=n,e.__cache={}}(n),f=function(t){let n=function(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return Ye(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}(n),i[n.id]=f,n.addEventListener(`dispose`,u));let p=d.program;r.updateUBOMapping(n,p);let m=t.render.frame;a[n.id]!==m&&(function(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(!0===c(i,t,r,a)){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=l(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}(n),a[n.id]=m)},dispose:function(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}}}function er(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function tr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,Y,fa,pa,X,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,Z,Q,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,$,jd,Md,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im=e((()=>{
/*!
* GSAP 3.13.0
* https://gsap.com
*
* @license Copyright 2008-2025, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
/*!
* CSSPlugin 3.13.0
* https://gsap.com
*
* Copyright 2008-2025, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license
* @author: Jack Doyle, jack@greensock.com
*/
/*!
* @gsap/react 2.1.2
* https://gsap.com
*
* Copyright 2008-2025, GreenSock. All rights reserved.
* Subject to the terms at https://gsap.com/standard-license or for
* Club GSAP members, the agreement issued with that membership.
* @author: Jack Doyle, jack@greensock.com
*/
i(),n(),nr=`181`,rr=0,ir=1,ar=2,or=100,sr=101,cr=102,lr=200,ur=201,dr=202,fr=203,pr=204,mr=205,hr=206,gr=207,_r=208,vr=209,yr=210,br=211,xr=212,Sr=213,Cr=214,wr=0,Tr=1,Er=2,Dr=3,Or=4,kr=5,Ar=6,jr=7,Mr=301,Nr=302,Pr=306,Fr=1e3,Ir=1001,Lr=1002,Rr=1003,zr=1004,Br=1005,Vr=1006,Hr=1007,Ur=1008,Wr=1009,Gr=1010,Kr=1011,qr=1012,Jr=1013,Yr=1014,Xr=1015,Zr=1016,Qr=1017,$r=1018,ei=1020,ti=35902,ni=35899,ri=1023,ii=1026,ai=1027,oi=1029,si=1030,ci=1031,li=1033,ui=33776,di=33777,fi=33778,pi=33779,mi=35840,hi=35841,gi=35842,_i=35843,vi=36196,yi=37492,bi=37496,xi=37808,Si=37809,Ci=37810,wi=37811,Ti=37812,Ei=37813,Di=37814,Oi=37815,ki=37816,Ai=37817,ji=37818,Mi=37819,Ni=37820,Pi=37821,Fi=36492,Ii=36494,Li=36495,Ri=36283,zi=36284,Bi=36285,Vi=36286,Hi=``,Ui=`srgb`,Wi=`srgb-linear`,Gi=`linear`,Ki=`srgb`,qi=7680,Ji=512,Yi=513,Xi=514,Zi=515,Qi=516,$i=517,ea=518,ta=519,na=`300 es`,ra=2e3,ia=2001,aa={},oa=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},sa=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),ca=Math.PI/180,la=180/Math.PI,ua=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=J(this.x,e.x,t.x),this.y=J(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=J(this.x,e,t),this.y=J(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(J(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(J(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},da=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o<=0)return e[t+0]=s,e[t+1]=c,e[t+2]=l,void(e[t+3]=u);if(o>=1)return e[t+0]=d,e[t+1]=f,e[t+2]=p,void(e[t+3]=m);if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,s=s*t+d*(o=Math.sin(o*n)/r),c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:q(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return!0===t&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(J(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Y=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pa.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=J(this.x,e.x,t.x),this.y=J(this.y,e.y,t.y),this.z=J(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=J(this.x,e,t),this.y=J(this.y,e,t),this.z=J(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(J(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(J(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fa=new Y,pa=new da,X=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ma.makeScale(e,t)),this}rotate(e){return this.premultiply(ma.makeRotation(-e)),this}translate(e,t){return this.premultiply(ma.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ma=new X,ha=new X().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ga=new X().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715),_a=tt(),ya=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{va===void 0&&(va=Ke(`canvas`)),va.width=e.width,va.height=e.height;let t=va.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=va}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ke(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=255*nt(i[e]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(255*nt(t[e]/255)):t[e]=nt(t[e]);return{data:t,width:e.width,height:e.height}}return q(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},ba=0,xa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ba++}),this.uuid=Ze(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){!0===e&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(it(r[t].image)):e.push(it(r[t]))}else e=it(r);n.url=e}return t||(e.images[this.uuid]=n),n}},Sa=0,Ca=new Y,wa=class e extends oa{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=1001,i=1001,a=1006,o=1008,s=1023,c=1009,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sa++}),this.uuid=Ze(),this.name=``,this.source=new xa(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new ua(0,0),this.repeat=new ua(1,1),this.center=new ua(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new X,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){q(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x-=Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Lr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y-=Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Lr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){!0===e&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){!0===e&&this.pmremVersion++}},wa.DEFAULT_IMAGE=null,wa.DEFAULT_MAPPING=300,wa.DEFAULT_ANISOTROPY=1,Ta=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=J(this.x,e.x,t.x),this.y=J(this.y,e.y,t.y),this.z=J(this.z,e.z,t.z),this.w=J(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=J(this.x,e,t),this.y=J(this.y,e,t),this.z=J(this.z,e,t),this.w=J(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(J(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ea=class extends oa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ta(0,0,e,t),this.scissorTest=!1,this.viewport=new Ta(0,0,e,t);let r={width:e,height:t,depth:n.depth},i=new wa(r);this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Vr,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,!0!==this.textures[r].isData3DTexture&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new xa(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Da=class extends Ea{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Oa=class extends wa{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rr,this.minFilter=Rr,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},ka=class extends wa{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Rr,this.minFilter=Rr,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Aa=class{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ma.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ma.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ma.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(!0===t&&r!==void 0&&!0!==e.isInstancedMesh)for(let t=0,n=r.count;t<n;t++)!0===e.isMesh?e.getVertexPosition(t,Ma):Ma.fromBufferAttribute(r,t),Ma.applyMatrix4(e.matrixWorld),this.expandByPoint(Ma);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Na.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Na.copy(e.boundingBox)),Na.applyMatrix4(e.matrixWorld),this.union(Na)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ma),Ma.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),Va.subVectors(this.max,Ba),Pa.subVectors(e.a,Ba),Fa.subVectors(e.b,Ba),Ia.subVectors(e.c,Ba),La.subVectors(Fa,Pa),Ra.subVectors(Ia,Fa),za.subVectors(Pa,Ia);let t=[0,-La.z,La.y,0,-Ra.z,Ra.y,0,-za.z,za.y,La.z,0,-La.x,Ra.z,0,-Ra.x,za.z,0,-za.x,-La.y,La.x,0,-Ra.y,Ra.x,0,-za.y,za.x,0];return!!at(t,Pa,Fa,Ia,Va)&&(t=[1,0,0,0,1,0,0,0,1],!!at(t,Pa,Fa,Ia,Va)&&(Ha.crossVectors(La,Ra),t=[Ha.x,Ha.y,Ha.z],at(t,Pa,Fa,Ia,Va)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ma).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ma).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ja[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ja[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ja[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ja[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ja[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ja[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ja[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ja[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ja)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ja=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Ma=new Y,Na=new Aa,Pa=new Y,Fa=new Y,Ia=new Y,La=new Y,Ra=new Y,za=new Y,Ba=new Y,Va=new Y,Ha=new Y,Ua=new Y,Wa=new Aa,Ga=new Y,Ka=new Y,qa=class{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Wa.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);let t=Ga.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=.5*(e-this.radius);this.center.addScaledVector(Ga,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(!0===this.center.equals(e.center)?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(Ka)),this.expandByPoint(Ga.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ja=new Y,Ya=new Y,Xa=new Y,Za=new Y,Qa=new Y,$a=new Y,eo=new Y,to=class{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ja)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ja.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ja.copy(this.origin).addScaledVector(this.direction,t),Ja.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Ya.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),Za.copy(this.origin).sub(Ya);let i=.5*e.distanceTo(t),a=-this.direction.dot(Xa),o=Za.dot(this.direction),s=-Za.dot(Xa),c=Za.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ya).addScaledVector(Xa,d),f}intersectSphere(e,t){Ja.subVectors(e.center,this.origin);let n=Ja.dot(this.direction),r=Ja.dot(Ja)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r?null:((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r?null:((o>n||n!=n)&&(n=o),(s<r||r!=r)&&(r=s),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Ja)!==null}intersectTriangle(e,t,n,r,i){Qa.subVectors(t,e),$a.subVectors(n,e),eo.crossVectors(Qa,$a);let a,o=this.direction.dot(eo);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Za.subVectors(this.origin,e);let s=a*this.direction.dot($a.crossVectors(Za,$a));if(s<0)return null;let c=a*this.direction.dot(Qa.cross(Za));if(c<0||s+c>o)return null;let l=-a*Za.dot(eo);return l<0?null:this.at(l/o,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},no=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/ro.setFromMatrixColumn(e,0).length(),i=1/ro.setFromMatrixColumn(e,1).length(),a=1/ro.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ao,e,oo)}lookAt(e,t,n){let r=this.elements;return lo.subVectors(e,t),lo.lengthSq()===0&&(lo.z=1),lo.normalize(),so.crossVectors(n,lo),so.lengthSq()===0&&(Math.abs(n.z)===1?lo.x+=1e-4:lo.z+=1e-4,lo.normalize(),so.crossVectors(n,lo)),so.normalize(),co.crossVectors(lo,so),r[0]=so.x,r[4]=co.x,r[8]=lo.x,r[1]=so.y,r[5]=co.y,r[9]=lo.y,r[2]=so.z,r[6]=co.z,r[10]=lo.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14];return e[3]*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+e[7]*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+e[11]*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+e[15]*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=ro.set(r[0],r[1],r[2]).length(),a=ro.set(r[4],r[5],r[6]).length(),o=ro.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],io.copy(this);let s=1/i,c=1/a,l=1/o;return io.elements[0]*=s,io.elements[1]*=s,io.elements[2]*=s,io.elements[4]*=c,io.elements[5]*=c,io.elements[6]*=c,io.elements[8]*=l,io.elements[9]*=l,io.elements[10]*=l,t.setFromRotationMatrix(io),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=2e3,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===ra)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else{if(o!==ia)throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);p=-a/(a-i),m=-a*i/(a-i)}return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=2e3,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===ra)p=-2/(a-i),m=-(a+i)/(a-i);else{if(o!==ia)throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);p=-1/(a-i),m=-i/(a-i)}return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ro=new Y,io=new no,ao=new Y(0,0,0),oo=new Y(1,1,1),so=new Y,co=new Y,lo=new Y,uo=new no,fo=new da,po=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(J(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-J(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(J(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-J(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(J(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-J(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:q(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,!0===n&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return uo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fo.setFromEuler(this),this.setFromQuaternion(fo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}},po.DEFAULT_ORDER=`XYZ`,mo=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},ho=0,go=new Y,_o=new da,vo=new no,yo=new Y,bo=new Y,xo=new Y,So=new da,Co=new Y(1,0,0),wo=new Y(0,1,0),To=new Y(0,0,1),Eo={type:`added`},Do={type:`removed`},Oo={type:`childadded`,child:null},ko={type:`childremoved`,child:null},Ao=class e extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ho++}),this.uuid=Ze(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new Y,n=new po,r=new da,i=new Y(1,1,1);n._onChange(function(){r.setFromEuler(n,!1)}),r._onChange(function(){n.setFromQuaternion(r,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new no},normalMatrix:{value:new X}}),this.matrix=new no,this.matrixWorld=new no,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.multiply(_o),this}rotateOnWorldAxis(e,t){return _o.setFromAxisAngle(e,t),this.quaternion.premultiply(_o),this}rotateX(e){return this.rotateOnAxis(Co,e)}rotateY(e){return this.rotateOnAxis(wo,e)}rotateZ(e){return this.rotateOnAxis(To,e)}translateOnAxis(e,t){return go.copy(e).applyQuaternion(this.quaternion),this.position.add(go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Co,e)}translateY(e){return this.translateOnAxis(wo,e)}translateZ(e){return this.translateOnAxis(To,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vo.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yo.copy(e):yo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vo.lookAt(bo,yo,this.up):vo.lookAt(yo,bo,this.up),this.quaternion.setFromRotationMatrix(vo),r&&(vo.extractRotation(r.matrixWorld),_o.setFromRotationMatrix(vo),this.quaternion.premultiply(_o.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(Ye(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eo),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null):Ye(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Do),ko.child=e,this.dispatchEvent(ko),ko.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vo.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vo.multiply(e.parent.matrixWorld)),e.applyMatrix4(vo),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eo),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,xo),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,So,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(!1===this.visible)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(!0===this.matrixWorldAutoUpdate&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(!0===e&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),!0===this.matrixWorldAutoUpdate&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),!0===t){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),!0===this.castShadow&&(r.castShadow=!0),!0===this.receiveShadow&&(r.receiveShadow=!0),!1===this.visible&&(r.visible=!1),!1===this.frustumCulled&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),!1===this.matrixAutoUpdate&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&!0!==this.environment.isRenderTargetTexture&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),!0===t)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}},Ao.DEFAULT_UP=new Y(0,1,0),Ao.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ao.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,jo=new Y,Mo=new Y,No=new Y,Po=new Y,Fo=new Y,Io=new Y,Lo=new Y,Ro=new Y,zo=new Y,Bo=new Y,Vo=new Ta,Ho=new Ta,Uo=new Ta,Wo=class e{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jo.subVectors(e,t),r.cross(jo);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){jo.subVectors(r,t),Mo.subVectors(n,t),No.subVectors(e,t);let a=jo.dot(jo),o=jo.dot(Mo),s=jo.dot(No),c=Mo.dot(Mo),l=Mo.dot(No),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Po)!==null&&Po.x>=0&&Po.y>=0&&Po.x+Po.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Po)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Po.x),s.addScaledVector(a,Po.y),s.addScaledVector(o,Po.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Vo.setScalar(0),Ho.setScalar(0),Uo.setScalar(0),Vo.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,n),Uo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vo,i.x),a.addScaledVector(Ho,i.y),a.addScaledVector(Uo,i.z),a}static isFrontFacing(e,t,n,r){return jo.subVectors(n,t),Mo.subVectors(e,t),jo.cross(Mo).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jo.subVectors(this.c,this.b),Mo.subVectors(this.a,this.b),.5*jo.cross(Mo).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Fo.subVectors(r,n),Io.subVectors(i,n),Ro.subVectors(e,n);let s=Fo.dot(Ro),c=Io.dot(Ro);if(s<=0&&c<=0)return t.copy(n);zo.subVectors(e,r);let l=Fo.dot(zo),u=Io.dot(zo);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Fo,a);Bo.subVectors(e,i);let f=Fo.dot(Bo),p=Io.dot(Bo);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Io,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Lo.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Lo,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Fo,a).addScaledVector(Io,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Go={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ko={h:0,s:0,l:0},qo={h:0,s:0,l:0},Jo=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,_a.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_a.workingColorSpace){return this.r=e,this.g=t,this.b=n,_a.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_a.workingColorSpace){var i;if(e=(e%(i=1)+i)%i,t=J(t,0,1),n=J(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=ot(i,r,e+1/3),this.g=ot(i,r,e),this.b=ot(i,r,e-1/3)}return _a.colorSpaceToWorking(this,r),this}setStyle(e,t=Ui){function n(t){t!==void 0&&parseFloat(t)<1&&q(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:q(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);q(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ui){let n=Go[e.toLowerCase()];return n===void 0?q(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nt(e.r),this.g=nt(e.g),this.b=nt(e.b),this}copyLinearToSRGB(e){return this.r=rt(e.r),this.g=rt(e.g),this.b=rt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ui){return _a.workingToColorSpace(Yo.copy(this),e),65536*Math.round(J(255*Yo.r,0,255))+256*Math.round(J(255*Yo.g,0,255))+Math.round(J(255*Yo.b,0,255))}getHexString(e=Ui){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_a.workingColorSpace){_a.workingToColorSpace(Yo.copy(this),t);let n=Yo.r,r=Yo.g,i=Yo.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=_a.workingColorSpace){return _a.workingToColorSpace(Yo.copy(this),t),e.r=Yo.r,e.g=Yo.g,e.b=Yo.b,e}getStyle(e=Ui){_a.workingToColorSpace(Yo.copy(this),e);let t=Yo.r,n=Yo.g,r=Yo.b;return e===Ui?`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Ko),this.setHSL(Ko.h+e,Ko.s+t,Ko.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ko),e.getHSL(qo);let n=Qe(Ko.h,qo.h,t),r=Qe(Ko.s,qo.s,t),i=Qe(Ko.l,qo.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Yo=new Jo,Jo.NAMES=Go,Xo=0,Zo=class extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xo++}),this.uuid=Ze(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jo(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){q(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?q(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),!0===this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),!0===this.transparent&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==or&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),!1===this.depthTest&&(n.depthTest=this.depthTest),!1===this.depthWrite&&(n.depthWrite=this.depthWrite),!1===this.colorWrite&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),!0===this.stencilWrite&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),!0===this.polygonOffset&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),!0===this.dithering&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),!0===this.alphaHash&&(n.alphaHash=!0),!0===this.alphaToCoverage&&(n.alphaToCoverage=!0),!0===this.premultipliedAlpha&&(n.premultipliedAlpha=!0),!0===this.forceSinglePass&&(n.forceSinglePass=!0),!0===this.wireframe&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),!0===this.flatShading&&(n.flatShading=!0),!1===this.visible&&(n.visible=!1),!1===this.toneMapped&&(n.toneMapped=!1),!1===this.fog&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){!0===e&&this.version++}},Qo=class extends Zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Jo(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new po,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$o=new Y,es=new ua,ts=0,ns=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ts++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=35044,this.updateRanges=[],this.gpuType=Xr,this.version=0}onUploadCallback(){}set needsUpdate(e){!0===e&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)es.fromBufferAttribute(this,t),es.applyMatrix3(e),this.setXY(t,es.x,es.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXYZ(t,$o.x,$o.y,$o.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix4(e),this.setXYZ(t,$o.x,$o.y,$o.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyNormalMatrix(e),this.setXYZ(t,$o.x,$o.y,$o.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.transformDirection(e),this.setXYZ(t,$o.x,$o.y,$o.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$e(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$e(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$e(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$e(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$e(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),r=et(r,this.array),i=et(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},rs=class extends ns{constructor(e,t,n){super(new Uint16Array(e),t,n)}},is=class extends ns{constructor(e,t,n){super(new Uint32Array(e),t,n)}},as=class extends ns{constructor(e,t,n){super(new Float32Array(e),t,n)}},os=0,ss=new no,cs=new Ao,ls=new Y,us=new Aa,ds=new Aa,fs=new Y,ps=class e extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:os++}),this.uuid=Ze(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ge(e)?is:rs)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new X().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ss.makeRotationFromQuaternion(e),this.applyMatrix4(ss),this}rotateX(e){return ss.makeRotationX(e),this.applyMatrix4(ss),this}rotateY(e){return ss.makeRotationY(e),this.applyMatrix4(ss),this}rotateZ(e){return ss.makeRotationZ(e),this.applyMatrix4(ss),this}translate(e,t,n){return ss.makeTranslation(e,t,n),this.applyMatrix4(ss),this}scale(e,t,n){return ss.makeScale(e,t,n),this.applyMatrix4(ss),this}lookAt(e){return cs.lookAt(e),cs.updateMatrix(),this.applyMatrix4(cs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new as(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&q(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Aa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ye(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),void this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];us.setFromBufferAttribute(n),this.morphTargetsRelative?(fs.addVectors(this.boundingBox.min,us.min),this.boundingBox.expandByPoint(fs),fs.addVectors(this.boundingBox.max,us.max),this.boundingBox.expandByPoint(fs)):(this.boundingBox.expandByPoint(us.min),this.boundingBox.expandByPoint(us.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return Ye(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),void this.boundingSphere.set(new Y,1/0);if(e){let n=this.boundingSphere.center;if(us.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ds.setFromBufferAttribute(n),this.morphTargetsRelative?(fs.addVectors(us.min,ds.min),us.expandByPoint(fs),fs.addVectors(us.max,ds.max),us.expandByPoint(fs)):(us.expandByPoint(ds.min),us.expandByPoint(ds.max))}us.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)fs.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(fs));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)fs.fromBufferAttribute(a,t),o&&(ls.fromBufferAttribute(e,t),fs.add(ls)),r=Math.max(r,n.distanceToSquared(fs))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void Ye(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);let n=t.position,r=t.normal,i=t.uv;!1===this.hasAttribute(`tangent`)&&this.setAttribute(`tangent`,new ns(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new Y,s[e]=new Y;let c=new Y,l=new Y,u=new Y,d=new ua,f=new ua,p=new ua,m=new Y,h=new Y;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start;for(let t=r,i=r+n.count;t<i;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new Y,y=new Y,b=new Y,x=new Y;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start;for(let t=r,i=r+n.count;t<i;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new ns(new Float32Array(3*t.count),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new Y,i=new Y,a=new Y,o=new Y,s=new Y,c=new Y,l=new Y,u=new Y;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fs.fromBufferAttribute(e,t),fs.normalize(),e.setXYZ(t,fs.x,fs.y,fs.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new ns(a,r,i)}if(this.index===null)return q(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=t(i[e],r);n.setAttribute(e,a)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=t(o[e],r);i.push(n)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},ms=new no,hs=new to,gs=new qa,_s=new Y,vs=new Y,ys=new Y,bs=new Y,xs=new Y,Ss=new Y,Cs=new Y,ws=new Y,Ts=class extends Ao{constructor(e=new ps,t=new Qo){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Ss.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(xs.fromBufferAttribute(s,e),a?Ss.addScaledVector(xs,r):Ss.addScaledVector(xs.sub(t),r))}t.add(Ss)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(i),hs.copy(e.ray).recast(e.near),!1===gs.containsPoint(hs.origin)&&(hs.intersectSphere(gs,_s)===null||hs.origin.distanceToSquared(_s)>(e.far-e.near)**2))return;ms.copy(i).invert(),hs.copy(e.ray).applyMatrix4(ms),n.boundingBox!==null&&!1===hs.intersectsBox(n.boundingBox)||this._computeIntersections(e,t,hs)}}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex];for(let i=Math.max(s.start,f.start),a=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));i<a;i+=3)r=st(this,p,e,n,c,l,u,o.getX(i),o.getX(i+1),o.getX(i+2)),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}else for(let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);i<s;i+=3)r=st(this,a,e,n,c,l,u,o.getX(i),o.getX(i+1),o.getX(i+2)),r&&(r.faceIndex=Math.floor(i/3),t.push(r));else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex];for(let i=Math.max(o.start,f.start),a=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));i<a;i+=3)r=st(this,p,e,n,c,l,u,i,i+1,i+2),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}else for(let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);i<o;i+=3)r=st(this,a,e,n,c,l,u,i,i+1,i+2),r&&(r.faceIndex=Math.floor(i/3),t.push(r))}},Es=class e extends ps{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new Y;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new as(c,3)),this.setAttribute(`normal`,new as(l,3)),this.setAttribute(`uv`,new as(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ds={clone:ct,merge:lt},Os=class extends Zo{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ct(e.uniforms),this.uniformsGroups=function(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)!0===this.extensions[e]&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ks=class extends Ao{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new no,this.projectionMatrix=new no,this.projectionMatrixInverse=new no,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},As=new Y,js=new ua,Ms=new ua,Ns=class extends ks{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*la*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*ca*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*la*Math.atan(Math.tan(.5*ca*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){As.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(As.x,As.y).multiplyScalar(-e/As.z),As.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(As.x,As.y).multiplyScalar(-e/As.z)}getViewSize(e,t){return this.getViewBounds(e,js,Ms),t.subVectors(Ms,js)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*ca*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ps=-90,Fs=class extends Ao{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ns(Ps,1,e,t);r.layers=this.layers,this.add(r);let i=new Ns(Ps,1,e,t);i.layers=this.layers,this.add(i);let a=new Ns(Ps,1,e,t);a.layers=this.layers,this.add(a);let o=new Ns(Ps,1,e,t);o.layers=this.layers,this.add(o);let s=new Ns(Ps,1,e,t);s.layers=this.layers,this.add(s);let c=new Ns(Ps,1,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===ra)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else{if(e!==ia)throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1)}for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Is=class extends wa{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ls=class extends Da{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Is(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Es(5,5,5),i=new Os({name:`CubemapFromEquirect`,uniforms:ct(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ts(r,i),o=t.minFilter;return t.minFilter===Ur&&(t.minFilter=Vr),new Fs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},Rs=class extends Ao{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zs={type:`move`},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vs=class extends Ao{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new po,this.environmentIntensity=1,this.environmentRotation=new po,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hs=class extends wa{constructor(e=null,t=1,n=1,r,i,a,o,s,c=1003,l=1003,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Us=new Y,Ws=new Y,Gs=new X,Ks=class{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Us.subVectors(n,t).cross(Ws.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Us),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gs.getNormalMatrix(e),r=this.coplanarPoint(Us).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},qs=new qa,Js=new ua(.5,.5),Ys=new Y,Xs=class{constructor(e=new Ks,t=new Ks,n=new Ks,r=new Ks,i=new Ks,a=new Ks){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===ra)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else{if(t!==ia)throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);r[5].setComponents(s,d,h,y).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qs)}intersectsSprite(e){qs.center.set(0,0,0);let t=Js.distanceTo(e.center);return qs.radius=.7071067811865476+t,qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(qs)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ys.x=r.normal.x>0?e.max.x:e.min.x,Ys.y=r.normal.y>0?e.max.y:e.min.y,Ys.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Zs=class extends wa{constructor(e,t,n=1014,r,i,a,o=1003,s=1003,c,l=1026,u=1){if(l!==ii&&l!==ai)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Qs=class extends wa{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$s=class e extends ps{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new as(p,3)),this.setAttribute(`normal`,new as(m,3)),this.setAttribute(`uv`,new as(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ec=class extends Zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},tc=class extends Zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},nc={enabled:!1,files:{},add:function(e,t){!1!==this.enabled&&(this.files[e]=t)},get:function(e){if(!1!==this.enabled)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}},rc=class{constructor(e,t,n){let r=this,i,a=!1,o=0,s=0,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){s++,!1===a&&r.onStart!==void 0&&r.onStart(e,o,s),a=!0},this.itemEnd=function(e){o++,r.onProgress!==void 0&&r.onProgress(e,o,s),o===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return i?i(e):e},this.setURLModifier=function(e){return i=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},ic=new rc,ac=class{constructor(e){this.manager=e===void 0?ic:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}},ac.DEFAULT_MATERIAL_NAME=`__DEFAULT`,oc=new WeakMap,sc=class extends ac{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=nc.get(`image:${e}`);if(a!==void 0){if(!0===a.complete)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let e=oc.get(a);e===void 0&&(e=[],oc.set(a,e)),e.push({onLoad:t,onError:r})}return a}let o=Ke(`img`);function s(){l(),t&&t(this);let n=oc.get(this)||[];for(let e=0;e<n.length;e++){let t=n[e];t.onLoad&&t.onLoad(this)}oc.delete(this),i.manager.itemEnd(e)}function c(t){l(),r&&r(t),nc.remove(`image:${e}`);let n=oc.get(this)||[];for(let e=0;e<n.length;e++){let r=n[e];r.onError&&r.onError(t)}oc.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function l(){o.removeEventListener(`load`,s,!1),o.removeEventListener(`error`,c,!1)}return o.addEventListener(`load`,s,!1),o.addEventListener(`error`,c,!1),e.slice(0,5)!==`data:`&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),nc.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}},cc=class extends ac{constructor(e){super(e)}load(e,t,n,r){let i=new wa,a=new sc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(e){i.image=e,i.needsUpdate=!0,t!==void 0&&t(i)},n,r),i}},lc=class extends ks{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uc=class extends Ns{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},dc=class e{constructor(e){this.value=e}clone(){return new e(this.value.clone===void 0?this.value:this.value.clone())}},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:nr}})),S!==void 0&&(S.__THREE__?q(`WARNING: Multiple instances of Three.js being imported.`):S.__THREE__=nr),Z={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new Jo(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new X}},envmap:{envMap:{value:null},envMapRotation:{value:new X},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new X}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new X}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new X},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new X},normalScale:{value:new ua(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new X},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new X}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new X}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new X}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jo(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jo(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0},uvTransform:{value:new X}},sprite:{diffuse:{value:new Jo(16777215)},opacity:{value:1},center:{value:new ua(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new X},alphaMap:{value:null},alphaMapTransform:{value:new X},alphaTest:{value:0}}},fc={basic:{uniforms:lt([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:Z.meshbasic_vert,fragmentShader:Z.meshbasic_frag},lambert:{uniforms:lt([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Jo(0)}}]),vertexShader:Z.meshlambert_vert,fragmentShader:Z.meshlambert_frag},phong:{uniforms:lt([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Jo(0)},specular:{value:new Jo(1118481)},shininess:{value:30}}]),vertexShader:Z.meshphong_vert,fragmentShader:Z.meshphong_frag},standard:{uniforms:lt([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Jo(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},toon:{uniforms:lt([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Jo(0)}}]),vertexShader:Z.meshtoon_vert,fragmentShader:Z.meshtoon_frag},matcap:{uniforms:lt([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:Z.meshmatcap_vert,fragmentShader:Z.meshmatcap_frag},points:{uniforms:lt([Q.points,Q.fog]),vertexShader:Z.points_vert,fragmentShader:Z.points_frag},dashed:{uniforms:lt([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Z.linedashed_vert,fragmentShader:Z.linedashed_frag},depth:{uniforms:lt([Q.common,Q.displacementmap]),vertexShader:Z.depth_vert,fragmentShader:Z.depth_frag},normal:{uniforms:lt([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:Z.meshnormal_vert,fragmentShader:Z.meshnormal_frag},sprite:{uniforms:lt([Q.sprite,Q.fog]),vertexShader:Z.sprite_vert,fragmentShader:Z.sprite_frag},background:{uniforms:{uvTransform:{value:new X},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Z.background_vert,fragmentShader:Z.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new X}},vertexShader:Z.backgroundCube_vert,fragmentShader:Z.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Z.cube_vert,fragmentShader:Z.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Z.equirect_vert,fragmentShader:Z.equirect_frag},distanceRGBA:{uniforms:lt([Q.common,Q.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Z.distanceRGBA_vert,fragmentShader:Z.distanceRGBA_frag},shadow:{uniforms:lt([Q.lights,Q.fog,{color:{value:new Jo(0)},opacity:{value:1}}]),vertexShader:Z.shadow_vert,fragmentShader:Z.shadow_frag}},fc.physical={uniforms:lt([fc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new X},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new X},clearcoatNormalScale:{value:new ua(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new X},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new X},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new X},sheen:{value:0},sheenColor:{value:new Jo(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new X},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new X},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new X},transmissionSamplerSize:{value:new ua},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new X},attenuationDistance:{value:0},attenuationColor:{value:new Jo(0)},specularColor:{value:new Jo(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new X},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new X},anisotropyVector:{value:new ua},anisotropyMap:{value:null},anisotropyMapTransform:{value:new X}}]),vertexShader:Z.meshphysical_vert,fragmentShader:Z.meshphysical_frag},pc={r:0,b:0,g:0},mc=new po,hc=new no,gc=[.125,.215,.35,.446,.526,.582],_c=20,vc=new lc,yc=new Jo,bc=null,xc=0,Sc=0,Cc=!1,wc=new Y,Tc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=wc}=i;bc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ct(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=St(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bc,xc,Sc),this._renderer.xr.enabled=Cc,e.scissorTest=!1,xt(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mr||e.mapping===Nr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bc=this._renderer.getRenderTarget(),xc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vr,minFilter:Vr,generateMipmaps:!1,type:Zr,format:ri,colorSpace:Wi,depthBuffer:!1},r=bt(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bt(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=function(e){let t=[],n=[],r=[],i=e,a=e-4+1+gc.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-4?s=gc[o-e+4-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new ps;h.setAttribute(`position`,new ns(f,3)),h.setAttribute(`uv`,new ns(p,2)),h.setAttribute(`faceIndex`,new ns(m,1)),r.push(new Ts(h,null)),i>4&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}(r)),this._blurMaterial=function(e,t,n){let r=new Float32Array(_c),i=new Y(0,1,0);return new Os({name:`SphericalGaussianBlur`,defines:{n:_c,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t),this._ggxMaterial=function(e,t,n){return new Os({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wt(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return r}_compileMaterial(e){let t=new Ts(new ps,e);this._renderer.compile(t,vc)}_sceneToCubeUV(e,t,n,r,i){let a=new Ns(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(yc),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ts(new Es,new Qo({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(yc),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;xt(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Mr||e.mapping===Nr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ct()),this._cubemapMaterial.uniforms.flipEnvMap.value=!1===e.isRenderTargetTexture?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=St());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i,i.uniforms.envMap.value=e;let o=this._cubeSize;xt(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,vc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(.05+.95*c),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-4?n-d+4:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,xt(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,vc),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,xt(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,vc)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&Ye(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):_c;m>_c&&q(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);let h=[],g=0;for(let e=0;e<_c;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];xt(t,3*v*(r>_-4?r-_+4:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,vc)}},Ec=new wa,Dc=new Zs(1,1),Oc=new Oa,kc=new ka,Ac=new Is,jc=[],Mc=[],Nc=new Float32Array(16),Pc=new Float32Array(9),Fc=new Float32Array(4),Ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(e){switch(e){case 5126:return It;case 35664:return Lt;case 35665:return Rt;case 35666:return zt;case 35674:return Bt;case 35675:return Vt;case 35676:return Ht;case 5124:case 35670:return Ut;case 35667:case 35671:return Wt;case 35668:case 35672:return Gt;case 35669:case 35673:return Kt;case 5125:return qt;case 36294:return Jt;case 36295:return Yt;case 36296:return Xt;case 35678:case 36198:case 36298:case 36306:case 35682:return Zt;case 35679:case 36299:case 36307:return Qt;case 35680:case 36300:case 36308:case 36293:return $t;case 36289:case 36303:case 36311:case 36292:return en}}(t.type)}},Lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(e){switch(e){case 5126:return tn;case 35664:return nn;case 35665:return rn;case 35666:return an;case 35674:return on;case 35675:return sn;case 35676:return cn;case 5124:case 35670:return ln;case 35667:case 35671:return un;case 35668:case 35672:return dn;case 35669:case 35673:return fn;case 5125:return pn;case 36294:return mn;case 36295:return hn;case 36296:return gn;case 35678:case 36198:case 36298:case 36306:case 35682:return _n;case 35679:case 36299:case 36307:return vn;case 35680:case 36300:case 36308:case 36293:return yn;case 36289:case 36303:case 36311:case 36292:return bn}}(t.type)}},Rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g,Bc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Sn(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];!1!==o.needsUpdate&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}},Vc=0,Hc=new X,Uc=new Y,Wc=/^[ \t]*#include +<([\w\d./]+)>/gm,Gc=new Map,Kc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g,qc=0,Jc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return!1===a.has(r)&&(a.add(r),r.usedTimes++),!1===a.has(i)&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yc(e),t.set(e,n)),n}},Yc=class{constructor(e){this.id=qc++,this.code=e,this.usedTimes=0}},Xc=0,Zc={[wr]:1,[Er]:6,[Or]:7,[Dr]:5,[Tr]:0,[Ar]:2,[jr]:4,[kr]:3},Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qs(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Os({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ts(new $s(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends oa{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Qc,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new ua,C=null,w=new Ns;w.viewport=new Ta;let T=new Ns;T.viewport=new Ta;let E=[w,T],D=new uc,O=null,k=null;function A(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function j(){r.removeEventListener(`select`,A),r.removeEventListener(`selectstart`,A),r.removeEventListener(`selectend`,A),r.removeEventListener(`squeeze`,A),r.removeEventListener(`squeezestart`,A),r.removeEventListener(`squeezeend`,A),r.removeEventListener(`end`,j),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}O=null,k=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++){if(e>=x.length){x.push(n),r=e;break}if(x[e]===null){x[e]=n,r=e;break}}if(r===-1)break}let i=b[r];i&&i.connect(n)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Bs,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Bs,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Bs,b[e]=t),t.getHandSpace()},this.setFramebufferScaleFactor=function(e){i=e,!0===n.isPresenting&&q(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,!0===n.isPresenting&&q(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,A),r.addEventListener(`selectstart`,A),r.addEventListener(`selectend`,A),r.addEventListener(`squeeze`,A),r.addEventListener(`squeezestart`,A),r.addEventListener(`squeezeend`,A),r.addEventListener(`end`,j),r.addEventListener(`inputsourceschange`,M),!0!==_.xrCompatible&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ai:ii,a=_.stencil?ei:Yr);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Da(d.textureWidth,d.textureHeight,{format:ri,type:Wr,depthTexture:new Zs(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:!1===d.ignoreDepthValues,resolveStencilBuffer:!1===d.ignoreDepthValues})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Da(f.framebufferWidth,f.framebufferHeight,{format:ri,type:Wr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:!1===f.ignoreDepthValues,resolveStencilBuffer:!1===f.ignoreDepthValues})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};let N=new Y,P=new Y;function F(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),D.near=T.near=w.near=t,D.far=T.far=w.far=n,O===D.near&&k===D.far||(r.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=6|e.layers.mask,w.layers.mask=3&D.layers.mask,T.layers.mask=5&D.layers.mask;let i=e.parent,a=D.cameras;F(D,i);for(let e=0;e<a.length;e++)F(a[e],i);a.length===2?function(e,t,n){N.setFromMatrixPosition(t.matrixWorld),P.setFromMatrixPosition(n.matrixWorld);let r=N.distanceTo(P),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}(D,w,T):D.projectionMatrix.copy(w.projectionMatrix),function(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=2*la*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}(e,D,i)},this.getCamera=function(){return D},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(D)},this.getCameraTexture=function(e){return g[e]};let I=null,ee=new ft;ee.setAnimationLoop(function(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==D.cameras.length&&(D.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=E[n];o===void 0&&(o=new Ns,o.layers.enable(n),o.viewport=new Ta,E[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),!0===i&&D.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Qs,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}I&&I(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},el=new po,tl=new no,nl=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),rl=null,il=class{constructor(e={}){let{canvas:t=qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,f;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);f=n.getContextAttributes().alpha}else f=a;let p=new Set([li,ci,oi]),m=new Set([Wr,Yr,qr,ei,Qr,$r]),h=new Uint32Array(4),g=new Int32Array(4),_=null,v=null,y=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,S=!1;this._outputColorSpace=Ui;let C=0,w=0,T=null,E=-1,D=null,O=new Ta,k=new Ta,A=null,j=new Jo(0),M=0,N=t.width,P=t.height,F=1,I=null,ee=null,L=new Ta(0,0,N,P),R=new Ta(0,0,N,P),z=!1,te=new Xs,ne=!1,re=!1,ie=new no,ae=new Y,oe=new Ta,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ce=!1;function le(){return T===null?F:1}let B,ue,V,de,H,fe,pe,me,he,ge,_e,ve,ye,U,W,be,xe,Se,Ce,we,Te,Ee,De,Oe,G=n;function ke(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r${nr}`),t.addEventListener(`webglcontextlost`,Me,!1),t.addEventListener(`webglcontextrestored`,Ne,!1),t.addEventListener(`webglcontextcreationerror`,Pe,!1),G===null){let t=`webgl2`;if(G=ke(t,e),G===null)throw ke(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw e(`WebGLRenderer: `+e.message),e}function Ae(){B=new Et(G),B.init(),Ee=new Zn(G,B),ue=new _t(G,B,e,Ee),V=new Yn(G,B),ue.reversedDepthBuffer&&d&&V.buffers.depth.setReversed(!0),de=new kt(G),H=new Rn,fe=new Xn(G,B,V,H,ue,Ee,de),pe=new yt(x),me=new Tt(x),he=new pt(G),De=new ht(G,he),ge=new Dt(G,he,de,De),_e=new jt(G,ge,he,de),Ce=new At(G,ue,fe),be=new vt(H),ve=new Ln(x,pe,me,B,ue,De,be),ye=new Qn(x,H),U=new Hn,W=new qn(B),Se=new mt(x,pe,me,V,_e,f,s),xe=new Jn(x,_e,ue),Oe=new $n(G,de,ue,V),we=new gt(G,B,de),Te=new Ot(G,B,de),de.programs=ve.programs,x.capabilities=ue,x.extensions=B,x.properties=H,x.renderLists=U,x.shadowMap=xe,x.state=V,x.info=de}Ae();let je=new $c(x,G);function Me(e){e.preventDefault(),Je(`WebGLRenderer: Context Lost.`),S=!0}function Ne(){Je(`WebGLRenderer: Context Restored.`),S=!1;let e=de.autoReset,t=xe.enabled,n=xe.autoUpdate,r=xe.needsUpdate,i=xe.type;Ae(),de.autoReset=e,xe.enabled=t,xe.autoUpdate=n,xe.needsUpdate=r,xe.type=i}function Pe(e){Ye(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function Fe(e){let t=e.target;t.removeEventListener(`dispose`,Fe),function(e){(function(e){let t=H.get(e).programs;t!==void 0&&(t.forEach(function(e){ve.releaseProgram(e)}),e.isShaderMaterial&&ve.releaseShaderCache(e))})(e),H.remove(e)}(t)}function Ie(e,t,n){!0===e.transparent&&e.side===2&&!1===e.forceSinglePass?(e.side=1,e.needsUpdate=!0,Ge(e,t,n),e.side=0,e.needsUpdate=!0,Ge(e,t,n),e.side=2):Ge(e,t,n)}this.xr=je,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let e=B.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=B.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(e){e!==void 0&&(F=e,this.setSize(N,P,!1))},this.getSize=function(e){return e.set(N,P)},this.setSize=function(e,n,r=!0){je.isPresenting?q(`WebGLRenderer: Can't change size while VR device is presenting.`):(N=e,P=n,t.width=Math.floor(e*F),t.height=Math.floor(n*F),!0===r&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(N*F,P*F).floor()},this.setDrawingBufferSize=function(e,n,r){N=e,P=n,F=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(O)},this.getViewport=function(e){return e.copy(L)},this.setViewport=function(e,t,n,r){e.isVector4?L.set(e.x,e.y,e.z,e.w):L.set(e,t,n,r),V.viewport(O.copy(L).multiplyScalar(F).round())},this.getScissor=function(e){return e.copy(R)},this.setScissor=function(e,t,n,r){e.isVector4?R.set(e.x,e.y,e.z,e.w):R.set(e,t,n,r),V.scissor(k.copy(R).multiplyScalar(F).round())},this.getScissorTest=function(){return z},this.setScissorTest=function(e){V.setScissorTest(z=e)},this.setOpaqueSort=function(e){I=e},this.setTransparentSort=function(e){ee=e},this.getClearColor=function(e){return e.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=p.has(t)}if(e){let e=T.texture.type,t=m.has(e),n=Se.getClearColor(),r=Se.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,G.clearBufferuiv(G.COLOR,0,h)):(g[0]=i,g[1]=a,g[2]=o,g[3]=r,G.clearBufferiv(G.COLOR,0,g))}else r|=G.COLOR_BUFFER_BIT}t&&(r|=G.DEPTH_BUFFER_BIT),n&&(r|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Me,!1),t.removeEventListener(`webglcontextrestored`,Ne,!1),t.removeEventListener(`webglcontextcreationerror`,Pe,!1),Se.dispose(),U.dispose(),W.dispose(),H.dispose(),pe.dispose(),me.dispose(),_e.dispose(),De.dispose(),Oe.dispose(),ve.dispose(),je.dispose(),je.removeEventListener(`sessionstart`,Re),je.removeEventListener(`sessionend`,ze),Be.stop()},this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=se);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=function(e,t,n,r,i){!0!==t.isScene&&(t=se),fe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?x.outputColorSpace:!0===T.isXRRenderTarget?T.texture.colorSpace:Wi,c=(r.isMeshStandardMaterial?me:pe).get(r.envMap||o),l=!0===r.vertexColors&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T!==null&&!0!==T.isXRRenderTarget||(m=x.toneMapping));let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=H.get(r),y=v.state.lights;if(!0===ne&&(!0===re||e!==D)){let t=e===D&&r.id===E;be.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==y.state.version||_.outputColorSpace!==s||i.isBatchedMesh&&!1===_.batching?b=!0:i.isBatchedMesh||!0!==_.batching?i.isBatchedMesh&&!0===_.batchingColor&&i.colorTexture===null||i.isBatchedMesh&&!1===_.batchingColor&&i.colorTexture!==null||i.isInstancedMesh&&!1===_.instancing?b=!0:i.isInstancedMesh||!0!==_.instancing?i.isSkinnedMesh&&!1===_.skinning?b=!0:i.isSkinnedMesh||!0!==_.skinning?i.isInstancedMesh&&!0===_.instancingColor&&i.instanceColor===null||i.isInstancedMesh&&!1===_.instancingColor&&i.instanceColor!==null||i.isInstancedMesh&&!0===_.instancingMorph&&i.morphTexture===null||i.isInstancedMesh&&!1===_.instancingMorph&&i.morphTexture!==null||_.envMap!==c||!0===r.fog&&_.fog!==a?b=!0:_.numClippingPlanes===void 0||_.numClippingPlanes===be.numPlanes&&_.numIntersection===be.numIntersection?(_.vertexAlphas!==l||_.vertexTangents!==u||_.morphTargets!==d||_.morphNormals!==f||_.morphColors!==p||_.toneMapping!==m||_.morphTargetsCount!==g)&&(b=!0):b=!0:b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let S=_.currentProgram;!0===b&&(S=Ge(r,t,i));let C=!1,w=!1,O=!1,k=S.getUniforms(),A=_.uniforms;if(V.useProgram(S.program)&&(C=!0,w=!0,O=!0),r.id!==E&&(E=r.id,w=!0),C||D!==e){V.buffers.depth.getReversed()&&!0!==e.reversedDepth&&(e._reversedDepth=!0,e.updateProjectionMatrix()),k.setValue(G,`projectionMatrix`,e.projectionMatrix),k.setValue(G,`viewMatrix`,e.matrixWorldInverse);let t=k.map.cameraPosition;t!==void 0&&t.setValue(G,ae.setFromMatrixPosition(e.matrixWorld)),ue.logarithmicDepthBuffer&&k.setValue(G,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&k.setValue(G,`isOrthographic`,!0===e.isOrthographicCamera),D!==e&&(D=e,w=!0,O=!0)}if(i.isSkinnedMesh){k.setOptional(G,i,`bindMatrix`),k.setOptional(G,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),k.setValue(G,`boneTexture`,e.boneTexture,fe))}i.isBatchedMesh&&(k.setOptional(G,i,`batchingTexture`),k.setValue(G,`batchingTexture`,i._matricesTexture,fe),k.setOptional(G,i,`batchingIdTexture`),k.setValue(G,`batchingIdTexture`,i._indirectTexture,fe),k.setOptional(G,i,`batchingColorTexture`),i._colorsTexture!==null&&k.setValue(G,`batchingColorTexture`,i._colorsTexture,fe));let j=n.morphAttributes;j.position===void 0&&j.normal===void 0&&j.color===void 0||Ce.update(i,n,S),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,k.setValue(G,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(A.envMap.value=c,A.flipEnvMap.value=c.isCubeTexture&&!1===c.isRenderTargetTexture?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(A.envMapIntensity.value=t.environmentIntensity),A.dfgLUT!==void 0&&(A.dfgLUT.value=(rl===null&&(rl=new Hs(nl,32,32,si,Zr),rl.minFilter=Vr,rl.magFilter=Vr,rl.wrapS=Ir,rl.wrapT=Ir,rl.generateMipmaps=!1,rl.needsUpdate=!0),rl)),w&&(k.setValue(G,`toneMappingExposure`,x.toneMappingExposure),_.needsLights&&(N=O,(M=A).ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N),a&&!0===r.fog&&ye.refreshFogUniforms(A,a),ye.refreshMaterialUniforms(A,r,F,P,v.state.transmissionRenderTarget[e.id]),Bc.upload(G,Ke(_),A,fe));var M,N;if(r.isShaderMaterial&&!0===r.uniformsNeedUpdate&&(Bc.upload(G,Ke(_),A,fe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&k.setValue(G,`center`,i.center),k.setValue(G,`modelViewMatrix`,i.modelViewMatrix),k.setValue(G,`normalMatrix`,i.normalMatrix),k.setValue(G,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Oe.update(n,S),Oe.bind(n,S)}}return S}(e,t,n,r,i);V.setMaterial(r,o);let c=n.index,l=1;if(!0===r.wireframe){if(c=ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;let h;De.setup(i,r,s,n,c);let g=we;if(c!==null&&(h=he.get(c),g=Te,g.setIndex(h)),i.isMesh)!0===r.wireframe?(V.setLineWidth(r.wireframeLinewidth*le()),g.setMode(G.LINES)):g.setMode(G.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),V.setLineWidth(e*le()),i.isLineSegments?g.setMode(G.LINES):i.isLineLoop?g.setMode(G.LINE_LOOP):g.setMode(G.LINE_STRIP)}else i.isPoints?g.setMode(G.POINTS):i.isSprite&&g.setMode(G.TRIANGLES);if(i.isBatchedMesh)if(i._multiDrawInstances!==null)Xe(`WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.`),g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(B.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?he.get(c).bytesPerElement:1,o=H.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(G,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)},this.compile=function(e,t,n=null){n===null&&(n=e),v=W.get(n),v.init(t),b.push(v),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(v.pushLight(e),e.castShadow&&v.pushShadow(e))}),v.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];Ie(a,n,e),r.add(a)}else Ie(t,n,e),r.add(t)}),v=b.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){H.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}B.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Le=null;function Re(){Be.stop()}function ze(){Be.start()}let Be=new ft;function Ve(e,t,n,r){if(!1===e.visible)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)!0===e.autoUpdate&&e.update(t);else if(e.isLight)v.pushLight(e),e.castShadow&&v.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||te.intersectsSprite(e)){r&&oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ie);let t=_e.update(e),i=e.material;i.visible&&_.push(e,t,i,n,oe.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||te.intersectsObject(e))){let t=_e.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),oe.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),oe.copy(e.boundingSphere.center)),oe.applyMatrix4(e.matrixWorld).applyMatrix4(ie)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&_.push(e,t,s,n,oe.z,o)}}else i.visible&&_.push(e,t,i,n,oe.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)Ve(i[e],t,n,r)}function He(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;v.setupLightsView(n),!0===ne&&be.setGlobalState(x.clippingPlanes,n),r&&V.viewport(O.copy(r)),i.length>0&&K(i,t,n),a.length>0&&K(a,t,n),o.length>0&&K(o,t,n),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function Ue(e,t,n,r){if((!0===n.isScene?n.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[r.id]===void 0&&(v.state.transmissionRenderTarget[r.id]=new Da(1,1,{generateMipmaps:!0,type:B.has(`EXT_color_buffer_half_float`)||B.has(`EXT_color_buffer_float`)?Zr:Wr,minFilter:Ur,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_a.workingColorSpace}));let a=v.state.transmissionRenderTarget[r.id],o=r.viewport||O;a.setSize(o.z*x.transmissionResolutionScale,o.w*x.transmissionResolutionScale);let s=x.getRenderTarget(),c=x.getActiveCubeFace(),l=x.getActiveMipmapLevel();x.setRenderTarget(a),x.getClearColor(j),M=x.getClearAlpha(),M<1&&x.setClearColor(16777215,.5),x.clear(),ce&&Se.render(n);let u=x.toneMapping;x.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),v.setupLightsView(r),!0===ne&&be.setGlobalState(x.clippingPlanes,r),K(e,n,r),fe.updateMultisampleRenderTarget(a),fe.updateRenderTargetMipmap(a),!1===B.has(`WEBGL_multisampled_render_to_texture`)){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,We(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}!0===e&&(fe.updateMultisampleRenderTarget(a),fe.updateRenderTargetMipmap(a))}x.setRenderTarget(s,c,l),x.setClearColor(j,M),d!==void 0&&(r.viewport=d),x.toneMapping=u}function K(e,t,n){let r=!0===t.isScene?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;!0===l.allowOverride&&r!==null&&(l=r),o.layers.test(n.layers)&&We(o,t,n,s,l,c)}}function We(e,t,n,r,i,a){e.onBeforeRender(x,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(x,t,n,r,e,a),!0===i.transparent&&i.side===2&&!1===i.forceSinglePass?(i.side=1,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,x.renderBufferDirect(n,t,r,i,e,a),i.side=2):x.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(x,t,n,r,i,a)}function Ge(e,t,n){!0!==t.isScene&&(t=se);let r=H.get(e),i=v.state.lights,a=v.state.shadowsArray,o=i.state.version,s=ve.getParameters(e,i.state,a,t,n),c=ve.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?me:pe).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,Fe),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Ze(e,s),u}else s.uniforms=ve.getUniforms(e),e.onBeforeCompile(s,x),u=ve.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(e.isShaderMaterial||e.isRawShaderMaterial)&&!0!==e.clipping||(d.clippingPlanes=be.uniform),Ze(e,s),r.needsLights=function(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&!0===e.lights}(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function Ke(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Bc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ze(e,t){let n=H.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}Be.setAnimationLoop(function(e){Le&&Le(e)}),typeof self<`u`&&Be.setContext(self),this.setAnimationLoop=function(e){Le=e,je.setAnimationLoop(e),e===null?Be.stop():Be.start()},je.addEventListener(`sessionstart`,Re),je.addEventListener(`sessionend`,ze),this.render=function(e,t){if(t!==void 0&&!0!==t.isCamera)return void Ye(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);if(!0===S)return;if(!0===e.matrixWorldAutoUpdate&&e.updateMatrixWorld(),t.parent===null&&!0===t.matrixWorldAutoUpdate&&t.updateMatrixWorld(),!0===je.enabled&&!0===je.isPresenting&&(!0===je.cameraAutoUpdate&&je.updateCamera(t),t=je.getCamera()),!0===e.isScene&&e.onBeforeRender(x,e,t,T),v=W.get(e,b.length),v.init(t),b.push(v),ie.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),te.setFromProjectionMatrix(ie,ra,t.reversedDepth),re=this.localClippingEnabled,ne=be.init(this.clippingPlanes,re),_=U.get(e,y.length),_.init(),y.push(_),!0===je.enabled&&!0===je.isPresenting){let e=x.xr.getDepthSensingMesh();e!==null&&Ve(e,t,-1/0,x.sortObjects)}Ve(e,t,0,x.sortObjects),_.finish(),!0===x.sortObjects&&_.sort(I,ee),ce=!1===je.enabled||!1===je.isPresenting||!1===je.hasDepthSensing(),ce&&Se.addToRenderList(_,e),this.info.render.frame++,!0===ne&&be.beginShadows();let n=v.state.shadowsArray;xe.render(n,e,t),!0===ne&&be.endShadows(),!0===this.info.autoReset&&this.info.reset();let r=_.opaque,i=_.transmissive;if(v.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++)Ue(r,i,e,n[t]);ce&&Se.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];He(_,e,r,r.viewport)}}else i.length>0&&Ue(r,i,e,t),ce&&Se.render(e),He(_,e,t);T!==null&&w===0&&(fe.updateMultisampleRenderTarget(T),fe.updateRenderTargetMipmap(T)),!0===e.isScene&&e.onAfterRender(x,e,t),De.resetDefaultState(),E=-1,D=null,b.pop(),b.length>0?(v=b[b.length-1],!0===ne&&be.setGlobalState(x.clippingPlanes,v.state.camera)):v=null,y.pop(),_=y.length>0?y[y.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){let r=H.get(e);r.__autoAllocateDepthBuffer=!1===e.resolveDepthBuffer,!1===r.__autoAllocateDepthBuffer&&(r.__useRenderToTexture=!1),H.get(e.texture).__webglTexture=t,H.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=H.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0};let J=G.createFramebuffer();this.setRenderTarget=function(e,t=0,n=0){T=e,C=t,w=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=H.get(e);if(s.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(G.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)fe.setupRenderTarget(e);else if(s.__hasExternalTextures)fe.rebindTextures(e,H.get(e.texture).__webglTexture,H.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&H.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);fe.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=H.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&!1===fe.useMultisampledRTT(e)?H.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,O.copy(e.viewport),k.copy(e.scissor),A=e.scissorTest}else O.copy(L).multiplyScalar(F).floor(),k.copy(R).multiplyScalar(F).floor(),A=z;if(n!==0&&(i=J),V.bindFramebuffer(G.FRAMEBUFFER,i)&&r&&V.drawBuffers(e,i),V.viewport(O),V.scissor(k),V.setScissorTest(A),a){let r=H.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=t;for(let t=0;t<e.textures.length;t++){let i=H.get(e.textures[t]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=H.get(e.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,t.__webglTexture,n)}E=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!e||!e.isWebGLRenderTarget)return void Ye(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){V.bindFramebuffer(G.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(!ue.textureFormatReadable(c))return void Ye(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);if(!ue.textureTypeReadable(l))return void Ye(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&(e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s),G.readPixels(t,n,r,i,Ee.convert(c),Ee.convert(l),a))}finally{let e=T===null?null:H.get(T).__webglFramebuffer;V.bindFramebuffer(G.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!e||!e.isWebGLRenderTarget)throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=H.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){V.bindFramebuffer(G.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(!ue.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ue.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,d),G.bufferData(G.PIXEL_PACK_BUFFER,a.byteLength,G.STREAM_READ),e.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+s),G.readPixels(t,n,r,i,Ee.convert(l),Ee.convert(u),0);let f=T===null?null:H.get(T).__webglFramebuffer;V.bindFramebuffer(G.FRAMEBUFFER,f);let p=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await function(e,t,n){return new Promise(function(r,i){setTimeout(function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}},n)})}(G,p,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,d),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,a),G.deleteBuffer(d),G.deleteSync(p),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;fe.setTexture2D(e,0),G.copyTexSubImage2D(G.TEXTURE_2D,n,0,0,o,s,i,a),V.unbindTexture()};let Qe=G.createFramebuffer(),$e=G.createFramebuffer();this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=null){let o,s,c,l,u,d,f,p,m;a===null&&(i===0?a=0:(Xe(`WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.`),a=i,i=0));let h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ee.convert(t.format),_=Ee.convert(t.type),v;t.isData3DTexture?(fe.setTexture3D(t,0),v=G.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(fe.setTexture2DArray(t,0),v=G.TEXTURE_2D_ARRAY):(fe.setTexture2D(t,0),v=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,t.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,t.unpackAlignment);let y=G.getParameter(G.UNPACK_ROW_LENGTH),b=G.getParameter(G.UNPACK_IMAGE_HEIGHT),x=G.getParameter(G.UNPACK_SKIP_PIXELS),S=G.getParameter(G.UNPACK_SKIP_ROWS),C=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,h.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,h.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,l),G.pixelStorei(G.UNPACK_SKIP_ROWS,u),G.pixelStorei(G.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=H.get(e),r=H.get(t),h=H.get(n.__renderTarget),g=H.get(r.__renderTarget);V.bindFramebuffer(G.READ_FRAMEBUFFER,h.__webglFramebuffer),V.bindFramebuffer(G.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,H.get(e).__webglTexture,i,d+n),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,H.get(t).__webglTexture,a,m+n)),G.blitFramebuffer(l,u,o,s,f,p,o,s,G.DEPTH_BUFFER_BIT,G.NEAREST);V.bindFramebuffer(G.READ_FRAMEBUFFER,null),V.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||H.has(e)){let n=H.get(e),r=H.get(t);V.bindFramebuffer(G.READ_FRAMEBUFFER,Qe),V.bindFramebuffer(G.DRAW_FRAMEBUFFER,$e);for(let e=0;e<c;e++)w?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,n.__webglTexture,i),T?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,r.__webglTexture,a),i===0?T?G.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):G.copyTexSubImage2D(v,a,f,p,l,u,o,s):G.blitFramebuffer(l,u,o,s,f,p,o,s,G.COLOR_BUFFER_BIT,G.NEAREST);V.bindFramebuffer(G.READ_FRAMEBUFFER,null),V.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?G.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):G.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):G.texSubImage2D(G.TEXTURE_2D,a,f,p,o,s,g,_,h);G.pixelStorei(G.UNPACK_ROW_LENGTH,y),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,b),G.pixelStorei(G.UNPACK_SKIP_PIXELS,x),G.pixelStorei(G.UNPACK_SKIP_ROWS,S),G.pixelStorei(G.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&G.generateMipmap(v),V.unbindTexture()},this.initRenderTarget=function(e){H.get(e).__webglFramebuffer===void 0&&fe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?fe.setTextureCube(e,0):e.isData3DTexture?fe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?fe.setTexture2DArray(e,0):fe.setTexture2D(e,0),V.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,V.reset(),De.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_a._getDrawingBufferColorSpace(e),t.unpackColorSpace=_a._getUnpackColorSpace()}},Sl={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},Cl={duration:.5,overwrite:!1,delay:0},wl=1e8,Tl=1e-8,El=2*Math.PI,Dl=El/4,Ol=0,kl=Math.sqrt,Al=Math.cos,jl=Math.sin,Ml=function(e){return typeof e==`string`},Nl=function(e){return typeof e==`function`},Pl=function(e){return typeof e==`number`},Fl=function(e){return e===void 0},Il=function(e){return typeof e==`object`},Ll=function(e){return!1!==e},Rl=function(){return S!==void 0},zl=function(e){return Nl(e)||Ml(e)},Bl=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},Vl=Array.isArray,Hl=/(?:-?\.?\d|\.)+/gi,Ul=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Wl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kl=/[+-]=-?[.\d]+/,ql=/[^,'"\[\]\s]+/gi,Jl=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Yl={},Xl={},Zl=function(e){return(Xl=Du(e,Yl))&&Of},Ql=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},$l=function(e,t){return!t&&console.warn(e)},eu=function(e,t){return e&&(Yl[e]=t)&&Xl&&(Xl[e]=t)||Yl},tu=function(){return 0},nu={suppressEvents:!0,isStart:!0,kill:!1},ru={suppressEvents:!0,kill:!1},iu={suppressEvents:!0},au={},ou=[],su={},cu={},lu={},uu=30,du=[],fu=``,pu=function(e){var t,n,r=e[0];if(Il(r)||Nl(r)||(e=[e]),!(t=(r._gsap||{}).harness)){for(n=du.length;n--&&!du[n].targetTest(r););t=du[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Vd(e[n],t)))||e.splice(n,1);return e},mu=function(e){return e._gsap||pu(ad(e))[0]._gsap},hu=function(e,t,n){return(n=e[t])&&Nl(n)?e[t]():Fl(n)&&e.getAttribute&&e.getAttribute(t)||n},gu=function(e,t){return(e=e.split(`,`)).forEach(t)||e},_u=function(e){return Math.round(1e5*e)/1e5||0},vu=function(e){return Math.round(1e7*e)/1e7||0},yu=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},bu=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},xu=function(){var e,t,n=ou.length,r=ou.slice(0);for(su={},ou.length=0,e=0;e<n;e++)(t=r[e])&&t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0)._lazy=0)},Su=function(e){return!!(e._initted||e._startAt||e.add)},Cu=function(e,t,n,r){ou.length&&!ol&&xu(),e.render(t,n,r||!!(ol&&t<0&&Su(e))),ou.length&&!ol&&xu()},wu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(ql).length<2?t:Ml(e)?e.trim():e},Tu=function(e){return e},Eu=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Du=function(e,t){for(var n in t)e[n]=t[n];return e},Ou=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=Il(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},ku=function(e,t){var n,r={};for(n in e)n in t||(r[n]=e[n]);return r},Au=function(e){var t,n=e.parent||cl,r=e.keyframes?(t=Vl(e.keyframes),function(e,n){for(var r in n)r in e||r===`duration`&&t||r===`ease`||(e[r]=n[r])}):Eu;if(Ll(e.inherit))for(;n;)r(e,n.vars.defaults),n=n.parent||n._dp;return e},ju=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a,o=e[r];if(i)for(a=t[i];o&&o[i]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Mu=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Nu=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Pu=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Fu=function(e,t,n,r){return e._startAt&&(ol?e._startAt.revert(ru):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Iu=function e(t){return!t||t._ts&&e(t.parent)},Lu=function(e){return e._repeat?Ru(e._tTime,e=e.duration()+e._rDelay)*e:0},Ru=function(e,t){var n=Math.floor(e=vu(e/t));return e&&n===e?n-1:n},zu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bu=function(e){return e._end=vu(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tl)||0))},Vu=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=vu(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bu(e),n._dirty||Pu(n,e)),e},Hu=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=zu(e.rawTime(),t),(!t._dur||ed(0,t.totalDuration(),n)-t._tTime>Tl)&&t.render(n,!0)),Pu(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},Uu=function(e,t,n,r){return t.parent&&Nu(t),t._start=vu((Pl(n)?n:n||e!==cl?Zu(e,n,t):e._time)+t._delay),t._end=vu(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ju(e,t,`_first`,`_last`,e._sort?`_start`:0),qu(t)||(e._recent=t),r||Hu(e,t),e._ts<0&&Vu(e,e._tTime),e},Wu=function(e,t){return(Yl.ScrollTrigger||Ql(`scrollTrigger`,t))&&Yl.ScrollTrigger.create(t,e)},Gu=function(e,t,n,r,i){return Yd(e,t,i),e._initted?!n&&e._pt&&!ol&&(e._dur&&!1!==e.vars.lazy||!e._dur&&e.vars.lazy)&&pl!==kd.frame?(ou.push(e),e._lazy=[i,r],1):void 0:1},Ku=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},qu=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},Ju=function(e,t,n,r){var i=e._repeat,a=vu(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:vu(a*(i+1)+e._rDelay*i):a,o>0&&!r&&Vu(e,e._tTime=e._tDur*o),e.parent&&Bu(e),n||Pu(e.parent,e),e},Yu=function(e){return e instanceof Ud?Pu(e):Ju(e,e._dur)},Xu={_start:0,endTime:tu,totalDuration:tu},Zu=function e(t,n,r){var i,a,o,s=t.labels,c=t._recent||Xu,l=t.duration()>=wl?c.endTime(!1):t._dur;return Ml(n)&&(isNaN(n)||n in s)?(a=n.charAt(0),o=n.substr(-1)===`%`,i=n.indexOf(`=`),a===`<`||a===`>`?(i>=0&&(n=n.replace(/=/,``)),(a===`<`?c._start:c.endTime(c._repeat>=0))+(parseFloat(n.substr(1))||0)*(o?(i<0?c:r).totalDuration()/100:1)):i<0?(n in s||(s[n]=l),s[n]):(a=parseFloat(n.charAt(i-1)+n.substr(i+1)),o&&r&&(a=a/100*(Vl(r)?r[0]:r).totalDuration()),i>1?e(t,n.substr(0,i-1),r)+a:l+a)):n==null?l:+n},Qu=function(e,t,n){var r,i,a=Pl(t[1]),o=(a?2:1)+(e<2?0:1),s=t[o];if(a&&(s.duration=t[1]),s.parent=n,e){for(r=s,i=n;i&&!(`immediateRender`in r);)r=i.vars.defaults||{},i=Ll(i.vars.inherit)&&i.parent;s.immediateRender=Ll(r.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new ef(t[0],s,t[o+1])},$u=function(e,t){return e||e===0?t(e):t},ed=function(e,t,n){return n<e?e:n>t?t:n},td=function(e,t){return Ml(e)&&(t=Jl.exec(e))?t[1]:``},nd=[].slice,rd=function(e,t){return e&&Il(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&Il(e[0]))&&!e.nodeType&&e!==ll},id=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return Ml(e)&&!t||rd(e,1)?(r=n).push.apply(r,ad(e)):n.push(e)})||n},ad=function(e,t,n){return sl&&!t&&sl.selector?sl.selector(e):!Ml(e)||n||!ul&&Ad()?Vl(e)?id(e,n):rd(e)?nd.call(e,0):e?[e]:[]:nd.call((t||dl).querySelectorAll(e),0)},od=function(e){return e=ad(e)[0]||$l(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return ad(t,n.querySelectorAll?n:n===e?$l(`Invalid scope`)||dl.createElement(`div`):e)}},sd=function(e){return e.sort(function(){return .5-Math.random()})},cd=function(e){if(Nl(e))return e;var t=Il(e)?e:{each:e},n=Id(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return Ml(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f,p,m,h,g,_,v,y,b,x=(d||t).length,S=a[x];if(!S){if(!(b=t.grid===`auto`?0:(t.grid||[1,wl])[1])){for(v=-1e8;v<(v=d[b++].getBoundingClientRect().left)&&b<x;);b<x&&b--}for(S=a[x]=[],f=s?Math.min(b,x)*l-.5:r%b,p=b===wl?0:s?x*u/b-.5:r/b|0,v=0,y=wl,_=0;_<x;_++)m=_%b-f,h=p-(_/b|0),S[_]=g=c?Math.abs(c===`y`?h:m):kl(m*m+h*h),g>v&&(v=g),g<y&&(y=g);r===`random`&&sd(S),S.max=v-y,S.min=y,S.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(b>x?x-1:c?c===`y`?x/b:b:Math.max(b,x/b))||0)*(r===`edges`?-1:1),S.b=x<0?i-x:i,S.u=td(t.amount||t.each)||0,n=n&&x<0?Pd(n):n}return x=(S[e]-S.min)/S.max||0,vu(S.b+(n?n(x):x)*S.v)+S.u}},ld=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=vu(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Pl(n)?0:td(n))}},ud=function(e,t){var n,r,i=Vl(e);return!i&&Il(e)&&(n=i=e.radius||wl,e.values?(e=ad(e.values),(r=!Pl(e[0]))&&(n*=n)):e=ld(e.increment)),$u(t,i?Nl(e)?function(t){return r=e(t),Math.abs(r-t)<=n?r:t}:function(t){for(var i,a,o=parseFloat(r?t.x:t),s=parseFloat(r?t.y:0),c=wl,l=0,u=e.length;u--;)(i=r?(i=e[u].x-o)*i+(a=e[u].y-s)*a:Math.abs(e[u]-o))<c&&(c=i,l=u);return l=!n||c<=n?e[l]:t,r||l===t||Pl(t)?l:l+td(t)}:ld(e))},dd=function(e,t,n,r){return $u(Vl(e)?!t:!0===n?!!(n=0):!r,function(){return Vl(e)?e[~~(Math.random()*e.length)]:(n||=1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+.99*n))/n)*n*r)/r})},fd=function(e,t,n){return $u(n,function(n){return e[~~t(n)]})},pd=function(e){for(var t,n,r,i,a=0,o=``;~(t=e.indexOf(`random(`,a));)r=e.indexOf(`)`,t),i=e.charAt(t+7)===`[`,n=e.substr(t+7,r-t-7).match(i?ql:Hl),o+=e.substr(a,t-a)+dd(i?n:+n[0],i?0:+n[1],+n[2]||1e-5),a=r+1;return o+e.substr(a,e.length-a)},md=function(e,t,n,r,i){var a=t-e,o=r-n;return $u(i,function(t){return n+((t-e)/a*o||0)})},hd=function(e,t,n){var r,i,a,o=e.labels,s=wl;for(r in o)(i=o[r]-t)<0==!!n&&i&&s>(i=Math.abs(i))&&(a=r,s=i);return a},gd=function(e,t,n){var r,i,a,o=e.vars,s=o[t],c=sl,l=e._ctx;if(s)return r=o[t+`Params`],i=o.callbackScope||e,n&&ou.length&&xu(),l&&(sl=l),a=r?s.apply(i,r):s.call(i),sl=c,a},_d=function(e){return Nu(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ol),e.progress()<1&&gd(e,`onInterrupt`),e},vd=[],yd=function(e){if(e)if(e=!e.name&&e.default||e,Rl()||e.headless){var t=e.name,n=Nl(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:tu,render:uf,add:qd,kill:ff,modifier:df,rawVars:0},a={targetTest:0,get:0,getSetter:of,aliases:{},register:0};if(Ad(),e!==r){if(cu[t])return;Eu(r,Eu(ku(e,i),a)),Du(r.prototype,Du(i,ku(e,a))),cu[r.prop=t]=r,e.targetTest&&(du.push(r),au[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}eu(t,r),e.register&&e.register(Of,r,hf)}else vd.push(e)},bd=255,xd={aqua:[0,bd,bd],lime:[0,bd,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bd],navy:[0,0,128],white:[bd,bd,bd],olive:[128,128,0],yellow:[bd,bd,0],orange:[bd,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bd,0,0],pink:[bd,192,203],cyan:[0,bd,bd],transparent:[bd,bd,bd,0]},Sd=function(e,t,n){return(6*(e+=e<0?1:e>1?-1:0)<1?t+(n-t)*e*6:e<.5?n:3*e<2?t+(n-t)*(2/3-e)*6:t)*bd+.5|0},Cd=function(e,t,n){var r,i,a,o,s,c,l,u,d,f,p=e?Pl(e)?[e>>16,e>>8&bd,e&bd]:0:xd.black;if(!p){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),xd[e])p=xd[e];else if(e.charAt(0)===`#`){if(e.length<6&&(r=e.charAt(1),i=e.charAt(2),a=e.charAt(3),e=`#`+r+r+i+i+a+a+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&bd,p&bd,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&bd,e&bd]}else if(e.substr(0,3)===`hsl`)if(p=f=e.match(Hl),t){if(~e.indexOf(`=`))return p=e.match(Ul),n&&p.length<4&&(p[3]=1),p}else o=p[0]%360/360,s=p[1]/100,r=2*(c=p[2]/100)-(i=c<=.5?c*(s+1):c+s-c*s),p.length>3&&(p[3]*=1),p[0]=Sd(o+1/3,r,i),p[1]=Sd(o,r,i),p[2]=Sd(o-1/3,r,i);else p=e.match(Hl)||xd.transparent;p=p.map(Number)}return t&&!f&&(r=p[0]/bd,i=p[1]/bd,a=p[2]/bd,c=((l=Math.max(r,i,a))+(u=Math.min(r,i,a)))/2,l===u?o=s=0:(d=l-u,s=c>.5?d/(2-l-u):d/(l+u),o=l===r?(i-a)/d+(i<a?6:0):l===i?(a-r)/d+2:(r-i)/d+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*s+.5),p[2]=~~(100*c+.5)),n&&p.length<4&&(p[3]=1),p},wd=function(e){var t=[],n=[],r=-1;return e.split(Ed).forEach(function(e){var i=e.match(Wl)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Td=function(e,t,n){var r,i,a,o,s=``,c=(e+s).match(Ed),l=t?`hsla(`:`rgba(`,u=0;if(!c)return e;if(c=c.map(function(e){return(e=Cd(e,t,1))&&l+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(a=wd(e),(r=n.c).join(s)!==a.c.join(s)))for(o=(i=e.replace(Ed,`1`).split(Wl)).length-1;u<o;u++)s+=i[u]+(~r.indexOf(u)?c.shift()||l+`0,0,0,0)`:(a.length?a:c.length?c:n).shift());if(!i)for(o=(i=e.split(Ed)).length-1;u<o;u++)s+=i[u]+c[u];return s+i[o]},Ed=function(){var e,t=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`;for(e in xd)t+=`|`+e+`\\b`;return RegExp(t+`)`,`gi`)}(),Dd=/hsl[a]?\(/,Od=function(e){var t,n=e.join(` `);if(Ed.lastIndex=0,Ed.test(n))return t=Dd.test(n),e[1]=Td(e[1],t),e[0]=Td(e[0],t,wd(e[1])),!0},kd=function(){var e,t,n,r,i,a,o=Date.now,s=500,c=33,l=o(),u=l,d=1e3/240,f=d,p=[],m=function n(m){var h,g,_,v,y=o()-u,b=!0===m;if((y>s||y<0)&&(l+=y-c),((h=(_=(u+=y)-l)-f)>0||b)&&(v=++r.frame,i=_-1e3*r.time,r.time=_/=1e3,f+=h+(h>=d?4:d-h),g=1),b||(e=t(n)),g)for(a=0;a<p.length;a++)p[a](_,i,v,m)};return r={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return i/(1e3/(e||60))},wake:function(){fl&&(!ul&&Rl()&&(ll=ul=S,dl=ll.document||{},Yl.gsap=Of,(ll.gsapVersions||=[]).push(Of.version),Zl(Xl||ll.GreenSockGlobals||!ll.gsap&&ll||{}),vd.forEach(yd)),n=typeof requestAnimationFrame<`u`&&requestAnimationFrame,e&&r.sleep(),t=n||function(e){return setTimeout(e,f-1e3*r.time+1|0)},hl=1,m(2))},sleep:function(){(n?cancelAnimationFrame:clearTimeout)(e),hl=0,t=tu},lagSmoothing:function(e,t){s=e||1/0,c=Math.min(t||33,s)},fps:function(e){d=1e3/(e||240),f=1e3*r.time+d},add:function(e,t,n){var i=t?function(t,n,a,o){e(t,n,a,o),r.remove(i)}:e;return r.remove(e),p[n?`unshift`:`push`](i),Ad(),i},remove:function(e,t){~(t=p.indexOf(e))&&p.splice(t,1)&&a>=t&&a--},_listeners:p}}(),Ad=function(){return!hl&&kd.wake()},$={},jd=/^[\d.\-M][\d.\-,\s]/,Md=/["']/g,Nd=function(e){for(var t,n,r,i={},a=e.substr(1,e.length-3).split(`:`),o=a[0],s=1,c=a.length;s<c;s++)n=a[s],t=s===c-1?n.length:n.lastIndexOf(`,`),r=n.substr(0,t),i[o]=isNaN(r)?r.replace(Md,``).trim():+r,o=n.substr(t+1).trim();return i},Pd=function(e){return function(t){return 1-e(1-t)}},Fd=function e(t,n){for(var r,i=t._first;i;)i instanceof Ud?e(i,n):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===n||(i.timeline?e(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},Id=function(e,t){return e&&(Nl(e)?e:$[e]||function(e){var t,n,r,i,a=(e+``).split(`(`),o=$[a[0]];return o&&a.length>1&&o.config?o.config.apply(null,~e.indexOf(`{`)?[Nd(a[1])]:(t=e,n=t.indexOf(`(`)+1,r=t.indexOf(`)`),i=t.indexOf(`(`,n),t.substring(n,~i&&i<r?t.indexOf(`)`,r+1):r)).split(`,`).map(wu)):$._CE&&jd.test(e)?$._CE(``,e):o}(e))||t},Ld=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(2*e)/2:1-t(2*(1-e))/2});var i,a={easeIn:t,easeOut:n,easeInOut:r};return gu(e,function(e){for(var t in $[e]=Yl[e]=a,$[i=e.toLowerCase()]=n,a)$[i+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=$[e+`.`+t]=a[t]}),a},Rd=function(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}},zd=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/El*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*jl((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:Rd(s);return a=El/a,c.config=function(n,r){return e(t,n,r)},c},Bd=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:Rd(r);return i.config=function(n){return e(t,n)},i},gu(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;Ld(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(2*e)**n/2:1-(2*(1-e))**n/2})}),$.Linear.easeNone=$.none=$.Linear.easeIn,Ld(`Elastic`,zd(`in`),zd(`out`),zd()),gl=7.5625,yl=2*(vl=1/(_l=2.75)),bl=2.5*vl,Ld(`Bounce`,function(e){return 1-xl(1-e)},xl=function(e){return e<vl?gl*e*e:e<yl?gl*(e-1.5/_l)**2+.75:e<bl?gl*(e-=2.25/_l)*e+.9375:gl*(e-2.625/_l)**2+.984375}),Ld(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),Ld(`Circ`,function(e){return-(kl(1-e*e)-1)}),Ld(`Sine`,function(e){return e===1?1:1-Al(e*Dl)}),Ld(`Back`,Bd(`in`),Bd(`out`),Bd()),$.SteppedEase=$.steps=Yl.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t;return function(e){return((r*ed(0,.99999999,e)|0)+i)*n}}},Cl.ease=$[`quad.out`],gu(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return fu+=e+`,`+e+`Params,`}),Vd=function(e,t){this.id=Ol++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:hu,this.set=t?t.getSetter:of},Hd=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ju(this,+e.duration,1,1),this.data=e.data,sl&&(this._ctx=sl,sl.data.push(this)),hl||kd.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,Ju(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(Ad(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Vu(this,e),!n._dp||n.parent||Hu(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&Uu(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===Tl||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Cu(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Lu(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?e:1-e)+Lu(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Ru(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?zu(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-1e-8?0:this._rts,this.totalTime(ed(-Math.abs(this._delay),this.totalDuration(),n),!1!==t),Bu(this),function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e}(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ad(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Tl&&(this._tTime-=Tl)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=e;var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&Uu(t,this,e-this._delay),this}return this._start},t.endTime=function(e){return this._start+(Ll(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?zu(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=iu);var t=ol;return ol=e,Su(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&!1!==e.kill&&this.kill(),ol=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,Yu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,Yu(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(Zu(this,e),Ll(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,Ll(t)),this._dur||(this._zTime=-1e-8),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-1e-8:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},t.isActive=function(){var e,t=this.parent||this._dp,n=this._start;return!(t&&!(this._ts&&this._initted&&t.isActive()&&(e=t.rawTime(!0))>=n&&e<this.endTime(!0)-Tl))},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this;return new Promise(function(n){var r=Nl(e)?e:Tu,i=function(){var e=t.then;t.then=null,Nl(r)&&(r=r(t))&&(r.then||r===t)&&(t.then=e),n(r),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?i():t._prom=i})},t.kill=function(){_d(this)},e}(),Eu(Hd.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1}),Ud=function(e){function t(t,n){var r;return t===void 0&&(t={}),(r=e.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=Ll(t.sortChildren),cl&&Uu(t.parent||cl,er(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&Wu(er(r),t.scrollTrigger),r}tr(t,e);var n=t.prototype;return n.to=function(e,t,n){return Qu(0,arguments,this),this},n.from=function(e,t,n){return Qu(1,arguments,this),this},n.fromTo=function(e,t,n,r){return Qu(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,Au(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new ef(e,t,Zu(this,n),1),this},n.call=function(e,t,n){return Uu(this,ef.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new ef(e,n,Zu(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,Au(n).immediateRender=Ll(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,Au(r).immediateRender=Ll(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r,i,a,o,s,c,l,u,d,f,p,m,h=this._time,g=this._dirty?this.totalDuration():this._tDur,_=this._dur,v=e<=0?0:vu(e),y=this._zTime<0!=e<0&&(this._initted||!_);if(this!==cl&&v>g&&e>=0&&(v=g),v!==this._tTime||n||y){if(h!==this._time&&_&&(v+=this._time-h,e+=this._time-h),r=v,d=this._start,c=!(u=this._ts),y&&(_||(h=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(p=this._yoyo,s=_+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(100*s+e,t,n);if(r=vu(v%s),v===g?(o=this._repeat,r=_):((o=~~(f=vu(v/s)))&&o===f&&(r=_,o--),r>_&&(r=_)),f=Ru(this._tTime,s),!h&&this._tTime&&f!==o&&this._tTime-f*s-this._dur<=0&&(f=o),p&&1&o&&(r=_-r,m=1),o!==f&&!this._lock){var b=p&&1&f,x=b===(p&&1&o);if(o<f&&(b=!b),h=b?0:v%_?_:v,this._lock=1,this.render(h||(m?0:vu(o*s)),t,!_)._lock=0,this._tTime=v,!t&&this.parent&&gd(this,`onRepeat`),this.vars.repeatRefresh&&!m&&(this.invalidate()._lock=1),h&&h!==this._time||c!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(_=this._dur,g=this._tDur,x&&(this._lock=2,h=b?_:-1e-4,this.render(h,!0),this.vars.repeatRefresh&&!m&&this.invalidate()),this._lock=0,!this._ts&&!c))return this;Fd(this,m)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(l=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}}(this,vu(h),vu(r)),l&&(v-=r-(r=l._start))),this._tTime=v,this._time=r,this._act=!u,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,h=0),!h&&v&&!t&&!f&&(gd(this,`onStart`),this._tTime!==v))return this;if(r>=h&&e>=0)for(i=this._first;i;){if(a=i._next,(i._act||r>=i._start)&&i._ts&&l!==i){if(i.parent!==this)return this.render(e,t,n);if(i.render(i._ts>0?(r-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(r-i._start)*i._ts,t,n),r!==this._time||!this._ts&&!c){l=0,a&&(v+=this._zTime=-1e-8);break}}i=a}else{i=this._last;for(var S=e<0?e:r;i;){if(a=i._prev,(i._act||S<=i._end)&&i._ts&&l!==i){if(i.parent!==this)return this.render(e,t,n);if(i.render(i._ts>0?(S-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(S-i._start)*i._ts,t,n||ol&&Su(i)),r!==this._time||!this._ts&&!c){l=0,a&&(v+=this._zTime=S?-1e-8:Tl);break}}i=a}}if(l&&!t&&(this.pause(),l.render(r>=h?0:-1e-8)._zTime=r>=h?1:-1,this._ts))return this._start=d,Bu(this),this.render(e,t,n);this._onUpdate&&!t&&gd(this,`onUpdate`,!0),(v===g&&this._tTime>=this.totalDuration()||!v&&h)&&(d!==this._start&&Math.abs(u)===Math.abs(this._ts)||this._lock||((e||!_)&&(v===g&&this._ts>0||!v&&this._ts<0)&&Nu(this,1),t||e<0&&!h||!v&&!h&&g||(gd(this,v===g&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(v<g&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(Pl(t)||(t=Zu(this,t,e)),!(e instanceof Hd)){if(Vl(e))return e.forEach(function(e){return n.add(e,t)}),this;if(Ml(e))return this.addLabel(e,t);if(!Nl(e))return this;e=ef.delayedCall(0,e)}return this===e?this:Uu(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-1e8);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof ef?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return Ml(e)?this.removeLabel(e):Nl(e)?this.killTweensOf(e):(e.parent===this&&Mu(this,e),e===this._recent&&(this._recent=this._last),Pu(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=vu(kd.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=Zu(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=ef.delayedCall(0,t||tu,n);return r.data=`isPause`,this._hasPause=1,Uu(this,r,Zu(this,e))},n.removePause=function(e){var t=this._first;for(e=Zu(this,e);t;)t._start===e&&t.data===`isPause`&&Nu(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Wd!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n,r=[],i=ad(e),a=this._first,o=Pl(t);a;)a instanceof ef?bu(a._targets,i)&&(o?(!Wd||a._initted&&a._ts)&&a.globalTime(0)<=t&&a.globalTime(a.totalDuration())>t:!t||a.isActive())&&r.push(a):(n=a.getTweensOf(i,t)).length&&r.push.apply(r,n),a=a._next;return r},n.tweenTo=function(e,t){t||={};var n,r=this,i=Zu(r,e),a=t,o=a.startAt,s=a.onStart,c=a.onStartParams,l=a.immediateRender,u=ef.to(r,Eu({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:i,overwrite:`auto`,duration:t.duration||Math.abs((i-(o&&`time`in o?o.time:r._time))/r.timeScale())||Tl,onStart:function(){if(r.pause(),!n){var e=t.duration||Math.abs((i-(o&&`time`in o?o.time:r._time))/r.timeScale());u._dur!==e&&Ju(u,e,0,1).render(u._time,!0,!0),n=1}s&&s.apply(u,c||[])}},t));return l?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Eu({startAt:{time:Zu(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),hd(this,Zu(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),hd(this,Zu(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+Tl)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);for(var r,i=this._first,a=this.labels;i;)i._start>=n&&(i._start+=e,i._end+=e),i=i._next;if(t)for(r in a)a[r]>=n&&(a[r]+=e);return Pu(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t,n=this._first;n;)t=n._next,this.remove(n),n=t;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),Pu(this)},n.totalDuration=function(e){var t,n,r,i=0,a=this,o=a._last,s=wl;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-e:e));if(a._dirty){for(r=a.parent;o;)t=o._prev,o._dirty&&o.totalDuration(),(n=o._start)>s&&a._sort&&o._ts&&!a._lock?(a._lock=1,Uu(a,o,n-o._delay,1)._lock=0):s=n,n<0&&o._ts&&(i-=n,(!r&&!a._dp||r&&r.smoothChildTiming)&&(a._start+=n/a._ts,a._time-=n,a._tTime-=n),a.shiftChildren(-n,!1,-1/0),s=0),o._end>i&&o._ts&&(i=o._end),o=t;Ju(a,a===cl&&a._time>i?a._time:i,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(e){if(cl._ts&&(Cu(cl,zu(e,cl)),pl=kd.frame),kd.frame>=uu){uu+=Sl.autoSleep||120;var t=cl._first;if((!t||!t._ts)&&Sl.autoSleep&&kd._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||kd.sleep()}}},t}(Hd),Eu(Ud.prototype,{_lock:0,_hasPause:0,_forcing:0}),Kd=function(e,t,n,r,i,a,o){var s,c,l,u,d,f,p,m,h=new hf(this._pt,e,t,0,1,lf,null,i),g=0,_=0;for(h.b=n,h.e=r,n+=``,(p=~(r+=``).indexOf(`random(`))&&(r=pd(r)),a&&(a(m=[n,r],e,t),n=m[0],r=m[1]),c=n.match(Gl)||[];s=Gl.exec(r);)u=s[0],d=r.substring(g,s.index),l?l=(l+1)%5:d.substr(-5)===`rgba(`&&(l=1),u!==c[_++]&&(f=parseFloat(c[_-1])||0,h._pt={_next:h._pt,p:d||_===1?d:`,`,s:f,c:u.charAt(1)===`=`?yu(f,u)-f:parseFloat(u)-f,m:l&&l<4?Math.round:0},g=Gl.lastIndex);return h.c=g<r.length?r.substring(g,r.length):``,h.fp=o,(Kl.test(r)||p)&&(h.e=0),this._pt=h,h},qd=function(e,t,n,r,i,a,o,s,c,l){Nl(r)&&(r=r(i||0,e,a));var u,d=e[t],f=n===`get`?Nl(d)?c?e[t.indexOf(`set`)||!Nl(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():d:n,p=Nl(d)?c?rf:nf:tf;if(Ml(r)&&(~r.indexOf(`random(`)&&(r=pd(r)),r.charAt(1)===`=`&&((u=yu(f,r)+(td(f)||0))||u===0)&&(r=u)),!l||f!==r||Gd)return isNaN(f*r)||r===``?(!d&&!(t in e)&&Ql(t,r),Kd.call(this,e,t,f,r,p,s||Sl.stringFilter,c)):(u=new hf(this._pt,e,t,+f||0,r-(f||0),typeof d==`boolean`?cf:sf,0,p),c&&(u.fp=c),o&&u.modifier(o,this,e),this._pt=u)},Jd=function(e,t,n,r,i,a){var o,s,c,l;if(cu[e]&&!1!==(o=new cu[e]).init(i,o.rawVars?t[e]:function(e,t,n,r,i){if(Nl(e)&&(e=Zd(e,i,t,n,r)),!Il(e)||e.style&&e.nodeType||Vl(e)||Bl(e))return Ml(e)?Zd(e,i,t,n,r):e;var a,o={};for(a in e)o[a]=Zd(e[a],i,t,n,r);return o}(t[e],r,i,a,n),n,r,a)&&(n._pt=s=new hf(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==ml))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Yd=function e(t,n,r){var i,a,o,s,c,l,u,d,f,p,m,h,g,_=t.vars,v=_.ease,y=_.startAt,b=_.immediateRender,x=_.lazy,S=_.onUpdate,C=_.runBackwards,w=_.yoyoEase,T=_.keyframes,E=_.autoRevert,D=t._dur,O=t._startAt,k=t._targets,A=t.parent,j=A&&A.data===`nested`?A.vars.targets:k,M=t._overwrite===`auto`&&!al,N=t.timeline;if(N&&(!T||!v)&&(v=`none`),t._ease=Id(v,Cl.ease),t._yEase=w?Pd(Id(!0===w?v:w,Cl.ease)):0,w&&t._yoyo&&!t._repeat&&(w=t._yEase,t._yEase=t._ease,t._ease=w),t._from=!N&&!!_.runBackwards,!N||T&&!_.stagger){if(h=(d=k[0]?mu(k[0]).harness:0)&&_[d.prop],i=ku(_,au),O&&(O._zTime<0&&O.progress(1),n<0&&C&&b&&!E?O.render(-1,!0):O.revert(C&&D?ru:nu),O._lazy=0),y){if(Nu(t._startAt=ef.set(k,Eu({data:`isStart`,overwrite:!1,parent:A,immediateRender:!0,lazy:!O&&Ll(x),startAt:null,delay:0,onUpdate:S&&function(){return gd(t,`onUpdate`)},stagger:0},y))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ol||!b&&!E)&&t._startAt.revert(ru),b&&D&&n<=0&&r<=0)return void(n&&(t._zTime=n))}else if(C&&D&&!O)if(n&&(b=!1),o=Eu({overwrite:!1,data:`isFromStart`,lazy:b&&!O&&Ll(x),immediateRender:b,stagger:0,parent:A},i),h&&(o[d.prop]=h),Nu(t._startAt=ef.set(k,o)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(ol?t._startAt.revert(ru):t._startAt.render(-1,!0)),t._zTime=n,b){if(!n)return}else e(t._startAt,Tl,Tl);for(t._pt=t._ptCache=0,x=D&&Ll(x)||x&&!D,a=0;a<k.length;a++){if(u=(c=k[a])._gsap||pu(k)[a]._gsap,t._ptLookup[a]=p={},su[u.id]&&ou.length&&xu(),m=j===k?a:j.indexOf(c),d&&!1!==(f=new d).init(c,h||i,t,m,j)&&(t._pt=s=new hf(t._pt,c,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(e){p[e]=s}),f.priority&&(l=1)),!d||h)for(o in i)cu[o]&&(f=Jd(o,i,t,m,c,j))?f.priority&&(l=1):p[o]=s=qd.call(t,c,o,`get`,i[o],m,j,0,_.stringFilter);t._op&&t._op[a]&&t.kill(c,t._op[a]),M&&t._pt&&(Wd=t,cl.killTweensOf(c,p,t.globalTime(n)),g=!t.parent,Wd=0),t._pt&&x&&(su[u.id]=1)}l&&mf(t),t._onInit&&t._onInit(t)}t._onUpdate=S,t._initted=(!t._op||t._pt)&&!g,T&&n<=0&&N.render(wl,!0,!0)},Xd=function(e,t,n,r){var i,a,o=t.ease||r||`power1.inOut`;if(Vl(t))a=n[e]||(n[e]=[]),t.forEach(function(e,n){return a.push({t:n/(t.length-1)*100,v:e,e:o})});else for(i in t)a=n[i]||(n[i]=[]),i===`ease`||a.push({t:parseFloat(e),v:t[i],e:o})},Zd=function(e,t,n,r,i){return Nl(e)?e.call(t,n,r,i):Ml(e)&&~e.indexOf(`random(`)?pd(e):e},Qd=fu+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert`,$d={},gu(Qd+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return $d[e]=1}),ef=function(e){function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null);var o,s,c,l,u,d,f,p,m=(a=e.call(this,i?n:Au(n))||this).vars,h=m.duration,g=m.delay,_=m.immediateRender,v=m.stagger,y=m.overwrite,b=m.keyframes,x=m.defaults,S=m.scrollTrigger,C=m.yoyoEase,w=n.parent||cl,T=(Vl(t)||Bl(t)?Pl(t[0]):`length`in n)?[t]:ad(t);if(a._targets=T.length?pu(T):$l(`GSAP target `+t+` not found. https://gsap.com`,!Sl.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=y,b||v||zl(h)||zl(g)){if(n=a.vars,(o=a.timeline=new Ud({data:`nested`,defaults:x||{},targets:w&&w.data===`nested`?w.vars.targets:T})).kill(),o.parent=o._dp=er(a),o._start=0,v||zl(h)||zl(g)){if(l=T.length,f=v&&cd(v),Il(v))for(u in v)~Qd.indexOf(u)&&(p||={},p[u]=v[u]);for(s=0;s<l;s++)(c=ku(n,$d)).stagger=0,C&&(c.yoyoEase=C),p&&Du(c,p),d=T[s],c.duration=+Zd(h,er(a),s,d,T),c.delay=(+Zd(g,er(a),s,d,T)||0)-a._delay,!v&&l===1&&c.delay&&(a._delay=g=c.delay,a._start+=g,c.delay=0),o.to(d,c,f?f(s,d,T):0),o._ease=$.none;o.duration()?h=g=0:a.timeline=0}else if(b){Au(Eu(o.vars.defaults,{ease:`none`})),o._ease=Id(b.ease||n.ease||`none`);var E,D,O,k=0;if(Vl(b))b.forEach(function(e){return o.to(T,e,`>`)}),o.duration();else{for(u in c={},b)u===`ease`||u===`easeEach`||Xd(u,b[u],c,b.easeEach);for(u in c)for(E=c[u].sort(function(e,t){return e.t-t.t}),k=0,s=0;s<E.length;s++)(O={ease:(D=E[s]).e,duration:(D.t-(s?E[s-1].t:0))/100*h})[u]=D.v,o.to(T,O,k),k+=O.duration;o.duration()<h&&o.to({},{duration:h-o.duration()})}}h||a.duration(h=o.duration())}else a.timeline=0;return!0!==y||al||(Wd=er(a),cl.killTweensOf(T),Wd=0),Uu(w,er(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(_||!h&&!b&&a._start===vu(w._time)&&Ll(_)&&Iu(er(a))&&w.data!==`nested`)&&(a._tTime=-1e-8,a.render(Math.max(0,-g)||0)),S&&Wu(er(a),S),a}tr(t,e);var n=t.prototype;return n.render=function(e,t,n){var r,i,a,o,s,c,l,u,d,f=this._time,p=this._tDur,m=this._dur,h=e<0,g=e>p-Tl&&!h?p:e<Tl?0:e;if(m){if(g!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(r=g,u=this.timeline,this._repeat){if(o=m+this._rDelay,this._repeat<-1&&h)return this.totalTime(100*o+e,t,n);if(r=vu(g%o),g===p?(a=this._repeat,r=m):(a=~~(s=vu(g/o)))&&a===s?(r=m,a--):r>m&&(r=m),(c=this._yoyo&&1&a)&&(d=this._yEase,r=m-r),s=Ru(this._tTime,o),r===f&&!n&&this._initted&&a===s)return this._tTime=g,this;a!==s&&(u&&this._yEase&&Fd(u,c),this.vars.repeatRefresh&&!c&&!this._lock&&r!==o&&this._initted&&(this._lock=n=1,this.render(vu(o*a),!0).invalidate()._lock=0))}if(!this._initted){if(Gu(this,h?e:r,n,t,g))return this._tTime=0,this;if(!(f===this._time||n&&this.vars.repeatRefresh&&a!==s))return this;if(m!==this._dur)return this.render(e,t,n)}if(this._tTime=g,this._time=r,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=l=(d||this._ease)(r/m),this._from&&(this.ratio=l=1-l),!f&&g&&!t&&!s&&(gd(this,`onStart`),this._tTime!==g))return this;for(i=this._pt;i;)i.r(l,i.d),i=i._next;u&&u.render(e<0?e:u._dur*u._ease(r/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(h&&Fu(this,e,0,n),gd(this,`onUpdate`)),this._repeat&&a!==s&&this.vars.onRepeat&&!t&&this.parent&&gd(this,`onRepeat`),g!==this._tDur&&g||this._tTime!==g||(h&&!this._onUpdate&&Fu(this,e,0,!0),(e||!m)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Nu(this,1),t||h&&!f||!(g||f||c)||(gd(this,g===p?`onComplete`:`onReverseComplete`,!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}}else(function(e,t,n,r){var i,a,o,s=e.ratio,c=t<0||!t&&(!e._start&&Ku(e)&&(e._initted||!qu(e))||(e._ts<0||e._dp._ts<0)&&!qu(e))?0:1,l=e._rDelay,u=0;if(l&&e._repeat&&(u=ed(0,e._tDur,t),a=Ru(u,l),e._yoyo&&1&a&&(c=1-c),a!==Ru(e._tTime,l)&&(s=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==s||ol||r||e._zTime===Tl||!t&&e._zTime){if(!e._initted&&Gu(e,t,r,n,u))return;for(o=e._zTime,e._zTime=t||(n?Tl:0),n||=t&&!o,e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=u,i=e._pt;i;)i.r(c,i.d),i=i._next;t<0&&Fu(e,t,0,!0),e._onUpdate&&!n&&gd(e,`onUpdate`),u&&e._repeat&&!n&&e.parent&&gd(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&Nu(e,1),n||ol||(gd(e,c?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||=t})(this,e,t,n);return this},n.targets=function(){return this._targets},n.invalidate=function(t){return(!t||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){hl||kd.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Yd(this,a),function(e,t,n,r,i,a,o,s){var c,l,u,d,f=(e._pt&&e._ptCache||(e._ptCache={}))[t];if(!f)for(f=e._ptCache[t]=[],u=e._ptLookup,d=e._targets.length;d--;){if((c=u[d][t])&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Gd=1,e.vars[t]=`+=0`,Yd(e,o),Gd=0,s?$l(t+` not eligible for reset`):1;f.push(c)}for(d=f.length;d--;)(c=(l=f[d])._pt||l).s=!r&&r!==0||i?c.s+(r||0)+a*c.c:r,c.c=n-c.s,l.e&&=_u(n)+td(l.e),l.b&&=c.s+td(l.b)}(this,e,t,n,r,this._ease(a/this._dur),a,i)?this.resetTo(e,t,n,r,1):(Vu(this,0),this.parent||ju(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!(e||t&&t!==`all`))return this._lazy=this._pt=0,this.parent?_d(this):this.scrollTrigger&&this.scrollTrigger.kill(!!ol),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Wd&&!0!==Wd.vars.overwrite)._first||_d(this),this.parent&&n!==this.timeline.totalDuration()&&Ju(this,this._dur*this.timeline._tDur/n,0,1),this}var r,i,a,o,s,c,l,u=this._targets,d=e?ad(e):u,f=this._ptLookup,p=this._pt;if((!t||t===`all`)&&function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0}(u,d))return t===`all`&&(this._pt=0),_d(this);for(r=this._op=this._op||[],t!==`all`&&(Ml(t)&&(s={},gu(t,function(e){return s[e]=1}),t=s),t=function(e,t){var n,r,i,a,o=e[0]?mu(e[0]).harness:0,s=o&&o.aliases;if(!s)return t;for(r in n=Du({},t),s)if(r in n)for(i=(a=s[r].split(`,`)).length;i--;)n[a[i]]=n[r];return n}(u,t)),l=u.length;l--;)if(~d.indexOf(u[l]))for(s in i=f[l],t===`all`?(r[l]=t,o=i,a={}):(a=r[l]=r[l]||{},o=t),o)(c=i&&i[s])&&(`kill`in c.d&&!0!==c.d.kill(s)||Mu(this,c,`_pt`),delete i[s]),a!==`all`&&(a[s]=1);return this._initted&&!this._pt&&p&&_d(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return Qu(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return Qu(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return cl.killTweensOf(e,t,n)},t}(Hd),Eu(ef.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),gu(`staggerTo,staggerFrom,staggerFromTo`,function(e){ef[e]=function(){var t=new Ud,n=nd.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}}),tf=function(e,t,n){return e[t]=n},nf=function(e,t,n){return e[t](n)},rf=function(e,t,n,r){return e[t](r.fp,n)},af=function(e,t,n){return e.setAttribute(t,n)},of=function(e,t){return Nl(e[t])?nf:Fl(e[t])&&e.setAttribute?af:tf},sf=function(e,t){return t.set(t.t,t.p,Math.round(1e6*(t.s+t.c*e))/1e6,t)},cf=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lf=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round(1e4*(n.s+n.c*e))/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},uf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},df=function(e,t,n,r){for(var i,a=this._pt;a;)i=a._next,a.p===r&&a.modifier(e,t,n),a=i},ff=function(e){for(var t,n,r=this._pt;r;)n=r._next,r.p===e&&!r.op||r.op===e?Mu(this,r,`_pt`):r.dep||(t=1),r=n;return!t},pf=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},mf=function(e){for(var t,n,r,i,a=e._pt;a;){for(t=a._next,n=r;n&&n.pr>a.pr;)n=n._next;(a._prev=n?n._prev:i)?a._prev._next=a:r=a,(a._next=n)?n._prev=a:i=a,a=t}e._pt=r},hf=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||sf,this.d=o||this,this.set=s||tf,this.pr=c||0,this._next=e,e&&(e._prev=this)}return e.prototype.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=pf,this.m=e,this.mt=n,this.tween=t},e}(),gu(fu+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger`,function(e){return au[e]=1}),Yl.TweenMax=Yl.TweenLite=ef,Yl.TimelineLite=Yl.TimelineMax=Ud,cl=new Ud({sortChildren:!1,defaults:Cl,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),Sl.stringFilter=Od,gf=[],_f={},vf=[],yf=0,bf=0,xf=function(e){return(_f[e]||vf).map(function(e){return e()})},Sf=function(){var e=Date.now(),t=[];e-yf>2&&(xf(`matchMediaInit`),gf.forEach(function(e){var n,r,i,a,o=e.queries,s=e.conditions;for(r in o)(n=ll.matchMedia(o[r]).matches)&&(i=1),n!==s[r]&&(s[r]=n,a=1);a&&(e.revert(),i&&t.push(e))}),xf(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),yf=e,xf(`matchMedia`))},Cf=function(){function e(e,t){this.selector=t&&od(t),this.data=[],this._r=[],this.isReverted=!1,this.id=bf++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){Nl(e)&&(n=t,t=e,e=Nl);var r=this,i=function(){var e,i=sl,a=r.selector;return i&&i!==r&&i.data.push(r),n&&(r.selector=od(n)),sl=r,e=t.apply(r,arguments),Nl(e)&&r._r.push(e),sl=i,r.selector=a,r.isReverted=!1,e};return r.last=i,e===Nl?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=sl;sl=null,e(this),sl=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof ef&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?function(){for(var t,r=n.getTweens(),i=n.data.length;i--;)(t=n.data[i]).data===`isFlip`&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(e){return r.splice(r.indexOf(e),1)}));for(r.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),i=n.data.length;i--;)(t=n.data[i])instanceof Ud?t.data!==`nested`&&(t.scrollTrigger&&t.scrollTrigger.revert(),t.kill()):!(t instanceof ef)&&t.revert&&t.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0}():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t)for(var r=gf.length;r--;)gf[r].id===this.id&&gf.splice(r,1)},t.revert=function(e){this.kill(e||{})},e}(),wf=function(){function e(e){this.contexts=[],this.scope=e,sl&&sl.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){Il(e)||(e={matches:e});var r,i,a,o=new Cf(0,n||this.scope),s=o.conditions={};for(i in sl&&!o.selector&&(o.selector=sl.selector),this.contexts.push(o),t=o.add(`onMatch`,t),o.queries=e,e)i===`all`?a=1:(r=ll.matchMedia(e[i]))&&(gf.indexOf(o)<0&&gf.push(o),(s[i]=r.matches)&&(a=1),r.addListener?r.addListener(Sf):r.addEventListener(`change`,Sf));return a&&t(o,function(e){return o.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),Tf={registerPlugin:function(){[...arguments].forEach(function(e){return yd(e)})},timeline:function(e){return new Ud(e)},getTweensOf:function(e,t){return cl.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ml(e)&&(e=ad(e)[0]);var i=mu(e||{}).get,a=n?Tu:wu;return n===`native`&&(n=``),e&&(t?a((cu[t]&&cu[t].get||i)(e,t,n,r)):function(t,n,r){return a((cu[t]&&cu[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if((e=ad(e)).length>1){var r=e.map(function(e){return Of.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=cu[t],o=mu(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;ml._pt=0,r.init(e,n?t+n:t,ml,0,[e]),r.render(1,r),ml._pt&&uf(1,ml)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=Of.to(e,Eu(((r={})[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return cl.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Id(e.ease,Cl.ease)),Ou(Cl,e||{})},config:function(e){return Ou(Sl,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!cu[e]&&!Yl[e]&&$l(t+` effect requires `+e+` plugin.`)}),lu[t]=function(e,t,r){return n(ad(e),Eu(t||{},i),r)},a&&(Ud.prototype[t]=function(e,n,r){return this.add(lu[t](e,Il(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){$[e]=Id(t)},parseEase:function(e,t){return arguments.length?Id(e,t):$},getById:function(e){return cl.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n,r,i=new Ud(e);for(i.smoothChildTiming=Ll(e.smoothChildTiming),cl.remove(i),i._dp=0,i._time=i._tTime=cl._time,n=cl._first;n;)r=n._next,!t&&!n._dur&&n instanceof ef&&n.vars.onComplete===n._targets[0]||Uu(i,n,n._start-n._delay),n=r;return Uu(cl,i,0),i},context:function(e,t){return e?new Cf(e,t):sl},matchMedia:function(e){return new wf(e)},matchMediaRefresh:function(){return gf.forEach(function(e){var t,n,r=e.conditions;for(n in r)r[n]&&(r[n]=!1,t=1);t&&e.revert()})||Sf()},addEventListener:function(e,t){var n=_f[e]||(_f[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_f[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:function e(t,n,r){var i=n-t;return Vl(t)?fd(t,e(0,t.length),n):$u(r,function(e){return(i+(e-t)%i)%i+t})},wrapYoyo:function e(t,n,r){var i=n-t,a=2*i;return Vl(t)?fd(t,e(0,t.length-1),n):$u(r,function(e){return t+((e=(a+(e-t)%a)%a||0)>i?a-e:e)})},distribute:cd,random:dd,snap:ud,normalize:function(e,t,n){return md(e,t,0,1,n)},getUnit:td,clamp:function(e,t,n){return $u(n,function(n){return ed(e,t,n)})},splitColor:Cd,toArray:ad,selector:od,mapRange:md,pipe:function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},unitize:function(e,t){return function(n){return e(parseFloat(n))+(t||td(n))}},interpolate:function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o,s,c,l,u,d=Ml(t),f={};if(!0===r&&(i=1)&&(r=null),d)t={p:t},n={p:n};else if(Vl(t)&&!Vl(n)){for(c=[],l=t.length,u=l-2,s=1;s<l;s++)c.push(e(t[s-1],t[s]));l--,a=function(e){e*=l;var t=Math.min(u,~~e);return c[t](e-t)},r=n}else i||(t=Du(Vl(t)?[]:{},t));if(!c){for(o in n)qd.call(f,t,o,`get`,n[o]);a=function(e){return uf(e,f)||(d?t.p:t)}}}return $u(r,a)},shuffle:sd},install:Zl,effects:lu,ticker:kd,updateRoot:Ud.updateRoot,plugins:cu,globalTimeline:cl,core:{PropTween:hf,globals:eu,Tween:ef,Timeline:Ud,Animation:Hd,getCache:mu,_removeLinkedListItem:Mu,reverting:function(){return ol},context:function(e){return e&&sl&&(sl.data.push(e),e._ctx=sl),sl},suppressOverwrites:function(e){return al=e}}},gu(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return Tf[e]=ef[e]}),kd.add(Ud.updateRoot),ml=Tf.to({},{duration:0}),Ef=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Df=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(Ml(n)&&(r={},gu(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}(function(e,t){var n,r,i,a=e._targets;for(n in t)for(r=a.length;r--;)(i=e._ptLookup[r][n])&&(i=i.d)&&(i._pt&&(i=Ef(i,n)),i&&i.modifier&&i.modifier(t[n],e,a[r],n))})(e,n)}}}},Of=Tf.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,(o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a)).op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)ol?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Df(`roundProps`,ld),Df(`modifiers`),Df(`snap`,ud))||Tf,ef.version=Ud.version=Of.version=`3.13.0`,fl=1,Rl()&&Ad(),$.Power0,$.Power1,$.Power2,$.Power3,$.Power4,$.Linear,$.Quad,$.Cubic,$.Quart,$.Quint,$.Strong,$.Elastic,$.Back,$.SteppedEase,$.Bounce,$.Sine,$.Expo,$.Circ,Lf={},Rf=180/Math.PI,zf=Math.PI/180,Bf=Math.atan2,Vf=/([A-Z])/g,Hf=/(left|right|width|margin|padding|x)/i,Uf=/[\s,\(]\S/,Wf={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},Gf=function(e,t){return t.set(t.t,t.p,Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},Kf=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round(1e4*(t.s+t.c*e))/1e4+t.u,t)},qf=function(e,t){return t.set(t.t,t.p,e?Math.round(1e4*(t.s+t.c*e))/1e4+t.u:t.b,t)},Jf=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Yf=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xf=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Zf=function(e,t,n){return e.style[t]=n},Qf=function(e,t,n){return e.style.setProperty(t,n)},$f=function(e,t,n){return e._gsap[t]=n},ep=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},tp=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},np=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},rp=`transform`,ip=rp+`Origin`,ap=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in Lf&&a){if(this.tfm=this.tfm||{},t===`transform`)return Wf.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(~(t=Wf[t]||t).indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=Cp(i,e)}):this.tfm[t]=o.x?o[t]:Cp(i,t),t===ip&&(this.tfm.zOrigin=o.zOrigin),this.props.indexOf(rp)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(ip,n,``)),t=rp}(a||n)&&this.props.push(t,n,a[t])},op=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},sp=function(){var e,t,n=this.props,r=this.target,i=r.style,a=r._gsap;for(e=0;e<n.length;e+=3)n[e+1]?n[e+1]===2?r[n[e]](n[e+2]):r[n[e]]=n[e+2]:n[e+2]?i[n[e]]=n[e+2]:i.removeProperty(n[e].substr(0,2)===`--`?n[e]:n[e].replace(Vf,`-$1`).toLowerCase());if(this.tfm){for(t in this.tfm)a[t]=this.tfm[t];a.svg&&(a.renderTransform(),r.setAttribute(`data-svg-origin`,this.svgo||``)),(e=Ff())&&e.isStart||i[rp]||(op(i),a.zOrigin&&i[ip]&&(i[ip]+=` `+a.zOrigin+`px`,a.zOrigin=0,a.renderTransform()),a.uncache=1)}},cp=function(e,t){var n={target:e,props:[],revert:sp,save:ap};return e._gsap||Of.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},lp=function(e,t){var n=Af.createElementNS?Af.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):Af.createElement(e);return n&&n.style?n:Af.createElement(e)},up=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(Vf,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,fp(n)||n,1)||``},dp=`O,Moz,ms,Ms,Webkit`.split(`,`),fp=function(e,t,n){var r=(t||Nf).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(dp[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?dp[i]:``)+e},pp=function(){S!==void 0&&S.document&&(kf=S,Af=kf.document,jf=Af.documentElement,Nf=lp(`div`)||{style:{}},lp(`div`),rp=fp(rp),ip=rp+`Origin`,Nf.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,If=!!fp(`perspective`),Ff=Of.core.reverting,Mf=1)},mp=function(e){var t,n=e.ownerSVGElement,r=lp(`svg`,n&&n.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),i=e.cloneNode(!0);i.style.display=`block`,r.appendChild(i),jf.appendChild(r);try{t=i.getBBox()}catch{}return r.removeChild(i),jf.removeChild(r),t},hp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},gp=function(e){var t,n;try{t=e.getBBox()}catch{t=mp(e),n=1}return t&&(t.width||t.height)||n||(t=mp(e)),!t||t.width||t.x||t.y?t:{x:+hp(e,[`x`,`cx`,`x1`])||0,y:+hp(e,[`y`,`cy`,`y1`])||0,width:0,height:0}},_p=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!gp(e))},vp=function(e,t){if(t){var n,r=e.style;t in Lf&&t!==ip&&(t=rp),r.removeProperty?((n=t.substr(0,2))!==`ms`&&t.substr(0,6)!==`webkit`||(t=`-`+t),r.removeProperty(n===`--`?t:t.replace(Vf,`-$1`).toLowerCase())):r.removeAttribute(t)}},yp=function(e,t,n,r,i,a){var o=new hf(e._pt,t,n,0,1,a?Xf:Yf);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},bp={deg:1,rad:1,turn:1},xp={grid:1,flex:1},Sp=function e(t,n,r,i){var a,o,s,c,l=parseFloat(r)||0,u=(r+``).trim().substr((l+``).length)||`px`,d=Nf.style,f=Hf.test(n),p=t.tagName.toLowerCase()===`svg`,m=(p?`client`:`offset`)+(f?`Width`:`Height`),h=100,g=i===`px`,_=i===`%`;if(i===u||!l||bp[i]||bp[u])return l;if(u!==`px`&&!g&&(l=e(t,n,r,`px`)),c=t.getCTM&&_p(t),(_||u===`%`)&&(Lf[n]||~n.indexOf(`adius`)))return a=c?t.getBBox()[f?`width`:`height`]:t[m],_u(_?l/a*h:l/100*a);if(d[f?`width`:`height`]=h+(g?u:i),o=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!p?t:t.parentNode,c&&(o=(t.ownerSVGElement||{}).parentNode),o&&o!==Af&&o.appendChild||(o=Af.body),(s=o._gsap)&&_&&s.width&&f&&s.time===kd.time&&!s.uncache)return _u(l/s.width*h);if(!_||n!==`height`&&n!==`width`)(_||u===`%`)&&!xp[up(o,`display`)]&&(d.position=up(t,`position`)),o===t&&(d.position=`static`),o.appendChild(Nf),a=Nf[m],o.removeChild(Nf),d.position=`absolute`;else{var v=t.style[n];t.style[n]=h+i,a=t[m],v?t.style[n]=v:vp(t,n)}return f&&_&&((s=mu(o)).time=kd.time,s.width=o[m]),_u(g?a*l/h:a&&l?h/a*l:0)},Cp=function(e,t,n,r){var i;return Mf||pp(),t in Wf&&t!==`transform`&&~(t=Wf[t]).indexOf(`,`)&&(t=t.split(`,`)[0]),Lf[t]&&t!==`transform`?(i=Fp(e,r),i=t===`transformOrigin`?i.svg?i.origin:Ip(up(e,ip))+` `+i.zOrigin+`px`:i[t]):(!(i=e.style[t])||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=Op[t]&&Op[t](e,t,n)||up(e,t)||hu(e,t)||+(t===`opacity`)),n&&!~(i+``).trim().indexOf(` `)?Sp(e,t,i,n)+n:i},wp=function(e,t,n,r){if(!n||n===`none`){var i=fp(t,e,1),a=i&&up(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=up(e,`borderTopColor`))}var o,s,c,l,u,d,f,p,m,h,g,_=new hf(this._pt,e.style,t,0,1,lf),v=0,y=0;if(_.b=n,_.e=r,n+=``,(r+=``).substring(0,6)===`var(--`&&(r=up(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(d=e.style[t],e.style[t]=r,r=up(e,t)||r,d?e.style[t]=d:vp(e,t)),Od(o=[n,r]),r=o[1],c=(n=o[0]).match(Wl)||[],(r.match(Wl)||[]).length){for(;s=Wl.exec(r);)f=s[0],m=r.substring(v,s.index),u?u=(u+1)%5:m.substr(-5)!==`rgba(`&&m.substr(-5)!==`hsla(`||(u=1),f!==(d=c[y++]||``)&&(l=parseFloat(d)||0,g=d.substr((l+``).length),f.charAt(1)===`=`&&(f=yu(l,f)+g),p=parseFloat(f),h=f.substr((p+``).length),v=Wl.lastIndex-h.length,h||(h=h||Sl.units[t]||g,v===r.length&&(r+=h,_.e+=h)),g!==h&&(l=Sp(e,t,d,h)||0),_._pt={_next:_._pt,p:m||y===1?m:`,`,s:l,c:p-l,m:u&&u<4||t===`zIndex`?Math.round:0});_.c=v<r.length?r.substring(v,r.length):``}else _.r=t===`display`&&r===`none`?Xf:Yf;return Kl.test(r)&&(_.e=0),this._pt=_,_},Tp={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},Ep=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return n!==`top`&&n!==`bottom`&&r!==`left`&&r!==`right`||(e=n,n=r,r=e),t[0]=Tp[n]||n,t[1]=Tp[r]||r,t.join(` `)},Dp=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n,r,i,a=t.t,o=a.style,s=t.u,c=a._gsap;if(s===`all`||!0===s)o.cssText=``,r=1;else for(i=(s=s.split(`,`)).length;--i>-1;)n=s[i],Lf[n]&&(r=1,n=n===`transformOrigin`?ip:rp),vp(a,n);r&&(vp(a,rp),c&&(c.svg&&a.removeAttribute(`transform`),o.scale=o.rotate=o.translate=`none`,Fp(a,1),c.uncache=1,op(o)))}},Op={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new hf(e._pt,t,n,0,0,Dp);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},kp=[1,0,0,1,0,0],Ap={},jp=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},Mp=function(e){var t=up(e,rp);return jp(t)?kp:t.substr(7).match(Ul).map(_u)},Np=function(e,t){var n,r,i,a,o=e._gsap||mu(e),s=e.style,c=Mp(e);return o.svg&&e.getAttribute(`transform`)?(c=[(i=e.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(`,`)===`1,0,0,1,0,0`?kp:c:(c!==kp||e.offsetParent||e===jf||o.svg||(i=s.display,s.display=`block`,(n=e.parentNode)&&(e.offsetParent||e.getBoundingClientRect().width)||(a=1,r=e.nextElementSibling,jf.appendChild(e)),c=Mp(e),i?s.display=i:vp(e,`display`),a&&(r?n.insertBefore(e,r):n?n.appendChild(e):jf.removeChild(e))),t&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},Pp=function(e,t,n,r,i,a){var o,s,c,l=e._gsap,u=i||Np(e,!0),d=l.xOrigin||0,f=l.yOrigin||0,p=l.xOffset||0,m=l.yOffset||0,h=u[0],g=u[1],_=u[2],v=u[3],y=u[4],b=u[5],x=t.split(` `),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0;n?u!==kp&&(s=h*v-g*_)&&(c=S*(-g/s)+h/s*C-(h*b-g*y)/s,S=v/s*S+C*(-_/s)+(_*b-v*y)/s,C=c):(S=(o=gp(e)).x+(~x[0].indexOf(`%`)?S/100*o.width:S),C=o.y+(~(x[1]||x[0]).indexOf(`%`)?C/100*o.height:C)),r||!1!==r&&l.smooth?(y=S-d,b=C-f,l.xOffset=p+(y*h+b*_)-y,l.yOffset=m+(y*g+b*v)-b):l.xOffset=l.yOffset=0,l.xOrigin=S,l.yOrigin=C,l.smooth=!!r,l.origin=t,l.originIsAbsolute=!!n,e.style[ip]=`0px 0px`,a&&(yp(a,l,`xOrigin`,d,S),yp(a,l,`yOrigin`,f,C),yp(a,l,`xOffset`,p,l.xOffset),yp(a,l,`yOffset`,m,l.yOffset)),e.setAttribute(`data-svg-origin`,S+` `+C)},Fp=function(e,t){var n=e._gsap||new Vd(e);if(`x`in n&&!t&&!n.uncache)return n;var r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=e.style,I=n.scaleX<0,ee=`px`,L=`deg`,R=getComputedStyle(e),z=up(e,ip)||`0`;return r=i=a=c=l=u=d=f=p=0,o=s=1,n.svg=!(!e.getCTM||!_p(e)),R.translate&&(R.translate===`none`&&R.scale===`none`&&R.rotate===`none`||(F[rp]=(R.translate===`none`?``:`translate3d(`+(R.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(R.rotate===`none`?``:`rotate(`+R.rotate+`) `)+(R.scale===`none`?``:`scale(`+R.scale.split(` `).join(`,`)+`) `)+(R[rp]===`none`?``:R[rp])),F.scale=F.rotate=F.translate=`none`),g=Np(e,n.svg),n.svg&&(n.uncache?(D=e.getBBox(),z=n.xOrigin-D.x+`px `+(n.yOrigin-D.y)+`px`,E=``):E=!t&&e.getAttribute(`data-svg-origin`),Pp(e,E||z,!!E||n.originIsAbsolute,!1!==n.smooth,g)),m=n.xOrigin||0,h=n.yOrigin||0,g!==kp&&(b=g[0],x=g[1],S=g[2],C=g[3],r=w=g[4],i=T=g[5],g.length===6?(o=Math.sqrt(b*b+x*x),s=Math.sqrt(C*C+S*S),c=b||x?Bf(x,b)*Rf:0,(d=S||C?Bf(S,C)*Rf+c:0)&&(s*=Math.abs(Math.cos(d*zf))),n.svg&&(r-=m-(m*b+h*S),i-=h-(m*x+h*C))):(P=g[6],M=g[7],k=g[8],A=g[9],j=g[10],N=g[11],r=g[12],i=g[13],a=g[14],l=(_=Bf(P,j))*Rf,_&&(E=w*(v=Math.cos(-_))+k*(y=Math.sin(-_)),D=T*v+A*y,O=P*v+j*y,k=w*-y+k*v,A=T*-y+A*v,j=P*-y+j*v,N=M*-y+N*v,w=E,T=D,P=O),u=(_=Bf(-S,j))*Rf,_&&(v=Math.cos(-_),N=C*(y=Math.sin(-_))+N*v,b=E=b*v-k*y,x=D=x*v-A*y,S=O=S*v-j*y),c=(_=Bf(x,b))*Rf,_&&(E=b*(v=Math.cos(_))+x*(y=Math.sin(_)),D=w*v+T*y,x=x*v-b*y,T=T*v-w*y,b=E,w=D),l&&Math.abs(l)+Math.abs(c)>359.9&&(l=c=0,u=180-u),o=_u(Math.sqrt(b*b+x*x+S*S)),s=_u(Math.sqrt(T*T+P*P)),_=Bf(w,T),d=Math.abs(_)>2e-4?_*Rf:0,p=N?1/(N<0?-N:N):0),n.svg&&(E=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!jp(up(e,rp)),E&&e.setAttribute(`transform`,E))),Math.abs(d)>90&&Math.abs(d)<270&&(I?(o*=-1,d+=c<=0?180:-180,c+=c<=0?180:-180):(s*=-1,d+=d<=0?180:-180)),t||=n.uncache,n.x=r-((n.xPercent=r&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-r)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+ee,n.y=i-((n.yPercent=i&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-i)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+ee,n.z=a+ee,n.scaleX=_u(o),n.scaleY=_u(s),n.rotation=_u(c)+L,n.rotationX=_u(l)+L,n.rotationY=_u(u)+L,n.skewX=d+L,n.skewY=f+L,n.transformPerspective=p+ee,(n.zOrigin=parseFloat(z.split(` `)[2])||!t&&n.zOrigin||0)&&(F[ip]=Ip(z)),n.xOffset=n.yOffset=0,n.force3D=Sl.force3D,n.renderTransform=n.svg?Up:If?Hp:Rp,n.uncache=0,n},Ip=function(e){return(e=e.split(` `))[0]+` `+e[1]},Lp=function(e,t,n){var r=td(t);return _u(parseFloat(t)+parseFloat(Sp(e,`x`,n+`px`,r)))+r},Rp=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Hp(e,t)},zp=`0deg`,Bp=`0px`,Vp=`) `,Hp=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||!0===g;if(v&&(u!==zp||l!==zp)){var x,S=parseFloat(l)*zf,C=Math.sin(S),w=Math.cos(S);S=parseFloat(u)*zf,x=Math.cos(S),a=Lp(_,a,C*x*-v),o=Lp(_,o,-Math.sin(S)*-v),s=Lp(_,s,w*x*-v+v)}h!==Bp&&(y+=`perspective(`+h+Vp),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==Bp||o!==Bp||s!==Bp)&&(y+=s!==Bp||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+Vp),c!==zp&&(y+=`rotate(`+c+Vp),l!==zp&&(y+=`rotateY(`+l+Vp),u!==zp&&(y+=`rotateX(`+u+Vp),d===zp&&f===zp||(y+=`skew(`+d+`, `+f+Vp),p===1&&m===1||(y+=`scale(`+p+`, `+m+Vp),_.style[rp]=y||`translate(0, 0)`},Up=function(e,t){var n,r,i,a,o,s=t||this,c=s.xPercent,l=s.yPercent,u=s.x,d=s.y,f=s.rotation,p=s.skewX,m=s.skewY,h=s.scaleX,g=s.scaleY,_=s.target,v=s.xOrigin,y=s.yOrigin,b=s.xOffset,x=s.yOffset,S=s.forceCSS,C=parseFloat(u),w=parseFloat(d);f=parseFloat(f),p=parseFloat(p),(m=parseFloat(m))&&(p+=m=parseFloat(m),f+=m),f||p?(f*=zf,p*=zf,n=Math.cos(f)*h,r=Math.sin(f)*h,i=Math.sin(f-p)*-g,a=Math.cos(f-p)*g,p&&(m*=zf,o=Math.tan(p-m),i*=o=Math.sqrt(1+o*o),a*=o,m&&(o=Math.tan(m),n*=o=Math.sqrt(1+o*o),r*=o)),n=_u(n),r=_u(r),i=_u(i),a=_u(a)):(n=h,a=g,r=i=0),(C&&!~(u+``).indexOf(`px`)||w&&!~(d+``).indexOf(`px`))&&(C=Sp(_,`x`,u,`px`),w=Sp(_,`y`,d,`px`)),(v||y||b||x)&&(C=_u(C+v-(v*n+y*i)+b),w=_u(w+y-(v*r+y*a)+x)),(c||l)&&(o=_.getBBox(),C=_u(C+c/100*o.width),w=_u(w+l/100*o.height)),o=`matrix(`+n+`,`+r+`,`+i+`,`+a+`,`+C+`,`+w+`)`,_.setAttribute(`transform`,o),S&&(_.style[rp]=o)},Wp=function(e,t,n,r,i){var a,o,s=360,c=Ml(i),l=parseFloat(i)*(c&&~i.indexOf(`rad`)?Rf:1)-r,u=r+l+`deg`;return c&&((a=i.split(`_`)[1])===`short`&&(l%=s)!==l%180&&(l+=l<0?s:-360),a===`cw`&&l<0?l=(l+36e9)%s-~~(l/s)*s:a===`ccw`&&l>0&&(l=(l-36e9)%s-~~(l/s)*s)),e._pt=o=new hf(e._pt,t,n,r,l,Kf),o.e=u,o.u=`deg`,e._props.push(n),o},Gp=function(e,t){for(var n in t)e[n]=t[n];return e},Kp=function(e,t,n){var r,i,a,o,s,c,l,u=Gp({},n._gsap),d=n.style;for(i in u.svg?(a=n.getAttribute(`transform`),n.setAttribute(`transform`,``),d[rp]=t,r=Fp(n,1),vp(n,rp),n.setAttribute(`transform`,a)):(a=getComputedStyle(n)[rp],d[rp]=t,r=Fp(n,1),d[rp]=a),Lf)(a=u[i])!==(o=r[i])&&`perspective,force3D,transformOrigin,svgOrigin`.indexOf(i)<0&&(s=td(a)===(l=td(o))?parseFloat(a):Sp(n,i,a,l),c=parseFloat(o),e._pt=new hf(e._pt,r,i,s,c-s,Gf),e._pt.u=l||0,e._props.push(i));Gp(r,u)},gu(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});Op[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return Cp(e,t,n)}),(s=a.join(` `)).split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}}),Xp={name:`css`,register:pp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x=this._props,S=e.style,C=n.vars.startAt;for(d in Mf||pp(),this.styles=this.styles||cp(e),b=this.styles.props,this.tween=n,t)if(d!==`autoRound`&&(o=t[d],!cu[d]||!Jd(d,t,n,r,e,i))){if(l=typeof o,u=Op[d],l===`function`&&(l=typeof(o=o.call(n,r,e,i))),l===`string`&&~o.indexOf(`random(`)&&(o=pd(o)),u)u(this,e,d,o,n)&&(y=1);else if(d.substr(0,2)===`--`)a=(getComputedStyle(e).getPropertyValue(d)+``).trim(),o+=``,Ed.lastIndex=0,Ed.test(a)||(f=td(a),p=td(o)),p?f!==p&&(a=Sp(e,d,a,p)+p):f&&(o+=f),this.add(S,`setProperty`,a,o,r,i,0,0,d),x.push(d),b.push(d,0,S[d]);else if(l!==`undefined`){if(C&&d in C?(a=typeof C[d]==`function`?C[d].call(n,r,e,i):C[d],Ml(a)&&~a.indexOf(`random(`)&&(a=pd(a)),td(a+``)||a===`auto`||(a+=Sl.units[d]||td(Cp(e,d))||``),(a+``).charAt(1)===`=`&&(a=Cp(e,d))):a=Cp(e,d),c=parseFloat(a),(m=l===`string`&&o.charAt(1)===`=`&&o.substr(0,2))&&(o=o.substr(2)),s=parseFloat(o),d in Wf&&(d===`autoAlpha`&&(c===1&&Cp(e,`visibility`)===`hidden`&&s&&(c=0),b.push(`visibility`,0,S.visibility),yp(this,S,`visibility`,c?`inherit`:`hidden`,s?`inherit`:`hidden`,!s)),d!==`scale`&&d!==`transform`&&~(d=Wf[d]).indexOf(`,`)&&(d=d.split(`,`)[0])),h=d in Lf)if(this.styles.save(d),l===`string`&&o.substring(0,6)===`var(--`&&(o=up(e,o.substring(4,o.indexOf(`)`))),s=parseFloat(o)),g||((_=e._gsap).renderTransform&&!t.parseTransform||Fp(e,t.parseTransform),v=!1!==t.smoothOrigin&&_.smooth,(g=this._pt=new hf(this._pt,S,rp,0,1,_.renderTransform,_,0,-1)).dep=1),d===`scale`)this._pt=new hf(this._pt,_,`scaleY`,_.scaleY,(m?yu(_.scaleY,m+s):s)-_.scaleY||0,Gf),this._pt.u=0,x.push(`scaleY`,d),d+=`X`;else{if(d===`transformOrigin`){b.push(ip,0,S[ip]),o=Ep(o),_.svg?Pp(e,o,0,v,0,this):((p=parseFloat(o.split(` `)[2])||0)!==_.zOrigin&&yp(this,_,`zOrigin`,_.zOrigin,p),yp(this,S,d,Ip(a),Ip(o)));continue}if(d===`svgOrigin`){Pp(e,o,1,v,0,this);continue}if(d in Ap){Wp(this,_,d,c,m?yu(c,m+o):o);continue}if(d===`smoothOrigin`){yp(this,_,`smooth`,_.smooth,o);continue}if(d===`force3D`){_[d]=o;continue}if(d===`transform`){Kp(this,o,e);continue}}else d in S||(d=fp(d)||d);if(h||(s||s===0)&&(c||c===0)&&!Uf.test(o)&&d in S)s||=0,(f=(a+``).substr((c+``).length))!==(p=td(o)||(d in Sl.units?Sl.units[d]:f))&&(c=Sp(e,d,a,p)),this._pt=new hf(this._pt,h?_:S,d,c,(m?yu(c,m+s):s)-c,h||p!==`px`&&d!==`zIndex`||!1===t.autoRound?Gf:Jf),this._pt.u=p||0,f!==p&&p!==`%`&&(this._pt.b=a,this._pt.r=qf);else if(d in S)wp.call(this,e,d,a,m?m+o:o);else if(d in e)this.add(e,d,a||e[d],m?m+o:o,r,i);else if(d!==`parseTransform`){Ql(d,o);continue}h||(d in S?b.push(d,0,S[d]):typeof e[d]==`function`?b.push(d,2,e[d]()):b.push(d,1,a||e[d])),x.push(d)}}y&&mf(this)},render:function(e,t){if(t.tween._time||!Ff())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Cp,aliases:Wf,getSetter:function(e,t,n){var r=Wf[t];return r&&r.indexOf(`,`)<0&&(t=r),t in Lf&&t!==ip&&(e._gsap.x||Cp(e,`x`))?n&&Pf===n?t===`scale`?ep:$f:(Pf=n||{})&&(t===`scale`?tp:np):e.style&&!Fl(e.style[t])?Zf:~t.indexOf(`-`)?Qf:of(e,t)},core:{_removeProperty:vp,_getMatrix:Np}},Of.utils.checkPrefix=fp,Of.core.getStyleSaver=cp,Yp=gu((qp=`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`)+`,`+(Jp=`rotation,rotationX,rotationY,skewX,skewY`)+`,transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,function(e){Lf[e]=1}),gu(Jp,function(e){Sl.units[e]=`deg`,Ap[e]=1}),Wf[Yp[13]]=qp+`,`+Jp,gu(`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`,function(e){var t=e.split(`:`);Wf[t[1]]=Yp[t[0]]}),gu(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){Sl.units[e]=`px`}),Of.registerPlugin(Xp),Zp=Of.registerPlugin(Xp)||Of,Zp.core.Tween,Qp=typeof document<`u`?x:a,$p=e=>e&&!Array.isArray(e)&&typeof e==`object`,em=[],tm={},nm=Zp,rm=(e,t=em)=>{let n=tm;$p(e)?(n=e,e=null,t=`dependencies`in n?n.dependencies:em):$p(t)&&(n=t,t=`dependencies`in n?n.dependencies:em),e&&typeof e!=`function`&&console.warn(`First parameter must be a function or config object`);let{scope:i,revertOnUpdate:a}=n,o=r(!1),s=r(nm.context(()=>{},i)),c=r(e=>s.current.add(null,e)),l=t&&t.length&&!a;return l&&Qp(()=>(o.current=!0,()=>s.current.revert()),em),Qp(()=>{if(e&&s.current.add(e,i),!l||!o.current)return()=>s.current.revert()},t),{context:s.current,contextSafe:c.current}},rm.register=e=>{nm=e},rm.headless=!0}));function am(e,t){let n=Math.max(e,1),r=t*Math.PI/360;return n/2/Math.tan(r)||1}function om(e,t,n){let r=Math.max(t,1),i=Math.max(n,1);e.aspect=r/i,e.fov=lm,e.position.set(0,0,am(i,e.fov)),e.updateProjectionMatrix()}function sm({preview:e=!1,image:t,animation:n={triggerMode:`appear`,startAlign:`top`,animationDuration:2,animationDelay:0,replay:!0},blobCount:i=3,style:o,borderRadius:s=0}){let l=r(null),u=r(null),f=r(null),p=r(null),h=r(null),_=r(null),{triggerMode:v,startAlign:y,animationDuration:b,animationDelay:x,replay:C}=n,w=r(null),T=r({width:0,height:0,zoom:0}),E=r(null),D=r(v),O=r(0),[k,A]=c(!1),[j,M]=c(!1),[N,P]=c(!1),[F,I]=c(!1),L=cm(t),R=ee.current()===ee.canvas,z=!!L;a(()=>{D.current=v},[v]),a(()=>{O.current+=1,P(!1),I(!1)},[]);let te=m(()=>{if(!u.current||!l.current)return null;let e=l.current,t=e.clientWidth||e.offsetWidth||1,n=e.clientHeight||e.offsetHeight||1,r=new Vs;f.current=r;let i=new Ns(lm,t/n,.1,2e3);om(i,t,n),h.current=i;let a=new il({canvas:u.current,alpha:!0,antialias:!0});a.setSize(t,n),a.setPixelRatio(Math.min(S.devicePixelRatio,2)),p.current=a;let o=new Ts(new $s(t,n,um,um),new Os({vertexShader:dm,fragmentShader:fm,uniforms:{uProgress:new dc(0),uSize:new dc(new ua(t,n)),uImageSize:new dc(new ua(1,1)),uTexture:new dc(null),uBlobCount:new dc(3)},transparent:!0}));return _.current=o,r.add(o),{scene:r,camera:i,renderer:a,mesh:o}},[]),ne=m(()=>{if(!L||!_.current){I(!1);return}I(!1),new cc().load(L,e=>{if(!_.current?.material)return;let t=_.current.material;if(e.image){let n=e.image.width||1,r=e.image.height||1;t.uniforms.uImageSize.value.set(n,r)}t.uniforms.uTexture.value=e,I(!0),p.current&&f.current&&h.current&&p.current.render(f.current,h.current)},void 0,e=>{console.error(`Texture loading error:`,e),I(!1)})},[L]),re=m((e,t)=>{if(!h.current||!p.current||!_.current)return;om(h.current,e,t),p.current.setSize(e,t),p.current.setPixelRatio(Math.min(S.devicePixelRatio,2)),_.current.geometry&&(_.current.geometry.dispose(),_.current.geometry=new $s(e,t,um,um));let n=_.current.material;n?.uniforms?.uSize&&n.uniforms.uSize.value.set(e,t)},[]),ie=r(!1),ae=m(()=>{!p.current||!f.current||!h.current||p.current.render(f.current,h.current)},[]),oe=m(()=>{ae(),ie.current?E.current=requestAnimationFrame(oe):E.current=null},[ae]),se=m(()=>{ie.current=!0,E.current||=requestAnimationFrame(oe)},[oe]),ce=m(()=>{ie.current=!1,E.current&&=(cancelAnimationFrame(E.current),null)},[]);a(()=>{if(!z){P(!1),I(!1);return}P(!1),I(!1),_.current?.material&&(_.current.material.uniforms.uProgress.value=+!!R)},[z,L,R]),a(()=>{if(!z){ce(),p.current&&=(p.current.dispose(),null),f.current&&=(f.current.clear(),null),_.current&&=null;return}te(),p.current&&f.current&&h.current&&ae();let e=setTimeout(()=>{ne()},0);return R&&_.current?.material&&(_.current.material.uniforms.uProgress.value=1),()=>{clearTimeout(e),ce(),p.current&&=(p.current.dispose(),null),f.current&&=(f.current.clear(),null)}},[z,R,te,ne,ce]),a(()=>{let e=l.current;if(!e)return;let t=()=>{let t=e.clientWidth||e.offsetWidth||1,n=e.clientHeight||e.offsetHeight||1,r=T.current;(Math.abs(t-r.width)>1||Math.abs(n-r.height)>1)&&(r.width=t,r.height=n,re(t,n),ae())};t();let n=new ResizeObserver(t);n.observe(e);let r=setInterval(()=>{let e=w.current?.getBoundingClientRect().width??20,n=T.current;Math.abs(e-n.zoom)>.5&&(n.zoom=e,t())},250);return()=>{n.disconnect(),clearInterval(r)}},[re]),a(()=>{if(!_.current?.material)return;let e=_.current.material,t=Math.min(10,Math.max(1,Math.round(i)));e.uniforms.uBlobCount.value=t},[i]),a(()=>{if(v!==`scroll`||R)return;let e=null,t=()=>{if(!l.current)return;let e=l.current.getBoundingClientRect(),t=S.innerHeight||0,n=t,r;r=y===`top`?e.top:y===`center`?e.top+e.height/2:e.bottom;let i=r<=n&&e.bottom>=0;A(i);let a=e.top>t;M(a)},n=()=>{e&&cancelAnimationFrame(e),e=requestAnimationFrame(t)},r=()=>t();return t(),S.addEventListener(`scroll`,n,{passive:!0}),S.addEventListener(`resize`,r),()=>{e&&cancelAnimationFrame(e),S.removeEventListener(`scroll`,n),S.removeEventListener(`resize`,r)}},[v,y,R]),a(()=>{if(!(!z||R||!F)&&v===`appear`&&!N){let e=setTimeout(()=>{P(!0)},10);return()=>clearTimeout(e)}},[v,N,z,R,F]),rm(()=>{if(R||v!==`appear`||!N||!F||!_.current?.material||!_.current.material.uniforms.uTexture.value)return;let e=_.current.material;se();let t=Zp.to(e.uniforms.uProgress,{value:1,duration:b,ease:`power2.out`,delay:x,onUpdate:ae,onComplete:()=>{ae(),ce()}});return()=>{t.kill(),ce()}},[N,F,b,x,v,R,ae,se,ce]);let le=r(null);return a(()=>{if(R||v!==`scroll`||!F||!_.current?.material||!_.current.material.uniforms.uTexture.value)return;let e=_.current.material,t=e.uniforms.uProgress.value;if(le.current&&(le.current.kill(),le.current=null,ce()),j){C&&t>.01&&(e.uniforms.uProgress.value=0,ae());return}return k&&t<.99&&(se(),le.current=Zp.to(e.uniforms.uProgress,{value:1,duration:b,ease:`power2.out`,onUpdate:ae,onComplete:()=>{ae(),ce(),le.current=null}})),()=>{le.current&&=(le.current.kill(),null),ce()}},[k,j,C,F,b,v,R,ae,se,ce]),a(()=>{if(!R||!_.current?.material)return;let t=_.current.material.uniforms,n=null;return e?(t.uProgress.value=0,se(),n=Zp.to(t.uProgress,{value:1,duration:b,ease:`power2.out`,delay:R?0:x,onUpdate:ae,onComplete:()=>{ae(),ce()}})):(Zp.killTweensOf(t.uProgress),ce(),t.uProgress.value=1,ae()),()=>{n?.kill(),ce()}},[e,R,b,ae,se,ce,x,b,i,t]),z?g(`div`,{ref:l,style:{...o,position:`relative`,width:`100%`,height:`100%`,overflow:`hidden`,display:`block`,margin:0,padding:0,borderRadius:`${s}px`},children:[d(`div`,{ref:w,style:{position:`absolute`,width:20,height:20,opacity:0,pointerEvents:`none`}}),d(`canvas`,{ref:u,style:{position:`absolute`,inset:0,width:`100%`,height:`100%`,display:`block`}})]}):d(je,{style:{position:`relative`,width:`100%`,height:`100%`,minWidth:0,minHeight:0,borderRadius:`${s}px`},title:`Blob Image Reveal`,subtitle:`Add an image to see the blob reveal effect`})}var cm,lm,um,dm,fm,pm=e((()=>{i(),v(),n(),ue(),Me(),im(),cm=e=>{if(e)return typeof e==`string`?e.trim()||void 0:e.src||void 0},lm=35,um=128,dm=`
varying vec2 vUv;

void main(){
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 clipPosition = projectionMatrix * viewPosition;
    gl_Position = clipPosition;
    vUv = uv;
}
`,fm=`
varying vec2 vUv;
uniform float uProgress;      // Animation progress [0..1]
uniform vec2 uSize;           // Container size in pixels
uniform vec2 uImageSize;      // Image dimensions for aspect ratio
uniform sampler2D uTexture;   // The image texture
uniform int uBlobCount;
#define PI 3.1415926538
#define TWO_PI 6.28318530718

// Creates wavy noise based on angle - adds organic feel to blob edges
float noise(vec2 point) {
    float frequency = 1.0;
    float angle = atan(point.y, point.x) + uProgress * PI;
    
    // Combine multiple wave frequencies for complex pattern
    float w0 = (cos(angle * frequency) + 1.0) / 2.0;
    float w1 = (sin(2.0 * angle * frequency) + 1.0) / 2.0;
    float w2 = (cos(3.0 * angle * frequency) + 1.0) / 2.0;
    return (w0 + w1 + w2) / 3.0;
}

// Smooth maximum function for organic blending
float softMax(float a, float b, float k) {
    return log(exp(k * a) + exp(k * b)) / k;
}

// Smooth minimum function - blends shapes together smoothly
float softMin(float a, float b, float k) {
    return -softMax(-a, -b, k);
}

// Signed distance field for a circle with noise
float circleSDF(vec2 pos, float rad) {
    float a = sin(uProgress * 0.2) * 0.25;
    float amt = 0.5 + a;
    float circle = length(pos);
    circle += noise(pos) * rad * amt;
    return circle;
}

// Creates circles arranged radially around the center
float radialCircles(vec2 p, float offset, float count) {
    float angle = (2.0 * PI) / count;
    float s = round(atan(p.y, p.x) / angle);
    float an = angle * s;
    vec2 q = vec2(offset * cos(an), offset * sin(an));
    vec2 pos = p - q;
    return circleSDF(pos, 15.0);
}

void main() {
    vec4 bg = vec4(0.0, 0.0, 0.0, 0.0);
    
    // Calculate "cover" UV coordinates (like CSS background-size: cover)
    vec2 coverUV = vUv;
    if (uSize.x > 0.0 && uSize.y > 0.0 && uImageSize.x > 0.0 && uImageSize.y > 0.0) {
        float containerAspect = uSize.x / uSize.y;
        float imageAspect = uImageSize.x / uImageSize.y;
        
        vec2 scale = vec2(1.0);
        if (containerAspect > imageAspect) {
            // Container is wider than image: scale to fill width, crop top/bottom
            scale.y = imageAspect / containerAspect;
        } else {
            // Container is taller than image: scale to fill height, crop left/right
            scale.x = containerAspect / imageAspect;
        }
        
        coverUV = (vUv - 0.5) * scale + 0.5;
    }

    vec4 texture = texture2D(uTexture, coverUV);
    vec2 coords = vUv * uSize;
    vec2 center = vec2(0.5) * uSize;

    // Apply easing to progress for natural animation curve
    float t = pow(uProgress, 2.5);
    // Use diagonal to ensure full coverage - need at least half diagonal to cover rectangle
    // Add extra margin to account for noise distortion
    float maxDim = sqrt(uSize.x * uSize.x + uSize.y * uSize.y);
    float rad = t * maxDim * 1.0;
    
    // Create main center circle (always present)
    float c1 = circleSDF(coords - center, rad);
    float k = 50.0 / max(uSize.x, uSize.y);
    float circle = c1;
    
    // Add extra blobs only if blobCount > 1
    int extraBlobs = uBlobCount - 1;
    for (int i = 0; i < 10; i++) {
        if (i >= extraBlobs) break;
        
        float idx = float(i);
        float total = float(extraBlobs);
        
        // Distribute evenly around the center with pseudo-random offset
        float baseAngle = idx * TWO_PI / max(total, 1.0);
        float jitter = fract(sin(idx * 127.1 + 311.7) * 43758.5453) * 0.5 - 0.25;
        float angle = baseAngle + jitter;
        
        // Position at varying distances from center
        float distRatio = 0.25 + 0.2 * fract(sin(idx * 43.3) * 12345.6);
        vec2 offset = vec2(cos(angle), sin(angle)) * distRatio * min(uSize.x, uSize.y);
        
        // Each extra blob is a simple circle
        float blobDist = length(coords - center - offset);
        float blobNoise = noise(coords - center - offset) * rad * 0.4;
        float blob = blobDist + blobNoise;
        
        circle = softMin(circle, blob, k);
    }

    // Create sharp edge at the blob boundary
    circle = step(circle, rad);
    
    // Mix background (transparent) with texture based on blob mask
    gl_FragColor = mix(bg, texture, circle);
}
`,_e(sm,{preview:{type:W.Boolean,title:`Preview`,defaultValue:!0,enabledTitle:`On`,disabledTitle:`Off`},image:{type:W.ResponsiveImage,title:`Image`},blobCount:{type:W.Number,title:`Blob Count`,min:1,max:10,step:1,defaultValue:3},borderRadius:{type:W.Number,title:`Radius`,min:0,max:100,step:1,defaultValue:0,unit:`px`},animation:{type:W.Object,title:`Animation`,description:`More components at [Framer University](https://frameruni.link/cc).`,controls:{triggerMode:{type:W.Enum,title:`Trigger`,options:[`appear`,`scroll`],optionTitles:[`Appear`,`Layer in View`],defaultValue:`appear`,displaySegmentedControl:!0,segmentedControlDirection:`vertical`},startAlign:{type:W.Enum,title:`Start At`,options:[`top`,`center`,`bottom`],optionTitles:[`Top`,`Center`,`Bottom`],defaultValue:`top`,displaySegmentedControl:!0,segmentedControlDirection:`horizontal`,hidden:e=>e.triggerMode!==`scroll`},animationDuration:{type:W.Number,title:`Duration`,min:.5,max:10,step:.1,defaultValue:2,unit:`s`},animationDelay:{type:W.Number,title:`Delay`,min:0,max:5,step:.1,defaultValue:0,unit:`s`,hidden:e=>e.triggerMode!==`appear`},replay:{type:W.Boolean,title:`Replay`,defaultValue:!0,hidden:e=>e.triggerMode!==`scroll`}}}}),sm.displayName=`Blob Image Reveal`}));function mm(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var hm,gm,_m,vm,ym,bm,xm,Sm,Cm,wm=e((()=>{v(),ue(),F(),n(),hm={tBHhWOGyV:{hover:!0,pressed:!0}},gm=`framer-QDPcH`,_m={tBHhWOGyV:`framer-v-19me4l0`},vm={bounce:.2,delay:0,duration:.4,type:`spring`},ym=({value:e,children:n})=>{let r=h(A),i=e??r.transition,a=t(()=>({...r,transition:i}),[JSON.stringify(i)]);return d(A.Provider,{value:a,children:n})},bm=C.create(o),xm=({height:e,id:t,width:n,...r})=>({...r}),Sm=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Cm=ie(p(function(e,t){let n=r(null),i=t??n,a=y(),{activeLocale:o,setLocale:s}=Te(),c=me(),{style:l,className:u,layoutId:f,variant:p,...m}=xm(e),{baseVariant:h,classNames:g,clearLoadingGesture:_,gestureHandlers:v,gestureVariant:b,isLoading:x,setGestureState:S,setVariant:C,variants:w}=R({defaultVariant:`tBHhWOGyV`,enabledGestures:hm,ref:i,variant:p,variantClassNames:_m}),T=Sm(e,w),E=ne(gm);return d(P,{id:f??a,children:d(bm,{animate:w,initial:!1,children:d(ym,{value:vm,children:d(he,{href:{webPageId:`UIEL7SjaR`},motionChild:!0,nodeId:`tBHhWOGyV`,openInNewTab:!1,scopeId:`ZpuY3fYL9`,children:d(U,{...m,...v,as:`a`,background:{alt:`burger in foil background fill`,fit:`fill`,loading:B(c?.y||0),pixelHeight:1234,pixelWidth:1024,sizes:c?.width||`100vw`,src:`./gdUx6rALI3FrP7JAvefnJYqbcpo.png`,srcSet:`./assets/gdUx6rALI3FrP7JAvefnJYqbcpo.png 849w,./gdUx6rALI3FrP7JAvefnJYqbcpo.png 1024w`},className:`${ne(E,`framer-19me4l0`,u,g)} framer-t85ku1`,"data-framer-name":`Variant 1`,draggable:`false`,layoutDependency:T,layoutId:`tBHhWOGyV`,ref:i,style:{filter:`none`,WebkitFilter:`none`,...l},variants:{"tBHhWOGyV-hover":{filter:`brightness(1.08) invert(1)`,WebkitFilter:`brightness(1.08) invert(1)`},"tBHhWOGyV-pressed":{filter:`brightness(1.08) invert(1)`,WebkitFilter:`brightness(1.08) invert(1)`}},...mm({"tBHhWOGyV-hover":{"data-framer-name":void 0},"tBHhWOGyV-pressed":{"data-framer-name":void 0}},h,b)})})})})})}),[`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,`.framer-QDPcH.framer-t85ku1, .framer-QDPcH .framer-t85ku1 { display: block; }`,`.framer-QDPcH.framer-19me4l0 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 294px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 244px; }`],`framer-QDPcH`),Cm.displayName=`Folder Button`,Cm.defaultProps={height:294,width:244},re(Cm,[{explicitInter:!0,fonts:[]}],{supportsExplicitInterCodegen:!0})}));function Tm(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm=e((()=>{v(),ue(),F(),n(),We(),pm(),wm(),Em=le(sm),Dm=le(Cm),Om=I(L),km=I(U),Am=te(I(U)),jm=I(C.div),Mm=le(K),Nm=[`ih5NuunEf`,`KILeEEp7P`,`UOGgcJgH2`,`SbTI1nzYy`],Pm=`framer-cc5El`,Fm={ih5NuunEf:`framer-v-1qyiuox`,KILeEEp7P:`framer-v-2nzeii`,SbTI1nzYy:`framer-v-f2u0ux`,UOGgcJgH2:`framer-v-fc4qws`},Im={bounce:0,delay:0,duration:.8,type:`spring`},Lm=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{src:e}:void 0,Rm={bounce:0,delay:0,duration:1,type:`spring`},zm={bounce:0,delay:2,duration:1,type:`spring`},Bm={bounce:0,delay:2,duration:.8,type:`spring`},Vm=({value:e,children:n})=>{let r=h(A),i=e??r.transition,a=t(()=>({...r,transition:i}),[JSON.stringify(i)]);return d(A.Provider,{value:a,children:n})},Hm={opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:{bounce:0,delay:.8,duration:.8,type:`spring`},x:0,y:0},Um={opacity:.001,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0},Wm={bounce:0,delay:.6,duration:.8,type:`spring`},Gm=(e,t)=>{if(!(!e||typeof e!=`object`))return{...e,alt:t}},Km={"Desktop Active":`KILeEEp7P`,"Tablet Active":`SbTI1nzYy`,Desktop:`ih5NuunEf`,Tablet:`UOGgcJgH2`},qm=C.create(o),Jm=({height:e,id:t,image1:n,image1Trigger:r,image2:i,image2Trigger:a,image3:o,image3Trigger:s,image4:c,image4Trigger:l,image5:u,image5Trigger:d,image6:f,image6Trigger:p,image7Trigger:m,width:h,...g})=>({...g,apjdwVM2I:l??g.apjdwVM2I,cpuF7gHcP:u??g.cpuF7gHcP??{pixelHeight:1536,pixelWidth:2752,src:`./V6brFN1sUTtWclER5CztgqGkl7k.jpg`,srcSet:`./assets/V6brFN1sUTtWclER5CztgqGkl7k.jpg 512w,./V6brFN1sUTtWclER5CztgqGkl7k.jpg 1024w,./V6brFN1sUTtWclER5CztgqGkl7k.jpg 2048w,./V6brFN1sUTtWclER5CztgqGkl7k.jpg 2752w`},DNyd3CD3l:i??g.DNyd3CD3l??{pixelHeight:900,pixelWidth:1600,src:`./rIZjxqx6Ee5GzxVpcXF1cutMKGA.png`,srcSet:`./assets/rIZjxqx6Ee5GzxVpcXF1cutMKGA.png 512w,./rIZjxqx6Ee5GzxVpcXF1cutMKGA.png 1024w,./rIZjxqx6Ee5GzxVpcXF1cutMKGA.png 1600w`},JIGj567On:n??g.JIGj567On??{pixelHeight:1536,pixelWidth:2730,src:`./rcqC39e5KiREdFQb1zokcnybA.png`,srcSet:`./assets/rcqC39e5KiREdFQb1zokcnybA.png 512w,./rcqC39e5KiREdFQb1zokcnybA.png 1024w,./rcqC39e5KiREdFQb1zokcnybA.png 2048w,./rcqC39e5KiREdFQb1zokcnybA.png 2730w`},JzbbE_wb2:p??g.JzbbE_wb2,LB54Dk4aO:c??g.LB54Dk4aO??{pixelHeight:1038,pixelWidth:1304,src:`./0HIkwbNptdFnP981NnyYWopeA.png`,srcSet:`./assets/0HIkwbNptdFnP981NnyYWopeA.png 512w,./0HIkwbNptdFnP981NnyYWopeA.png 1024w,./0HIkwbNptdFnP981NnyYWopeA.png 1304w`},PMNpoDEt_:o??g.PMNpoDEt_??{pixelHeight:1536,pixelWidth:2752,src:`./ORV4oURvqzxvePobv8oIxr8C5o.png`,srcSet:`./assets/ORV4oURvqzxvePobv8oIxr8C5o.png 512w,./ORV4oURvqzxvePobv8oIxr8C5o.png 1024w,./ORV4oURvqzxvePobv8oIxr8C5o.png 2048w,./ORV4oURvqzxvePobv8oIxr8C5o.png 2752w`},rPgcXt15u:f??g.rPgcXt15u??{pixelHeight:1080,pixelWidth:1920,src:`./eDpiWrqEMMYor0uQWfrCvWHc.jpg`,srcSet:`./assets/eDpiWrqEMMYor0uQWfrCvWHc.jpg 512w,./eDpiWrqEMMYor0uQWfrCvWHc.jpg 1024w,./eDpiWrqEMMYor0uQWfrCvWHc.jpg 1920w`},SzbWf_oN9:d??g.SzbWf_oN9,T3pCHqKTl:m??g.T3pCHqKTl,tEVmfxj6J:s??g.tEVmfxj6J,TNi2Vejqb:a??g.TNi2Vejqb,variant:Km[g.variant]??g.variant??`ih5NuunEf`,ZaksUSpNr:r??g.ZaksUSpNr}),Ym=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),Xm=ie(p(function(e,t){let n=r(null),i=t??n,a=y(),{activeLocale:o,setLocale:s}=Te(),c=me(),{style:l,className:u,layoutId:f,variant:p,JIGj567On:m,DNyd3CD3l:h,PMNpoDEt_:_,LB54Dk4aO:v,cpuF7gHcP:b,rPgcXt15u:x,ZaksUSpNr:S,TNi2Vejqb:w,tEVmfxj6J:T,apjdwVM2I:E,SzbWf_oN9:D,JzbbE_wb2:O,T3pCHqKTl:k,...A}=Jm(e),{baseVariant:j,classNames:M,clearLoadingGesture:N,gestureHandlers:F,gestureVariant:I,isLoading:ee,setGestureState:z,setVariant:te,variants:re}=R({cycleOrder:Nm,defaultVariant:`ih5NuunEf`,ref:i,variant:p,variantClassNames:Fm}),ie=Ym(e,re),ae=ne(Pm),oe=()=>!![`KILeEEp7P`,`SbTI1nzYy`].includes(j),se=()=>![`KILeEEp7P`,`UOGgcJgH2`,`SbTI1nzYy`].includes(j);return d(P,{id:f??a,children:d(qm,{animate:re,initial:!1,children:d(Vm,{value:Im,children:g(C.div,{...A,...F,className:ne(ae,`framer-1qyiuox`,u,M),"data-framer-name":`Desktop`,layoutDependency:ie,layoutId:`ih5NuunEf`,ref:i,style:{...l},...Tm({KILeEEp7P:{"data-framer-name":`Desktop Active`},SbTI1nzYy:{"data-framer-name":`Tablet Active`},UOGgcJgH2:{"data-framer-name":`Tablet`}},j,I),children:[d(Vm,{value:Rm,...Tm({KILeEEp7P:{value:zm},SbTI1nzYy:{value:Bm}},j,I),children:d(U,{background:{alt:``,fit:`fill`,loading:B((c?.y||0)+(0+((c?.height||1200)-0-((c?.height||1200)-0)*1)/2)),pixelHeight:1536,pixelWidth:2730,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(m)},className:`framer-sqtwkb`,"data-framer-name":`Image 1 Bg`,layoutDependency:ie,layoutId:`QKwQHDLNf`,style:{opacity:0},variants:{KILeEEp7P:{opacity:1},SbTI1nzYy:{opacity:1}},...Tm({SbTI1nzYy:{background:{alt:``,fit:`fill`,loading:B((c?.y||0)+(0+((c?.height||1086)-0-((c?.height||1086)-0)*1)/2)),pixelHeight:1536,pixelWidth:2730,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(m)}},UOGgcJgH2:{background:{alt:``,fit:`fill`,loading:B((c?.y||0)+(0+((c?.height||1086)-0-((c?.height||1086)-0)*1)/2)),pixelHeight:1536,pixelWidth:2730,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(m)}}},j,I)})}),g(jm,{__framer__spring:{bounce:0,damping:60,delay:0,duration:.8,durationBasedSpring:!0,ease:[.44,0,.56,1],mass:1,stagger:0,stiffness:500,type:`spring`},__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0}},{ref:S,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1.4,skewX:0,skewY:0,x:0,y:0}}],__framer__transformTrigger:`onScrollTarget`,__framer__transformViewportThreshold:1,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:0,className:`framer-c0vawd`,"data-framer-name":`Images Wrapper`,layoutDependency:ie,layoutId:`wd2am1TTs`,style:{opacity:0},variants:{KILeEEp7P:{opacity:1},SbTI1nzYy:{opacity:1}},...Tm({KILeEEp7P:{__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0}},{ref:S,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1.3,skewX:0,skewY:0,x:0,y:0}}],__targetOpacity:1},SbTI1nzYy:{__targetOpacity:1}},j,I),children:[oe()&&d(de,{children:d(L,{className:`framer-14jkxol-container`,"data-framer-name":`Blob Reveal Image 1`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:ie,layoutId:`DZTblC0nU-container`,name:`Blob Reveal Image 1`,nodeId:`DZTblC0nU`,rendersWithMotion:!0,scopeId:`fIg19A_Tv`,children:d(sm,{animation:{animationDelay:0,animationDuration:2,replay:!0,startAlign:`bottom`,triggerMode:`appear`},blobCount:6,borderRadius:0,height:`100%`,id:`DZTblC0nU`,image:Lm(m),layoutId:`DZTblC0nU`,name:`Blob Reveal Image 1`,preview:!0,style:{height:`100%`,width:`100%`},width:`100%`})})}),oe()&&d(Vm,{value:Wm,children:d(Am,{__framer__spring:{bounce:0,damping:100,delay:0,duration:.8,durationBasedSpring:!0,ease:[.44,0,.56,1],mass:1,stiffness:215,type:`spring`},__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:.8,skewX:0,skewY:0,x:0,y:0}},{ref:w,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1.3,skewX:0,skewY:0,x:0,y:0}}],__framer__transformTrigger:`onScrollTarget`,__framer__transformViewportThreshold:1,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,animate:Hm,background:{alt:`hybrid of thermal imaging, liquid light shows`,fit:`fill`,pixelHeight:900,pixelWidth:1600,...Lm(h)},className:`framer-ry8eeq`,"data-framer-appear-id":`ry8eeq`,"data-framer-name":`Image 2`,draggable:`false`,initial:Um,layoutDependency:ie,layoutId:`Wq4CwUdYU`,optimized:!0,...Tm({KILeEEp7P:{background:{alt:`hybrid of thermal imaging, liquid light shows`,fit:`fill`,loading:B((c?.y||0)+0+0),pixelHeight:900,pixelWidth:1600,sizes:c?.width||`100vw`,...Lm(h)}},SbTI1nzYy:{__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:.8,skewX:0,skewY:0,x:0,y:0}},{ref:w,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1.2,skewX:0,skewY:0,x:0,y:0}}],background:{alt:`hybrid of thermal imaging, liquid light shows`,fit:`fill`,loading:B((c?.y||0)+0+0),pixelHeight:900,pixelWidth:1600,sizes:c?.width||`100vw`,...Lm(h)}}},j,I),children:d(km,{__framer__spring:{damping:100,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:215,type:`spring`},__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:0,y:0}},{ref:T,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:.7,skewX:0,skewY:0,x:0,y:0}}],__framer__transformTrigger:`onScrollTarget`,__framer__transformViewportThreshold:1,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,background:{alt:`hybrid of thermal imaging, liquid light shows`,fit:`fill`,pixelHeight:1536,pixelWidth:2752,...Lm(_)},className:`framer-dzxb4l`,"data-framer-name":`Image 3`,draggable:`false`,layoutDependency:ie,layoutId:`PAs4mRSvd`,...Tm({KILeEEp7P:{background:{alt:`hybrid of thermal imaging, liquid light shows`,fit:`fill`,loading:B((c?.y||0)+0+0+0),pixelHeight:1536,pixelWidth:2752,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(_)}},SbTI1nzYy:{__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:0,y:0}},{ref:T,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0}}],background:{alt:`hybrid of thermal imaging, liquid light shows`,fit:`fill`,loading:B((c?.y||0)+0+0+0),pixelHeight:1536,pixelWidth:2752,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(_)}}},j,I),children:d(km,{__framer__spring:{damping:100,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:215,type:`spring`},__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:0,y:0}},{ref:E,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:.9,skewX:0,skewY:0,x:0,y:0}}],__framer__transformTrigger:`onScrollTarget`,__framer__transformViewportThreshold:1,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,background:{alt:`hybrid of thermal imaging, liquid light shows`,fit:`fit`,pixelHeight:1038,pixelWidth:1304,...Lm(v),positionX:`center`,positionY:`center`},className:`framer-xp3lsw`,"data-framer-name":`Image 4`,draggable:`false`,layoutDependency:ie,layoutId:`oksVAYAbX`,...Tm({KILeEEp7P:{background:{alt:`hybrid of thermal imaging, liquid light shows`,fit:`fit`,loading:B((c?.y||0)+0+0+0+0),pixelHeight:1038,pixelWidth:1304,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(v),positionX:`center`,positionY:`center`}},SbTI1nzYy:{__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:0,y:0}},{ref:E,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0}}],background:{alt:`hybrid of thermal imaging, liquid light shows`,fit:`fit`,loading:B((c?.y||0)+0+0+0+0),pixelHeight:1038,pixelWidth:1304,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(v),positionX:`center`,positionY:`center`}}},j,I),children:d(km,{__framer__spring:{damping:100,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:215,type:`spring`},__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:42,y:52}},{ref:D,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1.2,skewX:0,skewY:0,x:0,y:0}}],__framer__transformTrigger:`onScrollTarget`,__framer__transformViewportThreshold:1,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,background:{alt:`mushroom texture`,fit:`fit`,pixelHeight:1536,pixelWidth:2752,...Lm(b),positionX:`center`,positionY:`center`},className:`framer-1hk8v6m`,"data-framer-name":`Image 5`,draggable:`false`,layoutDependency:ie,layoutId:`uDc6NheSw`,...Tm({KILeEEp7P:{background:{alt:`mushroom texture`,fit:`fit`,loading:B((c?.y||0)+0+0+0+0+0),pixelHeight:1536,pixelWidth:2752,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(b),positionX:`center`,positionY:`center`}},SbTI1nzYy:{__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:20,y:20}},{ref:D,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:0}}],background:{alt:`mushroom texture`,fit:`fill`,loading:B((c?.y||0)+0+0+0+0+0),pixelHeight:1536,pixelWidth:2752,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(b)}}},j,I),children:d(km,{__framer__spring:{damping:100,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:215,type:`spring`},__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:0,y:0}},{ref:O,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:1.05,skewX:0,skewY:0,x:0,y:0}}],__framer__transformTrigger:`onScrollTarget`,__framer__transformViewportThreshold:1,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,background:{alt:`ether preview`,fit:`fit`,pixelHeight:1080,pixelWidth:1920,...Lm(x),positionX:`center`,positionY:`center`},className:`framer-ge9xmu`,"data-framer-name":`Image 6`,draggable:`false`,layoutDependency:ie,layoutId:`cXIuwJqpG`,...Tm({KILeEEp7P:{background:{alt:`ether preview`,fit:`fit`,loading:B((c?.y||0)+0+0+0+0+0+0+0),pixelHeight:1080,pixelWidth:1920,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(x),positionX:`center`,positionY:`center`}},SbTI1nzYy:{__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:0,y:0}},{ref:O,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:.8,skewX:0,skewY:0,x:0,y:0}}],background:{alt:`ether preview`,fit:`fill`,loading:B((c?.y||0)+0+0+0+0+0+0+0),pixelHeight:1080,pixelWidth:1920,sizes:`max(${c?.width||`100vw`}, 1px)`,...Lm(x)}}},j,I),children:d(de,{width:`244px`,children:d(Om,{__framer__spring:{damping:100,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:215,type:`spring`},__framer__styleTransformEffectEnabled:!0,__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:0,y:0}},{ref:k,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:.4,skewX:0,skewY:0,x:0,y:0}}],__framer__transformTrigger:`onScrollTarget`,__framer__transformViewportThreshold:1,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,className:`framer-1iqaqjd-container`,layoutDependency:ie,layoutId:`inhTU82ch-container`,nodeId:`inhTU82ch`,rendersWithMotion:!0,scopeId:`fIg19A_Tv`,...Tm({SbTI1nzYy:{__framer__transformTargets:[{target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:0,skewX:0,skewY:0,x:0,y:0}},{ref:k,target:{opacity:1,rotate:0,rotateX:0,rotateY:0,scale:.3,skewX:0,skewY:0,x:0,y:0}}]}},j,I),children:d(Cm,{height:`100%`,id:`inhTU82ch`,layoutId:`inhTU82ch`,style:{width:`100%`},width:`100%`})})})})})})})})})]}),se()&&d(de,{children:d(L,{className:`framer-krsrqk-container`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:ie,layoutId:`L2EYAf8DO-container`,nodeId:`L2EYAf8DO`,rendersWithMotion:!0,scopeId:`fIg19A_Tv`,children:d(K,{animation:{in:{from:{blur:0,is3D:`2D`,opacity:0,rotate2D:0,rotate3D:{x:0,y:0,z:0},scale:.95},to:{blur:0,is3D:`2D`,opacity:1,rotate2D:0,rotate3D:{x:0,y:0,z:0},scale:1},transition:{damping:49,delay:0,mass:1,stiffness:239,type:`spring`}},out:{blur:0,is3D:`2D`,opacity:0,rotate2D:0,rotate3D:{x:0,y:0,z:0},scale:.8,transition:{delay:0,duration:.4,ease:[.84,0,.24,1],type:`tween`}}},frequency:24,height:`100%`,id:`L2EYAf8DO`,images:[Gm({pixelHeight:241,pixelWidth:250,src:`./assets/AV6GV3HjI01uwfSIJJEEhzIeoQ.png`},``),Gm({pixelHeight:297,pixelWidth:250,src:`./assets/wKlOC0shqRvElpM7hQEDjJ24Vc.png`},``),Gm({pixelHeight:298,pixelWidth:250,src:`./assets/UyXu2W6aDyZw5p9eqeJt58mGQ.png`},``),Gm({pixelHeight:446,pixelWidth:250,src:`./assets/5jPwF2Jh6NPavXk5ldymJTmHL9w.png`},``),Gm({pixelHeight:166,pixelWidth:250,src:`./assets/6Ok8x3BV8Syb204eRvEdJ4YRKbs.png`},``),Gm({pixelHeight:375,pixelWidth:250,src:`./assets/jz4yFQrHvJpofYi7ipVK4eQo.png`},``),Gm({pixelHeight:233,pixelWidth:250,src:`./assets/kg71MUObro1X7vAaFfD5lz7Q.png`},``),Gm({pixelHeight:140,pixelWidth:250,src:`./assets/kmr1LRbL09iz4brSKhZgGl5cHpM.png`},``),Gm({pixelHeight:250,pixelWidth:250,src:`./assets/kwMBW7iuti4mVcJcut1riB0Tdzk.png`},``),Gm({pixelHeight:140,pixelWidth:250,src:`./assets/XeH3mIHIfpfv3GUpISf83ZHiJs.png`},``),Gm({pixelHeight:446,pixelWidth:250,src:`./assets/QsfmDKIfEzwCdAZ4YNzImQ8eow.png`},``),Gm({pixelHeight:313,pixelWidth:250,src:`./assets/g08cYA5nHjQMAf0iQ7B8yyRbfg.png`},``)],layoutId:`L2EYAf8DO`,perspective:{enabled:!1,value:1200},style:{fit:`fill`,height:150,radius:0,width:150},visibleFor:.5,width:`100%`})})})]})})})})}),[`.framer-cc5El.framer-b8pmz8, .framer-cc5El .framer-b8pmz8 { display: block; }`,`.framer-cc5El.framer-1qyiuox { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1200px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1800px; }`,`.framer-cc5El .framer-sqtwkb { flex: 1 0 0px; height: 100%; position: relative; width: 1px; z-index: 1; }`,`.framer-cc5El .framer-c0vawd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 2; }`,`.framer-cc5El .framer-14jkxol-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 2; }`,`.framer-cc5El .framer-ry8eeq, .framer-cc5El .framer-ge9xmu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 3; }`,`.framer-cc5El .framer-dzxb4l { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); z-index: 3; }`,`.framer-cc5El .framer-xp3lsw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); z-index: 3; }`,`.framer-cc5El .framer-1hk8v6m { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); z-index: 3; }`,`.framer-cc5El .framer-1iqaqjd-container { flex: none; height: auto; position: relative; width: 244px; z-index: 3; }`,`.framer-cc5El .framer-krsrqk-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 2; }`,`.framer-cc5El.framer-v-2nzeii .framer-sqtwkb { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; order: 0; padding: 0px; }`,`.framer-cc5El.framer-v-2nzeii .framer-c0vawd { order: 1; }`,`.framer-cc5El.framer-v-2nzeii .framer-14jkxol-container { z-index: 1; }`,`.framer-cc5El.framer-v-2nzeii .framer-ry8eeq { z-index: 2; }`,`.framer-cc5El.framer-v-fc4qws.framer-1qyiuox, .framer-cc5El.framer-v-f2u0ux.framer-1qyiuox { height: 1086px; width: 810px; }`],`framer-cc5El`),Xm.displayName=`Reveal Animation`,Xm.defaultProps={height:1200,width:1800},_e(Xm,{variant:{options:[`ih5NuunEf`,`KILeEEp7P`,`UOGgcJgH2`,`SbTI1nzYy`],optionTitles:[`Desktop`,`Desktop Active`,`Tablet`,`Tablet Active`],title:`Variant`,type:W.Enum},JIGj567On:{__defaultAssetReference:`data:framer/asset-reference,rcqC39e5KiREdFQb1zokcnybA.png?originalFilename=1.png&width=2730&height=1536`,title:`Image 1`,type:W.ResponsiveImage},DNyd3CD3l:{__defaultAssetReference:`data:framer/asset-reference,rIZjxqx6Ee5GzxVpcXF1cutMKGA.png?originalFilename=peach.png&width=1600&height=900`,title:`Image 2`,type:W.ResponsiveImage},PMNpoDEt_:{__defaultAssetReference:`data:framer/asset-reference,ORV4oURvqzxvePobv8oIxr8C5o.png?originalFilename=3_new.png&width=2752&height=1536`,title:`Image 3`,type:W.ResponsiveImage},LB54Dk4aO:{__defaultAssetReference:`data:framer/asset-reference,0HIkwbNptdFnP981NnyYWopeA.png?originalFilename=4_alt.png&width=1304&height=1038`,title:`Image 4`,type:W.ResponsiveImage},cpuF7gHcP:{__defaultAssetReference:`data:framer/asset-reference,V6brFN1sUTtWclER5CztgqGkl7k.jpg?originalFilename=6.jpg&width=2752&height=1536`,title:`Image 5`,type:W.ResponsiveImage},rPgcXt15u:{__defaultAssetReference:`data:framer/asset-reference,eDpiWrqEMMYor0uQWfrCvWHc.jpg?originalFilename=5.jpg&width=1920&height=1080`,title:`Image 6`,type:W.ResponsiveImage},ZaksUSpNr:{title:`Image 1 Trigger`,type:W.ScrollSectionRef},TNi2Vejqb:{title:`Image 2 Trigger`,type:W.ScrollSectionRef},tEVmfxj6J:{title:`Image 3 Trigger`,type:W.ScrollSectionRef},apjdwVM2I:{title:`Image 4 Trigger`,type:W.ScrollSectionRef},SzbWf_oN9:{title:`Image 5 Trigger`,type:W.ScrollSectionRef},JzbbE_wb2:{title:`Image 6 Trigger`,type:W.ScrollSectionRef},T3pCHqKTl:{title:`Image 7 Trigger`,type:W.ScrollSectionRef}}),re(Xm,[{explicitInter:!0,fonts:[]},...Em,...Dm,...Mm],{supportsExplicitInterCodegen:!0}),Xm.loader={load:(e,t)=>(t.locale,Promise.allSettled([z(Cm,{},t)]))}}));function Qm(e){let{image:t,alt:n,radius:r,padding:i,link:a,newTab:o,style:s,borderOptions:c,shadowOptions:l}=e,u={display:`flex`,placeContent:`center`,placeItems:`center`,width:`100%`,height:`100%`,padding:i},f=(e,t)=>{if(!(!t&&!e)){if(t&&!e)return`${t.shadowX}px ${t.shadowY}px ${t.shadowBlur}px ${t.shadowColor}`;if(!t&&e)return`inset 0 0 0 ${e.borderWidth}px ${e.borderColor}`;if(t&&e)return`inset 0 0 0 ${e.borderWidth}px ${e.borderColor}, ${t.shadowX}px ${t.shadowY}px ${t.shadowBlur}px ${t.shadowColor}`}},p={maxWidth:`100%`,maxHeight:`100%`,borderRadius:r,webkitUserDrag:`none`,userDrag:`none`,userSelect:`none`},m={position:`absolute`,inset:0,pointerEvents:`none`,borderRadius:r,boxShadow:f(c,l)},h=t?.src||`./assets/64n4wnVJKDJspLlFZ6DarCP0M4.jpg`;return a?g(`a`,{href:a,title:n,target:o?`_blank`:`_self`,style:u,children:[d(`img`,{style:p,src:h,srcSet:t?.srcSet,alt:n}),d(`div`,{style:m})]}):g(`div`,{style:u,children:[d(`img`,{style:p,src:h,srcSet:t?.srcSet,alt:n}),d(`div`,{style:m})]})}var $m=e((()=>{v(),ue(),_e(Qm,{image:{title:`Image`,type:W.ResponsiveImage},alt:{type:W.String,title:`Alt`,placeholder:`Alt Text`},radius:{title:`Radius`,type:W.Number,min:0,max:100,step:1,displayStepper:!0},padding:{title:`Padding`,type:W.Number,min:0,max:100,step:1,displayStepper:!0},link:{type:W.Link,title:`Link`},newTab:{type:W.Boolean,title:`New Tab`,hidden:e=>!e.link},borderOptions:{type:W.Object,optional:!0,title:`Border`,icon:`effect`,controls:{borderColor:{type:W.Color,title:`Color`,defaultValue:`rgba(0,0,0,0.2)`},borderWidth:{type:W.Number,title:`Width`,min:0,displayStepper:!0,defaultValue:1}}},shadowOptions:{type:W.Object,title:`Shadow`,optional:!0,icon:`effect`,controls:{shadowX:{type:W.Number,title:`X`,min:0,defaultValue:0},shadowY:{type:W.Number,title:`Y`,min:0,defaultValue:2},shadowBlur:{type:W.Number,title:`Blur`,min:0,defaultValue:4},shadowColor:{type:W.Color,title:`Color`,defaultValue:`rgba(0,0,0,0.2)`}}}})})),eh,th,nh=e((()=>{eh=e=>e,th=e=>typeof e==`function`})),rh=e((()=>{nh()})),ih=e((()=>{rh()}));function ah(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}var oh=e((()=>{})),sh,ch=e((()=>{sh={},Object.defineProperty(sh,"__esModule",{value:!0}),sh.warning=function(){},sh.invariant=function(){},sh.__esModule,sh.warning,sh.invariant})),lh=e((()=>{nh()}));function uh(e,t){return typeof e==`string`?t?(t[e]??(t[e]=document.querySelectorAll(e)),e=t[e]):e=document.querySelectorAll(e):e instanceof Element&&(e=[e]),Array.from(e||[])}function dh(e,t,{root:n,margin:r,amount:i=`any`}={}){if(typeof IntersectionObserver>`u`)return()=>{};let a=uh(e),o=new WeakMap,s=new IntersectionObserver(e=>{e.forEach((e=>{let n=o.get(e.target);if(e.isIntersecting!==!!n)if(e.isIntersecting){let n=t(e);th(n)?o.set(e.target,n):s.unobserve(e.target)}else n&&(n(e),o.delete(e.target))}))},{root:n,rootMargin:r,threshold:typeof i==`number`?i:Nh[i]});return a.forEach((e=>s.observe(e))),()=>s.disconnect()}function fh(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&`getBBox`in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}function ph({target:e,contentRect:t,borderBoxSize:n}){var r;(r=Ph.get(e))==null||r.forEach((r=>{r({target:e,contentSize:t,get size(){return fh(e,n)}})}))}function mh(e){e.forEach(ph)}function hh(){typeof ResizeObserver<`u`&&(Fh=new ResizeObserver(mh))}function gh(e,t){Fh||hh();let n=uh(e);return n.forEach((e=>{let n=Ph.get(e);n||(n=new Set,Ph.set(e,n)),n.add(t),Fh?.observe(e)})),()=>{n.forEach((e=>{let n=Ph.get(e);n?.delete(t),n!=null&&n.size||Fh==null||Fh.unobserve(e)}))}}function _h(){Lh=()=>{let e={width:S.innerWidth,height:S.innerHeight},t={target:S,size:e,contentSize:e};Ih.forEach((e=>e(t)))},S.addEventListener(`resize`,Lh)}function vh(e){return Ih.add(e),Lh||_h(),()=>{Ih.delete(e),!Ih.size&&Lh&&(Lh=void 0)}}function yh(e,t){return th(e)?vh(e):gh(e,t)}function bh(e,t,n){e.dispatchEvent(new CustomEvent(t,{detail:{originalEvent:n}}))}function xh(e,t,n){e.dispatchEvent(new CustomEvent(t,{detail:{originalEntry:n}}))}var Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh=e((()=>{i(),nh(),ih(),oh(),ch(),lh(),Sh=[``,`X`,`Y`,`Z`],Ch=[`translate`,`scale`,`rotate`,`skew`],wh={syntax:`<angle>`,initialValue:`0deg`,toDefaultUnit:e=>e+`deg`},Th={translate:{syntax:`<length-percentage>`,initialValue:`0px`,toDefaultUnit:e=>e+`px`},rotate:wh,scale:{syntax:`<number>`,initialValue:1,toDefaultUnit:eh},skew:wh},Eh=new Map,Dh=e=>`--motion-${e}`,Oh=[`x`,`y`,`z`],Ch.forEach((e=>{Sh.forEach((t=>{Oh.push(e+t),Eh.set(Dh(e+t),Th[e])}))})),new Set(Oh),kh=(e,t)=>document.createElement(`div`).animate(e,t),Ah={cssRegisterProperty:()=>typeof CSS<`u`&&Object.hasOwnProperty.call(CSS,`registerProperty`),waapi:()=>Object.hasOwnProperty.call(Element.prototype,`animate`),partialKeyframes:()=>{try{kh({opacity:[1]})}catch{return!1}return!0},finished:()=>!!kh({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{kh({opacity:0},{easing:`linear(0, 1)`})}catch{return!1}return!0}},jh={},Mh={};for(let e in Ah)Mh[e]=()=>(jh[e]===void 0&&(jh[e]=Ah[e]()),jh[e]);Nh={any:0,all:1},Ph=new WeakMap,Ih=new Set,Rh={isActive:e=>!!e.inView,subscribe:(e,{enable:t,disable:n},{inViewOptions:r={}})=>{let{once:i}=r;return dh(e,(r=>{if(t(),xh(e,`viewenter`,r),!i)return t=>{n(),xh(e,`viewleave`,t)}}),ah(r,[`once`]))}},zh=(e,t,n)=>r=>{(!r.pointerType||r.pointerType===`mouse`)&&(n(),bh(e,t,r))},Bh={inView:Rh,hover:{isActive:e=>!!e.hover,subscribe:(e,{enable:t,disable:n})=>{let r=zh(e,`hoverstart`,t),i=zh(e,`hoverend`,n);return e.addEventListener(`pointerenter`,r),e.addEventListener(`pointerleave`,i),()=>{e.removeEventListener(`pointerenter`,r),e.removeEventListener(`pointerleave`,i)}}},press:{isActive:e=>!!e.press,subscribe:(e,{enable:t,disable:n})=>{let r=t=>{n(),bh(e,`pressend`,t),S.removeEventListener(`pointerup`,r)},i=n=>{t(),bh(e,`pressstart`,n),S.addEventListener(`pointerup`,r)};return e.addEventListener(`pointerdown`,i),()=>{e.removeEventListener(`pointerdown`,i),S.removeEventListener(`pointerup`,r)}}}},[...Object.keys(Bh)]}));function Hh(){throw Error(`A function wrapped in useEffectEvent can't be called during rendering.`)}function Uh(e){let t=u.useRef(Hh);return u.useInsertionEffect((()=>{t.current=e}),[e]),(...e)=>{Gh()&&Hh();let n=t.current;return n(...e)}}var Wh,Gh,Kh=e((()=>{n(),Wh=u.createContext(!0),Gh=`use`in u?()=>{try{return u.use(Wh)}catch{return!1}}:()=>!1}));function qh(e){let{slots:t=[],startFrom:n,direction:i,effectsOptions:o,autoPlayControl:s,dragControl:l,widthSizing:u,heightSizing:p,alignment:h,gap:_,padding:v,paddingPerSide:y,paddingTop:O,paddingRight:A,paddingBottom:N,paddingLeft:P,itemAmount:F,fadeOptions:I,intervalControl:L,transitionControl:R,arrowOptions:z,borderRadius:te,progressOptions:ne,style:re}=e,{effectsOpacity:ie,effectsScale:ae,effectsRotate:oe,effectsPerspective:se,effectsHover:ce,playOffscreen:le}=o,{fadeContent:B,overflow:ue,fadeWidth:V,fadeInset:de,fadeAlpha:H}=I,{showMouseControls:fe,arrowSize:pe,arrowRadius:me,arrowFill:he,leftArrow:ge,rightArrow:_e,arrowShouldSpace:ve=!0,arrowShouldFadeIn:ye=!1,arrowPosition:U,arrowPadding:W,arrowGap:be,arrowPaddingTop:xe,arrowPaddingRight:Se,arrowPaddingBottom:Ce,arrowPaddingLeft:we}=z,{showProgressDots:Te,dotSize:Ee,dotsInset:De,dotsRadius:Oe,dotsPadding:G,dotsGap:ke,dotsFill:Ae,dotsBackground:je,dotsActiveOpacity:Me,dotsOpacity:Ne,dotsBlur:Pe}=ne,Fe=y?`${O}px ${A}px ${N}px ${P}px`:`${v}px`,Ie=ee.current()===ee.canvas,Le=t.filter(Boolean),Re=b.count(Le);if(!(Re>0))return g(`section`,{style:ig,children:[d(`div`,{style:ag,children:`⭐️`}),d(`p`,{style:og,children:`Connect to Content`}),d(`p`,{style:sg,children:`Add layers or components to make infinite auto-playing slideshows.`})]});let ze=r(null),Be=r(null),Ve=m(e=>{ze.current=e,ze.current&&rt()},[]),[He,Ue]=c({parent:null,children:null,item:null,itemWidth:null,itemHeight:null,viewportLength:null}),K=i===`left`||i===`right`,We=Yh(),Ge=K&&We===`rtl`?-1:1,[Ke,qe]=c(!1),[Je,q]=c(s),[Ye,Xe]=c(!1),Ze=He?.item!==null&&He?.parent!==null&&We!==null,J=Math.ceil((n+F)/Re),Qe=[],$e=J*4;(Ie||!Ze)&&($e=J);let[et,tt]=c(n+Re);a(()=>{if(!He.item||!We)return;let e=-1*et*((He.item??0)+_)*(We===`rtl`?-1:1);ut.get()!==e&&j(ut,e,R)},[et,He.item,_,We]);let nt=()=>{let e=Be.current;if(!e)return;let t=e.width,n=e.height,r=K?t:n,i=Math.max(1,F),a=Math.max(0,(r-_*(i-1))/i),o=Re*(a+_),s=K?a:t,c=K?n:a,l=K?Math.max(document.documentElement.clientWidth||0,S.innerWidth||0,t):Math.max(document.documentElement.clientHeight||0,S.innerHeight||0,n);Ue({parent:r,children:o,item:a,itemWidth:s,itemHeight:c,viewportLength:l})},rt=Uh(()=>{M.read(nt,!1,!0)});x(()=>{rt()},[Le.length,F,_,i,v,y,O,A,N,P]),a(()=>{let e=ze.current;if(e)return yh(e,({size:e})=>{Be.current=e,!(!e.width||!e.height)&&rt()})},[]);let it=Ie?0:He?.children,[at,ot]=c(!1),st=r(null),ct=E(st),lt=D()&&ct,ut=T(it),dt=Ie?T(0):k(ut,e=>{let t=it??0,n=e??0,r=w(-t*Ge,-t*Ge*2,n);return Number.isNaN(r)?0:r}),ft=w(0,Re,et),pt=e=>{f(()=>tt(t=>t+e))},mt=e=>{let t=e-w(0,Re,et);f(()=>tt(e=>e+t))},ht=(i===`right`||i===`bottom`?-1:1)*Ge,gt=s&&Je&&(le||lt)&&!Ie&&Re>1&&!at&&Ze;a(()=>{if(!gt)return;let e=setTimeout(()=>{pt(ht)},L*1e3);return()=>clearTimeout(e)},[gt,ht,L,et]);let _t=()=>{f(()=>ot(!0))},vt=(e,{offset:t,velocity:n})=>{f(()=>ot(!1));let r=K?t.x:t.y,i=K?n.x:n.y,a=r<-He.item/2,o=r>He.item/2,s=Math.round(Math.abs(r)/He.item),c=s===0?1:s;i>200?pt(-c*Ge):i<-200?pt(c*Ge):(a&&pt(s*Ge),o&&pt(-s*Ge))},yt=Math.max(0,Math.min(n??0,Math.max(0,Re-1))),bt=yt*100/F,xt=yt*_/F,St=0,Ct=`calc(${100/F}% - ${_}px + ${_/F}px)`,wt=K?p:u;for(let e=0;e<$e;e++)Qe=Qe.concat(b.map(Le,(t,n)=>{let r=t,i=wt===`fit`?K?r.props?.height:r.props?.width:`100%`;return d(dg,{slideKey:e+n+`lg`,index:e,width:K?F>1?Ct:`100%`:i,height:K?i:F>1?Ct:`100%`,size:He,child:t,numChildren:Le?.length,wrappedXOrY:dt,childCounter:St++,gap:_,isCanvas:Ie,isInitialized:Ze,isHorizontal:K,effectsOpacity:ie,effectsScale:ae,effectsRotate:oe,writingDirection:We,rtlDirectionModifier:Ge,children:e+n},e+n+`lg`)}));let Tt=K?`to right`:`to bottom`,Et=V/2,Dt=100-V/2,Ot=`linear-gradient(${Tt}, rgba(0, 0, 0, ${H}) ${ug(de,0,Et)}%, rgba(0, 0, 0, 1) ${Et}%, rgba(0, 0, 0, 1) ${Dt}%, rgba(0, 0, 0, ${H}) ${100-de}%)`,kt=[],At={};if(Te){for(let e=0;e<Le?.length;e++)kt.push(d(fg,{dotStyle:{...mg,width:Ee,height:Ee,backgroundColor:Ae},buttonStyle:cg,selectedOpacity:Me,opacity:Ne,disabled:!Ie&&!Ze,onClick:()=>mt(e),wrappedIndex:Ie||!Ze?yt:ft,total:Re,index:e,gap:ke,padding:G,isHorizontal:K},e));Pe>0&&(At.backdropFilter=At.WebkitBackdropFilter=`blur(${Pe}px)`)}let jt=Ze&&l?{drag:K?`x`:`y`,onDragStart:_t,onDragEnd:vt,dragDirectionLock:!0,values:{x:ut,y:ut},dragMomentum:!1}:{},Mt=U===`top-left`||U===`top-mid`||U===`top-right`,Nt=U===`bottom-left`||U===`bottom-mid`||U===`bottom-right`,Pt=U===`top-left`||U===`bottom-left`,Ft=U===`top-right`||U===`bottom-right`,It=U===`top-mid`||U===`bottom-mid`||U===`auto`,Lt=ge||`./assets/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,Rt=_e||`./assets/11KSGbIZoRSg4pjdnUoif6MKHI.svg`;return g(`section`,{className:`${Zh} ${K?Qh:$h}`,style:{...rg,padding:Fe,WebkitMaskImage:B?Ot:void 0,maskImage:B?Ot:void 0,userSelect:`none`},onMouseEnter:()=>{qe(!0),ce||q(!1)},onMouseLeave:()=>{qe(!1),ce||q(!0)},onMouseDown:e=>{e.preventDefault(),f(()=>Xe(!0))},onMouseUp:()=>f(()=>Xe(!1)),ref:st,children:[d(`div`,{style:{width:`100%`,height:`100%`,margin:0,padding:`inherit`,position:`absolute`,inset:0,overflow:ue?`visible`:`hidden`,borderRadius:te,userSelect:`none`,perspective:Ie?`none`:se},children:d(C.ul,{ref:Ve,...jt,style:{...rg,gap:_,placeItems:h,...Ie||!Ze?{transform:K?`translateX(calc(${tg} * (${bt}% + ${xt}px)))`:`translateY(calc(${tg} * (${bt}% + ${xt}px)))`}:{x:K?dt:0,y:K?0:dt},flexDirection:K?`row`:`column`,transformStyle:oe!==0&&!Ie?`preserve-3d`:void 0,cursor:(Ie||Ze)&&l?Ye?`grabbing`:`grab`:`auto`,userSelect:`none`,...re},children:Qe})}),g(`fieldset`,{style:{...lg},"aria-label":`Slideshow pagination controls`,className:`framer--slideshow-controls`,children:[g(C.div,{style:{position:`absolute`,display:`flex`,flexDirection:K?`row`:`column`,justifyContent:ve?`space-between`:`center`,gap:ve?`unset`:be,opacity:ye||!Ie&&!Ze?0:1,alignItems:`center`,inset:W,top:ve?W:Mt?xe:`unset`,left:ve?W:Pt?we:It?0:`unset`,right:ve?W:Ft?Se:It?0:`unset`,bottom:ve?W:Nt?Ce:`unset`},animate:Ie||Ze?ye?{opacity:+!!Ke}:{opacity:1}:{opacity:0},transition:R,children:[d(C.button,{type:`button`,style:{...cg,backgroundColor:he,width:pe,height:pe,borderRadius:me,rotate:K?0:90,display:fe?`block`:`none`,pointerEvents:Ie||Ze?`auto`:`none`,cursor:Ie||Ze?`pointer`:`default`},disabled:!(Ie||Ze),onClick:()=>pt(-1),"aria-label":`Previous`,whileTap:{scale:.9},transition:{duration:.15},children:d(`img`,{decoding:`async`,width:pe,height:pe,src:K&&We===`rtl`?Rt:Lt,alt:`Back Arrow`})}),d(C.button,{type:`button`,style:{...cg,backgroundColor:he,width:pe,height:pe,borderRadius:me,rotate:K?0:90,display:fe?`block`:`none`,pointerEvents:Ie||Ze?`auto`:`none`,cursor:Ie||Ze?`pointer`:`default`},disabled:!(Ie||Ze),onClick:()=>pt(1),"aria-label":`Next`,whileTap:{scale:.9},transition:{duration:.15},children:d(`img`,{decoding:`async`,width:pe,height:pe,src:K&&We===`rtl`?Lt:Rt,alt:`Next Arrow`})})]}),kt.length>1?d(C.div,{style:{...pg,left:K?`50%`:De,top:K?`unset`:`50%`,transform:K?`translateX(-50%)`:`translateY(-50%)`,flexDirection:K?`row`:`column`,bottom:K?De:`unset`,borderRadius:Oe,backgroundColor:je,userSelect:`none`,...At,opacity:+!!Ie,pointerEvents:Ie||Ze?`auto`:`none`},animate:{opacity:+!!Ze},transition:{duration:.35,ease:`easeOut`},children:kt}):null]})]})}function Jh(){return S?.document?.documentElement?.dir===`rtl`?`rtl`:`ltr`}function Yh(){let[e,t]=c(null);return a(()=>(t(Jh()),Xh(()=>{t(Jh())})),[]),e}function Xh(e){return gg.push(e),hg||(hg=new MutationObserver(()=>gg.forEach(e=>e())),hg.observe(document.documentElement,{attributeFilter:[`dir`]})),()=>{gg.splice(gg.indexOf(e),1),gg.length===0&&(hg?.disconnect(),hg=null)}}var Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g=e((()=>{i(),v(),Vh(),ue(),F(),n(),Kh(),Zh=`framer-slideshow`,Qh=`framer-slideshow-axis-x`,$h=`framer-slideshow-axis-y`,eg=`--framer-dir-multiplier`,tg=`var(${eg}, -1)`,ng=ie(qh,[`.${Qh} { ${eg}: -1; }`,`html[dir="rtl"] .${Qh} { ${eg}: 1; }`,`.${$h} { ${eg}: -1; }`],`framer-slideshow-component`),ng.defaultProps={direction:`left`,widthSizing:`fill`,heightSizing:`fill`,dragControl:!1,startFrom:0,itemAmount:1,infinity:!0,gap:10,padding:10,autoPlayControl:!0,effectsOptions:{effectsOpacity:1,effectsScale:1,effectsRotate:0,effectsPerspective:1200,effectsHover:!0,playOffscreen:!1},transitionControl:{type:`spring`,stiffness:200,damping:40},fadeOptions:{fadeContent:!1,overflow:!1,fadeWidth:25,fadeAlpha:0,fadeInset:0},arrowOptions:{showMouseControls:!0,arrowShouldFadeIn:!1,arrowShouldSpace:!0,arrowFill:`rgba(0,0,0,0.2)`,arrowSize:40},progressOptions:{showProgressDots:!0}},_e(ng,{slots:{type:W.Array,title:`Content`,control:{type:W.ComponentInstance}},direction:{type:W.Enum,title:`Direction`,options:[`left`,`right`,`top`,`bottom`],optionIcons:[`direction-left`,`direction-right`,`direction-up`,`direction-down`],optionTitles:[`Left`,`Right`,`Top`,`Bottom`],displaySegmentedControl:!0,defaultValue:ng.defaultProps.direction},autoPlayControl:{type:W.Boolean,title:`Auto Play`,defaultValue:!0},intervalControl:{type:W.Number,title:`Interval`,defaultValue:1.5,min:.5,max:10,step:.1,displayStepper:!0,unit:`s`,hidden:e=>!e.autoPlayControl},dragControl:{type:W.Boolean,title:`Draggable`,defaultValue:!1},startFrom:{type:W.Number,title:`Current`,min:0,max:10,displayStepper:!0,defaultValue:ng.defaultProps.startFrom},effectsOptions:{type:W.Object,title:`Effects`,controls:{effectsOpacity:{type:W.Number,title:`Opacity`,defaultValue:ng.defaultProps.effectsOptions.effectsOpacity,min:0,max:1,step:.01,displayStepper:!0},effectsScale:{type:W.Number,title:`Scale`,defaultValue:ng.defaultProps.effectsOptions.effectsScale,min:0,max:1,step:.01,displayStepper:!0},effectsPerspective:{type:W.Number,title:`Perspective`,defaultValue:ng.defaultProps.effectsOptions.effectsPerspective,min:200,max:2e3,step:1},effectsRotate:{type:W.Number,title:`Rotate`,defaultValue:ng.defaultProps.effectsOptions.effectsRotate,min:-180,max:180,step:1},effectsHover:{type:W.Boolean,title:`On Hover`,enabledTitle:`Play`,disabledTitle:`Pause`,defaultValue:ng.defaultProps.effectsOptions.effectsHover},playOffscreen:{type:W.Boolean,title:`Offscreen`,enabledTitle:`Play`,disabledTitle:`Pause`,defaultValue:ng.defaultProps.effectsOptions.playOffscreen}}},widthSizing:{type:W.Enum,title:`Width`,options:[`fill`,`fit`],optionTitles:[`Fill`,`Fit`],defaultValue:ng.defaultProps.widthSizing,displaySegmentedControl:!0,hidden:e=>e.direction===`left`||e.direction===`right`},heightSizing:{type:W.Enum,title:`Height`,options:[`fill`,`fit`],optionTitles:[`Fill`,`Fit`],defaultValue:ng.defaultProps.heightSizing,displaySegmentedControl:!0,hidden:e=>e.direction===`top`||e.direction===`bottom`},alignment:{type:W.Enum,title:`Align`,hidden:e=>(e.direction===`left`||e.direction===`right`?e.heightSizing:e.widthSizing)!==`fit`,options:[`flex-start`,`center`,`flex-end`],optionIcons:{direction:{right:[`align-top`,`align-middle`,`align-bottom`],left:[`align-top`,`align-middle`,`align-bottom`],top:[`align-left`,`align-center`,`align-right`],bottom:[`align-left`,`align-center`,`align-right`]}},defaultValue:`center`,displaySegmentedControl:!0},itemAmount:{type:W.Number,title:`Items`,min:1,max:10,displayStepper:!0,defaultValue:ng.defaultProps.itemAmount},gap:{type:W.Number,title:`Gap`,min:0},padding:{title:`Padding`,type:W.FusedNumber,toggleKey:`paddingPerSide`,toggleTitles:[`Padding`,`Padding per side`],defaultValue:0,valueKeys:[`paddingTop`,`paddingRight`,`paddingBottom`,`paddingLeft`],valueLabels:[`T`,`R`,`B`,`L`],min:0},borderRadius:{type:W.Number,title:`Radius`,min:0,max:500,displayStepper:!0,defaultValue:0},transitionControl:{type:W.Transition,defaultValue:ng.defaultProps.transitionControl,title:`Transition`},fadeOptions:{type:W.Object,title:`Clipping`,controls:{fadeContent:{type:W.Boolean,title:`Fade`,defaultValue:!1},overflow:{type:W.Boolean,title:`Overflow`,enabledTitle:`Show`,disabledTitle:`Hide`,defaultValue:!1,hidden(e){return e.fadeContent===!0}},fadeWidth:{type:W.Number,title:`Width`,defaultValue:25,min:0,max:100,unit:`%`,hidden(e){return e.fadeContent===!1}},fadeInset:{type:W.Number,title:`Inset`,defaultValue:0,min:0,max:100,unit:`%`,hidden(e){return e.fadeContent===!1}},fadeAlpha:{type:W.Number,title:`Opacity`,defaultValue:0,min:0,max:1,step:.05,hidden(e){return e.fadeContent===!1}}}},arrowOptions:{type:W.Object,title:`Arrows`,controls:{showMouseControls:{type:W.Boolean,title:`Show`,defaultValue:ng.defaultProps.arrowOptions.showMouseControls},arrowFill:{type:W.Color,title:`Fill`,hidden:e=>!e.showMouseControls,defaultValue:ng.defaultProps.arrowOptions.arrowFill},leftArrow:{type:W.Image,title:`Previous`,hidden:e=>!e.showMouseControls},rightArrow:{type:W.Image,title:`Next`,hidden:e=>!e.showMouseControls},arrowSize:{type:W.Number,title:`Size`,min:0,max:200,displayStepper:!0,defaultValue:ng.defaultProps.arrowOptions.arrowSize,hidden:e=>!e.showMouseControls},arrowRadius:{type:W.Number,title:`Radius`,min:0,max:500,defaultValue:40,hidden:e=>!e.showMouseControls},arrowShouldFadeIn:{type:W.Boolean,title:`Fade In`,defaultValue:!1,hidden:e=>!e.showMouseControls},arrowShouldSpace:{type:W.Boolean,title:`Distance`,enabledTitle:`Space`,disabledTitle:`Group`,defaultValue:ng.defaultProps.arrowOptions.arrowShouldSpace,hidden:e=>!e.showMouseControls},arrowPosition:{type:W.Enum,title:`Position`,options:[`auto`,`top-left`,`top-mid`,`top-right`,`bottom-left`,`bottom-mid`,`bottom-right`],optionTitles:[`Center`,`Top Left`,`Top Middle`,`Top Right`,`Bottom Left`,`Bottom Middle`,`Bottom Right`],hidden:e=>!e.showMouseControls||e.arrowShouldSpace},arrowPadding:{type:W.Number,title:`Inset`,min:-100,max:100,defaultValue:20,displayStepper:!0,hidden:e=>!e.showMouseControls||!e.arrowShouldSpace},arrowPaddingTop:{type:W.Number,title:`Top`,min:-500,max:500,defaultValue:0,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace||e.arrowPosition===`auto`||e.arrowPosition===`bottom-mid`||e.arrowPosition===`bottom-left`||e.arrowPosition===`bottom-right`},arrowPaddingBottom:{type:W.Number,title:`Bottom`,min:-500,max:500,defaultValue:0,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace||e.arrowPosition===`auto`||e.arrowPosition===`top-mid`||e.arrowPosition===`top-left`||e.arrowPosition===`top-right`},arrowPaddingRight:{type:W.Number,title:`Right`,min:-500,max:500,defaultValue:0,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace||e.arrowPosition===`auto`||e.arrowPosition===`top-left`||e.arrowPosition===`top-mid`||e.arrowPosition===`bottom-left`||e.arrowPosition===`bottom-mid`},arrowPaddingLeft:{type:W.Number,title:`Left`,min:-500,max:500,defaultValue:0,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace||e.arrowPosition===`auto`||e.arrowPosition===`top-right`||e.arrowPosition===`top-mid`||e.arrowPosition===`bottom-right`||e.arrowPosition===`bottom-mid`},arrowGap:{type:W.Number,title:`Gap`,min:0,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showMouseControls||e.arrowShouldSpace}}},progressOptions:{type:W.Object,title:`Dots`,controls:{showProgressDots:{type:W.Boolean,title:`Show`,defaultValue:!1},dotSize:{type:W.Number,title:`Size`,min:1,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsInset:{type:W.Number,title:`Inset`,min:-100,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsGap:{type:W.Number,title:`Gap`,min:0,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsPadding:{type:W.Number,title:`Padding`,min:0,max:100,defaultValue:10,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsFill:{type:W.Color,title:`Fill`,defaultValue:`#fff`,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsBackground:{type:W.Color,title:`Backdrop`,defaultValue:`rgba(0,0,0,0.2)`,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsRadius:{type:W.Number,title:`Radius`,min:0,max:200,defaultValue:50,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsOpacity:{type:W.Number,title:`Opacity`,min:0,max:1,defaultValue:.5,step:.1,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsActiveOpacity:{type:W.Number,title:`Current`,min:0,max:1,defaultValue:1,step:.1,displayStepper:!0,hidden:e=>!e.showProgressDots||e.showScrollbar},dotsBlur:{type:W.Number,title:`Blur`,min:0,max:50,defaultValue:0,step:1,hidden:e=>!e.showProgressDots||e.showScrollbar}}}}),rg={display:`flex`,flexDirection:`row`,width:`100%`,height:`100%`,maxWidth:`100%`,maxHeight:`100%`,placeItems:`center`,margin:0,padding:0,listStyleType:`none`,textIndent:`none`},ig={display:`flex`,width:`100%`,height:`100%`,placeContent:`center`,placeItems:`center`,flexDirection:`column`,color:`#96F`,background:`rgba(136, 85, 255, 0.1)`,fontSize:11,overflow:`hidden`,padding:`20px 20px 30px 20px`},ag={fontSize:32,marginBottom:10},og={margin:0,marginBottom:10,fontWeight:600,textAlign:`center`},sg={margin:0,opacity:.7,maxWidth:180,lineHeight:1.5,textAlign:`center`},cg={border:`none`,display:`flex`,placeContent:`center`,placeItems:`center`,overflow:`hidden`,background:`transparent`,cursor:`pointer`,margin:0,padding:0},lg={display:`flex`,justifyContent:`space-between`,alignItems:`center`,position:`absolute`,pointerEvents:`none`,userSelect:`none`,top:0,left:0,right:0,bottom:0,border:0,padding:0,margin:0},ug=(e,t,n)=>Math.min(Math.max(e,t),n),dg=_(function(e){let{slideKey:t,width:n,height:i,child:o,size:c,gap:l,wrappedXOrY:u,numChildren:f,childCounter:p,isCanvas:m,isInitialized:h,effectsOpacity:g,effectsScale:_,effectsRotate:v,isHorizontal:y,index:b,writingDirection:x,rtlDirectionModifier:S}=e,C=r(null),w=c?.item??0,T=c?.parent??0,E=(w+l)*p,D=(y&&x===`rtl`?[w-l,0,-T+w-l,-T-l]:[-w,0,T-w+l,T]).map(e=>e-E*S),A=!m&&k(u,D,y&&x===`rtl`?[v,0,0,-v]:[-v,0,0,v]),j=!m&&k(u,D,[v,0,0,-v]),M=!m&&k(u,D,[g,1,1,g]),N=!m&&k(u,D,[_,1,1,_]),F=!m&&k(u,D,y&&x===`rtl`?[0,0,1,1]:[1,1,0,0]),I=!m&&k(u,e=>{let t=Math.min(D[1],D[2]),n=Math.max(D[1],D[2]);return e>=t&&e<=n});a(()=>{if(!I||!h)return;function e(e){let t=C?.current;t&&(e?t.querySelectorAll(`button,a`).forEach(e=>{let t=e.dataset.origTabIndex;t?e.tabIndex=Number(t):e.removeAttribute(`tabIndex`)}):t.querySelectorAll(`button,a`).forEach(e=>{let t=e.getAttribute(`tabIndex`);t&&(e.dataset.origTabIndex=t),e.tabIndex=-1}),t.setAttribute(`aria-hidden`,String(!e)))}return e(I.get()),I.on(`change`,t=>{e(t)})},[h]);let ee=m?`visible`:k(u,[D[0]-c.viewportLength*S,O(D[1],D[2],.5),D[3]+c.viewportLength*S],[`hidden`,`visible`,`hidden`]),L=t+`child`;return d(P,{inherit:`id`,id:L,children:d(`li`,{style:{display:`contents`},children:s(o,{ref:C,key:L,style:{...o.props?.style,flexShrink:0,userSelect:`none`,width:n,height:i,...h?{opacity:M,scale:N,originX:y?F:.5,originY:y?.5:F,rotateY:y?A:0,rotateX:y?0:j,visibility:ee}:{}},layoutId:o.props.layoutId?o.props.layoutId+`-original-`+b:void 0})})})}),fg=_(function({selectedOpacity:e,opacity:t,total:n,index:r,wrappedIndex:i,dotStyle:a,buttonStyle:o,gap:s,padding:c,isHorizontal:l,...u}){let f=i===r,p=s/2,m=!l&&r!==0?p:c,h=!l&&r!==n-1?p:c,g=l?r===0?c:p:c,_=l?r===n-1?c:p:c;return d(`button`,{"aria-label":`Scroll to page ${r+1}`,type:`button`,...u,style:{...o,paddingTop:m,paddingBottom:h,paddingInlineStart:g,paddingInlineEnd:_},children:d(C.div,{style:{...a},initial:!1,animate:{opacity:f?e:t},transition:{duration:.3}})})}),pg={display:`flex`,placeContent:`center`,placeItems:`center`,overflow:`hidden`,position:`absolute`,pointerEvents:`auto`},mg={borderRadius:`50%`,background:`white`,cursor:`pointer`,border:`none`,placeContent:`center`,placeItems:`center`,padding:0},hg=null,gg=[]}));function vg(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg=e((()=>{v(),ue(),F(),n(),$m(),_g(),yg=le(Qm),bg=le(ng),xg=[`qBdYPytJr`,`ojhyxEvds`,`lyV1NaZBG`,`ulffoL0Fn`,`XGJGpRGJZ`,`H6rxxk1uk`,`ijYzDuSjU`],Sg=`framer-Q0bTl`,Cg={H6rxxk1uk:`framer-v-xy2jnm`,ijYzDuSjU:`framer-v-ttoty4`,lyV1NaZBG:`framer-v-1clm8kz`,ojhyxEvds:`framer-v-5m5un0`,qBdYPytJr:`framer-v-1ifny2d`,ulffoL0Fn:`framer-v-1qlugvd`,XGJGpRGJZ:`framer-v-1artrxu`},wg={bounce:.2,delay:0,duration:.3,type:`spring`},Tg={delay:0,duration:.6,ease:[.44,0,.56,1],type:`tween`},Eg={delay:0,duration:1,ease:[.84,0,.24,1],type:`tween`},Dg=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{src:e}:void 0,Og={delay:.4,duration:1,ease:[.84,0,.24,1],type:`tween`},kg=({value:e,children:n})=>{let r=h(A),i=e??r.transition,a=t(()=>({...r,transition:i}),[JSON.stringify(i)]);return d(A.Provider,{value:a,children:n})},Ag=(e,t)=>{if(!(!e||typeof e!=`object`))return{...e,alt:t}},jg={delay:0,duration:.4,ease:[.84,0,.24,1],type:`tween`},Mg={delay:0,duration:0,ease:[.84,0,.24,1],type:`tween`},Ng={damping:60,delay:0,mass:1,stiffness:150,type:`spring`},Pg={delay:0,duration:1,ease:[.5,0,.88,.77],type:`tween`},Fg={"Desktop - 1":`qBdYPytJr`,"Desktop - 2":`ojhyxEvds`,"Desktop - 3":`lyV1NaZBG`,"Tablet - 1":`ulffoL0Fn`,"Tablet - 2":`XGJGpRGJZ`,"Tablet - 3":`H6rxxk1uk`,"Tablet - 4":`ijYzDuSjU`},Ig=C.create(o),Lg=({height:e,id:t,logo:n,width:r,...i})=>({...i,sCU1uzhMo:n??i.sCU1uzhMo??{pixelHeight:645,pixelWidth:1308,src:`./assets/wi2sg9rdfZWxOdvkteCVwurNqLw.svg`,srcSet:`./assets/wi2sg9rdfZWxOdvkteCVwurNqLw.svg 512w,./wi2sg9rdfZWxOdvkteCVwurNqLw.svg 1024w,./wi2sg9rdfZWxOdvkteCVwurNqLw.svg 1308w`},variant:Fg[i.variant]??i.variant??`qBdYPytJr`}),Rg=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),zg=ie(p(function(e,t){let n=r(null),i=t??n,a=y(),{activeLocale:o,setLocale:s}=Te();me();let{style:c,className:l,layoutId:u,variant:f,sCU1uzhMo:p,...m}=Lg(e),{baseVariant:h,classNames:_,clearLoadingGesture:v,gestureHandlers:b,gestureVariant:x,isLoading:S,setGestureState:w,setVariant:T,variants:E}=R({cycleOrder:xg,defaultVariant:`qBdYPytJr`,ref:i,variant:f,variantClassNames:Cg}),D=Rg(e,E),{activeVariantCallback:O,delay:k}=xe(h),A=O(async(...e)=>{await k(()=>T(`ojhyxEvds`),400)}),j=O(async(...e)=>{await k(()=>T(`lyV1NaZBG`,!0),1e3)}),M=O(async(...e)=>{await k(()=>T(`XGJGpRGJZ`,!0),400)}),N=O(async(...e)=>{await k(()=>T(`H6rxxk1uk`,!0),800)});oe(h,{default:A,H6rxxk1uk:O(async(...e)=>{await k(()=>T(`ijYzDuSjU`,!0),600)}),ijYzDuSjU:void 0,lyV1NaZBG:void 0,ojhyxEvds:j,ulffoL0Fn:M,XGJGpRGJZ:N});let F=ne(Sg),I=()=>![`ulffoL0Fn`,`XGJGpRGJZ`,`H6rxxk1uk`,`ijYzDuSjU`].includes(h),ee=()=>!![`ulffoL0Fn`,`XGJGpRGJZ`,`H6rxxk1uk`,`ijYzDuSjU`].includes(h),z=()=>h===`ijYzDuSjU`;return d(P,{id:u??a,children:d(Ig,{animate:E,initial:!1,children:d(kg,{value:wg,...vg({ijYzDuSjU:{value:Tg}},h,x),children:g(C.div,{...m,...b,className:ne(F,`framer-1ifny2d`,l,_),"data-framer-name":`Desktop - 1`,"data-highlight":!0,layoutDependency:D,layoutId:`qBdYPytJr`,ref:i,style:{...c},...vg({H6rxxk1uk:{"data-framer-name":`Tablet - 3`},ijYzDuSjU:{"data-framer-name":`Tablet - 4`,"data-highlight":void 0},lyV1NaZBG:{"data-framer-name":`Desktop - 3`,"data-highlight":void 0},ojhyxEvds:{"data-framer-name":`Desktop - 2`},ulffoL0Fn:{"data-framer-name":`Tablet - 1`},XGJGpRGJZ:{"data-framer-name":`Tablet - 2`}},h,x),children:[I()&&d(kg,{value:Eg,...vg({lyV1NaZBG:{value:Og}},h,x),children:d(de,{children:d(L,{className:`framer-1gph9rt-container`,"data-framer-name":`Logo desktop`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:D,layoutId:`dVfMucq85-container`,name:`Logo desktop`,nodeId:`dVfMucq85`,rendersWithMotion:!0,scopeId:`gvFhFWijk`,style:{scale:.7},variants:{lyV1NaZBG:{scale:1}},children:d(Qm,{alt:``,height:`100%`,id:`dVfMucq85`,image:Dg(p),layoutId:`dVfMucq85`,name:`Logo desktop`,newTab:!0,padding:0,radius:0,style:{width:`100%`},width:`100%`})})})}),ee()&&g(C.div,{className:`framer-1xedu3t`,"data-framer-name":`Mobile`,layoutDependency:D,layoutId:`gQufQWb1T`,style:{scale:1},variants:{H6rxxk1uk:{scale:.6},ijYzDuSjU:{scale:1},ulffoL0Fn:{scale:.6},XGJGpRGJZ:{scale:.6}},children:[d(de,{children:d(L,{className:`framer-1956nn5-container`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:D,layoutId:`dwgwH7fsJ-container`,nodeId:`dwgwH7fsJ`,rendersWithMotion:!0,scopeId:`gvFhFWijk`,children:d(Qm,{alt:``,height:`100%`,id:`dwgwH7fsJ`,image:Ag({pixelHeight:199,pixelWidth:480,src:`./assets/OLEhktnTd4bUNFdFyb78LNZ0OQ.png`},``),layoutId:`dwgwH7fsJ`,newTab:!0,padding:0,radius:0,style:{height:`100%`,width:`100%`},width:`100%`,...vg({H6rxxk1uk:{image:Ag({pixelHeight:81,pixelWidth:187,src:`./assets/star_logo.svg`},``)},ijYzDuSjU:{image:Ag({pixelHeight:81,pixelWidth:187,src:`./assets/star_logo.svg`},``)},ulffoL0Fn:{image:Ag({pixelHeight:81,pixelWidth:187,src:`./assets/star_logo.svg`},``)},XGJGpRGJZ:{image:Ag({pixelHeight:81,pixelWidth:187,src:`./assets/star_logo.svg`},``)}},h,x)})})}),ee()&&g(C.div,{className:`framer-3g2tbe`,"data-framer-name":`Slideshow mobile wrapper`,layoutDependency:D,layoutId:`inWCPQ6zM`,children:[z()&&d(kg,{value:jg,children:d(de,{children:d(L,{className:`framer-1d6spnw-container`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:D,layoutId:`RryHsSbeO-container`,nodeId:`RryHsSbeO`,rendersWithMotion:!0,scopeId:`gvFhFWijk`,children:d(ng,{alignment:`center`,arrowOptions:{arrowFill:`rgba(0, 0, 0, 0.2)`,arrowGap:10,arrowPadding:20,arrowPaddingBottom:0,arrowPaddingLeft:0,arrowPaddingRight:0,arrowPaddingTop:0,arrowPosition:`auto`,arrowRadius:40,arrowShouldFadeIn:!1,arrowShouldSpace:!0,arrowSize:40,showMouseControls:!1},autoPlayControl:!0,borderRadius:0,direction:`left`,dragControl:!1,effectsOptions:{effectsHover:!0,effectsOpacity:1,effectsPerspective:1200,effectsRotate:0,effectsScale:1,playOffscreen:!1},fadeOptions:{fadeAlpha:0,fadeContent:!1,fadeInset:0,fadeWidth:25,overflow:!1},gap:10,height:`100%`,heightSizing:`fill`,id:`RryHsSbeO`,intervalControl:1.5,itemAmount:1,layoutId:`RryHsSbeO`,padding:0,paddingBottom:0,paddingLeft:0,paddingPerSide:!1,paddingRight:0,paddingTop:0,progressOptions:{dotsActiveOpacity:1,dotsBackground:`rgba(0, 0, 0, 0.2)`,dotsBlur:0,dotsFill:`rgb(255, 255, 255)`,dotsGap:10,dotsInset:10,dotSize:10,dotsOpacity:.5,dotsPadding:10,dotsRadius:50,showProgressDots:!1},slots:[d(U,{background:{alt:`From merch`,fit:`fill`,pixelHeight:1080,pixelWidth:1920,sizes:`400px`,src:`./GUPiK9GXEZSmLChXhgPlz2wEh4E.webp`,srcSet:`./assets/GUPiK9GXEZSmLChXhgPlz2wEh4E.webp 512w,./GUPiK9GXEZSmLChXhgPlz2wEh4E.webp 1024w,./GUPiK9GXEZSmLChXhgPlz2wEh4E.webp 1920w`},className:`framer-1du3jre`,"data-framer-name":`Slideshow-1`,layoutDependency:D,layoutId:`KurMHH58Q`}),d(U,{background:{alt:`Inspiro logo`,fit:`fill`,pixelHeight:1153,pixelWidth:1733,sizes:`400px`,src:`./oa6qxeil3SnDuhs7ikd3X3dKpE.jpg`,srcSet:`./assets/oa6qxeil3SnDuhs7ikd3X3dKpE.jpg 512w,./oa6qxeil3SnDuhs7ikd3X3dKpE.jpg 1024w,./oa6qxeil3SnDuhs7ikd3X3dKpE.jpg 1733w`},className:`framer-1uyjq1z`,"data-framer-name":`Slideshow-2`,layoutDependency:D,layoutId:`GeRedg_q6`}),d(U,{background:{alt:`thermal or glitch aesthetic`,fit:`fill`,pixelHeight:1344,pixelWidth:896,positionX:`45.5%`,positionY:`13.6%`,sizes:`400px`,src:`./zS6kvmQeAzInvsQlOxaOiEdx8Do.png`,srcSet:`./assets/zS6kvmQeAzInvsQlOxaOiEdx8Do.png 682w,./zS6kvmQeAzInvsQlOxaOiEdx8Do.png 896w`},className:`framer-5ek94u`,"data-framer-name":`Slideshow-3`,layoutDependency:D,layoutId:`ShWn9wJ9H`}),d(U,{background:{alt:`thermal or glitch aesthetic image`,fit:`fill`,pixelHeight:1024,pixelWidth:1024,sizes:`400px`,src:`./czXgcLrK4YYyALCWmPEfLjOtxUk.png`,srcSet:`./assets/czXgcLrK4YYyALCWmPEfLjOtxUk.png 512w,./czXgcLrK4YYyALCWmPEfLjOtxUk.png 1024w`},className:`framer-1ymmqek`,"data-framer-name":`Slideshow-4`,layoutDependency:D,layoutId:`dQaxJ5XHP`}),d(U,{background:{alt:`oyster bar logo`,fit:`fill`,pixelHeight:1080,pixelWidth:1920,sizes:`400px`,src:`./JHHUEtIQ5PpYsMf20tt8wJjQPM.jpg`,srcSet:`./assets/JHHUEtIQ5PpYsMf20tt8wJjQPM.jpg 512w,./JHHUEtIQ5PpYsMf20tt8wJjQPM.jpg 1024w,./JHHUEtIQ5PpYsMf20tt8wJjQPM.jpg 1920w`},className:`framer-1ic18ou`,"data-framer-name":`Slideshow-5`,layoutDependency:D,layoutId:`yZ2bXNEjg`}),d(U,{background:{alt:`fluid distortion and iridescent glow image`,fit:`fill`,pixelHeight:1344,pixelWidth:896,sizes:`400px`,src:`./DMbot2aOjjoSUe3FEHBz7c4vZ8.png`,srcSet:`./assets/DMbot2aOjjoSUe3FEHBz7c4vZ8.png 682w,./DMbot2aOjjoSUe3FEHBz7c4vZ8.png 896w`},className:`framer-15s4xdv`,"data-framer-name":`Slideshow-6`,layoutDependency:D,layoutId:`yEUmgRCKe`}),d(U,{background:{alt:`Inspiro Blends Preview`,fit:`fill`,pixelHeight:1080,pixelWidth:1920,sizes:`400px`,src:`./CIOWF8RVI6FX61lhhEYiHHaL7zg.png`,srcSet:`./assets/CIOWF8RVI6FX61lhhEYiHHaL7zg.png 512w,./CIOWF8RVI6FX61lhhEYiHHaL7zg.png 1024w,./CIOWF8RVI6FX61lhhEYiHHaL7zg.png 1920w`},className:`framer-w0wnfz`,"data-framer-name":`Slideshow-7`,layoutDependency:D,layoutId:`TQhlnKysH`}),d(U,{background:{alt:`China ma preview`,fit:`fill`,pixelHeight:1080,pixelWidth:1920,sizes:`400px`,src:`./r28TOPU5FurVvMAfI5vySdXj5Wo.jpg`,srcSet:`./assets/r28TOPU5FurVvMAfI5vySdXj5Wo.jpg 512w,./r28TOPU5FurVvMAfI5vySdXj5Wo.jpg 1024w,./r28TOPU5FurVvMAfI5vySdXj5Wo.jpg 1920w`},className:`framer-1qnywmn`,"data-framer-name":`Slideshow-8`,layoutDependency:D,layoutId:`nV7jTxFDq`}),d(U,{background:{alt:`chromatic aberration, motion blur image`,fit:`fill`,pixelHeight:1344,pixelWidth:896,sizes:`400px`,src:`./Cfe5BhlxmZOn0Pnoz0GkA3gH8nQ.png`,srcSet:`./assets/Cfe5BhlxmZOn0Pnoz0GkA3gH8nQ.png 682w,./Cfe5BhlxmZOn0Pnoz0GkA3gH8nQ.png 896w`},className:`framer-1me4f4c`,"data-framer-name":`Slideshow-9`,layoutDependency:D,layoutId:`fPstadMJF`}),d(U,{background:{alt:`chromatic aberration, motion blur image`,fit:`fill`,pixelHeight:1344,pixelWidth:896,sizes:`400px`,src:`./DK26p3IlCr0zMwzl3vK9srlo0.png`,srcSet:`./assets/DK26p3IlCr0zMwzl3vK9srlo0.png 682w,./DK26p3IlCr0zMwzl3vK9srlo0.png 896w`},className:`framer-2ur49l`,"data-framer-name":`Slideshow-10`,layoutDependency:D,layoutId:`qeMTO63DA`}),d(U,{background:{alt:`fluid distortion and iridescent glow`,fit:`fill`,pixelHeight:1344,pixelWidth:896,positionX:`48.6%`,positionY:`24.3%`,sizes:`400px`,src:`./07Qcl1LGOhCDQGcEmTi9H6WCfPA.png`,srcSet:`./assets/07Qcl1LGOhCDQGcEmTi9H6WCfPA.png 682w,./07Qcl1LGOhCDQGcEmTi9H6WCfPA.png 896w`},className:`framer-fk0jxa`,"data-framer-name":`Slideshow-11`,layoutDependency:D,layoutId:`zysQIEk_o`}),d(U,{background:{alt:`distortion and blur image`,fit:`fill`,pixelHeight:1344,pixelWidth:896,sizes:`400px`,src:`./naraM8rTnSIEqPnlpTsDb5gO3TI.png`,srcSet:`./assets/naraM8rTnSIEqPnlpTsDb5gO3TI.png 682w,./naraM8rTnSIEqPnlpTsDb5gO3TI.png 896w`},className:`framer-1if00sw`,"data-framer-name":`Slideshow-12`,layoutDependency:D,layoutId:`T9N4NbV19`}),d(U,{background:{alt:`blurry image`,fit:`fill`,pixelHeight:1344,pixelWidth:896,positionX:`46.9%`,positionY:`13.6%`,sizes:`400px`,src:`./GdPLza2K1gTo1QAuWBvqHii3kMw.png`,srcSet:`./assets/GdPLza2K1gTo1QAuWBvqHii3kMw.png 682w,./GdPLza2K1gTo1QAuWBvqHii3kMw.png 896w`},className:`framer-kk0i7g`,"data-framer-name":`Slideshow-13`,layoutDependency:D,layoutId:`hzDUPnzZr`}),d(U,{background:{alt:`ether image`,fit:`fill`,pixelHeight:862,pixelWidth:841,sizes:`400px`,src:`./assets/qpL1yV2N6rEZwxNC1fStIL5ww.webp`,srcSet:`./assets/qpL1yV2N6rEZwxNC1fStIL5ww.webp 841w`},className:`framer-gmyh0x`,"data-framer-name":`Slideshow-14`,layoutDependency:D,layoutId:`ic94YZFpm`}),d(U,{background:{alt:`fluid distortion and iridescent glow`,fit:`fill`,pixelHeight:627,pixelWidth:786,sizes:`400px`,src:`./oL63vVyvR048f4Y3bTjRAFkLFaI.png`,srcSet:`./assets/oL63vVyvR048f4Y3bTjRAFkLFaI.png 512w,./oL63vVyvR048f4Y3bTjRAFkLFaI.png 786w`},className:`framer-hp0ij`,"data-framer-name":`Slideshow-15`,layoutDependency:D,layoutId:`oZQJBiR1T`})],startFrom:0,style:{height:`100%`,width:`100%`},transitionControl:{damping:40,delay:0,mass:1,stiffness:200,type:`spring`},width:`100%`,widthSizing:`fill`,...vg({ijYzDuSjU:{direction:`bottom`,effectsOptions:{effectsHover:!0,effectsOpacity:1,effectsPerspective:200,effectsRotate:0,effectsScale:.5,playOffscreen:!1},intervalControl:.5,transitionControl:{duration:0,type:`tween`}}},h,x)})})})}),I()&&d(kg,{value:Mg,children:d(de,{children:d(L,{className:`framer-1psqq97-container`,"data-framer-name":`Slideshow mobile`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:D,layoutId:`pAYZccgIj-container`,name:`Slideshow mobile`,nodeId:`pAYZccgIj`,rendersWithMotion:!0,scopeId:`gvFhFWijk`,children:d(ng,{alignment:`center`,arrowOptions:{arrowFill:`rgba(0, 0, 0, 0.2)`,arrowGap:10,arrowPadding:20,arrowPaddingBottom:0,arrowPaddingLeft:0,arrowPaddingRight:0,arrowPaddingTop:0,arrowPosition:`auto`,arrowRadius:40,arrowShouldFadeIn:!1,arrowShouldSpace:!0,arrowSize:40,showMouseControls:!1},autoPlayControl:!0,borderRadius:0,direction:`bottom`,dragControl:!1,effectsOptions:{effectsHover:!0,effectsOpacity:1,effectsPerspective:200,effectsRotate:0,effectsScale:.5,playOffscreen:!1},fadeOptions:{fadeAlpha:0,fadeContent:!1,fadeInset:0,fadeWidth:25,overflow:!1},gap:10,height:`100%`,heightSizing:`fill`,id:`pAYZccgIj`,intervalControl:.5,itemAmount:1,layoutId:`pAYZccgIj`,name:`Slideshow mobile`,padding:0,paddingBottom:0,paddingLeft:0,paddingPerSide:!1,paddingRight:0,paddingTop:0,progressOptions:{dotsActiveOpacity:1,dotsBackground:`rgba(0, 0, 0, 0.2)`,dotsBlur:0,dotsFill:`rgb(255, 255, 255)`,dotsGap:10,dotsInset:10,dotSize:10,dotsOpacity:.5,dotsPadding:10,dotsRadius:50,showProgressDots:!1},slots:[d(U,{background:{alt:`From merch`,fit:`fill`,pixelHeight:1080,pixelWidth:1920,sizes:`400px`,src:`./GUPiK9GXEZSmLChXhgPlz2wEh4E.webp`,srcSet:`./assets/GUPiK9GXEZSmLChXhgPlz2wEh4E.webp 512w,./GUPiK9GXEZSmLChXhgPlz2wEh4E.webp 1024w,./GUPiK9GXEZSmLChXhgPlz2wEh4E.webp 1920w`},className:`framer-1du3jre`,"data-framer-name":`Slideshow-1`,layoutDependency:D,layoutId:`KurMHH58Q`}),d(U,{background:{alt:`Inspiro logo`,fit:`fill`,pixelHeight:1153,pixelWidth:1733,sizes:`400px`,src:`./oa6qxeil3SnDuhs7ikd3X3dKpE.jpg`,srcSet:`./assets/oa6qxeil3SnDuhs7ikd3X3dKpE.jpg 512w,./oa6qxeil3SnDuhs7ikd3X3dKpE.jpg 1024w,./oa6qxeil3SnDuhs7ikd3X3dKpE.jpg 1733w`},className:`framer-1uyjq1z`,"data-framer-name":`Slideshow-2`,layoutDependency:D,layoutId:`GeRedg_q6`}),d(U,{background:{alt:`thermal or glitch aesthetic`,fit:`fill`,pixelHeight:1344,pixelWidth:896,positionX:`45.5%`,positionY:`13.6%`,sizes:`400px`,src:`./zS6kvmQeAzInvsQlOxaOiEdx8Do.png`,srcSet:`./assets/zS6kvmQeAzInvsQlOxaOiEdx8Do.png 682w,./zS6kvmQeAzInvsQlOxaOiEdx8Do.png 896w`},className:`framer-5ek94u`,"data-framer-name":`Slideshow-3`,layoutDependency:D,layoutId:`ShWn9wJ9H`}),d(U,{background:{alt:`thermal or glitch aesthetic image`,fit:`fill`,pixelHeight:1024,pixelWidth:1024,sizes:`400px`,src:`./czXgcLrK4YYyALCWmPEfLjOtxUk.png`,srcSet:`./assets/czXgcLrK4YYyALCWmPEfLjOtxUk.png 512w,./czXgcLrK4YYyALCWmPEfLjOtxUk.png 1024w`},className:`framer-1ymmqek`,"data-framer-name":`Slideshow-4`,layoutDependency:D,layoutId:`dQaxJ5XHP`}),d(U,{background:{alt:`oyster bar logo`,fit:`fill`,pixelHeight:1080,pixelWidth:1920,sizes:`400px`,src:`./JHHUEtIQ5PpYsMf20tt8wJjQPM.jpg`,srcSet:`./assets/JHHUEtIQ5PpYsMf20tt8wJjQPM.jpg 512w,./JHHUEtIQ5PpYsMf20tt8wJjQPM.jpg 1024w,./JHHUEtIQ5PpYsMf20tt8wJjQPM.jpg 1920w`},className:`framer-1ic18ou`,"data-framer-name":`Slideshow-5`,layoutDependency:D,layoutId:`yZ2bXNEjg`})],startFrom:0,style:{height:`100%`,width:`100%`},transitionControl:{duration:0,type:`tween`},width:`100%`,widthSizing:`fill`})})})})]}),d(de,{children:d(L,{className:`framer-ex6fok-container`,isAuthoredByUser:!0,isModuleExternal:!0,layoutDependency:D,layoutId:`kvjjAD7cw-container`,nodeId:`kvjjAD7cw`,rendersWithMotion:!0,scopeId:`gvFhFWijk`,children:d(Qm,{alt:``,height:`100%`,id:`kvjjAD7cw`,image:Ag({pixelHeight:199,pixelWidth:792,src:`./n7Lee0abr56GyuSjhO7NijqM.png`,srcSet:`./assets/n7Lee0abr56GyuSjhO7NijqM.png 512w,./n7Lee0abr56GyuSjhO7NijqM.png 792w`},``),layoutId:`kvjjAD7cw`,newTab:!0,padding:0,radius:0,style:{height:`100%`,width:`100%`},width:`100%`,...vg({H6rxxk1uk:{image:Ag({pixelHeight:80,pixelWidth:291,src:`./assets/BrKbl19fXFg0W8MQcjwXFgD24s0.svg`},``)},ijYzDuSjU:{image:Ag({pixelHeight:80,pixelWidth:291,src:`./assets/BrKbl19fXFg0W8MQcjwXFgD24s0.svg`},``)},ulffoL0Fn:{image:Ag({pixelHeight:80,pixelWidth:291,src:`./assets/BrKbl19fXFg0W8MQcjwXFgD24s0.svg`},``)},XGJGpRGJZ:{image:Ag({pixelHeight:80,pixelWidth:291,src:`./assets/BrKbl19fXFg0W8MQcjwXFgD24s0.svg`},``)}},h,x)})})}),d(kg,{value:Ng,children:d(C.div,{className:`framer-15lcohp`,"data-framer-name":`Mask Mobile`,layoutDependency:D,layoutId:`gtTh63bVZ`,style:{backgroundColor:`var(--token-af4aa957-55ee-4f69-b04a-fc26bc15a171, rgb(32, 32, 32))`,opacity:.9},variants:{H6rxxk1uk:{opacity:0},ijYzDuSjU:{opacity:0}}})})]}),I()&&d(kg,{value:Ng,...vg({ojhyxEvds:{value:Pg}},h,x),children:d(C.div,{className:`framer-gi8q6r`,"data-framer-name":`Mask Desktop`,layoutDependency:D,layoutId:`V2oKL4SkX`,style:{backgroundColor:`var(--token-af4aa957-55ee-4f69-b04a-fc26bc15a171, rgb(32, 32, 32))`,opacity:.9},variants:{lyV1NaZBG:{opacity:0},ojhyxEvds:{opacity:0}}})})]})})})})}),`.framer-Q0bTl.framer-1thvred, .framer-Q0bTl .framer-1thvred { display: block; }(.framer-Q0bTl.framer-1ifny2d { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 450px; }(.framer-Q0bTl .framer-1gph9rt-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }(.framer-Q0bTl .framer-1xedu3t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }(.framer-Q0bTl .framer-1956nn5-container { aspect-ratio: 2.4193548387096775 / 1; flex: none; height: auto; position: relative; width: 242px; }(.framer-Q0bTl .framer-3g2tbe { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 20px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }(.framer-Q0bTl .framer-1d6spnw-container { flex: none; height: 150px; position: relative; width: 240px; }(.framer-Q0bTl .framer-1du3jre, .framer-Q0bTl .framer-1uyjq1z, .framer-Q0bTl .framer-5ek94u, .framer-Q0bTl .framer-1ymmqek, .framer-Q0bTl .framer-1ic18ou, .framer-Q0bTl .framer-15s4xdv, .framer-Q0bTl .framer-w0wnfz, .framer-Q0bTl .framer-1qnywmn, .framer-Q0bTl .framer-1me4f4c, .framer-Q0bTl .framer-2ur49l, .framer-Q0bTl .framer-fk0jxa, .framer-Q0bTl .framer-1if00sw, .framer-Q0bTl .framer-kk0i7g, .framer-Q0bTl .framer-gmyh0x, .framer-Q0bTl .framer-hp0ij { height: 300px; position: relative; width: 400px; }(.framer-Q0bTl .framer-1psqq97-container { flex: none; height: 130px; position: relative; width: 200px; }(.framer-Q0bTl .framer-ex6fok-container { aspect-ratio: 4 / 1; flex: none; height: auto; position: relative; width: 400px; }(.framer-Q0bTl .framer-15lcohp { bottom: -615px; flex: none; height: 216%; overflow: visible; position: absolute; right: -700px; width: 275%; z-index: 1; }(.framer-Q0bTl .framer-gi8q6r { flex: none; height: 100%; overflow: visible; position: absolute; right: 0px; top: 0px; width: 450px; z-index: 1; }(.framer-Q0bTl.framer-v-1qlugvd.framer-1ifny2d, .framer-Q0bTl.framer-v-1artrxu.framer-1ifny2d, .framer-Q0bTl.framer-v-xy2jnm.framer-1ifny2d { flex-direction: column; overflow: visible; width: min-content; }(.framer-Q0bTl.framer-v-1qlugvd .framer-1xedu3t, .framer-Q0bTl.framer-v-1artrxu .framer-1xedu3t, .framer-Q0bTl.framer-v-xy2jnm .framer-1xedu3t { gap: 0px; }(.framer-Q0bTl.framer-v-1qlugvd .framer-1956nn5-container, .framer-Q0bTl.framer-v-1artrxu .framer-1956nn5-container, .framer-Q0bTl.framer-v-xy2jnm .framer-1956nn5-container { width: 160px; }(.framer-Q0bTl.framer-v-1qlugvd .framer-3g2tbe, .framer-Q0bTl.framer-v-1artrxu .framer-3g2tbe, .framer-Q0bTl.framer-v-xy2jnm .framer-3g2tbe { overflow: hidden; }(.framer-Q0bTl.framer-v-1qlugvd .framer-ex6fok-container, .framer-Q0bTl.framer-v-1artrxu .framer-ex6fok-container, .framer-Q0bTl.framer-v-xy2jnm .framer-ex6fok-container { aspect-ratio: unset; height: 100px; width: 240px; }(.framer-Q0bTl.framer-v-1qlugvd .framer-15lcohp { bottom: unset; height: 100%; right: 0px; top: 0px; width: 100%; }(.framer-Q0bTl.framer-v-1artrxu .framer-15lcohp { bottom: unset; height: 100%; right: -130px; top: 0px; width: 100%; }(.framer-Q0bTl.framer-v-xy2jnm .framer-15lcohp { bottom: unset; height: 100%; right: -340px; top: 0px; width: 100%; }(.framer-Q0bTl.framer-v-ttoty4.framer-1ifny2d { overflow: visible; width: min-content; }(.framer-Q0bTl.framer-v-ttoty4 .framer-1xedu3t { gap: 12px; }(.framer-Q0bTl.framer-v-ttoty4 .framer-1956nn5-container { width: 154px; }(.framer-Q0bTl.framer-v-ttoty4 .framer-3g2tbe { height: 130px; overflow: hidden; }(.framer-Q0bTl.framer-v-ttoty4 .framer-ex6fok-container { width: 240px; }(.framer-Q0bTl.framer-v-ttoty4 .framer-15lcohp { bottom: unset; height: 100%; right: -400px; top: 0px; width: 20%; }`.split(`(`),`framer-Q0bTl`),zg.displayName=`Logo`,zg.defaultProps={height:222,width:450},_e(zg,{variant:{options:[`qBdYPytJr`,`ojhyxEvds`,`lyV1NaZBG`,`ulffoL0Fn`,`XGJGpRGJZ`,`H6rxxk1uk`,`ijYzDuSjU`],optionTitles:[`Desktop - 1`,`Desktop - 2`,`Desktop - 3`,`Tablet - 1`,`Tablet - 2`,`Tablet - 3`,`Tablet - 4`],title:`Variant`,type:W.Enum},sCU1uzhMo:{__defaultAssetReference:`data:framer/asset-reference,wi2sg9rdfZWxOdvkteCVwurNqLw.svg?originalFilename=logo.svg&width=1308&height=645`,title:`Logo`,type:W.ResponsiveImage}}),re(zg,[{explicitInter:!0,fonts:[]},...yg,...bg],{supportsExplicitInterCodegen:!0})}));function Vg(e,...t){let n={};return t?.forEach(t=>t&&Object.assign(n,e[t])),n}var Hg,Ug,Wg,Gg,Kg,qg,Jg,Yg,Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_=e((()=>{v(),ue(),F(),n(),Ee(),Bg(),Hg=le(zg),Ug=I(C.div),Wg=[`um_sRclY1`,`k6hNTjAA2`],Gg=`framer-r3MnG`,Kg={k6hNTjAA2:`framer-v-a3csdc`,um_sRclY1:`framer-v-pwummx`},qg={delay:0,duration:.8,ease:[.44,0,.56,1],type:`tween`},Jg=e=>typeof e==`object`&&e&&typeof e.src==`string`?e:typeof e==`string`?{src:e}:void 0,Yg=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},Xg={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,x:0,y:-60},Zg={damping:30,delay:0,mass:1.9,stiffness:166,type:`spring`},Qg={opacity:0,rotate:0,rotateX:0,rotateY:0,scale:1,skewX:0,skewY:0,transition:Zg,x:0,y:-60},$g=(e,t)=>`translateX(-50%) ${t}`,e_={filter:`blur(10px)`,opacity:.001,rotate:0,scale:2,skewX:0,skewY:0,x:0,y:0},t_={bounce:.25,delay:.05,duration:.45,type:`spring`},n_={effect:e_,startDelay:2.2,tokenization:`character`,transition:t_,trigger:`onMount`,type:`appear`},r_={effect:e_,startDelay:2.4,tokenization:`character`,transition:t_,trigger:`onMount`,type:`appear`},i_=({value:e,children:n})=>{let r=h(A),i=e??r.transition,a=t(()=>({...r,transition:i}),[JSON.stringify(i)]);return d(A.Provider,{value:a,children:n})},a_={Animated:`um_sRclY1`,Static:`k6hNTjAA2`},o_=C.create(o),s_=({height:e,id:t,logo:n,width:r,...i})=>({...i,variant:a_[i.variant]??i.variant??`um_sRclY1`,xGweprAfL:n??i.xGweprAfL??{pixelHeight:447,pixelWidth:908,src:`./assets/oxurWBlh6N6S4TWSCjuQlCy2j8.svg`,srcSet:`./assets/oxurWBlh6N6S4TWSCjuQlCy2j8.svg 512w,./oxurWBlh6N6S4TWSCjuQlCy2j8.svg 908w`}}),c_=(e,t)=>e.layoutDependency?t.join(`-`)+e.layoutDependency:t.join(`-`),l_=ie(p(function(e,t){let n=r(null),i=t??n,a=y(),{activeLocale:s,setLocale:c}=Te(),l=me(),{style:u,className:f,layoutId:p,variant:m,xGweprAfL:h,..._}=s_(e),{baseVariant:v,classNames:b,clearLoadingGesture:x,gestureHandlers:S,gestureVariant:w,isLoading:T,setGestureState:E,setVariant:D,variants:O}=R({cycleOrder:Wg,defaultVariant:`um_sRclY1`,ref:i,variant:m,variantClassNames:Kg}),k=c_(e,O),A=ne(Gg,G);return d(P,{id:p??a,children:d(o_,{animate:O,initial:!1,children:d(i_,{value:qg,children:d(C.div,{..._,...S,className:ne(A,`framer-pwummx`,f,b),"data-framer-name":`Animated`,layoutDependency:k,layoutId:`um_sRclY1`,ref:i,style:{backgroundColor:`var(--token-af4aa957-55ee-4f69-b04a-fc26bc15a171, rgb(32, 32, 32))`,...u},...Vg({k6hNTjAA2:{"data-framer-name":`Static`}},v,w),children:d(C.div,{className:`framer-uuow1h`,"data-framer-name":`Hero`,layoutDependency:k,layoutId:`lbP4kqRGa`,style:{backgroundColor:`var(--token-af4aa957-55ee-4f69-b04a-fc26bc15a171, rgb(32, 32, 32))`},children:g(C.div,{className:`framer-7hescn`,"data-framer-name":`Main Container`,layoutDependency:k,layoutId:`yW9V2YCPf`,children:[d(de,{height:222,width:`260px`,y:(l?.y||0)+0+0+((((l?.height||960)-0)*1-0-((((l?.height||960)-0)*1-0)*1+0))/2+0+0)+0+(((((l?.height||960)-0)*1-0)*1-40-222)/2+0+0),...Vg({k6hNTjAA2:{y:(l?.y||0)+0+0+((((l?.height||800)-0)*1-0-((((l?.height||800)-0)*1-0)*1+0))/2+0+0)+0+(((((l?.height||800)-0)*1-0)*1-40-222)/2+0+0)}},v,w),children:d(L,{className:`framer-1934fxy-container`,"data-framer-name":`Logo`,layoutDependency:k,layoutId:`ZGp_0i_Td-container`,name:`Logo`,nodeId:`ZGp_0i_Td`,rendersWithMotion:!0,scopeId:`WMyLfTnZn`,children:d(zg,{height:`100%`,id:`ZGp_0i_Td`,layoutId:`ZGp_0i_Td`,name:`Logo`,sCU1uzhMo:Jg(h),style:{width:`100%`},variant:Yg(`qBdYPytJr`),width:`100%`,...Vg({k6hNTjAA2:{variant:Yg(`lyV1NaZBG`)}},v,w)})})}),g(Ug,{__framer__animate:{transition:Zg},__framer__animateOnce:!1,__framer__enter:Xg,__framer__exit:Qg,__framer__styleAppearEffectEnabled:!0,__framer__threshold:.5,__perspectiveFX:!1,__smartComponentFX:!0,__targetOpacity:1,className:`framer-xguzlf`,"data-framer-name":`Text`,layoutDependency:k,layoutId:`mtTjF8a6K`,transformTemplate:$g,...Vg({k6hNTjAA2:{__framer__styleAppearEffectEnabled:void 0}},v,w),children:[d(se,{__fromCanvasComponent:!0,children:d(o,{children:d(C.div,{className:`framer-styles-preset-1vj0jfz`,"data-styles-preset":`iGznlXWfD`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--extracted-tcooor, var(--token-944eeee7-f018-48d5-8e8a-c85a388a648e, rgb(83, 83, 83)))`},children:``})}),className:`framer-wx2zun`,effect:n_,fonts:[`Inter`],layoutDependency:k,layoutId:`kMDHRz90h`,style:{"--extracted-tcooor":`var(--token-944eeee7-f018-48d5-8e8a-c85a388a648e, rgb(83, 83, 83))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},verticalAlignment:`top`,withExternalLayout:!0,...Vg({k6hNTjAA2:{effect:void 0}},v,w)}),d(se,{__fromCanvasComponent:!0,children:d(o,{children:d(C.h1,{className:`framer-styles-preset-1vj0jfz`,"data-styles-preset":`iGznlXWfD`,dir:`auto`,style:{"--framer-text-alignment":`center`,"--framer-text-color":`var(--extracted-gdpscs, var(--token-c3043347-e55d-4e8f-a620-23399553e32c, rgb(238, 237, 228)))`},children:`Some are meant to admire the stars. I was born to become one`})}),className:`framer-2py3kl`,effect:r_,fonts:[`Inter`],layoutDependency:k,layoutId:`OmJ9DoUK0`,style:{"--extracted-gdpscs":`var(--token-c3043347-e55d-4e8f-a620-23399553e32c, rgb(238, 237, 228))`,"--framer-link-text-color":`rgb(0, 153, 255)`,"--framer-link-text-decoration":`underline`},verticalAlignment:`top`,withExternalLayout:!0,...Vg({k6hNTjAA2:{effect:void 0}},v,w)})]})]})})})})})})}),[`.framer-r3MnG.framer-1es1lyv, .framer-r3MnG .framer-1es1lyv { display: block; }`,`.framer-r3MnG.framer-pwummx { height: 960px; overflow: visible; position: relative; width: 1200px; }`,`.framer-r3MnG .framer-uuow1h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 0px; overflow: hidden; padding: 0px; pointer-events: auto; position: absolute; top: 0px; width: 100%; z-index: 1; }`,`.framer-r3MnG .framer-7hescn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 100%; }`,`.framer-r3MnG .framer-1934fxy-container { flex: none; height: auto; position: relative; width: 260px; }`,`.framer-r3MnG .framer-xguzlf { align-content: center; align-items: center; bottom: 40px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; width: min-content; z-index: 1; }`,`.framer-r3MnG .framer-wx2zun, .framer-r3MnG .framer-2py3kl { --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: auto; }`,`.framer-r3MnG.framer-v-a3csdc.framer-pwummx { height: 800px; }`,...De],`framer-r3MnG`),l_.displayName=`Hero`,l_.defaultProps={height:960,width:1200},_e(l_,{variant:{options:[`um_sRclY1`,`k6hNTjAA2`],optionTitles:[`Animated`,`Static`],title:`Variant`,type:W.Enum},xGweprAfL:{__defaultAssetReference:`data:framer/asset-reference,oxurWBlh6N6S4TWSCjuQlCy2j8.svg?originalFilename=logo.svg&width=908&height=447`,title:`Logo`,type:W.ResponsiveImage}}),re(l_,[{explicitInter:!0,fonts:[{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,url:`./5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,url:`./EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+1F00-1FFF`,url:`./Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0370-03FF`,url:`./OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,url:`./JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,url:`./GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,weight:`400`},{cssFamilyName:`Inter`,source:`framer`,style:`normal`,uiFamilyName:`Inter`,unicodeRange:`U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,url:`./b6Y37FthZeALduNqHicBT6FutY.woff2`,weight:`400`}]},...Hg,...ce(Oe)],{supportsExplicitInterCodegen:!0}),l_.loader={load:(e,t)=>(t.locale,Promise.allSettled([z(zg,{},t)]))}})),d_,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_;e((()=>{v(),ue(),F(),n(),ke(),Zm(),Ne(),u_(),Ie(),d_=le(l_),f_=ae(l_),p_=le(Xm),m_=ae(Xm),h_=le(Pe),g_=le(Ae),__={LRnQP_yWU:`(max-width: 809.98px)`,v68ho8kTh:`(min-width: 810px) and (max-width: 1199.98px)`,WQLkyLRf1:`(min-width: 1200px)`},v_=[],y_=`framer-TZuuz`,b_={LRnQP_yWU:`framer-v-wffc3e`,v68ho8kTh:`framer-v-6jtug8`,WQLkyLRf1:`framer-v-72rtr7`},x_=(e,t,n)=>e&&t?`position`:n,S_=(e,t)=>{if(!(!e||typeof e!=`object`))return{...e,alt:t}},C_=(...e)=>{for(let t of e)if(t&&typeof t==`string`)return t},w_={Desktop:`WQLkyLRf1`,Phone:`LRnQP_yWU`,Tablet:`v68ho8kTh`},T_=({value:e})=>V()?null:d(`style`,{dangerouslySetInnerHTML:{__html:e},"data-framer-html-style":``}),E_=({height:e,id:t,width:n,...r})=>({...r,variant:w_[r.variant]??r.variant??`WQLkyLRf1`}),D_=ie(p(function(e,n){let i=r(null),a=n??i,o=y(),{activeLocale:s,setLocale:c}=Te(),l=me(),{style:u,className:f,layoutId:p,variant:m,..._}=E_(e);H(t(()=>Fe({},s),[s]));let[v,b]=ge(m,__,!1),x=ne(y_),S=h(pe)?.isLayoutTemplate,w=!!h(A)?.transition?.layout,T=x_(S,w),E=Se(`Tvlyy13uf`),D=r(null),O=r(null),k=r(null),j=r(null),M=r(null),N=r(null),F=r(null),I=r(null),ee=r(null),L=Se(`y9cMHIKOa`),R=Se(`jHE1lPhJB`),z=Se(`RAL5pHDzI`),te=Se(`vyRzPsUVj`),re=Se(`iNKJZVXDN`),ie=Se(`C0kvYctpy`),ae=Se(`ooyXbmMzm`),oe=Se(`LGU_CCEsR`);return ve({}),d(pe.Provider,{value:{activeVariantId:v,humanReadableVariantMap:w_,primaryVariantId:`WQLkyLRf1`,variantClassNames:b_},children:g(P,{id:p??o,children:[d(T_,{value:`html body { background: var(--token-af4aa957-55ee-4f69-b04a-fc26bc15a171, rgb(32, 32, 32)); }`}),g(C.div,{..._,className:ne(x,`framer-72rtr7`,f),ref:a,style:{...u},children:[g(C.div,{className:`framer-h8l2m8`,"data-framer-name":`Sticky Wrapper`,layout:T,children:[g(`div`,{className:`framer-8qbpmf`,"data-framer-name":`Sticky`,id:E,ref:D,children:[d(de,{height:1e3,width:l?.width||`100vw`,y:(l?.y||0)+0+0+0+0+0+0,children:d(ye,{className:`framer-1fer4np-container`,nodeId:`pxNsEr0XL`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:d(f_,{__framer__animateOnce:!0,__framer__targets:[{ref:O,target:`k6hNTjAA2`}],__framer__threshold:1,__framer__variantAppearEffectEnabled:!0,height:`100%`,id:`pxNsEr0XL`,layoutId:`pxNsEr0XL`,style:{height:`100%`,width:`100%`},variant:C_(`um_sRclY1`),width:`100%`,xGweprAfL:S_({pixelHeight:447,pixelWidth:953,src:`./assets/Wc0p8IWpAVhAXlZ4gamieBhuOQ.svg`,srcSet:`./Wc0p8IWpAVhAXlZ4gamieBhuOQ.svg 512w,./Wc0p8IWpAVhAXlZ4gamieBhuOQ.svg 953w`},``)})})}),d(de,{height:1e3,width:l?.width||`100vw`,y:(l?.y||0)+0+0+0+0+0,children:d(ye,{className:`framer-r9pybw-container`,nodeId:`GKqFdXR0U`,rendersWithMotion:!0,scopeId:`augiA20Il`,children:d(Ce,{breakpoint:v,overrides:{LRnQP_yWU:{__framer__targets:[{ref:k,target:`SbTI1nzYy`}],cpuF7gHcP:S_({pixelHeight:1422,pixelWidth:800,src:`./2NO1jbNg7kZpdLSnDnqjjvE6CAA.jpg`,srcSet:`./assets/2NO1jbNg7kZpdLSnDnqjjvE6CAA.jpg 576w,./2NO1jbNg7kZpdLSnDnqjjvE6CAA.jpg 800w`},`Horse standing on snow at night, illuminated in warm orange light against a dark blue sky and mountains`),DNyd3CD3l:S_({pixelHeight:1422,pixelWidth:800,src:`./HksrCWNZOqTCfMFGVnlABwlA0.png`,srcSet:`./assets/HksrCWNZOqTCfMFGVnlABwlA0.png 576w,./HksrCWNZOqTCfMFGVnlABwlA0.png 800w`},`Single ripe peach centered on a transparent background, vivid orange and yellow tones`),JIGj567On:S_({pixelHeight:1280,pixelWidth:720,src:`./rYpGIb3MygYvhwgSUEJYk8t5oII.jpg`,srcSet:`./rYpGIb3MygYvhwgSUEJYk8t5oII.jpg 576w,./rYpGIb3MygYvhwgSUEJYk8t5oII.jpg 720w`},`Glowing blue human hand emerging from darkness, softly illuminated with a grainy texture`),PMNpoDEt_:S_({pixelHeight:1433,pixelWidth:800,src:`./KIh5lhw09ZvwZ0swXQoMWteco8c.jpg`,srcSet:`./assets/KIh5lhw09ZvwZ0swXQoMWteco8c.jpg 571w,./KIh5lhw09ZvwZ0swXQoMWteco8c.jpg 800w`},`Black-and-white close-up of a man’s face with layered typographic text over the image`),rPgcXt15u:S_({pixelHeight:1433,pixelWidth:800,src:`./gLZprcLKxglk4zWGledkl2gV1fQ.jpg`,srcSet:`./assets/gLZprcLKxglk4zWGledkl2gV1fQ.jpg 571w,./gLZprcLKxglk4zWGledkl2gV1fQ.jpg 800w`},`Black-and-white macro photograph of human fingertips showing detailed fingerprint patterns`),variant:C_(`UOGgcJgH2`)},v68ho8kTh:{__framer__targets:[{ref:k,target:`SbTI1nzYy`}],variant:C_(`UOGgcJgH2`)}},children:d(m_,{__framer__animateOnce:!1,__framer__targets:[{ref:k,target:`KILeEEp7P`}],__framer__threshold:1,__framer__variantAppearEffectEnabled:!0,apjdwVM2I:N,cpuF7gHcP:S_({pixelHeight:1536,pixelWidth:2752,src:`./ClK00uxydTRnx2FcyYDqVb9ws.jpg`,srcSet:`./assets/ClK00uxydTRnx2FcyYDqVb9ws.jpg 512w,./ClK00uxydTRnx2FcyYDqVb9ws.jpg 1024w,./ClK00uxydTRnx2FcyYDqVb9ws.jpg 2048w,./ClK00uxydTRnx2FcyYDqVb9ws.jpg 2752w`},`Horse standing on snow at night, illuminated in warm orange light against a dark blue sky and mountains`),DNyd3CD3l:S_({pixelHeight:900,pixelWidth:1600,src:`./DkBXri2AZZsu5kjOG8euNuxHgI.png`,srcSet:`./assets/DkBXri2AZZsu5kjOG8euNuxHgI.png 512w,./DkBXri2AZZsu5kjOG8euNuxHgI.png 1024w,./DkBXri2AZZsu5kjOG8euNuxHgI.png 1600w`},`Single ripe peach centered on a transparent background, vivid orange and yellow tones`),height:`100%`,id:`GKqFdXR0U`,JIGj567On:S_({pixelHeight:1536,pixelWidth:2730,src:`./nfauNhlOo2KJhNyZZF9zh56jAGE.webp`,srcSet:`./nfauNhlOo2KJhNyZZF9zh56jAGE.webp 512w,./nfauNhlOo2KJhNyZZF9zh56jAGE.webp 1024w,./nfauNhlOo2KJhNyZZF9zh56jAGE.webp 2048w,./nfauNhlOo2KJhNyZZF9zh56jAGE.webp 2730w`},`Glowing blue human hand emerging from darkness, softly illuminated with a grainy texture`),JzbbE_wb2:I,layoutId:`GKqFdXR0U`,LB54Dk4aO:S_({pixelHeight:1038,pixelWidth:1304,src:`./gm9PFWYQNSPjpWZcloVGYtbp9sE.png`,srcSet:`./assets/gm9PFWYQNSPjpWZcloVGYtbp9sE.png 512w,./gm9PFWYQNSPjpWZcloVGYtbp9sE.png 1024w,./gm9PFWYQNSPjpWZcloVGYtbp9sE.png 1304w`},`Black-and-white close-up of a man’s face with layered typographic text over the image”`),PMNpoDEt_:S_({pixelHeight:893,pixelWidth:1600,src:`./ROFpSAXk6Qws3mJ9BNV70QGwE.jpeg`,srcSet:`./assets/ROFpSAXk6Qws3mJ9BNV70QGwE.jpeg 512w,./ROFpSAXk6Qws3mJ9BNV70QGwE.jpeg 1024w,./ROFpSAXk6Qws3mJ9BNV70QGwE.jpeg 1600w`},`Black-and-white close-up of a man’s face with layered typographic text over the image`),rPgcXt15u:S_({pixelHeight:1080,pixelWidth:1920,src:`./6km9QZ7Wf0cOkunq3FQKuDa1eU4.png`,srcSet:`./assets/6km9QZ7Wf0cOkunq3FQKuDa1eU4.png 512w,./6km9QZ7Wf0cOkunq3FQKuDa1eU4.png 1024w,./6km9QZ7Wf0cOkunq3FQKuDa1eU4.png 1920w`},`Black-and-white macro photograph of human fingertips showing detailed fingerprint patterns`),style:{height:`100%`,width:`100%`},SzbWf_oN9:F,T3pCHqKTl:ee,tEVmfxj6J:M,TNi2Vejqb:j,variant:C_(`ih5NuunEf`),width:`100%`,ZaksUSpNr:k})})})})]}),g(`div`,{className:`framer-6o1qb8`,"data-framer-name":`Triggers Wrapper`,children:[d(`div`,{className:`framer-1l6sznu`,"data-framer-name":`Trigger 7`,id:L,ref:ee}),d(`div`,{className:`framer-vax4i8`,"data-framer-name":`Trigger 6`,id:R,ref:I}),d(`div`,{className:`framer-1mpg42n`,"data-framer-name":`Trigger 5`,id:z,ref:F}),d(`div`,{className:`framer-a01cnh`,"data-framer-name":`Trigger 4`,id:te,ref:N}),d(`div`,{className:`framer-9f4rzr`,"data-framer-name":`Trigger 3`,id:re,ref:M}),d(`div`,{className:`framer-1cd3e88`,"data-framer-name":`Trigger 2`,id:ie,ref:j}),d(`div`,{className:`framer-10tinar`,"data-framer-name":`Trigger 1`,id:ae,ref:k}),d(`div`,{className:`framer-gnkqlh`,"data-framer-name":`Logo Trigger`,id:oe,ref:O})]}),d(Ce,{breakpoint:v,overrides:{LRnQP_yWU:{y:(l?.y||0)+0+0+3365-20},v68ho8kTh:{y:(l?.y||0)+0+0+3424-20}},children:d(de,{height:20,width:l?.width||`100vw`,y:(l?.y||0)+0+0+4e3-20,children:d(ye,{className:`framer-1ky37zu-container`,nodeId:`J0X1yKVCg`,scopeId:`augiA20Il`,children:d(Pe,{AxnHnCkCe:`var(--token-2b91d2ee-29b9-46c0-b84b-a645bbb7ee0c, rgb(92, 92, 89))`,height:`100%`,id:`J0X1yKVCg`,layoutId:`J0X1yKVCg`,style:{width:`100%`},width:`100%`})})})})]}),d(de,{children:d(ye,{className:`framer-1g4sx8a-container`,isAuthoredByUser:!0,isModuleExternal:!0,layout:T,nodeId:`yG_COJp40`,scopeId:`augiA20Il`,children:d(Ae,{height:`100%`,id:`yG_COJp40`,intensity:10,layoutId:`yG_COJp40`,width:`100%`})})})]}),d(`div`,{id:`overlay`})]})})}),[`.framer-TZuuz.framer-lux5qc, .framer-TZuuz .framer-lux5qc { display: block; }`,`.framer-TZuuz.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-af4aa957-55ee-4f69-b04a-fc26bc15a171, #202020); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,`.framer-TZuuz .framer-h8l2m8 { align-content: center; align-items: center; background-color: #000000; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 4000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,`.framer-TZuuz .framer-8qbpmf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,`.framer-TZuuz .framer-1fer4np-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; z-index: 1; }`,`.framer-TZuuz .framer-r9pybw-container { flex: none; height: 100vh; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 2; }`,`.framer-TZuuz .framer-6o1qb8 { flex: none; height: 2281px; opacity: 0; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 100%; }`,`.framer-TZuuz .framer-1l6sznu { background-color: rgba(39, 34, 171, 0.78); flex: none; height: 417px; left: 0px; opacity: 0.3; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 1864px; z-index: 1; }`,`.framer-TZuuz .framer-vax4i8 { background-color: rgba(255, 255, 255, 0.78); flex: none; height: 600px; left: 0px; opacity: 0.3; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 1627px; z-index: 1; }`,`.framer-TZuuz .framer-1mpg42n { background-color: rgba(255, 97, 110, 0.78); flex: none; height: 680px; left: 0px; opacity: 0.3; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 1294px; z-index: 1; }`,`.framer-TZuuz .framer-a01cnh { background-color: rgba(218, 255, 97, 0.78); flex: none; height: 910px; left: 0px; opacity: 0.3; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 801px; z-index: 1; }`,`.framer-TZuuz .framer-9f4rzr { background-color: rgba(239, 97, 255, 0.78); flex: none; height: 716px; left: 0px; opacity: 0.3; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 703px; z-index: 1; }`,`.framer-TZuuz .framer-1cd3e88 { background-color: rgba(97, 242, 255, 0.78); flex: none; height: 1156px; left: 0px; opacity: 0.3; overflow: hidden; pointer-events: none; position: absolute; right: 0px; top: 466px; z-index: 1; }`,`.framer-TZuuz .framer-10tinar { background-color: #00ff37; flex: none; gap: 10px; height: 1221px; left: 0px; opacity: 0.3; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; right: 0px; top: 190px; z-index: 1; }`,`.framer-TZuuz .framer-gnkqlh { background-color: #f6fa16; flex: none; height: 16px; left: calc(50.00000000000002% - 1080px / 2); opacity: 0.3; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: absolute; top: 0px; width: 1080px; z-index: 10; }`,`.framer-TZuuz .framer-1ky37zu-container { bottom: 0px; flex: none; height: auto; left: 0px; position: absolute; width: 100%; z-index: 1; }`,`.framer-TZuuz .framer-1g4sx8a-container { flex: none; height: auto; position: relative; width: auto; }`,`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-TZuuz.framer-72rtr7 { width: 810px; } .framer-TZuuz .framer-h8l2m8 { height: 3424px; } .framer-TZuuz .framer-6o1qb8 { height: 2132px; } .framer-TZuuz .framer-1l6sznu { bottom: 100px; height: unset; } .framer-TZuuz .framer-vax4i8 { bottom: 154px; height: unset; } .framer-TZuuz .framer-1mpg42n { bottom: 407px; height: unset; } .framer-TZuuz .framer-a01cnh { bottom: 670px; height: unset; } .framer-TZuuz .framer-1cd3e88 { top: 468px; } .framer-TZuuz .framer-10tinar { top: 90px; }}`,`@media (max-width: 809.98px) { .framer-TZuuz.framer-72rtr7 { width: 390px; } .framer-TZuuz .framer-h8l2m8 { height: 3365px; } .framer-TZuuz .framer-6o1qb8 { height: 2299px; } .framer-TZuuz .framer-1l6sznu { height: 551px; opacity: unset; right: unset; top: 1449px; width: 100%; } .framer-TZuuz .framer-vax4i8 { background-color: rgba(255, 0, 0, 0.78); bottom: 384px; height: unset; opacity: unset; right: unset; top: 1250px; width: 100%; z-index: 6; } .framer-TZuuz .framer-1mpg42n { height: 600px; opacity: unset; right: unset; top: calc(60.20008699434539% - 600px / 2); width: 100%; } .framer-TZuuz .framer-a01cnh { height: 600px; opacity: unset; right: unset; top: 819px; width: 100%; } .framer-TZuuz .framer-9f4rzr { opacity: unset; right: unset; top: 554px; width: 100%; } .framer-TZuuz .framer-1cd3e88 { height: 600px; left: calc(50.00000000000002% - 100% / 2); opacity: unset; right: unset; top: 278px; width: 100%; } .framer-TZuuz .framer-10tinar { height: 1319px; opacity: unset; right: unset; top: 50px; width: 100%; z-index: 0; } .framer-TZuuz .framer-gnkqlh { opacity: unset; }}`],`framer-TZuuz`),D_.displayName=`Home`,D_.defaultProps={height:4360,width:1200},re(D_,[{explicitInter:!0,fonts:[]},...d_,...p_,...h_,...g_],{supportsExplicitInterCodegen:!0}),D_.loader={load:(e,t)=>(t.locale,Promise.allSettled([z(l_,{},t),z(Xm,{},t),z(Pe,{},t)]))},O_={exports:{queryParamNames:{type:`variable`,annotations:{framerContractVersion:`1`}},default:{type:`reactComponent`,name:`FrameraugiA20Il`,slots:[],annotations:{framerIntrinsicWidth:`1200`,framerLayoutTemplateFlowEffect:`true`,framerAcceptsLayoutTemplate:`true`,framerContractVersion:`1`,framerScrollSections:`{"Tvlyy13uf":{"pattern":":Tvlyy13uf","name":"home-hero"},"y9cMHIKOa":{"pattern":":y9cMHIKOa","name":"7"},"jHE1lPhJB":{"pattern":":jHE1lPhJB","name":"6"},"RAL5pHDzI":{"pattern":":RAL5pHDzI","name":"5"},"vyRzPsUVj":{"pattern":":vyRzPsUVj","name":"4"},"iNKJZVXDN":{"pattern":":iNKJZVXDN","name":"3"},"C0kvYctpy":{"pattern":":C0kvYctpy","name":"2"},"ooyXbmMzm":{"pattern":":ooyXbmMzm","name":"1"},"LGU_CCEsR":{"pattern":":LGU_CCEsR","name":"logo-change"}}`,framerCanvasComponentVariantDetails:`{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"v68ho8kTh":{"layout":["fixed","auto"]},"LRnQP_yWU":{"layout":["fixed","auto"]}}}`,framerResponsiveScreen:`true`,framerDisplayContentsDiv:`false`,framerImmutableVariables:`true`,framerAutoSizeImages:`true`,framerComponentViewportWidth:`true`,framerColorSyntax:`true`,framerIntrinsicHeight:`4360`}},Props:{type:`tsType`,annotations:{framerContractVersion:`1`}},__FramerMetadata__:{type:`variable`}}}}))();export{O_ as __FramerMetadata__,D_ as default,v_ as queryParamNames};
//# sourceMappingURL=SR2A2G-HnC3IksMIWuE7zzQ3xAwujsHPJgLXSbJ-dlg.B4e3h5Ql.mjs.map