import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

interface FormValues {
  username: string;
  email: string;
  textareaValue: string;
  [key: string]: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const form = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<FormValues>({
    username: '',
    email: '',
    textareaValue: '',
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async () => {
    setIsSending(true); 
    // await new Promise((resolve) => setTimeout(resolve, 2000));
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
            reset({ username: '', email: '' });
            setValues({ ...values, textareaValue: '' });
            setIsMessageSent(true);
            setIsSending(false);  // Stop spinner
            setTimeout(() => {
              setIsMessageSent(false);
            }, 3000);
          },
          (error) => {
            console.log(error.text);
            setIsSending(false); 
          },
        );
    }
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
    {isMessageSent ? (
        <p className='send-mail'>Message Sent. I'll get back to you!</p>
      ) : (
      <div className='form-wrapper'>
        <form
          className='form'
          action=''
          method='POST'
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='form-inputs'>
            <label className="sr-only" htmlFor='username'>Your name</label>
            <input
              {...register('username', {
                required: 'Please enter your name',
              })}
              className='form-input'
              id='username'
              type='text'
              placeholder='Name'
            />
            {errors.username && (
              <p className='form-error'>{errors.username.message}</p>
            )}
          </div>
          <div className='form-inputs'>
            <label className="sr-only" htmlFor='email'>Your Email</label>
            <input
              {...register('email', {
                required: 'Please enter your e-mail',
                validate: (value) => {
                  if (!value.includes('@')) {
                    return 'Email must include @';
                  }
                  return true;
                },
              })}
              className='form-input'
              id='email'
              type='text'
              placeholder='Email'
            />
            {errors.email && <p className='form-error'>{errors.email.message}</p>}
          </div>
          <textarea
            className='form-text'
            name='textareaValue'
            id='text'
            placeholder='Message'
            value={values.textareaValue}
            onChange={handleTextAreaChange}
          ></textarea>

          <button disabled={isSubmitting} className='form-btn' type='submit'>
          {isSubmitting || isSending ? <span className='spinner'></span> : 'Send'}
          </button>
        </form>
      </div>
      )}
    </>
  );
};

export default ContactForm;
