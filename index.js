import{f as u,B as p,E as m,s as D,a as P,b as H,c as _,I as A,d as V,e as R}from"./assets/theme-CcTBzhkP.js";import"./assets/vendor-DDD7fsZd.js";const C={homeHeroClass:".home-hero",heroWrap:"hero-wrap",thumb:"thumb",backgroundImage:"background-image",backend:"backend",heroWrapContent:"hero-wrap__content",movieTitle:"title",starRating:"star-rate__hero",movieDescription:"description",trailerButton:"watch-trailer__btn",moreDetailsButton:"more-details__btn",titleFallback:"title-fallback",descriptionFallback:"description-fallback",getStartedButtonClass:".getstarted-btn",getStartedButton:"getstarted-btn"},x={trailerButtonId:"trailer-btn",detailsButtonId:"details-btn"},N=7e3,W=document.querySelector(C.homeHeroClass);let g=null,f=null;j();async function j(){try{const{results:e}=await u(p,m.TRENDING_DAY,{page:1});if(!(e!=null&&e.length))return E();g=O(e),G(g),F(g),J(),Y(N)}catch(e){console.error("Trend film alınamadı:",e),E()}}function Y(e=N){async function t(){try{const{results:n}=await u(p,m.TRENDING_DAY,{page:1});if(!(n!=null&&n.length))console.warn("Trend listesi boş. Fallback hero gösteriliyor."),E();else{const a=O(n);a?(g=a,G(a),F(a)):(console.warn("Film seçilemedi. Fallback hero gösteriliyor."),E())}}catch(n){console.error("Hero güncellenemedi:",n),E()}finally{setTimeout(t,e)}}setTimeout(t,e)}function F(e){var t,n;(t=document.getElementById(x.trailerButtonId))==null||t.addEventListener("click",()=>z(e)),(n=document.getElementById(x.detailsButtonId))==null||n.addEventListener("click",K)}async function z(e){try{const n=(await u(p,m.MOVIE_VIDEOS(e.id))).results.find(a=>a.site==="YouTube"&&a.type==="Trailer");n?P(n.key):D("OOPS...<br>We are very sorry!<br>But we couldn’t find the trailer.")}catch(t){console.error("Trailer API hatası:",t),D()}}function K(){var t;const e=((t=g.genre_ids)==null?void 0:t.map(n=>f==null?void 0:f[n]).filter(Boolean))||[];H(g,e)}function G(e){const{heroWrap:t,thumb:n,backgroundImage:a,backend:o,heroWrapContent:s,movieTitle:c,starRating:h,movieDescription:d,trailerButton:i,moreDetailsButton:l}=C,{trailerButtonId:$,detailsButtonId:L}=x,v=_(e.vote_average),M=`${A}/original${e.backdrop_path}`;W.innerHTML=`
    <div class="${t}">
      <div class="${n}">
        <div class="${a} hero-img-wrapper">
          <img 
            src="${M}" 
            alt="${e.title} backdrop"
            class="${o} hero-img"
            decoding="async"
          />
        </div>
        <div class="${s}">
          <h1 class="${c}">${e.title||e.name}</h1>
          <div class="${h}">${v}</div>
          <p class="${d}">${e.overview}</p>
          <button class="${i}" id="${$}">Watch trailer</button>
          <button class="${l}" id="${L}">More details</button>
        </div>
      </div>
    </div>`}function E(){const{getStartedButtonClass:e,heroWrap:t,thumb:n,backgroundImage:a,heroWrapContent:o,titleFallback:s,descriptionFallback:c,getStartedButton:h}=C,d=document.querySelector(e);W.innerHTML=`
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
          <p class="${c}">Is a guide to creating a personalized movie theater experience.</p>
          <button class="${h}">Get Started</button>
        </div>
      </div>
    </div>`,d==null||d.addEventListener("click",()=>{location.href="/catalog.html"})}function O(e){return e[Math.floor(Math.random()*e.length)]}async function J(){if(!f)try{const t=(await u(p,m.GENRE_LIST)).genres||[];f=Object.fromEntries(t.map(n=>[n.id,n.name]))}catch(e){console.error("Türler yüklenemedi:",e),f={}}}let B=!1,b=[],q={};async function Q(){const e=document.getElementById("trends-container"),t=document.getElementById("see-all-trends");q=await R(),b=(await u(p,m.TRENDING_WEEK)).results;const a=window.innerWidth<768?1:3;k(e,b.slice(0,a)),t.addEventListener("click",()=>{if(!e.classList.contains("is-expanded"))k(e,b),e.classList.add("is-expanded"),t.textContent="Show Less",B=!0;else{const s=window.innerWidth<768?1:3;k(e,b.slice(0,s)),e.classList.remove("is-expanded"),t.textContent="See All",B=!1}}),window.addEventListener("resize",()=>{if(!B){const o=window.innerWidth<768?1:3;k(e,b.slice(0,o))}})}function k(e,t){e.innerHTML=t.map((n,a)=>{const o=a>=3?(a-2)*100:0;return X(n,o)}).join("")}function X(e,t=0){var o;const n=e.genre_ids.map(s=>q[s]).join(", "),a=_(e.vote_average);return`
    <div class="trend-card" data-id="${e.id}">
      <img src="${A}${m.IMG_W500}${e.poster_path}" alt="${e.title}">
      <div class="trend-info">
        <div class="movie-meta trend-info-left">
          <h3 class="trend-title">${e.title}</h3>
          <p class="movie-details">${n} | ${((o=e.release_date)==null?void 0:o.split("-")[0])||"N/A"}</p>
        </div>
        <div class="trend-stars">${a}</div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("trends-container");e&&V(e)});Q();async function Z(){const e=document.getElementById("upcoming-films");e.innerHTML="Yükleniyor...";try{const t=await R(),a=(await u(p,m.POPULAR_MOVIES)).results,o=Math.floor(Math.random()*a.length),s=a[o],c=await u(p,m.MOVIE_DETAILS(s.id));e.innerHTML="",ee(c,t)}catch(t){e.innerHTML=`<p>Hata: ${t.message}</p>`,console.error(t)}}function ee({id:e,poster_path:t,backdrop_path:n,title:a,overview:o,popularity:s,vote_average:c,vote_count:h,release_date:d,genre_ids:i,genres:l},$){const L=document.getElementById("upcoming-films");L.innerHTML="";let v="Bilinmeyen";Array.isArray(i)&&i.length>0?v=i.map(y=>$[y]).filter(Boolean).join(", "):Array.isArray(l)&&l.length>0&&(v=l.map(y=>y.name).join(", "));const M=t?`${A}/w1280${n}`:"https://via.placeholder.com/300x450?text=No+Image",U=o||"No overview available.",w=document.createElement("div");w.classList.add("film-card"),w.innerHTML=`
    <img class="upcom-img" src="${M}" alt="${a}"">
    <div class="upcom">
      <h2>${a}</h2>
      <p class="release-info"><strong>Release date:</strong> ${d||"Unknown"}</p>
      <p class="vote-info">
      <strong>Vote/Votes:</strong> 
      <span class="vote-box vote-box-left">${c.toFixed(1)}</span>
      <span class="slash">/</span>
      <span class="vote-box vote-box-right">${h}</span>
      </p>
      <p class="popularity-info"><strong>Popularity:</strong> <span>${s}</span></p>
      <p class="genre-info">
      <strong>Genres:</strong> 
      <span>${v}</span>
      </p>
      <p class="upcom-about"><strong class="strong-about">ABOUT</strong> ${U}</p>
      <button class="add-library-btn">Add to my library</button>
    </div>
  `,L.appendChild(w),w.querySelector(".add-library-btn").addEventListener("click",()=>{const y={id:e,title:a,poster_path:t,release_date:d,vote_average:c,vote_count:h,popularity:s,overview:o,genre_ids:i,genres:l};let I=[];Array.isArray(i)&&i.length>0?I=i.map(T=>$[T]).filter(Boolean):Array.isArray(l)&&l.length>0&&(I=l.map(T=>T.name)),H(y,I)})}document.addEventListener("DOMContentLoaded",Z);const te=document.querySelector('[data-modal-open="footer"]'),ne=document.querySelector('[data-modal-close="footer"]'),r=document.querySelector('[data-modal="footer"]'),ae=r.querySelector(".footer-modal-content");te.addEventListener("click",function(e){e.preventDefault(),r.classList.remove("is-hidden"),requestAnimationFrame(()=>{r.classList.add("show-modal")}),document.body.style.overflow="hidden"});ne.addEventListener("click",S);document.addEventListener("keydown",function(e){e.key==="Escape"&&!r.classList.contains("is-hidden")&&S()});function S(){r.classList.add("closing"),r.classList.remove("show-modal"),ae.addEventListener("transitionend",()=>{r.classList.remove("closing"),r.classList.add("is-hidden")},{once:!0}),document.body.style.overflow="auto"}r.addEventListener("click",function(e){e.target===r&&S()});
//# sourceMappingURL=index.js.map
