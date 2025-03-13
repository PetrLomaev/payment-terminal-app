import styled, { keyframes } from 'styled-components';
import { Form } from 'formik';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0070f3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  animation: ${fadeIn} 0.7s ease-in-out;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  width: 100%;
`;

export const BackButton = styled.button`
  margin: 10px 0; /* Отступы сверху и снизу */
  padding: 15px;
  font-size: 18px;
  color: #fff;
  background-color: #0070f3;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%; /* Ширина 100% от родительского контейнера */

  &:hover {
    background-color: #005bb5;
  }
`;

export const PayButton = styled.button`
  margin: 10px 0;
  padding: 15px;
  font-size: 18px;
  color: #fff;
  background-color: #483D8B;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #6A5ACD;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PaymentStatusContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const PaymentResultMessage = styled.div<{ $divColor?: string; }>`
  color: ${(props) => props.$divColor};
  margin: 10px;
`;
