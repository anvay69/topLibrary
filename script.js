console.log("Script Attached");

// adding initial listeners
let dialog = document.querySelector('dialog');
let add = document.querySelector(".add-button");
let close_button = document.querySelector('#close-button');

add.addEventListener('click', () => {
    dialog.showModal();
});

close_button.addEventListener('click', () => {
    dialog.close();
});

dialog.addEventListener('submit', () => {
    let form = dialog.querySelector('form');
    let formData = new FormData(form);
    let data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    addToLibrary(data);
});

dialog.addEventListener('cancel', () => {
    console.log("Cancel event happened");
})


// the original implementation in TOP asked me to use an array to store the list of Books
// I'm gonna try it and use a dictionary instead, I might remove or comment out the code for array storage
const myLibrary = {} // map id to books
let currId = 0;


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


Book.prototype.info = function() {
    // get info about a book
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
}


function toTitleCase(str) {
    // convert string to title case
    return str.toLowerCase().split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}


function removeBook() {
    // Callback for delete button, removes a book from database and dom
    let index = this.getAttribute("data-index");
    document.querySelector(`.card[data-index='${index}'`).remove();
    delete myLibrary[index];

    if (Object.keys(myLibrary).length == 0)
        document.querySelector(".so-empty").style.display = "default";
}


function toggleReadStatus() {
    // Callback for toggle, flips the read status of a book
    let index = this.getAttribute("data-index");
    let readStatus = myLibrary[index].read;
    myLibrary[index].read = readStatus ? false : true;
}


function addToLibrary(data) {
    // extract the data for easier syntax
    let title = data["new-title"];
    let author = data["new-author"];
    let pages = Number(data["new-pages"]);
    let read = Boolean(data["new-read"]);
    
    // every book will have unique index
    let newBook = new Book(title, author, pages, read);
    let idx = currId;
    myLibrary[idx] = newBook;
    currId += 1;

    if (idx == 0) document.querySelector('.so-empty').style.display = "none";
    
    // setting up the dom time
    let container = document.querySelector('.books-list');
    let template = document.querySelector('template');
    let newNode = document.importNode(template.content, true);
    let remove_button = newNode.querySelector('.remove-button');
    let read_toggle = newNode.querySelector('#read-toggle');
    
    // setting data index and contents
    newNode.querySelector('.card').setAttribute("data-index", idx);
    newNode.querySelector('.title').textContent = toTitleCase(title);
    newNode.querySelector('.author').textContent = toTitleCase(author);
    newNode.querySelector('.pages').textContent = pages;

    remove_button.setAttribute('data-index', idx);
    read_toggle.setAttribute('data-index', idx);
    read_toggle.checked = read;
    
    // click listeners
    read_toggle.addEventListener('click', toggleReadStatus);
    remove_button.addEventListener('click', removeBook);

    // all done, add to dom
    container.appendChild(newNode);
}
