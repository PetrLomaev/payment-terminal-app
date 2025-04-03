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

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  animation: ${fadeIn} 0.7s ease-in-out;

  @media only screen
  and (min-width: 481px)
  and (max-width: 767px) {
    min-width: 475px;
  }

  @media only screen
  and (min-width: 768px)
  and (max-width: 1024px) {
    min-width: 475px;
  }

  @media only screen
  and (min-width: 1025px)
  and (max-width: 1280px) {
    min-width: 575px;
  }

  @media only screen
  and (min-width: 1281px)
  and (max-width: 1920px) {
    min-width: 600px;
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

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  width: 100%;
  min-width: 400px;

`;

export const BackButton = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  margin: 10px;
  padding: 15px;
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  width: 100%;

  &:hover {
    background: #676767;
    color: #fff;
    border-color: black;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PayButton = styled.button`
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  margin: 10px;
  padding: 15px;
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  width: 100%;

  &:hover {
    background: #676767;
    color: #fff;
    border-color: black;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PaymentResultMessage = styled.div<{ $divColor?: string; }>`
  color: ${(props) => props.$divColor};
  margin: 20px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;
