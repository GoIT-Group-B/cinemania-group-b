import{f as h,B as g,E as m,s as S,a as F,b as H,c as _,I as x,d as O,e as R}from"./assets/theme-CsIwc0Ng.js";import"./assets/vendor-DDD7fsZd.js";const C={homeHeroClass:".home-hero",heroWrap:"hero-wrap",thumb:"thumb",backgroundImage:"background-image",backend:"backend",heroWrapContent:"hero-wrap__content",movieTitle:"title",starRating:"star-rate__hero",movieDescription:"description",trailerButton:"watch-trailer__btn",moreDetailsButton:"more-details__btn",titleFallback:"title-fallback",descriptionFallback:"description-fallback",getStartedButtonClass:".getstarted-btn",getStartedButton:"getstarted-btn"},T={trailerButtonId:"trailer-btn",detailsButtonId:"details-btn"},q=7e3,W=document.querySelector(C.homeHeroClass);let b=null,p=null;U();async function U(){try{const{results:e}=await h(g,m.TRENDING_DAY,{page:1});if(!(e!=null&&e.length))return D();b=z(e),Y(b),P(b),K()}catch(e){console.error("Trend film alınamadı:",e),D()}}function P(e){var t,n;(t=document.getElementById(T.trailerButtonId))==null||t.addEventListener("click",()=>V(e)),(n=document.getElementById(T.detailsButtonId))==null||n.addEventListener("click",j)}async function V(e){try{const n=(await h(g,m.MOVIE_VIDEOS(e.id))).results.find(a=>a.site==="YouTube"&&a.type==="Trailer");n?F(n.key):S("OOPS...<br>We are very sorry!<br>But we couldn’t find the trailer.")}catch(t){console.error("Trailer API hatası:",t),S()}}function j(){var t;const e=((t=b.genre_ids)==null?void 0:t.map(n=>p==null?void 0:p[n]).filter(Boolean))||[];H(b,e)}function Y(e){const{heroWrap:t,thumb:n,backgroundImage:a,backend:o,heroWrapContent:s,movieTitle:d,starRating:u,movieDescription:c,trailerButton:i,moreDetailsButton:l}=C,{trailerButtonId:$,detailsButtonId:E}=T,v=_(e.vote_average),w=`${x}/original${e.backdrop_path}`;W.innerHTML=`
    <div class="${t}">
      <div class="${n}">
        <div class="${a} hero-img-wrapper">
          <img 
            src="${w}" 
            alt="${e.title} backdrop"
            class="${o} hero-img"
            decoding="async"
          />
        </div>
        <div class="${s}">
          <h1 class="${d}">${e.title||e.name}</h1>
          <div class="${u}">${v}</div>
          <p class="${c}">${e.overview}</p>
          <button class="${i}" id="${$}">Watch trailer</button>
          <button class="${l}" id="${E}">More details</button>
        </div>
      </div>
    </div>`}function D(){const{getStartedButtonClass:e,heroWrap:t,thumb:n,backgroundImage:a,heroWrapContent:o,titleFallback:s,descriptionFallback:d,getStartedButton:u}=C,c=document.querySelector(e);W.innerHTML=`
    <div class="${t}">
      <div class="${n}">
        <div class="${a} hero-img-wrapper">
          <picture class="background-image">
            <source
              media="(min-width: 1280px)"
              srcset="./images/hero-desktop.jpg 1x, ./images/hero-desktop-2x.jpg 2x"
            />
            <source
              media="(min-width: 768px)"
              srcset="./images/hero-tablet.jpg 1x, ./images/hero-tablet-2x.jpg 2x"
            />
            <img
              src="./images/hero-mobile.jpg"
              srcset="./images/hero-mobile-2x.jpg 2x"
              alt="Fallback Hero"
              class="backend"
              width="1280"
              height="720"
            />
          </picture>    
        </div>

        <div class="${o}">
          <h1 class="${s}">Let’s Make Your Own Cinema</h1>
          <p class="${d}">Is a guide to creating a personalized movie theater experience.</p>
          <button class="${u}">Get Started</button>
        </div>
      </div>
    </div>`,c==null||c.addEventListener("click",()=>{location.href="/catalog.html"})}function z(e){return e[Math.floor(Math.random()*e.length)]}async function K(){if(!p)try{const t=(await h(g,m.GENRE_LIST)).genres||[];p=Object.fromEntries(t.map(n=>[n.id,n.name]))}catch(e){console.error("Türler yüklenemedi:",e),p={}}}let B=!1,y=[],N={};async function J(){const e=document.getElementById("trends-container"),t=document.getElementById("see-all-trends");N=await R(),y=(await h(g,m.TRENDING_WEEK)).results;const a=window.innerWidth<768?1:3;k(e,y.slice(0,a)),t.addEventListener("click",()=>{if(!e.classList.contains("is-expanded"))k(e,y),e.classList.add("is-expanded"),t.textContent="Show Less",B=!0;else{const s=window.innerWidth<768?1:3;k(e,y.slice(0,s)),e.classList.remove("is-expanded"),t.textContent="See All",B=!1}}),window.addEventListener("resize",()=>{if(!B){const o=window.innerWidth<768?1:3;k(e,y.slice(0,o))}})}function k(e,t){e.innerHTML=t.map((n,a)=>{const o=a>=3?(a-2)*100:0;return Q(n,o)}).join("")}function Q(e,t=0){var o;const n=e.genre_ids.map(s=>N[s]).join(", "),a=_(e.vote_average);return`
    <div class="trend-card" data-id="${e.id}">
      <img src="${x}${m.IMG_W500}${e.poster_path}" alt="${e.title}">
      <div class="trend-info">
        <div class="movie-meta trend-info-left">
          <h3 class="trend-title">${e.title}</h3>
          <p class="movie-details">${n} | ${((o=e.release_date)==null?void 0:o.split("-")[0])||"N/A"}</p>
        </div>
        <div class="trend-stars">${a}</div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("trends-container");e&&O(e)});J();async function X(){const e=document.getElementById("upcoming-films");e.innerHTML="Yükleniyor...";try{const t=await R(),a=(await h(g,m.POPULAR_MOVIES)).results,o=Math.floor(Math.random()*a.length),s=a[o],d=await h(g,m.MOVIE_DETAILS(s.id));e.innerHTML="",Z(d,t)}catch(t){e.innerHTML=`<p>Hata: ${t.message}</p>`,console.error(t)}}function Z({id:e,poster_path:t,backdrop_path:n,title:a,overview:o,popularity:s,vote_average:d,vote_count:u,release_date:c,genre_ids:i,genres:l},$){const E=document.getElementById("upcoming-films");E.innerHTML="";let v="Bilinmeyen";Array.isArray(i)&&i.length>0?v=i.map(f=>$[f]).filter(Boolean).join(", "):Array.isArray(l)&&l.length>0&&(v=l.map(f=>f.name).join(", "));const w=t?`${x}/w1280${n}`:"https://via.placeholder.com/300x450?text=No+Image",G=o||"No overview available.",L=document.createElement("div");L.classList.add("film-card"),L.innerHTML=`
    <img class="upcom-img" src="${w}" alt="${a}"">
    <div class="upcom">
      <h2>${a}</h2>
      <p class="release-info"><strong>Release date:</strong> ${c||"Unknown"}</p>
      <p class="vote-info">
      <strong>Vote/Votes:</strong> 
      <span class="vote-box vote-box-left">${d.toFixed(1)}</span>
      <span class="slash">/</span>
      <span class="vote-box vote-box-right">${u}</span>
      </p>
      <p class="popularity-info"><strong>Popularity:</strong> <span>${s}</span></p>
      <p class="genre-info">
      <strong>Genres:</strong> 
      <span>${v}</span>
      </p>
      <p class="upcom-about"><strong class="strong-about">ABOUT</strong> ${G}</p>
      <button class="add-library-btn">Add to my library</button>
    </div>
  `,E.appendChild(L),L.querySelector(".add-library-btn").addEventListener("click",()=>{const f={id:e,title:a,poster_path:t,release_date:c,vote_average:d,vote_count:u,popularity:s,overview:o,genre_ids:i,genres:l};let M=[];Array.isArray(i)&&i.length>0?M=i.map(I=>$[I]).filter(Boolean):Array.isArray(l)&&l.length>0&&(M=l.map(I=>I.name)),H(f,M)})}document.addEventListener("DOMContentLoaded",X);const ee=document.querySelector('[data-modal-open="footer"]'),te=document.querySelector('[data-modal-close="footer"]'),r=document.querySelector('[data-modal="footer"]'),ne=r.querySelector(".footer-modal-content");ee.addEventListener("click",function(e){e.preventDefault(),r.classList.remove("is-hidden"),requestAnimationFrame(()=>{r.classList.add("show-modal")}),document.body.style.overflow="hidden"});te.addEventListener("click",A);document.addEventListener("keydown",function(e){e.key==="Escape"&&!r.classList.contains("is-hidden")&&A()});function A(){r.classList.add("closing"),r.classList.remove("show-modal"),ne.addEventListener("transitionend",()=>{r.classList.remove("closing"),r.classList.add("is-hidden")},{once:!0}),document.body.style.overflow="auto"}r.addEventListener("click",function(e){e.target===r&&A()});
//# sourceMappingURL=index.js.map
