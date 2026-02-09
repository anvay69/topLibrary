Library App
===========

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)


A simple client-side library application built with vanilla JavaScript. Users can add books, mark them as read/unread, and remove them from the library.

Features
--------

*   Add books using a modal form
*   Store books in an in-memory JavaScript object
*   Toggle read status for each book
*   Remove books from the library
*   Dynamic DOM updates using HTML templates

How It Works
------------

*   Books are stored in a JavaScript object called `myLibrary`
*   Each book is assigned a unique numeric ID
*   The `Book` constructor defines book properties
*   HTML `<template>` is used to render book cards
*   Event listeners handle add, remove, and toggle actions

Usage
-----

1.  Click the **Add** button to open the dialog
2.  Fill in the book details and submit the form
3.  The book appears in the library list
4.  Use the checkbox to toggle read status
5.  Use the remove button to delete a book

Notes
-----

*   No backend or persistence — data resets on page reload
*   Written as part of _The Odin Project_ curriculum
*   Uses modern browser features like `<dialog>`

Future Improvements
-------------------

*   Add localStorage support
*   Edit existing books
*   Improve accessibility and keyboard navigation