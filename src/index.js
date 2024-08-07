import './style.css';
import {ToDoItem} from './todocreate.js';
import {Project} from './projectcreate.js';
import {Form} from './createInputForm.js';
import {showProjectForm, closeProjectForm, addProject} from './addProject.js';
import { addItem } from './addItem.js';
import { format } from "date-fns";

const addToDoButton=document.querySelector(".add-todo");
const cancelBtn=document.querySelector("#cancelBtn");
const toDoContent=document.querySelector(".todo-content");
const formBtnRow=document.querySelector(".form-btn-row");
const addItemBtn=document.querySelector("#addNewItemButton");
const newProjectBtn=document.querySelector(".show-project-form");
const closeProjectBtn=document.querySelector(".cancel-project-form");
const addProjectBtn=document.querySelector("#addProjectBtn");
const projectListDisplay=document.querySelector(".projects-list");

let allProjects=[];



//create default project
let defaultProject=new Project("My Project", []);
let defaultProjectDisplay=defaultProject.setProjectTitle();
toDoContent.prepend(defaultProjectDisplay);
console.log("ran again!");
console.log(defaultProject);
allProjects.push(defaultProject);
console.log(allProjects);
const projectDisplayButton=defaultProject.addProjectTitleButton();
projectListDisplay.appendChild(projectDisplayButton);
//let currentProject=setCurrentProject.updateCurrentProject(defaultProject);
//console.log(currentProject);

addItemBtn.addEventListener("click",addItem);

newProjectBtn.addEventListener("click", showProjectForm);
closeProjectBtn.addEventListener("click", closeProjectForm);
addProjectBtn.addEventListener("click", addProject);

addToDoButton.addEventListener("click", ()=> {
    toDoContent.insertBefore(Form,formBtnRow);
    Form.classList.remove("hidden");
    formBtnRow.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
    Form.classList.add("hidden");
    Form.reset();
    formBtnRow.classList.add("hidden");
    addToDoButton.classList.remove("hidden");
});

/*

function addItem() {
    const inputTitle=document.querySelector("input#title").value;
    const inputDescription=document.querySelector("input#description").value;
    const inputDueDate=document.querySelector("input#dueDate").value;
    const inputPriority=document.querySelector("input#priority").value; 
    const inputProjectTitle=document.querySelector("h2").textContent;
    console.log(inputProjectTitle);
    const newToDoItem=new ToDoItem(inputTitle,inputDescription,inputDueDate,inputPriority,false,inputProjectTitle);
    //console.log(newToDoItem);
    const newItemInformation=newToDoItem.displayToDoItem();
    toDoContent.insertBefore(newItemInformation,addToDoButton);
    //find project to which it belongs and insert
    const projectIndex=allProjects.findIndex(i => i.projectTitle === inputProjectTitle);
    allProjects[projectIndex].toDoItems.push(newToDoItem);
    console.log(allProjects);
    //alert(newToDoItem);
    Form.reset();
    Form.classList.add("hidden");
    formBtnRow.classList.add("hidden");
    //currentToDoItems.push(newToDoItem);
    //console.log(currentToDoItems);
    console.log(currentProject);
    //const addToDoForm=document.querySelector("#newtaskform");
    //alert(projects);
};*/

//display current projects on side bar
//createProjectListDisplay();

//create list of projects in side bar


export {allProjects, toDoContent, addToDoButton, formBtnRow};
