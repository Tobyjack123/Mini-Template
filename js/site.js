
//Step One - controller that accepts requests
function getMessage(){
    let msg = document.getElementById("txtMessage").value;
    displayMessage(msg);
}

//Final Step - view, which displays stuff to the screen
function displayMessage(message){

    //li class="list-group-item">A list item</li>
    //let item = `<li class="list-group-item">${message}</li>`;

    //first get the ol element from the page
    element = document.getElementById("results");

    //next create a new li element
    let item = document.createElement("li");
    //add classes to the li element
    item.classList.add("list-group-item");
    //set the message for the li element
    item.innerHTML = message;
    
    //add the new item to the list
    element.appendChild(item);
}