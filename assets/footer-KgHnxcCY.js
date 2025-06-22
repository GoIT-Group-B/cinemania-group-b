import{a as M}from"./vendor-DDD7fsZd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const G={menuToggleClass:".menu-toggle",mobileMenuId:"mobileMenu",mobileOverlayId:"mobileOverlay"},{menuToggleClass:F,mobileMenuId:N,mobileOverlayId:x}=G,$=document.querySelector(F),L=document.getElementById(N),k=document.getElementById(x);$.addEventListener("click",()=>{L.classList.toggle("open"),k.classList.toggle("active")});document.addEventListener("click",e=>{const t=L.contains(e.target),r=$.contains(e.target);!t&&!r&&(L.classList.remove("open"),k.classList.remove("active"))});const q="modulepreload",B=function(e){return"/cinemania-group-b/"+e},S={},I=function(t,r,c){let n=Promise.resolve();if(r&&r.length>0){let a=function(s){return Promise.all(s.map(i=>Promise.resolve(i).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),d=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=a(r.map(s=>{if(s=B(s),s in S)return;S[s]=!0;const i=s.endsWith(".css"),u=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${u}`))return;const m=document.createElement("link");if(m.rel=i?"stylesheet":q,i||(m.as="script"),m.crossOrigin="",m.href=s,d&&m.setAttribute("nonce",d),document.head.appendChild(m),i)return new Promise((b,C)=>{m.addEventListener("load",b),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${s}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return n.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},p=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,y=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,g=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`;function R(e){let t="";if(!e)return t=`${p.repeat(5)}`,`<div>${t}</div>`;switch(Math.round(e)){case 0:t=`${p.repeat(5)}`;break;case 1:t=`${g}${p.repeat(4)}`;break;case 2:t=`${y}${p.repeat(4)}`;break;case 3:t=`${y}${g}${p.repeat(3)}`;break;case 4:t=`${y.repeat(2)}${p.repeat(3)}`;break;case 5:t=`${y.repeat(2)}${g}${p.repeat(2)}`;break;case 6:t=`${y.repeat(3)}${p.repeat(2)}`;break;case 7:t=`${y.repeat(3)}${g}${p}`;break;case 8:t=`${y.repeat(4)}${p}`;break;case 9:t=`${y.repeat(4)}${g}`;break;case 10:t=`${y.repeat(5)}`;break;default:throw new Error("Invalid rating")}return`<div>${t}</div>`}const O="52238d7fab5c2c01b99e751619dd16ec",T="https://api.themoviedb.org/3",D="https://image.tmdb.org/t/p",A={POPULAR_MOVIES:"/movie/popular",UPCOMING_MOVIES:"/movie/upcoming",TRENDING_WEEK:"/trending/movie/week",TRENDING_DAY:"/trending/movie/day",SEARCH_MOVIES:"/search/movie",DISCOVER_MOVIES:"/discover/movie",GENRE_LIST:"/genre/movie/list",MOVIE_DETAILS:e=>`/movie/${e}`,MOVIE_VIDEOS:e=>`/movie/${e}/videos`,IMG_ORIGINAL:"/original",IMG_W500:"/w500",IMG_W780:"/w780",IMG_W1280:"/w1280"};async function H(e,t,r={}){try{return(await M.get(`${e}${t}`,{params:{api_key:O,language:"en-US",page:1,...r}})).data}catch(c){throw console.error("Error fetching data:",c),c}}async function re(){try{const e=await M.get(`${T}${A.GENRE_LIST}`,{params:{api_key:O,language:"en-US"}}),t={};return e.data.genres.forEach(r=>{t[r.id]=r.name}),t}catch(e){return console.error("Error fetching genres:",e),{}}}function U({movies:e,renderCallback:t,containerSelector:r,btnSelector:c,moviesPerPage:n=9}){let o=1;const a=document.querySelector(c),l=document.querySelector(r);if(!a||!l)return;function d(){const s=(o-1)*n,i=o*n,u=e.slice(s,i);t(u),i>=e.length?a.style.display="none":a.style.display="block"}d(),a.addEventListener("click",()=>{o++,d()})}const h={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},j=Object.entries(h).reduce((e,[t,r])=>(e[r.toLowerCase()]=parseInt(t),e),{});function V(){const e=document.querySelector(".library-gallery .dropdown select");e&&(e.innerHTML=`
    <option class="hidden-option" value="Genre" selected disabled>Genre</option>
    <option value="all">All</option>
  `,Object.values(h).sort().forEach(t=>{const r=document.createElement("option");r.value=t.toLowerCase(),r.textContent=t,e.appendChild(r)}))}function w(e=null){const t=document.querySelector(".library-gallery"),r=t==null?void 0:t.querySelector(".library-gallery-list");if(!t||!r){window.location.pathname.endsWith("library.html")&&console.warn("library-gallery veya library-gallery-list bulunamadı.");return}const c=JSON.parse(localStorage.getItem("myLibrary"))||[];let n=c;if(e&&e!=="Genre"&&e!=="all"){const a=j[e];a&&(n=c.filter(l=>{var d;return(d=l.genre_ids)==null?void 0:d.includes(a)}))}if(r.innerHTML="",n.length===0){const a=`
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
    `),V(),o=t.querySelector(".dropdown select")),e&&o.options.length>1&&(o.value=e),U({movies:n,renderCallback:W,containerSelector:".library-gallery-list",btnSelector:".load-more-btn",moviesPerPage:9}),o==null||o.addEventListener("change",a=>{const l=a.target.value;w(l)})}function P(e){e&&e.addEventListener("click",async t=>{var d,s;const r=t.target.closest(".trend-card");if(!r)return;const c=r.dataset.id;let o=(JSON.parse(localStorage.getItem("myLibrary"))||[]).find(i=>i.id===Number(c));if(!o)try{o=await H(T,A.MOVIE_DETAILS(c)),o.genre_ids=((d=o.genres)==null?void 0:d.map(i=>i.id))||[]}catch(i){console.error("API fetch error:",i);return}const{showDetailsModal:a}=await I(async()=>{const{showDetailsModal:i}=await Promise.resolve().then(()=>Q);return{showDetailsModal:i}},void 0),l=((s=o.genre_ids)==null?void 0:s.map(i=>h[i]).filter(Boolean))||[];a(o,l)})}function W(e){const t=e.map(c=>{const{id:n,title:o,poster_path:a,release_date:l,vote_average:d,genre_ids:s}=c,i=l?l.split("-")[0]:"N/A",u=(s==null?void 0:s.map(b=>h[b]).filter(Boolean).join(", "))||"",m=R(d);return`
        <div class="trend-card" data-id="${n}">
          <div class="poster-wrapper">
            <img src="${D}/w500${a}" alt="${o}" class="movie-poster" />
            <div class="trend-info">
              <div class="movie-meta">
                <h3 class="trend-title">${o}</h3>
                <p class="movie-details">${u} | ${i}</p>
              </div>
              <div class="trend-stars">${m}</div>
            </div>
          </div>
        </div>
      `}).join(""),r=document.querySelector(".library-gallery-list");r.insertAdjacentHTML("beforeend",t),P(r)}w();const J=Object.freeze(Object.defineProperty({__proto__:null,attachMovieClickListener:P,loadLibrary:w},Symbol.toStringTag,{value:"Module"})),K={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};function f(){const e=document.querySelector(".custom-modal");e&&e.remove(),document.body.style.overflow=""}function _(e){f();const t=document.createElement("div");t.className="custom-modal",t.innerHTML=`
    <div class="modal-content" tabindex="0">
      <button class="close-btn" aria-label="Close modal">×</button>
      ${e}
    </div>
  `,document.body.appendChild(t),document.body.style.overflow="hidden",t.querySelector(".close-btn").addEventListener("click",f),document.addEventListener("keydown",r),t.addEventListener("click",c=>{c.target===t&&(f(),document.removeEventListener("keydown",r))});function r(c){c.key==="Escape"&&(f(),document.removeEventListener("keydown",r))}}function Z(e){const t=`
    <iframe width="560" height="315"
      src="https://www.youtube.com/embed/${e}"
      frameborder="0" allowfullscreen loading="lazy" class="trailer-iframe"></iframe>`;_(t)}function z(){_(`
    <div class="error-modal-content">
      <p class="error-title">OOPS...</p>
      <p class="error-text">We are very sorry!<br>But we couldn’t find the trailer.</p>
      <img src="./images/trailer-error.png" alt="Error image" class="error-image" />
    </div>
  `)}function Y(e,t=[]){var l,d;const c=(JSON.parse(localStorage.getItem("myLibrary"))||[]).some(s=>s.id===e.id),n=c?"Remove from Library":"Add to My Library",o=t.length>0?t.join(" "):((l=e.genre_ids)==null?void 0:l.map(s=>K[s]).filter(Boolean).join(" "))||"",a=`
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
          <button class="add-to-library-btn">${n}</button>
        </div>
      </div>
    </div>
  `;_(a),(d=document.querySelector(".add-to-library-btn"))==null||d.addEventListener("click",async()=>{let s=JSON.parse(localStorage.getItem("myLibrary"))||[];c?(s=s.filter(i=>i.id!==e.id),alert("Film kütüphaneden kaldırıldı.")):(s.push(e),alert("Film kütüphaneye eklendi.")),localStorage.setItem("myLibrary",JSON.stringify(s)),f();try{const{loadLibrary:i}=await I(async()=>{const{loadLibrary:u}=await Promise.resolve().then(()=>J);return{loadLibrary:u}},void 0);i&&i()}catch(i){console.error("loadLibrary yüklenirken hata oluştu:",i)}})}const Q=Object.freeze(Object.defineProperty({__proto__:null,showDetailsModal:Y,showErrorModal:z,showTrailerModal:Z},Symbol.toStringTag,{value:"Module"}));window.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("theme-switcher"),t=document.documentElement;localStorage.getItem("theme")==="light"?t.classList.add("light-theme"):t.classList.remove("light-theme"),e.addEventListener("click",()=>{const c=t.classList.toggle("light-theme");localStorage.setItem("theme",c?"light":"dark")})});const X=document.querySelector('[data-modal-open="footer"]'),ee=document.querySelector('[data-modal-close="footer"]'),v=document.querySelector('[data-modal="footer"]'),te=v.querySelector(".footer-modal-content");X.addEventListener("click",function(e){e.preventDefault(),v.classList.remove("is-hidden"),requestAnimationFrame(()=>{v.classList.add("show-modal")}),document.body.style.overflow="hidden"});ee.addEventListener("click",E);document.addEventListener("keydown",function(e){e.key==="Escape"&&!v.classList.contains("is-hidden")&&E()});function E(){v.classList.add("closing"),v.classList.remove("show-modal"),te.addEventListener("transitionend",()=>{v.classList.remove("closing"),v.classList.add("is-hidden")},{once:!0}),document.body.style.overflow="auto"}v.addEventListener("click",function(e){e.target===v&&E()});export{T as B,A as E,D as I,Z as a,Y as b,R as c,P as d,re as e,H as f,z as s};
//# sourceMappingURL=footer-KgHnxcCY.js.map
