import { Timer, TimerTitle } from '../../utils/Styled.tsx';
import { milisecondsToTime } from '../../utils/helpers';
import { RemoveButton, TimerDisplay } from '../generic/TimerComps.tsx';
import useCountdown from '../hooks/useCountdown.tsx';

type CountdownProps = {
    countdownDuration?: number;
    refreshRate?: number;
    id: string;
};

const Countdown = ({ countdownDuration = 5000, refreshRate = 1000, id }: CountdownProps) => {
    const { time, setTime, status, intervalRef } = useCountdown(countdownDuration);

    return (
        <Timer>
            <TimerTitle>
                <RemoveButton removeId={id} />
                Countdown
            </TimerTitle>
            <TimerDisplay value={milisecondsToTime(time)} />
        </Timer>
    );
};

export default Countdown;
