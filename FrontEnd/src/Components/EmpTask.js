import React, { useEffect, useState } from 'react';
import '../CSS/EmpEmployee.css';
import axios from 'axios';

function EmpTask() {
    const [content, addContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/task')
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
            <h1 style={{color:'black'}} >Task</h1>
                <table style={{width:"78%",textAlign:"center"}} className="eprotable">
                    <tr style={{backgroundColor:"grey"}}>
                        <th className="eprotd">Task Id</th>
                        <th className="eprotd">Task Name</th>
                        <th className="eprotd">Employee Id</th>
                        <th className="eprotd">Employee Name</th>
                        <th className="eprotd">Project Id</th>
                        <th className="eprotd">Status</th>
                    </tr>
                    {content.map((value) => (
                        <tr key={value.pid}>
                            <td className="eprotd">{value.taId}</td>
                            <td className="eprotd">{value.taName}</td>
                            <td className="eprotd">{value.empId}</td>
                            <td className="eprotd">{value.empName}</td>
                            <td className="eprotd">{value.pId}</td>
                            <td className="eprotd">{value.taStatus}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default EmpTask;
