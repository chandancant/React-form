import React,{useState} from 'react';

import './App.css';

function App() {

  const [name,SetName] = useState('')
  const [password,SetPassword] = useState('')

 const forrmValue=()=>{
  
 let data={
name:name,
password:password
  }
  console.log("formdata",data);
  
  }
  return (
    <div className="App">
     <form>
        <label>
          Name:
          <input type="text" onChange={(e)=>SetName(e.target.value)} />
        </label>

        <label>
          Password:
          <input type="password" onChange={(e)=>SetPassword(e.target.value)} />
        </label>
        <input type="button" value="Submit" onClick={()=>forrmValue()} />
      </form>
   <p>
     {name}
   </p>
    </div>
  );
}

export default App;
