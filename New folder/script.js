// Global variables
let soundPlayed = false;
let targetDate = new Date(new Date().getFullYear() + 1, 0, 1, 0, 0, 0); // Default to next New Year
let countdownInterval;
let audioOffset = 0; // Seconds to offset audio start

// DOM Elements
const settingsModal = document.getElementById('settings-modal');
const settingsBtn = document.getElementById('settings-btn');
const closeSettingsBtn = document.getElementById('close-settings');
const saveSettingsBtn = document.getElementById('save-settings');
const testModeBtn = document.getElementById('test-mode');
const targetDatetimeInput = document.getElementById('target-datetime');
const audioOffsetInput = document.getElementById('audio-offset');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const fireworksContainer = document.getElementById('fireworks');
const countdownSound = document.getElementById('countdown-sound');

// Function to update current time
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('current-time').textContent = timeString;
}

// Function to update countdown
function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
        // Target reached
        document.getElementById('countdown').innerHTML = '<span class="text-yellow-400 text-6xl md:text-8xl font-bold text-glow col-span-2 md:col-span-4 animate-bounce">TIME\'S UP!</span>';
        showFireworks();
        clearInterval(countdownInterval); // Stop the countdown
        return;
    }

    // Play sound logic with offset
    // Default plays at 10s remaining. Offset adjusts this.
    // e.g. offset -1 means play at 11s remaining (start earlier).
    // e.g. offset +1 means play at 9s remaining (start later).
    const soundTriggerTime = 10000 - (audioOffset * 1000);

    if (timeDifference <= soundTriggerTime && timeDifference > 0 && !soundPlayed) {
        playSound();
        soundPlayed = true;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update DOM
    const countdownEl = document.getElementById('countdown');

    // Helper to create card HTML
    const createCard = (value, label) => `
        <div class="flex flex-col items-center number-card">
            <span class="text-4xl md:text-7xl font-bold font-mono text-glow">${value.toString().padStart(2, '0')}</span>
            <span class="text-xs md:text-sm uppercase tracking-wider mt-2 text-gray-300">${label}</span>
        </div>
    `;

    countdownEl.innerHTML = `
        ${createCard(days, 'Days')}
        ${createCard(hours, 'Hours')}
        ${createCard(minutes, 'Minutes')}
        ${createCard(seconds, 'Seconds')}
    `;
}

// Function to show fireworks
function showFireworks() {
    fireworksContainer.classList.remove('hidden');
}

// Function to hide fireworks
function hideFireworks() {
    fireworksContainer.classList.add('hidden');
}

// Function to toggle full screen
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
    } else {
        document.exitFullscreen();
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    }
}

// Function to play sound
function playSound() {
    countdownSound.currentTime = 0;
    countdownSound.play().catch(e => console.log("Audio play failed:", e));
}

// Settings Modal Logic
function openSettings() {
    // Set input to current target date
    const now = new Date();
    // Format for datetime-local: YYYY-MM-DDTHH:mm
    const offset = now.getTimezoneOffset() * 60000;
    const localISOTime = new Date(targetDate.getTime() - offset).toISOString().slice(0, 16);
    targetDatetimeInput.value = localISOTime;
    audioOffsetInput.value = audioOffset;

    settingsModal.classList.remove('hidden');
}

function closeSettings() {
    settingsModal.classList.add('hidden');
}

function saveSettings() {
    const newDate = new Date(targetDatetimeInput.value);
    if (isNaN(newDate.getTime())) {
        alert('Please select a valid date and time.');
        return;
    }

    targetDate = newDate;
    audioOffset = parseFloat(audioOffsetInput.value) || 0;

    resetCountdown();
    closeSettings();
    countdownSound.play().then(() => countdownSound.pause()).catch(e => console.log("Audio warm-up failed:", e));
}

function startTestMode() {
    const now = new Date();
    targetDate = new Date(now.getTime() + 15000); // 15 seconds from now
    audioOffset = parseFloat(audioOffsetInput.value) || 0;
    resetCountdown();
    closeSettings();
    countdownSound.play().then(() => countdownSound.pause()).catch(e => console.log("Audio warm-up failed:", e));
}

function resetCountdown() {
    soundPlayed = false;
    hideFireworks();

    // Clear existing interval if any
    if (countdownInterval) clearInterval(countdownInterval);

    // Restart interval - FASTER UPDATE RATE (100ms) for smoother sync
    updateCountdown(); // Update immediately
    countdownInterval = setInterval(() => {
        updateCurrentTime();
        updateCountdown();
    }, 100);
}

// Event Listeners
settingsBtn.addEventListener('click', openSettings);
closeSettingsBtn.addEventListener('click', closeSettings);
saveSettingsBtn.addEventListener('click', saveSettings);
testModeBtn.addEventListener('click', startTestMode);
fullscreenBtn.addEventListener('click', toggleFullScreen);
document.addEventListener('fullscreenchange', () => {
    fullscreenBtn.innerHTML = document.fullscreenElement ? '<i class="fas fa-compress"></i>' : '<i class="fas fa-expand"></i>';
});

// Close modal when clicking outside
settingsModal.addEventListener('click', (e) => {
    if (e.target === settingsModal) {
        closeSettings();
    }
});

// Initialize
updateCurrentTime();
resetCountdown();
