import { useState, type ChangeEvent, type HTMLInputTypeAttribute } from 'react';

type Props = {
  placeholder: string;
  name: HTMLInputTypeAttribute;
  label: string;
  id: number;
  value: string;
  errorMessage: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputsForm: React.FC<Props> = (props) => {
  const { label, errorMessage, onChange, id, ...inputsProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  return (
    <>
      <label htmlFor='name'>{label}</label>
      <input
        className='form-input'
        {...inputsProps}
        onChange={onChange}
        onBlur={handleFocus}
      />
      <span className='form-span'>{errorMessage}</span>
      
    </>
  );
};

export default InputsForm;
