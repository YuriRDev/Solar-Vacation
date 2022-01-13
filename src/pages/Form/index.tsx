import React, { useState } from 'react';
import COLORS from '../../colors';
import Header from '../../components/Header';
import Planet from '../../components/Planet';


import mercury from '../../assets/mercury.svg'
import venus from '../../assets/venus.svg'
import mars from '../../assets/mars.svg'
import jupter from '../../assets/jupter.svg'
import saturn from '../../assets/saturn.svg'
import uranus from '../../assets/uranus.svg'
import neptune from '../../assets/neptune.svg'
import pluto from '../../assets/pluto.svg'

import arrowleft from '../../assets/arrowleft.svg'

import wavebg from '../../assets/wavebg.svg'
import rocketbg from '../../assets/rocketbg.svg'
import { motion, useAnimation } from 'framer-motion';
import StepProgress from '../../components/StepProgress';
import Specie from '../../components/Specie';

import fromsvg from '../../assets/fromsvg.svg'



import {
    NextButton
} from './styles'

const Form: React.FC = () => {

    const [page, setPage] = useState(1)

    const [planet, setPlanet] = useState('')

    const [startDate, setStartDate] = useState<any>(null)
    const [endDate, setEndDate] = useState<any>(null)
    const [isDateFocused, setIsDateFocused] = useState<any>(null)

    const titleAnimation = useAnimation();
    const subtitleAnimation = useAnimation();
    const planetsAnimation = useAnimation();

    const firstStepAnimation = useAnimation();
    const whenSubtitleAnimation = useAnimation()
    const whenTitleAnimation = useAnimation()
    const datesAnimation = useAnimation()
    const nextAnimation = useAnimation()


    const seccondStepAnimation = useAnimation()
    const lastTextAnimation = useAnimation()
    const lastSubtitleAnimation = useAnimation()
    const confirmTermsAnimation = useAnimation()

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

    planetsAnimation.start({
        y: 0,
        opacity: 1,
        transition: { ease: 'easeIn', duration: .5, delay: .7 },
    })

    const handleNumberPage = () => {
        titleAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .3 }
        })

        subtitleAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .3, delay: .2 }
        })

        planetsAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .3, delay: .4 }
        }).then(() => {
            setPage(2)
        })
        firstStepAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .3, delay: 1 }
        })
        whenTitleAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .5, delay: 1.2 },
        })

        whenSubtitleAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .5, delay: 1.5 },
        })


        datesAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .5, delay: 1.8 },
        })

    }

    const handlePageThree = () => {
        firstStepAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .3, delay: 0 }
        })
        whenTitleAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .5, delay: 0.2 },
        })
        whenSubtitleAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .5, delay: .5 },
        })
        datesAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .5, delay: .8 },
        }).then(() => {
            setPage(3)
            seccondStepAnimation.start({
                y: 0,
                opacity: 1,
                transition: { ease: 'easeIn', duration: .3, delay: 0 }
            })
            lastTextAnimation.start({
                y: 0,
                opacity: 1,
                transition: { ease: 'easeIn', duration: .5, delay: 0.2 },
            })
            lastSubtitleAnimation.start({
                y: 0,
                opacity: 1,
                transition: { ease: 'easeIn', duration: .5, delay: .5 },
            })
            confirmTermsAnimation.start({
                y: 0,
                opacity: 1,
                transition: { ease: 'easeIn', duration: .5, delay: .8 },
            })
        })
    }

    const isValidDate = () => {
        nextAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .5, delay: 2 },
        })

    }

    const handleFirstPage = () => {
        firstStepAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .3, delay: 0 }
        })
        whenTitleAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .5, delay: 0.2 },
        })

        whenSubtitleAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .5, delay: 0.5 },
        })
        datesAnimation.start({
            y: -20,
            opacity: 0,
            transition: { ease: 'easeIn', duration: .3, delay: 0.8 },
        }).then(() => {
            setPage(1)
        })

        titleAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .5, delay: 1.5 }
        })
        subtitleAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .5, delay: 1.8 },
        })

        planetsAnimation.start({
            y: 0,
            opacity: 1,
            transition: { ease: 'easeIn', duration: .5, delay: 2 },
        })


    }

    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            {/** HEADER */}
            <Header />


            {/** FIRST PAGE! */}
            {/** FIRST PAGE! */}
            {/** FIRST PAGE! */}

            <div
                style={{
                    height: '100%',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: 0,
                    visibility: page == 1 ? 'visible' : 'hidden'
                }}
            >

                {/** TITLE */}
                <motion.text
                    animate={titleAnimation}
                    initial={{
                        y: 10,
                        opacity: 0
                    }}
                    style={{
                        fontFamily: 'Orbitron',
                        fontWeight: 800,
                        fontSize: 48,
                        marginTop: 80
                    }}
                >Let's get started!</motion.text>

                {/** Subtitle */}
                <motion.text
                    animate={subtitleAnimation}
                    initial={{
                        y: 0,
                        opacity: 0
                    }}
                    style={{
                        marginTop: 16,
                        fontSize: 20,
                        width: '100%',
                        textAlign: 'center'
                    }}
                >
                    First, choose your destiny
                </motion.text>

                {/** PLANET LIST */}
                <motion.div
                    animate={planetsAnimation}
                    initial={{
                        y: 20,
                        x: 0,
                        opacity: 0,
                    }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr',
                        marginTop: 80
                    }}
                >
                    <Planet
                        onclick={async () => {
                            setPlanet('Mercury')
                            setTimeout(() => {
                                handleNumberPage()
                            }, 150)
                        }}
                        name={'Mercury'}
                        image={mercury}
                        stars={4}
                    />
                    <Planet
                        onclick={() => {
                            setPlanet('Venus')
                            setTimeout(() => {
                                handleNumberPage()
                            }, 150)
                        }}
                        name={'Venus'}
                        image={venus}
                        stars={4}
                    />
                    <Planet
                        onclick={() => {
                            setPlanet('Mars')
                            setTimeout(() => {
                                handleNumberPage()
                            }, 150)
                        }}
                        name={'Mars'}
                        image={mars}
                        stars={4}
                    />
                    <Planet
                        onclick={() => {
                            setPlanet('Jupter')
                            setTimeout(() => {
                                handleNumberPage()
                            }, 150)
                        }}
                        name={'Jupter'}
                        image={jupter}
                        stars={4}
                    />
                    <Planet
                        onclick={() => {
                            setPlanet('Saturn')
                            setTimeout(() => {
                                handleNumberPage()
                            }, 150)
                        }}
                        name={'Saturn'}
                        image={saturn}
                        stars={4}
                    />
                    <Planet
                        onclick={() => {
                            setPlanet('Uranus')
                            setTimeout(() => {
                                handleNumberPage()
                            }, 150)
                        }}
                        name={'Uranus'}
                        image={uranus}
                        stars={4}
                    />
                    <Planet
                        onclick={() => {
                            setPlanet('Neptune')
                            setTimeout(() => {
                                handleNumberPage()
                            }, 150)
                        }}
                        name={'Neptune'}
                        image={neptune}
                        stars={4}
                    />
                    <Planet
                        onclick={() => {
                            setPlanet('Pluto')
                            setTimeout(() => {
                                handleNumberPage()
                            }, 150)
                        }}
                        name={'Pluto'}
                        image={pluto}
                        stars={4}
                    />
                </motion.div>
            </div>



            {/** SECCOND PAGE! */}
            {/** SECCOND PAGE! */}
            {/** SECCOND PAGE! */}

            <div
                style={{
                    height: '100%',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: 0,
                    paddingTop: 80,
                    visibility: page == 2 ? 'visible' : 'hidden'
                }}
            >

                <motion.div
                    animate={firstStepAnimation}
                    initial={{
                        y: 0,
                        x: 0,
                        opacity: 0,
                    }}
                >
                    <StepProgress
                        last={false}
                        handleFirstPage={() => {
                            handleFirstPage()
                        }}
                    />
                </motion.div>

                {/** TITLE */}

                <motion.text
                    animate={whenTitleAnimation}
                    initial={{
                        y: 10,
                        opacity: 0
                    }}
                    style={{
                        marginTop: 32,
                        fontSize: 36,
                        width: '100%',
                        textAlign: 'center',
                        fontFamily: 'Orbitron',
                        fontWeight: 600
                    }}
                >
                    It's {planet} time
                </motion.text>


                {/** Subtitle */}
                <motion.text
                    animate={whenSubtitleAnimation}
                    initial={{
                        y: 0,
                        opacity: 0
                    }}
                    style={{
                        marginTop: 16,
                        fontSize: 20,
                        width: '100%',
                        textAlign: 'center',
                        fontWeight: 300
                    }}
                >
                    When are you going?
                </motion.text>

                {/** DATE PICKER! */}
                <motion.div
                    animate={datesAnimation}
                    initial={{
                        y: 0,
                        opacity: 0
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 80,
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 64,
                            width: 190,
                            fontSize: 18,
                            fontWeight: 500,
                            cursor: 'pointer'
                        }}
                    >Jan 11, 2053
                        <div
                            style={{
                                height: 2,
                                width: '100%',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                background: `linear-gradient(90deg, #275AD2, #2EB0AA)`
                            }}
                        />
                    </div>
                    <img
                        src={fromsvg}
                        style={{
                            height: 24,
                            width: 24,
                            margin: '0px 16px'
                        }}
                    />
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 64,
                            width: 190,
                            fontSize: 18,
                            fontWeight: 500,
                            cursor: 'pointer'

                        }}
                    >Jan 23, 2053
                        <div
                            style={{
                                height: 2,
                                width: '100%',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                background: `linear-gradient(90deg, #2EB0AA, #34F58A)`
                            }}
                        />
                    </div>
                </motion.div>


                {/** NEXT BUTTON */}
                <motion.div
                    animate={datesAnimation}
                    initial={{
                        y: 0,
                        opacity: 0
                    }}
                >

                    <NextButton
                        onClick={handlePageThree}
                    >
                        Next
                        {/**
                        <img 
                            src={arrowleft}
                            style={{
                                height: 20,
                                width: 20,
                                marginLeft: 4
                            }}
                        />
                            */}
                    </NextButton>
                </motion.div>


            </div>


            {/** THIRD PAGE */}
            <div
                style={{
                    height: '100%',
                    width: '100vw',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: 0,
                    paddingTop: 80,
                    visibility: page == 3 ? 'visible' : 'hidden'
                }}
            >

                <motion.div
                    animate={seccondStepAnimation}
                    initial={{
                        y: 0,
                        x: 0,
                        opacity: 0,
                    }}
                >
                    <StepProgress
                        last
                        handleFirstPage={() => {
                            handleFirstPage()
                        }}
                    />
                </motion.div>

                {/** TITLE */}

                <motion.text
                    animate={lastTextAnimation}
                    initial={{
                        y: 10,
                        opacity: 0
                    }}
                    style={{
                        marginTop: 32,
                        fontSize: 36,
                        width: '100%',
                        textAlign: 'center',
                        fontFamily: 'Orbitron',
                        fontWeight: 600
                    }}
                >
                    Almost there!
                </motion.text>


                {/** Subtitle */}
                <motion.text
                    animate={lastSubtitleAnimation}
                    initial={{
                        y: 0,
                        opacity: 0
                    }}
                    style={{
                        marginTop: 16,
                        fontSize: 20,
                        width: '100%',
                        textAlign: 'center',
                        fontWeight: 300
                    }}
                >
                    Accept <text
                        style={{
                            textDecoration: 'underline'
                        }}
                    >our terms</text>! Nothing to worry about
                </motion.text>


                {/** NEXT BUTTON */}
                <motion.div
                    animate={confirmTermsAnimation}
                    initial={{
                        y: 0,
                        opacity: 0
                    }}
                >

                    <NextButton
                        onClick={handlePageThree}
                    >
                        Accept
                    </NextButton>
                </motion.div>
            </div>


            {/** BOTTOM BACKGROUND */}
            <img
                style={{
                    position: 'absolute',
                    height: '50%',
                    width: '100%',
                    bottom: 0,
                    objectFit: 'cover',
                    zIndex: -2
                }}
                src={wavebg}
            />

            {/** Rocket */}

            <img
                src={rocketbg}
                style={{
                    height: 590,
                    width: 640,
                    position: 'absolute',
                    zIndex: -1,
                    bottom: 100,
                    right: 100,
                    opacity: .5
                }}
            />
        </div>
    );
}

export default Form;