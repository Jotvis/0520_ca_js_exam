import React, {useRef as ref} from 'react';
import {logDOM} from "@testing-library/react";

// validate email from input
// validate string to have at least 3 upperLetters
// validate string to have at least one numeric symbol
// validate object to have 3 keys in it
// validate array numbers sum to be 100
// validate endpoint param to not have * in it

function ValidateThis() {
    const email = ref()
    const string = ref()

    const get = () => {
        fetch ('http://localhost:3001/getget')
            .then(res => res.json())
            .then(data => console.log(data))
    }


    const post = async () => {
        const data = {
            email: email.current.value,
            string: string.current.value
        }

        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:3001/validateThis', options)
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className='flex-col m-20'>
            <input ref={email} className='m-20' type="text" placeholder='email'/>
            <input ref={string} type="text" className='m-20' placeholder='string, 3 upperCase, 1 num'/>
            <button onClick={post} className='m-20'>Validate</button>

            <button onClick={get}>NIGGA GIT!</button>
        </div>
    );
}

export default ValidateThis;