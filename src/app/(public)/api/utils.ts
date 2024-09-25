"use server"
import React from 'react'

const utils = async () => {
    let data = {
        "bookId": 1,
        "customerName": "John"
    }

    let res = await fetch("https://simple-books-api.glitch.me/orders",
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer ff4e2d48189e21032a8ac8c610ef371b9ddf03af9a6d1a4c01b36032e9bee6b0"
            }
        }
    )

    let s = await res.json()
    console.log(s)
}


export default utils