import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'

import './App.css';
import GetTitleLength from "./components/GetTitleLength";
import GetSinglePost from "./components/GetSinglePost";
import GetUserPosts from "./components/GetUserPosts";
import PostNewKey from "./components/PostNewKey";
import AddText from "./components/AddText";
import ValidateThis from "./components/ValidateThis";

function App() {
    // const [email, setEmail] = useState('')

    return (
        <Router className="App">
            <div className="d-flex">
                <Link className='m-20' to='/getSinglePost/1'>Get single post</Link>
                <Link className='m-20' to="/getUserPosts/2">Get users posts</Link>
                <Link className='m-20' to="/getLength">Get title length</Link>
                <Link className='m-20' to='/postKey'>Post new key</Link>
                <Link className='m-20' to='/addText'>Add new text</Link>
                <Link className='m-20' to='/validateThis'>Validate input</Link>

            </div>
            <hr/>
            <Switch>
                <Route path="/getSinglePost/:id"> <GetSinglePost/> </Route>
                <Route path="/getUserPosts/:id"> <GetUserPosts/> </Route>
                <Route path="/getLength"> <GetTitleLength/> </Route>
                <Route path='/postKey'> <PostNewKey/> </Route>
                <Route path='/addText'> <AddText/> </Route>
                <Route path='/validateThis'> <ValidateThis
                    // set={setEmail}
                /> </Route>
            </Switch>
        </Router>
    );
}

export default App;
