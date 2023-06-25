import React, {useContext} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";


const BlogScreen = ({ route }) => {
  const {state} = useContext(BlogContext)
  const {id} = route.params;

  const blogPost = state.find(i => i.id === id);

  return (
    <View style={styles.mainVew}>
      <Text style={styles.headerText}>{blogPost?.title}</Text>
      <Text style={styles.descriptionText}>{blogPost?.description}</Text>
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
  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  descriptionText: {
    fontSize: 20,
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

export default BlogScreen;