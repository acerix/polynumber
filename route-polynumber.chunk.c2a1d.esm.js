(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{kLqH:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.r(t);var l=n("hosL"),d=n("Hrl7"),u=n("QRet");const h=["getContext","init","ready","draw","onResize","framesPerSecond"],f={alpha:!1,depth:!1,preserveDrawingBuffer:!0};var v=e=>{const{getContext:t,init:n,ready:a,draw:i,onResize:s,framesPerSecond:c}=e,d=o(e,h),v=Object(l.createRef)(),w=c?1e3/c:void 0;return Object(u.d)((()=>{const e=v.current;let r,o=!1,c=-1;const l=t?t(e):e.getContext("webgl2",f);if(!l)return alert("Error getting context. WebGL2 is required."),void("undefined"!=typeof window&&(window.location.href="https://get.webgl.org/webgl2/"));const d=()=>{l.canvas.width=window.innerWidth,l.canvas.height=window.innerHeight,s&&s(l)};window.addEventListener("resize",d),d();const u=()=>{o=!0};window.addEventListener("blur",u);const h=()=>{o=!1};window.addEventListener("focus",h);const m=()=>{document.fullscreenElement||document.body.requestFullscreen().catch((e=>{console.error("Fullscreen fail:",e)}))};window.addEventListener("click",m),n&&n(l);const b=()=>{o?setTimeout(b,128):(c++,r=w?window.setTimeout(b,w):window.requestAnimationFrame(b),i(l,c))},g=()=>{setTimeout(b,0)};return void 0===a?g():a(g),()=>{w?window.clearTimeout(r):window.cancelAnimationFrame(r),window.removeEventListener("resize",d),window.removeEventListener("blur",u),window.removeEventListener("focus",h),window.removeEventListener("click",m)}}),[t,n,a,i,s,v,w]),Object(l.h)("canvas",r({ref:v},d))},w=n("z36D"),m="canvas_frame__jQZRh",b='#version 300 es\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#define TAU 6.2831853071795865\n\nuniform float u_time;\nuniform vec2 u_translate;\nuniform vec2 u_scale;\nout vec4 fragmentColor;\n\nvoid main() {\n  float x = ( gl_FragCoord.x + u_translate.x ) * u_scale.x;\n  float y = ( gl_FragCoord.y + u_translate.y ) * u_scale.y;\n\n  // the curve is where this evaluates to 0, otherwise this is the "distance" to it\n  float z = POLYNUMBER_FORMULA;\n\n  // draw the curve as full green, tapering out to zero at a distance of 1\n  float d = 1.0 - abs(z);\n  fragmentColor.g = d < 0.0 ? 0.0 : pow(d, 16.0);\n\n  // draw the fractional part of z as blue, the integer values can be seen as black-blue barriers\n  fragmentColor.b = mod(z + u_time / 67.0, 1.0);\n\n  // draw a sin wave through zed in red\n  fragmentColor.r = sin(z * TAU - u_time / 11.0);\n}\n',g=n("oyW1"),p=n("wXA0"),O=n("Q46o"),y=n.n(O);const E=["getContext","init","ready","draw","onResize","animate","framesPerSecond"];var L=e=>{const{getContext:t,init:n,ready:r,draw:o,onResize:s,animate:c,framesPerSecond:d}=e,h=i(e,E),f=Object(l.createRef)(),v=d?1e3/d:void 0;return Object(u.d)((()=>{const a=f.current;let i,l=!1,d=-1;const u=t?t(a):a.getContext("2d"),h=()=>{u.canvas.width=window.innerWidth,u.canvas.height=window.innerHeight,s&&s(u)};window.addEventListener("resize",h),h();const w=()=>{l=!0};window.addEventListener("blur",w);const m=()=>{l=!1};window.addEventListener("focus",m);const b=()=>{document.fullscreenElement||document.body.requestFullscreen().catch((e=>{console.error("Fullscreen fail:",e)}))};window.addEventListener("click",b),n&&n(u);const g=()=>{o(u,d++)},p=()=>{l?setTimeout(p,128):(d++,i=v?window.setTimeout(p,v):window.requestAnimationFrame(p),o(u,d))};e.canvasMethodRefs&&(e.canvasMethodRefs.render=g);const O=()=>{!1===c?setTimeout(g):setTimeout(p)};return void 0===r?O():r(O),()=>{v?window.clearTimeout(i):window.cancelAnimationFrame(i),window.removeEventListener("resize",h),window.removeEventListener("blur",w),window.removeEventListener("focus",m),window.removeEventListener("click",b)}}),[t,n,r,o,s,f,e.canvasMethodRefs,c,v]),Object(l.h)("canvas",a({ref:f},h))},j="grid_overlay__w4LWV";const S=["setTranslate","setScale"],_=10**(1/13),R=1.0055504070680625;let x=!0;const A=(e,t)=>{if(0===e)return"0";if(t<5){if(t>=0)return`${e}${"0".repeat(t)}`.replace(/\B(?=(\d{3})+(?!\d))/g,",");if(t>-5)return(e*10**t).toFixed(-t)}return`${e}×⏨${t}`},P=e=>{const{setTranslate:t,setScale:n}=e,r=c(e,S),o={render(){console.log("canvasMethodRefs.render()")}},a=[0,0],i=[0,0],d=[1,1],h=[0,0],f=[-2,10],v=[-4,-4];let w=0;const m=()=>{o&&"render"in o&&o.render()},b=e=>{e.clearRect(0,0,e.canvas.width,e.canvas.height),h[0]*=.9,h[1]*=.9,x&&(i[0]+=h[0],i[1]-=h[1]);const n=Math.ceil(Math.log10(24*d[0])),r=Math.ceil(Math.log10(24*d[1])),o=10**n,a=10**r,s=o/d[0],c=a/d[1],l=Math.ceil(i[0]*d[0]/o),u=Math.ceil(i[1]*d[1]/a),w=l*o/d[0]-i[0],m=i[1]-u*a/d[1],b=Math.floor(e.canvas.width/s),g=Math.floor(e.canvas.height/c),p=Math.floor(b/2),O=Math.floor(g/2);e.beginPath();for(let t=0;t<=b;t++){const n=w+t*s;if(e.moveTo(n,0),e.lineTo(n,e.canvas.height),t===p)for(let t=0;t<=g;t++){const o=A(t+u,r);e.fillText(o,n+v[0],m+e.canvas.height-t*c+v[1])}}for(let t=0;t<=g;t++){const r=m+e.canvas.height-t*c;if(e.moveTo(0,r),e.lineTo(e.canvas.width,r),t===O)for(let t=0;t<=b;t++){const o=A(t+l,n),a=w+t*s;e.save(),e.translate(a+f[0],r+f[1]),e.rotate(-Math.PI/6),e.fillText(o,0,0),e.restore()}}e.stroke(),t&&t(i[0],i[1])};return Object(u.d)((()=>{let e=0;const r=[0,0],o=[-1,-1],a=[-1,-1],s=t=>(e|=1<<t.button,r[0]=t.clientX,r[1]=t.clientY,h[0]=h[1]=0,x=!(1&e),t.preventDefault(),!1);window.addEventListener("mousedown",s);const c=t=>(e^=1<<t.button,t.preventDefault(),x=!(1&e),!1);window.addEventListener("mouseup",c);const l=e=>(e.preventDefault(),!1);window.addEventListener("contextmenu",l);const u=o=>{const a=r[0]-o.clientX,s=r[1]-o.clientY;if(1&e&&(h[0]=4*a,h[1]=4*s,i[0]+=a,i[1]-=s,t&&(t(i[0],i[1]),m())),2&e){const e=R**-s;d[0]*=e,d[1]*=e,n&&(n(d[0],d[1]),m())}if(4&e){const e=[(r[0]+i[0])*d[0],(w-r[1]+i[1])*d[1]],o=[e[0]/d[0]-i[0],e[1]/d[1]-i[1]];d[0]*=R**a,d[1]*=R**-s,n&&n(d[0],d[1]);const c=[e[0]/d[0]-i[0],e[1]/d[1]-i[1]];i[0]-=o[0]-c[0]-a,i[1]+=c[1]-o[1]-s,t&&t(i[0],i[1]),m()}r[0]=o.clientX,r[1]=o.clientY};window.addEventListener("mousemove",u);const f=e=>(o[0]=e.touches[0].pageX,o[1]=e.touches[0].pageY,h[0]=h[1]=0,x=!1,!1);window.addEventListener("touchstart",f);const v=()=>(o[0]=o[1]=-1,x=!0,!1);window.addEventListener("touchend",v);const b=e=>{if(o[0]>-1)if(1===e.touches.length){const n=o[0]-e.touches[0].pageX,r=o[1]-e.touches[0].pageY;h[0]=n,h[1]=r,i[0]+=n,i[1]-=r,a[0]=a[1]=-1,t&&(t(i[0],i[1]),m())}else{if(a[0]>-1){const r=e.touches[0].pageX,s=e.touches[0].pageY,c=e.touches[1].pageX,l=e.touches[1].pageY,u=((o[0]-a[0])**2+(o[1]-a[1])**2)/((r-c)**2+(s-l)**2),h=[(r+c)/2,(s+l)/2],f=[(h[0]+i[0])*d[0],(w-h[1]+i[1])*d[1]],v=[f[0]/d[0]-i[0],f[1]/d[1]-i[1]];d[0]*=u,d[1]*=u,n&&n(d[0],d[1]);const b=[f[0]/d[0]-i[0],f[1]/d[1]-i[1]];i[0]-=v[0]-b[0],i[1]+=b[1]-v[1],t&&t(i[0],i[1]),m()}a[0]=e.touches[1].pageX,a[1]=e.touches[1].pageY}o[0]=e.touches[0].pageX,o[1]=e.touches[0].pageY};window.addEventListener("touchmove",b);window.addEventListener("wheel",(e=>{const o=e.deltaY>0?_:1/_,a=[(r[0]+i[0])*d[0],(w-r[1]+i[1])*d[1]],s=[a[0]/d[0]-i[0],a[1]/d[1]-i[1]];d[0]*=o,d[1]*=o,n&&n(d[0],d[1]);const c=[a[0]/d[0]-i[0],a[1]/d[1]-i[1]];i[0]-=s[0]-c[0],i[1]+=c[1]-s[1],t&&t(i[0],i[1]),m()}));const g=e=>{switch(e.code){case"KeyW":case"ArrowUp":case"Numpad8":i[1]-=16*_;break;case"KeyS":case"ArrowDown":case"Numpad2":i[1]+=16*_;break;case"KeyA":case"ArrowLeft":case"Numpad4":i[0]+=16*_;break;case"KeyD":case"ArrowRight":case"Numpad6":i[0]-=16*_;break;case"NumpadSubtract":case"Minus":d[0]*=_,d[1]*=_,n&&(n(d[0],d[1]),m());break;case"NumpadAdd":case"Equal":d[0]/=_,d[1]/=_,n&&(n(d[0],d[1]),m())}};return window.addEventListener("keydown",g),()=>{window.cancelAnimationFrame(undefined),window.removeEventListener("mousedown",s),window.removeEventListener("mouseup",c),window.removeEventListener("contextmenu",l),window.removeEventListener("mousemove",u),window.removeEventListener("touchstart",f),window.removeEventListener("touchend",v),window.removeEventListener("touchmove",b),window.removeEventListener("keypress",g)}}),[]),Object(l.h)("div",s({class:j},r),Object(l.h)(L,{canvasMethodRefs:o,init:e=>{var t;const o=null!==(t=r.initialScale)&&void 0!==t?t:16/e.canvas.width;d[0]=d[1]=o,n&&n(d[0],d[1]),b(e)},onResize:e=>{e.strokeStyle="#999",e.lineWidth=1,e.fillStyle="#fff",e.textAlign="right",e.font="12px monospace",w=e.canvas.height;const t=e.canvas.width/2,n=e.canvas.height/2;if(0===a[0])a[0]=t,a[1]=n,i[0]=-a[0],i[1]=-a[1];else{const e=n-a[1];i[0]-=t-a[0],i[1]-=e,a[0]=t,a[1]=n}b(e)},draw:b,animate:!0}))};const T=(e,t,n)=>{const r=e.createShader(t);if(!r)throw"Missing shader";if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw e.getShaderInfoLog(r);return r};t.default=e=>{const{path:t}=e;if(!(t in g.a))return Object(l.h)(w.a,{default:!0});const n=g.a[t],r=Object(l.createRef)();let o,a,i,s;const c=[0,0],u=[1,1],h=(e,t)=>{c[0]=e,c[1]=t},f=new y.a(n.coefficents);return Object(l.h)("section",{ref:r,class:m},Object(l.h)(d.b,null,Object(l.h)("title",null,n.title)),Object(l.h)("div",{class:"d-none"},Object(l.h)(p.a,{path:n.path})),Object(l.h)("div",{class:"offcanvas offcanvas-start","data-bs-scroll":"true","data-bs-backdrop":"false",id:"shaders","aria-labelledby":"shadersLabel"},Object(l.h)("div",{class:"offcanvas-header"},Object(l.h)("h5",{class:"offcanvas-title",id:"shadersLabel"},"Shaders"),Object(l.h)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"parameterPanel","aria-label":"Close"})),Object(l.h)("div",{class:"offcanvas-body"},Object(l.h)("form",null,Object(l.h)("div",{class:"mb-3"},Object(l.h)("label",{for:"vertexShader"},"Vertex Shader"),Object(l.h)("textarea",{class:"form-control",id:"vertexShader",rows:6},"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\nout vec4 v_color;\n\nvoid main(void) {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n  v_color = a_color;\n}\n")),Object(l.h)("div",{class:"mb-3"},Object(l.h)("label",{for:"fragmentShader"},"Fragment Shader"),Object(l.h)("textarea",{class:"form-control",id:"fragmentShader",rows:20},b.replace("POLYNUMBER_FORMULA",f.toGLSLFormula())))))),Object(l.h)("div",{style:"position: absolute; top: 16px; right: 16px; z-index: 666;"},Object(l.h)("ul",{style:"list-style: none; padding: 0;"},Object(l.h)("li",null,Object(l.h)("a",{href:"/edit/#{polynumber.coefficents}"},"Editor")),Object(l.h)("li",null,n.coefficents.length))),Object(l.h)("div",null,Object(l.h)(P,{setTranslate:h,setScale:(e,t)=>{u[0]=e,u[1]=t,h(0,0)}})),Object(l.h)(v,{init:e=>{c[0]=-e.canvas.width/2,c[1]=-e.canvas.height/2,o=(e=>{var t,n;const r=e.createProgram();if(!r)throw"Missing program";const o=null===(t=document.getElementById("fragmentShader"))||void 0===t?void 0:t.textContent;if(!o)throw"Missing fragmentShaderSource";const a=T(e,e.FRAGMENT_SHADER,o);e.attachShader(r,a);const i=null===(n=document.getElementById("vertexShader"))||void 0===n?void 0:n.textContent;if(!i)throw"Missing vertexShaderSource";const s=T(e,e.VERTEX_SHADER,i);var c;if(e.attachShader(r,s),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw null!==(c=e.getProgramInfoLog(r))&&void 0!==c?c:"Error from getProgramParameter";return e.useProgram(r),r})(e),((e,t)=>{const n=e.getAttribLocation(t,"a_position"),r=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0]),o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),e.vertexAttribPointer(n,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null),e.enableVertexAttribArray(n),a=e.getUniformLocation(t,"u_time"),i=e.getUniformLocation(t,"u_translate"),s=e.getUniformLocation(t,"u_scale")})(e,o)},onResize:e=>{e.viewport(0,0,e.canvas.width,e.canvas.height)},draw:(e,t)=>{e.uniform1f(a,t),e.uniform2f(i,c[0],c[1]),e.uniform2f(s,u[0],u[1]),e.drawArrays(e.TRIANGLE_STRIP,0,4)}}))}}}]);
//# sourceMappingURL=route-polynumber.chunk.c2a1d.esm.js.map