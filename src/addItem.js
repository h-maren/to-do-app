
import { currentProject } from ".";
import { ToDoItem } from './todocreate';
import {Form} from './createInputForm.js';

let addItem = (function () {
    const addToDoButton=document.querySelector(".add-todo");
    const toDoContent=document.querySelector(".todo-content");
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
});

export {addItem};