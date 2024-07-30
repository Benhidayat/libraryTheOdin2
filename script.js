const newBookBtn = document.getElementById('addNewBookButton');


newBookBtn.addEventListener('click', () => {
    const formOn = document.getElementById('myForm');

    if (formOn.classList.contains('show')) {
        formOn.classList.remove('show');
    } else {
        formOn.classList.add('show');
    }
})