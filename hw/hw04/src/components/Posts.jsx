import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

import Post from "./Post";

// Job: fetch post data from server
// iterate thru each element and draws a Post component

export default function Posts({ token }) {

    // state variables: every time a state var gets set it redraws the component
    const [posts, setPosts] = useState([]);

    async function getPosts() {
        // fetches data from api/posts
        const data = await getDataFromServer(token, "/api/posts");
        // printing data to screen
        console.log(data);
        // setting a state variable
        // console.log("Setting a state var to redraw the screen after posts are set...")
        setPosts(data); // state var setters always redraws the screen
    }

    // useEffect is built-in function designed to handle "side effects" when page first loads
    useEffect(() => {
        getPosts();
    }, []);

    function outputPost(postObj) {
        return <Post key={postObj.id} postData={postObj} token={token}/>
    }

    return (
        <div>
            {
                posts.map(outputPost)
            }
        </div>
    )
}
