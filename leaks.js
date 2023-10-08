window.addEventListener('DOMContentLoaded', (event) => {
    const leaksContainer = document.getElementById('leaks-container');

    const leaks = [
      {
        title: "Halloween Event",
        content: "Halloween Event Coming In 10 October!",
        image: "leak1.jpg",
        date: "2023-10-08",
      },
      {
        title: "Halloween Event",
        content: "Halloween Lobby Background",
        image: "leak2.jpeg",
        date: "2023-10-08"
      },
      {
        title: "Rank Rewards",
        content: "New Rank Rewards",
        image: "leak3.jpeg",
        date: "2023-10-08"
      },
      {
        title: "New weapon",
        content: "Its Availabled!",
        image: "leak4.jpeg",
        date: "2023-10-08"
      },
      {
        title: "New FNCS Skins",
        content: "New FNCS Skins, Its Coming Soon To Item Shop!",
        image: "leak5.jpeg",
        date: "2023-10-08"
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