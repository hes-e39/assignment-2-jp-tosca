import { useContext } from 'react';
import { Timer, TimerTitle } from '../../utils/Styled.tsx';
import { milisecondsToTime } from '../../utils/helpers';
import { TimersContext } from '../context/TimersContextProvider.tsx';
import { RemoveButton, TimeDisplay } from '../generic/TimerComps.tsx';

type XYProps = {
    id: string;
};

const XY = ({ id }: XYProps) => {
    const timersContext = useContext(TimersContext);
    const t = timersContext.timers.find(timer => timer.id === id);

    return (
        <Timer>
            <TimerTitle>
                <RemoveButton removeId={id} />
                XY Timer
            </TimerTitle>
            <TimeDisplay value={`${t?.rounds?.toString()}/${t?.initialRounds}`} label={'Rounds'} />
            <TimeDisplay value={milisecondsToTime(t?.duration || 0)} />
        </Timer>
    );
};

export default XY;
