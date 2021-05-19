import React from 'react';

function addNewText (text, id) {
    fetch('http://localhost:3001/addText', {
        method: "POST",
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            text: text,
            id: id
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

function AddText(props) {
    return (
        <div>
            <button onClick={() => addNewText('LABAS LABAS LABAS LABAS LABAS', 1)}>
                Add Title text
            </button>
        </div>
    );
}

export default AddText;