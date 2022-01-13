import React from 'react';

// import { Container } from './styles';

interface PlanetInterface {
    name: string;
    image: any;
    description: string;
}

const TopPlanet: React.FC<PlanetInterface> = ({name, image, description}) => {
    return (
        <div
            style={{
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                maxWidth: 112,
            }}
        >
            <text
                style={{
                    fontFamily: 'Orbitron',
                    fontWeight: 500
                }}
            >{name}</text>
            <img
                src={image}
                style={{
                    height: 80,
                    width: 80,
                    margin: '8px 0px'
                }}
                onDragStart={(e) => {e.preventDefault()}}
/>
            <text
                style={{
                    fontSize: 14,
                    textAlign: 'center'
                }}
            >{description}</text>
        </div>

    );
}

export default TopPlanet;