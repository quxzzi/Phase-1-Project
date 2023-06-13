const url = 'https://binaryjazz.us/wp-json/genrenator/v1/genre/';
// links API 
function getData(url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
//        data(genre => {
//            const markup = `<li>${genre.____}</li>`;
//            document.querySelector('resultContainer').insertAdjacentHTML('beforeend', markup);
//        }) I Don't know how to get the correct data from the API to put on the page. 
    })
};
// converts HTML to Js objects
const generateButton = document.getElementById('Generate');
const resultContainer = document.getElementById('resultContainer');

// event listener for button click
generateButton.addEventListener('click', async () => {
  try {
    const data = await getData(url);
    resultContainer.textContent = data;
  } catch (e) {
}
});
