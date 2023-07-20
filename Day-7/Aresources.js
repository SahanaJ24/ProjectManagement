import React, { useState } from 'react'
import '../CSS/Aresource.css';
function Resources() {
  const [inputList, setInputList]=useState([{resourceid:'',resourcename:'',resourcemail:'',resourcesalary:'',resourcedob:'',resourceequip:''}]);

    const handleinputchange=(e,index)=>{
        const {name,value}=e.target;
        const list=[...inputList];
        list[index][name]=value;
        setInputList(list);
    }

    const handleaddclick=()=>{ 
    alert("Sucessfully Added");
    setInputList([...inputList, {resourceid:'',resourcename:'',resourcemail:'',resourcesalary:'',resourcedob:'',resourceequip:''}]);
    
    }

    const handleremove=index=>{
        const list=[...inputList];
        list.splice(index,1);
        setInputList(list);
    }

    return ( 
            <div className='res-row'>
                <div className='rescol-sm-12'>
                    <h2 style={{textAlign:"center"}} className='mt-3 mb-4 fw-bold'>
                        Employees
                    </h2>
                    {
                        inputList.map((x,i)=>{
                            return(
                    <div className='resrow mb-3'>
                        <div className='resform-groupcol-md-4'>
                            <label>Employee Id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"50%"}} type='text' name='resourceid' class='form-control' onChange={e=>handleinputchange(e,i)} />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br/>
                            <label>Employee Name</label>&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"50%"}} type='text' name="resourcename" class="form-control" onChange={e=>handleinputchange(e,i)}/>
                            <br/>
                          
                            <label>Mail</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"50%"}} type='email' name="resourcemail" class="form-control" onChange={e=>handleinputchange(e,i)}/>
                            <br/>
                            <label>Salary</label>&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"50%"}} type='number' name='resourcesalary' class='form-control' onChange={e=>handleinputchange(e,i)} />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <br/>

                            <label>Date Of Joining</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"50%"}} type='date' name='resourcedob' class='form-control'  onChange={e=>handleinputchange(e,i)} />
                            <br/>
                            <label>Equipment Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input style={{height:"4vh",width:"50%"}} type='text' name='resourceequip' class='form-control'  onChange={e=>handleinputchange(e,i)} />
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

export default Resources;