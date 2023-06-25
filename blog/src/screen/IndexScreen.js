import React, {useContext} from "react";
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from "react-native";
import { Context as BlogContext } from "../context/BlogContext";
import {Feather, MaterialIcons} from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, addBlog, removeBlog } = useContext(BlogContext);

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={state}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => {
          return <View style={styles.blogItemStyle}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.navigate("Blog", { id: item.id   })}>
              <Text style={{fontSize: 18, fontWeight: "bold"}}>{item.title}</Text>
              <Text style={{fontSize: 14}}>{item.description?.slice(0, 30)}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeBlog(item.id)}><MaterialIcons name="delete" size={24} color="#b83438" /></TouchableOpacity>
          </View>
        }}
      />
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
    flexDirection: "row",
    alignItems: "center"
  },
  addButton: {
    marginHorizontal: 15,
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#5dab3c",
    borderColor: "#4c8d31",
    textAlign: "center"
  },
  deleteButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#b83438",
    borderColor: "#8c272a",
    textAlign: "center"
  }
})

IndexScreen.navigationOptions = ({navigation}) => {
  return {
    headerRight: () => (
      <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => navigation.navigate('CreateBlog')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
}

export default IndexScreen;