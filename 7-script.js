const moviesList = document.querySelector('#list_movies');
const filmsEndpoint = 'https://swapi-api.hbtn.io/api/films/?format=json';

if (moviesList) {
  fetch(filmsEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      data.results.forEach((film) => {
        const listItem = document.createElement('li');
        listItem.textContent = film.title;
        moviesList.appendChild(listItem);
      });
    })
    .catch(() => {
      const listItem = document.createElement('li');
      listItem.textContent = 'Movies unavailable';
      moviesList.appendChild(listItem);
    });
}

