import { useRef, useState } from 'react';
import { milisecondsToTime } from '../../utils/helpers';
import { TimerDisplay } from '../generic/TimerComps.tsx';

type TabataProps = {
    initWorkTime?: number;
    initRestTime?: number;
    initRounds?: number;
    refreshRate?: number;
};

const Tabata = ({ initWorkTime = 3000, initRestTime = 2000, initRounds = 2, refreshRate = 1000 }: TabataProps) => {
    const [rounds, setRounds] = useState(initRounds * 2);
    const [time, setTime] = useState(initWorkTime);
    const status = useRef('stop');
    const displayTimer = useRef(0);
    const intervalRef = useRef<number | undefined>(undefined);

    return (
        <div>
            <TimerDisplay value={rounds % 2 === 0 ? 'Work' : 'Rest'} label={'Period'} />
            <TimerDisplay value={Math.ceil(rounds / 2).toString()} label={'Rounds'} />
            <TimerDisplay value={milisecondsToTime(time)} />
            {/* <ControlsDiv>
                <TimerButton
                    onClickParam={() => onStartIntervalsWorkRest(status, intervalRef, refreshRate, initRestTime, initWorkTime, initRounds, displayTimer, setTime, setRounds)}
                    timerButtonLabel="⏯️"
                />
                <TimerButton onClickParam={() => onStopDoubleIntervals(status, intervalRef, initWorkTime, initRounds, setTime, setRounds)} timerButtonLabel="⏹️" />
            </ControlsDiv> */}
        </div>
    );
};

export default Tabata;
