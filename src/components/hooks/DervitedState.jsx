import { useState } from "react";

// const users =[
//     {name: "Alice", age: 25},
//     {name: "Bob", age:20},
//     {name: "keshav", age:22},
//     {name: "rohit", age:27}
// ]





export const DervitedState = () => {

    const [users, setUsers] =useState([
        {name: "Alice", age: 25},
        {name: "Bob", age:20},
        {name: "keshav", age:22},
        {name: "rohit", age:27}
    ]);
    
    console.log(users);
    
    const userCount = users.length;

    const averageAge = users.reduce( (accum, curElem) => accum + curElem.age, 0) / userCount;

    return ( <section className="flex items-center justify-center m-[50px]  flex-col gap-2 capitalize">
            <h1>ordered List</h1>
            <ul>
                {
                    users.map((curElem, index) => {
                      return(
                        <li key={index}>
                            {curElem.name} - {curElem.age} year old.
                         </li>
                      );
                    })
                }
            </ul>
            <p>Total Users: {userCount}</p>
            <p>Average:  {averageAge} </p>
    </section>);
};



export default DervitedState;