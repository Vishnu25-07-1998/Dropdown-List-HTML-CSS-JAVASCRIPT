document.addEventListener('DOMContentLoaded', function() {
    const droptext = document.querySelector('.drop-text');
    const ul = document.querySelector('ul');
    droptext.addEventListener('click', function() {
        ul.classList.toggle('show');
    })
    const listItems = document.querySelectorAll(".list-text");
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            const checkbox = item.querySelector(".checkBox i");
            checkbox.classList.toggle('checked');
        })
    })
})