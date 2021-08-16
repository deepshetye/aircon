import React from 'react';
import { FooterDiv, FooterContainer, FooterRow, FooterColumn, FooterUL, FooterLI, FooterAnchor , FooterH4, FooterSocialLinks } from './footerElements';
import 'boxicons';

const Footer = () => {
    return (
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15380.246133340894!2d73.811166!3d15.481122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe59038b8b25c5aa8!2sAircon%20Engineering!5e0!3m2!1sen!2sin!4v1629116881192!5m2!1sen!2sin" style={{width: "100%", height: "40vh"}}></iframe>
            <FooterDiv>
                <FooterContainer>
                    <FooterRow>
                        <FooterColumn>
                            <FooterH4>Registered Address</FooterH4>
                            <text
                                style={{
                                    color:"white"
                                }}
                            >
                                Tivoli Court, Flat No.- 95
                                1C, Ballygunge Circular Road
                                Kolkata - 700019
                            </text>
                            {/* <FooterUL>
                                <FooterLI><FooterAnchor href="#">Hi</FooterAnchor></FooterLI>
                                <FooterLI><FooterAnchor href="#">Hi</FooterAnchor></FooterLI>
                                <FooterLI><FooterAnchor href="#">HI</FooterAnchor></FooterLI>
                                <FooterLI><FooterAnchor href="#">Hi</FooterAnchor></FooterLI>
                            </FooterUL> */}
                        </FooterColumn>
                        <FooterColumn>
                            <FooterH4>Company</FooterH4>
                            <FooterUL>
                                <FooterLI><FooterAnchor href="about">About</FooterAnchor></FooterLI>
                                <FooterLI><FooterAnchor href="#">Products</FooterAnchor></FooterLI>
                                <FooterLI><FooterAnchor href="#">Services</FooterAnchor></FooterLI>
                                <FooterLI><FooterAnchor href="#">Review</FooterAnchor></FooterLI>
                            </FooterUL>
                        </FooterColumn>
                        <FooterColumn>
                            <FooterH4>Contact</FooterH4>
                            <FooterUL>
                                <FooterLI><i className='bx bx-fw bx-envelope bx-tada-hover' style={{color:'#ffffff'}} /><FooterAnchor href="#">aircon@gmail.com</FooterAnchor></FooterLI>
                                <FooterLI><i className='bx bx-fw bxs-phone bx-tada-hover' style={{color:'#ffffff'}} /><FooterAnchor href="#">0832-</FooterAnchor></FooterLI>
                                <FooterLI><i className='bx bx-fw bxs-phone bx-tada-hover' style={{color:'#ffffff'}} /><FooterAnchor href="#">8888807238</FooterAnchor></FooterLI>
                                <FooterLI><i className='bx bx-fw bxs-phone bx-tada-hover' style={{color:'#ffffff'}} /><FooterAnchor href="#">8888807239</FooterAnchor></FooterLI>
                                {/* <FooterLI><i className='bx bx-fw bxs-phone bx-tada-hover' style={{color:'#ffffff'}} /><FooterAnchor href="#">8888807237</FooterAnchor></FooterLI> */}
                            </FooterUL>
                        </FooterColumn>
                        <FooterColumn>
                            <FooterH4>Socials</FooterH4>
                            <FooterSocialLinks>
                                <a href="#"><box-icon name='twitter' type='logo' animation='tada-hover' ></box-icon></a>
                                <a href="#"><box-icon name='facebook' type='logo' animation='tada-hover' ></box-icon></a>
                                <a href="#"><box-icon name='instagram' type='logo' animation='tada-hover' ></box-icon></a>
                                <a href="#"><box-icon name='linkedin' type='logo' animation='tada-hover' ></box-icon></a>
                            </FooterSocialLinks>
                        </FooterColumn>
                    </FooterRow>
                </FooterContainer>
            </FooterDiv>
        </div>
    )
}

export default Footer
