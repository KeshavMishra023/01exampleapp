import { useEffect, useState } from "react";

export const UseEffect = () => {
    const [date, setDate] = useState(0);

    useEffect(()=> {
        setInterval(() => {
            const updatedDate = new Date();
            setDate (updatedDate.toLocaleTimeString());
        },1000);
        
        
   
    },[]);

    return <section className='flex items-center flex-col w-[350px] p-[20px] justify-center m-auto mt-10 gap-[20px]'>
    {/* <h1 className="text-3xl">Hello useeffect</h1> */}

    <h1 className="text-4xl">UseEffect Hook</h1>
    <p className="text-2xl">Date : {date}</p>
    <button className="bg-green-600 py-[10px] px-[10px] border-0" onClick={() => setCount( count  + 1)}>Increment </button>
    </section>;
};