import styled from "styled-components";

export const TitleDefault = styled.h2`
    font-size: 2.5rem;
    color: aliceblue;

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


    &:hover{
        background-color: #fff;
        color: #000;
        transition: all 200ms;
    }
`
