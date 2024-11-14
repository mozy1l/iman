onload = () =>{
    document.body.classList.remove("container");
};



document.addEventListener("DOMContentLoaded", () => {
    // Functie om de huidige dag en tijd te tonen
    const updateTime = () => {
        const now = new Date();

        const day = now.toLocaleDateString('nl-NL', { weekday: 'long' });
        const time = now.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        document.getElementById("current-day").textContent = `✨ ${day} ✨`;
        document.getElementById("current-time").textContent = ` ${time} `;
    };

    updateTime();
    setInterval(updateTime, 1000);
});



