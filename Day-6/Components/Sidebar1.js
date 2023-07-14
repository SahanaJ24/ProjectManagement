import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './Sidebardata';
import { SubMenu } from './Submenu';
import { IconContext } from 'react-icons/lib';
import '../Components/Style/side.css';

const Nav = styled.div`
    background: #15171c;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%' )};
    transition: 350ms;
    z-index: 10;
`;
const SidebarWrap = styled.div `
    width: 100%;
`;

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className='entire'>
        <Nav>
            <NavIcon to='#'>
                <FaIcons.FaBars onClick={showSidebar}/>
                
                <div className='nav'>
                    <div className='nav1'>
                        <p>PROJECT </p>
                    </div>
                    <div className='nav2'>
                        <ul class="nav-tabs">
                            <li>
                            <Link to="/contact" class="link-active">Contact us</Link>
                            </li>
                            <li>
                            <Link to="/about" class="link-active">About us</Link>
                            </li>
                            <li>
                            <Link to='/login1' class="link-active">Log out</Link>
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
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
            </NavIcon>
             {SidebarData.map((items, index)=>{
                return <SubMenu item={items} key={index} />
            })}
            </SidebarWrap>
        </SidebarNav>
        </IconContext.Provider>
        </>
    );
};

export default Sidebar;