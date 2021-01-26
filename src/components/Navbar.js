import React from 'react'
import styled,{css} from "styled-components/macro"
import {Link} from "react-router-dom"
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import Bars from '../images/bars1.svg'
import {FaBars} from 'react-icons/fa'


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
display:none;

@media screen and (max-width: 768px){
    display:block;  
    background-image:url(${Bars});
    background-size:contain;
    height:40px;
    width:40px;
    color:#fff;
    cursor:pointer;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-50%,20%);
  }

`

const NavMenu=styled.div`
display:flex;
align-items:center;
margin-right:-48px;
@media screen and (max-width: 768px){
  display:none;  
}
`
const NavMenuLinks=styled(Link)`
${NavLink}
`

const NavBtn=styled.div`
display:flex;
align-items:center;
margin-right:50px;

@media screen and (max-width: 768px){
    display:none;  
  }

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
            <NavBtn>
                <Button to='/contact' primary='true'>
                  Contact Us  
                </Button>
            </NavBtn>
           
        </Nav>
    )
}

export default Navbar
