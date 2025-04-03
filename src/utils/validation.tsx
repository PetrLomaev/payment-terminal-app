import * as yup from 'yup';

const errRequired = 'Не должно быть пустым';
const phoneNumErrInvalidFormat = 'Формат ввода +7(XXX)XXX-XX-XX';
const phoneRegExp = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
const paymentAmountErrInvalidFormat = 'Неверный формат';
const paymentAmountErrMin = 'Не менее 1 руб';
const paymentAmountErrMax = 'Не более 1000 руб';

interface PaymentData {
  phoneNumber: string;
  paymentAmount: number;
};

const getSchema = () => {

  const paymentSchema: yup.ObjectSchema<PaymentData> = yup.object().shape({
    phoneNumber: yup
      .string()
      .required(errRequired)
      .defined(errRequired)
      .matches(phoneRegExp, phoneNumErrInvalidFormat),
    paymentAmount: yup
      .number()
      .required(errRequired)
      .defined(errRequired)
      .positive(paymentAmountErrInvalidFormat)
      .integer(paymentAmountErrInvalidFormat)
      .min(1, paymentAmountErrMin)
      .max(1000, paymentAmountErrMax),
  });

  return {
    paymentSchema,
  };
};

export default getSchema;
