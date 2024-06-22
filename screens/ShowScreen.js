import React, {useContext, useState} from "react";
import {Text, View, StyleSheet, TextInput, Button, FlatList} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";


const ShowScreen = ({navigation, route}) => {

    // Anytime when we need to acess the state in the Context we need to use this
    // const {state}=useContext(Context)
    const {state} = useContext(BlogContext);
    const {blogId: id} = route.params;
    const blogPost = state.find((blogPost) => blogPost.id === id)

    return (

        <View style={styles.container}>
                    <View style={styles.blogItemContainer}>
                        <Text style={styles.blogTitle}>Blog Title</Text>
                        <Text style={styles.blogContent}>{blogPost.title}</Text>
                        <Text>{blogPost.content}</Text>
                        <Text>{blogPost.id}</Text>
                    </View>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding:5,

        },
        blogTitle: {
            fontSize:18
        },
        blogContent: {

        },
        blogItemContainer: {
            borderColor:"#111111",
            borderStyle:"solid",
            borderWidth:1,
            padding:30,
        }
    }
)

export default ShowScreen;