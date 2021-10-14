import React from 'react'
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import 'firebase/app'

import { auth } from "../firebase";
import firebase from "firebase/app";

const Login = () => {

    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to Simplex!</h2>

                <div className='login-button google'>
                    <GoogleOutlined
                        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                    /> Sing In With Google
                </div>


                <br/>  <br/>

                <div className='login-button facebook'>
                    <FacebookOutlined
                        onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                    /> Sing In With Facebook
                </div>

            </div>

        </div>
    )
}


export default Login
