import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const View = () => {
    var [v, setv] = useState([])
    var navigate=useNavigate()
    axios.get("http://localhost:3004/view")
        .then((response) => {
            console.log(response.data)
            setv(response.data)
        })
    const delvalue = (id) => {
        axios.delete("http://localhost:3004/remove/" + id)
            .then((res) => {
                alert(res.data.message)
                window.location.reload()
            })
    }
    const updvalue = (val) => {
        navigate("/add",{state:{val}})
    }
  return (
    <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Department</TableCell>
                          <TableCell>Salary</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {v.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{val.Name}</TableCell>
                                  <TableCell>{val.Age}</TableCell>
                                  <TableCell>{val.Dept}</TableCell>
                                  <TableCell>{val.Sal}</TableCell>
                                  <TableCell>
                                      <Button variant="contained" onClick={()=>{delvalue(val._id)}}>Delete</Button>
                                  </TableCell>
                                  <TableCell>
                                      <Button variant='contained' onClick={() => { updvalue(val) }}>Update</Button>
                                  </TableCell>
                            </TableRow>
                        )
                    })}  
                  </TableBody>
              </Table>
      </TableContainer>
    </div>
  )
}

export default View
