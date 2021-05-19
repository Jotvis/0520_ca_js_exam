import React from 'react';

function getPost() {
    fetch(`http://localhost:3001/getPost/2`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

function GetSinglePost() {
    return (
        <div>
            <button onClick={getPost}>Get post no.2</button>
        </div>
    );

}

export default GetSinglePost;