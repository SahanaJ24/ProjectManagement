import React, { useEffect, useState } from 'react';
import '../CSS/EmpEmployee.css';
import axios from 'axios';

function RiskGet() {
    const [content, addContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/risk')
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
            <h1 style={{color:'black'}} >Risk</h1>
                <table style={{width:"78%",textAlign:"center"}} className="eprotable">
                    <tr style={{backgroundColor:"grey"}}>
                        <th className="eprotd">Project Id</th>
                        <th className="eprotd">Project Name</th>
                        <th className="eprotd">Risk Id</th>
                        <th className="eprotd">Status</th>
                        <th className="eprotd">Description</th>
                        <th className="eprotd">Mitigation Strategy</th>
                    </tr>
                    {content.map((value) => (
                        <tr key={value.pid}>
                            <td  className="eprotd">{value.pid}</td>
                            <td className="eprotd">{value.pname}</td>
                            <td className="eprotd">{value.riId}</td>
                            <td className="eprotd">{value.riDesc}</td>
                            <td className="eprotd">{value.mitigationStrategy}</td>
                            <td className="eprotd">{value.riStatus}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default RiskGet;
