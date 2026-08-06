let currentPage = 1;

function nextPage() {

    // Hide current page
    document.getElementById("page" + currentPage).classList.remove("active");

    currentPage++;

    // If last page reached
    if (currentPage > 9) {
        currentPage = 9;
    }

    // Show next page
    document.getElementById("page" + currentPage).classList.add("active");

}
