import React from 'react'

interface iProps {
  params: {
    name: string
  }
}

const page = ({ params: {name} }: iProps) => {
  console.log(name)

  return (
    <div>Hello: {name.toUpperCase()}</div>
  )
}

export default page