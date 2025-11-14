function updateClock() {
    const now = new Date();

    let hrs = String(now.getHours()).padStart(2, '0');
    let mins = String(now.getMinutes()).padStart(2, '0');
    let secs = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("hours").innerText = hrs;
    document.getElementById("minutes").innerText = mins;
    document.getElementById("seconds").innerText = secs;
}

setInterval(updateClock, 1000);
updateClock();
