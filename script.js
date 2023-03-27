class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  displayBooks() {
    const bookList = document.getElementById("book-list");

    if (bookList == null) return;

    while (bookList.firstChild) {
      bookList.removeChild(bookList.firstChild);
    }

    for (const book of this.books) {
      const li = document.createElement("li");
      li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? "read" : "not read yet"}`;
      bookList.appendChild(li);
    }
  }
}

class Form {
  constructor() {
    this.form = document.getElementById("book-form");
    this.titleInput = document.getElementById("title");
    this.authorInput = document.getElementById("author");
    this.pagesInput = document.getElementById("pages");
    this.readInput = document.getElementById("read");
    this.addButton = document.querySelector("button");
    this.library = new Library();

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = this.titleInput.value;
      const author = this.authorInput.value;
      const pages = this.pagesInput.value;
      const read = this.readInput.checked;

      const book = new Book(title, author, pages, read);
      this.library.addBook(book);
      this.library.displayBooks();

      this.form.style.display = "none";

      // clear the form
      this.titleInput.value = "";
      this.authorInput.value = "";
      this.pagesInput.value = "";
      this.readInput.checked = false;

      this.addButton.style.display = "block";
    });
  }

  show() {
    this.form.style.display = "block";
    this.addButton.style.display = "none";
  }
}

const form = new Form();
