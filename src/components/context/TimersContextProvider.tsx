import { createContext, useState } from 'react';

export type Timer = {
    id: string;
    title: string;
    status: string;
    type: string;
    duration: number;
    rounds?: number;
    restDuration?: number;
};

export type TimersContextType = {
    timers: Timer[];
    running: Timer | Partial<Timer> | null;
    setRunning: (timer: Timer | Partial<Timer> | null) => void;
    createTimer: (timer: {
        title: string;
        status?: string;
        type: string;
        duration: number;
        rounds?: number;
        restDuration?: number;
    }) => Timer;
    deleteTimer: (id: string) => void;
};

export const TimersContext = createContext<TimersContextType>({
    timers: [],
    running: null,
    createTimer: () => ({
        id: '',
        title: '',
        status: '',
        type: '',
        duration: 0,
    }),
    setRunning: () => {},
    deleteTimer: () => {},
});

const TimersContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [timers, setTimers] = useState<Timer[]>([]);
    const [running, setRunning] = useState<Timer | Partial<Timer> | null>(null);

    return (
        <TimersContext.Provider
            value={{
                timers,
                running,
                setRunning,
                createTimer: ({ title, type, duration, rounds, restDuration }) => {
                    const newTimer = {
                        id: `${Date.now()}`,
                        title,
                        status: 'stopped',
                        type,
                        duration,
                        rounds,
                        restDuration,
                    };
                    setTimers([...timers, newTimer]);
                    return newTimer;
                },
                deleteTimer: id => setTimers(timers.filter(t => t.id !== id)),
            }}
        >
            {children}
        </TimersContext.Provider>
    );
};

export default TimersContextProvider;
