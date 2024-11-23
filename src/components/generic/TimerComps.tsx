import { useContext } from 'react';
import { RemoveButtonStyle, TimeInput } from '../../utils/Styled';
import { type Timer, TimersContext } from '../context/TimersContextProvider';
import Countdown from '../timers/Countdown';
import Stopwatch from '../timers/Stopwatch';
import Tabata from '../timers/Tabata';
import XY from '../timers/XY';

/*
 *
 */
type TimeDisplayProps = {
    value: string;
    label?: string;
};

export const TimeDisplay = ({ value, label }: TimeDisplayProps) => {
    return (
        <h1 className="text-4xl font-bold text-center p-4">
            {label !== undefined ? `${label}: ` : ''}
            {value}
        </h1>
    );
};

/*
 * Props for the TimerButton component.
 */
type TimerButtonProps = {
    onClickParam: () => void;
    timerButtonLabel: string;
};

/*
 * Button to controll the workout.
 */
export const TimerButton = ({ onClickParam, timerButtonLabel }: TimerButtonProps) => {
    return <button onClick={onClickParam}> {timerButtonLabel} </button>;
};

/*
 * Component for the controllers of the workout.
 */
export const ControlsDiv = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex justify-center space-x-4 text-6xl p-5">{children}</div>;
};

/**
 * Props for the TimerTypeSelect component.
 */
type selectTimerProps = {
    timerTypes: {
        title: string;
    }[];
    selected: number;
    setSelected: (value: number) => void;
};

/*
 * Component to handle the selection of the time of timer to add.
 */
export const TimerTypeSelect = ({ timerTypes, selected, setSelected }: selectTimerProps) => {
    return (
        <div>
            <label htmlFor="timerType" className="px-4">
                Timer Type
            </label>
            <select
                id="timerType"
                className="bg-gray-900 text-white rounded-md px-3 py-3 text-sm font-medium"
                value={selected}
                onChange={event => {
                    setSelected(Number.parseInt(event.target.value));
                }}
            >
                {timerTypes.map((timer, index) => (
                    <option key={timer.title} value={index}>
                        {timer.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

/**
 * Props for the TimerInput component.
 */
type TimerInputProps = {
    setDuration: (value: number) => void;
    label: string;
};

/**
 * Component for the input of the time of the countdown or Stopwatch timers.
 */
export const TimerInput = ({ setDuration, label }: TimerInputProps) => {
    return (
        <div>
            <label htmlFor="timeInput">{label}</label>
            <TimeInput
                id="timeInput"
                type="number"
                max={84400000}
                min={1000}
                placeholder={label}
                defaultValue={3000}
                onChange={event => {
                    setDuration(Number.parseInt(event.target.value));
                }}
            />
        </div>
    );
};

/*
 * Props for the XYTimerInput component.
 */
type XYTimerInputProps = {
    setDuration: (value: number) => void;
    setRounds: (value: number) => void;
    labelDuration?: string;
    labelRounds?: string;
};

/*
 * Component for the input of the time and rounds of the XY timer.
 */
export const XYTimerInput = ({ setDuration, setRounds, labelDuration = 'Round Duration (MS)', labelRounds = 'Rounds' }: XYTimerInputProps) => {
    return (
        <div>
            <div>
                <label htmlFor="timeInput">{labelDuration}</label>
                <TimeInput
                    id="timeInput"
                    type="number"
                    max={84400000}
                    min={1000}
                    defaultValue={3000}
                    placeholder={labelDuration}
                    onChange={event => {
                        setDuration(Number.parseInt(event.target.value));
                    }}
                />
            </div>
            <div>
                <label htmlFor="roundsInput">{labelRounds}</label>
                <TimeInput
                    id="roundsInput"
                    type="number"
                    max={100}
                    min={1}
                    defaultValue={3}
                    placeholder={labelRounds}
                    onChange={event => {
                        setRounds(Number.parseInt(event.target.value));
                    }}
                />
            </div>
        </div>
    );
};

/*
 * Props for the TabataTimerInput component.
 */
type TabataTimerInputProps = {
    setDuration: (value: number) => void;
    setRestDuration: (value: number) => void;
    setRounds: (value: number) => void;
    labelDuration?: string;
    labelRestDuration?: string;
    labelRounds?: string;
};

/*
 * Component for the input of the time, rest time and rounds of the Tabata timer.
 */
export const TabataTimerInput = ({
    setDuration,
    setRounds,
    setRestDuration,
    labelDuration = 'Active Duration',
    labelRestDuration = 'Rest Duration',
    labelRounds = 'Rounds',
}: TabataTimerInputProps) => {
    return (
        <div>
            <label htmlFor="timeInput">{labelDuration}</label>
            <TimeInput
                id="timeInput"
                type="number"
                max={84400000}
                min={1000}
                defaultValue={3000}
                placeholder={labelDuration}
                onChange={event => {
                    setDuration(Number.parseInt(event.target.value));
                }}
            />
            <br />
            <label htmlFor="restInput">{labelRestDuration}</label>
            <TimeInput
                id="restInput"
                type="number"
                max={84400000}
                min={1000}
                defaultValue={2000}
                placeholder={labelRestDuration}
                onChange={event => {
                    setRestDuration(Number.parseInt(event.target.value));
                }}
            />
            <br />
            <label htmlFor="roundsInput">{labelRounds}</label>
            <TimeInput
                id="roundsInput"
                type="number"
                max={100}
                min={1}
                defaultValue={3}
                placeholder={labelRounds}
                onChange={event => {
                    setRounds(Number.parseInt(event.target.value));
                }}
            />
        </div>
    );
};

/*
 * Component for the removal of a timer.
 */
export const RemoveButton = ({ removeId }: { removeId: string }) => {
    const timersContext = useContext(TimersContext);
    return <RemoveButtonStyle onClick={() => timersContext.deleteTimer(removeId)}>❌</RemoveButtonStyle>;
};

/*
 * Component to display all the timers of the workout.
 */
export const TimersDisplay = ({ timers }: { timers: Timer[] }) => {
    return (
        <>
            {timers.map(timer => (
                <div key={timer.id}>
                    {timer.type === 'Countdown' ? (
                        <Countdown id={timer.id} />
                    ) : timer.type === 'Stopwatch' ? (
                        <Stopwatch id={timer.id} />
                    ) : timer.type === 'XY' ? (
                        <XY id={timer.id} />
                    ) : timer.type === 'Tabata' ? (
                        <Tabata id={timer.id} />
                    ) : null}
                </div>
            ))}
        </>
    );
};
