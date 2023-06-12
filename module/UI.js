import Store from './Store';

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookTolist(book));
  }

  static addBookTolist(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td><span id="name">${book.title}</span> by ${book.author}</td>
      <td><button class="delete">remove</button></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
}

export default UI;
