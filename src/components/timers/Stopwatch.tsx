import { useEffect, useRef, useState } from 'react';
import { milisecondsToTime } from '../../utils/helpers';
import { TimerDisplay } from '../generic/TimerComps.tsx';
import { onStopStopwatch } from '../generic/TimerFunctionsUtil.tsx';
type StopwatchProps = {
    timeLimit?: number;
    refreshRate?: number;
};

const Stopwatch = ({ timeLimit = 10000, refreshRate = 1000 }: StopwatchProps) => {
    const [time, setTime] = useState<number>(0);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (time > timeLimit) {
            onStopStopwatch(status, intervalRef, setTime);
        }
    }, [time, timeLimit]);

    return (
        <div>
            <TimerDisplay value={milisecondsToTime(time)} />
            {/* <ControlsDiv>
                <TimerButton onClickParam={() => onStartForwardStandard(status, intervalRef, refreshRate, setTime)} timerButtonLabel="⏯️" />
                <TimerButton onClickParam={() => onStopStopwatch(status, intervalRef, setTime)} timerButtonLabel="⏹️" />
            </ControlsDiv> */}
        </div>
    );
};

export default Stopwatch;
