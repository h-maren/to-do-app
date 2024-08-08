//when button is clicked, open up dialog form box
import { Project } from './projectcreate.js';
import { allProjects} from '.';
import { storeProjects } from './useStorage.js';

const newProjectDialog=document.querySelector("#project-dialog");
const projectListDisplay=document.querySelector(".projects-list");

const showProjectForm=(function (e) {
    newProjectDialog.showModal();
});

const closeProjectForm = (function (e) {
    newProjectDialog.close();
});

const addProject = (function (e) {
    console.log("addproject clicked!");
    e.preventDefault();
    console.log(e);
    console.log(this);
    let projectTitleForm=newProjectDialog.querySelector("input#project-title");
    let projectTitleInput=projectTitleForm.value;
    console.log(projectTitleInput);
    let newProject = new Project(projectTitleInput,[]);
    console.log(newProject);
    newProjectDialog.close();
    projectTitleForm.value="";
    allProjects.push(newProject);
    console.log(allProjects);
    const projectDisplayButton=newProject.addProjectTitleButton();
    projectListDisplay.appendChild(projectDisplayButton);
    storeProjects();
});

export { showProjectForm, closeProjectForm, addProject }