import React from 'react'

export default function Button({label, callmefun}) {
  return (
    <button onClick={callmefun}>{label}</button>
  )
}
