import"./assets/theme-Df9oKh5u.js";import{f as d,B as p,E as i,c as y,a as x,I as k}from"./assets/stars-ZdAbMgea.js";import"./assets/vendor-DDD7fsZd.js";const w=document.querySelector(".home-hero");async function B(){try{const{results:e}=await d(p,i.TRENDING_DAY,{page:1}),t=e[Math.floor(Math.random()*e.length)];S(t),document.getElementById("trailer-btn").addEventListener("click",()=>{alert("Sorry! We couldn’t find the trailer.")}),document.getElementById("details-btn").addEventListener("click",()=>{alert("Movie details will be shown here.")})}catch(e){console.error("Trend film alınamadı:",e),T()}}function T(){const e=`
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
  `;w.innerHTML=e;const t=document.querySelector(".getstarted-btn");t&&t.addEventListener("click",()=>{location.href="catalog.html"})}function S(e){let t=y(e.vote_average);const s=`
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
  `;w.innerHTML=s}B();let f=!1,o=[],M={};async function A(){const e=document.getElementById("trends-container"),t=document.getElementById("see-all-trends");M=await x(),o=(await d(p,i.TRENDING_WEEK)).results;const a=window.innerWidth<768?1:3;c(e,o.slice(0,a)),t.addEventListener("click",()=>{if(!e.classList.contains("is-expanded"))c(e,o),e.classList.add("is-expanded"),t.textContent="Show Less",f=!0;else{const r=window.innerWidth<768?1:3;c(e,o.slice(0,r)),e.classList.remove("is-expanded"),t.textContent="See All",f=!1}}),window.addEventListener("resize",()=>{if(!f){const n=window.innerWidth<768?1:3;c(e,o.slice(0,n))}})}function c(e,t){e.innerHTML=t.map((s,a)=>{const n=a>=3?(a-2)*100:0;return C(s,n)}).join("")}function C(e,t=0){var n;const s=e.genre_ids.map(r=>M[r]).join(", "),a=y(e.vote_average);return`
    <div class="trend-card" data-id="${e.id}" style="animation-delay: ${t}ms;">
      <img src="${k}${i.IMG_W500}${e.poster_path}" alt="${e.title}">
      <div class="trend-info">
        <h3>${e.title}</h3>
        <p>${s} | ${((n=e.release_date)==null?void 0:n.split("-")[0])||"N/A"}</p>
        <div class="trend-stars">${a}</div>
      </div>
    </div>
  `}A();async function D(){const e=document.getElementById("upcoming-films");e.innerHTML="Yükleniyor...";try{const t=await x(),a=(await d(p,i.POPULAR_MOVIES)).results,n=Math.floor(Math.random()*a.length),r=a[n],m=await d(p,i.MOVIE_DETAILS(r.id));e.innerHTML="",j(m,t)}catch(t){e.innerHTML=`<p>Hata: ${t.message}</p>`,console.error(t)}}function j({id:e,poster_path:t,backdrop_path:s,title:a,overview:n,popularity:r,vote_average:m,vote_count:E,release_date:$,genre_ids:g,genres:u},L){const b=document.getElementById("upcoming-films");b.innerHTML="";let h="Bilinmeyen";Array.isArray(g)&&g.length>0?h=g.map(v=>L[v]).filter(Boolean).join(", "):Array.isArray(u)&&u.length>0&&(h=u.map(v=>v.name).join(", "));const _=t?`${k}/w1280${s}`:"https://via.placeholder.com/300x450?text=No+Image",I=n||"No overview available.",l=document.createElement("div");l.classList.add("film-card"),l.innerHTML=`
    <img class="upcom-img" src="${_}" alt="${a}"">
    <div class="upcom">
      <h2>${a}</h2>
      <p class="release-info"><strong>Release date:</strong> ${$||"Unknown"}</p>
      <p class="vote-info">
      <strong>Vote/Votes:</strong> 
      <span class="vote-box vote-box-left">${m.toFixed(1)}</span>
      <span class="slash">/</span>
      <span class="vote-box vote-box-right">${E}</span>
      </p>
      <p class="popularity-info"><strong>Popularity:</strong> ${r}</p>
      <p class="genre-info">
      <strong>Genres:</strong> 
      <span>${h}</span>
      </p>
      <p class="upcom-about"><strong class="strong-about">ABOUT</strong> ${I}</p>
      <button class="add-library-btn">Add to my library</button>
    </div>
  `,l.querySelector(".add-library-btn").addEventListener("click",()=>{console.log(`"${a}" kütüphaneye eklendi!`)}),b.appendChild(l)}document.addEventListener("DOMContentLoaded",D);
//# sourceMappingURL=index.js.map
