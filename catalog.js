import"./assets/theme-ZBcpXlQn.js";import{a as r}from"./assets/vendor-DDD7fsZd.js";const c="52238d7fab5c2c01b99e751619dd16ec",n="https://api.themoviedb.org/3",i="https://image.tmdb.org/t/p",o={POPULAR_MOVIES:"/movie/popular",IMG_W1280:"/w1280"};async function l(t,e,s={}){try{return(await r.get(`${t}${e}`,{params:{api_key:c,language:"en-US",page:1,...s}})).data}catch(a){throw console.error("Error fetching data:",a),a}}async function p(){const t=await l(n,o.POPULAR_MOVIES);console.log("response:",t.results);const e=await t.results;console.log("data:",e);const s=e[0];console.log("movie:",s),d(s)}function d(t){const e=document.querySelector(".hero-container");console.log(t);const s=`${i}${o.IMG_W1280}${t.backdrop_path}`;e.style.backgroundImage=`url('${s}')`,e.innerHTML=`
<div class="hero-content">
  <h1 class="hero-title">${t.title}</h1>
  <div class="hero-rating">
    <span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star">★</span><span class="star-empty">★</span> 
  </div>
  <p class="hero-description">${t.overview}</p>
  <div class="hero-buttons">
    <button class="watch-trailer-btn">Watch trailer</button>
    <button class="more-details-btn">More details</button>
  </div>
</div>

`}async function g(){const e=await(await fetch(`${n}/genre/movie/list?api_key=${API_KEY}&language=en-US`)).json();u(e.genres)}function u(t){const e=document.getElementById("category");e&&(e.innerHTML=t.map(s=>`
        <div class="category-card">${s.name}</div>
      `).join(""))}p();g();
//# sourceMappingURL=catalog.js.map
