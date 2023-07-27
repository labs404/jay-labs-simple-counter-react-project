import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import "../styles/simpleCounter.css";
import Home from "./component/home.jsx";

let counter = 0;
 
setInterval(function() {
    ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
    console.log(counter);
    counter++;
},1000);