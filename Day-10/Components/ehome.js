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
import UserService from '../services/userService';
import { addUserDetails } from './Stores/masterSlice'

const Nav = styled.div
  ` background:#22242A;
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
  ` background: #22242A;
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

const Ehome = () => {
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

  
  // const {user} = useSelector(state => state.master)
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
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
        <div className='content'>
          <div className='home-content'>
          <h1>
            Employee Dashboard</h1>
            <h4>
              Project Management System is the process of planning, building, and monitoring the resilience and success of a newly created landing page, or site feature.
            </h4>
            <div className='list'>
              <h4>
                i)Like other client work, project management system requires thoughtful resource allocation. <br></br>
                ii)A good project manager will balance the work-flow in various aspects like
                <ul>
                  <li>
                    SEO audits
                  </li>
                  <li>
                    QA processes
                  </li>
                  <li>
                    Bug checks—across each team members.
                  </li>
                </ul>
              </h4>
            </div>
            <h4>
              Web design project management also requires project managers to stretch the project budget across tasks and leave room for contingency expenses.lopment
            </h4>
          </div>
          <div className='footer'>
            <p style={{ paddingBottom: '90px' }}>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ehome;
