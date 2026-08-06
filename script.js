const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    // Hide intro
    document.getElementById("intro").style.display = "none";

    // Show birthday page
    document.getElementById("birthday").style.display = "flex";

});
