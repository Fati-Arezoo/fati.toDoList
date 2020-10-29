const form = document.querySelector('#form');
const input = document.querySelector('#input');
const list = document.querySelector('.list');

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input.value == "") {
        const error = document.querySelector('.error');
        error.style.display = 'flex';

        setTimeout(function () {
            error.style.display = 'none';
        }, 3000)
    }

    /* Create li*/
    const li = document.createElement('li');
    li.classList.add('list-item');


    /* create p element */
    const p = document.createElement('p');
    p.appendChild(document.createTextNode(input.value))
    li.appendChild(p)


    p.classList.add('item-text')
    li.appendChild(p)

    const icon = document.createElement('div');
    li.appendChild(icon)

    /* Create i*/
    const i = document.createElement('i');
    i.classList.add('far', 'fa-check-circle')
    const iOne = document.createElement('i');
    iOne.classList.add('far', 'fa-edit')
    const iTwo = document.createElement('i');
    iTwo.classList.add('far', 'fa-times-circle')


    icon.appendChild(i)
    icon.appendChild(iOne)
    icon.appendChild(iTwo)
    list.appendChild(li)


    input.value = "";
})


list.addEventListener("click", function (event) {


    if (event.target.classList.contains('fa-times-circle')) {
        const parnetId = event.target.parentElement.parentElement;
        list.removeChild(parnetId)
    }

    if (event.target.classList.contains('fa-edit')) {
        const parentIdList = event.target.parentElement.parentElement;
        const childIdList = parentIdList.firstChild.textContent;
        input.value = childIdList;
        parentIdList.remove()
    }

    if (event.target.classList.contains('fa-check-circle')) {
        const text = event.target.parentElement.parentElement.firstChild;
        text.classList.toggle('done');
    }

})


const clearButton = document.querySelector('.clearbutton');
clearButton.addEventListener("click", function (event) {
    list.innerHTML = '';

})


