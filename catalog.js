import{f as g,E as l,B as h,I as R,c as N,b as O,a as W,s as S,d as D}from"./assets/theme-D5oS3oRG.js";import"./assets/vendor-DDD7fsZd.js";const x={container:".hero-container",content:"hero-content",title:"hero-title",rating:"hero-rating",description:"hero-description",buttons:"hero-buttons",trailerBtn:"watch-trailer-btn",detailsBtn:"more-details-btn",trailerBtnClass:".watch-trailer-btn",detailsBtnClass:".more-details-btn"},_={trailerModal:"trailerModal",trailerIframe:"trailerIframe",trailerCloseBtn:"closeTrailer"};async function U(){const n=await(await g(h,l.POPULAR_MOVIES)).results;let t=0;const a=document.querySelector(".hero-container");k(n[t]),setInterval(()=>{a.style.opacity="0",setTimeout(()=>{t=(t+1)%n.length,k(n[t]),a.style.opacity="1"},500)},5e3)}function k(e){const{container:n,content:t,title:a,rating:s,description:o,buttons:f,trailerBtn:y,detailsBtn:$,trailerBtnClass:b,detailsBtnClass:u}=x,c=document.querySelector(n),m=window.innerWidth<480?`${l.IMG_W500}${e.poster_path}`:`${l.IMG_W1280}${e.backdrop_path}`,M=`${R}${m}`;c.style.backgroundImage=`url('${M}')`,c.style.backgroundSize="cover",c.style.backgroundPosition="center",c.style.backgroundRepeat="no-repeat";const E=N(e.vote_average);c.innerHTML=`
    <div class="${t}">
      <h1 class="${a}">${e.title}</h1>
      <div class="${s}">${E}</div>
      <p class="${o}">${e.overview}</p>
      <div class="${f}">
        <button class="${y}">Watch trailer</button>
        <button class="${$}">More details</button>
      </div>
    </div>
  `,document.querySelector(b).addEventListener("click",()=>F(e.id)),document.querySelector(u).addEventListener("click",()=>O(e))}async function V(){const e=await g(h,l.GENRE_LIST);q(e.genres)}function q(e){const n=document.getElementById("category");n&&(n.innerHTML=e.map(t=>`
        <div class="${categoryCard}">${t.name}</div>
      `).join(""))}U();V();async function F(e){try{const t=(await g(h,l.MOVIE_VIDEOS(e))).results.find(a=>a.type==="Trailer"&&a.site==="YouTube");t?W(t.key):S()}catch(n){console.error("Trailer fetch error:",n),S()}}document.getElementById(_.trailerCloseBtn).addEventListener("click",()=>{const{trailerModal:e,trailerIframe:n}=_,t=document.getElementById(e),a=document.getElementById(n);t.style.display="none",a.src=""});let i=24,r=1;const d=document.getElementById("pagination");function P(e,n=!1,t=!1,a=!1){if(a){const o=document.createElement("span");return o.className="dots",o.textContent="...",o}const s=document.createElement("button");return s.className=a?"dots":"page-btn",n&&s.classList.add("active"),s.textContent=e,t?s.disabled=!0:s.addEventListener("click",()=>{r=Number(e),v(r),p(r,i)}),s}function p(e=1,n=24){r=e,i=n>500?500:n,d.innerHTML="";const t=document.createElement("button");t.className="nav-btn",t.textContent="<",t.disabled=r===1,t.addEventListener("click",()=>{r>1&&(r--,v(r),p(r,i))}),d.appendChild(t);const a=[];if(i<=4)for(let o=1;o<=i;o++)a.push(o);else r<=2?a.push(1,2,3,"...",i):r>=i-1?a.push(1,"...",i-2,i-1,i):a.push(1,"...",r-1,r,r+1,"...",i);a.forEach(o=>{o==="..."?d.appendChild(P("...",!1,!0,!0)):d.appendChild(P(o,o===r))});const s=document.createElement("button");s.className="nav-btn",s.textContent=">",s.disabled=r===i,s.addEventListener("click",()=>{r<i&&(r++,v(r),p(r,i))}),d.appendChild(s)}const G={trendCard:"trend-card",posterWrapper:"poster-wrapper",moviePoster:"movie-poster",movieMeta:"movie-meta",trendInfo:"trend-info",trendTitle:"trend-title",movieDetails:"movie-details",trendStars:"trend-stars",movieRating:"movie-rating"},L=document.getElementById("movieList");let C=1,B=20;async function v(e=1){const n=await g(h,l.POPULAR_MOVIES,{page:e}),t=await n.results;C=e,B=n.total_pages,console.log(n),console.log(C),console.log(B),j(t),p(C,B)}function j(e){const{trendCard:n,posterWrapper:t,moviePoster:a,movieMeta:s,trendInfo:o,trendTitle:f,movieDetails:y,trendStars:$,movieRating:b}=G;L.innerHTML=e.map(u=>{const{title:c,poster_path:I,release_date:m,vote_average:M,genre_ids:E}=u,T=m?m.split("-")[0]:"N/A",w=E.slice(0,2).map(H=>z[H]).join(", "),A=N(M);return`
        <div class="${n}" data-id=${u.id}>
          <div class="${t}">
            <img src="${R}/w500${I}" alt="${c}" class="${a}" />
            <div class="${o}">
              <div class="${s}">
                <h3 class="${f}">${c}</h3>
                <p class="${y}">${w} | ${T}</p>
              </div>
              <div class="${$}">
                <div class="${b}">${A}</div>
              </div>
            </div>
          </div>
        </div>
      `}).join("")}const z={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};document.addEventListener("DOMContentLoaded",()=>{L&&D(L)});v();
//# sourceMappingURL=catalog.js.map
