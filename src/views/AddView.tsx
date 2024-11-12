import { useState } from 'react';
import styled from 'styled-components';
import { TimerTypeSelect } from '../components/generic/TimerComps';
import Countdown from '../components/timers/Countdown';
import Stopwatch from '../components/timers/Stopwatch';
import Tabata from '../components/timers/Tabata';
import XY from '../components/timers/XY';
const AddViewDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TimerWrapper = styled.div`
  border: 1px solid gray;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  width: 15%;
`;

const TimerTitle = styled.div`
  font-weight: bold;
  text-align: right;
  padding-right: 15px;
  color: white;
  border-radius: 10px 10px 0px 0px;
  background-color: #314155;
`;

const AddView = () => {
    const timerTypes = [
        { title: 'Stopwatch', C: <Stopwatch /> },
        { title: 'Countdown', C: <Countdown initTime={2000} /> },
        { title: 'XY', C: <XY /> },
        { title: 'Tabata', C: <Tabata /> },
    ];

    const [selected, setSelected] = useState(0);

    return (
        <AddViewDiv>
            <h1>Timer type: </h1>
            <select
                className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                value={selected}
                onChange={event => {
                    setSelected(Number.parseInt(event.target.value));
                }}
            >
                {timerTypes.map((timer, index) => (
                    <option key={`timer-${timer.title}`} value={index}>
                        {timer.title}
                    </option>
                ))}
            </select>
            <TimerTypeSelect timerTypes={timerTypes} />
            <TimerWrapper>
                <TimerTitle>{timerTypes[selected].title}</TimerTitle>
                {timerTypes[selected].C}
            </TimerWrapper>
            <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"> ➕ Add</button>
        </AddViewDiv>
    );
};

export default AddView;
