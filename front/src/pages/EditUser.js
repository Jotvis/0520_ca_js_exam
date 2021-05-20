import React, {useState, useEffect} from 'react';
import {useLocation, Link} from 'react-router-dom'
import Fetch from "../plugins/Fetch";
import DisplayUser from "./DisplayUser";
import App from "../App";

function EditUser({set}) {
    const location = useLocation().pathname
    const id = location.slice(10)
    // const [user, setUser] = useState('')

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect( () => {
        Fetch.get(`/find/${id}`)
            .then( res => {
                setName(res.data.name)
                setAge(res.data.age)
                setEmail(res.data.email)
                setPassword(res.data.password)
                })
    }, [])


    const updateUser = () => {
        const data = {
            id: id,
            name: name,
            age: age,
            email: email,
            password: password,
        }

        Fetch.post(`/update`, data)
            .then(res => {
                console.log(res)
                if (res.success === true) {
                    set(res.data)
                    return(
                        <App/>
                    )
                } else {

                }
            })
    }

    return (
        <>
            <div><h1>Vartotojo redagavimas</h1></div>

            <div>
                <input type="text" placeholder='Vardas' value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="number" placeholder='Amžius' value={age} onChange={(e) => setAge(e.target.value)}/>
                <input type="text" placeholder='El. paštas' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="text" placeholder='Slaptažodis' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={updateUser}>
                    {/*<Link to='/'>*/}
                        Atnaujinti vartotoją
                    {/*</Link>*/}
                </button>
            </div>
        </>
    )
}


export default EditUser;