document.getElementById("openInvitation").addEventListener("click", function () {
    const video = document.getElementById("invitationVideo");
    video.pause();        // pause the video
    video.currentTime = 0; // rewind to beginning (optional)

    // If you're hiding the modal here, add that code too
    document.getElementById("invitationModal").style.display = "none";
});

function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("active");
}
document.querySelectorAll(".nav-links a").forEach(item => {
    item.addEventListener("click", () => {
        document.getElementById("menu").classList.remove("active");
    });
});

const modal = document.getElementById('invitationModal');
const openInvitationButton = document.getElementById('openInvitation');
const audio = document.getElementById('backgroundMusic');

window.addEventListener('load', () => {
    modal.classList.add('show');
});

openInvitationButton.addEventListener('click', () => {
    modal.classList.remove('show');
    audio.play();
    document.body.style.overflow = 'auto';
});

let isPlaying = true;

function toggleSound() {
    if (isPlaying) {
        audio.pause();
    } else {
        audio.play();
    }
    isPlaying = !isPlaying;
}

function startCountdown(targetDate) {
    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(timerInterval);
            document.querySelector('.countdown').innerHTML = "EXPIRED";
        }
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
}

// Set the countdown target date to "October 25, 2025"
const targetDate = new Date('October 25, 2025 00:00:00').getTime();
startCountdown(targetDate);