import { currentProject } from ".";

let deleteItem = (function (e){
    let itemDisplay=e.target.parentElement.parentElement;
    let itemContainer=itemDisplay.parentElement;
    let itemToDeleteTitle=itemDisplay.querySelector("label").textContent;
    itemContainer.removeChild(itemDisplay);

    //remove from currentProject
    currentProject.toDoItems.forEach((item,index) => {
        if (item.title==itemToDeleteTitle){
            currentProject.toDoItems.splice(index,1);
        };
    });
    console.log(currentProject);
});

export {deleteItem};