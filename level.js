const levelDisplay = document.getElementById('levelDisplay');
const levelButton = document.getElementById('level-button');

let level = parseInt(localStorage.getItem("level") || 0);
let xp = parseInt(localStorage.getItem("xp") || 0);
let xpReq = parseInt(localStorage.getItem("xpReq") || 100);

function addXP(){
    const minXP = 10;
    const maxXP = 50;
    const randomXP = Math.floor(Math.random() * (maxXP - minXP + 1) + minXP);
    xp += randomXP;

    while (xp >= xpReq){
        level++;
        xp -= xpReq;
        xpReq += 50;
        levelUp();
    }

    localStorage.setItem("level", level);
    localStorage.setItem("xp", xp);
    localStorage.setItem("xpReq", xpReq);

    updateHUD();
}

setInterval(addXP, 2000);

function levelUp(){
    // add reward here
}

function updateHUD(){
    document.getElementById("level").textContent = level;
    document.getElementById("xp").textContent = xp;
    document.getElementById("xpReq").textContent = xpReq;
}

function resetLevel() {
  level = 0;
  xpReq = 0;
  xp = 0
  savedTheme = 'dark';
}

// Check If User Have Same Or High Of The Level Required Or Not

function checkForLevel() {
  const themeSelect = document.getElementById('theme-select')
  const themeTitle = document.getElementById('theme-title');
  const leaksSection = document.getElementById('leaks-container');
  const leaksTitle = document.getElementById('leaks-title');
  
  if(level >= 20) {
    leaksSection.style.display = 'block';
    leaksTitle.innerHTML = 'Leaks';
  } else {
    leaksSection.style.display = 'none';
    leaksTitle.innerHTML = 'Leaks... Required Level 20 To Unlock'; 
  }
  
  if(level >= 30) {
    themeSelect.style.display = 'block';
    themeTitle.innerHTML = 'Theme Selector'; 
  } else {
    themeSelect.style.display = 'none';
    themeTitle.innerHTML = 'Theme Selector, Required Level 30 To Unlock';
  }
}

setInterval(checkForLevel, 1000);