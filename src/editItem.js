import {Form,titleInput,descriptionInput,dueDateInput,priorityInput} from './createInputForm.js';
import { ToDoItem } from './todocreate';
import { allProjects } from '.';
import { formatISO, parseISO } from "date-fns";


const editItem = (function (e){
    let taskForm=e.target.parentElement.parentElement.nextSibling;
    let itemDisplay=e.target.parentElement.parentElement;
    let itemDisplayParent=itemDisplay.parentElement;
    console.log(e.target);
    console.log(taskForm);
    let itemTitleContainer=itemDisplay.querySelector("label");
    console.log(itemDisplay);
    console.log(itemTitleContainer);
    let itemTitle=itemTitleContainer.textContent;
    console.log(itemTitle);

    let editedItemTitle=titleInput.value;
    let editedItemDescription=descriptionInput.value;
    let editedDueDate=dueDateInput.value;
    let editedPriority=priorityInput.value;

    let itemDateContainer=itemDisplay.querySelector(".dueDate-display");
    let itemPriorityContainer=itemDisplay.querySelector(".prio-display");
    let itemDescriptionContainer=itemDisplay.querySelector("p");

    let projectTitle=document.querySelector("h2").textContent;
    let projectIndex=allProjects.findIndex(i => i.projectTitle === projectTitle);


    if (e.target.textContent=="Edit"){
        let itemDueDateString=String(itemDateContainer.textContent);
        let itemDueDateMonth=Number(itemDueDateString.slice(5,7))-1;
        //console.log(itemDueDateMonth);
        let itemDueDateDay=itemDueDateString.slice(8,10);
        //console.log(itemDueDateDay);
        let itemDueDateYear=itemDueDateString.slice(11,16);
        //console.log(itemDueDateYear);
        let itemDueDate=formatISO(new Date(itemDueDateYear,itemDueDateMonth,itemDueDateDay,0,0), {representation: 'date'});
        console.log(itemDueDate);

        let itemPriority=Number(String(itemPriorityContainer.textContent).slice(10));
        let itemDescription=itemDescriptionContainer.textContent;
        console.log(itemTitle,itemDueDate,itemPriority,itemDescription);

        titleInput.value=itemTitle;
        console.log(itemTitle);
        descriptionInput.value=itemDescription;
        
        dueDateInput.value=itemDueDate;
        console.log(allProjects);
        console.log(itemDueDate);
        //dueDateInput.setAttribute("default",itemDueDate);
        priorityInput.value=itemPriority;

        //make the button a save button
        e.target.classList.add(".save-item-btn");
        e.target.classList.remove(".edit-item-btn");
        e.target.textContent="Save";

        //replace itemDisplay with Form that has values already in it
        
        console.log(itemDisplay);

        let row1=itemDisplay.querySelector(".todo-display-toprow");
        let row2=itemDisplay.querySelector(".todo-display-row2");
        let row3=itemDisplay.querySelector(".todo-display-row3");
        let btnRow=itemDisplay.querySelector(".todo-button-row");

        itemDisplay.removeChild(row1);
        itemDisplay.removeChild(row2);
        itemDisplay.removeChild(row3);
        itemDisplay.insertBefore(Form,btnRow);
        Form.classList.remove("hidden");

        //remove from Project and then add new ones


        allProjects[projectIndex].toDoItems.forEach((item,index) => {
            if (item.title==itemTitle){
                console.log(itemTitle);
                allProjects[projectIndex].toDoItems.splice(index,1);
                };
            });
        console.log(allProjects);
    } else {
        //save new values in existing item;        
        let editedToDoItem=new ToDoItem(editedItemTitle,editedItemDescription,editedDueDate,editedPriority,false,projectTitle);
        allProjects[projectIndex].toDoItems.push(editedToDoItem);
        let editedItemInformation=editedToDoItem.displayToDoItem();

        //make the button an edit button
        e.target.classList.add(".edit-item-btn");
        e.target.classList.remove(".save-item-btn");
        e.target.textContent="Edit";

        //remove and reset form
        Form.reset();
        itemDisplayParent.removeChild(itemDisplay);
        const addToDoButton=document.querySelector(".add-todo");
        itemDisplayParent.insertBefore(editedItemInformation,addToDoButton)
        console.log(allProjects);
    }
});

export {editItem};