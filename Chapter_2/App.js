/*

Hot Module Replacement -- Parcel will keep an eye on everything whatever you changr and will restart the server whenever we change something.
File Watcher Algorithm -- C++ 
MINIFY 
Buldling 
Cleaning the code
It manages dev and production build.  == Use npx parcel build index.html
Caching while Development 
Image Optimzation
Compression 
Older Version On Browser 
HTTPS on Dev -- npx parcel index.html --https
Everything is stored at parcel-cache 
Port Number 
Consistent Hashing Algorithm 
Zero Config 

Transitive Dependencies

Browser List -- It's an array that will version list of browser -- Parcel will make sure whatever mentioned the app will 
run on those browser.  -- Its inside the package.json

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
