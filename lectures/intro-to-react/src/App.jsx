import React, { useState, useEffect } from "react";
import Profile from  "./Profile.jsx";
import ButtonCount from "./ButtonCount.jsx";
import { getPosts } from "./data-functions.js";
import "./App.css";

export default function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function () {
            console.log("fetching posts from the server...");
            const posts = await getPosts();
            console.log(posts);
            console.log("setting a state variable...")
            setPosts(posts);
        })();
    }, []);

    function generateProfileComponentsFromData() {
        // return an array of Profile Componenets generated from the people array:
        return posts.map((item) => (
            <Profile name={item.user.first_name} picture={item.user.image_url} bio={item.caption} />
        ));
    }

    console.log("Rendering the App component: ", posts);

    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <div className="people">
                    { generateProfileComponentsFromData()}
                </div>
                <ButtonCount initialValue={6} />
                <ButtonCount initialValue={2} />
                <ButtonCount initialValue={4} />
                <ButtonCount initialValue={999} />
            </main>
        </>
    );
}


