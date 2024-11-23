// Add helpers here. This is usually code that is just JS and not React code. Example: write a function that
// calculates number of minutes when passed in seconds. Things of this nature that you don't want to copy/paste

import type { Timer } from '../components/context/TimersContextProvider';

export function milisecondsToTime(miliseconds: number): string {
    const seconds = Math.floor((miliseconds / 1000) % 60);
    const minutes = Math.floor((miliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((miliseconds / (1000 * 60 * 60)) % 24);

    const formattedTime = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
    return formattedTime;
}

export function calculateRoundsVal(rounds: number, type: string): number | undefined {
    const defaultValue = 3;
    if (type === 'Stopwatch' || type === 'Countdown') {
        return undefined;
    } else if (type === 'Tabata') {
        return rounds === 0 ? defaultValue * 2 : rounds * 2;
    }
    return rounds === 0 ? defaultValue : rounds;
}

export function calculateRestDurationVal(restDuration: number, type: string): number | undefined {
    const defaultValue = 2000;
    if (type !== 'Tabata') {
        return undefined;
    }
    return restDuration === 0 ? defaultValue : restDuration;
}

export function stopWorkout(setTimers: React.Dispatch<React.SetStateAction<Timer[]>>, setRunning: React.Dispatch<React.SetStateAction<Timer | Partial<Timer> | null>>): void {
    setRunning(null);
    setTimers(prevTimers =>
        prevTimers.map(timer => ({
            ...timer,
            status: 'stopped',
            duration: timer.type === 'Stopwatch' ? 0 : timer.initialDuration,
            restDuration: timer.initialRestDuration,
            rounds: timer.initialRounds,
        })),
    );
    //clearInterval(intervalRef.current);
}
