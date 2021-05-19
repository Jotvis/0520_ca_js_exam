import React from 'react';

function postKey(key, value, id) {
    fetch('http://localhost:3001/postKey', {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            name: key,
            value: value,
            id: id
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

function PostNewKey() {
    return (
        <div>
            <button onClick={() => postKey('city', 'Vilnius', 1)}>Post Key</button>
        </div>
    );
}

export default PostNewKey;