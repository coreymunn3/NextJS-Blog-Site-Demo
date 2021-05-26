import FeaturedPosts from '../components/FeaturedPosts';
import Hero from '../components/Hero';

const HomePage = () => {
  const DUMMY_POSTS = [
    {
      title: 'Getting started with NextJS',
      image: 'getting-started.png',
      excerpt:
        'NextJS is the React framework for Production. Learn about it here!',
      date: '2022-02-10',
      slug: 'getting-started-with-next-js',
    },
    {
      title: 'Getting started with NextJS 2',
      image: 'getting-started.png',
      excerpt:
        'NextJS is the React framework for Production. Learn about it here!',
      date: '2022-02-10',
      slug: 'getting-started-with-next-js-2',
    },
    {
      title: 'Getting started with NextJS 3',
      image: 'getting-started.png',
      excerpt:
        'NextJS is the React framework for Production. Learn about it here!',
      date: '2022-02-10',
      slug: 'getting-started-with-next-js-3',
    },
  ];

  return (
    <div>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default HomePage;
