const newsData = [
  {
    title: 'Update',
    content: 'The Site Has Been Updated And Add New Things!',
    image: 'girl.jpg',
    link: 'blog.html'
  },
];

function createNewsSection(title, content, imageSrc, link) {
  const newsContainer = document.getElementById('news-container');
  const newsCard = document.createElement('div');
  newsCard.classList.add('news-card');
  
  if (imageSrc) {
    const newsImage = document.createElement('img');
    newsImage.classList.add('news-image');
    newsImage.src = imageSrc;
    newsImage.alt = title;
    newsCard.appendChild(newsImage);
  }
  
  const newsTitle = document.createElement('div');
  newsTitle.classList.add('news-title');
  newsTitle.textContent = title;
  
  const newsContent = document.createElement('div');
  newsContent.classList.add('news-content');
  newsContent.textContent = content;
  
  newsCard.appendChild(newsTitle);
  newsCard.appendChild(newsContent);
  
  if (link) {
    const newsButton = document.createElement('a');
    newsButton.classList.add('news-button');
    newsButton.textContent = 'More Details';
    newsButton.href = link;
    newsCard.appendChild(newsButton);
  }
  
  newsContainer.appendChild(newsCard);
}

// Display news sections when the page loads
window.addEventListener('load', function() {
  for (let i = 0; i < newsData.length; i++) {
    const { title, content, image, link } = newsData[i];
    createNewsSection(title, content, image, link);
  }
});