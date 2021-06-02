import ContactForm from '../components/ContactForm';
import { Fragment } from 'react';
import Head from 'next/head';

const Contact = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages'></meta>
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default Contact;
