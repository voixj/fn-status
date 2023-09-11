const openSettingsButton = document.getElementById('open-settings-button');
const settingsPopup = document.getElementById('settings-popup');

openSettingsButton.addEventListener('click', function() {
  settingsPopup.classList.add('open');
  openSettingsButton.style.opacity = 0;
  levelDisplay.style.bottom = '50%';
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;

  // Check if the clicked element is outside the settings popup
  if (!settingsPopup.contains(targetElement) && targetElement !== openSettingsButton) {
    settingsPopup.classList.remove('open');
    openSettingsButton.style.opacity = 1;
    levelDisplay.style.bottom = '20px';
  }
});

// Website Music
const backgroundMusicElement = document.getElementById('background-music');
const toggleSwitchElement = document.getElementById('toggle-switch');
const musicStatusElement = document.getElementById('musicStatus');
const timeLeftElement = document.getElementById('time-left');
const progressBarElement = document.querySelector('.progress');
const progressPercentElement = document.getElementById('progress-percent'); // Get the progress percentage element

backgroundMusicElement.addEventListener('timeupdate', function() {
  const currentTime = backgroundMusicElement.currentTime;
  const duration = backgroundMusicElement.duration;
  const timeLeft = duration - currentTime;
  const minutesLeft = Math.floor(timeLeft / 60);
  const secondsLeft = Math.floor(timeLeft % 60);
  timeLeftElement.innerHTML = `Time Left: ${minutesLeft}:${secondsLeft < 10 ? '0' + secondsLeft : secondsLeft}`;

  // Calculate the progress of the song as a percentage
  const progress = (currentTime / duration) * 100;
  progressBarElement.style.width = `${progress}%`;
  progressPercentElement.innerHTML = `${Math.round(progress)}%`; // Update the progress percentage element
});

toggleSwitchElement.addEventListener('change', function() {
  if (toggleSwitchElement.checked) {
    backgroundMusicElement.play();
    musicStatusElement.innerHTML = 'Status: Playing';
  } else {
    backgroundMusicElement.pause();
    musicStatusElement.innerHTML = 'Status: Stopped';
  }
});

function refresh() {
  location.reload();
}

// Change Text Size
const textInput = document.getElementById('text-input');
const fontSizeSlider = document.getElementById('font-size');
const storedFontSize = localStorage.getItem('font-size');
const fontSizeText = document.getElementById('font-size-text');

if (storedFontSize) {
  fontSizeSlider.value = storedFontSize;
  updateFontSize();
}

fontSizeSlider.addEventListener('input', function() {
  updateFontSize();
  
  localStorage.setItem('font-size', fontSizeSlider.value);
});

function updateFontSize() {
  const elements = document.getElementsByTagName('*');
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = `${fontSizeSlider.value}px`;
    fontSizeText.innerHTML = `${fontSizeSlider.value}px`;
  }
}

window.addEventListener('load', function() {
  updateFontSize();
});

// Theme System
document.addEventListener("DOMContentLoaded", function() {
  // Retrieve the saved theme from localStorage
  var savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    // Apply the saved theme
    var body = document.body;
    body.setAttribute("data-theme", savedTheme);
    document.getElementById("theme-select").value = savedTheme;
  }
});

function changeTheme() {
  var theme = document.getElementById("theme-select").value;
  var body = document.body;

  // Store the selected theme in localStorage
  localStorage.setItem("theme", theme);

  // Apply the selected theme
  body.setAttribute("data-theme", theme);
}