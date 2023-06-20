let icons = document.getElementById("plusicons")
let section = document.querySelector("section")
let todoheading=document.getElementById('todoheading')
let container1=document.getElementsByTagName('header')[0]
let container2=document.getElementsByTagName('header')[1]
let secondpage= document.getElementById("secondpage")
let backs=document.getElementsByClassName('backs')[0]
let Adds=document.getElementById('Adds');

// when we click on add item
icons.addEventListener('click', ()=>{
  addItems("Add your items")
})

function addItems(heading, parentNode=""){

  console.log(heading)
// creating node
let popup=document.createElement('div')
popup.className="popup"
let popupHead=document.createElement('div')
popupHead.id="popupHead"
popupHead.textContent=heading
let popupInput=document.createElement('input')
popupInput.id="popupInput"
popupInput.type="text"
popupInput.placeholder=heading

let buttons=document.createElement('div')
buttons.className="buttons"

let popupAdd=document.createElement('button')
popupAdd.id="popupAdd"
popupAdd.textContent="Add"

let popupClose=document.createElement('button')
popupClose.id="popupClose"
popupClose.textContent="Close"

// connecting nodes 
document.body.appendChild(popup)
popup.appendChild(popupHead)
popup.appendChild(popupInput)
popup.appendChild(buttons)
buttons.appendChild(popupAdd)
buttons.appendChild(popupClose)

  if(heading === "Add new subitems"){
    popupAdd.addEventListener("click",() =>{
      creatingSubTask(popupInput.value, parentNode)
      closingPopup()
    })
    
  }
  else if(heading === "Add your items"){
    popupAdd.addEventListener("click", ()=>{
      createNewTask(popupInput.value)
      // to not show the text after the card creation
      todoheading.style.display="none"; 
      closingPopup()
      firstpage();
    })
  }
   // closing the popup
  popupClose.addEventListener("click", ()=>{
    closingPopup()
  })

  // closing pop up function
  function closingPopup(){
    popup.remove()
    popupInput.value = ""
    


for(let i=0;i<document.body.children.length;i++){
    document.body.children[i].style.filter="blur(0)"

}

  }


for(let i=0;i<document.body.children.length;i++){
    document.body.children[i].style.filter="blur(5px)"

}
popup.style.filter="blur(0)"


}



function createNewTask(cardHeading){
  // creating nodes
  let todoCard = document.createElement("div")
  todoCard.className = "todoCard"


  let Head = document.createElement("div")
  Head.className = "Head"
  Head.textContent = cardHeading

  let subTaskButtons = document.createElement("div")
  subTaskButtons.className = "subTaskButtons"

  let trash = document.createElement("span")
  trash.textContent = "Delete"
   trash.className="material-symbols-outlined";   
   trash.id="trash";
  let createSubTask = document.createElement("button")
  createSubTask.className = "createSubTask"
  createSubTask.textContent = "+"

  // connecting Nodes

  section.appendChild(todoCard)
  todoCard.appendChild(Head)
  todoCard.appendChild(subTaskButtons)
  subTaskButtons.appendChild(trash)
  subTaskButtons.appendChild(createSubTask)

  // creating sub tasks

  createSubTask.addEventListener("click", ()=>{
    addItems("Add new subitems", todoCard)
  })
  // deleting the card
  trash.addEventListener("click", ()=>{
    todoCard.remove()
    //This is dispalying the no item elements text when there is no cards
    if(section.children.length===0){
        todoheading.style.display="block"; 
    }

  })

  
// trigger  
Head.addEventListener('click',()=>{
    secondpages(todoCard);
})
}

// creating subtask function-

function creatingSubTask(subTaskDesc, parentNode){
   
  // creating nodes
  let subTaskRow = document.createElement("div")
  subTaskRow.className = "subTaskRow"

  let subTask = document.createElement("span")
  subTask.className = "subTask"
  subTask.textContent = subTaskDesc

  let markDone = document.createElement("button")
  markDone.className = "markDone"
  markDone.textContent = "Mark Done"

  // connecting nodes
  parentNode.appendChild(subTaskRow)
  subTaskRow.appendChild(subTask)
  subTaskRow.appendChild(markDone)

   // mark done functionality

   markDone.addEventListener("click",()=>{
    subTask.classList.add("checkedSubTask")
    markDone.remove();
  })
}

// secondpage
// back btn in secondpage
backs.addEventListener('click',()=>{
    firstpage();
})
// add btn in secondpage
 Adds.addEventListener('click',()=>{
    addItems("Add your items");
 
})


function secondpages(parentNode){
container1.style.display="none"
container2.style.display="flex"
parentNode.classList.add("centerCard")
section.style.visibility="hidden"
secondpage.textContent=parentNode.children[0].textContent;
}
function firstpage(){
container1.style.display="flex"
container2.style.display="none"
section.style.visibility="visible"
removeCard();
}

// checking and removing if any centerCard class in any div
function removeCard(){
    for(let i=0;i<section.children.length;i++){
        section.children[i].classList.remove("centerCard");
    }

}