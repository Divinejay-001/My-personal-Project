// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOptions = document.querySelector('.todo-filter');

// Event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOptions.addEventListener("change", filterTodo); // Changed from "click" to "change"

// Function to add a new todo item
function addTodo(event) {
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    // Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Add todo to local storage
    saveLocalTodos(todoInput.value);

    // Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    // Check Trash Button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('edit-btn');
    todoDiv.appendChild(editButton);

    // Append to List
    todoList.appendChild(todoDiv);

    // Clear Todo
    todoInput.value = "";
}

// Function to delete or check off a todo item
function deleteCheck(e) {
    const item = e.target;

    // Delete Todo
    if (item.classList.contains('trash-btn')) {
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            removeLocalTodos(todo);
            todo.remove();
        });
    }

    // Check Todo
    if (item.classList.contains('complete-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    // Check Todo
    if (item.classList.contains('edit-btn')) {
        const todo = item.parentElement;
        todo.classList.toggle('editeed');
    }
}

// Function to filter todos
function filterTodo(e) {
    const todos = Array.from(todoList.childNodes);
    todos.forEach(function (todo) {
        if (todo.nodeType === 1) { // Only process element nodes
            switch (filterOptions.value) {
                case 'all':
                    todo.style.display = 'flex';
                    break;
                case 'completed':
                    if (todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
                case 'uncompleted':
                    if (!todo.classList.contains('completed')) {
                        todo.style.display = 'flex';
                    } else {
                        todo.style.display = 'none';
                    }
                    break;
            }
        }
    });
}

// Local Storage
function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        
        // Create LI
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        // Check Mark Button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        // Check Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        // Append to List
        todoList.appendChild(todoDiv);
    });
}
function removeLocalTodos(todoText) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  const todoIndex = todos.findIndex(todo => todo.text === todoText);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
}