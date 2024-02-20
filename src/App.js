import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import label from './components/Label'


function App() {

const [fname, setFname] = useState('First name');
const [lname, setLname] = useState('Last name');
const [age, setAge] = useState(0);
const [gender, setGender] =useState('Male');

const handleFnameChange = (e) =>{
  setFname(e.target.value);
}

const handleLnameChange = (e) =>{
  setLname(e.target.value);
}

const handleGenderChange = (e) =>{
  setGender(e.target.value);
}

const handleAgeChange = (e) =>{
  setAge(e.target.value);
}
const handleInputChange =(e) =>{
  e.preventDefault();
  console.log("First name: " + fname + ", Last  name: " + lname+ ", Gender: " + gender+", Age: " + age )
}

const labels = ['First Name', 'Last Name' ]

  return (
    <div className="App">
        <form onSubmit={handleInputChange}>
        <Label props={labels} />
      </form>
    </div>
  );
}

export default App;



/*
  <div className="App">
        <form onSubmit={handleInputChange}>
        <label>
          First Name:
          <input type="text" value={fname} name="firstname" onChange ={handleFnameChange} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lname} name="lastname" onChange ={handleLnameChange}/>
        </label>
        <label>
          Age:
          <input type="number" value={age} name="age" onChange ={handleAgeChange}/>
        </label>
        <label>
          Gender:
          <select  onChange ={handleGenderChange} value={gender}>
            {gender}
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <input type="submit" value="Submit"  />
        <input type="reset" value="reset"  />
      </form>
    </div>
  );


*/