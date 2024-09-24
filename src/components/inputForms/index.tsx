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
`

type PropsInputForms = {
    key ?: number;
    placeHolder : string;
    children : React.ReactNode;
}

export default function InputForms({ key , placeHolder , children } : PropsInputForms) {
  return (
    <WrapperInput key={key} >
        {children}
        <InputDefault placeholder={placeHolder} />
    </WrapperInput>
  )
}
