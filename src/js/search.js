const input = document.getElementById("search");
const moviesContainer = document.getElementById("movies");
 const clearButton = document.querySelector(".clear-button");
// const messageBox = document.getElementById("message-box");


function search() {
    
    const value = input.value.trim();
    moviesContainer.innerHTML = ""; // film alanları boş kalsın

    if (value === "") {
        alert("Warning! 'Please enter a search term.'");
        return;
    }
    
        movies.scrollIntoView({ behavior: "smooth" });// Sayfayı filmler bölümüne kaydır
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

