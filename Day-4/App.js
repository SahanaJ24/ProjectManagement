import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './Components/Register';
import { Login } from './Components/login';
import Sidebar from './Components/Sidebar';
import About from './Components/about';
import Contact from './Components/contact';
import { Overview } from './Components/overview';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/Sidebar' element={<Sidebar/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/overview' element={<Overview/>}/>
      </Routes>
      </Router>
  );
}

export default App;