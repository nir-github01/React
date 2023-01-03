// import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';

const AddTaskForm =({addTask}) => {

     const [value, setValue] = useState("");

     const handleSubmit = (e) =>{
        e.preventDefault();
        value && addTask(value)
        setValue("");
     };


    return (
        <div>
        <h1>To Do List</h1>
        <form onSubmit={handleSubmit}>
            <div className="inputgrouptext">
            <InputGroup className=" mb-3">
            <Form.Control
            value={value}
            placeholder="Add new Task"
            aria-label="To do task"
            aria-describedby="basic-addon2"
            onChange ={e =>setValue(e.target.value)}
            />
            <InputGroup.Text type="submit" id="basic-addon2"><Button type="submit" id="addButon">Add Task</Button></InputGroup.Text>
            </InputGroup>
            </div>
         </form>
        </div>
    );
}

const ToDoList =({doneTask}) => {
    const [tasks, setTasks] = useState([{
        text:"First Task",
        isCompleted:false
    },{
        text:"Second Task",
        isCompleted:false 
    },{
        text:"Third Task",
        isCompleted:false
    }]);

    const addTask = text =>setTasks([...tasks, {text}]);

    const toggleTask = index =>{
        const newTasks = [...tasks];
        newTasks[index].isCompleted = !newTasks[index].isCompleted;
        setTasks(newTasks);
    };

    const removeTask = index => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }

    return(
        <>
        <AddTaskForm addTask={addTask} />
        <hr/>
        <div className="todo-list">
            {tasks.map((task, index)=>(
                <div className="todo">
                    <span onClick={()=>toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
                    {task.text}
                    </span>
                    <Button  onClick={() => removeTask(index)} id="deletebtn"> Delete</Button>
                </div>
            ))}
        </div>
        </>
    )
}


const CompletedTask = () =>{
    const [completedtask, setCompletedtask] = useState([{
        text:"First Task",
        isCompleted:false,
    }]);
     
    const doneTask = donevalue => setCompletedtask([...completedtask, {donevalue}]);
    
    return(
        <>
        <ToDoList doneTask={doneTask} />
        <div className="comletedtask-list">
           {completedtask.map((comp_task, i)=>(
           <div className="completedtask">
            <span className="cmptaskspan" key={i}>{comp_task.text}</span>
           </div>
           ))}
        </div>
        </>
    )

}
//export default CompletedTask;
 export default ToDoList;