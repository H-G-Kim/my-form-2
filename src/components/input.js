import { useState } from 'react';
import App from './App';


function Input(props) {

    

    return (

      <div >
        
          <input type="text" value={fname} name="firstname" onChange ={handleFnameChange} />
      </div>
    );
  }
  
  export default App;