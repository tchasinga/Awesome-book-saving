import Book from './modules/Book.js';
import UI from './modules/UI.js';
import Store from './modules/Store.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

// Event : display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event : add a book

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent actual submit
  e.preventDefault();
  // get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  // instantiate book

  const book = new Book(title, author);
  // add book to books array
  UI.addBookTolist(book);

  // add book to local storage
  Store.addBook(book);

  // clear fields after saving
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
});

// Event : remove a book
document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);

  // remove book from local storage
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
});

const bookSection = document.getElementById('book-container');
const formSection = document.getElementById('form-section');
const contactSection = document.getElementById('contact-section');

const bookBtn = document.getElementById('list-link');
const formBtn = document.getElementById('book-link');
const contactBtn = document.getElementById('contact-link');

// Event listeners to show/hide sections
bookBtn.addEventListener('click', (event) => {
  event.preventDefault();
  bookSection.classList.remove('hidden');
  formSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

formBtn.addEventListener('click', (event) => {
  event.preventDefault();
  formSection.classList.remove('hidden');
  bookSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

contactBtn.addEventListener('click', (event) => {
  event.preventDefault();
  contactSection.classList.remove('hidden');
  formSection.classList.add('hidden');
  bookSection.classList.add('hidden');
});

// Date element
setInterval(() => {
  const date = DateTime.now();
  document.getElementById('date').innerHTML = date.toLocaleString(
    DateTime.DATETIME_MED,
  );
}, 1000);