import SContact from './style';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <SContact>
      <div className='content'>
        <h2>Contact me</h2>

        <form className='contactUs' onSubmit={handleSubmit}>
          <label htmlFor='username'>
            <h3>Name</h3>
            <input placeholder='Name' name='firstname' id='field' />
          </label>

          <label htmlFor='email'>
            <h3>Email</h3>
            <input placeholder='your@mail.com' name='email' id='field' />
          </label>

          <label htmlFor='message'>
            <h3>Message</h3>
            <textarea
              className='text'
              type='textarea'
              name='textValue'
              id='field'
              placeholder='Your message'
            />
          </label>

          <button type='submit' className='button'>
            <h4>Send</h4>
          </button>
        </form>
      </div>
    </SContact>
  );
}
