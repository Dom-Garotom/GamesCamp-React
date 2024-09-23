import styled from "styled-components"
import React from "react"

type WrapperSectionProps = {
    direction?: boolean;
};

type PropsSectionDefault = {
    src: string;
    alt: string;
    children: React.ReactNode; 
    rigth ?: true;
}

const WrapperSection = styled.section<WrapperSectionProps>`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: ${ ( props ) => props.direction ? "row" : "row-reverse"};
    width: 99vw;
    min-block-size: 70vh;
    gap: 50px;
    padding: 0px 50px;
    margin: 20px 0px;
    text-align: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: left;

    div{
        display: flex;
        gap: 40px;

        b{
            font-size: 20px;
            width: 150px;
        }
    }

`


export default function SectionDefault({ src , alt, children , rigth } : PropsSectionDefault) {
  return (
    <WrapperSection direction={rigth} >
        <Wrapper >
            {children}
        </Wrapper>

        <Wrapper>
            <img src={src} alt={alt} />
        </Wrapper>

    </WrapperSection>
  )
}
