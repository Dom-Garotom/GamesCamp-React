import styled from 'styled-components'
import { ButtonDefault } from '../../styles/styledComponents'
import { FaLock } from "react-icons/fa6";


const WrapperRegistration = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  width: 100%;
  gap: 20px;
  border-top: 2px solid #00a775;
  padding-top: 20px;
  margin-top: 20px ;
        
  
  p{
    color: #e1e1e6;
  }

  
  p:nth-child(1){
    color: #fff;
    font-size: 1rem;
  }

  b{
    font-size: 1.4rem;
  }

  
`

const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  p{
    font-size: 1rem;
    max-width: 250px;
    width: 100%;
    color: #B9B6B6;
  }

  button{
    width: 220px;
  }

  svg{
    width: 25px;
    height: 30px;
    color: #6f6d6d;
  }

  div{
    display: flex;
    align-items: center;
    padding: 0px 10px ;
    gap: 20px;
  }

  @media screen and (max-width: 590px) {
    flex-direction: column;

    p{
      max-width: 100%;
    }

    button{
      width: 100%;
    }
  }
`

interface RegistrationStepProps {
  stepNumber: number;
  title: string;
  description: string;
  buttonText: string;
  buttonAction: () => void;
  observation?: string;
  lock?: boolean
}

export default function RegistrationStep({ buttonAction, buttonText, description, stepNumber, title, observation, lock }: RegistrationStepProps) {
  return (
    <WrapperRegistration>
      <p>PASSO {stepNumber}</p>
      <b>{title}</b>

      <p>{description}</p>

      <Wrapper>
        <ButtonDefault secondary onClick={buttonAction} 
          lock={lock}
        >{buttonText}</ButtonDefault>

        <div>
          {lock ? (
            <FaLock />
          ) : ("")}

          <p>{observation}</p>
        </div>
      </Wrapper>

    </WrapperRegistration>
  )
}
