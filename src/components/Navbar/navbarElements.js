import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav `
    background : #fff;
    height : 80px;
    // margin-top : -80px;
    display : flex;
    justify-content : center;
    align-items : center;
    font-size : 1rem;
    position : sticky;
    top : 0;
    z-index : 10;

    @media screen and (max-width: 960px) {
        transition : 0.8s all ease;
    }
`
export const NavbarContainer = styled.div `
    display : flex;
    justify-content : space-between;
    height : 80px;
    z-index : 1;
    width : 100%;
    padding : 0 24px;
    max-width : 1100px;
`

export const NavLogo = styled(Link) `
    color : #000;
    justify-self : flex-start;
    cursor : pointer;
    font-size : 1.5rem;
    display : flex;
    align-items : center;
    margin-left : 5px;
`

export const MobileIcons = styled.div `
    display : none;

    @media screen and (max-width: 768px){
        display : block;
        position : absolute;
        top : 0;
        right : 0;
        transform : translate(-100%, 60%);
        font-size : 1.8rem;
        cursor : pointer;
        color : #000;
    }
`

export const NavMenu = styled.div `
    display : flex;
    align-items : center;
    list-style : none;
    text-align : center;

    @media screen and (max-width: 768px){
        display : none;
    }
`

export const NavItem = styled.nav `
    height : 80px;
`

export const NavLinks = styled(Link) `
    color : #000;
    display : flex;
    align-items : center;
    text-decoration : none;
    padding : 0 1rem;
    height : 100%;
    cursor : pointer;

    &.active{
        border-bottom : 3px solid #01bf71;
    }
`

export const NavBtn = styled.nav `
    display : flex;
    align-items : center;
    width : 170px;
    justify-content : center;

    @media screen and (max-width : 768px ){
        display : none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius : 50px;
    background : linear-gradient(to top right, #000099 0%, #3366ff 100%);
    white-space : no-wrap;
    padding : 1rem 22px;
    color : white;
    font-size : 15px;
    height: auto;
    outline : none;
    border : none;
    cursor : pointer;
    transition : all 0.2s ease-in-out;
    text-decoration : none;

    &:hover {
        transform : all 0.2s ease-in-out;
        background : #000;
        color : #fff;

    }
`