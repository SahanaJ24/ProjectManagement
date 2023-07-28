import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import '../CSS/EmpEmployee.css';
function EmpGet() {
    const [content, addContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/emp')
            .then(function (response) {
                addContent([...response.data]);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div style={{ backgroundColor: 'white', height: '100vh', width: '100%', color: 'white',  textAlign: 'center' }}>
            <h1 style={{color:'black'}} >Employee</h1>
                <table style={{width:"78%",textAlign:"center"}} className="eprotable">
                    <tr style={{backgroundColor:"grey"}}>
                        <th className="eprotd">Employee Id</th>
                        <th className="eprotd">Employee Name</th>
                        <th className="eprotd">Email</th>
                        <th className="eprotd">Salary</th>
                        <th className="eprotd">Date Of Birth</th>
                        <th className="eprotd">Equipment Type</th>
                    </tr>
                    {content.map((value) => (
                        <tr key={value.pid}>
                            <td className="eprotd">{value.empId}</td>
                            <td className="eprotd">{value.empName}</td>
                            <td className="eprotd">{value.empMail}</td>
                            <td className="eprotd">{value.empSalary}</td>
                            <td className="eprotd">{value.rdob}</td>
                            <td className="eprotd">{value.eqType}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default EmpGet;