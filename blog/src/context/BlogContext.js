import React, {useState} from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlog = () => {
    const items = [...blogPosts];
    items.unshift({ title: `Blog post number #${blogPosts.length + 1}` });

    setBlogPosts(items);
  }

  const removeBlog = (index) => {
    const items = [...blogPosts].filter((item, ind) => ind !== index);
    setBlogPosts(items);
  }

  return (
    <BlogContext.Provider
      value={{
        blogPosts,
        addBlog,
        removeBlog
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export default BlogContext;