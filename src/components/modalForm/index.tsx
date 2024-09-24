import styled from "styled-components"
import {  ButtonExit } from "../../styles/styledComponents"
import FormDialog from "../formDialog"
import { useEffect, useRef } from "react"
import {  useNavigate } from "react-router"


const WrapperDialog = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    border-radius: 8px;
    background-color: #fff;
    padding: 20px 40px;
`

const WrapperDialogHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;

    p{
        flex: 1;
        font-weight: 600;
        font-size: 1.5rem;
        text-align: left;
        max-width: 400px;
        color: #000011;
    }

`

type PropsModalForms = {
    isOpen : boolean;
    closeModal : () => void;
}


export default function ModalForms( { isOpen , closeModal } : PropsModalForms) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const navigate = useNavigate();

    
    const abrirModal = () =>{
        if (isOpen && modalRef.current){
            modalRef.current.showModal();
        }
    }

    const fecharModal = () =>{
        if (modalRef.current){
            modalRef.current.close();
        }
        closeModal();
    }

    useEffect ( () =>{

        if (isOpen){
            abrirModal();
        } else{
            fecharModal();
        }

        return () =>{
            navigate('/inscrição');
        }

    }, [isOpen] )

  return (
    <WrapperDialog ref={modalRef}>
        <WrapperDialogHeader>
            <p>Garanta seu lugar nessa competição :</p>
            <ButtonExit onClick={fecharModal}>X</ButtonExit>
        </WrapperDialogHeader>
        <FormDialog closeModal={fecharModal} />
    </WrapperDialog>
  )
}
