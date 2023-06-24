import React, {useContext} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from "react-native";
import BlogContext from "../context/BlogContext";

export const IndexScreen = () => {
  const { blogPosts, addBlog, removeBlog } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.title}
        data={blogPosts}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <View style={styles.blogItemStyle}>
            <Text style={{ flex: 1 }}>{item.title}</Text>
            <TouchableOpacity onPress={() => removeBlog(index)} style={styles.deleteButton}><Text style={{color: "#FFF"}}>Delete</Text></TouchableOpacity>
          </View>
        }}
      />

      <TouchableOpacity
        onPress={addBlog}
        style={styles.addButton}
      >
        <Text style={{textAlign: "center", color: "#FFF"}}>Add Blog Post</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  blogItemStyle: {
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#FFF",
    borderColor: "#e3e0e0",
    border: 1,
    flexDirection: "row"
  },
  addButton: {
    margin: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#5dab3c",
    borderColor: "#4c8d31",
    border: 1,
    textAlign: "center"
  },
  deleteButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#b83438",
    borderColor: "#8c272a",
    border: 1,
    textAlign: "center"
  }
})