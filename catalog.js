import"./assets/theme-DQPq64Cx.js";import{a as p}from"./assets/vendor-DDD7fsZd.js";const d="52238d7fab5c2c01b99e751619dd16ec",c="https://api.themoviedb.org/3",u="https://image.tmdb.org/t/p",i={POPULAR_MOVIES:"/movie/popular",IMG_W1280:"/w1280"};async function h(e,t,a={}){try{return(await p.get(`${e}${t}`,{params:{api_key:d,language:"en-US",page:1,...a}})).data}catch(n){throw console.error("Error fetching data:",n),n}}function g(e){const t=Math.round(e)/2,a=Math.floor(t),n=t%1>=.5?1:0,l=5-a-n;let s="";for(let o=0;o<a;o++)s+='<span class="star">★</span>';n&&(s+='<span class="half-star">⯨</span>');for(let o=0;o<l;o++)s+='<span class="star-empty">☆</span>';return s}async function f(){const t=await(await h(c,i.POPULAR_MOVIES)).results;let a=0;const n=document.querySelector(".hero-container");r(t[a]),setInterval(()=>{n.style.opacity="0",setTimeout(()=>{a=(a+1)%t.length,r(t[a]),n.style.opacity="1"},500)},5e3)}function r(e){const t=document.querySelector(".hero-container");console.log(e);const a=`${u}${i.IMG_W1280}${e.backdrop_path}`;t.style.backgroundImage=`url('${a}')`;const n=g(e.vote_average);t.innerHTML=`
<div class="hero-content">
  <h1 class="hero-title">${e.title}</h1>
  <div class="hero-rating">${n}</div>
  <p class="hero-description">${e.overview}</p>
  <div class="hero-buttons">
    <button class="watch-trailer-btn">Watch trailer</button>
    <button class="more-details-btn">More details</button>
  </div>
</div>

`}async function y(){const t=await(await fetch(`${c}/genre/movie/list?api_key=${API_KEY}&language=en-US`)).json();m(t.genres)}function m(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(a=>`
        <div class="category-card">${a.name}</div>
      `).join(""))}f();y();
//# sourceMappingURL=catalog.js.map
