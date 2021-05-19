import React from 'react';

function getUser() {
    fetch(`http://localhost:3001/getUser/1`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

function GetUserPosts() {
    return (
        <div>
            <button onClick={getUser}>Get user no.1</button>
        </div>
    );
}

export default GetUserPosts;