import"./assets/theme-CnDw7Ayj.js";import{f,a as g,E as L,B as _,I as w}from"./assets/fetchMovies-DXPj_YoO.js";import"./assets/vendor-DDD7fsZd.js";const a=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,s=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,o=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>`;function u(t){let e="";if(!t)return e=`${a.repeat(5)}`,`<div>${e}</div>`;switch(Math.round(t)){case 0:e=`${a.repeat(5)}`;break;case 1:e=`${o}${a.repeat(4)}`;break;case 2:e=`${s}${a.repeat(4)}`;break;case 3:e=`${s}${o}${a.repeat(3)}`;break;case 4:e=`${s.repeat(2)}${a.repeat(3)}`;break;case 5:e=`${s.repeat(2)}${o}${a.repeat(2)}`;break;case 6:e=`${s.repeat(3)}${a.repeat(2)}`;break;case 7:e=`${s.repeat(3)}${o}${a}`;break;case 8:e=`${s.repeat(4)}${a}`;break;case 9:e=`${s.repeat(4)}${o}`;break;case 10:e=`${s.repeat(5)}`;break;default:throw new Error("Invalid rating")}return`<div>${e}</div>`}let c=!1,d=[],$={};async function h(){const t=document.getElementById("trends-container"),e=document.getElementById("see-all-trends");$=await f(),d=(await g(_,L.TRENDING_WEEK)).results;const r=window.innerWidth<768?1:3;l(t,d.slice(0,r)),e.addEventListener("click",()=>{if(!t.classList.contains("is-expanded"))l(t,d),t.classList.add("is-expanded"),e.textContent="Show Less",c=!0;else{const p=window.innerWidth<768?1:3;l(t,d.slice(0,p)),t.classList.remove("is-expanded"),e.textContent="See All",c=!1}}),window.addEventListener("resize",()=>{if(!c){const n=window.innerWidth<768?1:3;l(t,d.slice(0,n))}})}function l(t,e){t.innerHTML=e.map((i,r)=>{const n=r>=3?(r-2)*100:0;return v(i,n)}).join("")}function v(t,e=0){var n;const i=t.genre_ids.map(p=>$[p]).join(", "),r=u(t.vote_average);return`
    <div class="trend-card" data-id="${t.id}" style="animation-delay: ${e}ms;">
      <img src="${w}${L.IMG_W500}${t.poster_path}" alt="${t.title}">
      <div class="trend-info">
        <h3>${t.title}</h3>
        <p>${i} | ${((n=t.release_date)==null?void 0:n.split("-")[0])||"N/A"}</p>
        <div class="trend-stars">${r}</div>
      </div>
    </div>
  `}h();
//# sourceMappingURL=index.js.map
