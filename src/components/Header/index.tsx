import React from 'react';
import COLORS from '../../colors';

import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '1170px',
                alignSelf: 'center',
                marginTop: 32,
                zIndex: 10000
            }}
        >
            <Link to={'/'} style={{textDecoration: 'none', color: COLORS.Light}}>
                <text
                    style={{
                        fontFamily: 'Orbitron',
                        fontWeight: 600,
                        fontSize: 24,
                        cursor: 'pointer'
                    }}
                >SV</text>
            </Link>

            <div
                style={{
                    color: COLORS.LightPlusOne,
                    fontSize: 16,
                }}
            >
                <text style={{ marginLeft: 24 }}>Safety</text>
                <text style={{ marginLeft: 24 }}>Reviews</text>
                <text style={{ marginLeft: 24 }}>About Us</text>
            </div>
        </div>
    );
}

export default Header;