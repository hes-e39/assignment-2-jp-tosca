import { useContext } from 'react';
import { Timer, TimerTitle } from '../../utils/Styled.tsx';
import { milisecondsToTime } from '../../utils/helpers';
import { TimersContext } from '../context/TimersContextProvider.tsx';
import { RemoveButton, TimerDisplay } from '../generic/TimerComps.tsx';

type StopwatchProps = {
    id: string;
};

const Stopwatch = ({ id }: StopwatchProps) => {
    const timersContext = useContext(TimersContext);
    const t = timersContext.timers.find(timer => timer.id === id);

    return (
        <Timer>
            <TimerTitle>
                <RemoveButton removeId={id} />
                Stopwatch
            </TimerTitle>
            <TimerDisplay value={milisecondsToTime(t?.duration || 0)} />
        </Timer>
    );
};

export default Stopwatch;
