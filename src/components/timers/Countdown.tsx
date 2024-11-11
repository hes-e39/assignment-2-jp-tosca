import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";
import { onPauseStandard, 
         onStartBackwardStandard,
         onStopStandard } from "../generic/TimerFunctionsUtil.tsx";
import { TimerButton, 
         TimerDisplay,
         ControlsDiv } from "../generic/TimerComps.tsx";

type CountdownProps = {
    initTime?: number;
    refreshRate?: number;
};

const Countdown = ({ initTime = 60000, refreshRate = 1000 }: CountdownProps) => {

    const [time, setTime] = useState<number>(initTime);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    return (
        <div>
            <TimerDisplay value={milisecondsToTime(time)} />
            <ControlsDiv>
                <TimerButton onClickParam={() => onStartBackwardStandard(status, intervalRef, refreshRate, setTime)} timerButtonLabel="▶️" />
                <TimerButton onClickParam={() => onPauseStandard(status, intervalRef)} timerButtonLabel="⏸️" />
                <TimerButton onClickParam={() => onStopStandard(status, intervalRef, setTime)} timerButtonLabel="⏹️" />                   
            </ControlsDiv>
        </div>
    );
};

export default Countdown;
