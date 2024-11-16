import React, {useState} from "react";
import { postDataToServer, deleteDataFromServer } from "../server-requests";

// Job:
// Render the bookmark (reflecting if current user bookmarked or not)
// Create/delete bookmarks
export default function Bookmark({token, bookmarkId, postId}) {
    const [stateBookmarkId, setStateBookmarkId] = useState(bookmarkId);

    async function createBookmark() {
        console.log("creating a bookmark...")
        const sendData = {
            post_id: postId,
        };
        // send HTTP post request to create bookmark
        const responseData = await postDataToServer(token, "/api/bookmarks/", sendData);
        console.log(responseData);
        setStateBookmarkId(responseData.id);
    }

    async function deleteBookmark() {
        console.log("deleting a bookmark...")
        const url = 'api/bookmarks/' + stateBookmarkId;

        const responseData = await deleteDataFromServer(token, url, stateBookmarkId);
        console.log(responseData);
        setStateBookmarkId(null);
    }

    console.log(stateBookmarkId);
    if (stateBookmarkId) {
        return (
            <button aria-label="Unbookmark This Post" aria-checked="true" aria-roledescription="toggle" 
            onClick={deleteBookmark}>
                <i className="fas fa-bookmark"></i>
            </button>
        );
    } else {
        return (
            <button aria-label="Bookmark This Post" aria-checked="false" aria-roledescription="toggle" 
            onClick={createBookmark}>
                <i className="far fa-bookmark"></i>
            </button>
        );
    }
}