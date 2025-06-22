import { fetchFirstPageMovies } from './catalog-film-list.js';
import { search } from './search.js';

let totalPages = 24;
let currentPage = 1;
let ref = "search";

const paginationEl = document.getElementById("pagination");
const moviesContainer = document.getElementById("movies");

function createPageButton(label, isActive = false, isDisabled = false, isDots = false) {
    if (isDots) {
    const span = document.createElement("span");
    span.className = "dots";
    span.textContent = "...";
    return span;
    }

    const button = document.createElement("button");
    button.className = isDots ? "dots" : "page-btn";
    if (isActive) button.classList.add("active");
    button.textContent = label;
    if (!isDisabled) {
    button.addEventListener("click", () => {
        currentPage = Number(label);
 
        if (ref == "first") {
            fetchFirstPageMovies(currentPage);
        } else {
            search(currentPage);
        }
        moviesContainer.scrollIntoView({ behavior: "smooth" });
    });
    } else {
    button.disabled = true;
    }
    return button;
}

export function renderPagination(crntPage = 1, ttlPages = 24,reff="search") {
    currentPage = crntPage;
    totalPages = ttlPages > 500 ? 500 : ttlPages;
    ref = reff;

    paginationEl.innerHTML = "";
    paginationEl.style.display = (totalPages > 1) ? "flex" : "none";

    // Previous
    const prevBtn = document.createElement("button");
    prevBtn.className = "nav-btn";
    prevBtn.innerHTML = `<svg class="pg-icon"><use href="/images/sprite.svg#icon-left"></use></svg>`;
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        if (ref == "first") {
            fetchFirstPageMovies(currentPage);
        } else {
            search(currentPage);
        }
        moviesContainer.scrollIntoView({ behavior: "smooth" });
    }
    });
    paginationEl.appendChild(prevBtn);

    // Sayfa numaraları
    const pageNumbers = [];

    if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    } else {
    if (currentPage <= 2) {
        pageNumbers.push(1, 2, 3, "...", totalPages);
    } else if (currentPage >= totalPages - 1) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
        pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
    }

    pageNumbers.forEach(item => {
    if (item === "...") {
        paginationEl.appendChild(createPageButton("...", false, true, true));
    } else {
        paginationEl.appendChild(createPageButton(item, item === currentPage,item === currentPage));
    }
    });

    // Next
    const nextBtn = document.createElement("button");
    nextBtn.className = "nav-btn";
    nextBtn.innerHTML = `<svg class="pg-icon"><use href="/images/sprite.svg#icon-right"></use></svg>`;
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        if (ref == "first") {
            fetchFirstPageMovies(currentPage);
        } else {
            search(currentPage);
        }
        moviesContainer.scrollIntoView({ behavior: "smooth" });
    }
    });
    paginationEl.appendChild(nextBtn);
}