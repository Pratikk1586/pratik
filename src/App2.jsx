
// function ChildComp(props){
//   console.log("child :: ", props)
//   return(<>
//      <h1> I am child, my name is {props.name}</h1>
//   </>)
// }


export function App2(props) {
  // const data = props.details;
  // console.log(data)

   return (
    <div>
        {/* <h1> Hi I am {data.name} </h1> */}
     {/* <button onClick={props.details}>
      click me
     </button> */}

     <ChildComp name = {props.name} />
    </div>
  );
}
