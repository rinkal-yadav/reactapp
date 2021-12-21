import React from "react";

function root(){
    return(
        
            <div className='container functional-div'>
            <h1>This is created using functional component </h1>
            <span>
                <p className="para">This is done using external CSS</p>
                <p style={{color:'blue'}}>This is done using inline CSS</p>
            </span>
        </div>

        

    )
}

export default root;