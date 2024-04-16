function fetchBooks() {

  return fetch("https://anapioficeandfire.com/api/books")
    .then(res => res.json())
    .then(books => {
      renderBooks(books);
      return books; 
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks().then(books => {
    const fifthBook = books[4].name;
    console.log("The 5th book in the series:", fifthBook);

    const characterCount = books.reduce((totalChars, book) => totalChars + book.characters.length, 0);
    const character1031 = characterCount >= 1031 ? books.find(book => book.characters.length >= 1031).name : "Not found";
    console.log("The 1031st character in the series:", character1031);
    const totalPages = books.reduce((total, book) => total + book.numberOfPages, 0);
    console.log("The total number of pages of all the books:", totalPages);
  });
});
