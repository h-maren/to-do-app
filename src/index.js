import './style.css';
import {ToDoItem} from './todocreate.js';
import {Project} from './projectcreate.js';
import {Form} from './createInputForm.js';
import {showProjectForm, closeProjectForm, addProject} from './addProject.js';
import { addItem } from './addItem.js';
import { format } from "date-fns";
import { storeProjects,retrieveProjects } from './useStorage.js';

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

//check if there are projects in local storage

/*let retrievalString=localStorage.getItem('allProjects');
console.log(retrievalString);*/


/*let storeProjects = (function (){
    let projectsString=JSON.stringify(allProjects);
    localStorage.setItem ('allProjects',projectsString);
});*/

/*let retrieveProjects = (function (){
    let retrievalString=localStorage.getItem('allProjects');
    console.log(retrievalString);
    if (retrievalString!==undefined){
        let retrievalProjects=JSON.parse(retrievalString);
        console.log(retrievalProjects);
        return retrievalProjects;
    };
    return undefined;
});*/

let checkForProjects=retrieveProjects();
console.log(checkForProjects);
console.log((typeof(Storage)));

if ((typeof(Storage)!==undefined) && (checkForProjects===null)){
    console.log("nothing stored!");
    createDefaultProject();
    storeProjects();
    } else {
    console.log(allProjects);
    //recreate display if storage exists
    //TO FIX currently does not keep methods
    allProjects=checkForProjects; //instead of using this, create new instance of class that was stored
    /*let defaultProject=allProjects[0];
    console.log(defaultProject);
    let defaultProjectDisplay=defaultProject.setProjectTitle();
    toDoContent.prepend(defaultProjectDisplay);
    const projectDisplayButton=defaultProject.addProjectTitleButton();
    projectListDisplay.appendChild(projectDisplayButton);*/
};






function createDefaultProject () {
    let defaultProject=new Project("My Project", []);
    let defaultProjectDisplay=defaultProject.setProjectTitle();
    toDoContent.prepend(defaultProjectDisplay);
    allProjects.push(defaultProject);
    const projectDisplayButton=defaultProject.addProjectTitleButton();
    projectListDisplay.appendChild(projectDisplayButton);
};


//storeProjects();*/

//create default project


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


export {allProjects, toDoContent, addToDoButton, formBtnRow, storeProjects};
