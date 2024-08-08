import { allProjects } from ".";
import { storeProjects } from "./useStorage";

let deleteItem = (function (e){
    let itemDisplay=e.target.parentElement.parentElement;
    let itemContainer=itemDisplay.parentElement;
    let itemToDeleteTitle=itemDisplay.querySelector("label").textContent;
    itemContainer.removeChild(itemDisplay);

    //remove from items in allProjects
    let projectTitle=document.querySelector("h2").textContent;
    let projectIndex=allProjects.findIndex(i => i.projectTitle === projectTitle);

    allProjects[projectIndex].toDoItems.forEach((item,index) => {
        if (item.title==itemToDeleteTitle){
            allProjects[projectIndex].toDoItems.splice(index,1);
        };
    });
    console.log(allProjects);
    storeProjects();
});

export {deleteItem};