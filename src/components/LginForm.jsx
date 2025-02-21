import { useState } from "react";

export const LoginForm = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

   const handleSumbitForm = (e) => {
    e.preventDefault();

    const LoginData = {
        user,
        password,
    };
    console.log(LoginData);
    
   };

    return <section className="flex flex-col items-center justify-center mt-9">
        <p>{user} and {password}</p>
        <form className="w-[300px] flex flex-col gap-[15px] p-[20px] bg-gray-100" onSubmit={handleSumbitForm}>
            <h1 className="text-2xl">Login Form</h1>
            <label htmlFor="username">
                Username
            </label>
            <input 
            type="text" 
            name="uname"
            placeholder="username"
            className="py-[8px] bg-amber-200 px-[10px] border-0 outline-0"
            autoCapitalize="off"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
            />
            <label htmlFor="password">
                Password
            </label>
            <input type="password"
            name="password"
            placeholder="password"
            className="py-[8px] bg-amber-200 px-[10px] border-0 outline-0"
            autoCapitalize="off"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="sumbit" className="py-[10px] rounded-[3px] bg-blue-300 w-[100%]"> Login </button>
        </form>
    </section>;
};