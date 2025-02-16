export const  EventPropagation = () => {
    const handleGradParent = () => {
        console.log('hello , I am a Grandpranet clicked');

    };
    const handleParentClick =() => {
        console.log('Hello, I am a Parent Click');
    };
    const handleChildClick = (event) => {
        console.log(event);
        // event.stopPropagation();
        console.log('Hello, I am a child Click.');
    };
    return(
        <section>
            <div onClickCapture={handleGradParent}>
                <div onClickCapture={handleParentClick}>
                    <div onClickCapture={handleChildClick} className="p-[10px] border-1 w-[100px] bg-amber-300 m-2">
                        click Me
                    </div>
                </div>
            </div>

        </section>
    );
};