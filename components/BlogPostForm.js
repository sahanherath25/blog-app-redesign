import React, {useContext, useState} from "react";
import {Text, View, StyleSheet, TextInput, Button, Alert} from "react-native";
import {Context} from "../context/BlogContext";

const BlogPostForm = ({initialStateValues,onSubmit}) => {

    // const {callBack}=useContext(Context)
    const [title,setTitle]=useState(initialStateValues.text);
    const [content,setContent]=useState(initialStateValues.content);

    const onChangeText=(text)=>{
        setTitle(text)
        console.log(text)

    }
    const onChangeContent=(text)=>{
        setContent(text)
        console.log(text)
    }

    // const onSubmit=(title,content)=>{
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
    //                 callBack(title,content)
    //                 navigation.navigate("index")
    //             }
    //         }
    //     ])
    //
    // }

    return (
        <View style={styles.container}>

            <View style={styles.textContainer}>
                <Text style={styles.text}>Enter Title</Text>
                <TextInput style={styles.textInput} value={title} placeholder={"Enter Blog Title"} onChangeText={onChangeText}/>
            </View>

            <View style={styles.textContainer}>
                <Text  style={styles.text}>Blog Content</Text>
                <TextInput  numberOfLines={4}  multiline={true} style={[styles.textInput,styles.textArea]} value={content} placeholder={"Enter Blog Content"} onChangeText={onChangeContent}/>
            </View>

            {/*<View style={styles.button}>*/}
            <Button title={"Save" } onPress={()=>onSubmit(title,content)}/>
            {/*</View>*/}


        </View>
    )
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            borderStyle:"solid",
            borderWidth:1,
            borderColor:"#e84c4c",
            padding:20
        },text:{
            color:"#402E7A"
        },
        textInput: {
            borderStyle:"solid",
            borderWidth:1,
            borderColor:"#111111",
        },
        textContainer:{
            marginVertical:10
        },
        button:{
            alignItems:"center",
        },
        textArea:{
            textAlignVertical: 'top',
        }
    }
)


export default BlogPostForm;