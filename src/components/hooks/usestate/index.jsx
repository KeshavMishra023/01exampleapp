
import { useState } from "react";

export const Counter = () => {

   const [count , setCount] = useState(0);
    

    return (
        <div className=" flex  flex-col items-center justify-center  gap-5 mt-9">
            <h1 className="text-5xl">useState Hook!</h1>
            <br />
            <p className="text-2xl">{count}</p>
            <button className="p-[15px] bg-black text-white rounded-2xl"
            onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
};