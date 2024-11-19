import { useEffect, useRef, useState } from 'react';
import { onStopCountdown } from '../generic/TimerFunctionsUtil.tsx';

export default function useCountdown(countdownDuratrion: number) {
    const [time, setTime] = useState<number>(countdownDuratrion);
    const status = useRef('stop');
    const intervalRef = useRef<number | undefined>(undefined);

    useEffect(() => {
        if (time < 0) {
            onStopCountdown(status, intervalRef, setTime, countdownDuratrion);
        }

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [time, countdownDuratrion]);

    return { time, setTime, status, intervalRef };
}
