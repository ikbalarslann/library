const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// eslint-disable-next-line no-unused-vars
function showForm() {
    document.getElementById("book-form").style.display = "block";
  }

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks() {
  const bookList = document.getElementById("book-list");

  if (bookList == null) return;

    while (bookList.firstChild) {
      bookList.removeChild(bookList.firstChild);
    }
     // eslint-disable-next-line no-plusplus
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];

    const li = document.createElement("li");
    li.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? "read" : "not read"}`;

    bookList.appendChild(li);
  }
  

 
}



document.getElementById("book-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  displayBooks();

  document.getElementById("book-form").style.display = "none";

   // clear the form
   document.getElementById("title").value = "";
   document.getElementById("author").value = "";
   document.getElementById("pages").value = "";
   document.getElementById("read").checked = false;
});

