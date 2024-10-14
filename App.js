import React from 'react';
import ReactDOM from "react-dom/client";

{
  /* <div id='parent'>
    <div id='child'>
        <h1></h1>
        <h2></h2>
    </div> 
    <div id='child'>
        <h1></h1>
        <h2></h2>
    </div>
</div> */
}

//creating the html structure as above
const element = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "this is a h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is an h1 tag"),
    React.createElement("h2", {}, "this is a h2 tag"),
  ]),
]);

// const heading = React.createElement("h1", {id: 'heading', prop: 'prop'}, "Hello world from react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
