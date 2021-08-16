import styled from 'styled-components';

export const Content = styled.div `
    position: relative;
    width: 100%;
    height: 89vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 768px) {
        display: block;
        height: auto;
    }

    @media (max-width: 574px) {
        // margin-top: 80px;
        display: block;
        height: auto;
    }
`

export const TextBox = styled.div `
    position: relative;
    max-width: 600px;
    top: -60px;
    left: 50px;

    h2 {
        color: #333;
        font-size: 3em;
        line-height: 1.4em;
        font-weight: 500;

        span {
            // color: #000099;
            color: blue;
        }
    }

    p {
        color: #333;
    }

    @media (max-width: 768px) {
        left: 0;
        top: 0;
        height: 200px;
        display: inline;
        text-align: center;
        align-content: center;
    }

    @media (max-width: 574px) {
        height: 200px;
        display: grid;
        text-align: center;
        align-content: center;

        h2 {
            font-size: 2.5em;
        }
    }
`

export const ImageBox = styled.div `
    width: 600px;
    display: flex;
    justify-content: center;

    img {
        max-width: 450px;
    }

    @media (max-width: 768px) {
        width: auto;
        display: flex;
        margin: 50px 0;

        img {
            max-width: 400px;
        }
    }

    @media (max-width: 574px) {
        width: auto;
        display: flex;
        margin: 50px 0;

        img {
            max-width: 300px;
        }
    }
`