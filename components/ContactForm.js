import styles from './contactForm.module.css';
import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [form, setForm] = useState({});
  console.log(form);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/contact', form);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={styles.contact}>
      <h1>Send me a Message!</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required onChange={handleChange} />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' required onChange={handleChange} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' rows='5' onChange={handleChange} />
        </div>
        <div className={styles.actions}>
          <button type='submit'>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
