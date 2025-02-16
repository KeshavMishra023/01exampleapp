import { useState } from "react";

export const State = () => {

    // let value = 0;
    // const handleButtonClick = () => {
    //     value++;
    //     console.log(value);
        
    // }
    // let array = useState();
    // console.log(array);

    let [count, setCount] = useState(0);

        console.log("Parent Componenet render");
        


    const handleButtonClick = () => {
        setCount (() => count + 1);
    };

    return (
        <section className="flex flex-col gap-[2rem] m-[5rem] items-center justify-center">
            <h1> {count} </h1>
            <button  className="p-[10px] bg-green-400" onClick={handleButtonClick}>Increment</button>

            <ChildComp count = {count} />

        </section>
    );
};

function ChildComp ({count}){
    console.log("Child Component Rendered");
    return <div>Child Component- {count} </div>;
}



export default State;





