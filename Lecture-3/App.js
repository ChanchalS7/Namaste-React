// import React from "react";
// import  ReactDOM  from "react-dom/client";
// //React element

//  const heading = React.createElement("h1", {id:"heading"}," Bhiya Ram 👋")

//  //for render on the dom , create root

//  const root = ReactDOM.createRoot(document.getElementById("root"))
//  root.render(heading)

import React from "react";
import  ReactDOM  from "react-dom/client";
//React element

//  const heading = React.createElement("h1", {id:"heading"}," Bhiya Ram 👋")
// console.log(heading);
//  //JSX
//  const jsxHeading = <h1 id="hading">Namaste React using JSX</h1>
//  //for render on the dom , create root
// console.log(jsxHeading);
//  const root = ReactDOM.createRoot(document.getElementById("root"))
//  root.render(heading);

// const jsxHeading =(
//     <h1 className="head" tabIndex="5">Namaste React Using JSX 🚀</h1>
// )
// console.log(jsxHeading);


// const data = api.getData(); // if this sends some malicious data then what happened
//React Component
//Class Based component -OLD
//Functional Component -NEW
const elem = <span>React Element</span>
const Title =()=><h1>Title component</h1>
//Functional component

const HeadingComponent = () =>{
    return <h1>Namaste React Functional Component</h1>
}
const number = 1000;
const HeadingComponent2 = () =>{
    return (
       <>
       {/* {data} */}
       {elem}
       <h2>{number}</h2>
        <Title/>
        {/* Call component as a function */}
        {Title()}
        <Title></Title>
        <h1>Namaste React Functional Component</h1>
       </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxHeading)

//how to render the component in root
root.render(<HeadingComponent2/>)