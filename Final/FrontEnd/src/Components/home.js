// import React from 'react'
// import {Menu} from "antd";
// import '../CSS/home.css';
// import ViewComfyOutlinedIcon from '@mui/icons-material/ViewComfyOutlined';
// import { Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { DashboardOutlined, HomeOutlined, PowerOutlined, UnfoldLessRounded, VerifiedUser } from '@mui/icons-material';
// import Project from '../Components/project';
// function HomePage() {
//     const navigate=useNavigate()
//     return ( 
//         <div style={{display:"flex",flexDirection:"column",flex:1,height:"100vh"}}>
//             <Header/>
//         <div style={{display:"flex",flexDirection:"row",flex:1}}>
//             <SideMenu/>
//             <Content/>
//         </div>
//         </div>
//      );
// }
// function Header() {
//     return <div className='home-header' style={{
//         height:60,
//         color:"white",
//         display:"flex",
//         justifyContent:"center",
//         alignItems:"center",
//         fontWeight:"bold",
//     }}>
//     Header</div>
// }

// function SideMenu(){
//     const navigate=useNavigate();
//     return(
//     <Menu className='home-menu'
//     onClick={({key})=>{
//         if(key==="signout"){

//         }
//         else{
//             navigate(key)
//         }
//     }}
//     defaultSelectedKeys={[window.location.pathname]}
//     items={[
//         {label:"Dashboard", key:"/", icon:<DashboardOutlined/>},
//         {label:"Project", key:"/project", icon:<ViewComfyOutlinedIcon/>},
//         {label:"Resources", key:"/resource", icon:<DashboardOutlined/>},
//         {label:"Tasks", key:"/task", icon:<UnfoldLessRounded/>},
//         {label:"Attendence", key:"/attendence", icon:<UnfoldLessRounded/>},
//         {label:"Report Analysis", key:"/report", icon:<PowerOutlined/>},
//         {label:"Profile", key:"/profile", icon:<PowerOutlined/>},
//         {label:"Signout", key:"/signout",icon:<VerifiedUser/>,danger:true}
        
//     ]}></Menu>
//     );
// }
// function Content() {
//     return ( 
//         <div>
//         <Routes>
//             <Route path="/" element={<div>Dashboard</div>}></Route>
//             <Route path="/project" element={<Project/>}></Route>
//             <Route path="/resource" element={<div>Resources</div>}></Route>
//             <Route path="/task" element={<div>Task</div>}></Route>
//             <Route path="/report" element={<div>Report</div>}></Route>
//             <Route path="/profile" element={<div>Profile</div>}></Route>
//             <Route path="/attendence" element={<div>Attendence</div>}></Route>
//         </Routes>
//         </div>
//      );
// }


// export default HomePage;