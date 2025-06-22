import{d as K,f as S,E as m,B as T,c as N,I as O,b as ae,a as re,s as F}from"./assets/theme-Cbbr1ZUe.js";import"./assets/vendor-DDD7fsZd.js";const ie={trendCard:"trend-card",posterWrapper:"poster-wrapper",moviePoster:"movie-poster",movieMeta:"movie-meta",trendInfo:"trend-info",trendTitle:"trend-title",movieDetails:"movie-details",trendStars:"trend-stars",movieRating:"movie-rating"},V=document.getElementById("movieList");let U=1,Y=20;async function R(e=1){const t=await S(T,m.POPULAR_MOVIES,{page:e}),n=await t.results;U=e,Y=t.total_pages,oe(n),Q(U,Y,"first")}function oe(e){const{trendCard:t,posterWrapper:n,moviePoster:s,movieMeta:r,trendInfo:i,trendTitle:o,movieDetails:I,trendStars:L,movieRating:C}=ie;V.innerHTML=e.map(u=>{const{title:l,poster_path:f,release_date:d,vote_average:v,genre_ids:g}=u,_=d?d.split("-")[0]:"N/A",$=g.slice(0,2).map(h=>le[h]).join(", "),B=N(v);return`
        <div class="${t}" data-id=${u.id}>
          <div class="${n}">
            <img src="${O}/w500${f}" alt="${l}" class="${s}" />
            <div class="${i}">
              <div class="${r}">
                <h3 class="${o}">${l}</h3>
                <p class="${I}">${$} | ${_}</p>
              </div>
              <div class="${L}">
                <div class="${C}">${B}</div>
              </div>
            </div>
          </div>
        </div>
      `}).join("")}const le={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};document.addEventListener("DOMContentLoaded",()=>{V&&K(V)});R();let c=24,a=1,k="search";const M=document.getElementById("pagination"),W=document.getElementById("movies");function j(e,t=!1,n=!1,s=!1){if(s){const i=document.createElement("span");return i.className="dots",i.textContent="...",i}const r=document.createElement("button");return r.className=s?"dots":"page-btn",t&&r.classList.add("active"),r.textContent=e,n?r.disabled=!0:r.addEventListener("click",()=>{a=Number(e),k=="first"?R(a):w(a),W.scrollIntoView({behavior:"smooth"})}),r}function Q(e=1,t=24,n="search"){a=e,c=t>500?500:t,k=n,M.innerHTML="",M.style.display=c>1?"flex":"none";const s=document.createElement("button");s.className="nav-btn",s.innerHTML='<svg class="pg-icon"><use href="/images/sprite.svg#icon-left"></use></svg>',s.disabled=a===1,s.addEventListener("click",()=>{a>1&&(a--,k=="first"?R(a):w(a),W.scrollIntoView({behavior:"smooth"}))}),M.appendChild(s);const r=[];if(c<=4)for(let o=1;o<=c;o++)r.push(o);else a<=2?r.push(1,2,3,"...",c):a>=c-1?r.push(1,"...",c-2,c-1,c):r.push(1,"...",a-1,a,a+1,"...",c);r.forEach(o=>{o==="..."?M.appendChild(j("...",!1,!0,!0)):M.appendChild(j(o,o===a,o===a))});const i=document.createElement("button");i.className="nav-btn",i.innerHTML='<svg class="pg-icon"><use href="/images/sprite.svg#icon-right"></use></svg>',i.disabled=a===c,i.addEventListener("click",()=>{a<c&&(a++,k=="first"?R(a):w(a),W.scrollIntoView({behavior:"smooth"}))}),M.appendChild(i)}let D=1,G=20;const p=document.getElementById("search"),P=document.getElementById("warning"),E=document.getElementById("movies"),b=document.querySelector(".clear-button"),ce=document.querySelector(".search-button"),y=document.getElementById("year"),H=document.getElementById("movieList"),de={trendCard:"trend-card",posterWrapper:"poster-wrapper",moviePoster:"movie-poster",movieMeta:"movie-meta",trendInfo:"trend-info",trendTitle:"trend-title",movieDetails:"movie-details",trendStars:"trend-stars",movieRating:"movie-rating"},me={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},ue=new Date().getFullYear();for(let e=ue;e>=1900;e--){const t=document.createElement("option");t.value=e,t.textContent=e,y.appendChild(t)}async function w(e=1){const{trendCard:t,posterWrapper:n,moviePoster:s,movieMeta:r,trendInfo:i,trendTitle:o,movieDetails:I,trendStars:L,movieRating:C}=de,u=p.value.trim(),l=y.value;if(E.innerHTML="",H&&(H.style.display="none"),u===""&&l===""){alert("Please enter a search term or select a year.");return}let f="";const d={};u!==""?(f=m.SEARCH_MOVIES,d.query=u,l!==""&&(d.year=l)):(f=m.DISCOVER_MOVIES,d.primary_release_year=l),D=e,d.page=D;try{const v=await S(T,f,d);G=v.total_pages;const g=v.results.filter($=>{var h;return((h=$.release_date)==null?void 0:h.split("-")[0])===l});if(!Array.isArray(g)||g.length===0){P.style.display="block";return}P.style.display="none";const _=g.map($=>{const{title:B,poster_path:h,release_date:q,vote_average:Z,genre_ids:A,id:ee}=$,x=q?q.split("-")[0]:"N/A";console.log(x);const te=A==null?void 0:A.slice(0,2).map(se=>me[se]||"Unknown").join(", "),ne=N(Z);return`
        <div class="${t}" data-id="${ee}">
          <div class="${n}">
            <img 
              src="${h?O+m.IMG_W500+h:"https://placehold.co/300x450?text=No+Image"}" 
              alt="${B}" 
              class="${s}" 
            />
            <div class="${i}">
              <div class="${r}">
                <h3 class="${o}">${B}</h3>
                <p class="${I}">${te} | ${x}</p>
              </div>
              <div class="${L}">
                <div class="${C}">${ne}</div>
              </div>
            </div>
          </div>
        </div>
      `}).join("");Q(D,G,"search"),E.innerHTML=_,E.scrollIntoView({behavior:"smooth"})}catch(v){console.error("Error fetching movies:",v),P.style.display="block"}}p.addEventListener("input",()=>{y.style.display=p.value.trim()!==""?"block":"none",p.value.trim()!==""||y.value!==""?b.style.display="block":b.style.display="none",p.value.trim()===""&&X()});y.addEventListener("change",()=>{p.value.trim()!==""||y.value!==""?(b.style.display="block",w()):b.style.display="none"});function X(){p.value="",y.value="",b.style.display="none",y.style.display="none",P.style.display="none",E.innerHTML="",H&&(H.style.display="grid"),p.focus()}b.addEventListener("click",X);ce.addEventListener("click",async()=>{await w()});document.addEventListener("DOMContentLoaded",()=>{E&&K(E)});const ve={container:".hero-container",content:"hero-content",title:"hero-title",rating:"hero-rating",description:"hero-description",buttons:"hero-buttons",trailerBtn:"watch-trailer-btn",detailsBtn:"more-details-btn",trailerBtnClass:".watch-trailer-btn",detailsBtnClass:".more-details-btn"},z={trailerModal:"trailerModal",trailerIframe:"trailerIframe",trailerCloseBtn:"closeTrailer"};async function pe(){const t=await(await S(T,m.POPULAR_MOVIES)).results;let n=0;const s=document.querySelector(".hero-container");J(t[n]),setInterval(()=>{s.style.opacity="0",setTimeout(()=>{n=(n+1)%t.length,J(t[n]),s.style.opacity="1"},500)},5e3)}function J(e){const{container:t,content:n,title:s,rating:r,description:i,buttons:o,trailerBtn:I,detailsBtn:L,trailerBtnClass:C,detailsBtnClass:u}=ve,l=document.querySelector(t),d=window.innerWidth<480?`${m.IMG_W500}${e.poster_path}`:`${m.IMG_W1280}${e.backdrop_path}`,v=`${O}${d}`;l.style.backgroundImage=`url('${v}')`,l.style.backgroundSize="cover",l.style.backgroundPosition="center",l.style.backgroundRepeat="no-repeat";const g=N(e.vote_average);l.innerHTML=`
    <div class="${n}">
      <h1 class="${s}">${e.title}</h1>
      <div class="${r}">${g}</div>
      <p class="${i}">${e.overview}</p>
      <div class="${o}">
        <button class="${I}">Watch trailer</button>
        <button class="${L}">More details</button>
      </div>
    </div>
  `,document.querySelector(C).addEventListener("click",()=>he(e.id)),document.querySelector(u).addEventListener("click",()=>ae(e))}async function ye(){const e=await S(T,m.GENRE_LIST);ge(e.genres)}function ge(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(n=>`
        <div class="${categoryCard}">${n.name}</div>
      `).join(""))}pe();ye();async function he(e){try{const n=(await S(T,m.MOVIE_VIDEOS(e))).results.find(s=>s.type==="Trailer"&&s.site==="YouTube");n?re(n.key):F()}catch(t){console.error("Trailer fetch error:",t),F()}}document.getElementById(z.trailerCloseBtn).addEventListener("click",()=>{const{trailerModal:e,trailerIframe:t}=z,n=document.getElementById(e),s=document.getElementById(t);n.style.display="none",s.src=""});
//# sourceMappingURL=catalog.js.map
