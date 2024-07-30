const newBookBtn = document.getElementById('addNewBookButton');
const radioBtn = document.querySelectorAll('input[type="radio"]');

newBookBtn.addEventListener('click', () => {
    const formOn = document.getElementById('myForm');

    if (formOn.classList.contains('show')) {
        formOn.classList.remove('show');
    } else {
        formOn.classList.add('show');
    }
})

radioBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        
    })
})