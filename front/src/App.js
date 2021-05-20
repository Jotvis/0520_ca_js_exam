import React, {useState, useEffect} from "react";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'
import Fetch from "./plugins/Fetch";
import './App.css';
import DisplayUser from './pages/DisplayUser'
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";

function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
       Fetch.get('/all')
            .then(res=> {
                console.log(res.data)
                if (res.success === true) {
                    setUsers(res.data)
                } else {

                }
            })
    }, [])

    return (
        <Router className="App">
            <div className="d-flex">
                <Link className='m-20' to='/'>Pradinis puslapis</Link>
                <Link className='m-20' to='/addEdit'>Pridėti vartotoją</Link>
            </div>
            <hr/>

            <Switch>
                <Route path='/' exact>
                    <div className=''>
                        <h1 className='m-20'>Vartotojai</h1>

                        {users.map( (user, index) =>
                            <DisplayUser
                                key={index}
                                user={user}
                                set={setUsers}
                            />
                        )}

                    </div>
                </Route>

                <Route path='/addEdit'>
                    <AddUser set={setUsers}/>
                </Route>

                <Route path='/editUser'>
                    <EditUser set={setUsers}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
