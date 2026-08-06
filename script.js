// =========================
// CINEMATIC INTRO
// =========================

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startMovie);

function startMovie() {

    // Button animation
    gsap.to("#startBtn", {
        scale: 0.9,
        duration: 0.2
    });

    // Fade everything out
    gsap.to(".content", {
        opacity: 0,
        y: -80,
        duration: 1.5
    });

    // Zoom background
    gsap.to("#glow", {
        scale: 2,
        duration: 2
    });

    gsap.to("#stars", {
        opacity: 0,
        duration: 2
    });

    // Confetti burst
    confetti({
        particleCount: 150,
        spread: 80,
        origin: {
            y: 0.6
        }
    });

    // Show next scene
    setTimeout(() => {

        document.body.innerHTML = `

        <section id="scene2">

            <div class="scene2Content">

                <h3>✨ The Adventure Begins ✨</h3>

                <h1>Welcome Hero...</h1>

                <h2>Akshhh ❤️</h2>

                <p>

                This is only the beginning.

                Your real surprise is waiting ahead.

                </p>

                <button onclick="nextScene()">

                    Continue →

                </button>

            </div>

        </section>

        `;

    },1800);

}

function nextScene(){

    alert("Scene 2 complete! Next we'll build the Hero introduction.");

}
