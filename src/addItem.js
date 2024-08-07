
import { toDoContent, addToDoButton, allProjects, formBtnRow } from ".";
import { ToDoItem } from './todocreate';
import {Form} from './createInputForm.js';


const addItem = (function () {
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
});

export {addItem};