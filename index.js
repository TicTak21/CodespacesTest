"use strict";

class Book {
  constructor(title, author, timestamp) {
    this.title = title;
    this.author = author;
    this.timestamp = timestamp;
  }
}

class BookShelf {
  constructor() {
    this.books = [];
  }

  printBooks() {
    this.books.map(({ title, author, timestamp }) =>
      console.log(
        `${title} by ${author} - ${new Date(timestamp).toLocaleDateString()}`
      )
    );
  }

  addBook(book) {
    const newBook = {
      ...book,
      timestamp: book.timestamp.getTime(),
      id: this.books.length,
    };

    this.books.push(newBook);
  }
}

const book1 = new Book(
  "Burning Daylight",
  "Jack London",
  new Date("12-12-1910")
);
const book2 = new Book("11/22/63", "Stephen King", new Date("11-22-1963"));

const bookShelf = new BookShelf();

bookShelf.addBook(book1);
bookShelf.addBook(book2);

bookShelf.printBooks();
