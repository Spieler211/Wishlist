// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

const button = document.getElementById('submitButton');
const myInput  = document.getElementById('todoInput');
const myList = document.getElementById('todoList');

button.addEventListener('click', function() {
  // get what the user typed
  const userInput = myInput.value;
  // create a list element
  const myListElement = document.createElement('li');
  // add the list element to the screen
  myListElement.innerText = userInput;
  
  myList.appendChild(myListElement);

  // clear the text field
  myInput.value = '';
});
