import { useState, useRef } from "react";
import { milisecondsToTime } from "../../utils/helpers";
import { onPauseStandard,
         onStopInterval,
         onStartIntervalsStandard } from "../generic/TimerFunctionsUtil.tsx";
import { TimerButton, 
         TimerDisplay,
         ControlsDiv } from "../generic/TimerComps.tsx";

         type XYProps = {
    initTime?: number;
    initRounds?: number;
    refreshRate?: number;
};

const XY = ({initTime = 60000, 
             initRounds = 10, 
             refreshRate = 1000}:XYProps) => {

    const [rounds, setRounds] = useState(initRounds);
    const [time, setTime] = useState(initTime);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    return (
        <div>
            <TimerDisplay value={rounds.toString()}
                          label={'Rounds'} />
            <TimerDisplay value={milisecondsToTime(time)} />
            <ControlsDiv>
                <TimerButton onClickParam={() => onStartIntervalsStandard(status, intervalRef, refreshRate, initTime, initRounds, setTime, setRounds)} timerButtonLabel="▶️" />
                <TimerButton onClickParam={() => onPauseStandard(status, intervalRef)} timerButtonLabel="⏸️" />
                <TimerButton onClickParam={() => onStopInterval(status, intervalRef, initTime, initRounds, setTime, setRounds)} timerButtonLabel="⏹️" />                                     
            </ControlsDiv>
        </div>
    );
};

export default XY;
