import { useContext } from 'react';
import { TimersContext } from '../components/context/TimersContextProvider';
import { ControlsDiv, TimerButton, TimersDisplay } from '../components/generic/TimerComps';
import { Timers } from '../utils/Styled';

const TimersView = () => {
    const timersContext = useContext(TimersContext);

    return (
        <>
            <Timers>
                <TimersDisplay timers={timersContext.timers} />
            </Timers>
            <ControlsDiv>
                <TimerButton onClickParam={() => timersContext.startWorkout()} timerButtonLabel="⏯️" />
                <TimerButton onClickParam={() => timersContext.stopWorkout()} timerButtonLabel="⏹️" />
                <TimerButton onClickParam={() => timersContext.fastForward()} timerButtonLabel="⏩" />
            </ControlsDiv>
        </>
    );
};

export default TimersView;
