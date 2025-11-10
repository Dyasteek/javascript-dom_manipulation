const header = document.querySelector('header');
const redHeader = document.querySelector('#red_header');

if (header && redHeader) {
  redHeader.addEventListener('click', () => {
    header.classList.add('red');
  });
}

