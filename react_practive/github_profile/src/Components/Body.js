import React, { useState, useEffect } from "react";

function Body() {

    const [Profile, setProfile] = useState([]);

    async function getProfile() {
        
        const response = await fetch("https://api.github.com/users?since=00000&per_page=50");
        const data = await response.json();

        setProfile(data);
    }

useEffect(()=> {
    getProfile();
}, []);

    return (
        <>
            <div className="profiles">
                {
                    Profile.map((profile) => {
                        return (
                            <div key={profile.id} className="cards">
                                <img src={profile.avatar_url}></img>
                                <h2>{profile.login}</h2>
                                <a href={profile.html_url} target="_blank">Profile</a>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}


export default Body;