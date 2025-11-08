
//vanilla JS
// const root = document.getElementById("root");
// const heading = document.createElement("h1")
// heading.innerHTML="Om Ganeshaya Namaha"

// root.appendChild(heading);

//using React CDN

//React.createElement() function signature is createElement(type, props, ...children).

//ReactElement(Object) => HTML(Browser Understands)



const heading = React.createElement("h1", {id: "heading", parents: "shiva and parvathi"}, ["Om Ganeshaya Namaha",[(
         React.createElement("div",{id:"child1"},[
        React.createElement("h1",{}, "i am H1 tag from child 1"),
        React.createElement("h2",{}, "i am H2 tag from child 1"),
    ])), React.createElement("div",{id:"child2"},[
        React.createElement("h1",{}, "i am H1 tag from child 2"),
        React.createElement("h2",{}, "i am H2 tag from child 2"),
    ])
    ]]);

    /// reactdom will take control of the div with id root and will replace the content inside that div with the react element we created
//const root = ReactDOM.createRoot(document.getElementById("root"));

const guru = ReactDOM.createRoot(document.getElementById("root")); 
// updated variable name it need not be root
console.log(heading);
console.log(root);


const parent = React.createElement(
    "div",
    {id: "parent"},[(
         React.createElement("div",{id:"child1"},[
        React.createElement("h1",{}, "i am H1 tag from child 1"),
        React.createElement("h2",{}, "i am H2 tag from child 1"),
    ])), React.createElement("div",{id:"child2"},[
        React.createElement("h1",{}, "i am H1 tag from child 2"),
        React.createElement("h2",{}, "i am H2 tag from child 2"),
    ])
    ]
   
);

//

guru.render(heading);
// root.render(parent);