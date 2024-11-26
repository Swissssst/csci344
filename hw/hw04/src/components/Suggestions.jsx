import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Suggestion from "./Suggestion";

export default function Suggestions({ token }) {
    const [suggestions, setSuggestions] = useState([]);

    async function getSuggestions() {
        const data = await getDataFromServer(token, "/api/suggestions/");
        setSuggestions(data);
    }

    useEffect(() => {
        getSuggestions();
    }, []);

    return (
        <div className="mt-4">
            <p className="text-base text-gray-400 font-bold mb-4">
                Suggestions for you
            </p>

            <section className="flex flex-col gap-4">
                {suggestions.map((suggestionObj) => (
                    <Suggestion key={suggestionObj.id} suggestionData={suggestionObj} />
                ))}
            </section>
        </div>
    );
}











// export default function Suggestions({ suggestionData, key }) {
//     const [suggestions, setSuggestions] = useState({});

//     async function getSuggestions() {
//         const data = await getDataFromServer(token, "/api/suggestions/");
//         setSuggestions(data);
//     }

//     useEffect(() => {
//         getSuggestions();
//     }, []);

//     function outputSuggestion {
//         return (<Suggestion key={suggestionObj.id} suggestionData={suggestionObj} />);
//     }


// }


// return (
//     <div className="mt-4">
//         <p className="text-base text-gray-400 font-bold mb-4">
//             Suggestions for you
//         </p>

//         <section className="flex justify-between items-center mb-4 gap-2">
//             Suggestions go here. Fetch data from /api/suggestions endpoint.
//         </section>
//     </div>
// );