import React, { useState } from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

export default function Bookmark({ token, bookmarkId, postId }) {
    const [stateBookmarkId, setStateBookmarkId] = useState(bookmarkId);

    async function createBookmark() {
        const sendData = { post_id: postId };
        const responseData = await postDataToServer(
            token,
            "/api/bookmarks/",
            sendData
        );
        console.log(responseData);
        setStateBookmarkId(responseData.id);
    }

    async function deleteBookmark() {
        const url = `/api/bookmarks/${stateBookmarkId}`;
        await deleteDataFromServer(token, url);
        console.log("Bookmark deleted successfully.");
        setStateBookmarkId(null);
    }

    return stateBookmarkId ? (
        <button
            role="switch"
            aria-label="Unbookmark This Post"
            aria-checked="true"
            onClick={deleteBookmark}
        >
            <i className="fas fa-bookmark"></i>
        </button>
    ) : (
        <button
            role="switch"
            aria-label="Bookmark This Post"
            aria-checked="false"
            onClick={createBookmark}
        >
            <i className="far fa-bookmark"></i>
        </button>
    );
}
