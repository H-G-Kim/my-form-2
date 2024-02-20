import { useState } from 'react';
import App from './App';



function Label(props) {

    
  const inputs = [{'First Name': fname, 'Last         Name':lname} ]
  
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
    