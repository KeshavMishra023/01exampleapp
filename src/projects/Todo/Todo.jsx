import { useState } from "react";

export const Todo = () => {
    const [inputValue, setInputValue] =useState("");

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
        }

        setTask((prevTask) => [...prevTask, inputValue]);
        
        setInputValue("");
    };
    console.log("hello")
    return(
    <section className="flex items-center flex-col" >
        
        <header className="py-[3%]">
            <h1 className="text-5xl">
                Todo list
            </h1>
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
            <ul>
                {
                    task.map((curTask) => {
                        return <li key={index} >
                            <span></span>
                        </li> ;
                    })
                }
            </ul>
        </section>
    </section>);
};


export default Todo;