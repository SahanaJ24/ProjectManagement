import React, { useState } from 'react'
import '../CSS/task.css';
function Task() {

    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({projectid:"",resourceid:"",resourcename:"",taskid:"",taskname:"",status:""})
    let [index,setIndex]=useState()
    let[bolin,setBolin]=useState(false)

    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

    let {projectid,resourceid,resourcename,taskid,taskname,status}=inputdata;

    function addinputdata(){
        if(projectid==="" && resourceid===""&&resourcename===""&&taskid===""&&taskname==="",status===""){
            alert("Enter All the fields")
        }
        else{
        setArray([...array,{projectid,resourceid,resourcename,taskid,taskname,status}])
        setInputdata({projectid:"",resourceid:"",resourcename:"",taskid:"",taskname:"",status:""})
    }
    }
    // console.log(array,"total array")

    function deletedata(i){
        console.log(i,"this index row want to be deleted")
        let total=[...array]
        total.splice(i,1)
        setArray(total)
    }
    function updateinfo(){
        let total=[...array]
        total.splice(index,1,{projectid,resourceid,resourcename,taskid,taskname,status})
        setArray(total)
        setBolin(false)
        setInputdata({projectid:"",resourceid:"",resourcename:"",taskid:"",taskname:"",status:""})

    }

    function updatedata(i){
        let{projectid,resourceid,resourcename,taskid,taskname,status}=array[i]
        setInputdata({projectid,resourceid,resourcename,taskid,taskname,status})
        setBolin(true)
        setIndex(i)
    }

    return ( <div className='task-entire'>
        <div className='task-header'>Task</div>
        <div className='task-body'>
            <div className='task-left'>
            <div className='task-input'>
                <h2>Assign Task</h2>
            <label>Project ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='task-inputbox' type="number" value={inputdata.projectid||""} name="projectid" placeholder='Enter the Project ID' onChange={data}/><br/><br/>
            

            <label>Resource ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='task-inputbox' type="number" value={inputdata.resourceid||""} name="resourceid" placeholder='Enter the Resource ID'onChange={data}/><br/><br/>

            <label>Resource Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='task-inputbox' type="text" value={inputdata.resourcename||""} name="resourcename" placeholder='Enter the Resource Name'autoComplete='off' onChange={data}/><br/><br/>
            

            <label>Task ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='task-inputbox' type="number" value={inputdata.taskid||""} name="taskid" placeholder='Enter the Task ID' onChange={data}/><br/><br/>

            <label>Task Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='task-inputbox' type="text" value={inputdata.taskname||""} name="taskname" placeholder='Enter the Task Name' autoComplete='off' onChange={data}/><br/><br/>
            

            <label>Status</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <select style={{height:"5vh",width:"72%"}} className='task-inputbox' value={inputdata.status||""} name="status" autoComplete='off' placeholder='Enter the status'onChange={data}>
                <option>Select</option>
                <option>Pending</option>
                <option>Completed</option>
                <option>Not Started</option>
            </select>
            <br/><br/>
            <button  className='task-button' onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add`:`Update`}</button><br/><br/>
            </div>
            </div>



            <div className='task-right'>
            <table style={{marginLeft:"4%",marginTop:"4%"}} border="1" width="90%">
                <tbody>
                    <tr className='task-th'>
                        <th style={{height:"6vh"}}>Project Id</th>
                        <th>Resource Id</th>
                        <th>Resource Name</th>
                        <th>Task Id</th>
                        <th>Task Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                {
                    array && array.map((item,i)=>{
                        return(
                            <tr className='task-td'>
                                <td style={{height:"5vh"}}>{item.projectid}</td>
                                <td>{item.resourceid}</td>
                                <td>{item.resourcename}</td>
                                <td>{item.taskid}</td>
                                <td>{item.taskname}</td>
                                <td>{item.status}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{backgroundColor:"rgb(245, 123, 57)",border:"blue",width:"30%",height:"4vh"}} onClick={()=>updatedata(i)}>Update</button>&nbsp;&nbsp;&nbsp;<button style={{backgroundColor:"red",border:"red",width:"30%",height:"4vh"}} onClick={()=>deletedata(i)}>Delete</button></td>
                                
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
        </div>
    </div> );
}

export default Task;