import React, {useState} from "react";
import {Text, View, StyleSheet, Button, TextInput, Alert} from "react-native";
import {StatusBar} from "expo-status-bar/build/StatusBar";
import BlogPostForm from "../components/BlogPostForm";

const HomeScreen = (props) => {

    const [value,setValue]=useState("");

    console.log("Text ",value)

    const onTermSubmit = () => {
        Alert.alert("Success","Message Sent")
        setValue("")
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button title={"Index Screen"} onPress={() => props.navigation.navigate("index")}/>

            <View style={styles.textContainer}>
                <Text>First Name</Text>
                <TextInput onEndEditing={onTermSubmit} value={value} onChangeText={(text)=>setValue(text)}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1
        },
        textContainer: {
            
        }
    }
)

export default HomeScreen;

// <BlogPostForm
//     navigation={navigation}
//     onSubmit={(title,context)=>{
//         addBlogPost(title,context,()=>navigation.navigate("index"))
//     }}
//     initialStateValues={{text:"",title:""}}
// />