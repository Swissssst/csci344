import "./Profile.css";
import React from "react";

export default function Profile({name, picture, bio}) {

    return (
        <section className="profile">
            <img src={picture} alt="picture of user" />
            <div>
                <h2>{name}</h2>
                <p>{bio}</p>
            </div>
        </section>
    );
}