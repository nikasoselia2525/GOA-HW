const library = {
    name: "Library",
    location: "Rustavi",
    books: [
        {
            title: "cnobili xuteuli",
            author: "giorgi giorgadze",
            year: 1927
        },
        {
            title: "cnobili otxeuli",
            author: "giorgi natrosvili",
            year: 1926
        },
        {
            title: "cnibili sameuli",
            author: "giorgi kapanadze",
            year: 1925
        }
    ],
    
    listBooks: function() {
        for (let i = 0; i < this.books.length; i++) {
            var book = this.books[i];
            console.log(
                "This book's title is \"" + book.title + "\", written by " + book.author + 
                " in " + book.year + ". You can find this book at " + this.name + 
                ", located in " + this.location + "."
            );
        }
    }
};

library.listBooks();
