import React, {useContext, useEffect, useState} from "react";
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";

const CreateBlogPost = ({navigation}) => {
  const {state, addBlog, editBlog} = useContext(BlogContext)

  const [blog, setBlog] = useState({ id: null, title: "", description: "" });
  const id = navigation.getParam("id");

  useEffect(() => {
    if (id) {
      const blogPost = state.find(i => i.id === id);
      setBlog({
        id: blogPost?.id || null,
        title: blogPost?.title || "",
        description: blogPost?.description || ""
      });
    }
  }, [id]);

  const onChange = (key, value) => {
    setBlog(prevState => {
      return {
        ...prevState,
        [key]: value
      }
    })
  }

  const saveBlog = () => {
    if (blog.title === "" || blog.description === "") {
      return;
    }
    if (id) {
      editBlog(blog, () => navigation.goBack());
    } else {
      addBlog(blog, () => navigation.navigate("Index"));
    }
  }

  return (
    <View style={styles.mainVew}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) =>  onChange("title", text)}
        name={"title"}
        placeholder={"Title"}
        value={blog?.title}
      />
      <Text style={styles.label}>Content</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) =>  onChange("description", text)}
        name={"description"}
        placeholder={"Description"}
        value={blog?.description}
      />
      <View style={styles.groupButtons}>
        <TouchableOpacity style={styles.btnCancel} onPress={() => navigation.navigate("Index")}>
          <Text style={{textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold"}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSave} onPress={saveBlog} >
          <Text style={{textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold"}}>{id ? "Save" : "Create"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  mainVew: {
    margin: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFF",
    borderColor: "#e3e0e0",
    flex: 1
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10
  },
  input: {
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    borderColor: "#e3e0e0",
    backgroundColor: "#ece9e9",
  },
  groupButtons: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 10
  },
  btnCancel: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    textAlign: "center",
    backgroundColor: "#3f76e3"
  },
  btnSave: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
    textAlign: "center",
    backgroundColor: "#3eac25"
  }
})

CreateBlogPost.navigationOptions = ({navigation}) => {
  return {
    title: navigation?.getParam("id") ? "Edit Blog" : "Create New Blog"
  }
}

export default CreateBlogPost;