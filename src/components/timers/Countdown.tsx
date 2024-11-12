import { useEffect, useRef, useState } from 'react';
import { milisecondsToTime } from '../../utils/helpers';
import { TimerDisplay } from '../generic/TimerComps.tsx';
import { onStopCountdown } from '../generic/TimerFunctionsUtil.tsx';

type CountdownProps = {
    initTime?: number;
    refreshRate?: number;
};

const Countdown = ({ initTime = 5000, refreshRate = 1000 }: CountdownProps) => {
    const [time, setTime] = useState<number>(initTime);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (time < 0) {
            onStopCountdown(status, intervalRef, setTime, initTime);
        }
    }, [time, initTime]);

    return (
        <div>
            <TimerDisplay value={milisecondsToTime(time)} />
            {/* <ControlsDiv>
                <TimerButton onClickParam={() => onStartBackwardStandard(status, intervalRef, refreshRate, setTime)} timerButtonLabel="⏯️" />
                <TimerButton onClickParam={() => onStopCountdown(status, intervalRef, setTime, initTime)} timerButtonLabel="⏹️" />
            </ControlsDiv> */}
        </div>
    );
};

export default Countdown;
