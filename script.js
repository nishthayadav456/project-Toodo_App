let icons = document.getElementById("icons")
let section = document.querySelector("section")
let todoText=document.getElementById('todoText')
let header1=document.getElementsByTagName('header')[0]
let header2=document.getElementsByTagName('header')[1]
let page2Header= document.getElementById('page2Header')
let backs=document.getElementsByClassName('backs')[0]
let header2Add=document.getElementById('header2Add');
// when we click on header add item
icons.addEventListener('click', ()=>{
  addItems("Add your items")
})

function addItems(heading, parentNode=""){

  console.log(heading)
//   create node
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
      todoText.style.display="none"; 
      closingPopup()
      page1();
    })
  }
  //  closing the popup
  popupClose.addEventListener("click", ()=>{
    closingPopup()
  })

//   closing pop up function
  function closingPopup(){
    popup.remove()
    popupInput.value = ""
    
    //  remove bg blur

for(let i=0;i<document.body.children.length;i++){
    document.body.children[i].style.filter="blur(0)"

}

  }

//   bg blur
for(let i=0;i<document.body.children.length;i++){
    document.body.children[i].style.filter="blur(5px)"

}
popup.style.filter="blur(0)"


}

//     <div class="todoCard">
//       <div class="cardHead">Heading</div>
//       <div class="subTaskRow">
//         <span class="subTask">Sub Task</span>
//         <span class="markDone">Mark Done</span> 
//       </div>
//       </div>
//     <div class="subTaskButtons">
//       <button class="trash">Trash</button>
//       <button class="createSubTask">+</button>
//     </div>

function createNewTask(cardHeading){
  // creating nodes
  let todoCard = document.createElement("div")
  todoCard.className = "todoCard"
//   todoCard.classList.add("centerCard")

  let cardHead = document.createElement("div")
  cardHead.className = "cardHead"
  cardHead.textContent = cardHeading

  let subTaskButtons = document.createElement("div")
  subTaskButtons.className = "subTaskButtons"

  let trash = document.createElement("span")
  trash.textContent = "Delete"
   trash.className="symbols";//trash-icon
   trash.id="trash";
  let createSubTask = document.createElement("button")
  createSubTask.className = "createSubTask"
  createSubTask.textContent = "+"

  // connecting Nodes

  section.appendChild(todoCard)
  todoCard.appendChild(cardHead)
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
        todoText.style.display="block"; 
    }

  })

  
// trigger page 2 
cardHead.addEventListener('click',()=>{
    page2(todoCard);
})
}

// creating subtask function

function creatingSubTask(subTaskDesc, parentNode){
   // Parent node is nothing but a todoCard of a specific card 
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

// ------------------page 2 ---------------
// back btn in page 2
backs.addEventListener('click',()=>{
    page1();
})
// add btn in page 2
header2Add.addEventListener('click',()=>{
    addItems("Add your items");
 
})


function page2(parentNode){
header1.style.display="none"
header2.style.display="flex"
parentNode.classList.add("centerCard")
section.style.visibility="hidden"
page2Header.textContent=parentNode.children[0].textContent;
}
function page1(){
header1.style.display="flex"
header2.style.display="none"
section.style.visibility="visible"
removeClass();
}

// checking and removing if any centerCard class in any div
function removeClass(){
    for(let i=0;i<section.children.length;i++){
        section.children[i].classList.remove("centerCard");
    }

}