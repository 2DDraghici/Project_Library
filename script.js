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
const content = document.getElementById("content")
console.log(content)
const removeChilds = (parent) => {
    while (parent.lastChild != add_book ) {
        parent.removeChild(parent.lastChild);
    }
};

  //creating the books via the template
  const book_template = document.getElementById("book_card")
  var clon = book_template.content.cloneNode(true);
  console.log(clon.innerHTML)
  item = clon.querySelector("div");
  template_title = item.querySelector("#template_title")
  console.log(template_title.innerHTML + " modified structure")
  function createBookElement(book)
  {
    let newBook  = book_template.content.cloneNode(true);
    card = newBook.querySelector("div")
    template_title=card.querySelector("#template_title")
    console.log("this is the template title")
    console.log(template_title.innerHTML)
    template_author=card.querySelector("#template_author")
    template_pages=card.querySelector("#template_pages")
    template_pages_read=card.querySelector("#template_pages_read")
    // add input data
    template_title.innerHTML += book.title
    template_author.innerHTML += book.author
    template_pages.innerHTML += book.no_pages
    template_pages_read.innerHTML  += book.no_pages_read

    // add delete button
    delete_button = card.querySelector(".delete")
    console.log(delete_button)
    delete_button.addEventListener("click", (e) =>{
        console.log("Button element", e)
        content.removeChild(card)
      })
    
    content.appendChild(newBook)
    console.log(newBook)

  }

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
    // add book to content
    createBookElement(newBook)

    //close modal
    modal_container.classList.remove("modal_show")
}) 

