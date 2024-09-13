const heading1 = React.createElement("h1",
    {
        id:"heading1" 
    },
    "this is h1 heading");
    const heading2 = React.createElement("h1",
    {
        id:"heading2" 
    },
    "this is h2 heading");


    const container = React.createElement("div",
    {
        id:"container" 
    },
    [heading1,heading2]);

    

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);