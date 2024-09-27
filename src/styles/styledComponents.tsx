import styled from "styled-components";

export const TitleDefault = styled.h2`
    font-size: 2.5rem;
    color: aliceblue;

`

export const MainTitle = styled.h1`
    font-size: 4.25rem;
    color: #fff;
`

type ButtonProps = {
    secondary?: boolean;
    lock?: boolean;
    block ?: boolean
  };
  

export const ButtonDefault = styled.button<ButtonProps>`
    width: 250px;
    height: 48px;
    padding: 10px;
    border-radius: 4px;
    font-weight: 700;
    font-size: 1.2rem;
    color: #000;
    background-color: ${(props) => ( props.secondary ? "#29E0A9 ": "#fff")};
    opacity: ${(props) => (props.lock ? 0.40 : 1)};
    transition: all 200ms;
    cursor: ${(props) => (props.lock ? "no-drop" : "pointer")};


    &:hover{
        background-color: ${(props) => ( props.secondary ? "#19795c ": "#343546")};
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

export const ButtontoTop = styled(ButtonCTA)`
    position: fixed; 
    bottom: 20px; 
    right: 30px; 

    width: 50px;
    height: 50px;
    background-color: #1a1822;

    pointer-events: ${(props) => (props.block ? 'auto' : 'none')};
    opacity: ${(props) => (props.block ? '1' : '0')};
    transform: ${(props) => (props.block ? 'translateY(0)' : 'translateY(1rem)')};
    transition: opacity 0.20s ease, transform 0.60s ease;
`

export const InputDefault = styled.input`
    width: 100%;
    padding-left: 10px;
    outline: none;
    font-weight: 600;
    font-size: 1.2rem;
    color: #6a6a6a;
    background-color: transparent;

    &::placeholder{
        font-weight: 600;
        font-size: 1.2rem;
        color: #6a6a6a;
    }

`

export const Negrito = styled.b`
    color: #FFEB08;
`

