import { useContext, useRef } from 'react';
import { Timer, TimerTitle } from '../../utils/Styled.tsx';
import { milisecondsToTime } from '../../utils/helpers';
import { TimersContext } from '../context/TimersContextProvider.tsx';
import { RemoveButton, TimerDisplay } from '../generic/TimerComps.tsx';

type XYProps = {
    roundDuration?: number;
    rounds?: number;
    refreshRate?: number;
    id: string;
};

const XY = ({ roundDuration = 5000, rounds = 2, refreshRate = 1000, id }: XYProps) => {
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);
    const timersContext = useContext(TimersContext);

    return (
        <Timer>
            <TimerTitle>
                <RemoveButton removeId={id} />
                XY Timer
            </TimerTitle>
            <TimerDisplay value={rounds % 2 === 0 ? 'Work' : 'Rest'} label={'Period'} />
            <TimerDisplay value={rounds.toString()} label={'Rounds'} />
            <TimerDisplay value={milisecondsToTime(roundDuration)} />
        </Timer>
    );
};

export default XY;
