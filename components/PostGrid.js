import styles from './postGrid.module.css';
import PostGridItem from './PostGridItem';

const PostGrid = (props) => {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostGridItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
