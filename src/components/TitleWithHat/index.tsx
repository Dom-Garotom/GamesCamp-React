import styled from "styled-components";
import { TitleDefault } from "../../styles/styledComponents";


const WrapperTitle = styled.div`
    max-width: 500px;
    width: 100%;
    margin: 18px 0px;
    position: relative;
    span{
        position: absolute;
        font-weight: 500;
        color: #fff;
        top: -18px;
        font-size: 1.2rem;
    }

    h2{
        font-size: 3.7rem;
    }

`

type PropsTitleWithHat ={
    content : string,
    hat : string,
}


export default function TitleWithHat(props : PropsTitleWithHat ) {
  return (
   <WrapperTitle>
    <span>{props.hat}</span>
    <TitleDefault>{props.content}</TitleDefault>
   </WrapperTitle>
  )
}
