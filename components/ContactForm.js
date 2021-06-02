import styles from './contactForm.module.css';
import Notification from '../components/Notification';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const initialFormState = {
    email: '',
    name: '',
    message: '',
  };
  const [form, setForm] = useState(initialFormState);
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();
  // console.log(form);

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const sendContactData = async (contactDetails) => {
    const { data } = await axios.post('/api/contact', contactDetails);
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRequestStatus('pending');
    try {
      await sendContactData(form);
      setRequestStatus('success');
      setForm(initialFormState);
    } catch (error) {
      setRequestStatus('error');
      setRequestError(error.message);
    }
  };

  let notification;
  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending Message...',
      message: 'Your message is on its way!',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Sent your Message!',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: requestError,
    };
  }

  return (
    <section className={styles.contact}>
      <h1>Send me a Message!</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={form['email']}
              onChange={handleChange}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              value={form['name']}
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            value={form['message']}
            onChange={handleChange}
          />
        </div>
        <div className={styles.actions}>
          <button type='submit'>Send Message</button>
        </div>
      </form>
      {notification && <Notification notification={notification} />}
    </section>
  );
};

export default ContactForm;
