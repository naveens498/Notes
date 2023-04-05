import React from 'react';
import { Form } from 'react-router-dom';

export default function Div2() {
  const Data=(e)=>{
    e.preventDefault();
    alert("Your Notes Saved Successfully!!");
  }
  const Qata=(e)=>{
    e.preventDefault();
    alert("Your Notes Saved Successfully!!");
  }
  return(
    
    <div id='file2'>
    <form onSubmit={Data}>
        <div id="box1">
        <input type="text" id="head1"placeholder='Enter the Topic:'></input><br></br><br></br>
        <input type="text" id="con1" ></input>
        <input type="text" id="con1" ></input>
        <input type="text" id="con1" ></input>
        <input type="text" id="con1" ></input>
        <input type="text" id="con1" ></input>
        <button type="submit" id='sub3'>SUBMIT</button>
        </div>
        </form>
        
        <div id="box2">
        <form onSubmit={Qata}>
        <input type="text" id="head2"placeholder='Enter the Topic:'></input><br></br><br></br>
        <input type="text" id="con2" ></input>
        <input type="text" id="con2" ></input> 
         <input type="text" id="con2" ></input> 
         <input type="text" id="con2" ></input>
         <input type="text" id="con2" ></input>
         <button type="submit"  id='sub4'>SUBMIT</button>
         </form>
        </div>
    </div>
  )
}
