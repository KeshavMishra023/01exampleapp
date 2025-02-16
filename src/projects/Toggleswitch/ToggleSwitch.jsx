import { useState } from "react";
import { IoIosSwitch } from "react-icons/io";
import { FaUserSecret } from "react-icons/fa";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState();
    const handleToggleSwitch = () => {
        setIsOn (!isOn);
    };

    return(
        <>
            <h1 className="mb-[20px]">Toggle Switch <IoIosSwitch /> <FaUserSecret />
            </h1>
            <div className="w-[100px] flex items-center h-[50px] bg-gray-400 rounded-[40px] cursor-pointer" style={{backgroundColor: isOn ? "#4caf50" : "#f44336"}} onClick={handleToggleSwitch}>
                <div className={`rounded-[50%] w-[40px] ml-[10px] flex items-center justify-center h-[40px] bg-gray-500 ${isOn ? "bg-green-400 translate-x-[39px]" : "bg-red-400 translate-x-[0]"} `}>
                    <span className="text-white">{isOn ? "on" : "off"}</span>
                </div>
            </div>
        </>
    );
};