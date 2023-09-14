const challengesContainer = document.getElementById('challenges-container');

const challenges = [
    {title: "Challenge", description: "Bust through a closed door at different named locations (3)", icon: "icon_weekly.png"},
    {title: "Challenge", description: "Hit an opponent within 10 seconds of hiding in a bush", icon: "icon_weekly.png"},
    {title: "Challenge", description: "Travel distance in the air using item (750 METERS)", icon: "icon_weekly.png"},
    {title: "Challenge", description: "Accept a job at job board in different matches (5)", icon: "icon_weekly.png"},
    {title: "Challenge", description: "Deal damage to opponents from behind with SMG's or Assault Rifles (300 DAMAGE)", icon: "icon_weekly.png"},
    {title: "Challenge", description: "Assist in defeating bosses (3 TIMES)", icon: "icon_weekly.png"},
    {title: "Level Up", description: "Complete 5 WEEK 3 quest to unlock this week's trail and reward", icon: "icon_levelup.png"},
    {title: "Level Up Challenge", description: "Hit an enemy player with rocket ram ground crash", icon: "icon_levelup.png"}
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