import{c as u}from"./assets/theme-DfIx6h2x.js";import{I as l,E as i,f as y,B as c}from"./assets/fetchMovies-BSsJlcs_.js";import"./assets/vendor-DDD7fsZd.js";const p=document.getElementById("movieDetailModal"),d=document.getElementById("detailPoster"),I=document.getElementById("detailTitle"),M=document.getElementById("detailVotes"),E=document.getElementById("detailPopularity"),$=document.getElementById("detailGenres"),w=document.getElementById("detailOverview"),B=document.getElementById("closeDetailModal");function b(e,t){try{d.src=`${l}${i.IMG_W500}${e.poster_path}`,d.alt=e.title,I.textContent=e.title,M.textContent=`${e.vote_average} / ${e.vote_count}`,E.textContent=Math.floor(e.popularity);const n=e.genre_ids||(e.genres?e.genres.map(o=>o.id):[]);(!t||Object.keys(t).length===0)&&(console.warn("Genre map boş veya tanımsız! Genre verileri henüz yüklenmemiş."),$.textContent="Unknown"),w.textContent=e.overview||"No description available.",p.classList.add("active")}catch(n){console.error("openMovieDetailModal hatası:",n)}}B.addEventListener("click",()=>{p.classList.remove("active")});async function _(){const t=await(await y(c,i.POPULAR_MOVIES)).results;let n=0;const o=document.querySelector(".hero-container");m(t[n]),setInterval(()=>{o.style.opacity="0",setTimeout(()=>{n=(n+1)%t.length,m(t[n]),o.style.opacity="1"},500)},5e3)}function m(e){const t=document.querySelector(".hero-container"),n=`${l}${i.IMG_W1280}${e.backdrop_path}`;t.style.backgroundImage=`url('${n}')`;const o=u(e.vote_average);t.innerHTML=`
    <div class="hero-content">
      <h1 class="hero-title">${e.title}</h1>
      <div class="hero-rating">${o}</div>
      <p class="hero-description">${e.overview}</p>
      <div class="hero-buttons">
        <button class="watch-trailer-btn">Watch trailer</button>
        <button class="more-details-btn">More details</button>
      </div>
    </div>
  `,document.querySelector(".watch-trailer-btn").addEventListener("click",()=>T(e.id)),document.querySelector(".more-details-btn").addEventListener("click",()=>b(e))}async function L(){const t=await(await fetch(`${c}/genre/movie/list?api_key=${API_KEY}&language=en-US`)).json();S(t.genres)}function S(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(n=>`
        <div class="category-card">${n.name}</div>
      `).join(""))}_();L();async function T(e){const o=(await(await fetch(`${c}/movie/${e}/videos?api_key=52238d7fab5c2c01b99e751619dd16ec&language=en-US`)).json()).results.find(r=>r.type==="Trailer"&&r.site==="YouTube"),a=document.getElementById("trailerIframe"),s=document.getElementById("trailerModal");o?(a.src=`https://www.youtube.com/embed/${o.key}`,s.style.display="block"):alert("Trailer bulunamadı.")}document.getElementById("closeTrailer").addEventListener("click",()=>{const e=document.getElementById("trailerModal"),t=document.getElementById("trailerIframe");e.style.display="none",t.src=""});const k=document.getElementById("movieList");async function C(){const t=await(await y(c,i.POPULAR_MOVIES)).results;console.log(t),A(t)}function A(e){k.innerHTML=e.map(t=>{const{title:n,poster_path:o,release_date:a,vote_average:s,genre_ids:r}=t,v=a?a.split("-")[0]:"N/A",g=r.slice(0,2).map(f=>P[f]).join(", "),h=u(s);return`
        <div class="movie-card">
          <div class="poster-wrapper">
            <img src="${l}/w500${o}" alt="${n}" class="movie-poster" />
            <div class="movie-info-overlay">
              <div class="movie-meta">
                <h3 class="movie-title">${n}</h3>
                <p class="movie-details">${g} | ${v}</p>
              </div>
              <div class="movie-rating">${h}</div>
            </div>
          </div>
        </div>
      `}).join("")}const P={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};C();
//# sourceMappingURL=catalog.js.map
