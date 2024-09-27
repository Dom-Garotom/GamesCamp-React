import styled from "styled-components"
import { useEffect, useRef , useState } from "react"
import { ButtonDefault } from "../../styles/styledComponents"
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


const WrapperCarrousel = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
  min-block-size: 10vh;
  cursor: grabbing;
  margin: 30px 0px;
  padding: 80px 0px;

  img{
    width: 228px;
    height: 150px;
    border-radius: 20px;
  }
  
  button{
    max-width: 50px;
  }

  button:nth-cHild(1){
    position: absolute;
    left: 20px;

  }

  button:nth-cHild(3){
    position: absolute;
    right: 20px;

  }


  @media screen and (max-width:550px) {
      button:nth-cHild(1){
      position: absolute;
      left: 10px;

    }

    button:nth-cHild(3){
      position: absolute;
      right: 10px;

    }
  }

`

const WrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  min-width: 300px;
  gap: 20px;
  cursor: grabbing;
  overflow-x: scroll;
  scrollbar-width: none;
  scroll-behavior: smooth;

  @media screen and (max-width:550px) {
    width: 70%;
  }

`


interface Images {
    src : string;
    alt : string;
}
interface PropsCarrousel {
    array : Images[],
}

export default function Carroulsel( { array } : PropsCarrousel) {
    const carrousel = useRef<HTMLDivElement>(null);
    
    
    const aumentar = () => {
        if (carrousel.current) {
            const pontoMaximo = carrousel.current.scrollWidth - carrousel.current.clientWidth;
            
            if (carrousel.current.scrollLeft >= pontoMaximo) {
                carrousel.current.scrollTo({
                    left: 1,
                    behavior: 'smooth',
                })

            } else {
                carrousel.current.scrollLeft += 240;
            }
        }
    }

    const diminuir = () => {
        if (carrousel.current) {

            const pontoMaximo = carrousel.current.scrollWidth - carrousel.current.clientWidth;

            if (carrousel.current.scrollLeft == 0) {
                carrousel.current.scrollTo({
                    left: pontoMaximo,
                    behavior: 'smooth',
                })
            } else {
                carrousel.current.scrollLeft -= 125;
            }
        }
    }

    const [isScroll , setIsScroll] = useState(true);


    useEffect(()=>{

        const scrool = setInterval (()=>{
            if (isScroll){
                aumentar();
            }
        }, 2000)

        
        return ( ()=>{
            if (scrool){
                clearInterval(scrool);
            }
        })

    }, [isScroll])



    return (
        <WrapperCarrousel>
            <ButtonDefault onClick={() => diminuir()} >
                <IoIosArrowBack/>
            </ButtonDefault>

            <WrapperContainer ref={carrousel}>
                {array.map((obj, index) => (
                    <img
                        key={index}
                        src={obj.src}
                        alt={obj.alt}
                    />
                ))}
            </WrapperContainer>


            <ButtonDefault onClick={() => aumentar()}>
                <IoIosArrowForward/>
            </ButtonDefault>

        </WrapperCarrousel>
    )
}
