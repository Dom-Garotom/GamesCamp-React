import styled from "styled-components"
import SponsorItem from "./sponsorItem";
import React from "react"

import bandai from "../../assets/sponsor/bandai.png"
import epic from "../../assets/sponsor/epic-games.png"
import intel from "../../assets/sponsor/intel.svg"
import logitec from "../../assets/sponsor/logitech.png"
import ubisoft from "../../assets/sponsor/ubisoft.png"

interface PropsSPonsorSection{
  children ?: React.ReactNode,
}

const WrapperSponsor = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: 99vw;
  gap: 40px;
  min-block-size: 10vh;
  cursor: grabbing;
  margin-bottom: 20px;

`

export default function SponsorSection ({children} : PropsSPonsorSection) {
  const patrocinadores = [
    {
      src: epic,
      alt: "Epic Games",
      href: "https://www.epicgames.com/",
    },
    {
      src: bandai,
      alt: "Bandai Namco",
      href: "https://www.bandainamcoent.com/",
    },
    {
      src: intel,
      alt: "Intel",
      href: "https://www.intel.com/",
    },
    {
      src: logitec,
      alt: "Logitech",
      href: "https://www.logitech.com/",
    },
    {
      src: ubisoft,
      alt: "Ubisoft",
      href: "https://www.ubisoft.com/",
    },
  ];


  return (
    <WrapperSponsor>
        {children}

        {patrocinadores.map( (obj , index) => (
          <SponsorItem
            key={index}
            src={obj.src}
            alt={obj.alt}
            href={obj.href}
          />
        ))}
    </WrapperSponsor>    
  )
}
