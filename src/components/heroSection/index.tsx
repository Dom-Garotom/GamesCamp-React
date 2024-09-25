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
    margin-bottom: 50px;
    padding: 0px 20px;

    p{
        font-size: 20px;
        display: inline-block;
        font-weight: 600;
        color: #fff;
    }

    @media screen and (max-width: 400px){
        h1{
            font-size: 3.4rem;
        }
    }

`

const Wrapper = styled.div`
    display: flex;
    gap: 40px;
    
    
    b{
        font-size: 20px;
        max-width: 150px;
        text-align: center;
    }
    
    
    
    @media screen and (max-width: 400px){
        justify-content: center;
        flex-wrap: wrap;

        b{
            max-width: 250px;
            text-align: center;
        }
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
