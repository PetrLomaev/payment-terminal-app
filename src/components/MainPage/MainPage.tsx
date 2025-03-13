import React from 'react';
import Link from 'next/link';
import { ListContainer, Title, OperatorButton, IconLogo } from './styled';

const operatorList: string[] = ['МТС', 'Билайн', 'Мегафон'];

const MainPage: React.FC = () => {
  return (
    <ListContainer>
      <Title>Легко и быстро пополнить Ваш баланс!</Title>
      <Title>Выберите оператора</Title>

      {operatorList.map((operator) => (
        <Link
          key={operator}
          href={`/pay/${operator}`}
          passHref
          legacyBehavior
        >
          <OperatorButton>
            {operator}
          </OperatorButton>
        </Link>
      ))}
      <IconLogo
        src="/images/operators.jpg"
        alt='Операторы'
      />

    </ListContainer>
  );
};

export default MainPage;