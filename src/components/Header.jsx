import { Link } from 'react-router-dom'
import React from 'react'
import NavBar from './NavBar'

export default function Header() {
    return (
        <header>
            <div className="inner">
                <h1 className="logo">
                    <Link to='/'>
                        <span>Filmory</span>
                    </Link>
                </h1>
                <NavBar />
            </div>
        </header>
    )
}