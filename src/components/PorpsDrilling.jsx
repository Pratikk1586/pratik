// GrandParent Component
//Whole Parent Component
export function  Grandparent(){
    
    const data = 'Hello world';
    return(
        <>
            <Parent data = {data}/>
        </>
    )
}

// Parent Component

function  Parent(props){
  
    return(
        <>
            <Child data = {props.data}/>
        </>
    )
}

// Child Component

function  Child(props){
  
    return(
        <>
            <GrandChild data = {props.data}/>
        </>
    )
}


// GrandChild Component
// Target Component

function  GrandChild(props){
  
    return(
        <>
           <div> {props.data}</div>
        </>
    )
}


