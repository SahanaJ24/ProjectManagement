import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import {Alogin} from './Components/Alogin'
import Firstpage from './Components/firstpage';
import { ARegister } from './Components/ARegister';
import { ERegister } from './Components/Eregister'
import Sidebar from './Components/Sidebar';
import {Elogin} from './Components/Elogin';
import Employees from './Components/Employees';
import HomePage from './Components/home';
import Sidebar1 from './Components/homepage';
import Aboutus from './Components/aboutus';
import Contactus from './Components/contactus';
import Resources from './Components/Aresources';
import Task from './Components/task';
import Profile from './Components/profile';
import Risk from './Components/risk';
import EmpSidebar from './Components/EmpSidebar';
import Report from './Components/report';
import MRegister from './Components/mregister';
import Mlogin from './Components/mlogin';
import Mhome from './Components/mhome';
import Elogin1 from './Components/elogin1';
import Ehome from './Components/ehome';
import ERegister1 from './Components/eregister1';
function App() {
  return (
      <Routes>
        <Route path="/" element={<Firstpage/>}/>
        <Route path="/Alogin" element={<Alogin/>}/>
        <Route path="/Elogin" element={<Elogin/>}/>
        <Route path="/Aregister" element={<ARegister/>}/>
        <Route path="/Eregister" element={<ERegister/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/Sidebar" element={<Sidebar/>}/>
        <Route path="/firstpage" element={<Firstpage/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
        <Route path="/Employees" element={<Employees/>}/>
        <Route path='/Aresources' element={<Resources/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/task' element={<Task/>}/>
        <Route path='/risk' element={<Risk/>}/>
        <Route path='/EmpSidebar' element={<EmpSidebar/>}/>
        <Route path='/report' element={<Report/>}/>
        <Route path='/mregister' element={<MRegister/>}/>
        <Route path='/eregister1' element={<ERegister1/>}/>
        <Route path='/mlogin' element={<Mlogin/>}/>
        <Route path='/elogin1' element={<Elogin1/>}/>
        <Route path='/ehome' element={<Ehome/>}/>
        <Route path='/mhome' element={<Mhome/>}/>

      </Routes>
  );
}

export default App