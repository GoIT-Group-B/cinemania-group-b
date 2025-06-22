const input = document.getElementById("search");
const warningMessage = document.getElementById("warning");
const moviesContainer = document.getElementById("movies");
const clearButton = document.querySelector(".clear-button");
const searchButton = document.querySelector(".search-button");
const yearInput = document.getElementById("year");
const movieListSection = document.getElementById("movieList");

const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const API_KEY = "52238d7fab5c2c01b99e751619dd16ec";

const currentYear = new Date().getFullYear();
for (let y = currentYear; y >= 1900; y--) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearInput.appendChild(option);
}

function search() {
    const query = input.value.trim();
    const selectedYear = yearInput.value;

    moviesContainer.innerHTML = "";

    if (movieListSection) {
        movieListSection.style.display = "none";
    }

    if (query === "" && selectedYear === "") {
        alert("Please enter a search term or select a year.");
        return;
    }

    let url = "";
    if (query !== "") {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`;
        if (selectedYear !== "") {
            url += `&year=${selectedYear}`;
        }
    } else if (selectedYear !== "") {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&year=${selectedYear}`;
    }

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.results.length === 0) {
                warningMessage.style.display = "block";
            } else {
                warningMessage.style.display = "none";
            }

            data.results.forEach(movie => {
                const movieEl = document.createElement("div");
                movieEl.classList.add("movie");

                movieEl.innerHTML = `
                   
                    
                    <p>Rating: ${movie.vote_average}</p>
                   
                
                <div class="${ trendCard }" data-id=${movie.id}>
          <div class="${ posterWrapper }">
             <img src="${movie.poster_path ? IMG_URL + movie.poster_path : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
            <div class="${ trendInfo }">
              <div class="${ movieMeta }">
                <h3>${movie.title}</h3>
                <p class="${ movieDetails }">${genres} | ${movie.release_date}</p>
              </div>
              <div class="${ trendStars }">
                <div class="${ movieRating }">${starRating}</div>
              </div>
            </div>
          </div>
                </div>
                `;

                moviesContainer.appendChild(movieEl);
            });

            moviesContainer.scrollIntoView({ behavior: "smooth" });
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

input.addEventListener("input", () => {
    yearInput.style.display = input.value.trim() !== "" ? "block" : "none";

    if (input.value.trim() !== "" || yearInput.value !== "") {
        clearButton.style.display = "block";
    } else {
        clearButton.style.display = "none";
    }

    if (input.value.trim() === "") {
        clearSearch();
    }
});

yearInput.addEventListener("change", () => {
    if (input.value.trim() !== "" || yearInput.value !== "") {
        clearButton.style.display = "block";
        search();
    } else {
        clearButton.style.display = "none";
    }
});

function clearSearch() {
    input.value = "";
    yearInput.value = "";
    clearButton.style.display = "none";
    yearInput.style.display = "none";
    warningMessage.style.display = "none";
    moviesContainer.innerHTML = "";

    if (movieListSection) {
        movieListSection.style.display = "grid";
    }
    input.focus();
}

clearButton.addEventListener("click", clearSearch);
searchButton.addEventListener("click", search);
