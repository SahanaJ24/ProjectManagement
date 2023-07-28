import React, { useEffect, useState } from 'react';
import '../CSS/EmpEmployee.css';
import axios from 'axios';

function ProGet() {
    const [content, addContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/project')
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
                <h1 style={{color:'black'}} >Project</h1>
                <table style={{width:"78%",textAlign:"center"}} className="eprotable">
                    <tr style={{backgroundColor:"grey"}}>
                        <th className="eprotd">Project Id</th>
                        <th className="eprotd">Project Name</th>
                        <th className="eprotd">Start Date</th>
                        <th className="eprotd">End Date</th>
                        <th className="eprotd">Description</th>
                        <th className="eprotd">Budget</th>
                    </tr>
                    {content.map((value) => (
                        <tr key={value.pid}>
                            <td className="eprotd">{value.pid}</td>
                            <td className="eprotd">{value.pname}</td>
                            <td className="eprotd">{value.pstdate}</td>
                            <td className="eprotd">{value.pendate}</td>
                            <td className="eprotd">{value.pdescription}</td>
                            <td className="eprotd">{value.pbudget}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default ProGet;
