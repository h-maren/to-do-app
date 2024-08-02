import { currentProject } from ".";

let deleteItem = (function (e){
    let itemDisplay=e.target.parentElement.parentElement;
    let itemContainer=itemDisplay.parentElement;
    let itemToDeleteTitle=itemContainer.querySelector("label").textContent;
    console.log(itemToDeleteTitle);
    itemContainer.removeChild(itemDisplay);

    //remove from currentProject
    console.log(currentProject);
    currentProject.removeItem(itemToDeleteTitle);
    console.log(currentProject);

});

export {deleteItem};