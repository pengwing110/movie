import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <nav>
            <ul>
                <li>
                    <button
                        className={location.pathname === '/' ? 'active' : ''}
                        onClick={() => navigate('/')}>
                        홈
                    </button>
                </li>
                <li>
                    <button
                        className={location.pathname === '/list' ? 'active' : ''}
                        onClick={() => navigate('/list')}>
                        영화 목록
                    </button>
                </li>
            </ul>
        </nav>
    )
}