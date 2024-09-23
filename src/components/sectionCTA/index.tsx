import styled from "styled-components"
import { TitleDefault , ButtonCTA } from "../../styles/styledComponents"

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
    padding: 0px 50px;
    margin: 20px 0px;
    text-align: center;

    h2{
        font-size: 3.5rem;
        text-align: center;
    }
`



export default function SectionCTA({ content } : PropsSectionCTA) {
  return (
    <WrapperSection>
        <TitleDefault>{content}</TitleDefault>
        <ButtonCTA>Preencher o formulario</ButtonCTA>
    </WrapperSection>
  )
}
