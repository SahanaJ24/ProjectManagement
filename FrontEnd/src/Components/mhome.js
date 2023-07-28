import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SidebarData } from './sidebardata';
import { SubMenu } from './submenu';
import { IconContext } from 'react-icons/lib';
import '../CSS/home.css';
import UserService from '../services/userService'
import { addUserDetails } from './Stores/masterSlice';
import { useUser } from './userContext';

const Nav = styled.div
  `background: #22242A; 
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)
  ` margin-left: 2rem;
  font-size: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav
  ` background:#22242A;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div
  ` width: 100%;
`;

const Mhome = () => {
  // const dispatch = useDispatch();
  // const { Emails } = useSelector((state) => state.master);
  // const { Token } = useSelector((state) => state.master);
  // useEffect(() => {
  //   getData();
  // }, []);

  // const getData = async () => {
  //   try {
  //     const response = await UserService.getUserByEmail(Emails, Token);
  //     console.log("response", " ", response.data);
  //     dispatch(addUserDetails(response.data));
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  const [sidebar, setSidebar] = useState(false);
  const { userEmail } = useUser();
  const showSidebar = () => setSidebar(!sidebar);
  const user=useSelector (state => state.user.value)

  // const {user} = useSelector(state => state.master)
  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <div className='entire'>
          <Nav>
            <NavIcon to='#'>
              <FaIcons.FaBars onClick={showSidebar} />

              <div className='nav'>
                <div className='nav2'>
                  <ul class="nav-tabs">
                    <li>
                      <Link to="/contactus" class="link-active">Contact us</Link>
                    </li>
                    <li>
                      <Link to="/aboutus" class="link-active">About us</Link>
                    </li>
                    <li>
                      <Link to='/firstpage' class="link-active">Logout</Link>
                    </li>
                    <li style={{color:"white"}}>{userEmail}</li>
                  </ul>
                </div>
              </div>
            </NavIcon>
          </Nav>
        </div>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((items, index) => {
              return <SubMenu item={items} key={index} />
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      <div className='body'>
          <div className='home-ldisplay'>
            </div>
        
          <div className='home-rdisplay'>
            <div className='home-display'>Admin Dashboard</div>
            
            
          </div>
            <div className='background'></div>
          <div className='footer'>
            <p style={{ paddingBottom: '90px' }}>
            </p>
          
        </div>
      </div>
    </>
  );
};

export default Mhome;
