import React from 'react';
import backimg from '../../images/backgroundimg.png';
import { Content, TextBox, ImageBox } from './HomeElements'

const Home = () => {
    return (
        <Content>
            <TextBox>
                <h2>Keep The <br/> <span>Weather</span> Outside.</h2>
                <p>Beyond your expectation, we provide you satisfaction</p>
            </TextBox>
            <ImageBox>
                <img src={backimg}/>
            </ImageBox>
        </Content>
    )
}

export default Home
