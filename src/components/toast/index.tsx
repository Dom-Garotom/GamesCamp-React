import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ffffff;
  color: #000000;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 12px;
  animation: ${fadeIn} 0.5s ease-in-out;
`;

type Prop =  {
    mensage : string;
}

export default function Toast  ( { mensage } : Prop) {
  return (
    <ToastContainer>
      <span>{mensage}</span>
    </ToastContainer>
  );
};

export function toast():void{}
