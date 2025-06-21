import{c as $}from"./assets/theme-DYtuddYW.js";import{f as d,B as c,E as i,a as T,I as _}from"./assets/fetchMovies-BSsJlcs_.js";import{s as M,a as O,b as G}from"./assets/modal-C9px45C8.js";import"./assets/vendor-DDD7fsZd.js";const I=document.querySelector(".home-hero");let p=null,l=null;H();async function H(){try{const{results:e}=await d(c,i.TRENDING_DAY,{page:1});if(!(e!=null&&e.length))return k();p=e[Math.floor(Math.random()*e.length)],q(p),W(),document.getElementById("trailer-btn").addEventListener("click",()=>N(p)),document.getElementById("details-btn").addEventListener("click",R)}catch(e){console.error("Trend film alınamadı:",e),k()}}async function N(e){try{const a=(await d(c,i.MOVIE_VIDEOS(e.id))).results.find(n=>n.site==="YouTube"&&n.type==="Trailer");a?O(a.key):M("OOPS...<br>We are very sorry!<br>But we couldn’t find the trailer.")}catch(t){console.error("Trailer API hatası:",t),M()}}function R(){var t;const e=((t=p.genre_ids)==null?void 0:t.map(a=>l==null?void 0:l[a]).filter(Boolean))||[];G(p,e)}function q(e){const t=$(e.vote_average);I.innerHTML=`
    <div class="hero-wrap">
      <div class="thumb">
        <div class="background-image">
          <img src="https://image.tmdb.org/t/p/original${e.backdrop_path}"
               alt="${e.title} backdrop" class="backend" loading="lazy"/>
        </div>
        <div class="hero-wrap__content">
          <h1 class="title">${e.title||e.name}</h1>
          <div class="star-rate__hero">${t}</div>
          <p class="description">${e.overview}</p>
          <button class="watch-trailer__btn" id="trailer-btn">Watch trailer</button>
          <button class="more-details__btn" id="details-btn">More details</button>
        </div>
      </div>
    </div>`}function k(){I.innerHTML=`
    <div class="hero-wrap">
      <div class="thumb">
        <picture class="background-image">
          <img src="./images/hero-desktop.jpg" alt="Default hero" class="backend" loading="lazy" />
        </picture>
        <div class="hero-wrap__content">
          <h1 class="title-fallback">Let’s Make Your Own Cinema</h1>
          <p class="description-fallback">Is a guide to creating a personalized movie theater experience.</p>
          <button class="getstarted-btn">Get Started</button>
        </div>
      </div>
    </div>`,document.querySelector(".getstarted-btn").addEventListener("click",()=>location.href="catalog.html")}async function W(){if(!l)try{const t=(await d(c,i.GENRE_LIST)).genres||[];l=Object.fromEntries(t.map(a=>[a.id,a.name]))}catch(e){console.error("Türler yüklenemedi:",e),l={}}}let E=!1,m=[],S={};async function P(){const e=document.getElementById("trends-container"),t=document.getElementById("see-all-trends");S=await T(),m=(await d(c,i.TRENDING_WEEK)).results;const n=window.innerWidth<768?1:3;f(e,m.slice(0,n)),t.addEventListener("click",()=>{if(!e.classList.contains("is-expanded"))f(e,m),e.classList.add("is-expanded"),t.textContent="Show Less",E=!0;else{const r=window.innerWidth<768?1:3;f(e,m.slice(0,r)),e.classList.remove("is-expanded"),t.textContent="See All",E=!1}}),window.addEventListener("resize",()=>{if(!E){const s=window.innerWidth<768?1:3;f(e,m.slice(0,s))}})}function f(e,t){e.innerHTML=t.map((a,n)=>{const s=n>=3?(n-2)*100:0;return V(a,s)}).join("")}function V(e,t=0){var s;const a=e.genre_ids.map(r=>S[r]).join(", "),n=$(e.vote_average);return`
    <div class="trend-card" data-id="${e.id}" style="animation-delay: ${t}ms;">
      <img src="${_}${i.IMG_W500}${e.poster_path}" alt="${e.title}">
      <div class="trend-info">
        <h3>${e.title}</h3>
        <p>${a} | ${((s=e.release_date)==null?void 0:s.split("-")[0])||"N/A"}</p>
        <div class="trend-stars">${n}</div>
      </div>
    </div>
  `}P();async function U(){const e=document.getElementById("upcoming-films");e.innerHTML="Yükleniyor...";try{const t=await T(),n=(await d(c,i.POPULAR_MOVIES)).results,s=Math.floor(Math.random()*n.length),r=n[s],g=await d(c,i.MOVIE_DETAILS(r.id));e.innerHTML="",j(g,t)}catch(t){e.innerHTML=`<p>Hata: ${t.message}</p>`,console.error(t)}}function j({id:e,poster_path:t,backdrop_path:a,title:n,overview:s,popularity:r,vote_average:g,vote_count:x,release_date:B,genre_ids:h,genres:v},A){const w=document.getElementById("upcoming-films");w.innerHTML="";let y="Bilinmeyen";Array.isArray(h)&&h.length>0?y=h.map(b=>A[b]).filter(Boolean).join(", "):Array.isArray(v)&&v.length>0&&(y=v.map(b=>b.name).join(", "));const D=t?`${_}/w1280${a}`:"https://via.placeholder.com/300x450?text=No+Image",C=s||"No overview available.",u=document.createElement("div");u.classList.add("film-card"),u.innerHTML=`
    <img class="upcom-img" src="${D}" alt="${n}"">
    <div class="upcom">
      <h2>${n}</h2>
      <p class="release-info"><strong>Release date:</strong> ${B||"Unknown"}</p>
      <p class="vote-info">
      <strong>Vote/Votes:</strong> 
      <span class="vote-box vote-box-left">${g.toFixed(1)}</span>
      <span class="slash">/</span>
      <span class="vote-box vote-box-right">${x}</span>
      </p>
      <p class="popularity-info"><strong>Popularity:</strong> <span>${r}</span></p>
      <p class="genre-info">
      <strong>Genres:</strong> 
      <span>${y}</span>
      </p>
      <p class="upcom-about"><strong class="strong-about">ABOUT</strong> ${C}</p>
      <button class="add-library-btn">Add to my library</button>
    </div>
  `,u.querySelector(".add-library-btn").addEventListener("click",()=>{console.log(`"${n}" kütüphaneye eklendi!`)}),w.appendChild(u)}document.addEventListener("DOMContentLoaded",U);const z=document.querySelector('[data-modal-open="footer"]'),Y=document.querySelector('[data-modal-close="footer"]'),o=document.querySelector('[data-modal="footer"]'),F=o.querySelector(".footer-modal-content");z.addEventListener("click",function(e){e.preventDefault(),o.classList.remove("is-hidden"),requestAnimationFrame(()=>{o.classList.add("show-modal")}),document.body.style.overflow="hidden"});Y.addEventListener("click",L);document.addEventListener("keydown",function(e){e.key==="Escape"&&!o.classList.contains("is-hidden")&&L()});function L(){o.classList.add("closing"),o.classList.remove("show-modal"),F.addEventListener("transitionend",()=>{o.classList.remove("closing"),o.classList.add("is-hidden")},{once:!0}),document.body.style.overflow="auto"}o.addEventListener("click",function(e){e.target===o&&L()});
//# sourceMappingURL=index.js.map
