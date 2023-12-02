function updateTime() {
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = now.toDateString();

    document.getElementById('clock').innerText = timeString;
    document.getElementById('date').innerText = dateString;
}

function updateClock() {
    updateTime();
    setInterval(updateTime, 1000);
}

updateClock();
