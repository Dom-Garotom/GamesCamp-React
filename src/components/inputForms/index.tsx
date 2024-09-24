import styled from "styled-components"
import { InputDefault  } from "../../styles/styledComponents"
import React from "react";

const WrapperInput = styled.div`
    display: flex;
    align-items: center;
    max-width: 600px;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    margin: 15px 0px;
    background-color: transparent;
    border: 1px solid #000110;

    svg{
      width: 25px;
      height: 25px;
    }
`

type PropsInputForms = {
    key ?: number;
    placeHolder : string;
    children : React.ReactNode;
    type ?: string;
    name ?: string;
    id ?: string;
    required ?: boolean;
}

export default function InputForms({ key , placeHolder , children , type , name , required , id} : PropsInputForms) {
  return (
    <WrapperInput key={key} >
        {children}
        <InputDefault placeholder={placeHolder} id={id} type={type} name={name} required={required} />
    </WrapperInput>
  )
}
