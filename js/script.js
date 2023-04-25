let myLibrary = [];

const newBookBtn = document.querySelector('#new-book-button');
const bookList = document.querySelector('#book-container');
const newBookForm = document.querySelector('#new-book-form');
const bookForm = document.querySelector('#book-form');

newBookBtn.addEventListener('click', function () {
  newBookForm.style.display = 'block';
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  bookForm.reset();
  newBookForm.style.display = 'none';
});

function showBooks() {
  bookList.textContent = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const li = document.createElement('li');
    li.classList.add('book');
    bookList.appendChild(li);

    let bookTitle = document.createElement('h4');
    bookTitle.textContent = myLibrary[i].title;
    li.appendChild(bookTitle);

    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = myLibrary[i].author;
    li.appendChild(bookAuthor);

    let bookPages = document.createElement('p');
    bookPages.textContent = myLibrary[i].pages;
    li.appendChild(bookPages);

    let bookRead = document.createElement('p');
    myLibrary[i].read
      ? (bookRead.textContent = 'Read')
      : (bookRead.textContent = 'Not read');
    li.appendChild(bookRead);

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'x';
    removeBtn.addEventListener('click', () => removeBook(i));
    li.appendChild(removeBtn);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  showBooks();
}

function addBookToLibrary() {
  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  showBooks();
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
