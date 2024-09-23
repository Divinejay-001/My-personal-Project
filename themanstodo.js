
// DOM SELECTORS
const inputElement = document.getElementById('input');
const addButton = document.querySelector('.add-btn');
const clearAllButton = document.querySelector('.clear-btn');
const filterTodosElement = document.querySelector('#filter-todos');
const taskBoxElement = document.querySelector('.task-box');
const taskBox = document.getElementsByTagName('li');
const trashButton = document.getElementById('delete-btn')

// console.log(taskBoxElement);

// taskBoxElement.innerHTML = '';

let task;

// empty array of todos
let todos = JSON.parse(localStorage.getItem('todo'))||[];
updateScreen()
let todoObject;

const createTodo = (e) => {
    // console.log(e)
    task = inputElement.value.trim();
    // console.log(task);
    // console.log(task.length);

    todoObject = {
        task:task,
        isCompleted: false  
    }
    // console.log(todoObject);

    if(e.keyCode ===13){
        addToTodosArray();
    }
    
}


function addToTodosArray(){
    todos.push(todoObject);
    console.log(todos);
    updateScreen();
}

console.log(todos);

addButton.addEventListener("click", () => {
    addToTodosArray();
})

function deleteTodo(index){
  // alert(`task ${index} deleted`)
  todos.splice(index, 1);
  updateScreen();
  console.log(todos)
}
function editTodo(index){
  // alert(`task ${index} updated`);
  const taskToEdit = prompt(`Edit Your Task `, todos[index].task);
todos[index].task=taskToEdit
updateScreen()
}
// inputElement.addEventListener('keyup', (e) => createTodo(e));

inputElement.addEventListener("keyup", function(e){
    createTodo(e);
});

function updateScreen(){   
    taskBoxElement.innerHTML = ''; 
    inputElement.value = '';
    for(let index = 0; index < todos.length; index++){
        taskBoxElement.innerHTML+= `
        <li class="task">
                <div class="content">
                    <input type="checkbox" id="check-btn-${index}">
                    <div class="spans">
                        <label class="text" for=>${todos[index].task}</label>
                        <span class="settings">
                            <button onclick="editTodo(${index})"><i class="fa fa-pencil" aria-hidden="true"></i>Edit</button>
                            <button onclick="deleteTodo(${index})" id="delete-btn"><i class="fa fa-trash"></i>Delete</button>
                        </span>
                    </div>
                </div>                
        </li>
        `
    }
}

// clear all
clearAllButton.addEventListener('click', function(){
    todos = [];
    updateScreen();
})
function filterTodos(){
  const filter= filterTodosElement.value.toLowerCase();
  if(filter=== 'pending'){
    todos = todos.filter(todo => todo.isCompleted===false)
  }else if(filter=== 'completed'){
    todos = todos.filter(todo => todo.isCompleted===true)
  }else{
    todos= todo
  }
updateScreen();
}
// filterTodos.addEventListener('change', filterTodos)
// Delete item
