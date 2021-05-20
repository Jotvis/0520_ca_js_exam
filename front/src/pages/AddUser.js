import React from 'react';
import {useRef as ref} from "react";
import Fetch from "../plugins/Fetch";
import {Link} from "react-router-dom";

function AddUser({set}) {
    const name = ref()
    const age = ref()
    const email = ref()
    const password = ref()

    const createUser = () => {
        const data = {
            name: name.current.value,
            age: age.current.value,
            email: email.current.value,
            password: password.current.value,
        }

        Fetch.post('/addUser', data)
            .then(res => {
                console.log(res)
                if (res.success === true) {
                    set(res.data)
                } else {

                }
            })
            .catch( (error) => console.error(error))
    }

    return (
        <>
            <div> <h1>Vartotojo kūrimas</h1> </div>
            <div>
                <input ref={name} type="text" placeholder='Vardas'/>
                <input ref={age} type="number" placeholder='Amžius'/>
                <input ref={email} type="text" placeholder='El. paštas'/>
                <input ref={password} type="password" placeholder='Slaptažodis'/>
                <button onClick={createUser}>
                    <Link to='/'>Sukurti vartotoją</Link>
                </button>
            </div>
        </>
    );
}

export default AddUser;