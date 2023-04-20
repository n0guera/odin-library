let myLibrary = [];

const newBookButton = document.querySelector('#new-book-button');
const bookList = document.querySelector('#book-container');
const newBookForm = document.querySelector('#new-book-form');
const bookForm = document.querySelector('#book-form');

newBookButton.addEventListener('click', function () {
  newBookForm.style.cssText = 'display: block;';
});

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let pages = document.querySelector('#pages').value;
  let read = document.querySelector('#read').checked;

  let newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  showBooks();
  bookForm.reset();
  newBookForm.style.cssText = 'display: none;';
});

function showBooks() {
  myLibrary.forEach((newBook) => {
    const li = document.createElement('li');
    li.classList.add('book');

    let title = document.createElement('h5');
    title.textContent = `${newBook.title}`;
    li.appendChild(title);

    let author = document.createElement('p');
    author.textContent = `${newBook.author}`;
    li.appendChild(author);

    let pages = document.createElement('p');
    pages.textContent = `${newBook.pages}`;
    li.appendChild(pages);

    let read = document.createElement('p');
    read.textContent = `${newBook.read}`;
    li.appendChild(read);

    bookList.appendChild(li);
  });
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
