import React, {createContext, useReducer, useState} from "react";
import {blogPosts} from "../data/data";
import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";
import {Alert} from "react-native";

const BlogContext=createContext();

const blogReducer=(state,action)=>{

    switch(action.type){
        case"add_blogpost":
            // return [...state,action.payload]
            // return [...state,{title:`Blog Post  ${state.length}`,id:Math.floor(Math.random()*1000)}]
            return [...state,
                {id:Math.floor(Math.random()*1000),
                    content:action.payload.content,
                    title:action.payload.title
                }
                ]
            break;

        case"get_blogPosts":
            return action.payload

        case "delete_post":
            return state.filter((item)=>item.id !== action.payload)
        case "edit_post":

            const { id, title, content } = action.payload;
            console.log("founded Id  edit",id)
            return state.map((blogPost )=>{
                return blogPost.id===id?{...blogPost,title,content}:blogPost
            })

        default:
            return state
    }

}

// const addBlogPost = (dispatch) => {
//
//     return ()=>{
//         dispatch({type:"add_blogpost"})
//     }
//
// }

const getBlogPosts=(dispatch)=>{

    return async ()=>{
        try{
            const response=await jsonServer.get("/blogposts")
            console.log(response.data)
            dispatch({type:"get_blogPosts",payload:response.data})
        }catch (e) {
           const statusCode=e.response.status;
            console.log("Status Code ", statusCode)
        }

    }
}

const addBlogPost = (dispatch) => {

    // return (title,content,callBack)=>{
    //     dispatch({type:"add_blogpost",payload:{title,content}})
    //     callBack();
    // }

    return async (title,content,callBack)=>{
        dispatch({type:"add_blogpost",payload:{title,content}})
        await jsonServer.post("/blogposts",{title,content})
        callBack()
    }

}

const editBlogPost = (dispatch) => {

    return (id,title,content,callBackToIndex)=>{
        dispatch({type:"edit_post",payload:{id,title,content}})
        jsonServer.put(`/blogposts/${id}`,{
            id,
            title,
            content
        })
        // console.log(callBackToIndex)
        callBackToIndex();
    }

}


const removeBlogPost = (dispatch) => {

    return async (id)=>{
        await jsonServer.delete(`/blogposts/${id}`)
        dispatch({type:"delete_post",payload:id})
    }

}


export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,removeBlogPost,editBlogPost,getBlogPosts},[]);

// export const BlogProvider = ({children}) => {
//
//     //TODO Create a State
//     // const [blogPosts,setBlogPost]=useState([]);
//
//     //TODO Creating useReducer
//
//
//     const [state, dispatch] = useReducer(blogReducer, [])
//
//     // const addBlogPost = () => {
//     //
//     //     setBlogPost((currentBlogs)=>{
//     //         return [...currentBlogs,{title:`Blog Post Title ${blogPosts.length}`,id:Math.floor(Math.random()*1000)}]
//     //     })
//     // }
//
//
//     return (
//         <BlogContext.Provider value={{data:state,addBlog:addBlogPost}}>
//             {children}
//         </BlogContext.Provider>
//
//     )
// }
//
//



