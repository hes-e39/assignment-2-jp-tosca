import { useRef } from 'react';
import { Timer, TimerTitle } from '../../utils/Styled.tsx';
import { milisecondsToTime } from '../../utils/helpers';
import { RemoveButton, TimerDisplay } from '../generic/TimerComps.tsx';

type TabataProps = {
    duration?: number;
    restDuration?: number;
    rounds?: number;
    refreshRate?: number;
    id: string;
};

const Tabata = ({ duration = 3000, restDuration = 2000, rounds = 2, refreshRate = 1000, id }: TabataProps) => {
    const status = useRef('stop');
    const displayTimer = useRef(0);
    const intervalRef = useRef<number | undefined>(undefined);

    return (
        <Timer>
            <TimerTitle>
                <RemoveButton removeId={id} />
                Tabata
            </TimerTitle>
            <TimerDisplay value={rounds % 2 === 0 ? 'Work' : 'Rest'} label={'Period'} />
            <TimerDisplay value={`${Math.ceil(rounds / 2).toString()}/${rounds}`} label={'Rounds'} />
            <TimerDisplay value={milisecondsToTime(duration)} />
        </Timer>
    );
};

export default Tabata;
