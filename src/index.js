import './style.css';
import {ToDoItem} from './todocreate.js';
import {Project} from './projectcreate.js';
import {Form} from './createInputForm.js';


const addToDoButton=document.querySelector(".add-todo");
const cancelBtn=document.querySelector("#cancelBtn");
const toDoContent=document.querySelector(".todo-content");
const formBtnRow=document.querySelector(".form-btn-row");

//let currentToDoItems=[];
//console.log(currentToDoItems);
/*addToDoButton.addEventListener("click", () => {
    addToDoForm.classList.remove("hidden");
    addToDoButton.classList.add("hidden");
});*/

let currentProjects=[];


cancelBtn.addEventListener("click", () => {
    Form.classList.add("hidden");
    Form.reset();
    formBtnRow.classList.add("hidden");
    addToDoButton.classList.remove("hidden");
});


//create default project
let defaultProject=new Project("My Project", []);
let defaultProjectDisplay=defaultProject.setProjectTitle();
toDoContent.prepend(defaultProjectDisplay);
let currentProject=defaultProject;
console.log(currentProject);

//TO FIX
const addItemBtn=document.querySelector("#addNewItemButton");
console.log(addItemBtn);
/*addItemBtn.addEventListener("click", () => {

    let newToDoItem=new toDoItem(inputTitle,inputDescription,inputDueDate,inputPriority);
    projects.push(newToDoItem);
});*/

function addItem() {
    const inputTitle=document.querySelector("input#title").value;
    const inputDescription=document.querySelector("input#description").value;
    const inputDueDate=document.querySelector("input#dueDate").value;
    const inputPriority=document.querySelector("input#priority").value; 
    const inputProjectTitle=currentProject.projectTitle;
    const newToDoItem=new ToDoItem(inputTitle,inputDescription,inputDueDate,inputPriority,false,inputProjectTitle);
    //console.log(newToDoItem);
    const newItemInformation=newToDoItem.displayToDoItem();
    toDoContent.insertBefore(newItemInformation,addToDoButton);
    currentProject.toDoItems.push(newToDoItem);
    console.log(currentProject);
    //alert(newToDoItem);
    Form.reset();
    Form.classList.add("hidden");
    formBtnRow.classList.add("hidden");
    //currentToDoItems.push(newToDoItem);
    //console.log(currentToDoItems);
    console.log(currentProject);
    //const addToDoForm=document.querySelector("#newtaskform");
    //alert(projects);
};

addItemBtn.addEventListener("click",addItem);

addToDoButton.addEventListener("click", ()=> {
    toDoContent.insertBefore(Form,formBtnRow);
    Form.classList.remove("hidden");
    formBtnRow.classList.remove("hidden");
});


export {currentProject};



/*function addToDoItem (){
    const inputTitle=document.querySelector("input#title").value;
    const inputDescription=document.querySelector("input#description").value;
    const inputDueDate=document.querySelector("input#dueDate").value;
    const inputPriority=document.querySelector("input#priority").value;
    alert(inputTitle);
    const newToDoItem=new toDoItem(inputTitle,inputDescription,inputDueDate,inputPriority);
    alert(newToDoItem);
    projects.push(newToDoItem);
    console.log(newToDoItem.displayToDoItem());
    const newItemInformation=newToDoItem.displayToDoItem;
    alert(newItemInformation);
    toDoContent.insertBefore(newItemInformation,addToDoButton);
    alert("here");
    console.log(newItemInformation);
    alert("wait");
};*/

//console.log(projects);