import styled from "styled-components"
import ModalForms from "../modalForm";
import { TitleDefault , ButtonCTA } from "../../styles/styledComponents"
import { useState } from "react";

type PropsSectionCTA= {
    content : string;
}

const WrapperSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, #7800ff, #7800ff);

    width: 99vw;
    min-block-size: 50vh;
    gap: 50px;
    padding: 0px 20px;
    margin: 20px 0px;
    text-align: center;

    h2{
      font-size: 3.5rem;
      text-align: center;
    }


    @media screen and (max-width: 400px){
      h2{
        font-size: 2.7rem;
      }
    }
`



export default function SectionCTA({ content } : PropsSectionCTA) {
  const [IsOpen , setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  

  return (
    <WrapperSection>
        <TitleDefault>{content}</TitleDefault>
        <ButtonCTA onClick={showModal}>Preencher o formulario</ButtonCTA>

        <ModalForms isOpen={IsOpen} closeModal={closeModal}/>
    </WrapperSection>
  )
}
