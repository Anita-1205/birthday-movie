const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");

startBtn.addEventListener("click", function () {

    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");

});

continueBtn.addEventListener("click", function () {

    document.getElementById("page2").classList.add("hidden");
    document.getElementById("page3").classList.remove("hidden");

});
