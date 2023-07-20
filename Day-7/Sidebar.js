import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import CloseIcon from '@mui/icons-material/Close';
import TableRowsIcon from '@mui/icons-material/TableRows';
import { SidebarData } from './sidebardata';
import { SubMenu } from './submenu';
import '../CSS/sidebar.css';

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

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className='side-entire'>
          <Nav>
            <NavIcon to='#'>
              <TableRowsIcon onClick={showSidebar} />
              <div className='side-nav2'>
            <ul className='side-nav-tabs'>
              <li>
                <Link to='/contactus' className='link-active'>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to='/aboutus' className='link-active'>
                  About us
                </Link>
              </li>
              <li>
                <Link to='/firstpage' class="link-active">Logout</Link>
              </li>
            </ul>
          </div>


            </NavIcon>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to='#'>
                <CloseIcon onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
          
        </div>
      </IconContext.Provider>
      <div className='side-body'>
          
          <div className='side-content'>
            <div className='side-home-content'>
            <h2 style={{marginTop:"16%",marginRight:"20%"}}>innovative tools from GroupBean to make Coperate employers more efficient and effective
            </h2>
            <div className='list'>
          
            </div>
            
          </div>
          
          </div>
      </div>
 </>

      
    
  );
};

export default Sidebar;
