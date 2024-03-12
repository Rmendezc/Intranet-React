import React, {Fragment, useEffect, useState} from 'react';
import './App.css';
import { initializeApp } from 'firebase/app';
import AuthGoogle from './authGoogle';
import firebase from 'firebase/compat/app';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import {onAuthStateChanged} from 'firebase/auth';
import { Authenticated } from './Authenticated';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from '@mui/icons-material/Home';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCNDdGOP8ZeSHUkLSkkA4jb1E7jxbUgqOk",
    authDomain: "canyon-intranet.firebaseapp.com",
    projectId: "canyon-intranet",
    storageBucket: "canyon-intranet.appspot.com",
    messagingSenderId: "345495638378",
    appId: "1:345495638378:web:80ea743d36569749005513",
    measurementId: "G-0NGBKJ6CEV"
  };

  firebase.initializeApp(firebaseConfig);
  const [user, setUser] = useState({});
  useEffect (()=> {
    onAuthStateChanged(firebase.auth(), (user)=> {
      if(user) {
      setUser({ email: user.email, uid: user.uid });
      }else {
        setUser({});
      }
    });
  });

  return (
    <div className="App">
      <Fragment>
        <Navbar/>
      </Fragment>
    

      <BrowserRouter>
        {user.email? (
          <Routes>
            <Route path="/authenticated" 
            element={<Authenticated user={user} />} 
            />

          </Routes> 
        ) : (
        <AuthGoogle auth={firebase.auth()} />
      )}
      </BrowserRouter>
      <div className='signout'>
        <button onClick={()=> firebase.auth().signOut()}>Sign Out </button>
      </div>


    </div>
  );
}

export default App;
