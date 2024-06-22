import {createContext} from "react";


const CommentContext=createContext();;


export const CommentProvider = ({children}) => {

    return(
        <CommentContext.Provider value={{data2:25,name:"Sahan"}}>
            {children}
        </CommentContext.Provider>
    )

}

export default CommentContext