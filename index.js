import{f as m,B as p,E as d,s as C,a as U,b as D,c as H,I as x,d as P,e as S}from"./assets/footer-BjZbCy5C.js";import"./assets/vendor-DDD7fsZd.js";const A={homeHeroClass:".home-hero",heroWrap:"hero-wrap",thumb:"thumb",backgroundImage:"background-image",backend:"backend",heroWrapContent:"hero-wrap__content",movieTitle:"title",starRating:"star-rate__hero",movieDescription:"description",trailerButton:"watch-trailer__btn",moreDetailsButton:"more-details__btn",titleFallback:"title-fallback",descriptionFallback:"description-fallback",getStartedButtonClass:".getstarted-btn",getStartedButton:"getstarted-btn"},B={trailerButtonId:"trailer-btn",detailsButtonId:"details-btn"},_=7e3,R=document.querySelector(A.homeHeroClass);let g=null,h=null;V();async function V(){try{const{results:e}=await m(p,d.TRENDING_DAY,{page:1});if(!(e!=null&&e.length))return y();g=F(e),W(g),N(g),z(),j(_)}catch(e){console.error("Trend film alınamadı:",e),y()}}function j(e=_){async function t(){try{const{results:a}=await m(p,d.TRENDING_DAY,{page:1});if(!(a!=null&&a.length))console.warn("Trend listesi boş. Fallback hero gösteriliyor."),y();else{const n=F(a);n?(g=n,W(n),N(n)):(console.warn("Film seçilemedi. Fallback hero gösteriliyor."),y())}}catch(a){console.error("Hero güncellenemedi:",a),y()}finally{setTimeout(t,e)}}setTimeout(t,e)}function N(e){var t,a;(t=document.getElementById(B.trailerButtonId))==null||t.addEventListener("click",()=>Y(e)),(a=document.getElementById(B.detailsButtonId))==null||a.addEventListener("click",q)}async function Y(e){try{const a=(await m(p,d.MOVIE_VIDEOS(e.id))).results.find(n=>n.site==="YouTube"&&n.type==="Trailer");a?U(a.key):C("OOPS...<br>We are very sorry!<br>But we couldn’t find the trailer.")}catch(t){console.error("Trailer API hatası:",t),C()}}function q(){var t;const e=((t=g.genre_ids)==null?void 0:t.map(a=>h==null?void 0:h[a]).filter(Boolean))||[];D(g,e)}function W(e){const{heroWrap:t,thumb:a,backgroundImage:n,backend:r,heroWrapContent:s,movieTitle:l,starRating:u,movieDescription:c,trailerButton:o,moreDetailsButton:i}=A,{trailerButtonId:$,detailsButtonId:E}=B,f=H(e.vote_average),I=`${x}/original${e.backdrop_path}`;R.innerHTML=`
    <div class="${t}">
      <div class="${a}">
        <div class="${n} hero-img-wrapper">
          <img 
            src="${I}" 
            alt="${e.title} backdrop"
            class="${r} hero-img"
            decoding="async"
          />
        </div>
        <div class="${s}">
          <h1 class="${l}">${e.title||e.name}</h1>
          <div class="${u}">${f}</div>
          <p class="${c}">${e.overview}</p>
          <button class="${o}" id="${$}">Watch trailer</button>
          <button class="${i}" id="${E}">More details</button>
        </div>
      </div>
    </div>`}function y(){const{getStartedButtonClass:e,heroWrap:t,thumb:a,backgroundImage:n,heroWrapContent:r,titleFallback:s,descriptionFallback:l,getStartedButton:u}=A,c=document.querySelector(e);R.innerHTML=`
    <div class="${t}">
      <div class="${a}">
        <div class="${n} hero-img-wrapper">
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

        <div class="${r}">
          <h1 class="${s}">Let’s Make Your Own Cinema</h1>
          <p class="${l}">Is a guide to creating a personalized movie theater experience.</p>
          <button class="${u}">Get Started</button>
        </div>
      </div>
    </div>`,c==null||c.addEventListener("click",()=>{location.href="/catalog.html"})}function F(e){return e[Math.floor(Math.random()*e.length)]}async function z(){if(!h)try{const t=(await m(p,d.GENRE_LIST)).genres||[];h=Object.fromEntries(t.map(a=>[a.id,a.name]))}catch(e){console.error("Türler yüklenemedi:",e),h={}}}let T=!1,b=[],G={};async function K(){const e=document.getElementById("trends-container"),t=document.getElementById("see-all-trends");G=await S(),b=(await m(p,d.TRENDING_WEEK)).results;const n=window.innerWidth<768?1:3;k(e,b.slice(0,n)),t.addEventListener("click",()=>{if(!e.classList.contains("is-expanded"))k(e,b),e.classList.add("is-expanded"),t.textContent="Show Less",T=!0;else{const s=window.innerWidth<768?1:3;k(e,b.slice(0,s)),e.classList.remove("is-expanded"),t.textContent="See All",T=!1}}),window.addEventListener("resize",()=>{if(!T){const r=window.innerWidth<768?1:3;k(e,b.slice(0,r))}})}function k(e,t){e.innerHTML=t.map((a,n)=>{const r=n>=3?(n-2)*100:0;return J(a,r)}).join("")}function J(e,t=0){var r;const a=e.genre_ids.map(s=>G[s]).join(", "),n=H(e.vote_average);return`
    <div class="trend-card" data-id="${e.id}">
      <img src="${x}${d.IMG_W500}${e.poster_path}" alt="${e.title}">
      <div class="trend-info">
        <div class="movie-meta trend-info-left">
          <h3 class="trend-title">${e.title}</h3>
          <p class="movie-details">${a} | ${((r=e.release_date)==null?void 0:r.split("-")[0])||"N/A"}</p>
        </div>
        <div class="trend-stars">${n}</div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("trends-container");e&&P(e)});K();async function Q(){const e=document.getElementById("upcoming-films");e.innerHTML="Yükleniyor...";try{const t=await S(),n=(await m(p,d.POPULAR_MOVIES)).results,r=Math.floor(Math.random()*n.length),s=n[r],l=await m(p,d.MOVIE_DETAILS(s.id));e.innerHTML="",X(l,t)}catch(t){e.innerHTML=`<p>Hata: ${t.message}</p>`,console.error(t)}}function X({id:e,poster_path:t,backdrop_path:a,title:n,overview:r,popularity:s,vote_average:l,vote_count:u,release_date:c,genre_ids:o,genres:i},$){const E=document.getElementById("upcoming-films");E.innerHTML="";let f="Bilinmeyen";Array.isArray(o)&&o.length>0?f=o.map(v=>$[v]).filter(Boolean).join(", "):Array.isArray(i)&&i.length>0&&(f=i.map(v=>v.name).join(", "));const I=t?`${x}/w1280${a}`:"https://via.placeholder.com/300x450?text=No+Image",O=r||"No overview available.",w=document.createElement("div");w.classList.add("film-card"),w.innerHTML=`
    <img class="upcom-img" src="${I}" alt="${n}"">
    <div class="upcom">
      <h2>${n}</h2>
      <p class="release-info"><strong>Release date:</strong> ${c||"Unknown"}</p>
      <p class="vote-info">
      <strong>Vote/Votes:</strong> 
      <span class="vote-box vote-box-left">${l.toFixed(1)}</span>
      <span class="slash">/</span>
      <span class="vote-box vote-box-right">${u}</span>
      </p>
      <p class="popularity-info"><strong>Popularity:</strong> <span>${s}</span></p>
      <p class="genre-info">
      <strong>Genres:</strong> 
      <span>${f}</span>
      </p>
      <p class="upcom-about"><strong class="strong-about">ABOUT</strong> ${O}</p>
      <button class="add-library-btn-">Add to my library</button>
    </div>
  `,E.appendChild(w),w.querySelector(".add-library-btn-").addEventListener("click",()=>{const v={id:e,title:n,poster_path:t,release_date:c,vote_average:l,vote_count:u,popularity:s,overview:r,genre_ids:o,genres:i};let M=[];Array.isArray(o)&&o.length>0?M=o.map(L=>$[L]).filter(Boolean):Array.isArray(i)&&i.length>0&&(M=i.map(L=>L.name)),D(v,M)})}document.addEventListener("DOMContentLoaded",Q);
//# sourceMappingURL=index.js.map
