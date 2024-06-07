// script.js
document.getElementById('name-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    if (name) {
        const nameList = document.getElementById('name-list');
        const listItem = document.createElement('li');
        listItem.textContent = name;
        nameList.appendChild(listItem);
        nameInput.value = '';
    }
});
