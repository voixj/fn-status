let serverOnline = true;
let stopReason = 'Working On Update';

const loadingOverlay = document.getElementById('loading-overlay');
const loadInfo = document.getElementById('load-info');
const loadingProgress = document.getElementById('loading-progress');
const loadingBar = document.getElementById('loading-bar');
const loadingPercent = document.getElementById('loading-percent');
const loadingText = document.getElementById('loading-text');
const loadStatus = document.getElementById('load-status');

const factContainer = document.getElementById('fact-container');

const facts = [
  'You can see all the news about Fortnite!',
  'You can see all countdown about Fortnite!',
  'Don\'t forget to customize the website!',
  'Check the blog every update to see what\'s new in website!',
  'If You Have Question, Go To Question And Answer Section!',
  'You Can See Your Weekly Challenges!',
  'We Everytime Update The Website!',
  'Check The Leaks For Know What Upcoming To Fortnite',
  'Check The News Of Fortnite, Its have every update happend in Fortnite!',
  'Level Up To Unlock Sections Or Something Want Levels!'
];

function simulateLoading() {
  let progress = 0;
  let interval = setInterval(function() {
    progress += Math.floor(Math.random() * 20);
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(function() {
        loadingOverlay.style.opacity = 0;
        setTimeout(function() {
          loadingOverlay.style.display = 'none';
        }, 500)
      }, 3000);
    }
    loadingProgress.style.width = `${progress}%`;
    loadingPercent.textContent = `${progress}%`;

    // Update loading text based on progress
    if (progress <= 10) {
      loadingText.textContent = 'Loading data...';
    } else if (progress <= 20) {
      loadingText.textContent = 'Loading images...';
    } else if (progress <= 30) {
      loadingText.textContent = 'Loading scripts...';
    } else if (progress <= 60) {
      loadingText.textContent = 'Loading settings...';
    } else if (progress <= 65) {
      loadingText.textContent = 'Loading web song...';
    } else if (progress <= 75) {
      loadingText.textContent = 'Loading news...';
    } else if (progress <= 80) {
      loadingText.textContent = 'Loading leaks...';
    } else if (progress <= 99){
      loadingText.textContent = 'Finishing up...';
    } else if (progress === 100){
      loadingText.textContent = 'Welcome!';
      factContainer.style.display = 'none';
      loadingProgress.style.display = 'none';
      loadingBar.style.display = 'none';
    }
  }, 500);
}

// Display loading screen when page loads
window.addEventListener('load', function() {
  if (serverOnline !== 'undefined' && serverOnline === true) {
    simulateLoading();
    loadStatus.innerHTML = 'Server Status: Online.'
  } else {
    loadInfo.style.transform = "translateY(-100%)";
    setTimeout(function() {
      factContainer.style.display = 'none';
      loadingProgress.style.display = 'none';
      loadingOverlay.style.background = '#000';
      loadingBar.style.display = 'none';
    
      loadingText.innerHTML = `Reason: ${stopReason}.`;
      loadStatus.innerHTML = 'Server Status: Offline.'
      loadInfo.style.transform = "translateY(0%)";
    }, 3000);
    
  }
});

function displayRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const randomFact = facts[randomIndex];
  factContainer.textContent = randomFact;
}

// Display random fact when page loads
window.addEventListener('load', function() {
  displayRandomFact();
});