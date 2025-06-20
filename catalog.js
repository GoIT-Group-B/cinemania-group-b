import{c as E}from"./assets/theme-BTg3i2ob.js";import{I as v,E as d,f as M,B as m}from"./assets/fetchMovies-BSsJlcs_.js";import"./assets/vendor-DDD7fsZd.js";const I=document.getElementById("movieDetailModal"),h=document.getElementById("detailPoster"),B=document.getElementById("detailTitle"),$=document.getElementById("detailVotes"),L=document.getElementById("detailPopularity"),_=document.getElementById("detailGenres"),k=document.getElementById("detailOverview"),C=document.getElementById("closeDetailModal");function S(e,t){try{h.src=`${v}${d.IMG_W500}${e.poster_path}`,h.alt=e.title,B.textContent=e.title,$.textContent=`${e.vote_average} / ${e.vote_count}`,L.textContent=Math.floor(e.popularity);const n=e.genre_ids||(e.genres?e.genres.map(a=>a.id):[]);(!t||Object.keys(t).length===0)&&(console.warn("Genre map boş veya tanımsız! Genre verileri henüz yüklenmemiş."),_.textContent="Unknown"),k.textContent=e.overview||"No description available.",I.classList.add("active")}catch(n){console.error("openMovieDetailModal hatası:",n)}}C.addEventListener("click",()=>{I.classList.remove("active")});async function T(){const t=await(await M(m,d.POPULAR_MOVIES)).results;let n=0;const a=document.querySelector(".hero-container");f(t[n]),setInterval(()=>{a.style.opacity="0",setTimeout(()=>{n=(n+1)%t.length,f(t[n]),a.style.opacity="1"},500)},5e3)}function f(e){const t=document.querySelector(".hero-container");function n(c){const p=window.innerWidth<480?`${d.IMG_W500}${c.poster_path}`:`${d.IMG_W1280}${c.backdrop_path}`,g=`${v}${p}`;t.style.backgroundImage=`url('${g}')`,t.style.backgroundSize="cover",t.style.backgroundPosition="center",t.style.backgroundRepeat="no-repeat"}window.addEventListener("load",()=>n(e)),window.addEventListener("resize",()=>n(e));const a=E(e.vote_average);t.innerHTML=`
    <div class="hero-content">
      <h1 class="hero-title">${e.title}</h1>
      <div class="hero-rating">${a}</div>
      <p class="hero-description">${e.overview}</p>
      <div class="hero-buttons">
        <button class="watch-trailer-btn">Watch trailer</button>
        <button class="more-details-btn">More details</button>
      </div>
    </div>
  `,document.querySelector(".watch-trailer-btn").addEventListener("click",()=>N(e.id)),document.querySelector(".more-details-btn").addEventListener("click",()=>S(e))}async function P(){const t=await(await fetch(`${m}/genre/movie/list?api_key=${API_KEY}&language=en-US`)).json();x(t.genres)}function x(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(n=>`
        <div class="category-card">${n.name}</div>
      `).join(""))}T();P();async function N(e){const a=(await(await fetch(`${m}/movie/${e}/videos?api_key=52238d7fab5c2c01b99e751619dd16ec&language=en-US`)).json()).results.find(c=>c.type==="Trailer"&&c.site==="YouTube"),o=document.getElementById("trailerIframe"),r=document.getElementById("trailerModal");a?(o.src=`https://www.youtube.com/embed/${a.key}`,r.style.display="block"):alert("Trailer bulunamadı.")}document.getElementById("closeTrailer").addEventListener("click",()=>{const e=document.getElementById("trailerModal"),t=document.getElementById("trailerIframe");e.style.display="none",t.src=""});const A=document.getElementById("movieList");async function H(){const t=await(await M(m,d.POPULAR_MOVIES)).results;console.log(t),R(t)}function R(e){A.innerHTML=e.map(t=>{const{title:n,poster_path:a,release_date:o,vote_average:r,genre_ids:c}=t,y=o?o.split("-")[0]:"N/A",p=c.slice(0,2).map(w=>U[w]).join(", "),g=E(r);return`
        <div class="movie-card">
          <div class="poster-wrapper">
            <img src="${v}/w500${a}" alt="${n}" class="movie-poster" />
            <div class="movie-info-overlay">
              <div class="movie-meta">
                <h3 class="movie-title">${n}</h3>
                <p class="movie-details">${p} | ${y}</p>
              </div>
              <div class="movie-rating">${g}</div>
            </div>
          </div>
        </div>
      `}).join("")}const U={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};H();let i=24,s=1;const l=document.getElementById("pagination");function b(e,t=!1,n=!1,a=!1){if(a){const r=document.createElement("span");return r.className="dots",r.textContent="...",r}const o=document.createElement("button");return o.className=a?"dots":"page-btn",t&&o.classList.add("active"),o.textContent=e,n?o.disabled=!0:o.addEventListener("click",()=>{s=Number(e),u(s,i)}),o}function u(e=1,t=24){s=e,i=t,l.innerHTML="";const n=document.createElement("button");n.className="nav-btn",n.textContent="<",n.disabled=s===1,n.addEventListener("click",()=>{s>1&&(s--,u(s,i))}),l.appendChild(n);const a=[];if(i<=4)for(let r=1;r<=i;r++)a.push(r);else s<=2?a.push(1,2,3,"...",i):s>=i-2?a.push(1,"...",i-2,i-1,i):a.push(1,"...",s-1,s,s+1,"...",i);a.forEach(r=>{r==="..."?l.appendChild(b("...",!1,!0,!0)):l.appendChild(b(r,r===s))});const o=document.createElement("button");o.className="nav-btn",o.textContent=">",o.disabled=s===i,o.addEventListener("click",()=>{s<i&&(s++,u(s,i))}),l.appendChild(o)}u();
//# sourceMappingURL=catalog.js.map
