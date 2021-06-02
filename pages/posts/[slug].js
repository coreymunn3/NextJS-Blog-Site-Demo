import PostContent from '../../components/PostContent';
import { getPostData, getPostFiles } from '../../lib/posts-util';
import Head from 'next/head';
import { Fragment } from 'react';

const PostDetail = (props) => {
  const { post } = props;
  console.log(post);
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt}></meta>
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
};

export default PostDetail;

export function getStaticProps(context) {
  const { params } = context;

  const postData = getPostData(params.slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''));
  const paths = slugs.map((slug) => ({ params: { slug: slug } }));
  console.log(paths);
  return {
    paths: paths,
    fallback: 'blocking',
  };
}
