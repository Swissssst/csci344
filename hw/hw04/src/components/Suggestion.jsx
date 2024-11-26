import React from "react";

export default function Suggestion({ suggestionData }) {
    return (
        <section className="flex justify-between items-center mb-4 gap-2">
            {/* Profile Picture */}
            <img
                src={suggestionData.thumb_url}
                alt={`${suggestionData.username}'s profile`}
                className="rounded-full w-10 h-10"
            />

            {/* Username and Name */}
            <div className="w-[180px]">
                <p className="font-bold text-sm">{suggestionData.username}</p>
                <p className="text-gray-500 text-xs">suggested for you</p>
            </div>

            {/* Follow Button */}
            <button className="text-blue-500 text-sm py-2">Follow</button>
        </section>
    );
}