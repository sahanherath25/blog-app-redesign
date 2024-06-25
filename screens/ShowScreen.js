import React, {useContext, useEffect, useRef, useState} from "react";
import {Text, View, StyleSheet, TextInput, Button, FlatList, Animated} from "react-native";
import {Context as BlogContext} from "../context/BlogContext";


const ShowScreen = ({navigation, route}) => {

    // Anytime when we need to acess the state in the Context we need to use this
    // const {state}=useContext(Context)
    const {state} = useContext(BlogContext);
    const {blogId: id} = route.params;
    const blogPost = state.find((blogPost) => blogPost.id === id)

    // Create a ref for the animated value
    const titleOpacity = useRef(new Animated.Value(0)).current;

    // Trigger the animation when the component mounts
    useEffect(() => {
        Animated.timing(titleOpacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start(() => {
            console.log("Animation completed"); // Log to verify the animation is completed
        });
    }, []);

    return (

        <View style={styles.container}>
            <View style={styles.blogItemContainer}>
                <Animated.Text style={[styles.blogTitle, {opacity: titleOpacity}]}>
                    <Text style={styles.blogTitle}>{blogPost.title}</Text>
                </Animated.Text>
                <Animated.Text style={[styles.blogContent, {opacity: titleOpacity}]}>
                    <Text style={[styles.blogContent, {marginTop: 10}]}>{blogPost.content}</Text>
                </Animated.Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 5,
            backgroundColor: "#fff"

        },
        blogTitle: {
            fontSize: 18,
            color: "#071952"
        },
        blogContent: {},
        blogItemContainer: {
            borderColor: "#111111",
            borderStyle: "solid",
            borderWidth: 1,
            padding: 30,
        }
    }
)

export default ShowScreen;