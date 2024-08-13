

const parent = React.createElement("div" , 
    {id:"parent"} , 
    [React.createElement("child",{id :"child"},"Inside H1 child tag "), React.createElement("child",{id:"child 2"}, "Inside h2 child tag")]);



console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);