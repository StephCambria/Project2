addItem = () => {

    // Get type of element from form
    let type = li;
    
    // Get the text/value for the tag
    // from the form
    let value = document.getElementById("value").value;
    
    // createElement() is used for
    // creating a new element
    type = document.createElement(type);
    
    // Use value as textnode in this example
    type.appendChild(document.createTextNode(value));
    
    // Append as child to the parent
    // tag i.e. ol
    document.getElementById("sortable").appendChild(type);
    li.setAttribute("id", "listItem");
    li.setAttribute("class", "ui-state-default");
    
    }