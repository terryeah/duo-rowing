const __vite__fileDeps=["assets/duo-rowing-CvpwgX6R.js","assets/duo-rowing-B8A7qHKb.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&u(r)}).observe(document,{childList:!0,subtree:!0});function a(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(o){if(o.ep)return;o.ep=!0;const t=a(o);fetch(o.href,t)}})();const v="modulepreload",H=function(e){return"/"+e},m={},L=function(n,a,u){let o=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),r=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));o=Promise.all(a.map(c=>{if(c=H(c),c in m)return;m[c]=!0;const s=c.endsWith(".css"),h=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${h}`))return;const i=document.createElement("link");if(i.rel=s?"stylesheet":v,s||(i.as="script",i.crossOrigin=""),i.href=c,r&&i.setAttribute("nonce",r),document.head.appendChild(i),s)return new Promise((p,g)=>{i.addEventListener("load",p),i.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>n()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})};function T(){const e=document.createElement("div"),n=document.createElement("img");return e.className="image-wrapper",n.className="hero-image",n.src="/images/duo-large.webp",n.alt="Hero Image",e.appendChild(n),e}function f(){const e=document.createElement("section");return e.classList.add("hero"),e.innerHTML=`
        ${T().outerHTML}
        <!-- Other home page content -->
    `,e.outerHTML}function M(){const e=document.createElement("div");return e.innerHTML="<h1>Product Hero</h1>",e}function E(){const e=document.createElement("div");return e.innerHTML=`
        <section class="hero">
            ${M().outerHTML}
        </section>
        <!-- Other home page content -->
    `,e.outerHTML}function y(){const e=document.createElement("div");return e.innerHTML="<h1>About Hero</h1>",e}function b(){const e=document.createElement("div");return e.innerHTML=`
        <section class="hero">
            ${y().outerHTML}
        </section>
        <!-- Other home page content -->
    `,e.outerHTML}function w(){const e=document.createElement("div");return e.innerHTML="<h1>Contact Hero</h1>",e}function P(){const e=document.createElement("div");return e.innerHTML=`
        <section class="hero">
            ${w().outerHTML}
        </section>
        <!-- Other home page content -->
    `,e.outerHTML}function l(){const e=window.location.pathname,n=document.querySelector(".app");e==="/home"||e==="/"?(document.title="Duo Rowing",n.innerHTML=f()):e==="/product"?(document.title="Product - Wheels",n.innerHTML=E()):e==="/about"?(document.title="About Us",n.innerHTML=b()):e==="/contact"?(document.title="Contact Us",n.innerHTML=P()):n.innerHTML=f()}function O(){return`
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
    `}function d(){const e=document.querySelector("header"),n=document.querySelector("nav");e&&(e.innerHTML=O()),n&&(n.innerHTML=S())}function $(e){history.pushState(null,null,e),l(),d()}document.addEventListener("DOMContentLoaded",()=>{l(),d(),window.navigateTo=$,L(()=>import("./duo-rowing-CvpwgX6R.js"),__vite__mapDeps([0,1]))});window.addEventListener("popstate",()=>{l(),d()});
