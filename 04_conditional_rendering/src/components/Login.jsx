import React from 'react'

export default function Login() {
  const isAdmin=true;
  return (
    <>
    {isAdmin && <p>this is admin page</p>}
    </>
  )
}
