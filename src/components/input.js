import { useState } from 'react';
import App from './App';


function Input(props) {

    

    return (

      <div >
        
          <label>
          {props.firstNameLabel}
          <input type="text" value={fname} name="firstname" onChange ={handleFnameChange} />
          </label>
          <label>
          {props.LastNameLabel}
          <input/>
          </label>
     
      </div>
    );
  }
  
  export default App;