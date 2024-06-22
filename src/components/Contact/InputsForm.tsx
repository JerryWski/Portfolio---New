import { useState, type ChangeEvent, type HTMLInputTypeAttribute } from 'react';
import './InputsForm.css';

type Props = {
  placeholder: string;
  name: string;
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
    <div className='form-inputs'>
      <label htmlFor={`input-${id}`}>{label}</label>
      <input
        id={`input-${id}`}
        className='form-input'
        {...inputsProps}
        onChange={onChange}
        onFocus={handleFocus}
        data-focused={focused.toString()}
      />
      <span className='form-span'>{errorMessage}</span>
    </div>
  );
};

export default InputsForm;
