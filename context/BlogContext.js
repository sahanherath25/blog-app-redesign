import React, {createContext, useReducer, useState} from "react";
import {blogPosts} from "../data/data";
import createDataContext from "./createDataContext";

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
            //
            break;

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

const addBlogPost = (dispatch) => {

    return (title,content,callBack)=>{
        dispatch({type:"add_blogpost",payload:{title,content}})
        callBack();
    }

}

const editBlogPost = (dispatch) => {

    return (id,title,content,callBackToIndex)=>{
        dispatch({type:"edit_post",payload:{id,title,content}})
        // console.log(callBackToIndex)
        callBackToIndex();
    }

}


const removeBlogPost = (dispatch) => {

    return (id)=>{
        dispatch({type:"delete_post",payload:id})
    }

}


export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,removeBlogPost,editBlogPost},[]);

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



