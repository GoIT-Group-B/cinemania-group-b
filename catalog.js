import{d as J,f as w,E as u,B as T,c as W,I as N,b as ae,a as re,s as q}from"./assets/footer-KgHnxcCY.js";import"./assets/vendor-DDD7fsZd.js";const ie={trendCard:"trend-card",posterWrapper:"poster-wrapper",moviePoster:"movie-poster",movieMeta:"movie-meta",trendInfo:"trend-info",trendTitle:"trend-title",movieDetails:"movie-details",trendStars:"trend-stars",movieRating:"movie-rating"},D=document.getElementById("movieList");let F=1,U=20;async function R(e=1){const t=await w(T,u.POPULAR_MOVIES,{page:e}),n=await t.results;F=e,U=t.total_pages,oe(n),K(F,U,"first")}function oe(e){const{trendCard:t,posterWrapper:n,moviePoster:s,movieMeta:r,trendInfo:i,trendTitle:l,movieDetails:I,trendStars:L,movieRating:C}=ie;D.innerHTML=e.map(p=>{const{title:o,poster_path:f,release_date:d,vote_average:m,genre_ids:g}=p,_=d?d.split("-")[0]:"N/A",$=g.slice(0,2).map(h=>le[h]).join(", "),B=W(m);return`
        <div class="${t}" data-id=${p.id}>
          <div class="${n}">
            <img src="${N}/w500${f}" alt="${o}" class="${s}" />
            <div class="${i}">
              <div class="${r}">
                <h3 class="${l}">${o}</h3>
                <p class="${I}">${$} | ${_}</p>
              </div>
              <div class="${L}">
                <div class="${C}">${B}</div>
              </div>
            </div>
          </div>
        </div>
      `}).join("")}const le={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};document.addEventListener("DOMContentLoaded",()=>{D&&J(D)});R();let c=24,a=1,k="search";const M=document.getElementById("pagination"),O=document.getElementById("movies");function j(e,t=!1,n=!1,s=!1){if(s){const i=document.createElement("span");return i.className="dots",i.textContent="...",i}const r=document.createElement("button");return r.className=s?"dots":"page-btn",t&&r.classList.add("active"),r.textContent=e,n?r.disabled=!0:r.addEventListener("click",()=>{a=Number(e),k=="first"?R(a):S(a),O.scrollIntoView({behavior:"smooth"})}),r}function K(e=1,t=24,n="search"){a=e,c=t>500?500:t,k=n,M.innerHTML="",M.style.display=c>1?"flex":"none";const s=document.createElement("button");s.className="nav-btn",s.innerHTML='<svg class="pg-icon"><use href="/cinemania-group-b/assets/sprite-OSxcUjuV.svg#icon-left"></use></svg>',s.disabled=a===1,s.addEventListener("click",()=>{a>1&&(a--,k=="first"?R(a):S(a),O.scrollIntoView({behavior:"smooth"}))}),M.appendChild(s);const r=[];if(c<=4)for(let l=1;l<=c;l++)r.push(l);else a<=2?r.push(1,2,3,"...",c):a>=c-1?r.push(1,"...",c-2,c-1,c):r.push(1,"...",a-1,a,a+1,"...",c);r.forEach(l=>{l==="..."?M.appendChild(j("...",!1,!0,!0)):M.appendChild(j(l,l===a,l===a))});const i=document.createElement("button");i.className="nav-btn",i.innerHTML='<svg class="pg-icon"><use href="/cinemania-group-b/assets/sprite-OSxcUjuV.svg#icon-right"></use></svg>',i.disabled=a===c,i.addEventListener("click",()=>{a<c&&(a++,k=="first"?R(a):S(a),O.scrollIntoView({behavior:"smooth"}))}),M.appendChild(i)}let V=1,Y=20;const v=document.getElementById("search"),P=document.getElementById("warning"),E=document.getElementById("movies"),b=document.querySelector(".clear-button"),ce=document.querySelector(".search-button"),y=document.getElementById("year"),H=document.getElementById("movieList"),de={trendCard:"trend-card",posterWrapper:"poster-wrapper",moviePoster:"movie-poster",movieMeta:"movie-meta",trendInfo:"trend-info",trendTitle:"trend-title",movieDetails:"movie-details",trendStars:"trend-stars",movieRating:"movie-rating"},me={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},ue=new Date().getFullYear();for(let e=ue;e>=1900;e--){const t=document.createElement("option");t.value=e,t.textContent=e,y.appendChild(t)}async function S(e=1){const{trendCard:t,posterWrapper:n,moviePoster:s,movieMeta:r,trendInfo:i,trendTitle:l,movieDetails:I,trendStars:L,movieRating:C}=de,p=v.value.trim(),o=y.value;if(E.innerHTML="",H&&(H.style.display="none"),p===""&&o===""){alert("Please enter a search term or select a year.");return}let f="";const d={};p!==""?(f=u.SEARCH_MOVIES,d.query=p,o!==""&&(d.year=o)):(f=u.DISCOVER_MOVIES,d.primary_release_year=o),V=e,d.page=V;try{const m=await w(T,f,d);Y=m.total_pages;const g=o?m.results.filter($=>{var h;return((h=$.release_date)==null?void 0:h.split("-")[0])===o}):m.results;if(!Array.isArray(g)||g.length===0){P.style.display="block";return}P.style.display="none";const _=g.map($=>{const{title:B,poster_path:h,release_date:x,vote_average:X,genre_ids:A,id:Z}=$,ee=x?x.split("-")[0]:"N/A",te=A==null?void 0:A.slice(0,2).map(se=>me[se]||"Unknown").join(", "),ne=W(X);return`
        <div class="${t}" data-id="${Z}">
          <div class="${n}">
            <img 
              src="${h?N+u.IMG_W500+h:"https://placehold.co/300x450?text=No+Image"}" 
              alt="${B}" 
              class="${s}" 
            />
            <div class="${i}">
              <div class="${r}">
                <h3 class="${l}">${B}</h3>
                <p class="${I}">${te} | ${ee}</p>
              </div>
              <div class="${L}">
                <div class="${C}">${ne}</div>
              </div>
            </div>
          </div>
        </div>
      `}).join("");K(V,Y,"search"),E.innerHTML=_,E.scrollIntoView({behavior:"smooth"})}catch(m){console.error("Error fetching movies:",m),P.style.display="block"}}v.addEventListener("input",()=>{y.style.display=v.value.trim()!==""?"block":"none",v.value.trim()!==""||y.value!==""?b.style.display="block":b.style.display="none",v.value.trim()===""&&Q()});y.addEventListener("change",()=>{v.value.trim()!==""||y.value!==""?(b.style.display="block",S()):b.style.display="none"});function Q(){v.value="",y.value="",b.style.display="none",y.style.display="none",P.style.display="none",E.innerHTML="",H&&(H.style.display="grid"),v.focus()}b.addEventListener("click",Q);ce.addEventListener("click",async()=>{await S()});document.addEventListener("DOMContentLoaded",()=>{E&&J(E)});const pe={container:".hero-container",content:"hero-content",title:"hero-title",rating:"hero-rating",description:"hero-description",buttons:"hero-buttons",trailerBtn:"watch-trailer-btn",detailsBtn:"more-details-btn",trailerBtnClass:".watch-trailer-btn",detailsBtnClass:".more-details-btn"},G={trailerModal:"trailerModal",trailerIframe:"trailerIframe",trailerCloseBtn:"closeTrailer"};async function ve(){const t=await(await w(T,u.POPULAR_MOVIES)).results;let n=0;const s=document.querySelector(".hero-container");z(t[n]),setInterval(()=>{s.style.opacity="0",setTimeout(()=>{n=(n+1)%t.length,z(t[n]),s.style.opacity="1"},500)},5e3)}function z(e){const{container:t,content:n,title:s,rating:r,description:i,buttons:l,trailerBtn:I,detailsBtn:L,trailerBtnClass:C,detailsBtnClass:p}=pe,o=document.querySelector(t),d=window.innerWidth<480?`${u.IMG_W500}${e.poster_path}`:`${u.IMG_W1280}${e.backdrop_path}`,m=`${N}${d}`;o.style.backgroundImage=`url('${m}')`,o.style.backgroundSize="cover",o.style.backgroundPosition="center",o.style.backgroundRepeat="no-repeat";const g=W(e.vote_average);o.innerHTML=`
    <div class="${n}">
      <h1 class="${s}">${e.title}</h1>
      <div class="${r}">${g}</div>
      <p class="${i}">${e.overview}</p>
      <div class="${l}">
        <button class="${I}">Watch trailer</button>
        <button class="${L}">More details</button>
      </div>
    </div>
  `,document.querySelector(C).addEventListener("click",()=>he(e.id)),document.querySelector(p).addEventListener("click",()=>ae(e))}async function ye(){const e=await w(T,u.GENRE_LIST);ge(e.genres)}function ge(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(n=>`
        <div class="${categoryCard}">${n.name}</div>
      `).join(""))}ve();ye();async function he(e){try{const n=(await w(T,u.MOVIE_VIDEOS(e))).results.find(s=>s.type==="Trailer"&&s.site==="YouTube");n?re(n.key):q()}catch(t){console.error("Trailer fetch error:",t),q()}}document.getElementById(G.trailerCloseBtn).addEventListener("click",()=>{const{trailerModal:e,trailerIframe:t}=G,n=document.getElementById(e),s=document.getElementById(t);n.style.display="none",s.src=""});
//# sourceMappingURL=catalog.js.map
