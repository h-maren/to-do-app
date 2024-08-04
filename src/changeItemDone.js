import { currentProject } from ".";

let changeItemDone = (function (e){
    //console.log("checked/unchecked!");
    //console.log(this);
    //console.log(e);
    let itemRowDisplay=this.parentElement;
    let itemTitle=itemRowDisplay.querySelector("label").textContent;
    //console.log(itemTitle);
    let itemIndex=currentProject.toDoItems.findIndex(i => i.title === itemTitle);
    //console.log(itemIndex);
    //console.log(currentProject)
    if (e.target.checked) {
        //console.log(currentProject.toDoItems[itemIndex].complete);
        currentProject.toDoItems[itemIndex].complete=true;
    } else {
        currentProject.toDoItems[itemIndex].complete=false;
    }
    //console.log(currentProject);
});

export {changeItemDone};