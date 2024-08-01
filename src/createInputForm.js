const Form=document.createElement("form");
Form.setAttribute("id","newtaskform");

const row1=document.createElement("div");
row1.classList.add("form-row");
const titleLabel=document.createElement("label");
titleLabel.setAttribute("for","title");
titleLabel.textContent="Title:";
row1.appendChild(titleLabel);
const titleInput=document.createElement("input");
titleInput.setAttribute("type","text");
titleInput.setAttribute("id","title");
titleInput.setAttribute("name","title");
titleInput.value="";
row1.appendChild(titleInput);
Form.appendChild(row1);

const row2=document.createElement("div");
row2.classList.add("form-row");
const descriptionLabel=document.createElement("label");
descriptionLabel.setAttribute("for","description");
descriptionLabel.textContent="Description";
row2.appendChild(descriptionLabel);
const descriptionInput=document.createElement("input");
descriptionInput.setAttribute("type","text");
descriptionInput.setAttribute("id","description");
descriptionInput.setAttribute("name","description");
descriptionInput.value="";
row2.appendChild(descriptionInput);
Form.appendChild(row2);

const row3=document.createElement("div");
row3.classList.add("form-row");
const dueDateLabel=document.createElement("label");
dueDateLabel.setAttribute("for","dueDate");
dueDateLabel.textContent="Due Date:";
row3.appendChild(dueDateLabel);
const dueDateInput=document.createElement("input");
dueDateInput.setAttribute("type","date");
dueDateInput.setAttribute("id","dueDate");
dueDateInput.setAttribute("name","dueDate");
dueDateInput.value="";
row3.appendChild(dueDateInput);
Form.appendChild(row3);

const row4=document.createElement("div");
row4.classList.add("form-row");
const priorityLabel=document.createElement("label");
priorityLabel.setAttribute("for","priority");
priorityLabel.textContent="Priority:";
row4.appendChild(priorityLabel);
const priorityInput=document.createElement("input");
priorityInput.setAttribute("type","number");
priorityInput.setAttribute("step","1");
priorityInput.setAttribute("id","priority");
priorityInput.setAttribute("name","priority");
row4.appendChild(priorityInput);
Form.appendChild(row4);

/*
const row5=document.createElement("div");
row5.classList.add("form-row");
const addItemBtn=document.createElement("button");
addItemBtn.setAttribute("type","button");
addItemBtn.setAttribute("id","addNewItemButton");
addItemBtn.textContent="Add New To-Do";
row5.appendChild(addItemBtn);
const cancelBtn=document.createElement("button");
cancelBtn.setAttribute("type","reset");
cancelBtn.setAttribute("id","cancelBtn");
cancelBtn.textContent="Cancel";
row5.appendChild(cancelBtn);
Form.appendChild(row5);*/

export {Form};
