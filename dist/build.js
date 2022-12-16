(()=>{var e={918:(e,t,s)=>{if("undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");const i=s(997),n="htmlembed";AFRAME.registerSystem(n,{init:function(){i.generatePageCSS()},remove:function(){i.cssgenerated=[],i.cssembed=[],i.cssEmbedEncodedCache=null}}),AFRAME.registerComponent(n,{schema:{ppu:{type:"number",default:256}},init:function(){this._onRaycasterIntersected=AFRAME.utils.bind(this._onRaycasterIntersected,this),this._onRaycasterIntersectedCleared=AFRAME.utils.bind(this._onRaycasterIntersectedCleared,this),this._onMouseDown=AFRAME.utils.bind(this._onMouseDown,this),this._onMouseUp=AFRAME.utils.bind(this._onMouseUp,this);let e=new i(this.el,(()=>{t&&(t.needsUpdate=!0)}),((e,t)=>{switch(e){case"resize":this.el.emit("resize");break;case"rendered":this.el.emit("rendered");break;case"focusableenter":this.el.emit("focusableenter",t);break;case"focusableleave":this.el.emit("focusableleave",t);break;case"inputrequired":this.el.emit("inputrequired",t)}}));this.htmlcanvas=e;let t=new THREE.Texture(e.canvas);t.minFilter=THREE.LinearFilter,t.wrapS=THREE.ClampToEdgeWrapping,t.wrapT=THREE.ClampToEdgeWrapping;const s=new THREE.MeshBasicMaterial({map:t,transparent:!0});let n=new THREE.PlaneGeometry,a=new THREE.Mesh(n,s);this.el.setObject3D("screen",a),this.screen=a,this.resize()},play:function(){this.el.addEventListener("raycaster-intersected",this._onRaycasterIntersected),this.el.addEventListener("raycaster-intersected-cleared",this._onRaycasterIntersectedCleared),this.el.addEventListener("mousedown",this._onMouseDown),this.el.addEventListener("mouseup",this._onMouseUp)},pause:function(){this.el.removeEventListener("raycaster-intersected",this._onRaycasterIntersected),this.el.removeEventListener("raycaster-intersected-cleared",this._onRaycasterIntersectedCleared),this.el.removeEventListener("mousedown",this._onMouseDown),this.el.removeEventListener("mouseup",this._onMouseUp)},_onRaycasterIntersected:function(e){this.raycaster=e.detail.el},_onRaycasterIntersectedCleared:function(e){this.htmlcanvas.clearHover(),this.raycaster=null},_onMouseDown:function(e){e instanceof CustomEvent?(this._updateLastCanavasXY(),this.htmlcanvas.mousedown(this.lastX,this.lastY)):e.stopPropagation()},_onMouseUp:function(e){e instanceof CustomEvent?(this._updateLastCanavasXY(),this.htmlcanvas.mouseup(this.lastX,this.lastY)):e.stopPropagation()},resize(){this.width=this.htmlcanvas.width/this.data.ppu,this.height=this.htmlcanvas.height/this.data.ppu,this.screen.scale.x=Math.max(1e-4,this.width),this.screen.scale.y=Math.max(1e-4,this.height)},update(){this.resize()},forceRender(){this.htmlcanvas.forceRender()},tick:function(){this.resize(),this._updateLastCanavasXY()},remove:function(){this.el.removeObject3D("screen"),this.htmlcanvas.cleanUp(),this.htmlcanvas=null},_updateLastCanavasXY:function(){if(!this.raycaster)return;let e=this.raycaster.components.raycaster.getIntersection(this.el);if(!e)return void(this.htmlcanvas.overElements.length>0&&this.htmlcanvas.clearHover());let t=e.point;this.el.object3D.worldToLocal(t);let s=this.width/2,i=this.height/2,n=Math.round((t.x+s)/this.width*this.htmlcanvas.canvas.width),a=Math.round((1-(t.y+i)/this.height)*this.htmlcanvas.canvas.height);this.lastX==n&&this.lastY==a||this.htmlcanvas.mousemove(n,a),this.lastX=n,this.lastY=a}})},997:e=>{!function(){let e=document.createElement("style");e.innerHTML="input, select,textarea{border: 1px solid #000000;margin: 0;background-color: #ffffff;-webkit-appearance: none;}:-webkit-autofill {color: #fff !important;}input[type='checkbox']{width: 20px;height: 20px;display: inline-block;}input[type='radio']{width: 20px;height: 20px;display: inline-block;border-radius: 50%;}input[type='checkbox'][checked],input[type='radio'][checked]{background-color: #555555;}a-entity[htmlembed] img{display:inline-block}a-entity[htmlembed]{display:none}";let t=document.querySelector("head");t.insertBefore(e,t.firstChild)}();class t{constructor(e,s,i){if(!e)throw"Container Element is Required";let n;this.updateCallback=s,this.eventCallback=i,this.onImageLoad=this.onImageLoad.bind(this),this.onMouseMoveHtml=this.onMouseMoveHtml.bind(this),this.onHashChangeEvent=this.onHashChangeEvent.bind(this),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.html=e,this.html.style.display="block",this.width=0,this.height=0,this.html.style.display="none",this.html.style.position="absolute",this.html.style.top="0",this.html.style.left="0",this.html.style.overflow="hidden",this.html.addEventListener("mousemove",this.onMouseMoveHtml),window.addEventListener("hashchange",this.onHashChangeEvent,!1),this.overElements=[],this.focusElement=null,this.img=new Image,this.img.addEventListener("load",this.onImageLoad),t.csshack();let a=new MutationObserver(((e,t)=>{if(!this.nowatch)if(e.filter((e=>"childList"===e.type)).length>0)this.hashChanged();else for(let t=0;t<e.length;t++)if(e[t].target!=this.html||"attributes"!=e[t].type){if(!e[t].target.styleRef||"class"==e[t].attributeName){let s=this.csssig(e[t].target);if(e[t].target.styleRef==s)continue;e[t].target.styleRef=s}n||(n=setTimeout((()=>{this.svgToImg(),n=!1})))}}));a.observe(this.html,{attributes:!0,childList:!0,subtree:!0}),this.observer=a,this.serializer=new XMLSerializer,this.hashChanged()}static cssgenerated=[];static cssembed=[];static cssEmbedEncodedCache=null;onImageLoad(){this.render()}onMouseMoveHtml(e){e.stopPropagation()}onHashChangeEvent(){this.hashChanged()}forceRender(){Array.from(document.querySelectorAll("*")).map((e=>e.classCache={})),this.svgToImg()}hashChanged(){if(window.clearedHash!=window.location.hash){Array.from(document.querySelectorAll("*")).map((e=>e.classCache={}));let e=document.querySelector(".targethack");if(e&&e.classList.remove("targethack"),window.location.hash){let e=document.querySelector(window.location.hash);e&&e.classList.add("targethack")}}window.clearedHash=window.location.hash,this.svgToImg()}cleanUp(){this.observer.disconnect(),window.removeEventListener("hashchange",this.onHashChangeEvent),this.html.removeEventListener("mousemove",this.onMouseMoveHtml),this.img.removeEventListener("load",this.onImageLoad),this.canvas.remove()}static regexpHover=new RegExp(":hover","g");static regexpActive=new RegExp(":active","g");static regexpFocus=new RegExp(":focus","g");static regexpTarget=new RegExp(":target","g");static csshack(){let e=document.styleSheets;for(let s=0;s<e.length;s++)if(!Array.from(e[s].cssRules).find((e=>!!e.selectorText&&(e.selectorText.indexOf(".hoverhack")>-1||e.selectorText.indexOf(".activehack")>-1||e.selectorText.indexOf(".focushack")>-1||e.selectorText.indexOf(".targethack")>-1))))try{let i=e[s].cssRules,n=[];for(let e=0;e<i.length;e++){i[e].cssText.indexOf(":hover")>-1&&n.push(i[e].cssText.replace(t.regexpHover,".hoverhack")),i[e].cssText.indexOf(":active")>-1&&n.push(i[e].cssText.replace(t.regexpActive,".activehack")),i[e].cssText.indexOf(":focus")>-1&&n.push(i[e].cssText.replace(t.regexpFocus,".focushack")),i[e].cssText.indexOf(":target")>-1&&n.push(i[e].cssText.replace(t.regexpTarget,".targethack"));let s=n.indexOf(i[e].cssText);s>-1&&n.splice(s,1)}for(let t=0;t<n.length;t++)e[s].insertRule(n[t])}catch(e){}}dbj2(e){let t,s=5381;for(let i=0;i<e.length;i++)t=e.charCodeAt(i),s=(s<<5)+s+t;return s}csssig(e){if(e.classCache||(e.classCache={}),!e.classCache[e.className]){let t=getComputedStyle(e),s="";for(let e=0;e<t.length;e++)s+=t[t[e]];e.classCache[e.className]=this.dbj2(s)}return e.classCache[e.className]}static arrayBufferToBase64(e){let t="",s=e.byteLength;for(let i=0;i<s;i++)t+=String.fromCharCode(e[i]);return window.btoa(t)}static embedCss(e,s){return new Promise((i=>{let n,a=[];s=(s=(s=(s=s.replace(t.regexpHover,".hoverhack")).replace(t.regexpActive,".activehack")).replace(t.regexpFocus,".focushack")).replace(t.regexpTarget,".targethack");const l=RegExp(/url\((?!['"]?(?:data):)['"]?([^'"\)]*)['"]?\)/gi);for(;n=l.exec(s);)a.push(t.getDataURL(new URL(n[1],e)).then((e=>t=>{s=s.replace(e[1],t)})(n)));Promise.all(a).then((e=>{i(s)}))}))}static getURL(e){return e=new URL(e,window.location).href,new Promise((t=>{let s=new XMLHttpRequest;s.open("GET",e,!0),s.responseType="arraybuffer",s.onload=()=>{t(s)},s.send()}))}static generatePageCSS(){(new Date).getMilliseconds();let e=Array.from(document.querySelectorAll("style , link[type='text/css'], link[rel='stylesheet']")),s=[];for(let i=0;i<e.length;i++){let n=e[i];if(-1==t.cssgenerated.indexOf(n)){t.csshack();let e=t.cssgenerated.length;t.cssgenerated.push(n),"STYLE"==n.tagName?s.push(t.embedCss(window.location,n.innerHTML).then(((e,s)=>e=>{t.cssembed[s]=e})(0,e))):s.push(t.getURL(n.getAttribute("href")).then((e=>s=>{let i=new TextDecoder("utf-8").decode(s.response);return t.embedCss(window.location,i).then(((e,s)=>e=>{t.cssembed[s]=e})(0,e))})(e)))}}return Promise.all(s).then((e=>{e.length&&(t.cssEmbedEncodedCache=encodeURIComponent(t.cssembed.join("")))}))}static getDataURL(e){return new Promise((s=>{t.getURL(e).then((i=>{let n=new Uint8Array(i.response),a=i.getResponseHeader("Content-Type").split(";")[0];if("text/css"==a){let i=new TextDecoder("utf-8").decode(n);t.embedCss(e,i).then((e=>{let t=window.btoa(e);t.length>0?s("data:"+a+";base64,"+t):s("")}))}else{let e=t.arrayBufferToBase64(n);s("data:"+a+";base64,"+e)}}))}))}embededSVG(){let e=[],s=this.html.querySelectorAll("*");for(let i=0;i<s.length;i++){let n=s[i].getAttributeNS("http://www.w3.org/1999/xlink","href");if(n&&e.push(t.getDataURL(n).then((e=>t=>{e.removeAttributeNS("http://www.w3.org/1999/xlink","href"),e.setAttribute("href",t)})(s[i]))),"IMG"==s[i].tagName&&"data"!=s[i].src.substr(0,4)&&e.push(t.getDataURL(s[i].src).then((e=>t=>{e.setAttribute("src",t)})(s[i]))),"http://www.w3.org/1999/xhtml"==s[i].namespaceURI&&s[i].hasAttribute("style")){let n=s[i].getAttribute("style");e.push(t.embedCss(window.location,n).then(((e,t)=>s=>{e!=s&&t.setAttribute("style",s)})(n,s[i])))}}let i=this.html.querySelectorAll("style");for(let s=0;s<i.length;s++)e.push(t.embedCss(window.location,i[s].innerHTML).then((e=>t=>{e.innerHTML!=t&&(e.innerHTML=t)})(i[s])));return Promise.all(e)}updateFocusBlur(){let e=this.html.querySelectorAll("*");for(let t=0;t<e.length;t++){let s=e[t];s.tabIndex>-1?(s.hasOwnProperty("focus")||(s.focus=(e=>()=>this.setFocus(e))(s)),s.hasOwnProperty("blur")||(s.blur=(e=>()=>this.focusElement==e&&this.setBlur())(s))):(delete s.focus,delete s.blur)}}getParents(){let e=[],t=[],s=this.html.parentNode;if(s)do{let i=s.tagName.toLowerCase();"a-"==i.substr(0,2)&&(i="div");let n="<"+("body"==i?'body xmlns="http://www.w3.org/1999/xhtml"':i)+' style="transform: none;left: 0;top: 0;position:static;display: block" class="'+s.className+'"'+(s.id?' id="'+s.id+'"':"")+">";e.unshift(n);let a="</"+i+">";if(t.push(a),"body"==i)break}while(s=s.parentNode);return[e.join(""),t.join("")]}updateCheckedAttributes(){let e=this.html.getElementsByTagName("input");for(let t=0;t<e.length;t++){let s=e[t];s.hasAttribute("checked")?s.checked||s.removeAttribute("checked"):s.checked&&s.setAttribute("checked","")}}svgToImg(){this.updateFocusBlur(),Promise.all([this.embededSVG(),t.generatePageCSS()]).then((()=>{this.html.style.display="block",this.width==this.html.offsetWidth&&this.height==this.html.offsetHeight||(this.width=this.html.offsetWidth,this.height=this.html.offsetHeight,this.canvas.width=this.width,this.canvas.height=this.height,this.eventCallback&&this.eventCallback("resized"));let e=this.getParents(),s=encodeURIComponent(`<svg width="${this.width}" height="${this.height}" xmlns="http://www.w3.org/2000/svg"><defs><style type="text/css"><![CDATA[a[href]{color:#0000EE;text-decoration:underline;}`)+t.cssEmbedEncodedCache+encodeURIComponent(`]]></style></defs><foreignObject x="0" y="0" width="${this.width}" height="${this.height}">${e[0]+this.serializer.serializeToString(this.html)+e[1]}</foreignObject></svg>`);this.img.src="data:image/svg+xml;utf8,"+s,this.html.style.display="none"}))}render(){this.canvas.width=this.width,this.canvas.height=this.height,this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.img,0,0),this.updateCallback&&this.updateCallback(),this.eventCallback&&this.eventCallback("rendered")}transformPoint(e,t,s,i,n){let a=e.transform;if(0==a.indexOf("matrix(")){let e=new THREE.Matrix4,t=a.substring(7,a.length-1).split(", ").map(parseFloat);e.elements[0]=t[0],e.elements[1]=t[1],e.elements[4]=t[2],e.elements[5]=t[3],e.elements[12]=t[4],e.elements[13]=t[5]}else{if(0!=a.indexOf("matrix3d("))return[t,s,z];{let e=new THREE.Matrix4,t=a.substring(9,a.length-1).split(", ").map(parseFloat);e.elements=t}}let l=e["transform-origin"];l=l.replace(new RegExp("px","g"),"").split(" ").map(parseFloat);let h=i+l[0],r=n+l[1],o=0;l[2]&&(o+=l[2]);let c=(new THREE.Matrix4).makeTranslation(-h,-r,-o),d=(new THREE.Matrix4).makeTranslation(h,r,o);if(transform=d.multiply(transform).multiply(c),0!=transform.determinant())return[t,s];let u=(new THREE.Matrix4).getInverse(transform),m=new THREE.Vector3(t,s,0),f=new THREE.Vector3(t,s,-1);m.applyMatrix4(u),f.applyMatrix4(u);let p=f.sub(m).normalize();if(0==p.z)return!1;let v=p.multiplyScalar(-m.z/p.z).add(m);return[v.x,v.y]}getBorderRadii(e,t){let s,i=["border-top-left-radius","border-top-right-radius","border-bottom-right-radius","border-bottom-left-radius"],n=[];for(let e=0;e<i.length;e++){let a=t[i[e]],l=/(\d*)([a-z%]{1,3})/gi,h=[];for(;s=l.exec(a);)h.push({value:s[1],unit:s[2]});1==h.length&&h.push(h[0]),n.push(h)}const a={px:1,"%":e.offsetWidth/100};let l=[];for(let e=0;e<n.length;e++){let t=n[e],s=[];for(let e=0;e<t.length;e++)s.push(t[e].value*a[t[e].unit]);l.push(s)}let h,r=1,o=1,c=1,d=1,u=l[0][0]+l[1][0];u>e.offsetWidth&&(h=1/u*e.offsetWidth,r=Math.min(r,h),o=Math.min(o,h));let m=l[1][1]+l[2][1];m>e.offsetHeight&&(h=1/m*e.offsetHeight,c=Math.min(c,h),o=Math.min(o,h));let f=l[2][0]+l[3][0];f>e.offsetWidth&&(h=1/f*e.offsetWidth,c=Math.min(c,h),d=Math.min(d,h));let p=l[0][1]+l[3][1];return p>e.offsetHeight&&(h=1/p*e.offsetHeight,r=Math.min(r,h),d=Math.min(d,h)),l[0][0]=l[0][0]*r,l[0][1]=l[0][1]*r,l[1][0]=l[1][0]*o,l[1][1]=l[1][1]*o,l[2][0]=l[2][0]*c,l[2][1]=l[2][1]*c,l[3][0]=l[3][0]*d,l[3][1]=l[3][1]*d,l}checkInBorder(e,t,s,i,n,a){if("0px"==t["border-radius"])return!0;let l=e.offsetWidth,h=e.offsetHeight,r=this.getBorderRadii(e,t);if(s<r[0][0]+n&&i<r[0][1]+a){let e=(r[0][0]+n-s)/r[0][0],t=(r[0][1]+a-i)/r[0][1];if(e*e+t*t>1)return!1}if(s>n+l-r[1][0]&&i<r[1][1]+a){let e=(s-(n+l-r[1][0]))/r[1][0],t=(r[1][1]+a-i)/r[1][1];if(e*e+t*t>1)return!1}if(s>n+l-r[2][0]&&i>a+h-r[2][1]){let e=(s-(n+l-r[2][0]))/r[2][0],t=(i-(a+h-r[2][1]))/r[2][1];if(e*e+t*t>1)return!1}if(s<r[3][0]+n&&i>a+h-r[3][1]){let e=(r[3][0]+n-s)/r[3][0],t=(i-(a+h-r[3][1]))/r[3][1];if(e*e+t*t>1)return!1}return!0}checkElement(e,t,s,i,n,a,l,h){if(!l.offsetParent)return;let r=window.getComputedStyle(l),o=l.offsetLeft+s,c=l.offsetTop+i,d=l.offsetWidth,u=l.offsetHeight,m=r["z-index"];if("auto"!=m&&(n=0,a=parseInt(m)),"static"!=r.position&&l!=this.html&&"auto"==m&&(n+=1),("block"==r.display||"inline-block"==r.display)&&"none"!=r.transform){let s=this.transformPoint(r,e,t,o,c);if(!s)return;e=s[0],t=s[1],"auto"==m&&(n+=1)}if(e>o&&e<o+d&&t>c&&t<c+u)this.checkInBorder(l,r,e,t,o,c)&&(n>=h.zIndex||a>h.level)&&a>=h.level&&"none"!=r["pointer-events"]&&(h.zIndex=n,h.ele=l,h.level=a);else if("visible"!=r.overflow)return;let f=l.firstChild;if(f)do{1==f.nodeType&&(f.offsetParent==l?this.checkElement(e,t,s+o,i+c,n,a,f,h):this.checkElement(e,t,s,i,n,a,f,h))}while(f=f.nextSibling)}elementAt(e,t){this.html.style.display="block";let s={zIndex:0,ele:null,level:0};return this.checkElement(e,t,0,0,0,0,this.html,s),this.html.style.display="none",s.ele}moveMouse(){let e=this.moveX,t=this.moveY,s=this.moveButton,i={screenX:e,screenY:t,clientX:e,clientY:t,button:s||0,bubbles:!0,cancelable:!0},n={clientX:e,clientY:t,button:s||0,bubbles:!1},a=this.elementAt(e,t);if(a!=this.lastEle)if(a){a.tabIndex>-1&&this.eventCallback&&this.eventCallback("focusableenter",{target:a}),this.lastEle&&this.lastEle.tabIndex>-1&&this.eventCallback&&this.eventCallback("focusableleave",{target:this.lastEle});let e=[],t=a;this.lastEle&&this.lastEle.dispatchEvent(new MouseEvent("mouseout",i)),a.dispatchEvent(new MouseEvent("mouseover",i));do{if(t==this.html)break;-1==this.overElements.indexOf(t)&&(t.classList&&t.classList.add("hoverhack"),t.dispatchEvent(new MouseEvent("mouseenter",n)),this.overElements.push(t)),e.push(t)}while(t=t.parentNode);for(let t=0;t<this.overElements.length;t++){let s=this.overElements[t];s&&-1==e.indexOf(s)&&(s.classList&&s.classList.remove("hoverhack"),s.dispatchEvent(new MouseEvent("mouseleave",n)),this.overElements.splice(t,1),t--)}}else{let e;for(;e=this.overElements.pop();)e.classList&&e.classList.remove("hoverhack"),e.dispatchEvent(new MouseEvent("mouseout",i))}a&&-1==this.overElements.indexOf(a)&&this.overElements.push(a),this.lastEle=a,a&&a.dispatchEvent(new MouseEvent("mousemove",i)),this.moveTimer=!1}mousemove(e,t,s){this.moveX=e,this.moveY=t,this.moveButton=s,this.moveTimer||(this.moveTimer=setTimeout(this.moveMouse.bind(this),20))}mousedown(e,t,s){let i={screenX:e,screenY:t,clientX:e,clientY:t,button:s||0,bubbles:!0,cancelable:!0},n=this.elementAt(e,t);n&&(this.activeElement=n,n.classList.add("activehack"),n.classList.remove("hoverhack"),n.dispatchEvent(new MouseEvent("mousedown",i))),this.mousedownElement=n}setFocus(e){e.dispatchEvent(new FocusEvent("focus")),e.dispatchEvent(new CustomEvent("focusin",{bubbles:!0,cancelable:!1})),e.classList.add("focushack"),this.focusElement=e}setBlur(){this.focusElement&&(this.focusElement.classList.remove("focushack"),this.focusElement.dispatchEvent(new FocusEvent("blur")),this.focusElement.dispatchEvent(new CustomEvent("focusout",{bubbles:!0,cancelable:!1})))}clearHover(){let e;for(this.moveTimer&&(clearTimeout(this.moveTimer),this.moveTimer=!1);e=this.overElements.pop();)e.classList&&e.classList.remove("hoverhack"),e.dispatchEvent(new MouseEvent("mouseout",{bubbles:!0,cancelable:!0}));this.lastEle&&this.lastEle.dispatchEvent(new MouseEvent("mouseleave",{bubbles:!0,cancelable:!0})),this.lastEle=null;let t=document.querySelector(".activeElement");t&&(t.classList.remove("activehack"),this.activeElement=null)}mouseup(e,t,s){let i={screenX:e,screenY:t,clientX:e,clientY:t,button:s||0,bubbles:!0,cancelable:!0},n=this.elementAt(e,t);this.activeElement&&(this.activeElement.classList.remove("activehack"),n&&(n.classList.add("hoverhack"),-1==this.overElements.indexOf(n)&&this.overElements.push(n)),this.activeElement=null),n?(n.dispatchEvent(new MouseEvent("mouseup",i)),n!=this.focusElement&&(this.setBlur(),n.tabIndex>-1?this.setFocus(n):this.focusElement=null),n==this.mousedownElement&&(n.dispatchEvent(new MouseEvent("click",i)),"INPUT"==n.tagName&&this.updateCheckedAttributes(),"INPUT"!=n.tagName&&"TEXTAREA"!=n.tagName&&"SELECT"!=n.tagName||this.eventCallback&&this.eventCallback("inputrequired",{target:n}))):(this.focusElement&&this.focusElement.dispatchEvent(new FocusEvent("blur")),this.focusElement=null)}}e.exports=t}},t={};!function s(i){var n=t[i];if(void 0!==n)return n.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,s),a.exports}(918)})();