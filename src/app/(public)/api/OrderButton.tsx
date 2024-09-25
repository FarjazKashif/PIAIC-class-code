"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import utils from './utils'

const OrderButton = async () => {
    return (
        <Button onClick={async () => {
            await utils()
        }}>Order Book</Button>
    )
}

export default OrderButton