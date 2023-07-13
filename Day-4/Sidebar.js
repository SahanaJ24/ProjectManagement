import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { SubMenu } from './Submenu';
import { IconContext } from 'react-icons/lib';
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
        <div className='entire'>
          <Nav>
            <NavIcon to='#'>
              <FaIcons.FaBars onClick={showSidebar} />
              <div className='nav2'>
            <ul className='nav-tabs'>
              <li>
                <Link to='/contact' className='link-active'>
                  Contact us
                </Link>
              </li>
              <li>
                <Link to='/about' className='link-active'>
                  About us
                </Link>
              </li>
              <li>
                <Link to='/login' className='link-active'>
                  Log out
                </Link>
              </li>
            </ul>
          </div>


            </NavIcon>
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
              <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </NavIcon>
              {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />;
              })}
            </SidebarWrap>
          </SidebarNav>
          
        </div>
      </IconContext.Provider>
      
    </>
  );
};

export default Sidebar;
