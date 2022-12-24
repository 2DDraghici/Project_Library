function Book(title,author,no_pages,no_pages_read)
{
    this.title = title
    this.author = author
    this.no_pages = no_pages
    this.no_pages_read = no_pages_read
}

const modal_container = document.getElementById("modal_container")
const add_book = document.getElementById("add_book")
const close_modal = document.getElementById("close_modal")
add_book.addEventListener('click', ()=>
{
    modal_container.classList.add("modal_show")
})
close_modal.addEventListener('click', (e)=>
{
    e.preventDefault()
    modal_container.classList.remove("modal_show")
})

