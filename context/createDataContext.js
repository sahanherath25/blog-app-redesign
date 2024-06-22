import React, {createContext} from "react";
import {useReducer} from "react";

export default (reducer, actions, initialState) => {
    const Context = createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        //actions === {addBlogPost:(dispatch)=>{return ()=> dispatch({type:"add_blogpost"})}}

        let boundActions={};

        for(let key in actions) {
            //key=== {addBlogPost:addBlogPost,removeBlogPost:removeBlogPost}
            boundActions[key]=actions[key](dispatch)
        }

        return(
            <Context.Provider value={{state,...boundActions}}>
                {children}
            </Context.Provider>
        )
    }

    return {Context,Provider}
}

