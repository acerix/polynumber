(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{kLqH:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.r(t);var l=n("hosL"),d=n("Hrl7"),u=n("QRet");const f=["getContext","init","ready","draw","onResize","framesPerSecond"],h={alpha:!1,depth:!1,preserveDrawingBuffer:!0};var v=e=>{const{getContext:t,init:n,ready:a,draw:i,onResize:s,framesPerSecond:c}=e,d=o(e,f),v=Object(l.createRef)(),w=c?1e3/c:void 0;return Object(u.d)((()=>{const e=v.current;let r,o=!1,c=-1;const l=t?t(e):e.getContext("webgl2",h);if(!l)return alert("Error getting context. WebGL2 is required."),void("undefined"!=typeof window&&(window.location.href="https://get.webgl.org/webgl2/"));const d=()=>{l.canvas.width=window.innerWidth,l.canvas.height=window.innerHeight,s&&s(l)};window.addEventListener("resize",d),d();const u=()=>{o=!0};window.addEventListener("blur",u);const f=()=>{o=!1};window.addEventListener("focus",f);const m=()=>{document.fullscreenElement||document.body.requestFullscreen().catch((e=>{console.error("Fullscreen fail:",e)}))};window.addEventListener("click",m),n&&n(l);const g=()=>{o?setTimeout(g,128):(c++,r=w?window.setTimeout(g,w):window.requestAnimationFrame(g),i(l,c))},b=()=>{setTimeout(g,0)};return void 0===a?b():a(b),()=>{w?window.clearTimeout(r):window.cancelAnimationFrame(r),window.removeEventListener("resize",d),window.removeEventListener("blur",u),window.removeEventListener("focus",f),window.removeEventListener("click",m)}}),[t,n,a,i,s,v,w]),Object(l.h)("canvas",r({ref:v},d))},w=n("z36D"),m="canvas_frame__1myZW",g="#version 300 es\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nuniform float u_time;\nuniform vec2 u_translate;\nuniform vec2 u_scale;\nout vec4 fragmentColor;\n\nvoid main() {\n  float x = ( gl_FragCoord.x + u_translate.x ) * u_scale.x;\n  float y = ( gl_FragCoord.y + u_translate.y ) * u_scale.y;\n  float x2 = x*x;\n  float y2 = y*y;\n\n  float z = POLYNUMBER_FORMULA;\n\n  fragmentColor.r = mod(z + u_time / 43.0, 1.0);\n  fragmentColor.g = z < 1.0 ? z : 1.0 / z;\n  fragmentColor.b = mod(z - u_time / 73.0, 1.0);\n}\n";const b=["getContext","init","ready","draw","onResize","animate","framesPerSecond"];var p=e=>{const{getContext:t,init:n,ready:r,draw:o,onResize:s,animate:c,framesPerSecond:d}=e,f=i(e,b),h=Object(l.createRef)(),v=d?1e3/d:void 0;return Object(u.d)((()=>{const a=h.current;let i,l=!1,d=-1;const u=t?t(a):a.getContext("2d"),f=()=>{u.canvas.width=window.innerWidth,u.canvas.height=window.innerHeight,s&&s(u)};window.addEventListener("resize",f),f();const w=()=>{l=!0};window.addEventListener("blur",w);const m=()=>{l=!1};window.addEventListener("focus",m);const g=()=>{document.fullscreenElement||document.body.requestFullscreen().catch((e=>{console.error("Fullscreen fail:",e)}))};window.addEventListener("click",g),n&&n(u);const b=()=>{o(u,d++)},p=()=>{l?setTimeout(p,128):(d++,i=v?window.setTimeout(p,v):window.requestAnimationFrame(p),o(u,d))};e.canvasMethodRefs&&(e.canvasMethodRefs.render=b);const O=()=>{!1===c?setTimeout(b):setTimeout(p)};return void 0===r?O():r(O),()=>{v?window.clearTimeout(i):window.cancelAnimationFrame(i),window.removeEventListener("resize",f),window.removeEventListener("blur",w),window.removeEventListener("focus",m),window.removeEventListener("click",g)}}),[t,n,r,o,s,h,e.canvasMethodRefs,c,v]),Object(l.h)("canvas",a({ref:h},f))},O="grid_overlay__3wiLR";const y=["setTranslate","setScale"],E=(e,t)=>0===e?"0":t>-1&&t<4?`${e}${"0".repeat(t)}`:`${e}⏨${t}`,L=10**(1/13),j=1.0055504070680625;let S=!0;var _=e=>{const{setTranslate:t,setScale:n}=e,r=c(e,y),o={render(){console.log("canvasMethodRefs.render()")}},a=[0,0],i=[0,0],d=[1,1],f=[0,0],h=[-4,16],v=[-4,-4];let w=0;const m=e=>{var t;e.strokeStyle="#999",e.fillStyle="#ccc",e.textAlign="right",e.lineWidth=1,e.font="12px monospace",w=e.canvas.height,a[0]=e.canvas.width/2,a[1]=e.canvas.height/2,i[0]=-a[0],i[1]=-a[1];const o=null!==(t=r.initialScale)&&void 0!==t?t:64/e.canvas.width;d[0]=d[1]=o,n&&n(d[0],d[1]),b(e)},g=()=>{o&&"render"in o&&o.render()},b=e=>{e.clearRect(0,0,e.canvas.width,e.canvas.height),f[0]*=.9,f[1]*=.9,S&&(i[0]+=f[0],i[1]-=f[1]);const n=Math.ceil(Math.log10(24*d[0])),r=Math.ceil(Math.log10(24*d[1])),o=10**n,a=10**r,s=o/d[0],c=a/d[1],l=Math.ceil(i[0]*d[0]/o),u=Math.ceil(i[1]*d[1]/a),w=l*o/d[0]-i[0],m=i[1]-u*a/d[1],g=Math.floor(e.canvas.width/s),b=Math.floor(e.canvas.height/c),p=Math.floor(g/2),O=Math.floor(b/2);e.beginPath();for(let t=0;t<=g;t++){const n=w+t*s;if(e.moveTo(n,0),e.lineTo(n,e.canvas.height),t===p)for(let t=0;t<=b;t++){const o=E(t+u,r);e.fillText(o,n+v[0],m+e.canvas.height-t*c+v[1])}}for(let t=0;t<=b;t++){const r=m+e.canvas.height-t*c;if(e.moveTo(0,r),e.lineTo(e.canvas.width,r),t===O)for(let t=0;t<=g;t++){const o=E(t+l,n);e.fillText(o,w+t*s+h[0],r+h[1])}}e.stroke(),t&&t(i[0],i[1])};return Object(u.d)((()=>{let e=0;const r=[0,0],o=[-1,-1],a=[-1,-1],s=t=>(e|=1<<t.button,r[0]=t.clientX,r[1]=t.clientY,f[0]=f[1]=0,S=!(1&e),t.preventDefault(),!1);window.addEventListener("mousedown",s);const c=t=>(e^=1<<t.button,t.preventDefault(),S=!(1&e),!1);window.addEventListener("mouseup",c);const l=e=>(e.preventDefault(),!1);window.addEventListener("contextmenu",l);const u=o=>{const a=r[0]-o.clientX,s=r[1]-o.clientY;if(1&e&&(f[0]=4*a,f[1]=4*s,i[0]+=a,i[1]-=s,t&&(t(i[0],i[1]),g())),2&e){const e=j**-s;d[0]*=e,d[1]*=e,n&&(n(d[0],d[1]),g())}if(4&e){const e=[(r[0]+i[0])*d[0],(w-r[1]+i[1])*d[1]],o=[e[0]/d[0]-i[0],e[1]/d[1]-i[1]];d[0]*=j**a,d[1]*=j**-s,n&&n(d[0],d[1]);const c=[e[0]/d[0]-i[0],e[1]/d[1]-i[1]];i[0]-=o[0]-c[0]-a,i[1]+=c[1]-o[1]-s,t&&t(i[0],i[1]),g()}r[0]=o.clientX,r[1]=o.clientY};window.addEventListener("mousemove",u);const h=e=>(o[0]=e.touches[0].pageX,o[1]=e.touches[0].pageY,f[0]=f[1]=0,S=!1,!1);window.addEventListener("touchstart",h);const v=()=>(o[0]=o[1]=-1,S=!0,!1);window.addEventListener("touchend",v);const m=e=>{if(o[0]>-1)if(1===e.touches.length){const n=o[0]-e.touches[0].pageX,r=o[1]-e.touches[0].pageY;f[0]=n,f[1]=r,i[0]+=n,i[1]-=r,a[0]=a[1]=-1,t&&(t(i[0],i[1]),g())}else{if(a[0]>-1){const r=e.touches[0].pageX,s=e.touches[0].pageY,c=e.touches[1].pageX,l=e.touches[1].pageY,u=((o[0]-a[0])**2+(o[1]-a[1])**2)/((r-c)**2+(s-l)**2),f=[(r+c)/2,(s+l)/2],h=[(f[0]+i[0])*d[0],(w-f[1]+i[1])*d[1]],v=[h[0]/d[0]-i[0],h[1]/d[1]-i[1]];d[0]*=u,d[1]*=u,n&&n(d[0],d[1]);const m=[h[0]/d[0]-i[0],h[1]/d[1]-i[1]];i[0]-=v[0]-m[0],i[1]+=m[1]-v[1],t&&t(i[0],i[1]),g()}a[0]=e.touches[1].pageX,a[1]=e.touches[1].pageY}o[0]=e.touches[0].pageX,o[1]=e.touches[0].pageY};window.addEventListener("touchmove",m);window.addEventListener("wheel",(e=>{const o=e.deltaY>0?L:1/L,a=[(r[0]+i[0])*d[0],(w-r[1]+i[1])*d[1]],s=[a[0]/d[0]-i[0],a[1]/d[1]-i[1]];d[0]*=o,d[1]*=o,n&&n(d[0],d[1]);const c=[a[0]/d[0]-i[0],a[1]/d[1]-i[1]];i[0]-=s[0]-c[0],i[1]+=c[1]-s[1],t&&t(i[0],i[1]),g()}));const b=e=>{switch(e.code){case"KeyW":case"ArrowUp":case"Numpad8":i[1]-=16*L;break;case"KeyS":case"ArrowDown":case"Numpad2":i[1]+=16*L;break;case"KeyA":case"ArrowLeft":case"Numpad4":i[0]+=16*L;break;case"KeyD":case"ArrowRight":case"Numpad6":i[0]-=16*L;break;case"NumpadSubtract":case"Minus":d[0]*=L,d[1]*=L,n&&(n(d[0],d[1]),g());break;case"NumpadAdd":case"Equal":d[0]/=L,d[1]/=L,n&&(n(d[0],d[1]),g())}};return window.addEventListener("keydown",b),()=>{window.cancelAnimationFrame(undefined),window.removeEventListener("mousedown",s),window.removeEventListener("mouseup",c),window.removeEventListener("contextmenu",l),window.removeEventListener("mousemove",u),window.removeEventListener("touchstart",h),window.removeEventListener("touchend",v),window.removeEventListener("touchmove",m),window.removeEventListener("keypress",b)}}),[]),Object(l.h)("div",s({class:O},r),Object(l.h)(p,{canvasMethodRefs:o,init:m,onResize:m,draw:b,animate:!0}))},R=n("oyW1"),x=n("wXA0"),A=n("Q46o"),P=n.n(A);const T=(e,t,n)=>{const r=e.createShader(t);if(!r)throw"Missing shader";if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw e.getShaderInfoLog(r);return r};t.default=e=>{const{path:t}=e;if(!(t in R.a))return Object(l.h)(w.a,{default:!0});const n=R.a[t],r=Object(l.createRef)();let o,a,i,s;const c=[0,0],u=[1,1],f=(e,t)=>{c[0]=e,c[1]=t},h=(e,t)=>{e.uniform1f(a,t),e.uniform2f(i,c[0],c[1]),e.uniform2f(s,u[0],u[1]),e.drawArrays(e.TRIANGLE_STRIP,0,4)},b=new P.a(n.coefficents);return Object(l.h)("section",{ref:r,class:m},Object(l.h)(d.b,null,Object(l.h)("title",null,n.title)),Object(l.h)("div",{class:"d-none"},Object(l.h)(x.a,{path:n.path})),Object(l.h)("div",{class:"offcanvas offcanvas-start","data-bs-scroll":"true","data-bs-backdrop":"false",id:"shaders","aria-labelledby":"shadersLabel"},Object(l.h)("div",{class:"offcanvas-header"},Object(l.h)("h5",{class:"offcanvas-title",id:"shadersLabel"},"Shaders"),Object(l.h)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"parameterPanel","aria-label":"Close"})),Object(l.h)("div",{class:"offcanvas-body"},Object(l.h)("form",null,Object(l.h)("div",{class:"mb-3"},Object(l.h)("label",{for:"vertexShader"},"Vertex Shader"),Object(l.h)("textarea",{class:"form-control",id:"vertexShader",rows:6},"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\nout vec4 v_color;\n\nvoid main(void) {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n  v_color = a_color;\n}\n")),Object(l.h)("div",{class:"mb-3"},Object(l.h)("label",{for:"fragmentShader"},"Fragment Shader"),Object(l.h)("textarea",{class:"form-control",id:"fragmentShader",rows:20},g.replace("POLYNUMBER_FORMULA",b.toGLSLFormula())))))),Object(l.h)("div",null,Object(l.h)(_,{setTranslate:f,setScale:(e,t)=>{u[0]=e,u[1]=t,f(0,0)}})),Object(l.h)(v,{init:e=>{c[0]=-e.canvas.width/2,c[1]=-e.canvas.height/2,o=(e=>{var t,n;const r=e.createProgram();if(!r)throw"Missing program";const o=null===(t=document.getElementById("fragmentShader"))||void 0===t?void 0:t.textContent;if(!o)throw"Missing fragmentShaderSource";const a=T(e,e.FRAGMENT_SHADER,o);e.attachShader(r,a);const i=null===(n=document.getElementById("vertexShader"))||void 0===n?void 0:n.textContent;if(!i)throw"Missing vertexShaderSource";const s=T(e,e.VERTEX_SHADER,i);var c;if(e.attachShader(r,s),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw null!==(c=e.getProgramInfoLog(r))&&void 0!==c?c:"Error from getProgramParameter";return e.useProgram(r),r})(e),((e,t)=>{const n=e.getAttribLocation(t,"a_position"),r=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0]),o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),e.vertexAttribPointer(n,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null),e.enableVertexAttribArray(n),a=e.getUniformLocation(t,"u_time"),i=e.getUniformLocation(t,"u_translate"),s=e.getUniformLocation(t,"u_scale")})(e,o)},onResize:e=>{e.viewport(0,0,e.canvas.width,e.canvas.height),e.clear(e.COLOR_BUFFER_BIT),h(e,-1)},draw:h}))}}}]);
//# sourceMappingURL=route-polynumber.chunk.b99ef.esm.js.map