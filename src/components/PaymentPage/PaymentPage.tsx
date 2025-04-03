/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState } from 'react';
import { Formik } from 'formik';
import getSchema from '@/utils/validation';
import { useRouter } from 'next/router';
import PhoneInput from '../PhoneInput/PhoneInput';
import AmountInput from '../AmountInput/AmountInput';
import { Title, Loader, FormContainer, FormStyled, BackButton, PayButton, PaymentResultMessage } from './styled';
import { operatorsList } from '../data/localData';

const PaymentPage: React.FC<{ operator: string }> = ({ operator }) => {
  const { paymentSchema } = getSchema();
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const router = useRouter();

  const currentOperator = operatorsList.filter((elem) => elem.id === operator)[0];

  const mainTitleText = 'Оплата оператора';
  const operationSuccessText = 'Оплата прошла успешно! Переход на главную страницу...';
  const operationErrorText = 'Во время оплаты произошла ошибка. Попробуйте снова';
  const payButtonNormalText = 'Оплатить';
  const payButtonLoadingText = 'Обработка запроса...';
  const backButtonText = 'Вернуться на главный экран';
  const paymentResultMessageColorSuccess = 'green';
  const paymentResultMessageColorFailure = 'red';

  const operation = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5;
        if (isSuccess) {
          resolve(isSuccess);
        } else {
          reject(operationErrorText);
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
        setPaymentStatus(operationSuccessText);
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
        <Title>{mainTitleText}</Title>
        <Title>{currentOperator.name}</Title>
        <Formik
          initialValues={{
            phoneNumber: '',
            paymentAmount: '',
          }}
          validationSchema={paymentSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <FormStyled>
              <PhoneInput
                name="phoneNumber"
              />
              <AmountInput
                name="paymentAmount"
              />
              <PayButton type="submit" disabled={loading}>
                {loading ? payButtonLoadingText : payButtonNormalText}
              </PayButton>
              <BackButton type="button" onClick={handleBack}>{backButtonText}</BackButton>
              {loading && <Loader />}
              {paymentStatus && (
                <PaymentResultMessage
                  $divColor={showError ? paymentResultMessageColorFailure : paymentResultMessageColorSuccess}
                >
                  {paymentStatus}
                </PaymentResultMessage>
              )}
            </FormStyled>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default PaymentPage;
