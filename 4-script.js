const addItemTrigger = document.querySelector('#add_item');
const listContainer = document.querySelector('.my_list');

if (addItemTrigger && listContainer) {
  addItemTrigger.addEventListener('click', () => {
    const listItem = document.createElement('li');
    listItem.textContent = 'Item';
    listContainer.appendChild(listItem);
  });
}

