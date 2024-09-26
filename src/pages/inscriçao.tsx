import styled from 'styled-components'
import RegistrationStep from '../components/registrationStep'
import FooterSection from '../components/footerSection'
import { TitleDefault } from '../styles/styledComponents'
import backGround from "../assets/background-steps.jpg"
import { useState } from 'react'
import { useNavigate } from 'react-router'
import Toast from '../components/toast'


const Wrapper = styled.main`
  display: flex;
  padding: 80px 50px 80px 50px;
  background-image: linear-gradient(
    to left,
    #140330ad,
    #2f076ebd,
    #381079d7,
    #2f027997
  ), url(${backGround});
  background-repeat: no-repeat;
  background-size: cover;
 
`

const WrapperStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
`

export default function Inscricao() {
  const navigate = useNavigate();
  const [isLock, setIsLock] = useState(true);
  const [isLockStep2, setIsLockStep2] = useState(true);


  const [showToast, setShowToast] = useState(false);
  const [showToastPayment, setShowToastPayment] = useState(false);
  const [showToastStatus, setShowToastStatus] = useState(false);

  const handleShowToast = () => {
    setIsLock(false);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleShowToastPayment = () => {
    setShowToastPayment(true);
    setIsLockStep2(false);


    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleShowToastStatus = () => {
    setShowToastStatus(true);
    setTimeout(() => {
      setShowToast(false);
      navigate("/")
    }, 7000);


  };

  return (
    <>

      <Wrapper>


        <WrapperStep>
          <TitleDefault>Bem-vindo ao GamesCamp!</TitleDefault>
          <RegistrationStep
            stepNumber={1}
            title="Confirme sua inscrição no evento"
            description="Para garantir sua vaga no campeonato, confirme sua inscrição clicando no botão abaixo. A confirmação confirma sua presença obrigatória no evento."
            buttonText="Confirmar inscrição"
            buttonAction={() => handleShowToast()}
            observation="Você receberá um e-mail com os detalhes após a confirmação."
          />

          <RegistrationStep
            stepNumber={2}
            title="Realize o pagamento"
            description="O próximo passo é realizar o pagamento para garantir sua vaga. Clique no botão abaixo para efetuar o pagamento via nosso sistema seguro."
            buttonText="Pagar agora"
            buttonAction={() => handleShowToastPayment()}
            observation="Você poderá parcelar o pagamento em até 3x sem juros."
            lock={isLock}
          />


          <RegistrationStep
            stepNumber={3}
            title="Confirmação de recebimento"
            description="Aguardamos a confirmação do seu pagamento. Assim que for processado, você receberá um e-mail com todos os detalhes do evento."
            buttonText="Verificar status"
            buttonAction={() => handleShowToastStatus()}

            observation="Isso pode levar até 24 horas para ser concluído."
            lock={isLockStep2}
          />

        </WrapperStep>


      </Wrapper>

      {showToast && (
        <Toast
          mensage="Email enviado para sua caixa de entrada!"
        />
      )}

      {showToastPayment && (
        <Toast
          mensage="Pagamento realizado com sucesso"
        />
      )}

      {showToastStatus && (
        <Toast
          mensage="Email com os detalhes do evento foi encaminhado para sua caixa de entrada! "
        />
      )}

      <FooterSection />
    </>
  )
}
