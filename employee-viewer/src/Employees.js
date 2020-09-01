import React from 'react'
import './Employees.css'
import Employee from './Employee'

function Employees() {
    const workers = [
        {id:1, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:2, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:3, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:4, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:5, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:6, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:7, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:8, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:9, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:10, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:11, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:12, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:13, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:14, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:15, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:16, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:17, name:'Matt',email: 'mcraig150@gmail.com'},
        {id:18, name:'Matt',email: 'mcraig150@gmail.com'}
    ]

    return (
        <div className='employees'>
           {workers.map((emp) => 
               <Employee name = {emp.name} email = {emp.email} />
           )}
        </div>
    )
}

export default Employees
