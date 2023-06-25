import createContext from "./createContext";

const blogReducer = (state, action) => {

  switch (action.type) {
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

const addBlog = dispatch => {
  return (blog, callback) => {
    dispatch({ type: "add_post", payload: blog });
    if (callback) {
      callback();
    }
  }
}

const editBlog = dispatch => {
  return (blog, callback) => {
    dispatch({ type: "edit_post", payload: blog });
    if (callback) {
      callback();
    }
  }
}

const removeBlog = dispatch => {
  return (id) => {
    dispatch({ type: "delete_post", payload: id })
  }
}

export const { Context, Provider } = createContext(
  blogReducer,
  { addBlog, removeBlog, editBlog },
  []
);