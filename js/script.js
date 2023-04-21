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
  myLibrary.forEach((newBook, index) => {
    const li = document.createElement('li');
    li.classList.add('book');

    let bookTitle = document.createElement('h4');
    bookTitle.textContent = `${newBook.title}`;
    li.appendChild(bookTitle);

    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = `${newBook.author}`;
    li.appendChild(bookAuthor);

    let bookPages = document.createElement('p');
    bookPages.textContent = `${newBook.pages}`;
    li.appendChild(bookPages);

    let bookRead = document.createElement('p');
    newBook.read
      ? (bookRead.textContent = 'Read')
      : (bookRead.textContent = 'Not read');
    li.appendChild(bookRead);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.addEventListener('click', () => removeBook(index));
    li.appendChild(removeButton);

    bookList.appendChild(li);
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  const bookElements = document.querySelectorAll('.book');
  bookElements[index].remove();
  showBooks();
}

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
