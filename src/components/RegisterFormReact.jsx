import { useState } from "react";

export const RegisterFormReact = () => {
    const [ user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        phone : "",
    });

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setUser((prev) => ({ ...prev, [name]:value})
        
        
        );
        console.log(value);
    };

    const handleSumbitForm = (event) => {
        event.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            password,
            phone,
        };
        console.log(formData);
        
    };

    return<>
    <p className="text-center py-7">Hello, My Name is <span className="text-blue-600">{user.firstName}</span> and <span className="text-blue-600"> {user.lastName}</span> or email id is <span className="text-blue-600">{user.email}</span> and this is my password <span className="text-blue-600">{user.password}</span> and my phone number is <span className="text-blue-600">{user.phone}</span>. </p>
        <form className="flex items-center justify-center" onSubmit={handleSumbitForm}>
            <div className="shadow-2xl p-[35px] flex flex-col gap-3  w-[390px]">
                <h1 className="text-center text-4xl">Sign up</h1>
                <p className="text-[22px]">Please Fill in this form to create an account.</p>
                <label htmlFor="firstName">
                    <b>First Nmae</b>
                </label>
                <input 
                className="my-[5px] outline-0 border-0 bg-gray-300 px-[10px] rounded-[5px] py-2.5"
                type="text"
                name="firstName"
                placeholder="Enter firstName"
                value={user.firstName}
                required 
                autoComplete="off"
                onChange={handleInputChange}/>
                <label htmlFor="Last Name">
                    <b>Last Name</b>
                </label>
                <input 
                className="my-[5px] outline-0 border-0 bg-gray-300 px-[10px] rounded-[5px] py-2.5"
                type="text"
                name="lastName"
                placeholder="Enter lastName"
                value={user.lastName}
                required 
                autoComplete="off"
                onChange={handleInputChange}/>
                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input 
                className="my-[5px] outline-0 border-0 bg-gray-300 px-[10px] rounded-[5px] py-2.5"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={user.email}
                required 
                autoComplete="off"
                onChange={handleInputChange}/>
                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input 
                className="my-[5px] outline-0 border-0 bg-gray-300 px-[10px] rounded-[5px] py-2.5"
                type="password"
                name="password"
                placeholder="Enter Password"
                value={user.password}
                required 
                autoComplete="off"
                onChange={handleInputChange}/>
                <label htmlFor="phone">
                    <b>Phone Number </b>
                </label>
                <input
                className="my-[5px] outline-0 border-0 bg-gray-300 px-[10px] rounded-[5px] py-2.5" 
                type="number"
                name="phone"
                placeholder="Enter Phone No"
                value={user.phone}
                required 
                autoComplete="off"
                onChange={handleInputChange}/>
                <p>By creating an account you agree to our <span className="text-blue-400"> Terms & Conditions</span></p>
                <button className="w-[100%] bg-blue-400 py-[10px] rounded-[5px]" type="sumbit">Sign Up</button>
            </div>
        </form>
    </>;
};