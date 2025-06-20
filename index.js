import{c as $}from"./assets/theme-BTg3i2ob.js";import{f as l,B as c,E as o,a as L,I as T}from"./assets/fetchMovies-BSsJlcs_.js";import{s as w,a as D,b as C}from"./assets/modal-BsPm1_va.js";import"./assets/vendor-DDD7fsZd.js";const _=document.querySelector(".home-hero");let p=null,i=null;O();async function O(){try{const{results:e}=await l(c,o.TRENDING_DAY,{page:1});if(!(e!=null&&e.length))return M();p=e[Math.floor(Math.random()*e.length)],N(p),R(),document.getElementById("trailer-btn").addEventListener("click",()=>G(p)),document.getElementById("details-btn").addEventListener("click",H)}catch(e){console.error("Trend film alınamadı:",e),M()}}async function G(e){try{const a=(await l(c,o.MOVIE_VIDEOS(e.id))).results.find(n=>n.site==="YouTube"&&n.type==="Trailer");a?D(a.key):w("OOPS...<br>We are very sorry!<br>But we couldn’t find the trailer.")}catch(t){console.error("Trailer API hatası:",t),w()}}function H(){var t;const e=((t=p.genre_ids)==null?void 0:t.map(a=>i==null?void 0:i[a]).filter(Boolean))||[];C(p,e)}function N(e){const t=$(e.vote_average);_.innerHTML=`
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
    </div>`}function M(){_.innerHTML=`
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
    </div>`,document.querySelector(".getstarted-btn").addEventListener("click",()=>location.href="catalog.html")}async function R(){if(!i)try{const t=(await l(c,o.GENRE_LIST)).genres||[];i=Object.fromEntries(t.map(a=>[a.id,a.name]))}catch(e){console.error("Türler yüklenemedi:",e),i={}}}let b=!1,d=[],k={};async function W(){const e=document.getElementById("trends-container"),t=document.getElementById("see-all-trends");k=await L(),d=(await l(c,o.TRENDING_WEEK)).results;const n=window.innerWidth<768?1:3;u(e,d.slice(0,n)),t.addEventListener("click",()=>{if(!e.classList.contains("is-expanded"))u(e,d),e.classList.add("is-expanded"),t.textContent="Show Less",b=!0;else{const r=window.innerWidth<768?1:3;u(e,d.slice(0,r)),e.classList.remove("is-expanded"),t.textContent="See All",b=!1}}),window.addEventListener("resize",()=>{if(!b){const s=window.innerWidth<768?1:3;u(e,d.slice(0,s))}})}function u(e,t){e.innerHTML=t.map((a,n)=>{const s=n>=3?(n-2)*100:0;return P(a,s)}).join("")}function P(e,t=0){var s;const a=e.genre_ids.map(r=>k[r]).join(", "),n=$(e.vote_average);return`
    <div class="trend-card" data-id="${e.id}" style="animation-delay: ${t}ms;">
      <img src="${T}${o.IMG_W500}${e.poster_path}" alt="${e.title}">
      <div class="trend-info">
        <h3>${e.title}</h3>
        <p>${a} | ${((s=e.release_date)==null?void 0:s.split("-")[0])||"N/A"}</p>
        <div class="trend-stars">${n}</div>
      </div>
    </div>
  `}W();async function V(){const e=document.getElementById("upcoming-films");e.innerHTML="Yükleniyor...";try{const t=await L(),n=(await l(c,o.POPULAR_MOVIES)).results,s=Math.floor(Math.random()*n.length),r=n[s],g=await l(c,o.MOVIE_DETAILS(r.id));e.innerHTML="",U(g,t)}catch(t){e.innerHTML=`<p>Hata: ${t.message}</p>`,console.error(t)}}function U({id:e,poster_path:t,backdrop_path:a,title:n,overview:s,popularity:r,vote_average:g,vote_count:I,release_date:x,genre_ids:h,genres:f},S){const E=document.getElementById("upcoming-films");E.innerHTML="";let v="Bilinmeyen";Array.isArray(h)&&h.length>0?v=h.map(y=>S[y]).filter(Boolean).join(", "):Array.isArray(f)&&f.length>0&&(v=f.map(y=>y.name).join(", "));const A=t?`${T}/w1280${a}`:"https://via.placeholder.com/300x450?text=No+Image",B=s||"No overview available.",m=document.createElement("div");m.classList.add("film-card"),m.innerHTML=`
    <img class="upcom-img" src="${A}" alt="${n}"">
    <div class="upcom">
      <h2>${n}</h2>
      <p class="release-info"><strong>Release date:</strong> ${x||"Unknown"}</p>
      <p class="vote-info">
      <strong>Vote/Votes:</strong> 
      <span class="vote-box vote-box-left">${g.toFixed(1)}</span>
      <span class="slash">/</span>
      <span class="vote-box vote-box-right">${I}</span>
      </p>
      <p class="popularity-info"><strong>Popularity:</strong> ${r}</p>
      <p class="genre-info">
      <strong>Genres:</strong> 
      <span>${v}</span>
      </p>
      <p class="upcom-about"><strong class="strong-about">ABOUT</strong> ${B}</p>
      <button class="add-library-btn">Add to my library</button>
    </div>
  `,m.querySelector(".add-library-btn").addEventListener("click",()=>{console.log(`"${n}" kütüphaneye eklendi!`)}),E.appendChild(m)}document.addEventListener("DOMContentLoaded",V);
//# sourceMappingURL=index.js.map
