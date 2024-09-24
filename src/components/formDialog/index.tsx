import styled from 'styled-components'
import InputForms from "../inputForms"
import InputCheckBox from '../inputForms/inputCheckBox';
import InputModalidades from '../inputForms/inputModalidades';
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson} from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { LuCodepen } from "react-icons/lu";
import { ButtonCTA } from '../../styles/styledComponents';


const WrapperForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        max-width: 600px;
        width: 100%;
        margin: 20px 0px;
    }
`

type prop = {
    closeModal ?: () => void;
}

export default function FormDialog( {closeModal} : prop ) {
    const handleSubmit = ( e : React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }

  return (
    <WrapperForm onSubmit={handleSubmit}>
        <InputForms placeHolder='Nome completo' required>
            <IoPerson/>
        </InputForms>      
        <InputForms placeHolder='Seu número de whatsApp'  type='number' required>
            <FaPhoneAlt/>
        </InputForms>   
        <InputForms placeHolder='Digite seu email'  type='email' required>
            <HiOutlineMail/>
        </InputForms>
        <InputModalidades placeHolder='Escolha a sua modalidade' required>
            <LuCodepen/>
        </InputModalidades> 
        <InputCheckBox>
            <p>Concordo com os <a href="">Termos</a> e <a href="">Políticas de privacidade</a></p>
        </InputCheckBox>

        <ButtonCTA type='submit' onClick={closeModal} >Garantir Inscrição</ButtonCTA>    
    </WrapperForm>
  )
}
