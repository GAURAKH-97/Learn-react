import React from 'react'

export default function Nologin() {
  const visibility =true;
  const visible= visibility? "visible": "unvislble";
    return (
    <div className={visible}>Please login first</div>
  )
}
