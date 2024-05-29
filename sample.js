document.addEventListener("DOMContentLoaded", function() {
    const selectHead = document.querySelector(".selectDrop");
    const ul =document.querySelector(".list-items");

    selectHead.addEventListener("click", function() {
        ul.classList.toggle("show");
    })
    const li = document.querySelectorAll(".list-name");
    li.forEach(item => {
        item.addEventListener("click", function() {
            const check = item.querySelector(".check-box i");
            check.classList.toggle("checked");
        })

    })

});