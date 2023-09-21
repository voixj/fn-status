window.addEventListener('DOMContentLoaded', (event) => {
    const leaksContainer = document.getElementById('leaks-container');

    const leaks = [
      {
        title: "New Design",
        content: "New Design For Interface!",
        image: "leak1.jpeg",
        date: "2023-09-21",
      },
      {
        title: "New Design",
        content: "New Design For Item Shop",
        image: "leak3.jpeg",
        date: "2023-09-21"
      },
      {
        title: "",
        content: "",
        image: "leak4.jpeg",
        date: "2023-09-21"
      },
      {
        title: "Photo Taking",
        content: "Interface of the new Photo Taking feature!",
        image: "leak5.jpeg",
        date: "2023-09-21"
      },
      {
        title: "LEGO COOPERATION",
        content: "You’ll be able to log into Epic Games with your LEGO account soon!",
        image: "leak2.jpeg",
        date: "2023-09-21"
      },
    ];

    leaks.forEach(leak => {
        const leakElement = document.createElement('div');
        leakElement.classList.add('leak');
        
        if (leak.image) {
            const imageElement = document.createElement('img');
            imageElement.src = leak.image;
            leakElement.appendChild(imageElement);
        }

        const titleElement = document.createElement('h2');
        titleElement.textContent = leak.title;

        const contentElement = document.createElement('p');
        contentElement.textContent = leak.content;

        const dateElement = document.createElement('p');
        dateElement.classList.add('date');
        dateElement.textContent = "Published In: " + leak.date;

        leakElement.appendChild(titleElement);
        leakElement.appendChild(contentElement);
        leakElement.appendChild(dateElement);

        leaksContainer.appendChild(leakElement);
    });
});