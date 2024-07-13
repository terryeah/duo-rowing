const __vite__fileDeps=["assets/duo-rowing-ogLO4MuO.js","assets/duo-rowing-Bo0Q5ygK.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();const H="modulepreload",L=function(e){return"/"+e},m={},T=function(t,r,u){let o=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),c=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.all(r.map(i=>{if(i=L(i),i in m)return;m[i]=!0;const s=i.endsWith(".css"),p=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${p}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":H,s||(a.as="script",a.crossOrigin=""),a.href=i,c&&a.setAttribute("nonce",c),document.head.appendChild(a),s)return new Promise((v,g)=>{a.addEventListener("load",v),a.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>t()).catch(n=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=n,window.dispatchEvent(c),!c.defaultPrevented)throw n})};function M(){const e=document.createElement("div"),t=document.createElement("img");return e.className="image-wrapper",t.className="hero-image",t.src="/images/duo-large.webp",t.alt="Hero Image",e.appendChild(t),e}function E(e=""){const t=document.createElement("div");t.className="divider-wrapper";const r=document.createElement("div");return r.className=`divider ${e}`,t.appendChild(r),t}function h(){return`
        <div>Test</div>
    `}function f(){const e=document.createElement("section"),t=document.createElement("footer");return e.classList.add("hero"),e.innerHTML=`
        ${M().outerHTML}
        ${E("left-aligned").outerHTML}
    `,t.innerHTML=`
        ${h().outerHTML}
    `,`
        ${e.outerHTML}
        ${t.outerHTML}
    `}function y(){const e=document.createElement("div");return e.innerHTML="<h1>Product Hero</h1>",e}function w(){const e=document.createElement("div");return e.innerHTML=`
        <section class="hero">
            ${y().outerHTML}
        </section>
        <!-- Other home page content -->
    `,e.outerHTML}function b(){const e=document.createElement("div");return e.innerHTML="<h1>About Hero</h1>",e}function P(){const e=document.createElement("div");return e.innerHTML=`
        <section class="hero">
            ${b().outerHTML}
        </section>
        <!-- Other home page content -->
    `,e.outerHTML}function $(){const e=document.createElement("div");return e.innerHTML="<h1>Contact Hero</h1>",e}function O(){const e=document.createElement("div");return e.innerHTML=`
        <section class="hero">
            ${$().outerHTML}
        </section>
        <!-- Other home page content -->
        <div>
            <p>Contact message test</p>
        </div>
    `,e.outerHTML}function l(){const e=window.location.pathname,t=document.querySelector(".app");e==="/home"||e==="/"?(document.title="Duo Rowing",t.innerHTML=f()):e==="/product"?(document.title="Product - Wheels",t.innerHTML=w()):e==="/about"?(document.title="About Us",t.innerHTML=P()):e==="/contact"?(document.title="Contact Us",t.innerHTML=O()):t.innerHTML=f()}function S(){return`
        <div class="row">
            <div class="col">
                <img class="main-logo" src="/images/logo.svg" alt="Logo" width="61" height="51" />
            </div>
            <div class="col">
                <img class="mobile-menu" src="/images/mobile-menu.svg" alt="Mobile Menu" width="50" height="20" />
            </div>
        </div>
    `}function C(){return`
        <ul>
            <li><a href="/home" onclick="event.preventDefault(); navigateTo('/home')">Home</a></li>
            <li><a href="/product" onclick="event.preventDefault(); navigateTo('/product')">Product</a></li>
            <li><a href="/about" onclick="event.preventDefault(); navigateTo('/about')">About</a></li>
            <li><a href="/contact" onclick="event.preventDefault(); navigateTo('/contact')">Contact</a></li>
        </ul>
    `}function d(){const e=document.querySelector("header"),t=document.querySelector("nav"),r=document.querySelector("footer");e&&(e.innerHTML=S()),t&&(t.innerHTML=C()),r&&(r.innerHTML=h())}function D(e){history.pushState(null,null,e),l(),d()}document.addEventListener("DOMContentLoaded",()=>{l(),d(),window.navigateTo=D,T(()=>import("./duo-rowing-ogLO4MuO.js"),__vite__mapDeps([0,1]))});window.addEventListener("popstate",()=>{l(),d()});
