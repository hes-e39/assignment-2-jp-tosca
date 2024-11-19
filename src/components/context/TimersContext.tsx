import { createContext } from 'react';
import type { TimerComponent } from '../generic/TimerComps';

type TimerContextType = {
    timers: TimerComponent[];

    setTimers: React.Dispatch<React.SetStateAction<TimerComponent[]>>;
};

export const TimersContext = createContext<TimerContextType>({ timers: [], setTimers: () => {} });
