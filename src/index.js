import './style.css';
import {ToDoItem} from './todocreate.js';
import {Project} from './projectcreate.js';
//import {inputTitle} from './todocreate.js';
//import {title,cafeInfo} from './loadmain.js';
//import {title as menuTitle, menu} from './menu.js';
//import {title as contactTitle, contactContainer} from './contact.js';

let projectList=[];

const addToDoButton=document.querySelector(".add-todo");
const addToDoForm=document.querySelector("#newtaskform");
const cancelBtn=document.querySelector("#cancelBtn");
const toDoContent=document.querySelector(".todo-content");
const expandBtn=document.querySelector(".expand-btn");


addToDoButton.addEventListener("click", () => {
    addToDoForm.classList.remove("hidden");
    addToDoButton.classList.add("hidden");
});

cancelBtn.addEventListener("click", () => {
    addToDoForm.classList.add("hidden");
    addToDoButton.classList.remove("hidden");
});

//create default project
const defaultProject=new Project("My Project", []);
const defaultProjectDisplay=defaultProject.setProjectTitle();
toDoContent.prepend(defaultProjectDisplay);
let currentProject=defaultProject;
console.log(currentProject);

/*const item1= new ToDoItem("clean house","mop,sweep", new Date('1995-12-17T03:24:00'),1);
console.log(item1);
console.log(item1.displayToDoItem());
const itemInformation=item1.displayToDoItem();
toDoContent.insertBefore(itemInformation,addToDoButton);
projects.push(item1);
console.log(projects);
//console.log(newToDoItem);*/


//TO FIX
const addItemBtn=document.querySelector("#addNewItemButton");
console.log(addItemBtn);
/*addItemBtn.addEventListener("click", () => {

    let newToDoItem=new toDoItem(inputTitle,inputDescription,inputDueDate,inputPriority);
    projects.push(newToDoItem);
});*/
addItemBtn.addEventListener("click", () => {
    const inputTitle=document.querySelector("input#title").value;
    const inputDescription=document.querySelector("input#description").value;
    const inputDueDate=document.querySelector("input#dueDate").value;
    const inputPriority=document.querySelector("input#priority").value; 
    const newToDoItem=new ToDoItem(inputTitle,inputDescription,inputDueDate,inputPriority,false);
    //console.log(newToDoItem);
    const newItemInformation=newToDoItem.displayToDoItem();
    toDoContent.insertBefore(newItemInformation,addToDoButton);
    currentProject.toDoItems.push(newToDoItem);
    console.log(currentProject);
    //alert(newToDoItem);
    addToDoForm.reset();
    //projects.push(newToDoItem);
    //alert(projects);
});






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