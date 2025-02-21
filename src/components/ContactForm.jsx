import { useState } from "react";

export const ContactForm = () =>{
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSumbitForm = (e) => {
        e.preventDefault();

        const ContactData = {
            user: user,
            password : password,
            message : message
        };
        console.log(ContactData);
        
    };

    return <section className="flex flex-col items-center gap-[40px]  mt-14 justify-center">
        <p>My Name is <span className="text-blue-500"> {user}</span> and password <span className="text-blue-500">{password}</span> this is my message <span className="text-blue-500">{message}</span>  </p>
        <form className="flex flex-col gap-[10px] w-[450px] rounded-2xl bg-gray-300 p-[30px] " onSubmit={handleSumbitForm}>
            <h1 className="text-2xl">Contact Form</h1>
            <label htmlFor="username">
                Username
            </label>
            <input 
            type="text"
            autoComplete="off"
            placeholder="username"
            name="user"
            className="py-[15px] px-[10px] bg-amber-100 outline-0"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
             />

             <label htmlFor="password">
                Password
             </label>
             <input 
            type="password"
            autoComplete="off"
            placeholder="password"
            className="py-[15px] px-[10px] bg-amber-100 outline-0"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
             />
             
             <label htmlFor="Message">
                Message
             </label>
             <textarea
            type="text"
            name="message"
            autoComplete="off"
            className="py-[15px] px-[10px] bg-amber-100 outline-0"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
             />
             <button type="sumbit" className="py-[10px] bg-blue-300">Send Message</button>
        </form>
    </section>;
};