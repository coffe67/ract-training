import React from 'react'

const userinput = ( props ) => {
    return(
        <div>
            <h3> User Input Goes Here </h3>        
            <input type="text" onChange={props.change} value={props.default_username} />
        </div>
    )
};

export default userinput;