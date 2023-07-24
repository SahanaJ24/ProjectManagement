import React, { useState } from 'react' 
import '../CSS/risk.css';
function Risk() {

    let [array,setArray]=useState([])
    let [inputdata,setInputdata]=useState({projectid:"",projectname:"",riskid:"",riskdes:"",mitigation:"",riskstatus:""})
    let [index,setIndex]=useState()
    let[bolin,setBolin]=useState(false)

    function data(e){
        setInputdata({...inputdata,[e.target.name]:e.target.value})
    }

    let {projectid,projectname,riskid,riskdes,mitigation,riskstatus}=inputdata;

    function addinputdata(){
        if(projectid==="" && projectname===""&&riskid===""&&riskdes===""&&mitigation===""&&riskstatus===""){
            alert("Enter All the fields")
        }
        else{
        setArray([...array,{projectid,projectname,riskid,riskdes,mitigation,riskstatus}])
        setInputdata({projectid:"",projectname:"",riskid:"",riskdes:"",mitigation:"",riskstatus:""})
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
        total.splice(index,1,{projectid,projectname,riskid,riskdes,mitigation,riskstatus})
        setArray(total)
        setBolin(false)
        setInputdata({projectid:"",projectname:"",riskid:"",riskdes:"",mitigation:"",riskstatus:""})

    }

    function updatedata(i){
        let{projectid,projectname,riskid,riskdes,mitigation,riskstatus}=array[i]
        setInputdata({projectid,projectname,riskid,riskdes,mitigation,riskstatus})
        setBolin(true)
        setIndex(i)
    }

    return ( <div className='risk-entire'>
        <div className='risk-header'>Risk</div>
        
            <div className='risk-left'>
            <div className='risk-input'>
                <h2>Report Any Bug</h2>
            <label>Project ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Project Name</label><br/>
            <input className='risk-inputbox' type="number" value={inputdata.projectid||""} name="projectid" placeholder='Project Id' onChange={data}/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='risk-inputbox' type="text" value={inputdata.projectname||""} name="projectname" placeholder='Project Name'onChange={data}/><br/>

            <label>Risk ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Status</label><br/>
            <input className='risk-inputbox' type="number" value={inputdata.riskid||""} name="riskid" placeholder='Risk ID'autoComplete='off' onChange={data}/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select style={{height:"5vh",width:"31%"}} className='risk-inputbox' value={inputdata.riskstatus||""} name="riskstatus" autoComplete='off' onChange={data}>
                <option>Select</option>
                <option>On Hold</option>
                <option>In Progress</option>
                <option>Open</option>
                <option>Completed</option>
            </select><br/>
            <label>Description</label><br/>
            <input style={{height:"4vh",width:"72.5%"}} className='risk-inputbox' type="text" value={inputdata.riskdes||""} name="riskdes" placeholder='Description' onChange={data}/><br/>

            <label>Mitigation Strategies</label><br/>
            <input style={{height:"4vh",width:"72.5%"}} className='risk-inputbox' type="text" value={inputdata.mitigation||""} name="mitigation" placeholder='Mitigation Strategies' autoComplete='off' onChange={data}/><br/><br/>
            

            <button  className='risk-button' onClick={!bolin?addinputdata:updateinfo}>{!bolin?`Add`:`Update`}</button><br/><br/>
            </div>
            </div>



            <div className='risk-right'>
            <table style={{marginLeft:"12%",marginTop:"1%"}} border="1" width="75%">
                <tbody>
                    <tr className='risk-th'>
                        <th style={{height:"6vh"}}>Project Id</th>
                        <th>Project Name</th>
                        <th>Risk Id</th>
                        <th>Description</th>
                        <th>Mitigation Strategies</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                {
                    array && array.map((item,i)=>{
                        return(
                            <tr className='risk-td'>
                                <td style={{height:"5vh"}}>{item.projectid}</td>
                                <td>{item.projectname}</td>
                                <td>{item.riskid}</td>
                                <td>{item.riskdes}</td>
                                <td>{item.mitigation}</td>
                                <td>{item.riskstatus}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{backgroundColor:"rgb(245, 123, 57)",border:"blue",width:"30%",height:"4vh"}} onClick={()=>updatedata(i)}>Update</button>&nbsp;&nbsp;&nbsp;<button style={{backgroundColor:"red",border:"red",width:"30%",height:"4vh"}} onClick={()=>deletedata(i)}>Delete</button></td>
                                
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            </div>
        
    </div> );
}

export default Risk;