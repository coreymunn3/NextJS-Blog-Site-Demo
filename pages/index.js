import FeaturedPosts from '../components/FeaturedPosts';
import Hero from '../components/Hero';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';

const HomePage = (props) => {
  const { featuredPosts } = props;

  return (
    <div>
      <Head>
        <title>Corey's Blog</title>
        <meat
          name='description'
          content='I Post About Programming, Web Development, and NextJS'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </div>
  );
};

export default HomePage;

export function getStaticProps() {
  const posts = getFeaturedPosts();
  return {
    props: {
      featuredPosts: posts,
    },
  };
}
