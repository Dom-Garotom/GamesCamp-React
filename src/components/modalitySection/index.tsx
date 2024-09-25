import styled from "styled-components"
import React from "react"

import Valorant from "../../assets/modalidades/Valorant_Postar_2.webp"
import Cs from "../../assets/modalidades/cs go 2.jpg"
import StreetFigther from "../../assets/modalidades/street fiter.avif"
import Tekken from "../../assets/modalidades/teken.avif"
import { TitleDefault } from "../../styles/styledComponents"

interface PropsModalitySection{
  children ?: React.ReactNode,
}

const WrapperSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 99vw;
  gap: 40px;
  min-block-size: 10vh;
  padding: 0px 20px;
  text-align: center;
`

const Wrapper= styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill , minmax(150px , 250px));
  justify-content:center;
  gap: 60px;
  margin: 20px 0px;
  
  img{
    max-width: 250px;
    width: 100%;
    height: 274px;
    border-radius: 10px;
  }

  img:hover{
    box-shadow: 4px 15px 50px 10px rgba(0, 0, 0, 0.219);
  } 

  img:nth-child(1):hover {
    box-shadow: 4px 15px 50px 10px rgba(255, 162, 0, 0.219);
  }
  
  img:nth-child(2):hover {
    box-shadow:4px 15px 50px 10px rgba(0, 255, 255, 0.20);
  }

  img:nth-child(3):hover {
    box-shadow:4px 15px 50px 10px rgba(0, 0, 255, 0.29);
  }

  img:nth-child(4):hover {
    box-shadow:4px 15px 50px 10px rgba(255, 0, 0, 0.258);
  }

`

export default function ModalitySection ({children} : PropsModalitySection) {
  const patrocinadores = [
    {
      src: Cs,
      alt: "Counter strike Games",
    },
    {
      src: Valorant,
      alt: "Valorant Games",
    },
    {
      src: StreetFigther,
      alt: "StreetFigther",
    },
    {
      src: Tekken,
      alt: "Teken Games",
    },
  ];


  return (
    <WrapperSection>

      <TitleDefault>Modalidades dessa edição</TitleDefault>

      <Wrapper>
        {children}

        {patrocinadores.map( (obj , index) => (
          <img
            key={index}
            src={obj.src}
            alt={obj.alt}
          />
        ))}
      </Wrapper>

    </WrapperSection>    
  )
}
