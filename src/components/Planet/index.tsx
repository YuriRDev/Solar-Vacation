import React from 'react';

// import { Container } from './styles';

import star from '../../assets/star.svg'


interface PlanetInterface {
    name: string;
    image: any;
    stars: number;
    onclick: any;
}

const Planet: React.FC<PlanetInterface> = ({ name, image, stars, onclick }) => {
    return (
        <div
            style={{
                height: 190,
                width: 180,
                borderRadius: 8,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
                marginRight: 30,
                marginBottom: 30,
                backdropFilter: 'blur(20px)',
                cursor: 'pointer'
            }}
            onClick={onclick}
        >
            <text
                style={{
                    fontFamily: 'Orbitron',
                    fontSize: 18
                }}
            >{name}</text>

            <img
                src={image}
                onDragStart={(e) => {
                    e.preventDefault()
                }}
                style={{
                    height: 68,
                    width: 68
                }}
                alt={name}
            />

            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >

                <img
                    src={star}
                    style={{
                        height: 24,
                        width: 24,
                        marginRight: 4
                    }}
                />
                <img
                    src={star}
                    style={{
                        height: 24,
                        width: 24,
                        marginRight: 4
                    }}
                    alt={'star'}
                />
                <img
                    src={star}
                    style={{
                        height: 24,
                        width: 24,
                        marginRight: 4
                    }}
                    alt={'star'}
                />
                {stars >= 4 && (
                    <img
                        src={star}
                        style={{
                            height: 24,
                            width: 24,
                            marginRight: 4
                        }}
                        alt={'star'}
                    />
                )}
                {stars >= 5 && (
                    <img
                        src={star}
                        style={{
                            height: 24,
                            width: 24,
                            marginRight: 4
                        }}
                        alt={'star'}
                    />
                )}

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

export default Planet;