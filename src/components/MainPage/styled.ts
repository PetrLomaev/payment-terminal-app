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
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  animation: ${fadeIn} 0.7s ease-in-out;
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

export const OperatorButton = styled.a`
  margin: 10px;
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background-color: #0070f3;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: 100%;
  max-width: 300px;
  text-align: center;

  &:hover {
    background-color: #005bb5;
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
