


//Arrow Functional components
const MyComponent = () => {
    
    const name = "pratik";
    
    return(
        <>
        <h1>{name}</h1>
        </>
    )
}

// functional Component

export function MyComponent2(props){

        // const name = "pratik";
        function handleClick(){
            console.log(this);
        }
    return(
        
        
        <div onClick={handleClick}>
           {props.name} Profile
        </div>
        
    )
}