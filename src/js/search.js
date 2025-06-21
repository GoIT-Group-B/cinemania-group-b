
const input = document.getElementById("search");
const warningMessage = document.getElementById("warning");
const moviesContainer = document.getElementById("movies");
const clearButton = document.querySelector(".clear-button");
const searchButton = document.querySelector(".search-button");
const yearInput = document.getElementById("year");



const BASE_URL = "https://api.themoviedb.org/3/search/movie";
 const IMG_URL = "https://image.tmdb.org/t/p/w500";
 const API_KEY = "52238d7fab5c2c01b99e751619dd16ec";
//yılları select içine yukleme
 const currentYear = new Date().getFullYear();//bugünki yılı almaya yarar kod

for (let y = currentYear; y >= 1900; y--){
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearInput.appendChild(option);
}

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
                   warningMessage.style.display = "block";
            }
            else {
                warningMessage.style.display = "none";
            }
            document.querySelectorAll('.movie-card').forEach(card => {
                card.style.display = "none";
              });
            
            
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
    
}
// Search alanına yazı yazıldığında yıl kutusu göster/gizle
input.addEventListener("input", () => {
    yearInput.style.display = input.value.trim() !== "" ? "block" : "none";

    // Çarpı butonu sadece input dolu **ve** yıl seçiliyse görünsün
    if (input.value.trim() !== "" && yearInput.value !== "") {
        clearButton.style.display = "block";
    } else {
        clearButton.style.display = "none";
    }

    if (input.value.trim() === "") {
        clearSearch();
    }
});
// Yıl seçilirse çarpı butonu sadece input doluysa görünsün
yearInput.addEventListener("change", () => {
    if (input.value.trim() !== "" && yearInput.value !== "") {
        clearButton.style.display = "block";
    } else {
        clearButton.style.display = "none";
    }
});

function clearSearch() {
    
    input.value = "";
    yearInput.value = "";
    clearButton.style.display = "none";
    yearInput.style.display = "none";
    moviesContainer.innerHTML = "";
    warningMessage.style.display = "none";
    input.focus();
}
    
searchButton.addEventListener("click", () => {
    search();
    
})
clearButton.addEventListener("click", () => {
    clearSearch();
    
})


