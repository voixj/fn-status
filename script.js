function refresh() {
  location.reload()
}

window.addEventListener('load', function(event) {
  event.preventDefault();
});

// idk
const textElement = document.getElementById('text');
const texts = [
  "And",
  "WTF, This message shouldn't appear",
  "Countdowns",
  "News",
  "Challenges",
  "Leaks",
];
let index = 0;
let currentText = "Loading";

function typeText() {
    if (index < currentText.length) {
        textElement.textContent += currentText.charAt(index);
        index++;
        setTimeout(typeText, 200); // Adjust typing speed here
    } else {
        setTimeout(deleteText, 1200); // Adjust delay before deleting text here
    }
}

function deleteText() {
    const textLength = textElement.textContent.length;
    if (textLength === 0) {
        index = 0;
        currentText = getRandomText();
        setTimeout(typeText, 200); // Restart typing
    } else {
        textElement.textContent = textElement.textContent.slice(0, -1);
        setTimeout(deleteText, 100); // Adjust deleting speed here
    }
}

function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

currentText = getRandomText();
typeText();

// Username
function saveUsername() {
  var username = document.getElementById("username").value;
  localStorage.setItem("username", username);
  alert("Username saved successfully!");
}

function onUpdate() {
  const usernameDisplay = document.getElementById('uname');
  usernameDisplay.textContent = localStorage.getItem("username");
}

setInterval(onUpdate, 500)

function createTxtFile() {
  const content = "Username: " + localStorage.getItem("username") + "Level: " +
  localStorage.getItem('level');
  const filename = "example.txt";
  
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  
  document.body.appendChild(element);
  
  element.click();
  
  document.body.removeChild(element);
}