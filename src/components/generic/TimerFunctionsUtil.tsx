import type { MutableRefObject } from 'react';

/*
 * On Start functions
 */

const onStartStandard = (status: MutableRefObject<string>, intervalRef: MutableRefObject<number | undefined>, refreshRate: number, setTime: React.Dispatch<React.SetStateAction<number>>) => {
    if (status.current === 'start') {
        status.current = 'pause';
        clearInterval(intervalRef.current);
        return;
    }
    status.current = 'start';
    intervalRef.current = setInterval(
        () => {
            setTime(time => time + refreshRate);
        },
        refreshRate ? (refreshRate < 0 ? refreshRate * -1 : refreshRate) : 1000,
    );
};

export const onStartForwardStandard = (
    status: MutableRefObject<string>,
    intervalRef: MutableRefObject<number | undefined>,
    refreshRate: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
) => {
    onStartStandard(status, intervalRef, refreshRate, setTime);
};

export const onStartBackwardStandard = (
    status: MutableRefObject<string>,
    intervalRef: MutableRefObject<number | undefined>,
    refreshRate: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
) => {
    onStartStandard(status, intervalRef, refreshRate * -1, setTime);
};

export const onStartIntervalsStandard = (
    status: MutableRefObject<string>,
    intervalRef: MutableRefObject<number | undefined>,
    refreshRate: number,
    initTime: number,
    initRounds: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setRounds: React.Dispatch<React.SetStateAction<number>>,
) => {
    if (status.current === 'start') {
        status.current = 'pause';
        clearInterval(intervalRef.current);
        return;
    }

    status.current = 'start';
    intervalRef.current = setInterval(() => {
        setTime(prevTime => {
            if (prevTime <= 0) {
                setRounds(rounds => {
                    if (rounds <= 1) {
                        clearInterval(intervalRef.current);
                        status.current = 'stop';
                        return initRounds;
                    }
                    return rounds - 1;
                });
                return initTime;
            } else {
                return prevTime - refreshRate;
            }
        });
    }, refreshRate);
};

export const onStartIntervalsWorkRest = (
    status: MutableRefObject<string>,
    intervalRef: MutableRefObject<number | undefined>,
    refreshRate: number,
    initRestTime: number,
    initWorkTime: number,
    initRounds: number,
    displayTimer: MutableRefObject<number>,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setRounds: React.Dispatch<React.SetStateAction<number>>,
) => {
    if (status.current === 'start') {
        status.current = 'pause';
        clearInterval(intervalRef.current);
        return;
    }

    status.current = 'start';
    intervalRef.current = setInterval(() => {
        setTime(time => {
            if (time <= 0) {
                setRounds(rounds => {
                    if (rounds % 2 === 0) {
                        displayTimer.current = initRestTime;
                    } else {
                        displayTimer.current = initWorkTime;
                    }

                    if (rounds <= 1) {
                        clearInterval(intervalRef.current);
                        status.current = 'stop';
                        displayTimer.current = initWorkTime;
                        return initRounds * 2;
                    }
                    return rounds - 1;
                });
                return displayTimer.current;
            } else {
                return time - refreshRate;
            }
        });
    }, refreshRate);
};

/*
 * On Stop functions
 */

export const onStopStandard = (status: MutableRefObject<string>, intervalRef: MutableRefObject<number | undefined>, setTime: React.Dispatch<React.SetStateAction<number>>, time: number) => {
    status.current = 'stop';
    setTime(time);
    clearInterval(intervalRef.current);
};

export const onStopCountdown = (status: MutableRefObject<string>, intervalRef: MutableRefObject<number | undefined>, setTime: React.Dispatch<React.SetStateAction<number>>, time: number) => {
    onStopStandard(status, intervalRef, setTime, time);
};

export const onStopStopwatch = (status: MutableRefObject<string>, intervalRef: MutableRefObject<number | undefined>, setTime: React.Dispatch<React.SetStateAction<number>>) => {
    onStopStandard(status, intervalRef, setTime, 0);
};

export const onStopInterval = (
    status: MutableRefObject<string>,
    intervalRef: MutableRefObject<number | undefined>,
    initTime: number,
    initRounds: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setRounds: React.Dispatch<React.SetStateAction<number>>,
) => {
    status.current = 'stop';
    setTime(initTime);
    setRounds(initRounds);
    clearInterval(intervalRef.current);
};

export const onStopDoubleIntervals = (
    status: MutableRefObject<string>,
    intervalRef: MutableRefObject<number | undefined>,
    initTime: number,
    initRounds: number,
    setTime: React.Dispatch<React.SetStateAction<number>>,
    setRounds: React.Dispatch<React.SetStateAction<number>>,
) => {
    onStopInterval(status, intervalRef, initTime, initRounds * 2, setTime, setRounds);
};
