/*

Hot Module Replacement -- Parcel will keep an eye on everything whatever you changr and will restart the server whenever we change something.
File Watcher Algorithm -- C++ 




*/




import React from "react";
import ReactDOM from "react-dom/client";



const heading1 = React.createElement("h1", {
    id: "title"
    } , "Heading From Parcel"); 
    const heading2 = React.createElement("h2", {
    id: "title"
    } , "Parcel is Amazing"); 
    const container = React.createElement("div", {
    id: "container"
    } , [heading1,heading2]); 
    
    //console.log(heading); Every object in the react is an react element
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    //passing a react element inside a root.  
    root.render(container);
