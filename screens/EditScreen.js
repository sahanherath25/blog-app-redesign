import React, {useContext, useState} from "react";
import {Text, View, StyleSheet, TextInput, Button} from "react-native";
import {Context} from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation,route}) => {


    console.log(navigation)

    const {state,editBlogPost}=useContext(Context)
    const selectedBlogId=route.params.blogId
    const blogPost=state.find((item)=>item.id===selectedBlogId)
    console.log("Blog Selected ",blogPost)
    //
    // const [title,setTitle]=useState(blogPost.title);
    // const [content,setContent]=useState(blogPost.content);
    //
    // const onEditSubmit=()=>{
    //
    //     editBlogPost(selectedBlogId,title,content)
    //     navigation.navigate("index");
    //
    // }



    return (
        // <View style={styles.container}>
        //
        //     <View style={styles.textContainer}>
        //         <Text style={styles.text}>Edit Title</Text>
        //         <TextInput style={styles.textInput}
        //                    value={title}
        //                    placeholder={"Enter Blog Title"}
        //                    onChangeText={(text)=>setTitle(text)}
        //         />
        //     </View>
        //
        //     <View style={styles.textContainer}>
        //         <Text  style={styles.text}>Edit Blog Content</Text>
        //         <TextInput
        //             style={styles.textInput}
        //             value={content}
        //             placeholder={"Enter Blog Content"}
        //             onChangeText={(text)=>setContent(text)}
        //         />
        //     </View>
        //
        //     {/*<View style={styles.button}>*/}
        //     <Button title={"Save" } onPress={onEditSubmit} />
        //     {/*</View>*/}
        //
        //
        // </View>

        <BlogPostForm
            initialStateValues={{text:blogPost.title,content:blogPost.content}}
            onSubmit={(title,content)=>{
                // editBlogPost(selectedBlogId,title,content,()=>navigation.navigate("index"))
                editBlogPost(selectedBlogId,title,content,()=>navigation.pop())
                // editBlogPost(selectedBlogId,title,content,()=>navigation.popToTop())
            }}

        />
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
        }
    }
)

export default EditScreen;