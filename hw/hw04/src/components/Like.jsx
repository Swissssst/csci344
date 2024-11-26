import React, { useState } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Like({ token, likeId, postId }) {
    const [stateLikeId, setStateLikeId] = useState(likeId);

    async function createLike() {
        const sendData = { post_id: postId };
        const responseData = await postDataToServer(
            token,
            "/api/likes/",
            sendData
        );
        setStateLikeId(responseData.id);
    }

    async function deleteLike() {

        const url = `/api/likes/${stateLikeId}`;
    
        await deleteDataFromServer(token, url);
        console.log("Like deleted successfully.");
        setStateLikeId(null);
    }

    if (stateLikeId) {
        return (
            <button
                role="switch"
                aria-label="Unlike This Post"
                aria-checked="true"
                onClick={deleteLike}
            >
                <i className="fas text-red-700 fa-heart"></i>
            </button>
        );
    } else {
        return (
            <button
                role="switch"
                aria-label="Like This Post"
                aria-checked="false"
                onClick={createLike}
            >
                <i className="far fa-heart"></i>
            </button>
        );
    }
}