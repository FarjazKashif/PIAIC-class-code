"use client"

import React from 'react'
import DeleteBook from './deleteBook'
import { Button } from '@/components/ui/button'

const DeleteButton = async ({id}: {id: number}) => {
    return (
        <Button onClick={async () => {
            await DeleteBook({id})
        }}>Delete Book</Button>
    )
}

export default DeleteButton