function updateCountdown() {
    const currentTime = new Date();
    const targetDate = new Date("2024-02-14");

    const difference = targetDate - currentTime;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("countdown").innerText = days + " days until Valentine's Day!";
}

// Initial call to update countdown
updateCountdown();

// Update countdown every second
setInterval(updateCountdown, 1000);
