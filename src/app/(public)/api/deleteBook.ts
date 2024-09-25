"use server"
import React from 'react'

const DeleteBook = async ({id}: {id: number}) => {
    let res = await fetch(`https://simple-books-api.glitch.me/orders/${id}`,
        {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer ff4e2d48189e21032a8ac8c610ef371b9ddf03af9a6d1a4c01b36032e9bee6b0"
            }
        }
    )
    let s = res.json()
    console.log(s)
    console.log(id)
}

export default DeleteBook