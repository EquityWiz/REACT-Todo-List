import React, {useState} from "react";

const Todo = (props) => {

    const [newTodo, setNewTodo] = useState("")
    const [todoList, setTodoList] = useState([])

    const handleToDoSubmit = (e) => {
        e.preventDefault();

        const newTodoDict = {
            item: newTodo,
            completed: false
        };
        setTodoList([...todoList, newTodoDict]);
        setNewTodo("");
    }
    
    const handleToggleChange = (idx) => {
        const updatedTodoList = todoList.map((todo, i) => {
            if(idx == i) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodoList(updatedTodoList);
    }

    const handleDelete = (idx) => {
        const deletedList = todoList.filter((todo, i) => i != idx);
        setTodoList(deletedList);
    }

    return(
        <div className="center">
            <form onSubmit={handleToDoSubmit}>
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
                <button type="submit">Add</button>
            </form>
            <hr />
            {todoList.map((todo, i) => 
            {return(
            <div key={i}>
                <input onChange={ (e) => {handleToggleChange(i)}} checked={todo.completed} type="checkbox" />
                <span>{todo.item}</span>
                <button onClick={(e) => {handleDelete(i)}}>Delete</button>
            </div>)})}
        </div>
    );
}
export default Todo;