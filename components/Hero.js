import React from 'react';
import styles from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src='/images/site/corey.jpg'
          alt='Image of Corey'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Corey!</h1>
      <p>I blog about Web Development, and am passionate about React.</p>
    </section>
  );
};

export default Hero;
