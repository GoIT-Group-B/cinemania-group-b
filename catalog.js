import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{a as n}from"./assets/vendor-DDD7fsZd.js";const r="52238d7fab5c2c01b99e751619dd16ec",o="https://api.themoviedb.org/3",c="https://image.tmdb.org/t/p",i={POPULAR_MOVIES:"/movie/popular"};async function l(t,e,a={}){try{return(await n.get(`${t}${e}`,{params:{api_key:r,language:"en-US",page:1,...a}})).data}catch(s){throw console.error("Error fetching data:",s),s}}async function p(){const t=await l(o,i.POPULAR_MOVIES);console.log("response:",t.results);const e=await t.results;console.log("data:",e);const a=e[0];console.log("movie:",a),d(a)}function d(t){const e=document.querySelector(".hero-container");console.log(t),e.innerHTML=`
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
<div class="hero-image-container">
  <img src="${c}/original${t.backdrop_path}" alt="${t.title} backdrop" class="hero-backdrop-image">
</div>
`}async function g(){const e=await(await fetch(`${o}/genre/movie/list?api_key=${API_KEY}&language=en-US`)).json();h(e.genres)}function h(t){const e=document.getElementById("category");e&&(e.innerHTML=t.map(a=>`
        <div class="category-card">${a.name}</div>
      `).join(""))}p();g();
//# sourceMappingURL=catalog.js.map
