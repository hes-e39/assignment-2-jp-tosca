import { useContext } from 'react';
import { TimersContext } from '../components/context/TimersContextProvider';
import { ControlsDiv, TimerButton } from '../components/generic/TimerComps';
import Countdown from '../components/timers/Countdown';
import Stopwatch from '../components/timers/Stopwatch';
import Tabata from '../components/timers/Tabata';
import XY from '../components/timers/XY';
import { Timers } from '../utils/Styled';

const TimersView = () => {
    const timersContext = useContext(TimersContext);

    return (
        <>
            <Timers>
                {timersContext.timers.map(timer => (
                    <div key={timer.id}>
                        {timer.type === 'Countdown' ? (
                            <Countdown id={timer.id} />
                        ) : timer.type === 'Stopwatch' ? (
                            <Stopwatch id={timer.id} />
                        ) : timer.type === 'XY' ? (
                            <XY id={timer.id} />
                        ) : timer.type === 'Tabata' ? (
                            <Tabata id={timer.id} />
                        ) : null}
                    </div>
                ))}
            </Timers>
            <ControlsDiv>
                <TimerButton onClickParam={() => timersContext.startWorkout()} timerButtonLabel="⏯️" />
                <TimerButton
                    onClickParam={() => {
                        timersContext.stopWorkout();
                    }}
                    timerButtonLabel="⏹️"
                />
                <TimerButton
                    onClickParam={() => {
                        timersContext.fastForward();
                    }}
                    timerButtonLabel="⏩"
                />
            </ControlsDiv>
        </>
    );
};

export default TimersView;
