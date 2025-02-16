export const Eventprops = () => {

    const handleWelcomeUser = (user) => {
        alert(`hey ${user} Welcom`)
    };

    const handlehover = () => {
        alert(`hey user thanks for hovering me`);
    };
return (
<>
    <WelcomeUser
    onClick= { () => handleWelcomeUser("Keshav")}
    onMouseEnter = {handlehover}
    />
</>);

};

const WelcomeUser = (props) => {

    const { onClick, onMouseEnter}  = props;
    const handleGreeting = () => {
        console.log
        ("hello developer this me greeting me");
        onClick();
    };
    return(
    <>
        <button className="p-[15px] bg-red-400" onClick={onClick}>Click Me</button>
        <button className="p-[15px] bg-green-400" onMouseEnter={onMouseEnter}>Hover Me</button>
        <button className="p-[15px] bg-teal-400" onClick={handleGreeting}>Greeting Me</button>
        
    </>);
};