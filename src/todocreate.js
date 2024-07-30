//create form for input

class toDoItem {
    constructor(title,description,dueDate,priority){
        this.title=title;
        this.description=description,
        this.dueDate=dueDate,
        this.priority=priority;
    };
    displayToDoItem(){
        console.log("alert!");
    }
};


export {toDoItem};
