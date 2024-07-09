const __vite__fileDeps=["assets/duo-rowing-ogLO4MuO.js","assets/duo-rowing-Bo0Q5ygK.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const g="modulepreload",H=function(e){return"/"+e},m={},L=function(t,c,u){let o=Promise.resolve();if(c&&c.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),r=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.all(c.map(i=>{if(i=H(i),i in m)return;m[i]=!0;const s=i.endsWith(".css"),h=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${h}`))return;const a=document.createElement("link");if(a.rel=s?"stylesheet":g,s||(a.as="script",a.crossOrigin=""),a.href=i,r&&a.setAttribute("nonce",r),document.head.appendChild(a),s)return new Promise((p,v)=>{a.addEventListener("load",p),a.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>t()).catch(n=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=n,window.dispatchEvent(r),!r.defaultPrevented)throw n})};function T(){const e=document.createElement("div"),t=document.createElement("img");return e.className="image-wrapper",t.className="hero-image",t.src="/images/duo-large.webp",t.alt="Hero Image",e.appendChild(t),e}function E(e=""){const t=document.createElement("div");t.className="divider-wrapper";const c=document.createElement("div");return c.className=`divider ${e}`,t.appendChild(c),t}function f(){const e=document.createElement("section");return e.classList.add("hero"),e.innerHTML=`
        ${T().outerHTML}
        ${E("left-aligned").outerHTML}
    `,e.outerHTML}function M(){const e=document.createElement("div");return e.innerHTML="<h1>Product Hero</h1>",e}function w(){const e=document.createElement("div");return e.innerHTML=`
        <section class="hero">
            ${M().outerHTML}
        </section>
        <!-- Other home page content -->
    `,e.outerHTML}function y(){const e=document.createElement("div");return e.innerHTML="<h1>About Hero</h1>",e}function b(){const e=document.createElement("div");return e.innerHTML=`
        <section class="hero">
            ${y().outerHTML}
        </section>
        <!-- Other home page content -->
    `,e.outerHTML}function P(){const e=document.createElement("div");return e.innerHTML="<h1>Contact Hero</h1>",e}function O(){const e=document.createElement("div");return e.innerHTML=`
        <section class="hero">
            ${P().outerHTML}
        </section>
        <!-- Other home page content -->
    `,e.outerHTML}function l(){const e=window.location.pathname,t=document.querySelector(".app");e==="/home"||e==="/"?(document.title="Duo Rowing",t.innerHTML=f()):e==="/product"?(document.title="Product - Wheels",t.innerHTML=w()):e==="/about"?(document.title="About Us",t.innerHTML=b()):e==="/contact"?(document.title="Contact Us",t.innerHTML=O()):t.innerHTML=f()}function $(){return`
        <div class="row">
            <div class="col">
                <img class="main-logo" src="/images/logo.svg" alt="Logo" width="61" height="51" />
            </div>
            <div class="col">
                <img class="mobile-menu" src="/images/mobile-menu.svg" alt="Mobile Menu" width="50" height="20" />
            </div>
        </div>
    `}function S(){return`
        <ul>
            <li><a href="/home" onclick="event.preventDefault(); navigateTo('/home')">Home</a></li>
            <li><a href="/product" onclick="event.preventDefault(); navigateTo('/product')">Product</a></li>
            <li><a href="/about" onclick="event.preventDefault(); navigateTo('/about')">About</a></li>
            <li><a href="/contact" onclick="event.preventDefault(); navigateTo('/contact')">Contact</a></li>
        </ul>
    `}function d(){const e=document.querySelector("header"),t=document.querySelector("nav");e&&(e.innerHTML=$()),t&&(t.innerHTML=S())}function C(e){history.pushState(null,null,e),l(),d()}document.addEventListener("DOMContentLoaded",()=>{l(),d(),window.navigateTo=C,L(()=>import("./duo-rowing-ogLO4MuO.js"),__vite__mapDeps([0,1]))});window.addEventListener("popstate",()=>{l(),d()});
