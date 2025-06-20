const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/library-DXGc8m5u.js","assets/theme-CBm8orJP.js","assets/theme-UWJKt71F.css"])))=>i.map(i=>d[i]);
const v="modulepreload",g=function(e){return"/cinemania-group-b/"+e},p={},w=function(o,a,i){let m=Promise.resolve();if(a&&a.length>0){let s=function(t){return Promise.all(t.map(n=>Promise.resolve(n).then(c=>({status:"fulfilled",value:c}),c=>({status:"rejected",reason:c}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),d=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));m=s(a.map(t=>{if(t=g(t),t in p)return;p[t]=!0;const n=t.endsWith(".css"),c=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${c}`))return;const l=document.createElement("link");if(l.rel=n?"stylesheet":v,n||(l.as="script"),l.crossOrigin="",l.href=t,d&&l.setAttribute("nonce",d),document.head.appendChild(l),n)return new Promise((b,h)=>{l.addEventListener("load",b),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${t}`)))})}))}function y(s){const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s}return m.then(s=>{for(const r of s||[])r.status==="rejected"&&y(r.reason);return o().catch(y)})},E={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};function u(){const e=document.querySelector(".custom-modal");e&&e.remove(),document.body.style.overflow=""}function f(e){u();const o=document.createElement("div");o.className="custom-modal",o.innerHTML=`
    <div class="modal-content" tabindex="0">
      <button class="close-btn" aria-label="Close modal">×</button>
      ${e}
    </div>
  `,document.body.appendChild(o),document.body.style.overflow="hidden",o.querySelector(".close-btn").addEventListener("click",u),document.addEventListener("keydown",a),o.addEventListener("click",i=>{i.target===o&&(u(),document.removeEventListener("keydown",a))});function a(i){i.key==="Escape"&&(u(),document.removeEventListener("keydown",a))}}function L(e){const o=`
    <iframe width="560" height="315"
      src="https://www.youtube.com/embed/${e}"
      frameborder="0" allowfullscreen loading="lazy" class="trailer-iframe"></iframe>`;f(o)}function S(){f(`
    <div class="error-modal-content">
      <p class="error-title">OOPS...</p>
      <p class="error-text">We are very sorry!<br>But we couldn’t find the trailer.</p>
      <img src="./images/trailer-error.png" alt="Error image" class="error-image" />
    </div>
  `)}function k(e,o=[]){var r,d;const i=(JSON.parse(localStorage.getItem("myLibrary"))||[]).some(t=>t.id===e.id),m=i?"Remove from Library":"Add to My Library",y=o.length>0?o.join(" "):((r=e.genre_ids)==null?void 0:r.map(t=>E[t]).filter(Boolean).join(" "))||"",s=`
    <div class="movie-modal">
      <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" class="movie-poster" alt="${e.title}" />
      <div class="movie-info">
        <h2 class="movie-title">${e.title||e.name}</h2>

        <ul class="movie-stats">
          <li><strong>Vote / Votes</strong><span><b>${e.vote_average}</b> / ${e.vote_count}</span></li>
          <li><strong>Popularity</strong><span>${Math.round(e.popularity)}</span></li>
          <li><strong>Genre</strong><span>${y}</span></li> </ul>

        <h3 class="about-heading">ABOUT</h3>
        <p class="about-text">${e.overview||"No description available."}</p>

        <button class="library-btn">${m}</button>
      </div>
    </div>
  `;f(s),(d=document.querySelector(".library-btn"))==null||d.addEventListener("click",async()=>{let t=JSON.parse(localStorage.getItem("myLibrary"))||[];i?(t=t.filter(n=>n.id!==e.id),alert("Film kütüphaneden kaldırıldı.")):(t.push(e),alert("Film kütüphaneye eklendi.")),localStorage.setItem("myLibrary",JSON.stringify(t)),u();try{const{loadLibrary:n}=await w(async()=>{const{loadLibrary:c}=await import("./library-DXGc8m5u.js");return{loadLibrary:c}},__vite__mapDeps([0,1,2]));n&&n()}catch(n){console.error("loadLibrary yüklenirken hata oluştu:",n)}})}const _=Object.freeze(Object.defineProperty({__proto__:null,showDetailsModal:k,showErrorModal:S,showTrailerModal:L},Symbol.toStringTag,{value:"Module"}));export{w as _,L as a,k as b,_ as m,S as s};
//# sourceMappingURL=modal-Cy6fLs1j.js.map
