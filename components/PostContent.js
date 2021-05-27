import ReactMarkdown from 'react-markdown';
import styles from './postContent.module.css';
import PostHeader from './PostHeader';

const PostContent = () => {
  const DUMMY_POST = {
    title: 'Getting started with NextJS',
    image: 'getting-started.png',
    content: '# This is a first post',
    date: '2022-02-10',
    slug: 'getting-started-with-next-js',
  };

  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
