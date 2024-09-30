// Function to add a new to-do item
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    const todoText = todoInput.value.trim();
  
    if (todoText === "") {
      alert("Please enter a task!");
      return;
    }
  
    // Create list item
    const li = document.createElement('li');
    li.textContent = todoText;
  
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      todoList.removeChild(li);
    };
  
    // Append delete button to list item
    li.appendChild(deleteBtn);
  
    // Append list item to the todo list
    todoList.appendChild(li);
  
    // Clear input field
    todoInput.value = "";
  }
  