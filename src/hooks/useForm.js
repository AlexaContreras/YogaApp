import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = (newFormState = initialState) => {
    setValues(newFormState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setValues({
      ...values,
      file: file,
    });
  };

  return [values, handleInputChange, handleFileChange, reset];
};
