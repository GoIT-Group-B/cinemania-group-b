(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const c="https://api.themoviedb.org/3",i="52238d7fab5c2c01b99e751619dd16ec";async function d(){const s=(await(await fetch(`${c}/trending/movie/day?api_key=${i}`)).json()).results[0];p(s)}function p(r){const t=document.querySelector(".hero-container");console.log(r),t.innerHTML=`
<div class="hero-content">
  <h1 class="hero-title">${r.title}</h1>
  <div class="hero-rating">
    <span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star-empty">★</span> 
  </div>
  <p class="hero-description">${r.overview}</p>
  <div class="hero-buttons">
    <button class="watch-trailer-btn">Watch trailer</button>
    <button class="more-details-btn">More details</button>
  </div>
</div>
<div class="hero-image-container">
  <img src="https://image.tmdb.org/t/p/original${r.backdrop_path}" alt="${r.title} backdrop" class="hero-backdrop-image">
</div>
`}async function u(){const t=await(await fetch(`${c}/genre/movie/list?api_key=${i}&language=en-US`)).json();f(t.genres)}function f(r){const t=document.getElementById("category");t&&(t.innerHTML=r.map(s=>`
        <div class="category-card">${s.name}</div>
      `).join(""))}d();u();async function l(r,t){const s=document.getElementById(r);try{const e=await(await fetch(t)).text();s.innerHTML=e}catch(o){s.innerHTML=`<p style="color:red;">${t} yüklenemedi.</p>`,console.error(`Hata: ${t}`,o)}}l("header","./partials/header.html");document.addEventListener("DOMContentLoaded",async()=>{await l("hero","./partials/hero.html"),await d(),await fetchCategories()});
//# sourceMappingURL=main-DKE9bqm9.js.map
