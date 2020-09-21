import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react'
import { onAuthUIStateChange } from '@aws-amplify/ui-components'


import Container from './Container'

function Profile() {

    useEffect(() => {
        return onAuthUIStateChange(newAuthState => {
            if (newAuthState === 'signedin') {
                checkUserInfo()
            }
            setAuthState(newAuthState)
        });
    }, []);

    const [authState, setAuthState] = useState();
    const [user, setUser] = useState({})

    async function checkUserInfo() {
        try {
            const data = await Auth.currentUserPoolUser()
            const userInfo = { username: data.username, ...data.attributes }
            setUser(userInfo)
        } catch (error) {
            console.log('error: ', error)
        }
    }
    return (
        <Container>
            <AmplifyAuthenticator>
                <AmplifySignIn slot="sign-in" hideSignUp>
                </AmplifySignIn>
                <h1>Profile</h1>
                <h2>Username: {user.username}</h2>
                <h3>Email: {user.email}</h3>
                <h4>Phone: {user.phone_number}</h4>
            </AmplifyAuthenticator>
        </Container>
    )
}

export default Profile
