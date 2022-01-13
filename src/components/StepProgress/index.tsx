import React from 'react';
import COLORS from '../../colors';

// import { Container } from './styles';

import firststep from '../../assets/firststep.svg'
import seccondstep from '../../assets/seccondstep.svg'

interface StepInterface {
    last?: boolean;
    handleFirstPage: any;
}

const StepProgress: React.FC<StepInterface> = ({ last, handleFirstPage }) => {

    return (
        <div
            style={{
                width: 464,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative'
            }}
        >
            <div
                style={{
                    fontWeight: 600,
                    color: '#2972C7',
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                    border: `solid 2px #2972C7`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: COLORS.Background,
                    cursor: 'pointer'
                }}
                onClick={handleFirstPage}
            >
                1
            </div>

            <div
                style={{
                    fontWeight: 600,
                    color: last ? '#2EB0AA' : COLORS.Background,
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                    border: `solid 2px #2EB0AA`,
                    backgroundColor: last ? '#100121' : '#2EB0AA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }}
            >
                2
            </div>

            <div
                style={{
                    fontWeight: 600,
                    color: last ? COLORS.Background : '#878090',
                    height: 40,
                    width: 40,
                    borderRadius: 100,
                    border: `solid 2px ${last ? '#2AB374' : '#878090' }`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: last ? '#2AB374' : COLORS.Background,
                    cursor: 'pointer'

                }}
            >
                3
            </div>

            <img
                src={last ? seccondstep : firststep}
                style={{
                    position: 'absolute',
                    zIndex: -1
                }}
            />

        </div>
    );
}

export default StepProgress;