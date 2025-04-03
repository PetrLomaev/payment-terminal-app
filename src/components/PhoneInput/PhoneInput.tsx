import React from 'react';
import { useField } from 'formik';
import { StyledInput, StyledErrorMessage } from './styled';

const inputPlaceholder = '+7(XXX)XXX-XX-XX';

const PhoneInput = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const digits = input.replace(/\D/g, '');
    let formattedInput = '';
    if (input === '+7(' || input === '8' || input === '7') {
      formattedInput = '+7(';
      helpers.setValue(formattedInput);
      return;
    }
    if (digits.length === 1) {
      formattedInput += '+7(' + digits;
    }
    if (digits.length > 1) {
      formattedInput += '+7(' + digits.substring(1, 4);
    }
    if (digits.length >= 4)  {
      formattedInput += `)${digits.substring(4, 7)}`;
    }
    if (digits.length >= 7) {
      formattedInput += `-${digits.substring(7, 9)}`;
    }
    if (digits.length >= 9) {
      formattedInput += `-${digits.substring(9, 11)}`;
    }
    helpers.setValue(formattedInput);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      const currentCursorPosition = e.currentTarget.selectionStart;
      if (currentCursorPosition && (
        field.value[currentCursorPosition - 1] === '-' ||
        field.value[currentCursorPosition - 1] === ')' ||
        field.value[currentCursorPosition - 1] === '('
        )
      ) {
        e.preventDefault();
        e.currentTarget.setSelectionRange(currentCursorPosition - 1, currentCursorPosition - 1);
      }
    }
  }

  return (
    <>
      <StyledInput
        {...field}
        {...props}
        type="tel"
        onChange={handlePhoneChange}
        onKeyDown={handleKeyDown}
        id="phoneNumber"
        placeholder={inputPlaceholder}
        maxLength={16}
        className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

export default PhoneInput;
