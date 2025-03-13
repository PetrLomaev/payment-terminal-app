import React, { useState } from 'react';
import { Formik } from 'formik';
import getSchema from '@/utils/validation';
import { useRouter } from 'next/router';
import PhoneInput from '../PhoneInput/PhoneInput';
import AmountInput from '../AmountInput/AmountInput';
import { Loader, FormContainer, FormStyled, BackButton, PayButton, PaymentStatusContainer, PaymentResultMessage } from './styled';

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
    } catch (error: any) {
      setPaymentStatus(error);
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    router.push('/');
  };


  return (
    <>
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
              <AmountInput
                name="paymentAmount"
              />
              <PayButton type="submit" disabled={loading}>
                {loading ? 'Обработка запроса...' : 'Оплатить'}
              </PayButton>
              <BackButton onClick={handleBack}>Вернуться на главный экран</BackButton>
              {loading && <Loader />}
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