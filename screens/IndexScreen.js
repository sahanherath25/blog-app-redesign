import React, {useContext} from "react";
import {Text, View, StyleSheet, FlatList, Pressable, Alert, Button, TextInput} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";
import {Feather} from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {

    const {state, addBlogPost,removeBlogPost} = useContext(BlogContext);
    // const {data2,name}=useContext(CommentContext);


    return (
        <View style={styles.container}>
            {/*<Text style={{textAlign:"center",fontSize:40}}>Index Screen</Text>*/}
            {/*<Button title={"Add a blog "} onPress={() => addBlogPost()}/>*/}
            {/*<Button title={"Delete Blog"} onPress={() => navigation.navigate("home")}/>*/}
            {/*<Button title={"Create blog"} onPress={() => navigation.navigate("create")}/>*/}
            {/*<Button title={"All Blogs"} onPress={() => navigation.navigate("show")}/>*/}
            <FlatList data={state}
                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => {
                          return (
                              <Pressable onPress={() =>navigation.navigate("show",{blogId:item.id})}>
                                  <View style={styles.blogItem}>
                                      <Text style={styles.title}>{item.title} </Text>
                                      <Pressable onPress={()=>removeBlogPost(item.id)}>
                                          <Feather name="trash" size={24} color="black"/>
                                      </Pressable>
                                  </View>
                              </Pressable>
                          )
                      }}/>


        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        },
        title:{
            fontSize:18,
        },
        blogItem: {
            paddingHorizontal:10,
            borderTopWidth:1,
            borderColor:"gray",
            flexDirection:"row",
            justifyContent:"space-between",
            paddingVertical:20,
            alignItems:"center"
        }

    }
)

export default IndexScreen;