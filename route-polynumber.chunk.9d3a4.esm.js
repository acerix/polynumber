(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{kLqH:function(e,t,n){"use strict";function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.r(t);var d=n("hosL"),l=n("Hrl7"),u=n("QRet");const f=["getContext","init","ready","draw","onResize","framesPerSecond"],h={alpha:!1,depth:!1,preserveDrawingBuffer:!0};var v=e=>{const{getContext:t,init:n,ready:a,draw:i,onResize:s,framesPerSecond:c}=e,l=o(e,f),v=Object(d.createRef)(),w=c?1e3/c:void 0;return Object(u.d)((()=>{const e=v.current;let r,o=!1,c=-1;const d=t?t(e):e.getContext("webgl2",h);if(!d)return alert("Error getting context. WebGL2 is required."),void("undefined"!=typeof window&&(window.location.href="https://get.webgl.org/webgl2/"));const l=()=>{d.canvas.width=window.innerWidth,d.canvas.height=window.innerHeight,s&&s(d)};window.addEventListener("resize",l),l();const u=()=>{o=!0};window.addEventListener("blur",u);const f=()=>{o=!1};window.addEventListener("focus",f);const m=()=>{document.fullscreenElement||document.body.requestFullscreen().catch((e=>{console.error("Fullscreen fail:",e)}))};window.addEventListener("click",m),n&&n(d);const b=()=>{o?setTimeout(b,128):(c++,r=w?window.setTimeout(b,w):window.requestAnimationFrame(b),i(d,c))},g=()=>{setTimeout(b,0)};return void 0===a?g():a(g),()=>{w?window.clearTimeout(r):window.cancelAnimationFrame(r),window.removeEventListener("resize",l),window.removeEventListener("blur",u),window.removeEventListener("focus",f),window.removeEventListener("click",m)}}),[t,n,a,i,s,v,w]),Object(d.h)("canvas",r({ref:v},l))},w=n("z36D"),m="canvas_frame__jQZRh",b='#version 300 es\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n#define TAU 6.2831853071795865\n\nuniform float u_time;\nuniform vec2 u_translate;\nuniform vec2 u_scale;\nout vec4 fragmentColor;\n\nvoid main() {\n  float x = ( gl_FragCoord.x + u_translate.x ) * u_scale.x;\n  float y = ( gl_FragCoord.y + u_translate.y ) * u_scale.y;\n\n  // the curve is where this evaluates to 0, otherwise this is the "distance" to it\n  float z = POLYNUMBER_FORMULA;\n\n  // draw the curve as full green, tapering out to zero at a distance of 1\n  float d = 1.0 - abs(z);\n  fragmentColor.g = d < 0.0 ? 0.0 : pow(d, 16.0);\n\n  // draw the fractional part of z as blue, the integer values can be seen as black-blue barriers\n  fragmentColor.b = mod(z + u_time / 67.0, 1.0);\n\n  // draw a sin wave through zed in red\n  fragmentColor.r = sin(z * TAU - u_time / 11.0);\n}\n',g=n("oyW1"),p=n("wXA0"),O=n("Q46o"),y=n.n(O);const E=["getContext","init","ready","draw","onResize","animate","framesPerSecond"];var L=e=>{const{getContext:t,init:n,ready:r,draw:o,onResize:s,animate:c,framesPerSecond:l}=e,f=i(e,E),h=Object(d.createRef)(),v=l?1e3/l:void 0;return Object(u.d)((()=>{const a=h.current;let i,d=!1,l=-1;const u=t?t(a):a.getContext("2d"),f=()=>{u.canvas.width=window.innerWidth,u.canvas.height=window.innerHeight,s&&s(u)};window.addEventListener("resize",f),f();const w=()=>{d=!0};window.addEventListener("blur",w);const m=()=>{d=!1};window.addEventListener("focus",m);const b=()=>{document.fullscreenElement||document.body.requestFullscreen().catch((e=>{console.error("Fullscreen fail:",e)}))};window.addEventListener("click",b),n&&n(u);const g=()=>{o(u,l++)},p=()=>{d?setTimeout(p,128):(l++,i=v?window.setTimeout(p,v):window.requestAnimationFrame(p),o(u,l))};e.canvasMethodRefs&&(e.canvasMethodRefs.render=g);const O=()=>{!1===c?setTimeout(g):setTimeout(p)};return void 0===r?O():r(O),()=>{v?window.clearTimeout(i):window.cancelAnimationFrame(i),window.removeEventListener("resize",f),window.removeEventListener("blur",w),window.removeEventListener("focus",m),window.removeEventListener("click",b)}}),[t,n,r,o,s,h,e.canvasMethodRefs,c,v]),Object(d.h)("canvas",a({ref:h},f))},j="grid_overlay__w4LWV";const S=["setTranslate","setScale"],_=10**(1/13),R=1.0055504070680625;let A=!0;const x=(e,t)=>{if(0===e)return"0";if(t<5){if(t>=0)return`${e}${"0".repeat(t)}`.replace(/\B(?=(\d{3})+(?!\d))/g,",");if(t>-5)return(e*10**t).toFixed(-t)}return`${e}×⏨${t}`},P=e=>{const{setTranslate:t,setScale:n}=e,r=c(e,S),o={render(){console.log("canvasMethodRefs.render()")}},a=[0,0],i=[0,0],l=[1,1],f=[0,0],h=[-2,10],v=[-4,-4];let w=0;const m=()=>{o&&"render"in o&&o.render()},b=e=>{e.clearRect(0,0,e.canvas.width,e.canvas.height),f[0]*=.9,f[1]*=.9,A&&(i[0]+=f[0],i[1]-=f[1]);const n=Math.ceil(Math.log10(24*l[0])),r=Math.ceil(Math.log10(24*l[1])),o=10**n,a=10**r,s=o/l[0],c=a/l[1],d=Math.ceil(i[0]*l[0]/o),u=Math.ceil(i[1]*l[1]/a),w=d*o/l[0]-i[0],m=i[1]-u*a/l[1],b=Math.floor(e.canvas.width/s),g=Math.floor(e.canvas.height/c),p=Math.floor(b/2),O=Math.floor(g/2);e.beginPath();for(let t=0;t<=b;t++){const n=w+t*s;if(e.moveTo(n,0),e.lineTo(n,e.canvas.height),t===p)for(let t=0;t<=g;t++){const o=x(t+u,r);e.fillText(o,n+v[0],m+e.canvas.height-t*c+v[1])}}for(let t=0;t<=g;t++){const r=m+e.canvas.height-t*c;if(e.moveTo(0,r),e.lineTo(e.canvas.width,r),t===O)for(let t=0;t<=b;t++){const o=x(t+d,n),a=w+t*s;e.save(),e.translate(a+h[0],r+h[1]),e.rotate(-Math.PI/6),e.fillText(o,0,0),e.restore()}}e.stroke(),t&&t(i[0],i[1])};return Object(u.d)((()=>{let e=0;const r=[0,0],o=[-1,-1],a=[-1,-1],s=t=>(e|=1<<t.button,r[0]=t.clientX,r[1]=t.clientY,f[0]=f[1]=0,A=!(1&e),t.preventDefault(),!1);window.addEventListener("mousedown",s);const c=t=>(e^=1<<t.button,t.preventDefault(),A=!(1&e),!1);window.addEventListener("mouseup",c);const d=e=>(e.preventDefault(),!1);window.addEventListener("contextmenu",d);const u=o=>{const a=r[0]-o.clientX,s=r[1]-o.clientY;if(1&e&&(f[0]=4*a,f[1]=4*s,i[0]+=a,i[1]-=s,t&&(t(i[0],i[1]),m())),2&e){const e=R**-s;l[0]*=e,l[1]*=e,n&&(n(l[0],l[1]),m())}if(4&e){const e=[(r[0]+i[0])*l[0],(w-r[1]+i[1])*l[1]],o=[e[0]/l[0]-i[0],e[1]/l[1]-i[1]];l[0]*=R**a,l[1]*=R**-s,n&&n(l[0],l[1]);const c=[e[0]/l[0]-i[0],e[1]/l[1]-i[1]];i[0]-=o[0]-c[0]-a,i[1]+=c[1]-o[1]-s,t&&t(i[0],i[1]),m()}r[0]=o.clientX,r[1]=o.clientY};window.addEventListener("mousemove",u);const h=e=>(o[0]=e.touches[0].pageX,o[1]=e.touches[0].pageY,f[0]=f[1]=0,A=!1,!1);window.addEventListener("touchstart",h);const v=()=>(o[0]=o[1]=-1,A=!0,!1);window.addEventListener("touchend",v);const b=e=>{if(o[0]>-1)if(1===e.touches.length){const n=o[0]-e.touches[0].pageX,r=o[1]-e.touches[0].pageY;f[0]=n,f[1]=r,i[0]+=n,i[1]-=r,a[0]=a[1]=-1,t&&(t(i[0],i[1]),m())}else{if(a[0]>-1){const r=e.touches[0].pageX,s=e.touches[0].pageY,c=e.touches[1].pageX,d=e.touches[1].pageY,u=((o[0]-a[0])**2+(o[1]-a[1])**2)/((r-c)**2+(s-d)**2),f=[(r+c)/2,(s+d)/2],h=[(f[0]+i[0])*l[0],(w-f[1]+i[1])*l[1]],v=[h[0]/l[0]-i[0],h[1]/l[1]-i[1]];l[0]*=u,l[1]*=u,n&&n(l[0],l[1]);const b=[h[0]/l[0]-i[0],h[1]/l[1]-i[1]];i[0]-=v[0]-b[0],i[1]+=b[1]-v[1],t&&t(i[0],i[1]),m()}a[0]=e.touches[1].pageX,a[1]=e.touches[1].pageY}o[0]=e.touches[0].pageX,o[1]=e.touches[0].pageY};window.addEventListener("touchmove",b);window.addEventListener("wheel",(e=>{const o=e.deltaY>0?_:1/_,a=[(r[0]+i[0])*l[0],(w-r[1]+i[1])*l[1]],s=[a[0]/l[0]-i[0],a[1]/l[1]-i[1]];l[0]*=o,l[1]*=o,n&&n(l[0],l[1]);const c=[a[0]/l[0]-i[0],a[1]/l[1]-i[1]];i[0]-=s[0]-c[0],i[1]+=c[1]-s[1],t&&t(i[0],i[1]),m()}));const g=e=>{switch(e.code){case"KeyW":case"ArrowUp":case"Numpad8":i[1]-=16*_;break;case"KeyS":case"ArrowDown":case"Numpad2":i[1]+=16*_;break;case"KeyA":case"ArrowLeft":case"Numpad4":i[0]+=16*_;break;case"KeyD":case"ArrowRight":case"Numpad6":i[0]-=16*_;break;case"NumpadSubtract":case"Minus":l[0]*=_,l[1]*=_,n&&(n(l[0],l[1]),m());break;case"NumpadAdd":case"Equal":l[0]/=_,l[1]/=_,n&&(n(l[0],l[1]),m())}};return window.addEventListener("keydown",g),()=>{window.cancelAnimationFrame(undefined),window.removeEventListener("mousedown",s),window.removeEventListener("mouseup",c),window.removeEventListener("contextmenu",d),window.removeEventListener("mousemove",u),window.removeEventListener("touchstart",h),window.removeEventListener("touchend",v),window.removeEventListener("touchmove",b),window.removeEventListener("keypress",g)}}),[]),Object(d.h)("div",s({class:j},r),Object(d.h)(L,{canvasMethodRefs:o,init:e=>{var t;const o=null!==(t=r.initialScale)&&void 0!==t?t:16/e.canvas.width;l[0]=l[1]=o,n&&n(l[0],l[1]),b(e)},onResize:e=>{e.strokeStyle="#999",e.lineWidth=1,e.fillStyle="#fff",e.textAlign="right",e.font="12px monospace",w=e.canvas.height;const t=e.canvas.width/2,n=e.canvas.height/2;if(0===a[0])a[0]=t,a[1]=n,i[0]=-a[0],i[1]=-a[1];else{const e=n-a[1];i[0]-=t-a[0],i[1]-=e,a[0]=t,a[1]=n}b(e)},draw:b,animate:!0}))};const T=(e,t,n)=>{const r=e.createShader(t);if(!r)throw"Missing shader";if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS))throw e.getShaderInfoLog(r);return r};t.default=e=>{const{path:t}=e;if(!(t in g.a))return Object(d.h)(w.a,{default:!0});const n=g.a[t],r=Object(d.createRef)();let o,a,i,s;const c=[0,0],u=[1,1],f=(e,t)=>{c[0]=e,c[1]=t},h=new y.a(n.coefficents);return Object(d.h)("section",{ref:r,class:m},Object(d.h)(l.b,null,Object(d.h)("title",null,n.title)),Object(d.h)("div",{class:"d-none"},Object(d.h)(p.a,{path:n.path})),Object(d.h)("div",{class:"offcanvas offcanvas-start","data-bs-scroll":"true","data-bs-backdrop":"false",id:"shaders","aria-labelledby":"shadersLabel"},Object(d.h)("div",{class:"offcanvas-header"},Object(d.h)("h5",{class:"offcanvas-title",id:"shadersLabel"},"Shaders"),Object(d.h)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"parameterPanel","aria-label":"Close"})),Object(d.h)("div",{class:"offcanvas-body"},Object(d.h)("form",null,Object(d.h)("div",{class:"mb-3"},Object(d.h)("label",{for:"vertexShader"},"Vertex Shader"),Object(d.h)("textarea",{class:"form-control",id:"vertexShader",rows:6},"#version 300 es\nin vec2 a_position;\nin vec4 a_color;\nout vec4 v_color;\n\nvoid main(void) {\n  gl_Position = vec4(a_position, 0.0, 1.0);\n  v_color = a_color;\n}\n")),Object(d.h)("div",{class:"mb-3"},Object(d.h)("label",{for:"fragmentShader"},"Fragment Shader"),Object(d.h)("textarea",{class:"form-control",id:"fragmentShader",rows:20},b.replace("POLYNUMBER_FORMULA",h.toGLSLFormula())))))),Object(d.h)("div",null,Object(d.h)(P,{setTranslate:f,setScale:(e,t)=>{u[0]=e,u[1]=t,f(0,0)}})),Object(d.h)(v,{init:e=>{c[0]=-e.canvas.width/2,c[1]=-e.canvas.height/2,o=(e=>{var t,n;const r=e.createProgram();if(!r)throw"Missing program";const o=null===(t=document.getElementById("fragmentShader"))||void 0===t?void 0:t.textContent;if(!o)throw"Missing fragmentShaderSource";const a=T(e,e.FRAGMENT_SHADER,o);e.attachShader(r,a);const i=null===(n=document.getElementById("vertexShader"))||void 0===n?void 0:n.textContent;if(!i)throw"Missing vertexShaderSource";const s=T(e,e.VERTEX_SHADER,i);var c;if(e.attachShader(r,s),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS))throw null!==(c=e.getProgramInfoLog(r))&&void 0!==c?c:"Error from getProgramParameter";return e.useProgram(r),r})(e),((e,t)=>{const n=e.getAttribLocation(t,"a_position"),r=new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0]),o=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,o),e.bufferData(e.ARRAY_BUFFER,r,e.STATIC_DRAW),e.vertexAttribPointer(n,3,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,null),e.enableVertexAttribArray(n),a=e.getUniformLocation(t,"u_time"),i=e.getUniformLocation(t,"u_translate"),s=e.getUniformLocation(t,"u_scale")})(e,o)},onResize:e=>{e.viewport(0,0,e.canvas.width,e.canvas.height)},draw:(e,t)=>{e.uniform1f(a,t),e.uniform2f(i,c[0],c[1]),e.uniform2f(s,u[0],u[1]),e.drawArrays(e.TRIANGLE_STRIP,0,4)}}))}}}]);
//# sourceMappingURL=route-polynumber.chunk.9d3a4.esm.js.map