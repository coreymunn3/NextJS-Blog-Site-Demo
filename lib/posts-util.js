import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getPostFiles = () => {
  return fs.readdirSync(postsDirectory);
};

// Return the post data for a single post (one slug)
export const getPostData = (postIdentifier) => {
  // remove file extension if there is one
  const postSlug = postIdentifier.replace(/\.md$/, '');
  // get file path and extract content
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  // extract content from md file
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};

// return all posts for the main blog page
export const getAllPosts = () => {
  const postFiles = getPostFiles();

  const allPosts = postFiles
    .map((file) => {
      return getPostData(file);
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return allPosts;
};

// return only featured posts for the home page
export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
};
