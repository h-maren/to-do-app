//create form for input

class toDoItem {
    constructor(title,description,dueDate,priority){
        this.title=title;
        this.description=description,
        this.dueDate=dueDate,
        this.priority=priority;
    };
    displayToDoItem(){
        const toDoContainer=document.createElement("div");
        toDoContainer.classList.add("to-do-item");

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



        //here write the display for the item, leave getting input data in main index or another function
        console.log("alert!");
        return toDoContainer;
    };
};


export {toDoItem};
