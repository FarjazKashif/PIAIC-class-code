import React from 'react'
import OrderButton from './OrderButton'
import DeleteButton from './Delete-Button'

interface IBook {
    id: number,
    name: string,
    type: string,
    available: boolean
}

const Api = async () => {

    let url = "https://simple-books-api.glitch.me"
    let books = await fetch(`${url}/books`)
    let json: IBook[] = await books.json()

    return (
        <div>
            <h1 className="text-lg font-bolds my-3">Books</h1>
            <ul>
                {json.map((book) => {
                    return (<li key={book.id} className='flex gap-4 py-2 items-center'>
                        {book.name}
                        <OrderButton />
                        <DeleteButton id={book.id}/>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default Api