import { useContext } from 'react';
import { TimersContext } from '../components/context/TimersContextProvider';
import { ControlsDiv, TimerButton, TimersDisplay } from '../components/generic/TimerComps';

const TimersView = () => {
    const timersContext = useContext(TimersContext);

    return (
        <div className="bg-slate-500 fixed bottom-0 left-0 right-0 top-16">
            <div className="grid grid-cols-4 gap-4">
                <TimersDisplay timers={timersContext.timers} />
            </div>
            <ControlsDiv>
                <TimerButton onClickParam={() => timersContext.startWorkout()} timerButtonLabel="⏯️" />
                <TimerButton onClickParam={() => timersContext.stopWorkout()} timerButtonLabel="⏹️" />
                <TimerButton onClickParam={() => timersContext.fastForward()} timerButtonLabel="⏩" />
            </ControlsDiv>
        </div>
    );
};

export default TimersView;
