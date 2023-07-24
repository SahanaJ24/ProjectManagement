import React, { useState, useEffect } from 'react'
import '../CSS/employees.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Employees() {
    const [inputList, setInputList]=useState([{projectid:'',projectname:'',startdate:'',enddate:'',desc:'',budget:''}]);

    const handleinputchange=(e,index)=>{
        const {name,value}=e.target;
        const list=[...inputList];
        list[index][name]=value;
        setInputList(list);
    }

    const handleaddclick=()=>{ 
        alert("Sucessfully Added");
    setInputList([...inputList, {projectid:'',projectname:'',startdate:'',enddate:'',desc:'',budget:''}]);
    
    }

    const handleremove=index=>{
        const list=[...inputList];
        list.splice(index,1);
        setInputList(list);
    }

//     const navigation = useNavigate();
//     const[projectData,setProjectData]=useState({});
//   const handleChange=(e)=>{
//     e.preventDefault();
//     const {id,value}=e.target;
//     setProjectData({...projectData,[id]:value});
//     console.log(projectData);
//   }
//   const[project,addProject]=useState([]);
//     useEffect(() => {
//         axios.get(`http://localhost:8080/project`).then(function (response) {
//           addProject(response.data);
//         });
//       }, []);
//     const handleAddProject=()=>{
        
//         axios.post(`http://localhost:8080/project`,projectData)
//         window.location.reload();
//       }

//       const deletecontent = (pId) => {
//         if (window.confirm('Do you want to delete')) {
//           axios
//             .delete(`http://localhost:8080/income/delete/${pId}`)
//             .then((response) => {
//               alert('Record Deleted');
//               navigation('/project');
//               window.location.reload(false);
//             })
//             .catch((error) => {
//               console.log(error);
//             });
//         }
//       };
    return ( 
        <div className='emp-entire'>
            <div className='emp-row'>
                <div className='col-sm-12'>
                    <div style={{textAlign:"center",color:"white"}} className='mt-3mb-4fw-bold'>
                        Project
                    </div>
                    <br/>
                    {
                        inputList.map((x,i)=>{
                            return(
                    <div className='row mb-3'>
                        <div className='form-groupcol-md-4'>
                            <label>Project Id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"25%"}} id="pId" type='text' name='projectid' class='form-control' onChange={e=>handleinputchange(e,i)} />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>Project Name</label>&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"25%"}} id="pName" type='text' name="projectname" class="form-control" onChange={e=>handleinputchange(e,i)}/>
                            <br/>
                            <label>Start Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"25.5%"}} id="pStdate" type='date' name="startdate" class="form-control" onChange={e=>handleinputchange(e,i)}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <label>End Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"25.5%"}}id="pEndate" type='date' name="enddate" class="form-control" onChange={e=>handleinputchange(e,i)}/>
                            <br/>
                            <label>Description</label>&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"25%"}} id="pDescription" type='text' name='desc' class='form-control' onChange={e=>handleinputchange(e,i)}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <label>Budget</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"25%"}} id="pBudget" type='text' name='budget' class='form-control'  onChange={e=>handleinputchange(e,i)} />
                            <br/>
                            { 
                                inputList.length-1===i &&
                                <button style={{backgroundColor:"green",height:"5vh",width:"12%",border:"green"}} className='btn btn-success' onClick={handleaddclick}>Add</button>
                                
                            }&nbsp;&nbsp;
                            {
                                inputList.length!==1 &&
                                <button style={{backgroundColor:"red",height:"5vh",width:"12%",border:"red"}} className='btn btn-danger' onClick={()=>handleremove(i)}>Delete</button>
                            }&nbsp;&nbsp;
                            {
                                <button style={{backgroundColor:"rgb(104, 104, 188)",height:"5vh",width:"12%",border:"rgb(104, 104, 188)"}}>Update</button>
                            }
                        </div>
                            <br/>
                    </div>
                );})}
                </div>
            </div>
            </div>
     );
}

export default Employees;