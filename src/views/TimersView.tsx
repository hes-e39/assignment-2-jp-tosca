import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  border: 1px solid gray;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  width: 95%;
`;

const TimerTitle = styled.div`
  font-weight: bold;
  text-align: right;
  padding-right: 15px;
  color: white;
  border-radius: 10px 10px 0px 0px;
  background-color: #314155;
`;

const TimersView = () => {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY /> },
    { title: "Tabata", C: <Tabata /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer key={`timer-${timer.title}`}>
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
};

export default TimersView;
