import './ContactForm.css';
import emailjs from '@emailjs/browser';
import InputsForm from './InputsForm';
import { useRef, useState } from 'react';

interface FormValues {
  username: string;
  email: string;
  textareaValue: string;
  [key: string]: string;
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [values, setValues] = useState<FormValues>({
    username: '',
    email: '',
    textareaValue: '',
  });

  const clearForm = () => {
    setValues({
      username: '',
      email: '',
      textareaValue: '',
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          'service_b3fjt6s',
          'template_v7o8mxn',
          form.current,
          '-s7vlTiTNjFo6Rcnk',
        )
        .then(
          (result) => {
            console.log(result.text);
            clearForm();
            setIsMessageSent(true);
            setTimeout(() => {
              setIsMessageSent(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
          },
        );
    }
  };

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Name',
      errorMessage: 'Please enter your name',
      label: '',
      pattern: '^[A-Za-z0-9]{1,20}$',
      required: true,
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'E-mail',
      errorMessage: 'Please enter your e-mail',
      label: '',
      required: true,
    },
  ];

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      {isMessageSent ? (
        <p className='sent-mail'>Wiadomość została wysłana. Odezwę się!</p>
      ) : (
        <div className='form-wrapper'>
          <form action='' method='POST' ref={form} onSubmit={sendEmail}>
            <div className='form-inputs'>
              {inputs.map((input) => (
                <InputsForm
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <textarea
                name='textareaValue'
                id='text'
                placeholder='Message'
                value={values.textareaValue}
                onChange={handleTextAreaChange}
              ></textarea>
            </div>
            <button type='submit'>Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default ContactForm;
