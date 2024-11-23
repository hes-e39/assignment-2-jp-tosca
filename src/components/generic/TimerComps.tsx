import { useContext } from 'react';
import { RemoveButtonStyle } from '../../utils/Styled';
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
        <h1 className="text-2xl font text-center p-1">
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
    // mx-auto px-6 py-3 flex items-center
    return <div className="bg-gray-800 absolute bottom-0 right-0 left-0 flex justify-center space-x-4 text-6xl p-5 ">{children}</div>;
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
        <div className="w-64">
            <label htmlFor="timerType" className="px-4 font-bold">
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

export const TimerInputsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-wrap w-full">
            <div className="w-full">{children}</div>
        </div>
    );
};

export type TimerInputComponentProps = {
    label: string;
    id: string;
    defaultValue: number;
    min: number;
    max: number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TimerInputComponent = ({ label, id, defaultValue, min, max, onChange }: TimerInputComponentProps) => {
    return (
        <>
            <div className="flex items-center ">
                <label className="text-white font-bold mb-1 md:mb-0 whitespace-nowrap mr-2" htmlFor={id}>
                    {label}
                </label>
            </div>
            <div className="flex items-center col-span-3 w-64">
                <input
                    className="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-800"
                    id={id}
                    type="number"
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    onChange={onChange}
                />
            </div>
        </>
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
        <TimerInputsContainer>
            <TimerInputComponent
                label={label}
                id="timeInput"
                min={1000}
                max={84400000}
                defaultValue={3000}
                onChange={event => {
                    setDuration(Number.parseInt(event.target.value));
                }}
            />
        </TimerInputsContainer>
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
        <TimerInputsContainer>
            <TimerInputComponent
                label={labelDuration}
                id="timeInput"
                min={1000}
                max={84400000}
                defaultValue={3000}
                onChange={event => {
                    setDuration(Number.parseInt(event.target.value));
                }}
            />
            <TimerInputComponent
                label={labelRounds}
                id="roundsInput"
                min={1}
                max={100}
                defaultValue={3}
                onChange={event => {
                    setRounds(Number.parseInt(event.target.value));
                }}
            />
        </TimerInputsContainer>
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
        <TimerInputsContainer>
            <TimerInputComponent
                label={labelDuration}
                id="timeInput"
                min={1000}
                max={84400000}
                defaultValue={3000}
                onChange={event => {
                    setDuration(Number.parseInt(event.target.value));
                }}
            />
            <TimerInputComponent
                label={labelRestDuration}
                id="restInput"
                min={1000}
                max={84400000}
                defaultValue={2000}
                onChange={event => {
                    setRestDuration(Number.parseInt(event.target.value));
                }}
            />
            <TimerInputComponent
                label={labelRounds}
                id="roundsInput"
                min={1}
                max={100}
                defaultValue={3}
                onChange={event => {
                    setRounds(Number.parseInt(event.target.value));
                }}
            />
        </TimerInputsContainer>
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
