let notesContainer=document.getElementById("notes-container")
let createBtn=document.getElementById("btn")
let notes=document.querySelectorAll(".input-box")


function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML)
}
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes()
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let image=document.createElement("img");
    inputBox.className="input-box"
    inputBox.setAttribute("contenteditable","true")
    image.src="images/delete.png"
    notesContainer.appendChild(inputBox).appendChild(image)
    updateStorage()

})


notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove()
        updateStorage()
    }

    else if(e.target.tagName==="P"){
        notes=document.querySelectorAll(".input-box");
        notes.forEach(n=>{
            n.onkeyup=()=>{
                updateStorage()
            }
        })
    }
})