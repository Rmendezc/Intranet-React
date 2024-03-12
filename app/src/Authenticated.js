import React, { Fragment } from 'react';
import Sidebar from './components/Sidebar';
import firebase from 'firebase/compat/app';
import AuthNavbar from './components/AuthNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export const Authenticated = (props) => {
    return (
        <div>
            <Fragment>
            <AuthNavbar/>
            <Sidebar />
            </Fragment>
            {/* <Router>
                <Routes>
                    <Route path='/home' exact component={Home}/>
                </Routes>
            </Router> */}

            <div className='container'>
                <span> User Email</span> : <span> {props.user.email} </span>
                <br/>
                <span>UID</span>: <span> {props.user.uid} </span>
            </div>
            {/* <div className='signout'>
            <button onClick={()=> firebase.auth().signOut()}>Sign Out </button> */}
        </div>
    );
};