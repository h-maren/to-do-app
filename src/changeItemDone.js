import { allProjects } from ".";
import { storeProjects } from "./useStorage";

let changeItemDone = (function (e){
    //console.log("checked/unchecked!");
    //console.log(this);
    //console.log(e);
    let itemRowDisplay=this.parentElement;
    let itemTitle=itemRowDisplay.querySelector("label").textContent;
    let projectTitle=document.querySelector("h2").textContent;
    let projectIndex=allProjects.findIndex(i => i.projectTitle === projectTitle);
    let itemIndex=allProjects[projectIndex].toDoItems.findIndex(i => i.title === itemTitle);
    console.log(itemIndex);
    console.log(projectIndex);
    if (e.target.checked) {
        //console.log(currentProject.toDoItems[itemIndex].complete);
        allProjects[projectIndex].toDoItems[itemIndex].complete=true;
    } else {
        allProjects[projectIndex].toDoItems[itemIndex].complete=false;
    }
    console.log(allProjects);
    storeProjects();
});

export {changeItemDone};