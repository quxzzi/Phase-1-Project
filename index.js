const url = 'https://binaryjazz.us/wp-json/genrenator/v1/genre/';

function getData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return Array.isArray(data) ? data : [data]; // Convert to an array if not already an array
    });
}

const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('resultContainer');

searchButton.addEventListener('click', () => {
  getData(url)
    .then(data => {
      displayGenres(data);
    })
    .catch(error => {
      console.log(error);
    });
});

function displayGenres(genres) {
  resultContainer.innerHTML = '';

  if (genres.length === 0) {
    const liElement = document.createElement('li');
    liElement.textContent = 'No genres found.';
    resultContainer.appendChild(liElement);
  } else {
    genres.forEach(genre => {
      const liElement = document.createElement('li');
      liElement.textContent = genre;
      resultContainer.appendChild(liElement);
    });
  }
}
resultContainer.addEventListener('mouseover', () => {
  resultContainer.style.backgroundColor = 'rgb(131, 131, 255)';
});
resultContainer.addEventListener('mouseout', () => {
  resultContainer.style.backgroundColor = '';
});

resultContainer.addEventListener('click', () => {
  // Get the content of resultContainer
  const containerContent = resultContainer.textContent;

  // Converts the Google search URL
  const searchQuery = encodeURIComponent(containerContent);
  const googleSearchURL = `https://www.google.com/search?q=${searchQuery}`;

  // Open a new tab with the Google search page
  window.open(googleSearchURL, '_blank');
});

