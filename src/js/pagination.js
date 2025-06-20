let totalPages = 24;
let currentPage = 1;

const paginationEl = document.getElementById("pagination");

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
        renderPagination(currentPage,totalPages);
    });
    } else {
    button.disabled = true;
    }
    return button;
}

export function renderPagination(crntPage = 1, ttlPages = 24) {
    currentPage = crntPage;
    totalPages = ttlPages;
    paginationEl.innerHTML = "";

    // Previous
    const prevBtn = document.createElement("button");
    prevBtn.className = "nav-btn";
    prevBtn.textContent = "<";
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderPagination(currentPage,totalPages);
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
    } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
    } else {
        pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
    }

    pageNumbers.forEach(item => {
    if (item === "...") {
        paginationEl.appendChild(createPageButton("...", false, true, true));
    } else {
        paginationEl.appendChild(createPageButton(item, item === currentPage));
    }
    });

    // Next
    const nextBtn = document.createElement("button");
    nextBtn.className = "nav-btn";
    nextBtn.textContent = ">";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderPagination(currentPage,totalPages);
    }
    });
    paginationEl.appendChild(nextBtn);
}

renderPagination();