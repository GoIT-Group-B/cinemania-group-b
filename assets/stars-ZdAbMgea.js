import{a as i}from"./vendor-DDD7fsZd.js";const p="52238d7fab5c2c01b99e751619dd16ec",c="https://api.themoviedb.org/3",g="https://image.tmdb.org/t/p",l={POPULAR_MOVIES:"/movie/popular",UPCOMING_MOVIES:"/movie/upcoming",TRENDING_WEEK:"/trending/movie/week",TRENDING_DAY:"/trending/movie/day",SEARCH_MOVIES:"/search/movie",GENRE_LIST:"/genre/movie/list",MOVIE_DETAILS:t=>`/movie/${t}`,MOVIE_VIDEOS:t=>`/movie/${t}/videos`,IMG_ORIGINAL:"/original",IMG_W500:"/w500",IMG_W780:"/w780",IMG_W1280:"/w1280"};async function _(t,e,s={}){try{return(await i.get(`${t}${e}`,{params:{api_key:p,language:"en-US",page:1,...s}})).data}catch(n){throw console.error("Error fetching data:",n),n}}async function L(){try{const t=await i.get(`${c}${l.GENRE_LIST}`,{params:{api_key:p,language:"en-US"}}),e={};return t.data.genres.forEach(s=>{e[s.id]=s.name}),e}catch(t){return console.error("Error fetching genres:",t),{}}}const r=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.875 7.3125H10.8281L9 1.6875L7.17188 7.3125H1.125L6.04688 10.6875L4.14844 16.3125L9 12.7969L13.8516 16.3125L11.9531 10.6875L16.875 7.3125Z" stroke="url(#paint0_linear_405_766)" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_405_766" x1="3.375" y1="2.625" x2="13.5" y2="16.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#F84119"/>
<stop offset="1" stop-color="#F89F19" stop-opacity="0.68"/>
</linearGradient>
</defs>
</svg>`,a=`<svg class="star" width="18" height="18" viewBox="0 0 18 18" fill="rgba(248, 65, 25, 1)" xmlns="http://www.w3.org/2000/svg">
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
</svg>`;function f(t){let e="";if(!t)return e=`${r.repeat(5)}`,`<div>${e}</div>`;switch(Math.round(t)){case 0:e=`${r.repeat(5)}`;break;case 1:e=`${o}${r.repeat(4)}`;break;case 2:e=`${a}${r.repeat(4)}`;break;case 3:e=`${a}${o}${r.repeat(3)}`;break;case 4:e=`${a.repeat(2)}${r.repeat(3)}`;break;case 5:e=`${a.repeat(2)}${o}${r.repeat(2)}`;break;case 6:e=`${a.repeat(3)}${r.repeat(2)}`;break;case 7:e=`${a.repeat(3)}${o}${r}`;break;case 8:e=`${a.repeat(4)}${r}`;break;case 9:e=`${a.repeat(4)}${o}`;break;case 10:e=`${a.repeat(5)}`;break;default:throw new Error("Invalid rating")}return`<div>${e}</div>`}export{c as B,l as E,g as I,L as a,f as c,_ as f};
//# sourceMappingURL=stars-ZdAbMgea.js.map
