import { useContext } from 'react';
import { Timer, TimerTitle } from '../../utils/Styled.tsx';
import { milisecondsToTime } from '../../utils/helpers';
import { TimersContext } from '../context/TimersContextProvider.tsx';
import { RemoveButton, TimeDisplay } from '../generic/TimerComps.tsx';

type TabataProps = {
    id: string;
};

const Tabata = ({ id }: TabataProps) => {
    const timersContext = useContext(TimersContext);
    const t = timersContext.timers.find(timer => timer.id === id);

    return (
        <Timer>
            <TimerTitle>
                <RemoveButton removeId={id} />
                Tabata
            </TimerTitle>
            <TimeDisplay value={t?.rounds !== undefined && t.rounds % 2 === 0 ? 'Work' : 'Rest'} label={'Period'} />
            <TimeDisplay value={t?.rounds !== undefined ? `${Math.ceil(t.rounds / 2).toString()}/${(t.initialRounds ?? 0) / 2}` : '0/0'} label={'Rounds'} />
            <TimeDisplay value={milisecondsToTime(t?.duration || 0)} />
        </Timer>
    );
};

export default Tabata;
