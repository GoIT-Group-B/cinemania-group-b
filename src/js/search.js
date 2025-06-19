const input = document.getElementById("search");
const selinv2 = document.getElementById("goktug");
const API_KEY = "52238d7fab5c2c01b99e751619dd16ec";
const moviesContainer = document.getElementById("movies");
const clearButton = document.querySelector(".clear-button");
const BASE_URL = "https://api.themoviedb.org/3/search/movie";
const IMG_URL = "https://image.tmdb.org/t/p/w500";




function search() {
    
    const query = input.value.trim();
    moviesContainer.innerHTML = ""; // film alanları boş kalsın


    if (query === "")
    {
        alert("Warning! 'Please enter a search term.'");
        return;
    }
            
    fetch(`${BASE_URL}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
    .then(res => res.json())
        .then(data => {
            if (data.results.length === 0)
                {
                   selinv2.style.display = "block";
            }
            else {
                selinv2.style.display = "none";
            }
            
      // Sadece filmleri ekle
      data.results.forEach(movie => {
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
          <img src="${movie.poster_path ? IMG_URL + movie.poster_path : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
          <h3>${movie.title}</h3>
          <p>Rating: ${movie.vote_average}</p>
        `;

        moviesContainer.appendChild(movieEl);
      });

      moviesContainer.scrollIntoView({ behavior: "smooth" });
    })
   
    .catch(error => {
        console.log("hata", error);
    });
    
    
    // else if (value === "a")
    // {
    //     selinv2.style.display = "none";
    // }
    
    
    
}


input.addEventListener("input", () => { /*çarpıyı input değeri varsa gösterir style.display görünürlük demek*/
     clearButton.style.display = input.value ? "block" : "none";
});
function clearSearch() {
    
    input.value = "";
    clearButton.style.display = "none";
    moviesContainer.innerHTML = "";
    input.focus();

}

