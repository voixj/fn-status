const challengesContainer = document.getElementById('challenges-container');

const challenges = [
    {title: "Soon", description: "Coming Soon...", icon: "weekly.png"}
];

challenges.forEach(challenge => {
    const challengeElement = document.createElement('div');
    challengeElement.classList.add("challenge");

    const iconElement = document.createElement('img');
    iconElement.classList.add("challenge-icon");
    iconElement.src = challenge.icon;
    challengeElement.appendChild(iconElement);

    const contentElement = document.createElement('div');
    contentElement.classList.add("challenge-content");

    const titleElement = document.createElement('h3');
    titleElement.classList.add("challenge-title");
    titleElement.textContent = challenge.title;
    contentElement.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add("challenge-description");
    descriptionElement.textContent = challenge.description;
    contentElement.appendChild(descriptionElement);

    challengeElement.appendChild(contentElement);
    challengesContainer.appendChild(challengeElement);
});