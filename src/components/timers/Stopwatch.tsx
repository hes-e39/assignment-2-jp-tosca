import { useEffect, useRef, useState } from 'react';
import { Timer, TimerTitle } from '../../utils/Styled.tsx';
import { milisecondsToTime } from '../../utils/helpers';
import { RemoveButton, TimerDisplay } from '../generic/TimerComps.tsx';
import { onStopStopwatch } from '../generic/TimerFunctionsUtil.tsx';
type StopwatchProps = {
    timeLimit?: number;
    refreshRate?: number;
    id: string;
};

const Stopwatch = ({ timeLimit = 10000, refreshRate = 1000, id }: StopwatchProps) => {
    const [time, setTime] = useState<number>(0);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (time > timeLimit) {
            onStopStopwatch(status, intervalRef, setTime);
        }
    }, [time, timeLimit]);

    return (
        <Timer>
            <TimerTitle>
                <RemoveButton removeId={id} />
                Stopwatch
            </TimerTitle>
            <TimerDisplay value={milisecondsToTime(time)} />
        </Timer>
    );
};

export default Stopwatch;
