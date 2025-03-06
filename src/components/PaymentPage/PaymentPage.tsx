import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import styled, { keyframes } from 'styled-components';
import getSchema from '@/utils/validation';
import { useRouter } from 'next/router';
import { GlobalStyles } from '@/styles/global';
import PhoneInput from './PhoneInput/PhoneInput';
import PaymentAmountInput from './PaymentAmountInput/PaymentAmountInput';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #0070f3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 20px auto;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  max-width: 400px; /* Ограничиваем максимальную ширину формы */
  margin: 0 auto; /* Центрируем форму */
`;

const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  width: 100%;
`;

const Button = styled.button`
  margin: 10px 0; /* Отступы сверху и снизу */
  padding: 15px;
  font-size: 18px;
  color: #fff;
  background-color: #483D8B;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%; /* Ширина 100% от родительского контейнера */

  &:hover {
    background-color: #6A5ACD;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PaymentStatusContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PaymentResultMessage = styled.div<{ $divColor?: string; }>`
  color: ${(props) => props.$divColor};
  margin: 10px;
`;

const PaymentPage: React.FC<{ operator: string }> = ({ operator }) => {
  const { paymentSchema } = getSchema();
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const router = useRouter();

  const operation = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          resolve(isSuccess);
        } else {
          reject('Во время оплаты произошла ошибка');
        }
      }, 2000)
    });
  };

  const handleSubmit = async () => {
    setPaymentStatus('');
    setLoading(true);
    try {
      const operationResult = await operation();
      if (operationResult) {
        setShowError(false);
        setPaymentStatus('Оплата прошла успешно!');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      }
    } catch(error: any) {
      setPaymentStatus(error);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
    <GlobalStyles />
    <FormContainer>
    <h1>Форма оплаты</h1>
    <h3>Оплата оператора {operator}</h3>
    <Formik
      initialValues={{
        phoneNumber: '',
        paymentAmount: '',
      }}
      validationSchema={paymentSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormStyled>
          <PhoneInput
            name="phoneNumber"
          />
          <PaymentAmountInput
            name="paymentAmount"
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Обработка запроса...' : 'Оплатить'}
          </Button>
          {loading && <Loader/>}
          <PaymentStatusContainer>
            {paymentStatus && (
              <PaymentResultMessage
                $divColor={showError ? 'red' : 'green'}>
                {paymentStatus}
              </PaymentResultMessage>
            )}
          </PaymentStatusContainer>
        </FormStyled>
      )}
    </Formik>

    </FormContainer>
    </>
  );
};

export default PaymentPage;