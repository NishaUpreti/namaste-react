        const heading=React.createElement("h1",{},"Hello World from React");
        const root=ReactDOM.createRoot(document.getElementById("root"));
        root.render(heading);
        const parentroot=ReactDOM.createRoot(document.getElementById("parentroot"));
        const parent=React.createElement("div",
        {id:"parent"},
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{},"I am h1 Tag"),
            React.createElement("h2",{},"I am h2 tag")
        ]),
        React.createElement("div",{id:"child1"},[   
            React.createElement("h1",{},"I am h1 Tag"),
            React.createElement("h2",{},"I am h2 tag")
        ])        
        );parent
    parentroot.render(parent);