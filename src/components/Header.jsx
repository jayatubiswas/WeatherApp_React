import React from 'react'
import { Link } from 'react-router-dom'
import "./css/header.css"

function Header() {
    return (
        <>
        <div className="header">
            <div className="header__nav">
                <Link to="/">
                    <button>Logout</button>
                </Link>
            </div>
        </div>


        </>
    )
}

export default Header
