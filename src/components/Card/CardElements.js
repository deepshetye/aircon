import styled from 'styled-components';

export const CardDiv = styled.div `
    margin: 0 2rem 1rem 0;
    padding: 0 0 0.5rem 0;
    width: 15rem;
    background-color: #fff;
    color: #444;
    text-align: center;
    border-radius: 1rem;
    box-shadow: 0.5rem 0.5rem 1rem rgba(51,51,51,0.2);
    overflow: hidden;
    transition: all 0.1ms ease-in-out;

    &:hover {
        transform: scale(1.02);
    }
`

export const CardHeaderContainer = styled.div `
    height: 4rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.8rem;
    color: #fff;
    clip-path: polygon(0 0, 100% 0%, 100% 85%, 0% 100%);
`

export const CardHeader = styled.div `
    background: linear-gradient(130deg, rgb(0, 119, 238), #06c766);
    height: inherit;
    padding: 1rem 0;
`

export const CardBody = styled.div `
    padding: 0.5rem 0;

    h2 {
        font-size: 1.1rem;
        font-weight: 700;
        margin: -30px 5px 15px 5px;
        line-height: 25px;
        height: 40px;
    }

    p {
        color: #444;
        margin: 20px 30px 20px 30px;
        line-height: 25px;
        height: 70px;
    }
`

export const CardElementButton = styled.button `
    margin: 0.5rem 0;
    padding: 0.7rem 1rem;
    outline: none;
    width: 10em;
    border-radius: 1rem;
    font-weight: 700;
    color: #fff;
    border: none;
    background: linear-gradient(130deg, rgb(0, 119, 238), #06c766);
    cursor: pointer;
    transition: all 0.1ms ease-in-out;

    &:hover {
        transform: scale(0.95);
    }

    &:active {
        transform: scale(1);
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`