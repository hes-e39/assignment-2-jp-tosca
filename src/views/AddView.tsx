import { useState } from 'react';
import { AddViewDiv } from '../utils/Styled';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TimersContext } from '../components/context/TimersContextProvider';
import { TabataTimerInput, TimerInput, TimerTypeSelect, XYTimerInput } from '../components/generic/TimerComps';

const AddView = () => {
    const [duration, setDuration] = useState(3000);
    const [rounds, setRounds] = useState(0);
    const [restDuration, setRestDuration] = useState(0);

    const timerTypes = [
        { title: 'Countdown', C: <TimerInput setDuration={setDuration} label="Duration (MS)" /> },
        { title: 'Stopwatch', C: <TimerInput setDuration={setDuration} label="Time limit (MS)" /> },
        { title: 'XY', C: <XYTimerInput setDuration={setDuration} setRounds={setRounds} /> },
        { title: 'Tabata', C: <TabataTimerInput setDuration={setDuration} setRounds={setRounds} setRestDuration={setRestDuration} /> },
    ];

    const [selected, setSelected] = useState(0);
    const timersContext = useContext(TimersContext);

    return (
        <AddViewDiv>
            <h1>Timer type: </h1>
            <TimerTypeSelect timerTypes={timerTypes} selected={selected} setSelected={setSelected} />
            <div>{timerTypes[selected].C}</div>

            <Link
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                onClick={() => {
                    const roundsVal = rounds === 0 ? undefined : timerTypes[selected].title === 'Tabata' ? rounds * 2 : rounds;

                    const durationVal = timerTypes[selected].title === 'Stopwatch' ? 0 : duration;

                    const restDurationVal = restDuration === 0 ? undefined : restDuration;

                    timersContext.createTimer({
                        status: 'stopped',
                        title: 'TITLE',
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
