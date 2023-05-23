import { Table,TableBody,TableCell,TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Table1 = () => {

    var {name,setName} = useState(["Gouri","Neha","Eliza"])
  return (
    <div>T
        <TableContainer>
      
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style= {{color:'red',fontFamily:'cursive', fontSize:'15px' }}> Name</TableCell> 
                        <TableCell style= {{color:'red',fontFamily:'cursive', fontSize:'15px' }}> Major</TableCell>
                        <TableCell style= {{color:'red',fontFamily:'cursive', fontSize:'15px' }}> Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{    
                    return
                    (
                        <TableRow> 
                         <TableCell> {value}</TableCell>
                          </TableRow>
                        // <TableCell> {value,sname} </TableCell>
                        // <TableCell> {value,age} </TableCell> 
                    )})}
                    
                </TableBody>
            </Table>
        
        </TableContainer>
    </div>
  )
}

export default Table1