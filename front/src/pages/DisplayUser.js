import React, {useState} from 'react';
import Fetch from "../plugins/Fetch";
import {Link} from 'react-router-dom'


function DisplayUser({user, set}) {
    const id = user._id
    const [error, setError] = useState([])


    const deleteUser = () => {
        Fetch.get(`/delete/${user._id}`)
            .then(res => {
                console.log(res.data)
                // set(res.data)
                if (res.success === true) {
                    set(res.data)
                } else {
                    setError(res.error)
                }
            })
    }

    return (
        <li className='d-flex border'>
            <div className='m-20'>Vardas: {user.name}</div>
            <div className='m-20'>Amžius: {user.age}</div>
            <div className='m-20'>El. paštas: {user.email}</div>
            <div className='m-20'>Slaptažodis: {user.password}</div>
            <button>
                <Link to={`/editUser/${id}`}>Redaguoti</Link>
            </button>
            <button onClick={deleteUser}>Trinti</button>

            <div>{error.map(err => {
                return(<div>{err}</div>)
            })}</div>
        </li>
    )
}

export default DisplayUser;