// Get references to the input field, button, and item list
const itemInput = document.getElementById("itemInput");
const addButton = document.getElementById("addItems");
const itemList = document.getElementById("itemList");


function addItemToList () {

const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");
}
 
addButton.addEventListener('click', () => {
    // Get the value of the input field
    const itemText = itemInput.value.trim();
    
    // Check if the input field is not empty
    if (itemText !== "") {
        // Create a new list item element
        const newItem = document.createElement("div");
        newItem.textContent = itemText;
        
        // Append the new item to the item list
        itemList.appendChild(newItem);
        
        // Clear the input field
        itemInput.value = "";
    } else {
        // If the input field is empty, show an alert
        alert("Please enter a valid item!");
    }
})

 
 


