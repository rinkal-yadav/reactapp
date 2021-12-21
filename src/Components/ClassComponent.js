import React,{Component} from "react";

class buttonWithClass extends Component {
    render(){
        return(
            <div className='container component-div'>
            <h1>This is created using class component </h1>
            <span>
                <p className="para">This is done using external CSS</p>
                <p style={{color:'blue'}}>This is done using inline CSS</p>
            </span>
        </div>
            

        )
    }

}

export default buttonWithClass;

