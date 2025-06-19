import"./assets/theme-BnMLkBly.js";import{f as L,B as _,E as f,a as k,I as b}from"./assets/fetchMovies-BSsJlcs_.js";import"./assets/vendor-DDD7fsZd.js";const s=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,n=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,d=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_6991)" stroke-linejoin="round"/>
<path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_6991)"/>
<defs>
<linearGradient id="paint0_linear_148_6991" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
<linearGradient id="paint1_linear_148_6991" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,w=document.querySelector(".home-hero");async function m(){try{const{results:t}=await L(_,f.TRENDING_DAY,{page:1}),e=t[Math.floor(Math.random()*t.length)];y(e),document.getElementById("trailer-btn").addEventListener("click",()=>{alert("Sorry! We couldn’t find the trailer.")}),document.getElementById("details-btn").addEventListener("click",()=>{alert("Movie details will be shown here.")})}catch(t){console.error("Trend film alınamadı:",t),x()}}function x(){const t=`
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
  `;w.innerHTML=t;const e=document.querySelector(".getstarted-btn");e&&e.addEventListener("click",()=>{location.href="catalog.html"})}function y(t){let e="";switch(Math.round(t.vote_average)){case 0:e=s.repeat(5);break;case 1:e=d+s.repeat(4);break;case 2:e=n+s.repeat(4);break;case 3:e=n+d+s.repeat(3);break;case 4:e=n.repeat(2)+s.repeat(3);break;case 5:e=n.repeat(2)+d+s.repeat(2);break;case 6:e=n.repeat(3)+s.repeat(2);break;case 7:e=n.repeat(3)+d+s;break;case 8:e=n.repeat(4)+s;break;case 9:e=n.repeat(4)+d;break;case 10:e=n.repeat(5);break;default:e="N/A"}const r=`
    <div class="hero-wrap">
      <div class="thumb">
        <div class="background-image">
          <img src="https://image.tmdb.org/t/p/original${t.backdrop_path}" alt="Hero image" class="backend" loading="lazy" />
        </div>
        <div class="hero-wrap__content">
          <h1 class="title">${t.title||t.name}</h1>
          <div class='start-rate__hero'>${e}</div> 
          <p class="description">${t.overview}</p>
          <button class="watch-trailer__btn" id="trailer-btn">Watch trailer</button>
          <button class="more-details__btn" id="details-btn">More details</button>
        </div>
      </div>
    </div>
  `;w.innerHTML=r}m();const a=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,i=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,c=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_148_6991)" stroke-linejoin="round"/>
<path d="M9 1.6875V12.7969L4.14844 16.3125L6.04688 10.6875L1.125 7.3125H7.17188L9 1.6875Z" fill="url(#paint1_linear_148_6991)"/>
<defs>
<linearGradient id="paint0_linear_148_6991" x1="3.04877" y1="2.73251" x2="13.478" y2="16.7124" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
<linearGradient id="paint1_linear_148_6991" x1="2.08688" y1="2.73251" x2="12.1506" y2="9.47748" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`;function $(t){let e="";if(!t)return e=`${a.repeat(5)}`,`<div>${e}</div>`;switch(Math.round(t)){case 0:e=`${a.repeat(5)}`;break;case 1:e=`${c}${a.repeat(4)}`;break;case 2:e=`${i}${a.repeat(4)}`;break;case 3:e=`${i}${c}${a.repeat(3)}`;break;case 4:e=`${i.repeat(2)}${a.repeat(3)}`;break;case 5:e=`${i.repeat(2)}${c}${a.repeat(2)}`;break;case 6:e=`${i.repeat(3)}${a.repeat(2)}`;break;case 7:e=`${i.repeat(3)}${c}${a}`;break;case 8:e=`${i.repeat(4)}${a}`;break;case 9:e=`${i.repeat(4)}${c}`;break;case 10:e=`${i.repeat(5)}`;break;default:throw new Error("Invalid rating")}return`<div>${e}</div>`}let u=!1,p=[],v={};async function M(){const t=document.getElementById("trends-container"),e=document.getElementById("see-all-trends");v=await k(),p=(await L(_,f.TRENDING_WEEK)).results;const r=window.innerWidth<768?1:3;g(t,p.slice(0,r)),e.addEventListener("click",()=>{if(!t.classList.contains("is-expanded"))g(t,p),t.classList.add("is-expanded"),e.textContent="Show Less",u=!0;else{const h=window.innerWidth<768?1:3;g(t,p.slice(0,h)),t.classList.remove("is-expanded"),e.textContent="See All",u=!1}}),window.addEventListener("resize",()=>{if(!u){const l=window.innerWidth<768?1:3;g(t,p.slice(0,l))}})}function g(t,e){t.innerHTML=e.map((o,r)=>{const l=r>=3?(r-2)*100:0;return S(o,l)}).join("")}function S(t,e=0){var l;const o=t.genre_ids.map(h=>v[h]).join(", "),r=$(t.vote_average);return`
    <div class="trend-card" data-id="${t.id}" style="animation-delay: ${e}ms;">
      <img src="${b}${f.IMG_W500}${t.poster_path}" alt="${t.title}">
      <div class="trend-info">
        <h3>${t.title}</h3>
        <p>${o} | ${((l=t.release_date)==null?void 0:l.split("-")[0])||"N/A"}</p>
        <div class="trend-stars">${r}</div>
      </div>
    </div>
  `}M();
//# sourceMappingURL=index.js.map
