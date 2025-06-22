import{f as u,B as h,E as d,s as C,a as N,b as D,c as S,I as T,d as G,e as H}from"./assets/footer-CQfPMLlz.js";import"./assets/vendor-DDD7fsZd.js";const x={homeHeroClass:".home-hero",heroWrap:"hero-wrap",thumb:"thumb",backgroundImage:"background-image",backend:"backend",heroWrapContent:"hero-wrap__content",movieTitle:"title",starRating:"star-rate__hero",movieDescription:"description",trailerButton:"watch-trailer__btn",moreDetailsButton:"more-details__btn",titleFallback:"title-fallback",descriptionFallback:"description-fallback",getStartedButtonClass:".getstarted-btn",getStartedButton:"getstarted-btn"},B={trailerButtonId:"trailer-btn",detailsButtonId:"details-btn"},O=7e3,_=document.querySelector(x.homeHeroClass);let b=null,p=null;F();async function F(){try{const{results:e}=await u(h,d.TRENDING_DAY,{page:1});if(!(e!=null&&e.length))return A();b=Y(e),j(b),U(b),q()}catch(e){console.error("Trend film alınamadı:",e),A()}}function U(e){var t,a;(t=document.getElementById(B.trailerButtonId))==null||t.addEventListener("click",()=>P(e)),(a=document.getElementById(B.detailsButtonId))==null||a.addEventListener("click",V)}async function P(e){try{const a=(await u(h,d.MOVIE_VIDEOS(e.id))).results.find(n=>n.site==="YouTube"&&n.type==="Trailer");a?N(a.key):C("OOPS...<br>We are very sorry!<br>But we couldn’t find the trailer.")}catch(t){console.error("Trailer API hatası:",t),C()}}function V(){var t;const e=((t=b.genre_ids)==null?void 0:t.map(a=>p==null?void 0:p[a]).filter(Boolean))||[];D(b,e)}function j(e){const{heroWrap:t,thumb:a,backgroundImage:n,backend:r,heroWrapContent:s,movieTitle:l,starRating:m,movieDescription:c,trailerButton:o,moreDetailsButton:i}=x,{trailerButtonId:y,detailsButtonId:$}=B,g=S(e.vote_average),w=`${T}/original${e.backdrop_path}`;_.innerHTML=`
    <div class="${t}">
      <div class="${a}">
        <div class="${n} hero-img-wrapper">
          <img 
            src="${w}" 
            alt="${e.title} backdrop"
            class="${r} hero-img"
            decoding="async"
          />
        </div>
        <div class="${s}">
          <h1 class="${l}">${e.title||e.name}</h1>
          <div class="${m}">${g}</div>
          <p class="${c}">${e.overview}</p>
          <button class="${o}" id="${y}">Watch trailer</button>
          <button class="${i}" id="${$}">More details</button>
        </div>
      </div>
    </div>`}function A(){const{getStartedButtonClass:e,heroWrap:t,thumb:a,backgroundImage:n,heroWrapContent:r,titleFallback:s,descriptionFallback:l,getStartedButton:m}=x,c=document.querySelector(e);_.innerHTML=`
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
          <button class="${m}">Get Started</button>
        </div>
      </div>
    </div>`,c==null||c.addEventListener("click",()=>{location.href="/catalog.html"})}function Y(e){return e[Math.floor(Math.random()*e.length)]}async function q(){if(!p)try{const t=(await u(h,d.GENRE_LIST)).genres||[];p=Object.fromEntries(t.map(a=>[a.id,a.name]))}catch(e){console.error("Türler yüklenemedi:",e),p={}}}let M=!1,f=[],R={};async function z(){const e=document.getElementById("trends-container"),t=document.getElementById("see-all-trends");R=await H(),f=(await u(h,d.TRENDING_WEEK)).results;const n=window.innerWidth<768?1:3;k(e,f.slice(0,n)),t.addEventListener("click",()=>{if(!e.classList.contains("is-expanded"))k(e,f),e.classList.add("is-expanded"),t.textContent="Show Less",M=!0;else{const s=window.innerWidth<768?1:3;k(e,f.slice(0,s)),e.classList.remove("is-expanded"),t.textContent="See All",M=!1}}),window.addEventListener("resize",()=>{if(!M){const r=window.innerWidth<768?1:3;k(e,f.slice(0,r))}})}function k(e,t){e.innerHTML=t.map((a,n)=>{const r=n>=3?(n-2)*100:0;return K(a,r)}).join("")}function K(e,t=0){var r;const a=e.genre_ids.map(s=>R[s]).join(", "),n=S(e.vote_average);return`
    <div class="trend-card" data-id="${e.id}">
      <img src="${T}${d.IMG_W500}${e.poster_path}" alt="${e.title}">
      <div class="trend-info">
        <div class="movie-meta trend-info-left">
          <h3 class="trend-title">${e.title}</h3>
          <p class="movie-details">${a} | ${((r=e.release_date)==null?void 0:r.split("-")[0])||"N/A"}</p>
        </div>
        <div class="trend-stars">${n}</div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("trends-container");e&&G(e)});z();async function J(){const e=document.getElementById("upcoming-films");e.innerHTML="Yükleniyor...";try{const t=await H(),n=(await u(h,d.POPULAR_MOVIES)).results,r=Math.floor(Math.random()*n.length),s=n[r],l=await u(h,d.MOVIE_DETAILS(s.id));e.innerHTML="",Q(l,t)}catch(t){e.innerHTML=`<p>Hata: ${t.message}</p>`,console.error(t)}}function Q({id:e,poster_path:t,backdrop_path:a,title:n,overview:r,popularity:s,vote_average:l,vote_count:m,release_date:c,genre_ids:o,genres:i},y){const $=document.getElementById("upcoming-films");$.innerHTML="";let g="Bilinmeyen";Array.isArray(o)&&o.length>0?g=o.map(v=>y[v]).filter(Boolean).join(", "):Array.isArray(i)&&i.length>0&&(g=i.map(v=>v.name).join(", "));const w=t?`${T}/w1280${a}`:"https://via.placeholder.com/300x450?text=No+Image",W=r||"No overview available.",E=document.createElement("div");E.classList.add("film-card"),E.innerHTML=`
    <img class="upcom-img" src="${w}" alt="${n}"">
    <div class="upcom">
      <h2>${n}</h2>
      <p class="release-info"><strong>Release date:</strong> ${c||"Unknown"}</p>
      <p class="vote-info">
      <strong>Vote/Votes:</strong> 
      <span class="vote-box vote-box-left">${l.toFixed(1)}</span>
      <span class="slash">/</span>
      <span class="vote-box vote-box-right">${m}</span>
      </p>
      <p class="popularity-info"><strong>Popularity:</strong> <span>${s}</span></p>
      <p class="genre-info">
      <strong>Genres:</strong> 
      <span>${g}</span>
      </p>
      <p class="upcom-about"><strong class="strong-about">ABOUT</strong> ${W}</p>
      <button class="add-library-btn-">Add to my library</button>
    </div>
  `,$.appendChild(E),E.querySelector(".add-library-btn-").addEventListener("click",()=>{const v={id:e,title:n,poster_path:t,release_date:c,vote_average:l,vote_count:m,popularity:s,overview:r,genre_ids:o,genres:i};let I=[];Array.isArray(o)&&o.length>0?I=o.map(L=>y[L]).filter(Boolean):Array.isArray(i)&&i.length>0&&(I=i.map(L=>L.name)),D(v,I)})}document.addEventListener("DOMContentLoaded",J);
//# sourceMappingURL=index.js.map
