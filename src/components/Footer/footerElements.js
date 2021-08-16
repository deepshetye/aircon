import styled from 'styled-components';
// import { Link as LinkRouter } from 'react-router-dom';
// import { Link as LinkScroll } from 'react-scroll';
// import { FaTimes } from 'react-icons/fa';

export const FooterDiv = styled.footer `
    // background-color: #24262b;
    background-color: black;
    padding: 70px 0;
`
export const FooterContainer = styled.div `
    max-width: 1170px;
    // background-color: red;
    margin: auto;
`
export const FooterUL = styled.ul `
    list-style: none;
`

export const FooterLI = styled.li `
    display: flex;
    text-align: center;
    height: 10px;
    align-items: center;
    
    &:not(:last-child) {
        margin-bottom: 15px
    }
`

export const FooterRow = styled.div `
    display: flex;
    flex-wrap: wrap;
`

export const FooterColumn = styled.div `
    width: 25%;
    padding: 0 15px;

    @media (max-width: 768px) {
        width: 50%;
        margin-bottom: 30px;
    }

    @media (max-width: 574px) {
        width: 100%;
    }
`

export const FooterH4 = styled.h4 `
        font-size: 18px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 35px;    
        font-weight: 500;
        position: relative;
        // padding-bootom: 
        // border-bottom: 2px solid #e91e63;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        background-color: #3366ff;
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }
`

export const FooterAnchor = styled.a `
    font-size: 16px;
    text-tranform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    text-align: center;
    color: #bbbbbb;
    display: block;
    transition: all 0.3s ease;

    &:hover {
        color: #ffffff;
        padding-left: 8px;
    }
`

export const FooterSocialLinks = styled.div `
    a {
        display: inline-grid;
        height: 40px;
        width: 40px;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.2);
        margin: 0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;;
        color: #ffffff;
        transition: all 0.5s ease;

        &:hover {
            color: #24262b;
            background-color: #ffffff;
        }
    }
`