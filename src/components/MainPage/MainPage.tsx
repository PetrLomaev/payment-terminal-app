import React from 'react';
import Link from 'next/link';
import { ListContainer, Title, OperatorButton, IconLogo } from './styled';
import { operatorsList } from '../data/localData';

const mainTitleText = 'Легко и быстро пополнить Ваш баланс!';
const secondaryTitleText = 'Выберите оператора';


const MainPage: React.FC = () => {
  return (
    <ListContainer>
      <Title>{mainTitleText}</Title>
      <Title>{secondaryTitleText}</Title>
      {operatorsList.map((operator) => (
        <Link
          key={operator.id}
          href={`/pay/${operator.id}`}
          passHref
          legacyBehavior
        >
          <OperatorButton>
            {operator.name}
          </OperatorButton>
        </Link>
      ))}
      <IconLogo
        src="/images/operators.jpg"
        alt="Operators"
      />
    </ListContainer>
  );
};

export default MainPage;
