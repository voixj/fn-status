window.addEventListener('DOMContentLoaded', (event) => {
    const leaksContainer = document.getElementById('leaks-container');

    const leaks = [
      {
        title: "No Leaks",
        content: "",
        date: "2023-09-11",
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