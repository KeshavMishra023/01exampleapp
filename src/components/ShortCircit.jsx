import { useState } from "react";

export const ShortCircit = () => {
    const [isLoggedIn , setIsLoggedIn] = useState();
    
    // set user state
    const [user, setUser] = useState("");

    const [count, setCount] = useState();
    if(user){
        // const [count, setCount] = useState(); it is not use for conditional opertaors this is the against of thr hoks rule
        setCount(count + 1);
    }

    return(
        <section className="flex items-center justify-center flex-col gap-10 mt-6">
            <h1 className="text-4xl">Welcome to the ShortCircuit Evaluation!</h1>
           {isLoggedIn &&  <p className="text-2xl">please  log in!</p>}

           {user ? `hello ${user}` : "you are logged in!"}
            <div className=" flex gap-10">
                <button className="p-[15px] text-white rounded-2xl bg-blue-700" onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button className="p-[15px] text-white rounded-2xl bg-blue-700" onClick={() => setUser("keshav mishra")}>Set User</button>
                <button className="p-[15px] text-white rounded-2xl bg-blue-700" onClick={ () => setUser("")}>Clear user</button>
            </div>
        </section>
    );
};