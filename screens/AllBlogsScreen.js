import React, {useContext, useState} from "react";
import {Text, View, StyleSheet, TextInput, Button, FlatList} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";


const AllBlogsScreen = ({navigation, route}) => {

    const {state, addBlogPost, removeBlogPost} = useContext(BlogContext);
    // const {blogId: id} = route.params;
    // const blogPost = state.find((blogPost) => blogPost.id === id)
    // const [currentText, setCurrentText] = useState(blogPost.title);


    // console.log("TITLE ", currentText)
    // const selectedItem=

    const onChange = (currentText) => {
        // console.log("Current title is ", currentText)
        // const updatedBlogPost = {id, title: currentText}

        // console.log("Objetc is ", blogPost.id)
        // console.log("Objetc is ", blogPost.title)

    }

    return (

        <View style={styles.container}>
            <FlatList data={state} renderItem={({item}) => {
                return (
                    <View style={styles.blogItemContainer}>
                        <Text style={styles.blogTitle}>Blog Title</Text>
                        <Text style={styles.blogContent}>{item.title}</Text>
                        <Text>Lorem ipsum dolor sit amet,ue expedita harum iusto maiores modi odi sit voluptates. Adipisci vident sapiente, sunt voluptas.</Text>
                        <Text>{item.id}</Text>
                    </View>
                )
            }}/>
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

export default AllBlogsScreen;