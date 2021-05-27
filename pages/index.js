import FeaturedPosts from '../components/FeaturedPosts';
import Hero from '../components/Hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
  const { featuredPosts } = props;

  return (
    <div>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </div>
  );
};

export default HomePage;

export function getStaticProps() {
  const posts = getFeaturedPosts();
  console.log(posts);
  return {
    props: {
      featuredPosts: posts,
    },
  };
}
