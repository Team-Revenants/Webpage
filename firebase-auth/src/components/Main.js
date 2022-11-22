import React from 'react'
import "./Main.css"
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className='main'><Link  style={{textDecoration: 'none'}} to="/login"><h1 className='title'>Revenants</h1></Link></div>
  )
}
