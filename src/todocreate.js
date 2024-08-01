//create form for input
class ToDoItem {
    constructor(title,description,dueDate,priority,complete){
        this.title=title;
        this.description=description,
        this.dueDate=dueDate,
        this.priority=priority;
        this.complete=Boolean;
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
        const itemLabel=document.createElement("label");
        itemLabel.setAttribute("for","itemTitle");
        itemLabel.textContent=`${this.title}`;

        itemTitleDisplay.appendChild(itemCheck);
        itemTitleDisplay.appendChild(itemLabel);
        itemRow1.appendChild(itemTitleDisplay);

        const itemDueDate=document.createElement("div");
        itemDueDate.textContent=`Due: ${Date(this.dueDate)}`;
        itemRow1.appendChild(itemDueDate);

        const itemExpandButton=document.createElement("button");
        itemExpandButton.classList.add("expand-btn");
        itemExpandButton.textContent="+";
        itemRow1.appendChild(itemExpandButton);

        toDoContainer.appendChild(itemRow1);

        //create other rows which will remain hidden
        const itemRow2=document.createElement("div");
        itemRow2.classList.add("todo-display-row2");
        itemRow2.classList.add("hidden-item-row");
        const itemPriority=document.createElement("div");
        itemPriority.textContent=`Priority: ${this.priority}`;
        itemRow2.appendChild(itemPriority);

        toDoContainer.appendChild(itemRow2);

        const itemRow3=document.createElement("div");
        itemRow3.classList.add("todo-display-row3");
        itemRow3.classList.add("hidden-item-row");
        const itemDescription=document.createElement("p");
        itemDescription.textContent=`${this.description}`;
        itemRow3.appendChild(itemDescription);

        toDoContainer.appendChild(itemRow3);      



        //here write the display for the item, leave getting input data in main index or another function
        //console.log("alert!");
        return toDoContainer;
    };
};


export {ToDoItem};
