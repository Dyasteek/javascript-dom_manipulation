const updateHeaderTrigger = document.querySelector('#update_header');
const header = document.querySelector('header');

if (updateHeaderTrigger && header) {
  updateHeaderTrigger.addEventListener('click', () => {
    header.textContent = 'New Header!!!';
  });
}

