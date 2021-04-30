import React from 'react';

export default function Header(props) {
  return (
    <h1 style={{fontFamily:"Raleway", marginTop: 50}}>{props.headerText}</h1>
  )
}