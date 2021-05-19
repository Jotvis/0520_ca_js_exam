import React from 'react';

function getLength() {
    fetch(`http://localhost:3001/getLength`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

function GetTitleLength() {
    return (
        <div>
            <button onClick={getLength}>Get length of titles</button>
        </div>
    );
}

export default GetTitleLength;