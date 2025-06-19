import"./assets/theme-BdXRRVLI.js";import{f as c,B as p,E as l,c as u,a as m,I as b}from"./assets/stars-ZdAbMgea.js";import"./assets/vendor-DDD7fsZd.js";const g=document.querySelector(".home-hero");async function v(){try{const{results:e}=await c(p,l.TRENDING_DAY,{page:1}),t=e[Math.floor(Math.random()*e.length)];k(t),document.getElementById("trailer-btn").addEventListener("click",()=>{alert("Sorry! We couldn’t find the trailer.")}),document.getElementById("details-btn").addEventListener("click",()=>{alert("Movie details will be shown here.")})}catch(e){console.error("Trend film alınamadı:",e),f()}}function f(){const e=`
    <div class="hero-wrap">
      <div class="thumb">
        <picture class="background-image">
          <source srcset="./images/hero-mobile.jpg 1x, ./images/hero-mobile-2x.jpg 2x" media="(max-width: 480px)" />
          <source srcset="./images/hero-tablet.jpg 1x, ./images/hero-tablet-2x.jpg 2x" media="(max-width: 768px)" />
          <source srcset="./images/hero-desktop.jpg 1x, ./images/hero-desktop-2x.jpg 2x" media="(min-width: 769px)" />
          <img src="./images/hero-desktop.jpg" alt="Default hero" class="backend" loading="lazy" />
        </picture>

        <div class="hero-wrap__content">
          <h1 class="title-fallback">Let’s Make Your Own Cinema</h1>
          <p class="description-fallback-mobile">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.</p>
          <p class="description-fallback">Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.</p>

          <button class="getstarted-btn">Get Started</button>
        </div>
      </div>
    </div>
  `;g.innerHTML=e;const t=document.querySelector(".getstarted-btn");t&&t.addEventListener("click",()=>{location.href="catalog.html"})}function k(e){let t=u(e.vote_average);const a=`
    <div class="hero-wrap">
      <div class="thumb">
        <div class="background-image">
          <img src="https://image.tmdb.org/t/p/original${e.backdrop_path}" alt="Hero image" class="backend" loading="lazy" />
        </div>
        <div class="hero-wrap__content">
          <h1 class="title">${e.title||e.name}</h1>
          <div class='start-rate__hero'>${t}</div> 
          <p class="description">${e.overview}</p>
          <button class="watch-trailer__btn" id="trailer-btn">Watch trailer</button>
          <button class="more-details__btn" id="details-btn">More details</button>
        </div>
      </div>
    </div>
  `;g.innerHTML=a}v();let d=!1,r=[],h={};async function w(){const e=document.getElementById("trends-container"),t=document.getElementById("see-all-trends");h=await m(),r=(await c(p,l.TRENDING_WEEK)).results;const s=window.innerWidth<768?1:3;i(e,r.slice(0,s)),t.addEventListener("click",()=>{if(!e.classList.contains("is-expanded"))i(e,r),e.classList.add("is-expanded"),t.textContent="Show Less",d=!0;else{const o=window.innerWidth<768?1:3;i(e,r.slice(0,o)),e.classList.remove("is-expanded"),t.textContent="See All",d=!1}}),window.addEventListener("resize",()=>{if(!d){const n=window.innerWidth<768?1:3;i(e,r.slice(0,n))}})}function i(e,t){e.innerHTML=t.map((a,s)=>{const n=s>=3?(s-2)*100:0;return x(a,n)}).join("")}function x(e,t=0){var n;const a=e.genre_ids.map(o=>h[o]).join(", "),s=u(e.vote_average);return`
    <div class="trend-card" data-id="${e.id}" style="animation-delay: ${t}ms;">
      <img src="${b}${l.IMG_W500}${e.poster_path}" alt="${e.title}">
      <div class="trend-info">
        <h3>${e.title}</h3>
        <p>${a} | ${((n=e.release_date)==null?void 0:n.split("-")[0])||"N/A"}</p>
        <div class="trend-stars">${s}</div>
      </div>
    </div>
  `}w();
//# sourceMappingURL=index.js.map
