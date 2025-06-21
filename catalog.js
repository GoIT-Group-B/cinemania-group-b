import{c as M}from"./assets/theme-DYtuddYW.js";import{I as v,E as d,f as I,B as p}from"./assets/fetchMovies-BSsJlcs_.js";import"./assets/vendor-DDD7fsZd.js";const $=document.getElementById("movieDetailModal"),f=document.getElementById("detailPoster"),L=document.getElementById("detailTitle"),k=document.getElementById("detailVotes"),C=document.getElementById("detailPopularity"),S=document.getElementById("detailGenres"),T=document.getElementById("detailOverview"),P=document.getElementById("closeDetailModal");function x(e,t){try{f.src=`${v}${d.IMG_W500}${e.poster_path}`,f.alt=e.title,L.textContent=e.title,k.textContent=`${e.vote_average} / ${e.vote_count}`,C.textContent=Math.floor(e.popularity);const n=e.genre_ids||(e.genres?e.genres.map(a=>a.id):[]);(!t||Object.keys(t).length===0)&&(console.warn("Genre map boş veya tanımsız! Genre verileri henüz yüklenmemiş."),S.textContent="Unknown"),T.textContent=e.overview||"No description available.",$.classList.add("active")}catch(n){console.error("openMovieDetailModal hatası:",n)}}P.addEventListener("click",()=>{$.classList.remove("active")});async function N(){const t=await(await I(p,d.POPULAR_MOVIES)).results;let n=0;const a=document.querySelector(".hero-container");b(t[n]),setInterval(()=>{a.style.opacity="0",setTimeout(()=>{n=(n+1)%t.length,b(t[n]),a.style.opacity="1"},500)},5e3)}function b(e){const t=document.querySelector(".hero-container"),a=window.innerWidth<480?`${d.IMG_W500}${e.poster_path}`:`${d.IMG_W1280}${e.backdrop_path}`,s=`${v}${a}`;t.style.backgroundImage=`url('${s}')`,t.style.backgroundSize="cover",t.style.backgroundPosition="center",t.style.backgroundRepeat="no-repeat";const r=M(e.vote_average);t.innerHTML=`
    <div class="hero-content">
      <h1 class="hero-title">${e.title}</h1>
      <div class="hero-rating">${r}</div>
      <p class="hero-description">${e.overview}</p>
      <div class="hero-buttons">
        <button class="watch-trailer-btn">Watch trailer</button>
        <button class="more-details-btn">More details</button>
      </div>
    </div>
  `,t.querySelector(".watch-trailer-btn").addEventListener("click",()=>R(e.id)),t.querySelector(".more-details-btn").addEventListener("click",()=>x(e))}async function A(){const t=await(await fetch(`${p}/genre/movie/list?api_key=${API_KEY}&language=en-US`)).json();H(t.genres)}function H(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(n=>`
        <div class="category-card">${n.name}</div>
      `).join(""))}N();A();async function R(e){const a=(await(await fetch(`${p}/movie/${e}/videos?api_key=52238d7fab5c2c01b99e751619dd16ec&language=en-US`)).json()).results.find(c=>c.type==="Trailer"&&c.site==="YouTube"),s=document.getElementById("trailerIframe"),r=document.getElementById("trailerModal");a?(s.src=`https://www.youtube.com/embed/${a.key}`,r.style.display="block"):alert("Trailer bulunamadı.")}document.getElementById("closeTrailer").addEventListener("click",()=>{const e=document.getElementById("trailerModal"),t=document.getElementById("trailerIframe");e.style.display="none",t.src=""});let i=24,o=1;const l=document.getElementById("pagination");function E(e,t=!1,n=!1,a=!1){if(a){const r=document.createElement("span");return r.className="dots",r.textContent="...",r}const s=document.createElement("button");return s.className=a?"dots":"page-btn",t&&s.classList.add("active"),s.textContent=e,n?s.disabled=!0:s.addEventListener("click",()=>{o=Number(e),m(o),u(o,i)}),s}function u(e=1,t=24){o=e,i=t>500?500:t,l.innerHTML="";const n=document.createElement("button");n.className="nav-btn",n.textContent="<",n.disabled=o===1,n.addEventListener("click",()=>{o>1&&(o--,m(o),u(o,i))}),l.appendChild(n);const a=[];if(i<=4)for(let r=1;r<=i;r++)a.push(r);else o<=2?a.push(1,2,3,"...",i):o>=i-1?a.push(1,"...",i-2,i-1,i):a.push(1,"...",o-1,o,o+1,"...",i);a.forEach(r=>{r==="..."?l.appendChild(E("...",!1,!0,!0)):l.appendChild(E(r,r===o))});const s=document.createElement("button");s.className="nav-btn",s.textContent=">",s.disabled=o===i,s.addEventListener("click",()=>{o<i&&(o++,m(o),u(o,i))}),l.appendChild(s)}const U=document.getElementById("movieList");let g=1,y=20;async function m(e=1){const t=await I(p,d.POPULAR_MOVIES,{page:e}),n=await t.results;g=e,y=t.total_pages,console.log(t),console.log(g),console.log(y),G(n),u(g,y)}function G(e){U.innerHTML=e.map(t=>{const{title:n,poster_path:a,release_date:s,vote_average:r,genre_ids:c}=t,h=s?s.split("-")[0]:"N/A",B=c.slice(0,2).map(_=>O[_]).join(", "),w=M(r);return`
        <div class="movie-card">
          <div class="poster-wrapper">
            <img src="${v}/w500${a}" alt="${n}" class="movie-poster" />
            <div class="movie-info-overlay">
              <div class="movie-meta">
                <h3 class="movie-title">${n}</h3>
                <p class="movie-details">${B} | ${h}</p>
              </div>
              <div class="movie-rating">${w}</div>
            </div>
          </div>
        </div>
      `}).join("")}const O={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};m();
//# sourceMappingURL=catalog.js.map
