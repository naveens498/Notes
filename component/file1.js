import React from 'react'
import { Link } from 'react-router-dom'
export default function Div1()
{
  return(
    <div>
    <h1 id='h1'>Keep Your Notes Safe..!!</h1>
    <p id="em"><b>Enter Your Email ::</b></p>
    <p id='pas'><b>Enter Your Password ::</b></p>
    <input type="email" placeholder='Your Email' id='but' title='Enter the valid Email'></input>
    <input type="password" placeholder='Password' id='pass' title='Enter Your Email Password'></input>
    <img id="img1" src="https://previews.123rf.com/images/bsd555/bsd5551809/bsd555180900938/107779072-task-planning-app-icon-checklist-to-do-list-project-management-tasks-list-ui-ux-user-interface.jpg"></img>
    <nav>
    <Link to='/web'>    <button type="button" value="sumbit" id='sub'>SUBMIT</button></Link>
    </nav>
    </div>
  )
}
