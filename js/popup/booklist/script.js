var plus=document.querySelector(".add-butto")
var popup_overlay=document.querySelector(".popup-overlay")
var popup=document.querySelector(".popup")

var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
var popup_add = document.querySelector(".popup-add")

function add_the_pop()
{
    popup_overlay.style.display="block"
    popup.style.display="block"

}

function remove_pop(event)
{
    event.preventDefault()
    popup_overlay.style.display="none"
    popup.style.display="none"
}

function deleting(event)
{
  
  event.target.parentElement.remove() 
}


popup_add.addEventListener("click",function(event)    /* don't forget this set ` and one time use if innerhtml */
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitleinput.value}</h2>   
   <h5>${bookauthorinput.value} </h5>
   <p>${bookdescriptioninput.value}</p>
    <button onclick='deleting(event)' class='container-button'>DELETE</button>`
   container.append(div)
   popup_overlay.style.display="none"
    popup.style.display="none"

})
/*unction adding_container(event)
{

    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitleinput.value}</h1>`
    container.append(div)
} */
