import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ListContainer = styled.div`
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
    min-width: 80%;
  }

  @media only screen
  and (min-width: 768px)
  and (max-width: 1024px) {
    min-width: 80%;
  }

  @media only screen
  and (min-width: 1025px)
  and (max-width: 1280px) {
    min-width: 80%;
  }

  @media only screen
  and (min-width: 1281px)
  and (max-width: 1920px) {
    min-width: 80%;
  }
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

export const OperatorButton = styled.a`
  background: transparent;
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  margin: 10px;
  padding: 15px 30px;
  font-size: 18px;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60%;

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

export const IconLogo = styled.img`
  max-width: 100%;
  width: 125px;
  height: 50px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1),
`;
