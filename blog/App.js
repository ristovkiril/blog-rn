import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import IndexScreen from "./src/screen/IndexScreen"
import {Provider as BlogProvider} from "./src/context/BlogContext";
import BlogScreen from "./src/screen/BlogScreen";
import CreateBlogPost from "./src/screen/CreateBlogScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Blog: BlogScreen,
    CreateBlog: CreateBlogPost,

  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
)

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider><App /></BlogProvider>
}