import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Add = (props) => {
  var [input, setinput] = useState({ Name: "", Age: "", Dept: "", Sal: "" })
  var navigate = useNavigate()
  var location = useLocation()
  console.log("loc",location.state)
  
  
  const inputhandler = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }
  const addHandler = () => {
    if (location.state !== null) {
      //update api
      axios.put("http://localhost:3004/update/"+location.state.val._id, input)
        .then((res) => { 
          alert(res.data.message)
          navigate('/view')
        })
    }
    else {
      //add api
      axios.post("http://localhost:3004/add", input)
        .then((res) => {
          alert(res.data.message)
          navigate('/view')
        }
        )
    }
  }
  useEffect(() => {
    if (location.state !== null)
      setinput({...input,
        Name: location.state.val.Name,
        Age: location.state.val.Age,
        Dept: location.state.val.Dept,
        Sal: location.state.val.Sal
      })
  },[])
  return (
    <div>
          <TextField variant='outlined' label='Name' name="Name" value={input.Name} onChange={inputhandler}></TextField> <br /><br />
          <TextField variant='outlined' label='Age' name="Age" value={input.Age} onChange={inputhandler}></TextField> <br /><br />
          <TextField variant='outlined' label='Department' name="Dept" value={input.Dept} onChange={inputhandler}></TextField> <br /><br />
          <TextField variant='outlined' label='Salary' name="Sal" value={input.Sal} onChange={inputhandler}></TextField> <br /><br />
          <Button variant='contained' onClick={addHandler}>Submit</Button>
    </div>
  )
}

export default Add
