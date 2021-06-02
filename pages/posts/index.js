import AllPosts from '../../components/AllPosts';
import { getAllPosts } from '../../lib/posts-util';
import { Fragment } from 'react';
import Head from 'next/head';

const AllPostsPage = (props) => {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='All Programming and Web Development Posts'
        ></meta>
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
};

export default AllPostsPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
