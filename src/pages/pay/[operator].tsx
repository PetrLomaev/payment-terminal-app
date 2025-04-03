import React from 'react';
import { useRouter } from 'next/router';
import PaymentPage from '@/components/PaymentPage/PaymentPage';

const PayPage: React.FC = () => {
  const router = useRouter();
  const { operator } = router.query;

  if (!operator) {
    return <div>Загрузка...</div>;
  }

  return (
    <PaymentPage operator={operator as string} />
  );
};

export default PayPage;
