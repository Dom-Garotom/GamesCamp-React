import styled from "styled-components"
import React from "react";

const WrapperInput = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 600px;
    width: 100%;
    margin: 15px 0px;
    background-color: transparent;
    text-align: left;

    p{
        color: #000;
        font-size: 1rem;
    }

    a{
        color: #000;
        font-size: 1rem;
        text-decoration: underline;
    }

    a:hover{
        color: #740FE9;
    }

    input[type="checkbox"]{
        width: 20px;
        height: 20px;
    }
`

type PropsInputForms = {
    key ?: number;
    children : React.ReactNode;
    name ?: string;
    required ?: boolean;
}

export default function InputCheckBox({ key , children ,  name , required} : PropsInputForms) {
  return (
    <WrapperInput key={key} >
        <input type="checkbox" name={name} required={required} />
        {children}
    </WrapperInput>
  )
}