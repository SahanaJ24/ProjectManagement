import React, { useState } from 'react'
import '../CSS/employees.css';

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

    return ( 
            <div className='emp-row'>
                <div className='col-sm-12'>
                    <h2 style={{textAlign:"center"}} className='mt-3 mb-4 fw-bold'>
                        Project
                    </h2>
                    {
                        inputList.map((x,i)=>{
                            return(
                    <div className='row mb-3'>
                        <div className='form-groupcol-md-4'>
                            <label>Project Id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"20%"}} type='text' name='projectid' class='form-control' onChange={e=>handleinputchange(e,i)} />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <label>Project Name</label>&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"20%"}} type='text' name="projectname" class="form-control" onChange={e=>handleinputchange(e,i)}/>
                            <br/>
                            <label>Start Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"20.5%"}} type='date' name="startdate" class="form-control" onChange={e=>handleinputchange(e,i)}/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <label>End Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"20.5%"}} type='date' name="enddate" class="form-control" onChange={e=>handleinputchange(e,i)}/>
                            <br/>
                            <label>Description</label>&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"20%"}} type='text' name='desc' class='form-control' onChange={e=>handleinputchange(e,i)} />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                            <label>Budget</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"20%"}} type='text' name='budget' class='form-control'  onChange={e=>handleinputchange(e,i)} />
                            <br/>
                            { 
                                inputList.length-1===i &&
                                <button style={{backgroundColor:"green",height:"5vh",width:"12%",border:"green"}} className='btn btn-success' onClick={handleaddclick}>Add</button>
                                
                            }&nbsp;&nbsp;
                            {
                                inputList.length!==1 &&
                                <button style={{backgroundColor:"red",height:"5vh",width:"12%",border:"red"}} className='btn btn-danger' onClick={()=>handleremove(i)}>Remove</button>
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
        
     );
}

export default Employees;