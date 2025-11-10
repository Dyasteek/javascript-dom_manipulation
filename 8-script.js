document.addEventListener('DOMContentLoaded', () => {
  const helloContainer = document.querySelector('#hello');
  const helloEndpoint = 'https://hellosalut.stefanbohacek.com/?lang=fr';

  if (!helloContainer) {
    return;
  }

  fetch(helloEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      helloContainer.textContent = data.hello;
    })
    .catch(() => {
      helloContainer.textContent = 'Translation unavailable';
    });
});

