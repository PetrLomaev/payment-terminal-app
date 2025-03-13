import React from 'react';
import { useField } from 'formik';
import { StyledInput, StyledErrorMessage } from './styled';

const AmountInput = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handlePaymentAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formattedInput = input.replace(/^0+/, '');
    helpers.setValue(formattedInput);
  };

  return (
    <>
      <StyledInput
        {...field}
        {...props}
        type="number"
        onChange={handlePaymentAmountChange}
        id="paymentAmount"
        placeholder="Сумма (руб)"
        className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

export default AmountInput;