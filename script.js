import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{id: "heading"}, "🌹 Om Namo Narayana 🌹"); 
// creates Object
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX - transplied before it reaches the JS engine
// PARCEL will use babel to convert JSX syntax to JS so that JS engine can understand and render it

//React Element 

const jsxHeading = <h1> 🌞 this is from JSX 😍</h1>
console.log(jsxHeading);

//React Component

const HeadingComponent = () => {
    return <h1> Om Namo Narayana 🌹🌞 functional component </h1>
};

// component composition 

const HeadingComponent2 = () => (
    <>
    <HeadingComponent />,
     <h1> Radhe Radhe - FC2 </h1>
    </>
);


// root.render(heading);

// root.render(jsxHeading);

root.render(<HeadingComponent2/>);

