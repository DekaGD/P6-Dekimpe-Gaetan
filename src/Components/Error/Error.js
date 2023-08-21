import React from 'react'
import { Link } from "react-router-dom"
import "../../Styles/error.css"
import '../../Styles/index.css'



export default function Error() {

    return (

        <div className='error'>
            <span>404</span>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <p><Link to="/">Retourner sur la page d'accueil </Link></p>
        </div>
        
    )
}

