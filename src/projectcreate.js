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
    addProjectTitleButton () {
        const projectButton=document.createElement("button");
        projectButton.classList.add("project-btn");
        projectButton.textContent=this.projectTitle;
        return projectButton; 
    };
};



export {Project};