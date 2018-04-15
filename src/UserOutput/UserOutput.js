
import React from 'react';

const useroutput = ( props ) => {
    return (        
        <div className="Underline-Block" >
            <h3 onClick={props.click} className={props.extra_class}>Username: {props.username}</h3>
            <h3>Paragraph 1</h3>
            <p> {props.paragraph_1} </p>
            <h3>Paragraph 2</h3>
            <p> {props.paragraph_2} </p> 
            <h3>Output Children</h3>       
            <p>{props.children}</p>
        </div>
    )
};

export default useroutput;