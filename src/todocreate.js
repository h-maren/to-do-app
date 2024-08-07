//create form for input
import { expandRows } from './expandRows.js';
import { deleteItem } from './deleteItem.js';
import { editItem } from './editItem.js';
import { changeItemDone } from './changeItemDone.js';
import { format,parseISO } from "date-fns";

class ToDoItem {
    constructor(title,description,dueDate,priority,complete,projectTitle){
        this.title=title;
        this.description=description,
        this.dueDate=dueDate,
        this.priority=priority;
        this.complete=false;
        this.projectTitle=projectTitle;
    };
    displayToDoItem(){
        //create base container
        const toDoContainer=document.createElement("div");
        toDoContainer.classList.add("to-do-item");
        //create top row which will remain visible
        const itemRow1=document.createElement("div");
        itemRow1.classList.add("todo-display-toprow");

        const itemTitleDisplay=document.createElement("div");
        itemTitleDisplay.classList.add("itemTitleDisplay");
      
        const itemCheck=document.createElement("input");
        itemCheck.setAttribute("type","checkbox");
        itemCheck.setAttribute("id","itemTitle");
        itemCheck.addEventListener("change",changeItemDone);
        const itemLabel=document.createElement("label");
        itemLabel.setAttribute("for","itemTitle");
        itemLabel.textContent=`${this.title}`;
        //itemLabel.classList.add(`${this.title}`);

        itemTitleDisplay.appendChild(itemCheck);
        itemTitleDisplay.appendChild(itemLabel);
        itemRow1.appendChild(itemTitleDisplay);

        const itemDueDate=document.createElement("div");
        itemDueDate.classList.add("dueDate-display");
        const itemDueDateText=format(new Date(parseISO(this.dueDate)), 'MM/dd/yyyy');
        itemDueDate.textContent=`Due: ${itemDueDateText}`;
        itemRow1.appendChild(itemDueDate);

        const itemExpandButton=document.createElement("button");
        itemExpandButton.classList.add("expand-btn");
        itemExpandButton.textContent="+";
        itemExpandButton.addEventListener("click",expandRows);
        itemRow1.appendChild(itemExpandButton);
        toDoContainer.appendChild(itemRow1);

        //create other rows which will remain hidden
        const itemRow2=document.createElement("div");
        itemRow2.classList.add("todo-display-row2");
        itemRow2.classList.add("hidden");
        const itemPriority=document.createElement("div");
        itemPriority.classList.add("prio-display");
        itemPriority.textContent=`Priority: ${this.priority}`;
        itemRow2.appendChild(itemPriority);

        toDoContainer.appendChild(itemRow2);

        const itemRow3=document.createElement("div");
        itemRow3.classList.add("todo-display-row3");
        itemRow3.classList.add("hidden");
        const itemDescription=document.createElement("p");
        itemDescription.textContent=`${this.description}`;
        itemRow3.appendChild(itemDescription);

        toDoContainer.appendChild(itemRow3);
        
        const itemRow4=document.createElement("div");
        itemRow4.classList.add("todo-button-row");
        itemRow4.classList.add("hidden");
        //these will be edit and delete buttons
        const deleteItemBtn=document.createElement("button");
        deleteItemBtn.classList.add("delete-item-btn");
        deleteItemBtn.textContent="Delete";
        deleteItemBtn.addEventListener("click",deleteItem);
        itemRow4.appendChild(deleteItemBtn);
        const editItemBtn=document.createElement("button");
        editItemBtn.classList.add("edit-item-btn");
        editItemBtn.textContent="Edit";
        editItemBtn.addEventListener("click",editItem);
        itemRow4.appendChild(editItemBtn);

        toDoContainer.appendChild(itemRow4);

        return toDoContainer;

        //here write the display for the item, leave getting input data in main index or another function
        //console.log("alert!");

    };
};

export {ToDoItem};
