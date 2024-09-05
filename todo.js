let todos = [];
function addTodo() {
  todos.push({
    title: document.querySelector("input").value
  })
  render();
}

function deleteLastTodo() {
    todos.splice(todos.length-1,1)
  
  render();
}
function deleteFirstTodo() {
    todos.splice(0,1)
  
  render();
}
function deleteRandomTodo(idx){
    todos.splice(idx,1);
    render();
}
function createTodo(todo,idx){
    const div=document.createElement("div");
        const h1=document.createElement("h1");
        const button=document.createElement("button");
        button.innerHTML="Delete";
        button.onclick =()=>deleteRandomTodo(idx);
        h1.innerHTML=todo.title;
        div.append(h1)
        div.append(button)
        return div

}
 //react
function render() {
    document.querySelector("#todos").innerHTML=""
    for(let i=0;i<todos.length;i++){
        const element = createTodo(todos[i],i);
        document.querySelector("#todos").appendChild(element);
    }
}

  