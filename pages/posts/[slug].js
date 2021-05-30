import PostContent from '../../components/PostContent';
import { getPostData, getPostFiles } from '../../lib/posts-util';

const PostDetail = (props) => {
  const { post } = props;
  console.log(post);
  return <PostContent post={post} />;
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
