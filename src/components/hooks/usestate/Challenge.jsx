import { useState } from "react";

export const CounterChallenge = () => {

    const [count, setCount] = useState(0);
    const [step, setStep ] = useState();

    const handleIncrement = () => {
        setCount(count + step);
    };
    const handleDecrement = () => {
        setCount (count - step);
    };
    const handleReset = () => {
        setCount(0);
    };
    return <section className="flex flex-col gap-10 items-center justify-center">
            <h1 className="text-4xl mt-[2rem]">useState Count</h1>
            <p className="text-2xl">
                Count: <span>{count}</span>
            </p>
            <div className="text-2xl">
                <label className="flex  gap-2">
                    Step: 
                        <input 
                        type="number"
                        value={step}
                        onChange={(e ) => setStep(Number(e.target.value)) }
                        className="bg-gray-300 outline-0" />
                </label>
            </div>  

            <div className="flex  gap-10">
                <button className="py-[15px] text-green-400 px-[2rem] rounded-2xl bg-amber-300" onClick={handleIncrement} disabled={count >= 100 }  >Increment</button>
                <button className="py-[15px] text-pink-400 px-[2rem] rounded-2xl bg-amber-300" onClick={handleDecrement}  disabled={count <= 0}  >Decrement</button>
                <button className="py-[15px] text-red-500 px-[2rem] rounded-2xl bg-amber-300" onClick={handleReset}>Reset</button>
            </div> 

    </section>;
};