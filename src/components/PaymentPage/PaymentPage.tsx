import React, { useState } from 'react';
import { useFormik } from 'formik';
// import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import getSchema from '@/utils/validation';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 15px 30px;
  font-size: 18px;
  color: #fff;
  background-color: #0070f3;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const PaymentStatus = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const SuccessMessage = styled.div`
  color: green;
  margin: 10px;
`;

const PaymentPage: React.FC = () => {
  const { paymentSchema } = getSchema();
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState('');
  const router = useRouter();

  const handleSubmit = async (formValue: any) => {
    setPaymentStatus('');
    setLoading(true);
    const isSuccess = Math.random() > 0.5;

    setTimeout(() => {
      if (isSuccess) {
        setPaymentStatus('Оплата прошла успешно');
        setLoading(false);
      } else {
        setPaymentStatus('Во время оплаты произошла ошибка');
        setLoading(false);
      }
    }, 1000);
  };


  return (
    <FormContainer>
    <h1>Форма оплаты</h1>
    <h3>Оплата оператора "Оператор"</h3>
    <Formik
      initialValues={{
        phoneNumber: '',
        paymentAmount: '',
      }}
      validationSchema={paymentSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            type="text"
            name="phoneNumber"
            placeholder="+7XXXXXXXXXX или 8XXXXXXXXXX"
            className={`form-control ${
              touched.phoneNumber && errors.phoneNumber ? "is-invalid" : ""
            }`}
          />
          <ErrorMessage
            component="div"
            name="phoneNumber"
            className="invalid-feedback"
          />
          <Field
          type="number"
          name="paymentAmount" 
          placeholder="Сумма (руб)"
          className={`form-control ${
            touched.paymentAmount && errors.paymentAmount ? "is-invalid" : ""
          }`}
          />
          <ErrorMessage
            component="div"
            name="paymentAmount"
            className="invalid-feedback"
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Обработка запроса...' : 'Оплатить'}
          </Button>
          {paymentStatus && (
            <SuccessMessage>{paymentStatus}</SuccessMessage>
          )}
        </Form>
      )}
    </Formik>

    </FormContainer>
  );
};

export default PaymentPage;