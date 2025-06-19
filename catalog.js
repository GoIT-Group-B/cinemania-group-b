import"./assets/theme-CnDw7Ayj.js";import{a as u,E as c,B as i,I as d}from"./assets/fetchMovies-DXPj_YoO.js";import"./assets/vendor-DDD7fsZd.js";function p(e){const t=Math.round(e)/2,a=Math.floor(t),n=t%1>=.5?1:0,l=5-a-n;let o="";for(let s=0;s<a;s++)o+='<span class="star">★</span>';n&&(o+='<span class="half-star">⯨</span>');for(let s=0;s<l;s++)o+='<span class="star-empty">☆</span>';return o}async function h(){const t=await(await u(i,c.POPULAR_MOVIES)).results;let a=0;const n=document.querySelector(".hero-container");r(t[a]),setInterval(()=>{n.style.opacity="0",setTimeout(()=>{a=(a+1)%t.length,r(t[a]),n.style.opacity="1"},500)},5e3)}function r(e){const t=document.querySelector(".hero-container");console.log(e);const a=`${d}${c.IMG_W1280}${e.backdrop_path}`;t.style.backgroundImage=`url('${a}')`;const n=p(e.vote_average);t.innerHTML=`
<div class="hero-content">
  <h1 class="hero-title">${e.title}</h1>
  <div class="hero-rating">${n}</div>
  <p class="hero-description">${e.overview}</p>
  <div class="hero-buttons">
    <button class="watch-trailer-btn">Watch trailer</button>
    <button class="more-details-btn">More details</button>
  </div>
</div>

`}async function g(){const t=await(await fetch(`${i}/genre/movie/list?api_key=${API_KEY}&language=en-US`)).json();f(t.genres)}function f(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(a=>`
        <div class="category-card">${a.name}</div>
      `).join(""))}h();g();
//# sourceMappingURL=catalog.js.map
