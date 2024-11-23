import { useState } from 'react';
import { AddViewDiv } from '../utils/Styled';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TimersContext } from '../components/context/TimersContextProvider';
import { TabataTimerInput, TimerInput, TimerTypeSelect, XYTimerInput } from '../components/generic/TimerComps';
import { calculateRestDurationVal, calculateRoundsVal } from '../utils/helpers';

const AddView = () => {
    //Values used by the inputs
    const [duration, setDuration] = useState(3000);
    const [rounds, setRounds] = useState(0);
    const [restDuration, setRestDuration] = useState(0);
    //Value used for the selector
    const [selected, setSelected] = useState(0);
    //Context
    const timersContext = useContext(TimersContext);

    //Timer types inputs and mapping to the values.
    const timerTypes = [
        { title: 'Countdown', C: <TimerInput setDuration={setDuration} label="Duration (MS)" /> },
        { title: 'Stopwatch', C: <TimerInput setDuration={setDuration} label="Time limit (MS)" /> },
        { title: 'XY', C: <XYTimerInput setDuration={setDuration} setRounds={setRounds} /> },
        { title: 'Tabata', C: <TabataTimerInput setDuration={setDuration} setRounds={setRounds} setRestDuration={setRestDuration} /> },
    ];

    return (
        <AddViewDiv>
            <br />
            <TimerTypeSelect timerTypes={timerTypes} selected={selected} setSelected={setSelected} />
            <br />
            <div>{timerTypes[selected].C}</div>
            <br />
            <Link
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                onClick={() => {
                    //These values are calculated diferently depending on the timer type
                    const durationVal = timerTypes[selected].title === 'Stopwatch' ? 0 : duration;
                    const roundsVal = calculateRoundsVal(rounds, timerTypes[selected].title);
                    const restDurationVal = calculateRestDurationVal(restDuration, timerTypes[selected].title);

                    timersContext.createTimer({
                        status: 'stopped',
                        type: timerTypes[selected].title,
                        duration: durationVal,
                        initialDuration: duration,
                        rounds: roundsVal,
                        initialRounds: roundsVal,
                        restDuration: restDurationVal,
                        initialRestDuration: restDurationVal,
                    });
                }}
                to="/"
            >
                ➕ Add
            </Link>
        </AddViewDiv>
    );
};

export default AddView;
