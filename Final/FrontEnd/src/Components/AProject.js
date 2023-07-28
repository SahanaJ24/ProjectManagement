import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

import '../CSS/Aproject.css';

function Project() {
    const [inputList, setInputList] = useState([{ pname: '', pstdate: '', pendate: '', pdescription: '', pbudget: ''}]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleUpdate = (data) => {
        // Convert pbudget to a number before sending to the server
        data.pbudget = parseFloat(data.pbudget);

        // Make the Axios POST request to your API
        axios.post('http://localhost:8080/project', data)
            .then(response => {
                console.log('POST response:', response.data);
                // Do something with the response if needed

                // Refresh the page after successful update
                window.location.reload();
            })
            .catch(error => {
                if (error.response) {
                    // The request was made, but the server responded with a status code other than 2xx
                    console.error('POST error:', error.response.data);
                    console.error('Status:', error.response.status);
                } else if (error.request) {
                    // The request was made, but no response was received
                    console.error('No response received:', error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.error('Error:', error.message);
                }
                // Handle errors if necessary, display error messages to the user, etc.
            });
    };
    
    return ( 
        <div className='emp-row'>
            <div className='col-sm-12'>
                <h2 style={{ textAlign: "center" }} className='mt-3 mb-4 fw-bold'>
                    Project
                </h2>
                {inputList.map((project, index) => (
                    <div className='row mb-3' key={index}>
                        <div className='form-groupcol-md-4'>
                            <label>Project Name</label>&nbsp;&nbsp;&nbsp;
                            <input style={{ height: "4vh", width: "20%" }} type='text' name="pname" className="form-control" value={project.pname} onChange={e => handleInputChange(e, index)} />
                          <br />
                        <label>Start Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input style={{ height: "4vh", width: "20.5%" }} type='date' name="pstdate" className="form-control" value={project.pstdate} onChange={e => handleInputChange(e, index)}  />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>End Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input style={{ height: "4vh", width: "20.5%" }} type='date' name="pendate" className="form-control" value={project.pendate} onChange={e => handleInputChange(e, index)}  />
                        <br />
                        <label>Description</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input style={{ height: "4vh", width: "20%" }} type='text' name='pdescription' className='form-control' value={project.pdescription} onChange={e => handleInputChange(e, index)}  />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <label>Budget</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input style={{ height: "4vh", width: "20%" }} type='text' name='pbudget' className='form-control' value={project.pbudget} onChange={e => handleInputChange(e, index)}  />
                        <br />
                        <button
                                style={{ backgroundColor: "rgb(104, 104, 188)", height: "5vh", width: "12%", border: "rgb(104, 104, 188)" }}
                                onClick={() => handleUpdate(project)} // Pass the data of the current project to handleUpdate function
                            >
                                Add
                            </button>
                    </div>
                    <br />
                </div>
                 ))}
            </div>
        </div>
    );
}

export default Project;
