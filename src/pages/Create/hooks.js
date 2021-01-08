import { useState } from 'react';

const useCreateForm = (initialValues) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleInputChange = (event) => {
    event.persist();
    setInputs((items) => ({ ...items, [event.target.name]: event.target.value }));
  };
  return {
    handleInputChange,
    inputs,
  };
};
export default useCreateForm;
