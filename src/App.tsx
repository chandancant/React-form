import React,{useState} from 'react';
import './App.css';

function App() {

  const [name,SetName] = useState('')
  const [mobilenumber,SetMobilenumber] = useState('')
  const [emailid,SetEmailid] = useState('')
  const [emaildate,SetDate] = useState('')
  const[week,SetWeek]=useState('')
  const[file,SetFile]=useState('')
  const[radio,SetRadio]=useState('')
  const [password,SetPassword] = useState('')
  const[reset,SetReset]=useState('')
  

 const forrmValue=()=>{
  
 let data={
name:name,
emailid:emailid,
mobilenumber:mobilenumber,
date:Date,
week:week,
file:file,
radio:radio,
password:password,
reset:reset

  }
 
  console.log("forrmdata",data);
  }
  return (
    <div className="">
     <form>
     <h1 className='primary'> Practices of Input Field</h1>
     
        <label className='center' >
          Name:
         <input type="text" style={{color: "red"}}  onChange={(e)=>SetName(e.target.value)} />
        </label>
         <br></br>


        <label>
          MobileNomber:
          <input type="number" onChange={(e)=>SetEmailid(e.target.value)} />
        </label>
        <br></br>

        <label>
          Emailid:
          <input type="emailid" onChange={(e)=>SetEmailid(e.target.value)} />
        </label><br></br>

        <label>
          Date:
          <input type="date" onChange={(e)=>SetDate(e.target.value)} />
        </label><br></br>
       <label> 
         week:
          <input type ="week" onChange={(e)=>SetWeek(e.target.value)}/>
          </label> <br></br>         
           


        <label>
          <input type= "file" onChange={(e)=>SetFile(e.target.value)}/>
        </label><br></br>

       <label>
           <input type ="radio"onChange ={(e)=>SetRadio(e.target.value)}/> 
       </label><label>HTML</label><br></br>

       
       <label>  
           <input type ="radio"onChange ={(e)=>SetRadio(e.target.value)}/> 
       </label><label>CSS</label><br></br>
 
       
        
     
        <label>
          Password:
          <input type="password" onChange={(e)=>SetPassword(e.target.value)} />
        </label>
        <br></br>


        <input type="button" value="Submit" onClick={()=>forrmValue()} />
        <br></br>

        <label> 
          
          <input type="reset" onChange={(e)=>SetReset(e.target.value)}/> 
        </label>
        
      </form>
   <p>
     {name}
{mobilenumber}

   </p>



   {/* <div className="container"> */}
  <div className="row">
    <label htmlFor="">First namessss</label>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
  </div>/
  <div className="row">
    <label> Last name</label>
    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
  </div>
</div>


    </div>
  );
}

export default App;
