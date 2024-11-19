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
                            <Countdown id={timer.id} countdownDuration={timer.duration} />
                        ) : timer.type === 'Stopwatch' ? (
                            <Stopwatch id={timer.id} timeLimit={timer.duration} />
                        ) : timer.type === 'XY' ? (
                            <XY id={timer.id} rounds={timer.rounds} roundDuration={timer.duration} />
                        ) : timer.type === 'Tabata' ? (
                            <Tabata id={timer.id} rounds={timer.rounds} duration={timer.duration} restDuration={timer.restDuration} />
                        ) : null}
                    </div>
                ))}
            </Timers>
            <ControlsDiv>
                <TimerButton
                    onClickParam={() => {
                        timersContext.timers.map(timer => {
                            //console.log(timer);
                        });
                    }}
                    timerButtonLabel="⏯️"
                />
                <TimerButton onClickParam={() => {}} timerButtonLabel="⏹️" />
                <TimerButton onClickParam={() => {}} timerButtonLabel="⏩" />
            </ControlsDiv>
        </>
    );
};

export default TimersView;
