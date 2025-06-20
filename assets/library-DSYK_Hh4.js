import{_ as M}from"./modal-BsPm1_va.js";import{c as S}from"./theme-BTg3i2ob.js";const $="https://image.tmdb.org/t/p",n=document.querySelector(".library-gallery"),v={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},f=Object.entries(v).reduce((e,[a,r])=>(e[r.toLowerCase()]=parseInt(a),e),{});function L(){const e=n.querySelector(".dropdown select");e&&(e.innerHTML='<option class="hidden-option" value="Genre" selected disabled>Genre</option>',Object.values(v).sort().forEach(a=>{const r=document.createElement("option");r.value=a.toLowerCase(),r.textContent=a,e.appendChild(r)}))}function g(e=null){const a=JSON.parse(localStorage.getItem("myLibrary"))||[];let r=a;if(console.log("--- loadLibrary Çağrısı ---"),console.log("Mevcut Tüm Filmler (localStorage'dan):",a),console.log("Seçilen Filtre Türü (filterGenre):",e),e&&e!=="Genre"){const o=f[e];console.log(`Filtreleme için ID: ${o} (Türe göre: ${e})`),o?(r=a.filter(t=>{var s;const i=(s=t.genre_ids)==null?void 0:s.includes(o);return console.log(`Film: ${t.title}, Genre ID'leri: ${t.genre_ids}, Hedef ID: ${o}, Sonuç: ${i}`),i}),console.log(`Filtrelenmiş filmler (${e}):`,r)):(console.warn(`"${e}" için geçerli bir tür ID'si bulunamadı. Filtreleme yapılmadı.`),r=a)}if(n.innerHTML="",r.length===0){const o=`
      <div class="my-library-no-movies">
        <p class="my-library-oops-message">
          OOPS...<br />
          We are very sorry! <br />
          ${e&&e!=="Genre"?`No movies found for '${e}' genre.`:"You don't have any movies at your library."}
        </p>
        <button>
          <a href="../catalog.html" class="my-library-search-link button">Search movie</a>
        </button>
      </div>
    `;n.innerHTML=o;const t=n.querySelector(".dropdown select");t&&t.classList.add("visually-hidden");return}let l=n.querySelector(".dropdown select");l?l.classList.remove("visually-hidden"):(n.insertAdjacentHTML("afterbegin",`
      <div class="dropdown">
        <select>
          <option class="hidden-option" value="Genre" selected disabled>Genre</option>
        </select>
      </div>
    `),l=n.querySelector(".dropdown select"),L()),e&&l.options.length>1&&(l.value=e);const b=r.map(o=>{const{id:t,title:i,poster_path:s,release_date:c,vote_average:d,genre_ids:m}=o,p=c?c.split("-")[0]:"N/A",u=(m==null?void 0:m.map(w=>v[w]).filter(Boolean).join(", "))||"",h=S(d);return`
        <div class="movie-card" data-id="${t}">
          <div class="poster-wrapper">
            <img src="${$}/w500${s}" alt="${i}" class="movie-poster" />
            <div class="movie-info-overlay">
              <div class="movie-meta">
                <h3 class="movie-title">${i}</h3>
                <p class="movie-details">${u} | ${p}</p>
              </div>
              <div class="movie-rating">${h}</div>
            </div>
          </div>
        </div>
      `}).join("");n.insertAdjacentHTML("beforeend",b),n.querySelectorAll(".movie-card").forEach(o=>{o.addEventListener("click",async()=>{var c;const t=Number(o.dataset.id),s=(JSON.parse(localStorage.getItem("myLibrary"))||[]).find(d=>d.id===t);if(s){const{showDetailsModal:d}=await M(async()=>{const{showDetailsModal:p}=await import("./modal-BsPm1_va.js").then(u=>u.m);return{showDetailsModal:p}},[]),m=((c=s.genre_ids)==null?void 0:c.map(p=>v[p]).filter(Boolean))||[];d(s,m)}})});const y=n.querySelector(".dropdown select");y&&(y.onchange=o=>{const t=o.target.value;g(t)})}g();export{g as loadLibrary};
//# sourceMappingURL=library-DSYK_Hh4.js.map
