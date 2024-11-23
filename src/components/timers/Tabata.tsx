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
    // Determine if the current period is a work or rest period.
    const periodValue = t?.rounds !== undefined && t.rounds % 2 === 0 ? 'Work' : 'Rest';
    // Calculate the number of rounds completed and the total number of rounds. for this timer rounds are multiplied by 2.
    const roundsValue = t?.rounds !== undefined ? `${Math.ceil(t.rounds / 2).toString()}/${(t.initialRounds ?? 0) / 2}` : '0/0';

    return (
        <Timer>
            <TimerTitle>
                <RemoveButton removeId={id} />
                Tabata
            </TimerTitle>
            <TimeDisplay value={periodValue} label={'Period'} />
            <TimeDisplay value={roundsValue} label={'Rounds'} />
            <TimeDisplay value={milisecondsToTime(t?.duration || 0)} />
        </Timer>
    );
};

export default Tabata;
