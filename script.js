const myLibrary = [];
const openForm = document.getElementById('addNewBookButton');
const submitBtn = document.getElementById('myForm');

openForm.addEventListener('click', showForm);
submitBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewBook();
    e.target.reset();
})

//to show new book form
function showForm() {
    const newBookForm = document.getElementById('myForm');

    if (newBookForm.classList.contains('show')) {
        newBookForm.classList.remove('show');
    } else {
        newBookForm.classList.add('show');
    }
}


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggle = function() {
    if (this.read === "yes") {
        this.read = "no";
    } else {
        this.read = "yes";
    }
}

function toggleRead (index) {
    myLibrary[index].toggle();
    renderBookList();
}

function addNewBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.querySelector('input[name="confirm"]:checked').value;

    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    renderBookList();
}

function renderBookList() {
    const libraryContainer = document.getElementById('book-list-container');
    libraryContainer.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookInfo = document.createElement('div')
        bookInfo.classList.add('book-info');
        let readStyle = book.read === "yes" ? "Read" : "Not Read Yet";
        bookInfo.innerHTML = `
            <button class="removeBtn" onclick="removeBook(${i})">x</button>
            <span class="book author">${book.author}</span>
            <span class="book title">${book.title}</span>
            <span class="book page">${book.pages}</span>
            <button type="button" class="toggle-read-btn" onclick="toggleRead(${i})">${readStyle}</button>
            
        `;

        libraryContainer.appendChild(bookInfo);
    }
    
}

//remove book from book list
function removeBook(index) {
    myLibrary.splice(index, 1);
    renderBookList();
}