import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import CloseIcon from '@mui/icons-material/Close';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { EmpSidebarData } from './Empsidebardata';
import { SubMenu } from './submenu';
// import '../CSS/sidebar.css';
import '../CSS/empSidebar.css';
import UserLogout from './logout';
import { useSelector } from 'react-redux';
import { EmpSubMenu } from './EmpSubmenu';
import { useUser } from './userContext';

const Nav = styled.div
` background: #22242A;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color:white;
  min-height:2vh;
`;

const NavIcon = styled(Link)
` margin-left: 2rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color:white;
  text-decoration:none;
`;

const SidebarNav = styled.nav 
` background: #2f323a; 
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  color:white;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div
` width: 100%;
`;

const EmpSidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { userEmail } = useUser();
  const showSidebar = () => setSidebar(!sidebar);
  const user=useSelector (state => state.user.value)
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className='emp-side-entire'>
          <Nav>
            <NavIcon to='#'>
              <TableRowsIcon onClick={showSidebar} />
              <div className='emp-side-nav2'>
            <ul className='emp-side-nav-tabs'>
              <li>
                <Link to='/contactus' className='emp-side-link-active'>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to='/aboutus' className='emp-side-link-active'>
                  About us
                </Link>
              </li>
              <li style={{height:"4vh"}}>
                                {!user.email?<Link to='/firstpage' class="emp-side-link-active">Logout</Link>:
                                <h4>{user.email}<UserLogout/></h4>
                                }
                
                </li>
                <li>{userEmail}</li>
            </ul>
          </div>


            </NavIcon>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to='#'>
                <CloseIcon onClick={showSidebar} />
              </NavIcon>
              {EmpSidebarData.map((item, index) => {
                return <EmpSubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
          
        </div>
      </IconContext.Provider>
      <div className='emp-side-body'>
          
          <div className='emp-side-content'>
            <div className='emp-side-home-content'>
              <h1 style={{color:"rgb(219, 215, 215)"}}></h1>
                <h1>Welcome to Tencaity Network!! </h1>
            <h3 style={{width:"50%",height:"33vh",color:"rgb(219, 215, 215)"}} >
            innovative tools from Tenacity to make Coperate employers more efficient and effective
            Web design project management also requires project managers to stretch the project budget across tasks and leave room for contingency expenses.
            </h3>
            
                
            <Link to='/aboutus'>
            <button style={{width:"15%",height:"7vh",backgroundColor:"grey",borderColor:"grey"}}>Learn More</button>
            </Link>
            <div className='emp-list'>
          
            </div>
            
          </div>
          
          </div>
      </div>
 </>

      
    
  );
};

export default EmpSidebar;
