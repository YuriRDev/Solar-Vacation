import React, { useState } from 'react';

// import { Container } from './styles';

interface SpecieInterface {
    name: string;
}

const Specie: React.FC<SpecieInterface> = ({ name }) => {
    const [value, setValue] = useState(0)

    return (
        <div
            style={{
                position: 'relative',
                width: 240,
                height: 134,
                padding: 24,
                marginRight: 25,
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexDirection: 'column'
            }}
        >
            <text
                style={{
                    fontFamily: 'Orbitron',
                    fontSize: 18
                }}
            >
                {name}
            </text>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                }}
            >
                <div>-</div>
                <text>0</text>
                <div>+</div>
            </div>
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    background: `linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 51.56%, rgba(255, 255, 255, 0.05) 100%)`,
                    borderRadius: 8,
                    opacity: .8,
                    position: 'absolute',
                    top: 0,
                    right: 0
                }}
            />
        </div>
    );
}

export default Specie;