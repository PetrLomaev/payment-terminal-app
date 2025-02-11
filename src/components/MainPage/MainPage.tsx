import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OperatorItem = styled.a`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const operatorList: string[] = ['МТС', 'Билайн', 'Мегафон'];

const MainPage: React.FC = () => {
  return (
    <>
      <List>
        {operatorList.map((operator) => (
            <li key={operator}>
              <Link href={`${operator}`}>{operator}</Link>
            </li>
        ))}
      </List>
    </>
  );
};

export default MainPage;