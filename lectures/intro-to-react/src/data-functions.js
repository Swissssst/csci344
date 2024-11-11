 // function to log in and get access token:
 export async function getAccessToken(username, password) {
    const endpoint = `https://photo-app-secured.herokuapp.com/api/token/`;
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
    });
    const data = await response.json();
    return data.access_token;
}

// function to retrieve all of your posts:
export async function getPosts() {
    // get your access token: change this to your username:
    const token = await getAccessToken("tyler", "password");
    const response = await fetch(
        `https://photo-app-secured.herokuapp.com/api/posts/`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
        }
    );
    return await response.json();
}