import {Form,titleInput,descriptionInput,dueDateInput,priorityInput} from './createInputForm.js';
import { currentProject } from ".";
import { ToDoItem } from './todocreate';


const editItem = (function (e){
    //TO FIX
    let itemDisplay=e.target.parentElement.parentElement;
    let itemDisplayParent=itemDisplay.parentElement;
    let itemContainer=itemDisplay.parentElement;
    let itemTitleContainer=itemContainer.querySelector("label");
    let itemTitle=itemTitleContainer.textContent;

    if (e.target.textContent=="Edit"){
        let itemDateContainer=itemContainer.querySelector(".dueDate-display");
        let itemPriorityContainer=itemContainer.querySelector(".prio-display");
        let itemDescriptionContainer=itemContainer.querySelector("p");
        let itemDueDate=Date(String(itemDateContainer.textContent).slice(4));
        let itemPriority=Number(String(itemPriorityContainer.textContent).slice(10));
        let itemDescription=itemDescriptionContainer.textContent;
        console.log(itemTitle,itemDueDate,itemPriority,itemDescription);

        //make the button a save button
        e.target.classList.add(".save-item-btn");
        e.target.classList.remove(".edit-item-btn");
        e.target.textContent="Save";

        //replace itemDisplay with Form that has values already in it
        
        console.log(itemDisplay);
        console.log(itemContainer);

        let row1=itemDisplay.querySelector(".todo-display-toprow");
        let row2=itemDisplay.querySelector(".todo-display-row2");
        let row3=itemDisplay.querySelector(".todo-display-row3");
        let btnRow=itemDisplay.querySelector(".todo-button-row");
        console.log(itemDueDate);

        itemDisplay.removeChild(row1);
        itemDisplay.removeChild(row2);
        itemDisplay.removeChild(row3);
        itemDisplay.insertBefore(Form,btnRow);
        Form.classList.remove("hidden");
        titleInput.value=itemTitle;
        descriptionInput.value=itemDescription;
        //NEED TO FIX - need to fix how date is displayed for default value
        dueDateInput.value=itemDueDate;
        dueDateInput.setAttribute("default",itemDueDate);
        priorityInput.value=itemPriority;
    } else {
        //save new values in existing item;
        let editedItemTitle=titleInput.value;
        let editedItemDescription=descriptionInput.value;
        let editedDueDate=dueDateInput.value;
        let editedPriority=priorityInput.value;

        //remove from Project and then add new ones
        currentProject.removeItem(itemTitle);
        let editedToDoItem=new ToDoItem(editedItemTitle,editedItemDescription,editedDueDate,editedPriority,false,currentProject.projectTitle);
        currentProject.toDoItems.push(editedToDoItem);
        console.log(currentProject);
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
    }


   /* itemContainer.removeChild(itemTitleContainer);
    itemContainer.removeChild(itemDateContainer);
    itemContainer.removeChild(itemPriorityContainer);
    itemContainer.removeChild(itemDescriptionContainer);
    itemDispaly.appendChild(Form);*/



    

    
    //toDoContent.insertBefore(Form,formBtnRow);

    //update the item in the project
    
    //
    console.log("edit clicked");
});

export {editItem};