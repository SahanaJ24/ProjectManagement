import React, { useState } from 'react'
import '../CSS/Aresource.css';
function AResource() {

    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({resourceid:"",resourcename:"",resourceemail:"",resourcesalary:"",resourcedob:"",resourceequip:""})
    let [index,setIndex]=useState()
    let[bolin,setBolin]=useState(false)

    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

    let {resourceid,resourcename,resourceemail,resourcesalary,resourcedob,resourceequip}=inputdata;

    function addinputdata(){
        if(resourceid===""&&resourcename===""&&resourceemail===""&&resourcesalary==="",resourcedob==="",resourceequip===""){
            alert("Enter All the fields")
        }
        else{
        setArray([...array,{resourceid,resourcename,resourceemail,resourcesalary,resourcedob,resourceequip}])
        setInputdata({resourceid:"",resourcename:"",resourceemail:"",resourcesalary:"",resourcedob:"",resourceequip:""})
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
        total.splice(index,1,{resourceid,resourcename,resourceemail,resourcesalary,resourcedob,resourceequip})
        setArray(total)
        setBolin(false)
        setInputdata({resourceid:"",resourcename:"",resourceemail:"",resourcesalary:"",resourcedob:"",resourceequip:""})

    }

    function updatedata(i){
        let{resourceid,resourcename,resourceemail,resourcesalary,resourcedob,resourceequip}=array[i]
        setInputdata({resourceid,resourcename,resourceemail,resourcesalary,resourcedob,resourceequip})
        setBolin(true)
        setIndex(i)
    }

    return ( <div className='res-entire'>
        <h1 className='res-header'>Resource</h1>
        <div className='res-body'>
            <div className='res-left'>
            <div className='res-input'>
                <div className='res-h2'>Add Employee</div><br/>
            <label>Resource ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='res-inputbox' type="number" value={inputdata.resourceid||""} name="resourceid" placeholder='Enter the Resource ID' onChange={data}/><br/><br/>
            
            <label>Resource Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='res-inputbox' type="text" value={inputdata.resourcename||""} name="resourcename" placeholder='Enter the Name'autoComplete='off' onChange={data}/><br/><br/>
            
            <label>Resource Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='res-inputbox' type="email" value={inputdata.resourceemail||""} name="resourceemail" placeholder='Enter the Email'onChange={data}/><br/><br/>

            <label>Resource Salary</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='res-inputbox' type="number" value={inputdata.resourcesalary||""} name="resourcesalary" placeholder='Enter the Salary' onChange={data}/><br/><br/>

            <label>Resource DOB</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input className='res-inputbox' type="date" value={inputdata.resourcedob||""} name="resourcedob" placeholder='Enter the Date Of Birth' autoComplete='off' onChange={data}/><br/><br/>
            

            <label>Resource Equipment</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <input type="text" className='res-inputbox' value={inputdata.resourceequip||""} name="resourceequip" autoComplete='off' placeholder='Enter the Equipment'onChange={data}/>
                
            <br/><br/>
            <button  className='res-button' onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add`:`Update`}</button><br/><br/>
            </div>
            </div>



            <div className='res-right'>
            <table style={{marginLeft:"6%",marginTop:"4%"}} border="1" width="90%">
                <tbody>
                    <tr className='res-th'>
                        <th style={{height:"6vh"}}>Resource ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date Of Birth</th>
                        <th>Equipment</th>
                        <th>Action</th>
                    </tr>
                {
                    array && array.map((item,i)=>{
                        return(
                            <tr className='res-td'>
                                <td style={{height:"5vh"}}>{item.resourceid}</td>
                                <td>{item.resourcename}</td>
                                <td>{item.resourceemail}</td>
                                <td>{item.resourcesalary}</td>
                                <td>{item.resourcedob}</td>
                                <td>{item.resourceequip}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{backgroundColor:"green",border:"blue",width:"30%",height:"4vh"}} onClick={()=>updatedata(i)}>Update</button>&nbsp;&nbsp;&nbsp;<button style={{backgroundColor:"red",border:"red",width:"30%",height:"4vh"}} onClick={()=>deletedata(i)}>Delete</button></td>

                                
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

export default AResource;