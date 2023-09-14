// استيراد العناصر من الواجهة
const countdownContainer = document.getElementById("countdownContainer");

// إنشاء مصفوفة العد التنازلي
const countdownData = [
  {
    title: "Season Ends",
    description: "Fortnite Chapter 4 Season 4 Ends",
    endTime: "2023-11-03 10:00:00",
    image: "Last_resort.jpg"
  },
  {
    title: "Next Update",
    description: "Next Update Is v26.20 Release",
    endTime: "2023-09-26 10:00:00",
    image: "season-banner.png"
  },
  {
    title: "Next Crew Pack",
    description: "Release Next Crew Pack",
    endTime: "2023-10-01 03:00:00",
    image: "crew_pack.jpeg"
  },
  {
    title: "Fortnite Birthday",
    description: "Fortnite Birthday Coming",
    endTime: "2023-09-23",
    image: "birthday.webp"
  },
  {
    title: "Fortnitemares",
    description: "Halloween Release",
    endTime: "2023-10-10",
    image: "fortnitemares.jpg"
  }
];

countdownData.forEach((countdown) => {
  const countdownElement = document.createElement("div");
  countdownElement.className = "countdown";

  if (countdown.image) {
    const imageElement = document.createElement("img");
    imageElement.src = countdown.image;
    countdownElement.appendChild(imageElement);
  }

  const titleElement = document.createElement("h2");
  titleElement.innerText = countdown.title;
  countdownElement.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  let descriptionText = countdown.description;

  if (countdown.endTime) {
    descriptionText += " In: " + countdown.endTime;
  }

  descriptionElement.innerText = descriptionText;
  countdownElement.appendChild(descriptionElement);

  const countdownTimeElement = document.createElement("div");
  countdownTimeElement.className = "countdown-time";
  countdownElement.appendChild(countdownTimeElement);

  const daysElement = document.createElement("span");
  const hoursElement = document.createElement("span");
  const minutesElement = document.createElement("span");
  const secondsElement = document.createElement("span");

  countdownTimeElement.appendChild(daysElement);
  countdownTimeElement.appendChild(hoursElement);
  countdownTimeElement.appendChild(minutesElement);
  countdownTimeElement.appendChild(secondsElement);

  const countdownInterval = setInterval(() => {
    if (!countdown.endTime) {
      clearInterval(countdownInterval);
      daysElement.innerText = "";
      hoursElement.innerText = "";
      minutesElement.innerText = "";
      secondsElement.innerText = "";
      return;
    }

    const endTime = new Date(countdown.endTime).getTime();
    const now = new Date().getTime();
    const timeDifference = endTime - now;

    if (timeDifference <= 0) {
      clearInterval(countdownInterval);
      daysElement.innerText = "";
      hoursElement.innerText = "";
      minutesElement.innerText = "";
      secondsElement.innerText = "";
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    daysElement.innerText = days + " Days, ";
    hoursElement.innerText = hours + " Hours, ";
    minutesElement.innerText = minutes + " Minutes, ";
    secondsElement.innerText = seconds + " Seconds ";
  }, 1000);

  countdownContainer.appendChild(countdownElement);
});