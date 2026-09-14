// selecting popup-box popup-overlay

var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var popupbutton=document.getElementById("add-popup-button")
var cancel=document.getElementById("add-popup")

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

cancel.addEventListener("click",function(){
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})

// selecting container,add book,book-title,book-author-input,book-description

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var booktitleauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault();
    if (
    booktitleinput.value === "" ||
    booktitleauthorinput.value === "" ||
    bookdescriptioninput.value === ""
) {
    alert("Please fill all the fields");
    return;
}
    var div=document.createElement("div")
    div.setAttribute("class" ,"book-container")
    div.innerHTML=` <h2>${booktitleinput.value}</h2>
            <h5>${booktitleauthorinput.value}</h5>
            <p>${bookdescriptioninput.value}
            </p>
             <button class="button" onclick="deletebook(event)">Delete</button>`
    container.append(div)
     popupoverlay.style.display="none"
    popupbox.style.display="none"

    booktitleinput.value = "";
    booktitleauthorinput.value = "";
    bookdescriptioninput.value = "";


    


})

function deletebook(event)
{
    event.target.parentElement.remove()
}

