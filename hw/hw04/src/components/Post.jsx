import React from "react";
import Bookmark from "./Bookmark";
import Like from "./Like";

// Job: create tasteful representation of the post using data passed in from parent

export default function Post({postData, token}) {

    return (
        <section className="bg-white border mb-10">

            {/* user header */}
            <div className="p-4 flex justify-between">
                <h3 className="text-lg font-Comfortaa font-bold">
                    {postData.user.username}</h3>
                <button className="icon-button"><i className="fas fa-ellipsis-h"></i></button>
            </div>

            {/* image */}
            <img src={postData.image_url}
             alt={postData.alt_text || "Post Photo"} 
             width="300" height="300"
             className="w-full bg-cover"></img>

            {/* buttons */}
            <div className="p-4">
                <div className="flex justify-between text-2xl mb-3">
                    <div className="flex gap-2">

                        {/* like button */}
                        <Like likeId={postData.current_user_like_id} postId={postData.id} token={token} />


                        {/* misc buttons */}
                        <button><i className="far fa-comment"></i></button>
                        <button><i className="far fa-paper-plane"></i></button>
                    </div>
                    <div>

                        {/* bookmark button */}
                        <Bookmark bookmarkId={postData.current_user_bookmark_id} 
                        postId={postData.id}
                        token={token}/>
                    </div>
                </div>

                {/* likes */}
                <p className="font-bold mb-3">{postData.likes.length} likes</p>

                {/* caption by author */}
                <div className="text-sm mb-3">
                    <p className="flex gap-1">
                        <strong>{postData.user.username}</strong>
                        {postData.caption}
                        <button className="button">more</button>
                    </p>
                </div>

                {/* comments */}
                <p className="flex gap-1 text-sm mb-3">
                    <strong>lizzie</strong>
                    Here is a comment text text text text text text text text.
                </p>
                <p className="flex gap-1 text-sm mb-3">
                    <strong>vanek97</strong>
                    Here is another comment text text text.
                </p>
                
                {/* last updated */}
                <p className="uppercase text-gray-500 text-xs">
                    {postData.display_time}</p>
            </div>
            {/* <div className="flex justify-between items-center p-3">
                <div className="flex items-center gap-3 min-w-[80%]">
                    <i className="far fa-smile text-lg"></i>
                    <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
                </div>
                <button className="text-blue-500 py-2">Post</button>
            </div> */}

        </section>
    )
}