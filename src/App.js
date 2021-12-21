import React, { Component } from 'react'
import './App.css';
import './Components/style.css';
import ClassComponent from './Components/ClassComponent';
import Functional from './Components/Functional';


 class App extends Component {
     state = {
       classComponents:false,
       functionComponents:false
     }
   
  

  render() {
    return (
       <div>
                    {/* <Functional/> */}

        {/* <ClassComponent/> */}
          
          <h1 className='heading'> Styling using functional and class component </h1>

          <button className="btn btn-function" onClick={()=> this.setState({functionComponents:!this.state.functionComponents})}> To see styling in functional component</button>  

          <button className="btn btn-class" onClick={()=> this.setState({classComponents:!this.state.classComponents})}>  To see styling in class component</button>




     {
          this.state.classComponents ? 
           <div> <ClassComponent/> </div> : null    
      
     }


    {
          this.state.functionComponents ? 
           <div> <Functional/> </div> : null    
      
     }
      </div>
      
    )
  }

 }
export default App


