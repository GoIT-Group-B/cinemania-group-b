import{d as J,f as w,E as u,B as _,c as N,I as O,b as se,a as ae,s as q}from"./assets/theme-Cbbr1ZUe.js";import"./assets/vendor-DDD7fsZd.js";const re={trendCard:"trend-card",posterWrapper:"poster-wrapper",moviePoster:"movie-poster",movieMeta:"movie-meta",trendInfo:"trend-info",trendTitle:"trend-title",movieDetails:"movie-details",trendStars:"trend-stars",movieRating:"movie-rating"},W=document.getElementById("movieList");let x=1,U=20;async function R(e=1){const t=await w(_,u.POPULAR_MOVIES,{page:e}),n=await t.results;x=e,U=t.total_pages,ie(n),K(x,U,"first")}function ie(e){const{trendCard:t,posterWrapper:n,moviePoster:s,movieMeta:r,trendInfo:i,trendTitle:o,movieDetails:I,trendStars:C,movieRating:B}=re;W.innerHTML=e.map(m=>{const{title:l,poster_path:h,release_date:d,vote_average:p,genre_ids:g}=m,k=d?d.split("-")[0]:"N/A",$=g.slice(0,2).map(f=>oe[f]).join(", "),S=N(p);return`
        <div class="${t}" data-id=${m.id}>
          <div class="${n}">
            <img src="${O}/w500${h}" alt="${l}" class="${s}" />
            <div class="${i}">
              <div class="${r}">
                <h3 class="${o}">${l}</h3>
                <p class="${I}">${$} | ${k}</p>
              </div>
              <div class="${C}">
                <div class="${B}">${S}</div>
              </div>
            </div>
          </div>
        </div>
      `}).join("")}const oe={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};document.addEventListener("DOMContentLoaded",()=>{W&&J(W)});R();let c=24,a=1,M="search";const E=document.getElementById("pagination");function Y(e,t=!1,n=!1,s=!1){if(s){const i=document.createElement("span");return i.className="dots",i.textContent="...",i}const r=document.createElement("button");return r.className=s?"dots":"page-btn",t&&r.classList.add("active"),r.textContent=e,n?r.disabled=!0:r.addEventListener("click",()=>{a=Number(e),console.log("REFF="+M),M=="first"?R(a):T(a)}),r}function K(e=1,t=24,n="search"){a=e,c=t>500?500:t,M=n,console.log("REF="+M+" "+a),E.innerHTML="",E.style.display=c>1?"flex":"none";const s=document.createElement("button");s.className="nav-btn",s.innerHTML='<svg class="pg-icon"><use href="./images/sprite.svg#icon-left"></use></svg>',s.disabled=a===1,s.addEventListener("click",()=>{a>1&&(a--,M=="first"?R(a):T(a))}),E.appendChild(s);const r=[];if(c<=4)for(let o=1;o<=c;o++)r.push(o);else a<=2?r.push(1,2,3,"...",c):a>=c-1?r.push(1,"...",c-2,c-1,c):r.push(1,"...",a-1,a,a+1,"...",c);r.forEach(o=>{o==="..."?E.appendChild(Y("...",!1,!0,!0)):E.appendChild(Y(o,o===a,o===a))});const i=document.createElement("button");i.className="nav-btn",i.innerHTML='<svg class="pg-icon"><use href="./images/sprite.svg#icon-right"></use></svg>',i.disabled=a===c,i.addEventListener("click",()=>{a<c&&(a++,M=="first"?R(a):T(a))}),E.appendChild(i)}let D=1,j=20;const v=document.getElementById("search"),P=document.getElementById("warning"),b=document.getElementById("movies"),L=document.querySelector(".clear-button"),le=document.querySelector(".search-button"),y=document.getElementById("year"),H=document.getElementById("movieList"),ce={trendCard:"trend-card",posterWrapper:"poster-wrapper",moviePoster:"movie-poster",movieMeta:"movie-meta",trendInfo:"trend-info",trendTitle:"trend-title",movieDetails:"movie-details",trendStars:"trend-stars",movieRating:"movie-rating"},de={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},ue=new Date().getFullYear();for(let e=ue;e>=1900;e--){const t=document.createElement("option");t.value=e,t.textContent=e,y.appendChild(t)}async function T(e=1){const{trendCard:t,posterWrapper:n,moviePoster:s,movieMeta:r,trendInfo:i,trendTitle:o,movieDetails:I,trendStars:C,movieRating:B}=ce,m=v.value.trim(),l=y.value;if(b.innerHTML="",H&&(H.style.display="none"),m===""&&l===""){alert("Please enter a search term or select a year.");return}let h="";const d={};m!==""?(h=u.SEARCH_MOVIES,d.query=m,l!==""&&(d.year=l)):(h=u.DISCOVER_MOVIES,d.primary_release_year=l),D=e,d.page=D;try{const p=await w(_,h,d);j=p.total_pages;const g=p.results.filter($=>{var f;return((f=$.release_date)==null?void 0:f.split("-")[0])===l});if(!Array.isArray(g)||g.length===0){P.style.display="block";return}P.style.display="none";const k=g.map($=>{const{title:S,poster_path:f,release_date:F,vote_average:X,genre_ids:A,id:Z}=$,V=F?F.split("-")[0]:"N/A";console.log(V);const ee=A==null?void 0:A.slice(0,2).map(ne=>de[ne]||"Unknown").join(", "),te=N(X);return`
        <div class="${t}" data-id="${Z}">
          <div class="${n}">
            <img 
              src="${f?O+u.IMG_W500+f:"https://placehold.co/300x450?text=No+Image"}" 
              alt="${S}" 
              class="${s}" 
            />
            <div class="${i}">
              <div class="${r}">
                <h3 class="${o}">${S}</h3>
                <p class="${I}">${ee} | ${V}</p>
              </div>
              <div class="${C}">
                <div class="${B}">${te}</div>
              </div>
            </div>
          </div>
        </div>
      `}).join("");K(D,j,"search"),b.innerHTML=k,b.scrollIntoView({behavior:"smooth"})}catch(p){console.error("Error fetching movies:",p),P.style.display="block"}}v.addEventListener("input",()=>{y.style.display=v.value.trim()!==""?"block":"none",v.value.trim()!==""||y.value!==""?L.style.display="block":L.style.display="none",v.value.trim()===""&&Q()});y.addEventListener("change",()=>{v.value.trim()!==""||y.value!==""?(L.style.display="block",T()):L.style.display="none"});function Q(){v.value="",y.value="",L.style.display="none",y.style.display="none",P.style.display="none",b.innerHTML="",H&&(H.style.display="grid"),v.focus()}L.addEventListener("click",Q);le.addEventListener("click",async()=>{await T()});document.addEventListener("DOMContentLoaded",()=>{b&&J(b)});const me={container:".hero-container",content:"hero-content",title:"hero-title",rating:"hero-rating",description:"hero-description",buttons:"hero-buttons",trailerBtn:"watch-trailer-btn",detailsBtn:"more-details-btn",trailerBtnClass:".watch-trailer-btn",detailsBtnClass:".more-details-btn"},G={trailerModal:"trailerModal",trailerIframe:"trailerIframe",trailerCloseBtn:"closeTrailer"};async function pe(){const t=await(await w(_,u.POPULAR_MOVIES)).results;let n=0;const s=document.querySelector(".hero-container");z(t[n]),setInterval(()=>{s.style.opacity="0",setTimeout(()=>{n=(n+1)%t.length,z(t[n]),s.style.opacity="1"},500)},5e3)}function z(e){const{container:t,content:n,title:s,rating:r,description:i,buttons:o,trailerBtn:I,detailsBtn:C,trailerBtnClass:B,detailsBtnClass:m}=me,l=document.querySelector(t),d=window.innerWidth<480?`${u.IMG_W500}${e.poster_path}`:`${u.IMG_W1280}${e.backdrop_path}`,p=`${O}${d}`;l.style.backgroundImage=`url('${p}')`,l.style.backgroundSize="cover",l.style.backgroundPosition="center",l.style.backgroundRepeat="no-repeat";const g=N(e.vote_average);l.innerHTML=`
    <div class="${n}">
      <h1 class="${s}">${e.title}</h1>
      <div class="${r}">${g}</div>
      <p class="${i}">${e.overview}</p>
      <div class="${o}">
        <button class="${I}">Watch trailer</button>
        <button class="${C}">More details</button>
      </div>
    </div>
  `,document.querySelector(B).addEventListener("click",()=>ge(e.id)),document.querySelector(m).addEventListener("click",()=>se(e))}async function ve(){const e=await w(_,u.GENRE_LIST);ye(e.genres)}function ye(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(n=>`
        <div class="${categoryCard}">${n.name}</div>
      `).join(""))}pe();ve();async function ge(e){try{const n=(await w(_,u.MOVIE_VIDEOS(e))).results.find(s=>s.type==="Trailer"&&s.site==="YouTube");n?ae(n.key):q()}catch(t){console.error("Trailer fetch error:",t),q()}}document.getElementById(G.trailerCloseBtn).addEventListener("click",()=>{const{trailerModal:e,trailerIframe:t}=G,n=document.getElementById(e),s=document.getElementById(t);n.style.display="none",s.src=""});
//# sourceMappingURL=catalog.js.map
