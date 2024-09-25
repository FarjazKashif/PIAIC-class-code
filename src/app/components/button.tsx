import React from 'react'

// Use Interface to make it type safe

interface iBtn {
    text: string
}

// Use Destructuring to avoid 
// Ctrl + space helps tto know what's in it {}
// const button = (props: iBtn) => {

const button = ({text}: iBtn) => {
    
    return (
        <button>{text}</button>
    )
}

export default button