class Book {
    constructor(title, author, no_pages, no_pages_read) {
        this.title = title
        this.author = author
        this.no_pages = no_pages
        this.no_pages_read = no_pages_read
    }
}

const modal_container = document.getElementById("modal_container")
const add_book = document.getElementById("add_book")
const close_modal = document.getElementById("close_modal")

// closing and opening the modal
add_book.addEventListener('click', ()=>
{
    modal_container.classList.add("modal_show")
})
close_modal.addEventListener('click', (e)=>
{
    e.preventDefault()
    modal_container.classList.remove("modal_show")
})

// displaying the books
const content = getElementById("content")
const removeChilds = (parent) => {
    while (parent.lastChild != add_book ) {
        parent.removeChild(parent.lastChild);
    }
};
  //creating the books via the template
  const book_template = document.getElementById("book_card")
  function createBookElement(title,author, pages, pages_read)

//Adding the books
let myLibrary = []

// getting the input of the form

const submit_book = document.getElementById("submit_book")
submit_book.addEventListener('click',(e)=>
{
    e.preventDefault()

    //get the values of the input
    let book_title = document.getElementById("form_title").value
    let book_author = document.getElementById("form_author").value
    let book_pages = document.getElementById("form_pages").value
    let book_pages_read = document.getElementById("form_pages_read").value

    //add the book to the libray
    let newBook = new Book(book_title,book_author,book_pages,book_pages_read)
    myLibrary.push(newBook)
    console.log(myLibrary)

}) 


let book1 = new Book("123","123","123","123")
console.log(book1)