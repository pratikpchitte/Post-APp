import PostContext from "./postContext";
import { useState } from "react";

const PostState=(props)=>{
    const abcd = [
            {
                "_id": "63ed1aa3159fb228fe733188",
                "posti": "This is my first note Noopur",
                "comment": [
                  "Hello Noopue this is my first post",
                  "hello pratik",
                  "how are you",
                  "I'm fine pratik"
                ],
                "timestamp": "2023-02-15T17:47:15.296Z",
                "__v": 0
              },
              {
                "_id": "63ed1aa359fb228fe733188",
                "posti": "This is my first note Noopur",
                "comment": [
                  "Hello Noopue this is my first post",
                  "hello pratik",
                  "how are you",
                  "I'm fine pratik"
                ],
                "timestamp": "2023-02-15T17:47:15.296Z",
                "__v": 0
              },
              {
                "_id": "63ed1aa3159fb228fe73188",
                "posti": "This is my first note Noopur",
                "comment": [
                  "Hello Noopue this is my first post",
                  "hello pratik",
                  "how are you",
                  "I'm fine pratik"
                ],
                "timestamp": "2023-02-15T17:47:15.296Z",
                "__v": 0
              }
       
      ]
      const [posts, setPosts] = useState(abcd)

    return(
        <PostContext.Provider value={{posts,setPosts}}>
            {props.children.children}
        </PostContext.Provider>
    )
}

export default PostState;