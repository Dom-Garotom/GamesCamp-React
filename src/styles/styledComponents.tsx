import styled from "styled-components";

export const TitleDefault = styled.h2`
    font-size: 2.5rem;
    color: aliceblue;

`

export const MainTitle = styled.h1`
    font-size: 4.25rem;
    color: #fff;
`


export const ButtonDefault = styled.button`
    width: 250px;
    height: 48px;
    padding: 10px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.2rem;
    color: #000;
    background-color: #fff;
    transition: all 200ms;
    cursor: pointer;


    &:hover{
        background-color: #343546;
        color: #fff;
        transition: all 200ms;
    }
`

export const ButtonCTA = styled(ButtonDefault)`
    color: #fff;
    background-color:  #000;
    height: 60px;


    &:hover{
        background-color: #fff;
        color: #000;
        transition: all 200ms;
    }
`

export const ButtonExit = styled(ButtonCTA)`
    width: 50px;
    height: 50px;
`

export const InputDefault = styled.input`
    max-width: 400px;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    margin: 15px 0px;
    outline: none;
    font-weight: 600;
    font-size: 1.2rem;
    background-color: transparent;
    border: 1px solid #000110;

    &::placeholder{
        font-weight: 600;
        font-size: 1.2rem;
        color: #B9B6B6;
    }

`

export const Negrito = styled.b`
    color: #FFEB08;
`

