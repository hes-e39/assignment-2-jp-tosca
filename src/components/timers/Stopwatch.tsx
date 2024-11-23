import { useContext } from 'react';
import { Timer, TimerTitle } from '../../utils/Styled.tsx';
import { milisecondsToTime } from '../../utils/helpers';
import { TimersContext } from '../context/TimersContextProvider.tsx';
import { RemoveButton, StatusDisplay, TimeDisplay } from '../generic/TimerComps.tsx';

type StopwatchProps = {
    id: string;
};

const Stopwatch = ({ id }: StopwatchProps) => {
    const timersContext = useContext(TimersContext);
    const t = timersContext.timers.find(timer => timer.id === id);

    return (
        <StatusDisplay status={t?.status}>
            <Timer>
                <TimerTitle>
                    <RemoveButton removeId={id} />
                    Stopwatch
                </TimerTitle>
                <TimeDisplay value={milisecondsToTime(t?.duration || 0)} />
            </Timer>
        </StatusDisplay>
    );
};

export default Stopwatch;
