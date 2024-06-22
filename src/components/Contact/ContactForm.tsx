const ContactForm = () => {
  return (
    <div className='form-wrapper'>
      <form action='' method='post'>
        <label htmlFor='name'>Your name</label>
        <input type='text' required id='name' placeholder='your name' />
        <label htmlFor='email'>Your e-mail</label>
        <input type='email' required id='email' placeholder='Email' />
        <textarea required name='text' id='text' placeholder='Message'></textarea>
        <button type='submit'>Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
