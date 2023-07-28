// import React, { useState }  from 'react';
// import {DashboardOutlined, HomeOutlined, PowerOffOutlined, PowerOutlined} from '@mui/icons-material'
// import {Menu} from 'antd'
// import { Link } from 'react-router-dom';

// import '../CSS/homepage.css';
// import { ERegister } from './Eregister';
// // import {useNavigation} from "react-router-dom"
// function Sidebar1() {
//     // const Navigate=useNavigation();
//     const [page,setPages]=useState('')
//     return ( 
//         <div className='entire'> 
//         <div className='nav'>
//             <div className='nav1'>
//             <h1>PROJECT</h1>
//             </div>
            
//         </div>
//         <div className='side'>
//         <div  className='side1'>
//             <Menu id='leftside'
//                 items={[
//                     {label:"Dashboard",icon:<HomeOutlined onClick={()=>setPages("Dashboard")}/>},
//                     {label:"Projects",key:"Projects",icon:<DashboardOutlined onClick={()=>setPages("Projects")}/>},
//                     {label:"Team",icon:<HomeOutlined onClick={()=>setPages("Team")}/>},
//                     {label:"Report",icon:<HomeOutlined onClick={()=>setPages("Report")}/>},
//                     {label:"Estimates",icon:<HomeOutlined onClick={()=>setPages("Estimates")}/>},
//                     {label:"Timesheet",icon:<PowerOutlined Outlined onClick={()=>setPages("Timesheet")}/>},
//                     {label:"Activity",icon:<HomeOutlined onClick={()=>setPages("Activity")}/>},
//                     {label:"Calender",icon:<HomeOutlined onClick={()=>setPages("Calender")}/>}
                    
//                 ]}>
//             </Menu>
//             </div>
//             <div className='side2'>
//                 {page ==='Dashboard' && <div><ERegister/></div> }
//                 {page ==='Projects' && <div>Projects</div> }
//                 {page ==='Team' && <div>Team</div> }
//                 {page ==='Report' && <div>Report</div>  }
//                 {page ==='Estimates' && <div>Estimates</div>  }
//                 {page ==='Timesheet' && <div>Timesheet</div>  }
//                 {page ==='Activity' && <div>Activity</div>  }
//                 {page ==='Calender' && <div>Calender</div>  }
//         </div>
//             </div>
//             </div>
//      );
// }


// export default Sidebar1;