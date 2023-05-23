import React ,{useState}from 'react'
import {Button,Typography,TextField } from "@mui/material"

const StateBasic = () => {
    var [pname,setpname] = useState("Home");
    var [val, setval] = useState();
    var[gname,setgname]= useState()
const InputHandler = (e)=>
{
    setval(e.target.value)
    console.log(val)

}

const changeName4=()=>
{
 setgname(val)
 setval("")
}

    const changeName= ()=>{
        setpname  ("To Home Page");
    }
    const changeName1= ()=>{
        setpname  ("To Gallery")
    }
    const changeName2= ()=>{
        setpname  ("To Contact")
    }

  return (
    <div>

<br/><br/><br/><br/>

<Typography variant = 'h2'> Hello {gname}</Typography>
<br/>
<TextField variant= 'outlined' value={val} label= "Name" onChange={InputHandler}></TextField>
<br/>
<Button variant = 'contained ' color= 'primary'onClick={changeName4}>Change</Button>
<Typography variant = 'h4'> Welcome {pname} </Typography>
<br/><br/>
<Button variant = 'contained' onClick = {changeName} >Home </Button>&nbsp;

<Button variant = 'contained' color='secondary' onClick = {changeName1} >Gallery </Button>&nbsp;

<Button variant = 'contained' color='error' onClick = {changeName2} > Contact </Button>&nbsp;



    </div>
  )
}

export default StateBasic