import styled from "styled-components"
import { MainTitle, Negrito  } from "../../styles/styledComponents"
import ImageBackGround from "../../assets/BackGround.png"

const WrapperHero = styled.section`
    background-image: url(${ImageBackGround});
    background-size: cover;


    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 99vw;
    min-block-size: 100vh;
    text-align: center;

    p{
        font-size: 20px;
        display: inline-block;
        font-weight: 600;
        color: #fff;
    }

`

const Wrapper = styled.div`
    display: flex;
    gap: 40px;

    b{
        font-size: 20px;
    }
`

export default function HeroSection() {
  return (
    <WrapperHero>
        <MainTitle>Games Camp 2024</MainTitle>
        <p>Venha fazer parte do maior campeonato de games do Brasil</p>
        <Wrapper>
            <Negrito>32 equipes</Negrito>
            <Negrito>4 modalidades</Negrito>
            <Negrito>$500.000 reais</Negrito>
        </Wrapper>

        <p>11 de outubro a 18 de outubro de 2024</p>
    </WrapperHero>
  )
}
