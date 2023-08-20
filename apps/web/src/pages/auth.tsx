import axios from 'axios'
import Cookies from 'js-cookie';
import React from 'react'

const auth = () => {

    const { BASEURL } = process.env;
    console.log(Cookies.get('creatorToken'))
    const handleAuth = () => {
        axios({
            baseURL: BASEURL || 'http://localhost:3000/api',
            url: '/auth/get',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem('creatorToken'),
                // 'Access-Control-Allow-Origin': "*"
            }
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }

  return (
    <button onClick={handleAuth} >Auth</button>
  )
}

export default auth