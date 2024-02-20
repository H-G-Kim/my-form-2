import { useState } from 'react';
import App from './App';



function Label(props) {

    
  const labels = ['First Name', 'Last Name' ]
  
      return (

        <div >
          {
            props.map(label =>(
              <label key ={label}>{label}
              <input type="text" value={fname} name="firstname" onChange ={handleFnameChange} />
              </label>)
            )
          }
       
        </div>
      );
    }
    
    export default App;
    