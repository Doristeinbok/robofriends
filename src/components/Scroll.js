import React from "react";

//there are props, state and children
//here we will use children. 
//children a deffault props even if nothing is passing any props to us
//children is all of out children components

const Scroll = (props) => {
    return (
    <div style={{overflow: 'scroll', border: '5px solid black', height: '800px', whileSpace: 'nowrap'}}>
        {props.children}
    </div>
    );
};


export default Scroll;