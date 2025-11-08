
//vanilla JS
// const root = document.getElementById("root");
// const heading = document.createElement("h1")
// heading.innerHTML="Om Ganeshaya Namaha"

// root.appendChild(heading);

//using React CDN

//React.createElement() function signature is createElement(type, props, ...children).

const heading = React.createElement("h1", {}, "Om Ganeshaya Namaha");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)