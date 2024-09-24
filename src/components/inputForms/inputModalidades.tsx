import styled from "styled-components"
import React from "react";
import { InputDefault  } from "../../styles/styledComponents"

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
    name ?: string;
    id ?: string;
    required ?: boolean;
}

export default function InputModalidades({ key , placeHolder , children  , name , required , id} : PropsInputForms) {
    const list = ["Counter-strike 2", "Valorant" , "Street Fighter" , "Teken 8"];


  return (
    <WrapperInput key={key} >
        {children}
        <InputDefault placeholder={placeHolder} id={id} list="OptionList" name={name} required={required} />

        <datalist id="OptionList">
            {list.map( (item , index) => (
                <option key={index} value={item} />
             ))}
        </datalist>
    </WrapperInput>
  )
}
