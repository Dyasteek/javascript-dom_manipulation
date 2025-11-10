const characterContainer = document.querySelector('#character');
const characterEndpoint = 'https://swapi-api.hbtn.io/api/people/5/?format=json';

if (characterContainer) {
  fetch(characterEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      characterContainer.textContent = data.name;
    })
    .catch(() => {
      characterContainer.textContent = 'Character unavailable';
    });
}

