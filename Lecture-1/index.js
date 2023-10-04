
// const heading = React.createElement("h1",
// {
//     id:"heading", xyz:"abc",
// },
// "Hello world form React !"
// )
// console.log(heading);
//     const root = ReactDOM.createRoot(document.getElementById("root"))
//     root.render(heading)


// const parent = React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//         React.createElement("h1",{},"I am an h1 tag")
//     )
// );
// console.log(parent);//object

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);


const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'am an h1 tag"), React.createElement("h2",{},"I'am an h2 tag"),]),
    React.createElement("div",{id:"child2"},[React.createElement("h1",{},"I'am an h1 tag"),React.createElement("h2",{},"I'am an h2 tag")]),
]
);
console.log(parent);//object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent);

// but the above task is tedious, 
//JSX is the solution
