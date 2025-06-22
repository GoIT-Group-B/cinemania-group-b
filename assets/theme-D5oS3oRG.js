import{a as S}from"./vendor-DDD7fsZd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const N={menuToggleClass:".menu-toggle",mobileMenuId:"mobileMenu",mobileOverlayId:"mobileOverlay"},{menuToggleClass:x,mobileMenuId:F,mobileOverlayId:R}=N,M=document.querySelector(x),L=document.getElementById(F),$=document.getElementById(R);M.addEventListener("click",()=>{L.classList.toggle("open"),$.classList.toggle("active")});document.addEventListener("click",e=>{const t=L.contains(e.target),r=M.contains(e.target);!t&&!r&&(L.classList.remove("open"),$.classList.remove("active"))});const D="modulepreload",H=function(e){return"/cinemania-group-b/"+e},E={},I=function(t,r,l){let s=Promise.resolve();if(r&&r.length>0){let c=function(n){return Promise.all(n.map(i=>Promise.resolve(i).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),d=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=c(r.map(n=>{if(n=H(n),n in E)return;E[n]=!0;const i=n.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${u}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":D,i||(m.as="script"),m.crossOrigin="",m.href=n,d&&m.setAttribute("nonce",d),document.head.appendChild(m),i)return new Promise((g,b)=>{m.addEventListener("load",g),m.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(c){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=c,window.dispatchEvent(a),!a.defaultPrevented)throw c}return s.then(c=>{for(const a of c||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},p=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`;function U(e){let t="";if(!e)return t=`${p.repeat(5)}`,`<div>${t}</div>`;switch(Math.round(e)){case 0:t=`${p.repeat(5)}`;break;case 1:t=`${y}${p.repeat(4)}`;break;case 2:t=`${v}${p.repeat(4)}`;break;case 3:t=`${v}${y}${p.repeat(3)}`;break;case 4:t=`${v.repeat(2)}${p.repeat(3)}`;break;case 5:t=`${v.repeat(2)}${y}${p.repeat(2)}`;break;case 6:t=`${v.repeat(3)}${p.repeat(2)}`;break;case 7:t=`${v.repeat(3)}${y}${p}`;break;case 8:t=`${v.repeat(4)}${p}`;break;case 9:t=`${v.repeat(4)}${y}`;break;case 10:t=`${v.repeat(5)}`;break;default:throw new Error("Invalid rating")}return`<div>${t}</div>`}const O="52238d7fab5c2c01b99e751619dd16ec",k="https://api.themoviedb.org/3",j="https://image.tmdb.org/t/p",T={POPULAR_MOVIES:"/movie/popular",UPCOMING_MOVIES:"/movie/upcoming",TRENDING_WEEK:"/trending/movie/week",TRENDING_DAY:"/trending/movie/day",SEARCH_MOVIES:"/search/movie",GENRE_LIST:"/genre/movie/list",MOVIE_DETAILS:e=>`/movie/${e}`,MOVIE_VIDEOS:e=>`/movie/${e}/videos`,IMG_ORIGINAL:"/original",IMG_W500:"/w500",IMG_W780:"/w780",IMG_W1280:"/w1280"};async function B(e,t,r={}){try{return(await S.get(`${e}${t}`,{params:{api_key:O,language:"en-US",page:1,...r}})).data}catch(l){throw console.error("Error fetching data:",l),l}}async function X(){try{const e=await S.get(`${k}${T.GENRE_LIST}`,{params:{api_key:O,language:"en-US"}}),t={};return e.data.genres.forEach(r=>{t[r.id]=r.name}),t}catch(e){return console.error("Error fetching genres:",e),{}}}const h={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},V=Object.entries(h).reduce((e,[t,r])=>(e[r.toLowerCase()]=parseInt(t),e),{});function q(){const e=document.querySelector(".library-gallery .dropdown select");e&&(e.innerHTML=`
  <option class="hidden-option" value="Genre" selected disabled>Genre</option>
  <option value="all">All</option>
  `,Object.values(h).sort().forEach(t=>{const r=document.createElement("option");r.value=t.toLowerCase(),r.textContent=t,e.appendChild(r)}))}function w(e=null){const t=document.querySelector(".library-gallery"),r=t==null?void 0:t.querySelector(".library-gallery-list");if(!t||!r){window.location.pathname.endsWith("library.html")&&console.warn("library-gallery veya library-gallery-list bulunamadı.");return}const l=JSON.parse(localStorage.getItem("myLibrary"))||[];let s=l;if(e&&e!=="Genre"&&e!=="all"){const a=V[e];a&&(s=l.filter(d=>{var n;return(n=d.genre_ids)==null?void 0:n.includes(a)}))}if(r.innerHTML="",s.length===0){const a=`
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
    `;t.innerHTML=a;return}let o=t.querySelector(".dropdown select");o?o.classList.remove("visually-hidden"):(t.insertAdjacentHTML("afterbegin",`
      <div class="dropdown">
        <select>
          <option class="hidden-option" value="Genre" selected disabled>Genre</option>
        </select>
      </div>
    `),q(),o=t.querySelector(".dropdown select")),e&&o.options.length>1&&(o.value=e);const c=s.map(a=>{const{id:d,title:n,poster_path:i,release_date:u,vote_average:m,genre_ids:g}=a,b=u?u.split("-")[0]:"N/A",P=(g==null?void 0:g.map(C=>h[C]).filter(Boolean).join(", "))||"",G=U(m);return`
        <div class="trend-card" data-id="${d}">
          <div class="poster-wrapper">
            <img src="${j}/w500${i}" alt="${n}" class="movie-poster" />
            <div class="trend-info">
              <div class="movie-meta">
                <h3 class="trend-title">${n}</h3>
                <p class="movie-details">${P} | ${b}</p>
              </div>
              <div class="trend-stars">${G}</div>
            </div>
          </div>
        </div>
      `}).join("");r.insertAdjacentHTML("beforeend",c),document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".library-gallery-list");a&&A(a)}),o==null||o.addEventListener("change",a=>{const d=a.target.value;w(d)})}function A(e){e&&e.addEventListener("click",async t=>{var d,n;const r=t.target.closest(".trend-card");if(!r)return;const l=r.dataset.id;let o=(JSON.parse(localStorage.getItem("myLibrary"))||[]).find(i=>i.id===Number(l));if(!o)try{o=await B(k,T.MOVIE_DETAILS(l)),o.genre_ids=((d=o.genres)==null?void 0:d.map(i=>i.id))||[]}catch(i){console.error("API fetch error:",i);return}const{showDetailsModal:c}=await I(async()=>{const{showDetailsModal:i}=await Promise.resolve().then(()=>Y);return{showDetailsModal:i}},void 0),a=((n=o.genre_ids)==null?void 0:n.map(i=>h[i]).filter(Boolean))||[];c(o,a)})}w();const W=Object.freeze(Object.defineProperty({__proto__:null,attachMovieClickListener:A,loadLibrary:w},Symbol.toStringTag,{value:"Module"})),J={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};function f(){const e=document.querySelector(".custom-modal");e&&e.remove(),document.body.style.overflow=""}function _(e){f();const t=document.createElement("div");t.className="custom-modal",t.innerHTML=`
    <div class="modal-content" tabindex="0">
      <button class="close-btn" aria-label="Close modal">×</button>
      ${e}
    </div>
  `,document.body.appendChild(t),document.body.style.overflow="hidden",t.querySelector(".close-btn").addEventListener("click",f),document.addEventListener("keydown",r),t.addEventListener("click",l=>{l.target===t&&(f(),document.removeEventListener("keydown",r))});function r(l){l.key==="Escape"&&(f(),document.removeEventListener("keydown",r))}}function K(e){const t=`
    <iframe width="560" height="315"
      src="https://www.youtube.com/embed/${e}"
      frameborder="0" allowfullscreen loading="lazy" class="trailer-iframe"></iframe>`;_(t)}function Z(){_(`
    <div class="error-modal-content">
      <p class="error-title">OOPS...</p>
      <p class="error-text">We are very sorry!<br>But we couldn’t find the trailer.</p>
      <img src="./images/trailer-error.png" alt="Error image" class="error-image" />
    </div>
  `)}function z(e,t=[]){var a,d;const l=(JSON.parse(localStorage.getItem("myLibrary"))||[]).some(n=>n.id===e.id),s=l?"Remove from Library":"Add to My Library",o=t.length>0?t.join(" "):((a=e.genre_ids)==null?void 0:a.map(n=>J[n]).filter(Boolean).join(" "))||"",c=`
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
              <span>${o}</span>
            </div>
          </li>
        </ul>

        <h3 class="about-heading">ABOUT</h3>
        <p class="about-text">${e.overview||"No description available."}</p>

        <div class="add-to-library-gradient-border">
          <button class="add-to-library-btn">${s}</button>
        </div>
      </div>
    </div>
  `;_(c),(d=document.querySelector(".add-to-library-btn"))==null||d.addEventListener("click",async()=>{let n=JSON.parse(localStorage.getItem("myLibrary"))||[];l?(n=n.filter(i=>i.id!==e.id),alert("Film kütüphaneden kaldırıldı.")):(n.push(e),alert("Film kütüphaneye eklendi.")),localStorage.setItem("myLibrary",JSON.stringify(n)),f();try{const{loadLibrary:i}=await I(async()=>{const{loadLibrary:u}=await Promise.resolve().then(()=>W);return{loadLibrary:u}},void 0);i&&i()}catch(i){console.error("loadLibrary yüklenirken hata oluştu:",i)}})}const Y=Object.freeze(Object.defineProperty({__proto__:null,showDetailsModal:z,showErrorModal:Z,showTrailerModal:K},Symbol.toStringTag,{value:"Module"}));window.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("theme-switcher"),t=document.documentElement;localStorage.getItem("theme")==="light"?t.classList.add("light-theme"):t.classList.remove("light-theme"),e.addEventListener("click",()=>{const l=t.classList.toggle("light-theme");localStorage.setItem("theme",l?"light":"dark")})});export{k as B,T as E,j as I,K as a,z as b,U as c,A as d,X as e,B as f,Z as s};
//# sourceMappingURL=theme-D5oS3oRG.js.map
