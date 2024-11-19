import { useState } from 'react';
import { AddViewDiv } from '../utils/Styled';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TimersContext } from '../components/context/TimersContextProvider';
import { TabataTimerInput, TimerInput, TimerTypeSelect, XYTimerInput } from '../components/generic/TimerComps';

const AddView = () => {
    const [duration, setDuration] = useState(0);
    const [rounds, setRounds] = useState(0);
    const [restDuration, setRestDuration] = useState(0);

    const timerTypes = [
        { title: 'Stopwatch', C: <TimerInput setDuration={setDuration} label="Time limit (MS)" /> },
        { title: 'Countdown', C: <TimerInput setDuration={setDuration} label="Duration (MS)" /> },
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
                    timersContext.createTimer({
                        status: 'stopped',
                        title: 'TITLE',
                        type: timerTypes[selected].title,
                        duration: duration,
                        rounds: rounds,
                        restDuration: restDuration,
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
