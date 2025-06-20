import{c as g}from"./assets/theme-CBm8orJP.js";import{I as m,E as r,f as v,B as c}from"./assets/fetchMovies-BSsJlcs_.js";import"./assets/vendor-DDD7fsZd.js";const h=document.getElementById("movieDetailModal"),y=document.getElementById("detailPoster"),f=document.getElementById("detailTitle"),w=document.getElementById("detailVotes"),I=document.getElementById("detailPopularity"),E=document.getElementById("detailGenres"),$=document.getElementById("detailOverview"),b=document.getElementById("closeDetailModal");function B(e,t){try{y.src=`${m}${r.IMG_W500}${e.poster_path}`,y.alt=e.title,f.textContent=e.title,w.textContent=`${e.vote_average} / ${e.vote_count}`,I.textContent=Math.floor(e.popularity);const n=e.genre_ids||(e.genres?e.genres.map(o=>o.id):[]);(!t||Object.keys(t).length===0)&&(console.warn("Genre map boş veya tanımsız! Genre verileri henüz yüklenmemiş."),E.textContent="Unknown"),$.textContent=e.overview||"No description available.",h.classList.add("active")}catch(n){console.error("openMovieDetailModal hatası:",n)}}b.addEventListener("click",()=>{h.classList.remove("active")});async function _(){const t=await(await v(c,r.POPULAR_MOVIES)).results;let n=0;const o=document.querySelector(".hero-container");p(t[n]),setInterval(()=>{o.style.opacity="0",setTimeout(()=>{n=(n+1)%t.length,p(t[n]),o.style.opacity="1"},500)},5e3)}function p(e){const t=document.querySelector(".hero-container");function n(a){const l=window.innerWidth<480?`${r.IMG_W500}${a.poster_path}`:`${r.IMG_W1280}${a.backdrop_path}`,d=`${m}${l}`;t.style.backgroundImage=`url('${d}')`,t.style.backgroundSize="cover",t.style.backgroundPosition="center",t.style.backgroundRepeat="no-repeat"}window.addEventListener("load",()=>n(e)),window.addEventListener("resize",()=>n(e));const o=g(e.vote_average);t.innerHTML=`
    <div class="hero-content">
      <h1 class="hero-title">${e.title}</h1>
      <div class="hero-rating">${o}</div>
      <p class="hero-description">${e.overview}</p>
      <div class="hero-buttons">
        <button class="watch-trailer-btn">Watch trailer</button>
        <button class="more-details-btn">More details</button>
      </div>
    </div>
  `,document.querySelector(".watch-trailer-btn").addEventListener("click",()=>S(e.id)),document.querySelector(".more-details-btn").addEventListener("click",()=>B(e))}async function k(){const t=await(await fetch(`${c}/genre/movie/list?api_key=${API_KEY}&language=en-US`)).json();L(t.genres)}function L(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(n=>`
        <div class="category-card">${n.name}</div>
      `).join(""))}_();k();async function S(e){const o=(await(await fetch(`${c}/movie/${e}/videos?api_key=52238d7fab5c2c01b99e751619dd16ec&language=en-US`)).json()).results.find(a=>a.type==="Trailer"&&a.site==="YouTube"),s=document.getElementById("trailerIframe"),i=document.getElementById("trailerModal");o?(s.src=`https://www.youtube.com/embed/${o.key}`,i.style.display="block"):alert("Trailer bulunamadı.")}document.getElementById("closeTrailer").addEventListener("click",()=>{const e=document.getElementById("trailerModal"),t=document.getElementById("trailerIframe");e.style.display="none",t.src=""});const T=document.getElementById("movieList");async function C(){const t=await(await v(c,r.POPULAR_MOVIES)).results;console.log(t),P(t)}function P(e){T.innerHTML=e.map(t=>{const{title:n,poster_path:o,release_date:s,vote_average:i,genre_ids:a}=t,u=s?s.split("-")[0]:"N/A",l=a.slice(0,2).map(M=>A[M]).join(", "),d=g(i);return`
        <div class="movie-card">
          <div class="poster-wrapper">
            <img src="${m}/w500${o}" alt="${n}" class="movie-poster" />
            <div class="movie-info-overlay">
              <div class="movie-meta">
                <h3 class="movie-title">${n}</h3>
                <p class="movie-details">${l} | ${u}</p>
              </div>
              <div class="movie-rating">${d}</div>
            </div>
          </div>
        </div>
      `}).join("")}const A={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};C();
//# sourceMappingURL=catalog.js.map
