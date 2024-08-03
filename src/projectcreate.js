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
};

export {Project};