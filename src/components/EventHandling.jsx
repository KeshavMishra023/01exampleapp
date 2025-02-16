
export const  EventHandling = () => {


    // function handleButtonClick (){
    //     alert("Hey I am a onclick event")
    // };
    const handleButtonClick = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.type);
        
        alert("Hey I am a onclick event");
            
    };
    const handleWelcomeUser = (user) => {
        console.log(`Hey ${user} , welcome`);
        
    };

    return(
        <>

        <button onClick={handleButtonClick}>Click me</button>

        <button onClick={ () => handleButtonClick ()}>Click me</button>
        <br />
        <button onClick={(event) => console.log(event)}>Inline Button</button>

        <br />

        <button onClick={ () => alert("hey i am a onClick ebent")}> inline arr</button>
{/* 
        <button onClick={handleWelcomeUser ('keshav')}>Click Me</button> */}

        <button onClick={ () => handleWelcomeUser ("keshav")}>Click Me</button>


        <button onClick={ () => handleWelcomeUser ("Dikshu")}>Click Me</button>

        </>
    );
};