import React,{useState} from "react";
function ToDoList(){
    const [tasks,setTasks]=useState([])
    const [newTask,setNewTask]=useState("")
    const handleTask=(event)=>{
        setNewTask(event.target.value)
    }
    const addTask=()=>{
        if(newTask!==""){
        setTasks(c=>[...c,newTask]);
        setNewTask("")
        }
    }
    const deleteTask=(index)=>{
        setTasks((task)=>task.filter((_,i)=>i!==index))
    }
    const moveUp=(index)=>{
        if(index>0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    const moveDown=(index)=>{
        if(index<tasks.length-1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    return(
        <div className="todo-cont">
            <h1>To Do List</h1>
            <div className="list-cont">
                <div>
                <input type="text" value={newTask} onChange={handleTask} placeholder="Enter a task..."/>
                <button onClick={addTask} className="add-btn">Add Task</button>
                </div>
                <div>
                    <ol>
                        {tasks.map((task,index)=><li key={index} className="listItems">
                            <span className="text">{index+1}. {task}</span>
                            <button onClick={()=>deleteTask(index)} className="del-btn">Delete</button>
                            <button onClick={()=>moveUp(index)} className="alt-btn">Up</button>
                            <button onClick={()=>moveDown(index)} className="alt-btn">Down</button>

                        </li>)}
                    </ol>
                </div>
            </div>
        </div>
    );
}
export default ToDoList;