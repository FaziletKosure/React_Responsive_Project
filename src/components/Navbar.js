import React from 'react'
import styled,{css} from "styled-components/macro"
import {Link} from "react-router-dom"
import { menuData } from '../data/MenuData'


const Nav=styled.nav`
height:60px;
background:blue;
display:flex;
justify-content:space-between;
padding:1rem 2rem;
z-index:1;
position:fixed;
width:100%;
`
const NavLink= css`
color:#fff;
align-items:center;
padding:1rem 1rem;
height:100%;
cursor:pointer;
text-decoration:none;
`
const Logo=styled(Link)`
${NavLink}
font-style:italic;
`

const MenuBars=styled.i`
`

const NavMenu=styled.div`
display:flex;
align-items:center;

`

const NavMenuLinks=styled(Link)`
${NavLink}
`
const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>FZLT</Logo>
            <MenuBars/>
            <NavMenu>
                {menuData.map((item,index)=>(
                    <NavMenuLinks to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>

                ))}

            </NavMenu>
           
        </Nav>
    )
}

export default Navbar
