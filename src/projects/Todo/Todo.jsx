import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";

import { MdOutlineDeleteForever } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] =useState("");
    const [dateTime, setDateTime] = useState("");

    const [task, setTask] = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSumbit = (event) => {
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)){
            setInputValue("");
            return;
        };

        setTask((prevTask) => [...prevTask, inputValue]);
        
        setInputValue("");
    };
        
    // Todo date and time

    useEffect(() => {
        const interval =   setInterval(()=> {
            const now = new Date();
            const formattedDated = now.toLocaleDateString();  /*it is a method to call current date */
            const formattedTime = now.toLocaleTimeString(); /* it is a method to call and print the current time*/
            
            setDateTime(`${formattedDated} - ${formattedTime}`);
        
           }, 1000);

           return() => clearInterval(interval);
    }, [])

    // handleDelteTodo 

    const handleDelteTodo = (value) => {
        console.log(task);
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    };


    // handleClearAll  clear all functionallity
    const handleClearAll = () => {
        setTask([]);
    };
   
    return(
    <section className="flex items-center flex-col gap-3" >
        
        <header className="py-[20px] pt-[4rem] text-center">
            <h1 className="text-5xl">
                Todo list
            </h1>
            <h2 className="text-2xl mt-4.5"> {dateTime} </h2>
        </header>
        <section>
            <form className="flex items-center gap-0" onSubmit={handleFormSumbit}>
                <div >
                    <input
                    type="text"
                    autoComplete="off" 
                    className="bg-gray-400 rounded-l-2xl py-2.5 px-3 outline-0  text-white" 
                    value={inputValue} 
                    onChange={(event) => handleInputChange(event.target.value)}
                    />
                </div>
                <div>
                    <button 
                    type="sumbit" 
                    className="py-2.5 px-2.5 bg-blue-300 text-white rounded-r-2xl hover:bg-yellow-300 ">
                    Add Task
                    </button>
                </div>
            </form>
        </section>
        <section>
            <ul className="flex flex-col gap-3 text-2xl mt-2.5">
                {
                    task.map((curTask, index) => {
                        return <li key={index} className="py-[12px] rounded-4xl px-[20px] bg-gray-300 flex items-center  gap-[5rem] " >
                            <span>{curTask}</span>
                            <div className="flex gap-3">
                                <button 
                                className="  rounded-3xl p-[4px] bg-green-400 text-white" >
                                <FaCheck />
                                </button>
                                <button 
                                className=" p-[4px] bg-red-500 text-white rounded-3xl " 
                                onClick={()=>handleDelteTodo(curTask)}>
                                <MdOutlineDeleteForever />
                                </button>
                            </div>
                        </li> ;
                    })
                }
            </ul>
        </section>
        <section>
            <button 
            className="py-[10px] px-[35px] bg-red-500 rounded-2xl hover:bg-red-800"
            onClick={handleClearAll}  >
                Clear all
            </button>
        </section>
    </section>);
};


export default Todo;