const blogPostsElement = document.getElementById('blog-posts');

const blogPosts = [
  {
    id: 8,
    title: 'Level Update',
    image: 'fn-status.gif',
    releaseDate: 'August 31 2023',
    content: '1. Add Level System To Unlock Section Or Anything Want Level, 2. Improve loader, 3. Add New Section Called Articles Or News',
    version: '3.6'
  },
  {
    id: 7,
    title: 'Small Update',
    image: 'weekly.png',
    releaseDate: 'August 19',
    content: 'Delete Language Selector, Add Weekly Challenge, Add Specials',
    version: '3.2'
  },
  {
    id: 6,
    title: 'Fast Update',
    image: 'grey.jpg',
    releaseDate: 'August 12',
    content: '1. Add More Options In Settings, 2. Fix Bugs',
    version: '3.1'
  },
  {
    id: 5,
    title: 'Mega Update',
    image: 'grey.jpg',
    releaseDate: 'August 9',
    content: 'This Update Is Big, 1. Change The News Style, 2. Change The Countdown Style, 3. Change Bews System, 4. Change Countdown System, 5. Fix Alot Of Bugs, 6. Add Specials, 7. Add New Section Called (Question And Answer), 8. Make The Navigation Bar Always Follow You, 9. Add New Option In Navigation Called (Menu)',
    version: '3.0'
  },
  {
    id: 4,
    title: 'Fast Update',
    releaseDate: 'August 1 2023',
    content: 'Fix Language Bug (You Cant Select Your Preferred Language) Add Animations, Improve The Settings, Improve The Countdown Section, Improve The News Section',
    version: '2.8'
  },
  {
    id: 3,
    title: 'Fix Bugs',
    image: 'august pack.webp',
    releaseDate: '30 July 2023',
    content: 'Fix Some Bugs, Add Window Event For Pc, Enable Support Button, Delete Backgrond Color Customize Option For Some Glitchs..',
    version: '2.7.1'
  },
  {
    id: 2,
    title: 'Update',
    image: 'girl.jpg',
    releaseDate: '21 July 2023',
    content: 'Add Some Specials, Fix Bugs',
    version: '2.5'
  },
  {
    id: 1,
    title: 'Update',
    releaseDate: '19 July 2023',
    content: 'Add Settings You Can customize the website, Fix Bugs, Add Blog',
    version: '2.0'
  }
];

// create a blog post element for each post

blogPosts.forEach(function(post) {
  if(post.image) {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML = `
    <img src="${post.image}">
    <div class="content">
    <h3>${post.title}</h3>
    <h6>Released In: ${post.releaseDate}</h6>
    <p>${post.content}</p>
    <h7>Version: ${post.version}</h7>
    </div>
    `;
    blogPostsElement.appendChild(postElement);
  } else {
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post');
    postElement.innerHTML = `
    <div class="content">
    <h3>${post.title}</h3>
    <h6>Released In: ${post.releaseDate}</h6>
    <p>${post.content}</p>
    <h7>Version: ${post.version}</h7>
    </div>
    `;
    blogPostsElement.appendChild(postElement);
  }
});