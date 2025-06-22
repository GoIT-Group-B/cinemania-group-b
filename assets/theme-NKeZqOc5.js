import{a as S}from"./vendor-DDD7fsZd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const P={menuToggleClass:".menu-toggle",mobileMenuId:"mobileMenu",mobileOverlayId:"mobileOverlay"},{menuToggleClass:G,mobileMenuId:C,mobileOverlayId:N}=P,E=document.querySelector(G),b=document.getElementById(C),M=document.getElementById(N);E.addEventListener("click",()=>{b.classList.toggle("open"),M.classList.toggle("active")});document.addEventListener("click",e=>{const t=b.contains(e.target),o=E.contains(e.target);!t&&!o&&(b.classList.remove("open"),M.classList.remove("active"))});const x="modulepreload",F=function(e){return"/cinemania-group-b/"+e},_={},$=function(t,o,c){let n=Promise.resolve();if(o&&o.length>0){let a=function(s){return Promise.all(s.map(i=>Promise.resolve(i).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=a(o.map(s=>{if(s=F(s),s in _)return;_[s]=!0;const i=s.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${u}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":x,i||(m.as="script"),m.crossOrigin="",m.href=s,d&&m.setAttribute("nonce",d),document.head.appendChild(m),i)return new Promise((h,A)=>{m.addEventListener("load",h),m.addEventListener("error",()=>A(new Error(`Unable to preload CSS for ${s}`)))})}))}function r(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return n.then(a=>{for(const l of a||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})},p=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,v=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,y=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`;function R(e){let t="";if(!e)return t=`${p.repeat(5)}`,`<div>${t}</div>`;switch(Math.round(e)){case 0:t=`${p.repeat(5)}`;break;case 1:t=`${y}${p.repeat(4)}`;break;case 2:t=`${v}${p.repeat(4)}`;break;case 3:t=`${v}${y}${p.repeat(3)}`;break;case 4:t=`${v.repeat(2)}${p.repeat(3)}`;break;case 5:t=`${v.repeat(2)}${y}${p.repeat(2)}`;break;case 6:t=`${v.repeat(3)}${p.repeat(2)}`;break;case 7:t=`${v.repeat(3)}${y}${p}`;break;case 8:t=`${v.repeat(4)}${p}`;break;case 9:t=`${v.repeat(4)}${y}`;break;case 10:t=`${v.repeat(5)}`;break;default:throw new Error("Invalid rating")}return`<div>${t}</div>`}const k="52238d7fab5c2c01b99e751619dd16ec",I="https://api.themoviedb.org/3",B="https://image.tmdb.org/t/p",O={POPULAR_MOVIES:"/movie/popular",UPCOMING_MOVIES:"/movie/upcoming",TRENDING_WEEK:"/trending/movie/week",TRENDING_DAY:"/trending/movie/day",SEARCH_MOVIES:"/search/movie",GENRE_LIST:"/genre/movie/list",MOVIE_DETAILS:e=>`/movie/${e}`,MOVIE_VIDEOS:e=>`/movie/${e}/videos`,IMG_ORIGINAL:"/original",IMG_W500:"/w500",IMG_W780:"/w780",IMG_W1280:"/w1280"};async function H(e,t,o={}){try{return(await S.get(`${e}${t}`,{params:{api_key:k,language:"en-US",page:1,...o}})).data}catch(c){throw console.error("Error fetching data:",c),c}}async function Q(){try{const e=await S.get(`${I}${O.GENRE_LIST}`,{params:{api_key:k,language:"en-US"}}),t={};return e.data.genres.forEach(o=>{t[o.id]=o.name}),t}catch(e){return console.error("Error fetching genres:",e),{}}}function U({movies:e,renderCallback:t,containerSelector:o,btnSelector:c,moviesPerPage:n=9}){let r=1;const a=document.querySelector(c),l=document.querySelector(o);if(!a||!l)return;function d(){const s=(r-1)*n,i=r*n,u=e.slice(s,i);t(u),i>=e.length?a.style.display="none":a.style.display="block"}d(),a.addEventListener("click",()=>{r++,d()})}const f={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},j=Object.entries(f).reduce((e,[t,o])=>(e[o.toLowerCase()]=parseInt(t),e),{});function D(){const e=document.querySelector(".library-gallery .dropdown select");e&&(e.innerHTML=`
    <option class="hidden-option" value="Genre" selected disabled>Genre</option>
    <option value="all">All</option>
  `,Object.values(f).sort().forEach(t=>{const o=document.createElement("option");o.value=t.toLowerCase(),o.textContent=t,e.appendChild(o)}))}function L(e=null){const t=document.querySelector(".library-gallery"),o=t==null?void 0:t.querySelector(".library-gallery-list");if(!t||!o){window.location.pathname.endsWith("library.html")&&console.warn("library-gallery veya library-gallery-list bulunamadı.");return}const c=JSON.parse(localStorage.getItem("myLibrary"))||[];let n=c;if(e&&e!=="Genre"&&e!=="all"){const a=j[e];a&&(n=c.filter(l=>{var d;return(d=l.genre_ids)==null?void 0:d.includes(a)}))}if(o.innerHTML="",n.length===0){const a=`
      <div class="my-library-no-movies">
        <p class="my-library-oops-message">
          OOPS...<br />
          We are very sorry! <br />
          ${e&&e!=="Genre"?`No movies found for '${e}' genre.`:"You don't have any movies at your library."}
        </p>
        <button>
          <a href="./catalog.html" class="my-library-search-link button">Search movie</a>
        </button>
      </div>
    `;t.innerHTML=a;return}let r=t.querySelector(".dropdown select");r?r.classList.remove("visually-hidden"):(t.insertAdjacentHTML("afterbegin",`
      <div class="dropdown">
        <select>
          <option class="hidden-option" value="Genre" selected disabled>Genre</option>
        </select>
      </div>
    `),D(),r=t.querySelector(".dropdown select")),e&&r.options.length>1&&(r.value=e),U({movies:n,renderCallback:q,containerSelector:".library-gallery-list",btnSelector:".load-more-btn",moviesPerPage:9}),r==null||r.addEventListener("change",a=>{const l=a.target.value;L(l)})}function T(e){e&&e.addEventListener("click",async t=>{var d,s;const o=t.target.closest(".trend-card");if(!o)return;const c=o.dataset.id;let r=(JSON.parse(localStorage.getItem("myLibrary"))||[]).find(i=>i.id===Number(c));if(!r)try{r=await H(I,O.MOVIE_DETAILS(c)),r.genre_ids=((d=r.genres)==null?void 0:d.map(i=>i.id))||[]}catch(i){console.error("API fetch error:",i);return}const{showDetailsModal:a}=await $(async()=>{const{showDetailsModal:i}=await Promise.resolve().then(()=>z);return{showDetailsModal:i}},void 0),l=((s=r.genre_ids)==null?void 0:s.map(i=>f[i]).filter(Boolean))||[];a(r,l)})}function q(e){const t=e.map(c=>{const{id:n,title:r,poster_path:a,release_date:l,vote_average:d,genre_ids:s}=c,i=l?l.split("-")[0]:"N/A",u=(s==null?void 0:s.map(h=>f[h]).filter(Boolean).join(", "))||"",m=R(d);return`
        <div class="trend-card" data-id="${n}">
          <div class="poster-wrapper">
            <img src="${B}/w500${a}" alt="${r}" class="movie-poster" />
            <div class="trend-info">
              <div class="movie-meta">
                <h3 class="trend-title">${r}</h3>
                <p class="movie-details">${u} | ${i}</p>
              </div>
              <div class="trend-stars">${m}</div>
            </div>
          </div>
        </div>
      `}).join(""),o=document.querySelector(".library-gallery-list");o.insertAdjacentHTML("beforeend",t),T(o)}L();const V=Object.freeze(Object.defineProperty({__proto__:null,attachMovieClickListener:T,loadLibrary:L},Symbol.toStringTag,{value:"Module"})),W={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};function g(){const e=document.querySelector(".custom-modal");e&&e.remove(),document.body.style.overflow=""}function w(e){g();const t=document.createElement("div");t.className="custom-modal",t.innerHTML=`
    <div class="modal-content" tabindex="0">
      <button class="close-btn" aria-label="Close modal">×</button>
      ${e}
    </div>
  `,document.body.appendChild(t),document.body.style.overflow="hidden",t.querySelector(".close-btn").addEventListener("click",g),document.addEventListener("keydown",o),t.addEventListener("click",c=>{c.target===t&&(g(),document.removeEventListener("keydown",o))});function o(c){c.key==="Escape"&&(g(),document.removeEventListener("keydown",o))}}function J(e){const t=`
    <iframe width="560" height="315"
      src="https://www.youtube.com/embed/${e}"
      frameborder="0" allowfullscreen loading="lazy" class="trailer-iframe"></iframe>`;w(t)}function K(){w(`
    <div class="error-modal-content">
      <p class="error-title">OOPS...</p>
      <p class="error-text">We are very sorry!<br>But we couldn’t find the trailer.</p>
      <img src="./images/trailer-error.png" alt="Error image" class="error-image" />
    </div>
  `)}function Z(e,t=[]){var l,d;const c=(JSON.parse(localStorage.getItem("myLibrary"))||[]).some(s=>s.id===e.id),n=c?"Remove from Library":"Add to My Library",r=t.length>0?t.join(" "):((l=e.genre_ids)==null?void 0:l.map(s=>W[s]).filter(Boolean).join(" "))||"",a=`
    <div class="movie-modal">
      <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" class="movie-poster" alt="${e.title}" />
      <div class="movie-info">
        <h2 class="movie-title">${e.title||e.name}</h2>

        <ul class="movie-stats">
          <li>
            <strong>Vote / Votes</strong>
            <div class="movie-stats-value">
              <span>
                <b class="vote-average">${e.vote_average}</b>
                <span class="vote-divider">/</span>
                <b class="vote-count">${e.vote_count}</b>
              </span>
            </div>
          </li>
          <li>
            <strong>Popularity</strong>
            <div class="movie-stats-value">
              <span>${Math.round(e.popularity)}</span>
            </div>
          </li>
          <li>
            <strong>Genre</strong>
            <div class="movie-stats-value">
              <span>${r}</span>
            </div>
          </li>
        </ul>

        <h3 class="about-heading">ABOUT</h3>
        <p class="about-text">${e.overview||"No description available."}</p>

        <div class="add-to-library-gradient-border">
          <button class="add-to-library-btn">${n}</button>
        </div>
      </div>
    </div>
  `;w(a),(d=document.querySelector(".add-to-library-btn"))==null||d.addEventListener("click",async()=>{let s=JSON.parse(localStorage.getItem("myLibrary"))||[];c?(s=s.filter(i=>i.id!==e.id),alert("Film kütüphaneden kaldırıldı.")):(s.push(e),alert("Film kütüphaneye eklendi.")),localStorage.setItem("myLibrary",JSON.stringify(s)),g();try{const{loadLibrary:i}=await $(async()=>{const{loadLibrary:u}=await Promise.resolve().then(()=>V);return{loadLibrary:u}},void 0);i&&i()}catch(i){console.error("loadLibrary yüklenirken hata oluştu:",i)}})}const z=Object.freeze(Object.defineProperty({__proto__:null,showDetailsModal:Z,showErrorModal:K,showTrailerModal:J},Symbol.toStringTag,{value:"Module"}));window.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("theme-switcher"),t=document.documentElement;localStorage.getItem("theme")==="light"?t.classList.add("light-theme"):t.classList.remove("light-theme"),e.addEventListener("click",()=>{const c=t.classList.toggle("light-theme");localStorage.setItem("theme",c?"light":"dark")})});export{I as B,O as E,B as I,J as a,Z as b,R as c,T as d,Q as e,H as f,K as s};
//# sourceMappingURL=theme-NKeZqOc5.js.map
