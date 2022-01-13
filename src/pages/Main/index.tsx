import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';


import backgroundimg from '../../assets/backgroundimg.png'
import COLORS from '../../colors';

import { ExploreButton } from './styles'

import venus from '../../assets/venus.svg'
import jupter from '../../assets/jupter.svg'
import uranus from '../../assets/uranus.svg'
import TopPlanet from '../../components/TopPlanet';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';



const Main: React.FC = () => {


    const titleAnimation = useAnimation();
    const subtitleAnimation = useAnimation();
    const buttonAnimation = useAnimation();
    const bottomAnimation = useAnimation();

    titleAnimation.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeIn', duration: .5 }
    })

    subtitleAnimation.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeIn', duration: .5, delay: .3 },
    })

    buttonAnimation.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeIn', duration: .5, delay: .6 },
    })

    bottomAnimation.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeIn', duration: .5, delay: 1 }
    })

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                background: `linear-gradient(180deg, #0C011B 0%, rgba(0, 0, 0, 0) 60%), url(${backgroundimg})`,
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >

            {/** Header */}
            <Header />
            {/** BODY */}
            <div
                style={{
                    width: '100vw',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '32px 0px'
                }}
            >
                <div
                    style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/** TITLE */}
                    <motion.text
                        animate={titleAnimation}
                        initial={{
                            y: -10,
                            opacity: 0
                        }}
                        style={{
                            fontFamily: 'Orbitron',
                            fontSize: 80,
                            fontWeight: 800,
                        }}
                    >Solar vacation</motion.text>

                    {/**SubTtitle */}
                    <motion.div
                        animate={subtitleAnimation}
                        initial={{
                            opacity: 0
                        }}
                        style={{
                            marginTop: 16,
                            fontSize: 20,
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        Choose <text style={{ color: COLORS.Green }}>over 7 planets</text> in our solar system <br />
                        and find the perfect vacation you need!
                    </motion.div>

                    {/** CTA Explore */}
                    <motion.div
                        animate={buttonAnimation}
                        initial={{
                            opacity: 0
                        }}
                        style={{
                        }}
                    >
                        <ExploreButton
                            onClick={() => {
                                // window.location.href='/explore'
                            }}
                        >
                            Explore
                        </ExploreButton>
                    </motion.div>
                </div>

                <motion.div
                    animate={bottomAnimation}
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    style={{
                        height: 212,
                        width: 680,
                        borderRadius: 10,
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        padding: '40px 48px',
                        position: 'relative',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <TopPlanet
                        name={"Venus"}
                        image={venus}
                        description={`"Great on summer"`}
                    />

                    <div
                        style={{
                            backgroundColor: COLORS.Background,
                            height: 120,
                            width: 3,
                            borderRadius: 1000
                        }}
                    />

                    <TopPlanet
                        name={"Jupter"}
                        image={jupter}
                        description={`"Beautiful view"`}
                    />


                    <div
                        style={{
                            backgroundColor: COLORS.Background,
                            height: 120,
                            width: 3,
                            borderRadius: 1000
                        }}
                    />

                    <TopPlanet
                        name={"Uranus"}
                        image={uranus}
                        description={`"Good for family vacation"`}
                    />


                    <div
                        style={{
                            height: '100%',
                            width: '100%',
                            position: 'absolute',
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.13) 0%, rgba(255, 255, 255, 0.08) 0.52%, rgba(255, 255, 255, 0.02) 55.21%, rgba(255, 255, 255, 0.1) 100%)',
                            backdropFilter: 'blur(20px)',
                            opacity: .7,
                            top: 0,
                            right: 0,
                            zIndex: -1,
                            borderRadius: 10,
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
}

export default Main;