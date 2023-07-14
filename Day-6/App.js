import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register';
import { Login } from './Components/login';
import Sidebar from './Components/Sidebar';
import About from './Components/about';
import Contact from './Components/contact';
import Resource from './Components/resource';
import Profile from './Components/profile';
import Profile1 from './Components/profile1';

function App() {
  return (
    <Router>
      <Routes>

        <Route index element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/Sidebar' element={<Sidebar/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/resource' element={<Resource/>}/>
        <Route path='/profile1' element={<Profile1/>}/>
        
        
        {/* <Route path='/project' element={<Project/>}/> */}
        
      </Routes>
      </Router>
  );
}

export default App;