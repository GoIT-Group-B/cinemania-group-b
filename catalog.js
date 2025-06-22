import{d as Y,f as S,B as w,c as N,I as O,E as d,b as Z,a as ee,s as x}from"./assets/theme-z-msU2qd.js";import"./assets/vendor-DDD7fsZd.js";const m=document.getElementById("search"),_=document.getElementById("warning"),E=document.getElementById("movies"),M=document.querySelector(".clear-button"),te=document.querySelector(".search-button"),u=document.getElementById("year"),k=document.getElementById("movieList"),ne={trendCard:"trend-card",posterWrapper:"poster-wrapper",moviePoster:"movie-poster",movieMeta:"movie-meta",trendInfo:"trend-info",trendTitle:"trend-title",movieDetails:"movie-details",trendStars:"trend-stars",movieRating:"movie-rating"},ae={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},re=new Date().getFullYear();for(let e=re;e>=1900;e--){const t=document.createElement("option");t.value=e,t.textContent=e,u.appendChild(t)}async function j(){const{trendCard:e,posterWrapper:t,moviePoster:n,movieMeta:a,trendInfo:s,trendTitle:o,movieDetails:b,trendStars:C,movieRating:I}=ne,p=m.value.trim(),c=u.value;if(E.innerHTML="",k&&(k.style.display="none"),p===""&&c===""){alert("Please enter a search term or select a year.");return}let l="";const v={};p!==""?(l=d.SEARCH_MOVIES,v.query=p,c!==""&&(v.year=c)):(l=d.DISCOVER_MOVIES,v.primary_release_year=c);try{const g=(await S(w,l,v)).results.filter(f=>{var h;return((h=f.release_date)==null?void 0:h.split("-")[0])===c});if(!Array.isArray(g)||g.length===0){_.style.display="block";return}_.style.display="none";const L=g.map(f=>{const{title:$,poster_path:h,release_date:T,vote_average:z,genre_ids:A,id:J}=f,V=T?T.split("-")[0]:"N/A";console.log(V);const K=A==null?void 0:A.slice(0,2).map(X=>ae[X]||"Unknown").join(", "),Q=N(z);return`
        <div class="${e}" data-id="${J}">
          <div class="${t}">
            <img 
              src="${h?O+d.IMG_W500+h:"https://placehold.co/300x450?text=No+Image"}" 
              alt="${$}" 
              class="${n}" 
            />
            <div class="${s}">
              <div class="${a}">
                <h3 class="${o}">${$}</h3>
                <p class="${b}">${K} | ${V}</p>
              </div>
              <div class="${C}">
                <div class="${I}">${Q}</div>
              </div>
            </div>
          </div>
        </div>
      `}).join("");E.innerHTML=L,E.scrollIntoView({behavior:"smooth"})}catch(y){console.error("Error fetching movies:",y),_.style.display="block"}}m.addEventListener("input",()=>{u.style.display=m.value.trim()!==""?"block":"none",m.value.trim()!==""||u.value!==""?M.style.display="block":M.style.display="none",m.value.trim()===""&&G()});u.addEventListener("change",()=>{m.value.trim()!==""||u.value!==""?(M.style.display="block",j()):M.style.display="none"});function G(){m.value="",u.value="",M.style.display="none",u.style.display="none",_.style.display="none",E.innerHTML="",k&&(k.style.display="grid"),m.focus()}M.addEventListener("click",G);te.addEventListener("click",async()=>{await j()});document.addEventListener("DOMContentLoaded",()=>{E&&Y(E)});const se={container:".hero-container",content:"hero-content",title:"hero-title",rating:"hero-rating",description:"hero-description",buttons:"hero-buttons",trailerBtn:"watch-trailer-btn",detailsBtn:"more-details-btn",trailerBtnClass:".watch-trailer-btn",detailsBtnClass:".more-details-btn"},q={trailerModal:"trailerModal",trailerIframe:"trailerIframe",trailerCloseBtn:"closeTrailer"};async function oe(){const t=await(await S(w,d.POPULAR_MOVIES)).results;let n=0;const a=document.querySelector(".hero-container");F(t[n]),setInterval(()=>{a.style.opacity="0",setTimeout(()=>{n=(n+1)%t.length,F(t[n]),a.style.opacity="1"},500)},5e3)}function F(e){const{container:t,content:n,title:a,rating:s,description:o,buttons:b,trailerBtn:C,detailsBtn:I,trailerBtnClass:p,detailsBtnClass:c}=se,l=document.querySelector(t),y=window.innerWidth<480?`${d.IMG_W500}${e.poster_path}`:`${d.IMG_W1280}${e.backdrop_path}`,g=`${O}${y}`;l.style.backgroundImage=`url('${g}')`,l.style.backgroundSize="cover",l.style.backgroundPosition="center",l.style.backgroundRepeat="no-repeat";const L=N(e.vote_average);l.innerHTML=`
    <div class="${n}">
      <h1 class="${a}">${e.title}</h1>
      <div class="${s}">${L}</div>
      <p class="${o}">${e.overview}</p>
      <div class="${b}">
        <button class="${C}">Watch trailer</button>
        <button class="${I}">More details</button>
      </div>
    </div>
  `,document.querySelector(p).addEventListener("click",()=>ce(e.id)),document.querySelector(c).addEventListener("click",()=>Z(e))}async function ie(){const e=await S(w,d.GENRE_LIST);le(e.genres)}function le(e){const t=document.getElementById("category");t&&(t.innerHTML=e.map(n=>`
        <div class="${categoryCard}">${n.name}</div>
      `).join(""))}oe();ie();async function ce(e){try{const n=(await S(w,d.MOVIE_VIDEOS(e))).results.find(a=>a.type==="Trailer"&&a.site==="YouTube");n?ee(n.key):x()}catch(t){console.error("Trailer fetch error:",t),x()}}document.getElementById(q.trailerCloseBtn).addEventListener("click",()=>{const{trailerModal:e,trailerIframe:t}=q,n=document.getElementById(e),a=document.getElementById(t);n.style.display="none",a.src=""});let i=24,r=1;const B=document.getElementById("pagination");function U(e,t=!1,n=!1,a=!1){if(a){const o=document.createElement("span");return o.className="dots",o.textContent="...",o}const s=document.createElement("button");return s.className=a?"dots":"page-btn",t&&s.classList.add("active"),s.textContent=e,n?s.disabled=!0:s.addEventListener("click",()=>{r=Number(e),R(r),P(r,i)}),s}function P(e=1,t=24){r=e,i=t>500?500:t,B.innerHTML="";const n=document.createElement("button");n.className="nav-btn",n.textContent="<",n.disabled=r===1,n.addEventListener("click",()=>{r>1&&(r--,R(r),P(r,i))}),B.appendChild(n);const a=[];if(i<=4)for(let o=1;o<=i;o++)a.push(o);else r<=2?a.push(1,2,3,"...",i):r>=i-1?a.push(1,"...",i-2,i-1,i):a.push(1,"...",r-1,r,r+1,"...",i);a.forEach(o=>{o==="..."?B.appendChild(U("...",!1,!0,!0)):B.appendChild(U(o,o===r))});const s=document.createElement("button");s.className="nav-btn",s.textContent=">",s.disabled=r===i,s.addEventListener("click",()=>{r<i&&(r++,R(r),P(r,i))}),B.appendChild(s)}const de={trendCard:"trend-card",posterWrapper:"poster-wrapper",moviePoster:"movie-poster",movieMeta:"movie-meta",trendInfo:"trend-info",trendTitle:"trend-title",movieDetails:"movie-details",trendStars:"trend-stars",movieRating:"movie-rating"},W=document.getElementById("movieList");let D=1,H=20;async function R(e=1){const t=await S(w,d.POPULAR_MOVIES,{page:e}),n=await t.results;D=e,H=t.total_pages,console.log(t),console.log(D),console.log(H),me(n),P(D,H)}function me(e){const{trendCard:t,posterWrapper:n,moviePoster:a,movieMeta:s,trendInfo:o,trendTitle:b,movieDetails:C,trendStars:I,movieRating:p}=de;W.innerHTML=e.map(c=>{const{title:l,poster_path:v,release_date:y,vote_average:g,genre_ids:L}=c,f=y?y.split("-")[0]:"N/A",$=L.slice(0,2).map(T=>ue[T]).join(", "),h=N(g);return`
        <div class="${t}" data-id=${c.id}>
          <div class="${n}">
            <img src="${O}/w500${v}" alt="${l}" class="${a}" />
            <div class="${o}">
              <div class="${s}">
                <h3 class="${b}">${l}</h3>
                <p class="${C}">${$} | ${f}</p>
              </div>
              <div class="${I}">
                <div class="${p}">${h}</div>
              </div>
            </div>
          </div>
        </div>
      `}).join("")}const ue={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};document.addEventListener("DOMContentLoaded",()=>{W&&Y(W)});R();
//# sourceMappingURL=catalog.js.map
