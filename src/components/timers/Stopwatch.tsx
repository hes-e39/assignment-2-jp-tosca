import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";
import { onPauseStandard, 
         onStartForwardStandard,
         onStopStandard } from "../generic/TimerFunctionsUtil.tsx";
import { TimerButton, 
         TimerDisplay,
         ControlsDiv } from "../generic/TimerComps.tsx";
type StopwatchProps = {
    refreshRate?: number;
};

const Stopwatch = ({refreshRate = 1000}: StopwatchProps) => {

    const [time, setTime] = useState<number>(0);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    return (
        <div>
            <TimerDisplay value={milisecondsToTime(time)} />
            <ControlsDiv>
                <TimerButton onClickParam={() => onStartForwardStandard(status, intervalRef, refreshRate, setTime)} timerButtonLabel="▶️" />
                <TimerButton onClickParam={() => onPauseStandard(status, intervalRef)} timerButtonLabel="⏸️" />
                <TimerButton onClickParam={() => onStopStandard(status, intervalRef, setTime)} timerButtonLabel="⏹️" />                   
            </ControlsDiv>
        </div>
    );
};

export default Stopwatch;
