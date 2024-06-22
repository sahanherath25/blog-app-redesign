import React, {useContext, useState} from "react";
import {Text, View, StyleSheet, TextInput, Button, Alert} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const CreateScreen = ({navigation}) => {

    const {addBlogPost} = useContext(Context)
    // const [title,setTitle]=useState("");
    // const [content,setContent]=useState("");
    //
    // const onChangeText=(text)=>{
    //     setTitle(text)
    //     console.log(text)
    //
    // }
    // const onChangeContent=(text)=>{
    //     setContent(text)
    //     console.log(text)
    // }

    // const onSubmit=()=>{
    //
    //
    //     Alert.alert("Success","Are you Sure want to Submit to Create the New  Post",  [
    //         {
    //             text: "Cancel",
    //             onPress: () => console.log("Cancel Pressed"),
    //             style: "cancel"
    //         },
    //         {
    //             text: "OK",
    //             onPress: () =>{
    //                 setTitle("")
    //                 setContent("")
    //                 addBlogPost(title,content)
    //                 navigation.navigate("index")
    //             }
    //         }
    //     ])
    //
    // }

    return (

        // <View style={styles.container}>
        //
        //     <View style={styles.textContainer}>
        //         <Text style={styles.text}>Enter Title</Text>
        //         <TextInput style={styles.textInput} value={title} placeholder={"Enter Blog Title"} onChangeText={onChangeText}/>
        //     </View>
        //
        //     <View style={styles.textContainer}>
        //         <Text  style={styles.text}>Blog Content</Text>
        //         <TextInput style={styles.textInput} value={content} placeholder={"Enter Blog Content"} onChangeText={onChangeContent}/>
        //     </View>
        //
        //     {/*<View style={styles.button}>*/}
        //         <Button title={"Save" } onPress={onSubmit}/>
        //     {/*</View>*/}
        //
        //
        // </View>
        <BlogPostForm
            navigation={navigation}
            onSubmit={(title, context) => {
                addBlogPost(title, context, () => navigation.navigate("index"))
            }}
            initialStateValues={{text: "", title: ""}}
        />
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#e84c4c",
            padding: 20
        }, text: {
            color: "#402E7A"
        },
        textInput: {
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#111111",
        },
        textContainer: {
            marginVertical: 10
        },
        button: {
            alignItems: "center",
        }
    }
)

export default CreateScreen;