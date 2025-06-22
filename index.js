import{f as h,B as f,E as c,s as C,a as q,b as D,c as x,I,d as F,e as _}from"./assets/theme-LYYpEH5U.js";import"./assets/vendor-DDD7fsZd.js";const T={homeHeroClass:".home-hero",heroWrap:"hero-wrap",thumb:"thumb",backgroundImage:"background-image",backend:"backend",heroWrapContent:"hero-wrap__content",movieTitle:"title",starRating:"star-rate__hero",movieDescription:"description",trailerButton:"watch-trailer__btn",moreDetailsButton:"more-details__btn",titleFallback:"title-fallback",descriptionFallback:"description-fallback",getStartedButtonClass:".getstarted-btn",getStartedButton:"getstarted-btn"},H={trailerButtonId:"trailer-btn",detailsButtonId:"details-btn"},W=document.querySelector(T.homeHeroClass);let b=null,p=null;O();async function O(){const{trailerButtonId:t,detailsButtonId:e}=H;try{const{results:n}=await h(f,c.TRENDING_DAY,{page:1});if(!(n!=null&&n.length))return A();b=n[Math.floor(Math.random()*n.length)],U(b),z(),document.getElementById(t).addEventListener("click",()=>P(b)),document.getElementById(e).addEventListener("click",V)}catch(n){console.error("Trend film alınamadı:",n),A()}}async function P(t){try{const n=(await h(f,c.MOVIE_VIDEOS(t.id))).results.find(a=>a.site==="YouTube"&&a.type==="Trailer");n?q(n.key):C("OOPS...<br>We are very sorry!<br>But we couldn’t find the trailer.")}catch(e){console.error("Trailer API hatası:",e),C()}}function V(){var e;const t=((e=b.genre_ids)==null?void 0:e.map(n=>p==null?void 0:p[n]).filter(Boolean))||[];D(b,t)}function U(t){const{heroWrap:e,thumb:n,backgroundImage:a,backend:o,heroWrapContent:s,movieTitle:d,starRating:m,movieDescription:u,trailerButton:r,moreDetailsButton:l}=T,{trailerButtonId:$,detailsButtonId:E}=H,g=x(t.vote_average);W.innerHTML=`
    <div class="${e}">
      <div class="${n}">
        <div class="${a}">
          <img src="${I}/original${t.backdrop_path}"
               alt="${t.title} backdrop" class="${o}" loading="lazy"/>
        </div>
        <div class="${s}">
          <h1 class="${d}">${t.title||t.name}</h1>
          <div class="${m}">${g}</div>
          <p class="${u}">${t.overview}</p>
          <button class="${r}" id="${$}">Watch trailer</button>
          <button class="${l}" id="${E}">More details</button>
        </div>
      </div>
    </div>`}function A(){const{getStartedButtonClass:t,heroWrap:e,thumb:n,backgroundImage:a,backend:o,heroWrapContent:s,titleFallback:d,descriptionFallback:m,getStartedButton:u}=T,r=document.querySelector(t);W.innerHTML=`
    <div class="${e}">
      <div class="${n}">
        <picture class="${a}">
          <img src="./images/hero-desktop.jpg" alt="Default hero" class="${o}" loading="lazy" />
        </picture>
        <div class="${s}">
          <h1 class="${d}">Let’s Make Your Own Cinema</h1>
          <p class="${m}">Is a guide to creating a personalized movie theater experience.</p>
          <button class="${u}">Get Started</button>
        </div>
      </div>
    </div>`,r.addEventListener("click",()=>location.href="/catalog.html")}async function z(){if(!p)try{const e=(await h(f,c.GENRE_LIST)).genres||[];p=Object.fromEntries(e.map(n=>[n.id,n.name]))}catch(t){console.error("Türler yüklenemedi:",t),p={}}}let B=!1,y=[],N={};async function Y(){const t=document.getElementById("trends-container"),e=document.getElementById("see-all-trends");N=await _(),y=(await h(f,c.TRENDING_WEEK)).results;const a=window.innerWidth<768?1:3;k(t,y.slice(0,a)),e.addEventListener("click",()=>{if(!t.classList.contains("is-expanded"))k(t,y),t.classList.add("is-expanded"),e.textContent="Show Less",B=!0;else{const s=window.innerWidth<768?1:3;k(t,y.slice(0,s)),t.classList.remove("is-expanded"),e.textContent="See All",B=!1}}),window.addEventListener("resize",()=>{if(!B){const o=window.innerWidth<768?1:3;k(t,y.slice(0,o))}})}function k(t,e){t.innerHTML=e.map((n,a)=>{const o=a>=3?(a-2)*100:0;return K(n,o)}).join("")}function K(t,e=0){var o;const n=t.genre_ids.map(s=>N[s]).join(", "),a=x(t.vote_average);return`
    <div class="trend-card" data-id="${t.id}">
      <img src="${I}${c.IMG_W500}${t.poster_path}" alt="${t.title}">
      <div class="trend-info">
        <div class="movie-meta trend-info-left">
          <h3 class="trend-title">${t.title}</h3>
          <p class="movie-details">${n} | ${((o=t.release_date)==null?void 0:o.split("-")[0])||"N/A"}</p>
        </div>
        <div class="trend-stars">${a}</div>
      </div>
    </div>
  `}document.addEventListener("DOMContentLoaded",()=>{const t=document.getElementById("trends-container");t&&F(t)});Y();async function j(){const t=document.getElementById("upcoming-films");t.innerHTML="Yükleniyor...";try{const e=await _(),a=(await h(f,c.POPULAR_MOVIES)).results,o=Math.floor(Math.random()*a.length),s=a[o],d=await h(f,c.MOVIE_DETAILS(s.id));t.innerHTML="",J(d,e)}catch(e){t.innerHTML=`<p>Hata: ${e.message}</p>`,console.error(e)}}function J({id:t,poster_path:e,backdrop_path:n,title:a,overview:o,popularity:s,vote_average:d,vote_count:m,release_date:u,genre_ids:r,genres:l},$){const E=document.getElementById("upcoming-films");E.innerHTML="";let g="Bilinmeyen";Array.isArray(r)&&r.length>0?g=r.map(v=>$[v]).filter(Boolean).join(", "):Array.isArray(l)&&l.length>0&&(g=l.map(v=>v.name).join(", "));const R=e?`${I}/w1280${n}`:"https://via.placeholder.com/300x450?text=No+Image",G=o||"No overview available.",L=document.createElement("div");L.classList.add("film-card"),L.innerHTML=`
    <img class="upcom-img" src="${R}" alt="${a}"">
    <div class="upcom">
      <h2>${a}</h2>
      <p class="release-info"><strong>Release date:</strong> ${u||"Unknown"}</p>
      <p class="vote-info">
      <strong>Vote/Votes:</strong> 
      <span class="vote-box vote-box-left">${d.toFixed(1)}</span>
      <span class="slash">/</span>
      <span class="vote-box vote-box-right">${m}</span>
      </p>
      <p class="popularity-info"><strong>Popularity:</strong> <span>${s}</span></p>
      <p class="genre-info">
      <strong>Genres:</strong> 
      <span>${g}</span>
      </p>
      <p class="upcom-about"><strong class="strong-about">ABOUT</strong> ${G}</p>
      <button class="add-library-btn">Add to my library</button>
    </div>
  `,E.appendChild(L),L.querySelector(".add-library-btn").addEventListener("click",()=>{const v={id:t,title:a,poster_path:e,release_date:u,vote_average:d,vote_count:m,popularity:s,overview:o,genre_ids:r,genres:l};let M=[];Array.isArray(r)&&r.length>0?M=r.map(w=>$[w]).filter(Boolean):Array.isArray(l)&&l.length>0&&(M=l.map(w=>w.name)),D(v,M)})}document.addEventListener("DOMContentLoaded",j);const Q=document.querySelector('[data-modal-open="footer"]'),X=document.querySelector('[data-modal-close="footer"]'),i=document.querySelector('[data-modal="footer"]'),Z=i.querySelector(".footer-modal-content");Q.addEventListener("click",function(t){t.preventDefault(),i.classList.remove("is-hidden"),requestAnimationFrame(()=>{i.classList.add("show-modal")}),document.body.style.overflow="hidden"});X.addEventListener("click",S);document.addEventListener("keydown",function(t){t.key==="Escape"&&!i.classList.contains("is-hidden")&&S()});function S(){i.classList.add("closing"),i.classList.remove("show-modal"),Z.addEventListener("transitionend",()=>{i.classList.remove("closing"),i.classList.add("is-hidden")},{once:!0}),document.body.style.overflow="auto"}i.addEventListener("click",function(t){t.target===i&&S()});
//# sourceMappingURL=index.js.map
