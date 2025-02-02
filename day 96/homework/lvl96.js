let book = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    genre: "Fantasy",
    price: 19.99
  };
  
  console.log(book);
  console.log(book.title);
  console.log(book["author"]); 
  
  console.log(
    "The book " + book.title + " was written by " + book.author + " in " + book.year + 
    ". It belongs to the " + book.genre + " genre and costs $" + book.price + "."
  );
  