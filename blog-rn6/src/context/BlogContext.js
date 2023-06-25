import createContext from "./createContext";
import axios from "../api/axios";

const blogReducer = (state, action) => {

  switch (action.type) {
    case "get_blogposts": {
      return action.payload;
    }
    case "add_post": {
      const items = [...state];
      const id = Math.floor(Math.random() * 99999);
      items.unshift({ ...action.payload, id: id });
      console.log(items);
      return items;
    }
    case "delete_post": {
      return state.filter((item) => item.id !== action.payload);
    }
    case "edit_post": {
      const items = [...state];
      const index = items.findIndex(i => i.id === action.payload.id);
      if (isFinite(index) && index >= 0) {
        items[index] = action.payload;
      }
      return items;
    }
    default: return state;
  }
}

const getBlogPosts = dispatch => {
  return async () => {
    try {
      const response = await axios.get("/blogposts");

      dispatch({type: "get_blogposts", payload: response.data})
    } catch (e) {
      console.log(e);
    }
  }
}

const addBlog = dispatch => {
  return async (blog, callback) => {
    try {
      await axios.post('/blogposts', { title: blog.title, description: blog?.description });

      if (callback) {
        callback();
      }

    } catch (error){
      console.log(error);
    }
  }
}

const editBlog = dispatch => {
  return async (blog, callback) => {
    try {
      await axios.put(`/blogposts/${blog.id}`, { title: blog.title, description: blog?.description });

      if (callback) {
        callback();
      }

    } catch (error){
      console.log(error);
    }
  }
}

const removeBlog = dispatch => {
  return async (id, callback) => {
    try {
      const response = await axios.delete(`/blogposts/${id}`);

      if (callback) {
        callback();
      }

    } catch (error){
      console.log(error);
    }
  }
}

export const { Context, Provider } = createContext(
  blogReducer,
  { addBlog, removeBlog, editBlog, getBlogPosts },
  []
);