import React from 'react';

const sendLoginRequest = (email: string, password: string) => {
    return fetch('http://194.58.120.65:9000/v1/api/auth/signIn', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Login error')
        })
};

export const AuthService = {
    sendLoginRequest
};