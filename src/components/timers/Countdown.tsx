import { useContext } from 'react';
import { Timer, TimerTitle } from '../../utils/Styled.tsx';
import { milisecondsToTime } from '../../utils/helpers';
import { TimersContext } from '../context/TimersContextProvider.tsx';
import { RemoveButton, TimerDisplay } from '../generic/TimerComps.tsx';

type CountdownProps = {
    id: string;
};

const Countdown = ({ id }: CountdownProps) => {
    const timersContext = useContext(TimersContext);
    const t = timersContext.timers.find(timer => timer.id === id);
    return (
        <Timer>
            <TimerTitle>
                <RemoveButton removeId={id} />
                Countdown
            </TimerTitle>
            <TimerDisplay value={milisecondsToTime(t?.duration || 0)} />
        </Timer>
    );
};

export default Countdown;
