const btn = document.getElementById("actionBtn");
const message = document.getElementById("message");
const body = document.body;

btn.addEventListener("click", () => {
    // Pesan acak
    const greetings = [
        "Halo! 👋🏽",
        "Selamat datang! 👋🏽",
        "Kamu keren! ✨",
        "Keep coding! 💻"
    ];
    const randomMsg = greetings[Math.floor(Math.random() * greetings.length)];
    message.textContent = randomMsg;

    // Background acak
    const colors = [
        "linear-gradient(135deg, #EB4C4C, #FFE8DB)",
        "linear-gradient(135deg, #FF7070, #5682B1)",
        "linear-gradient(135deg, #FFA6A6, #739EC9)",
        "linear-gradient(135deg, #FFEDC7, #000000)"
    ];
    const randomBg = colors[Math.floor(Math.random() * colors.length)];
    body.style.background = randomBg;
});