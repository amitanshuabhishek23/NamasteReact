const heading1 = React.createElement("h1", {
    id: "title"
    } , "Heading 1"); 
    const heading2 = React.createElement("h2", {
    id: "title"
    } , "Heading 2 "); 
    const container = React.createElement("div", {
    id: "container"
    } , [heading1,heading2]); 
    
    //console.log(heading); Every object in the react is an react element
    
    const root = ReactDOM.createRoot(document.getElementById("root"));
    
    //passing a react element inside a root.  
    root.render(container);
