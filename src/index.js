import './style.css';
import {toDoItem} from './todocreate.js';
//import {inputTitle} from './todocreate.js';
//import {title,cafeInfo} from './loadmain.js';
//import {title as menuTitle, menu} from './menu.js';
//import {title as contactTitle, contactContainer} from './contact.js';

const addToDoButton=document.querySelector(".add-todo");
const addToDoForm=document.querySelector("#newtaskform");
const cancelBtn=document.querySelector("#cancelBtn");


addToDoButton.addEventListener("click", () => {
    addToDoForm.classList.remove("hidden");
    addToDoButton.classList.add("hidden");
});



const item1= new toDoItem("farts","fart", new Date('1995-12-17T03:24:00'),1);
console.log(item1);

const addItemBtn=document.querySelector("#addNewItemButton");
addItemBtn.addEventListener("click", item1.displayToDoItem());

