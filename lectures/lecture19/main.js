// https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track&limit=5

/** 1. Write an asynchronous function that accepts two arguments...
 *       - A search term
 *       - The number of results
 *
 * Your function will then query Spotify based on the arguments provided and
 * returns a list of data matching the search criteria.
 */
 async function spotifySearch(searchTerm, limit) {
    // build url, send request to spotify, return the list of results
    const url = `https://www.apitutor.org/spotify/simple/v1/search?q=${searchTerm}&type=track&limit=${limit}`;

    const response = await fetch(url);
    const data = await response.json();

    return data;
 }

async function tester() {
    const kKrule = await spotifySearch("king krule", 10);
    const beyonce = await spotifySearch("beyonce", 5);

    const snippet1 = generateHTML(beyonce[0]);
    const snippet2 = generateHTML(kKrule[0]);

    console.log(snippet1);
    console.log(snippet2);
}
tester();

 /**
 *  2. Write a function that accepts a JavaScript "track" object and returns an
 *     HTML representation of this object
 */
function generateHTML(trackObj) {
    return `<section>
        ${trackObj.name}
        <img src="${trackObj.album.image_url}" />
    </section>
    `
}


/**  3. Wire up the functiontality that you made to an HTML search form. When
 *     the user types in a search term and clicks the submit button, your form
 *     should show a list of the matching tracks.
 *
 */
