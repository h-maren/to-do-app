//create project

class Project {
    constructor(projectTitle,toDoItems=[]) {
        this.projectTitle=projectTitle;
        this.toDoItems=toDoItems;
    };
    setProjectTitle () {
        const titleProjectDisplay=document.createElement("h2");
        titleProjectDisplay.textContent=`${this.projectTitle}`;
        return titleProjectDisplay;
    };
    removeItem(itemToDeleteTitle) {
        let itemIndex=this.toDoItems.indexOf(itemToDeleteTitle);
        this.toDoItems.splice(itemIndex,1);
    };
};

export {Project};