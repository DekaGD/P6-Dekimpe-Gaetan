import React from 'react'
import { Link } from 'react-router-dom'
import '../../Styles/banner.css'
import '../../Styles/index.css'

export default function Banner() {
  return (
    <div className="header">
      <div className="headerImg">
      <img src="/Logo.png" className="Logo" alt="logo"></img>
      </div>
        <nav>
          <ul className='accueil_infos'>
            <li className='accueils'>
            <Link to="/" className='accueil'>Accueil</Link>
            </li>
          <li className='infos'>
          <Link to="/Infos" className='info'>A Propos</Link>
          </li>
          </ul>
        </nav>
      </div>
    
  )
}
