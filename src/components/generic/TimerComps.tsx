import { type ReactElement, useContext } from 'react';
import { RemoveButtonStyle } from '../../utils/Styled';
import { TimersContext } from '../context/TimersContextProvider';

export type TimerComponent = {
    title: string;
    C: ReactElement;
    status?: string;
};

type TimerButtonProps = {
    onClickParam: () => void;
    timerButtonLabel: string;
};

export const TimerButton = ({ onClickParam, timerButtonLabel }: TimerButtonProps) => {
    return <button onClick={onClickParam}> {timerButtonLabel} </button>;
};

type TimerDisplayProps = {
    value: string;
    label?: string;
};

export const TimerDisplay = ({ value, label }: TimerDisplayProps) => {
    return (
        <h1 className="text-4xl font-bold text-center p-4">
            {label !== undefined ? `${label}: ` : ''}
            {value}
        </h1>
    );
};

export const ControlsDiv = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex justify-center space-x-4 text-6xl p-5">{children}</div>;
};

type selectTimerProps = {
    timerTypes: {
        title: string;
    }[];
    selected: number;
    setSelected: (value: number) => void;
};

export const TimerTypeSelect = ({ timerTypes, selected, setSelected }: selectTimerProps) => {
    return (
        <select
            className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
            value={selected}
            onChange={event => {
                setSelected(Number.parseInt(event.target.value));
            }}
        >
            {timerTypes.map((timer, index) => (
                <option key={`timer-${timer.title}`} value={index}>
                    {timer.title}
                </option>
            ))}
        </select>
    );
};

type TimerInputProps = {
    setDuration: (value: number) => void;
    label: string;
};

export const TimerInput = ({ setDuration, label }: TimerInputProps) => {
    return (
        <div>
            <input
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

type XYTimerInputProps = {
    setDuration: (value: number) => void;
    setRounds: (value: number) => void;
    labelDuration?: string;
    labelRounds?: string;
};

export const XYTimerInput = ({ setDuration, setRounds, labelDuration = 'Round Duration (MS)', labelRounds = 'Rounds' }: XYTimerInputProps) => {
    return (
        <div>
            <input
                type="number"
                max={84400000}
                min={1000}
                defaultValue={3000}
                placeholder={labelDuration}
                onChange={event => {
                    setDuration(Number.parseInt(event.target.value));
                }}
            />
            <input
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

type TabataTimerInputProps = {
    setDuration: (value: number) => void;
    setRestDuration: (value: number) => void;
    setRounds: (value: number) => void;
    labelDuration?: string;
    labelRestDuration?: string;
    labelRounds?: string;
};

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
            <input
                type="number"
                max={84400000}
                min={1000}
                defaultValue={3000}
                placeholder={labelDuration}
                onChange={event => {
                    setDuration(Number.parseInt(event.target.value));
                }}
            />
            <input
                type="number"
                max={84400000}
                min={1000}
                defaultValue={2000}
                placeholder={labelRestDuration}
                onChange={event => {
                    setRestDuration(Number.parseInt(event.target.value));
                }}
            />
            <input
                type="number"
                max={100}
                min={1}
                defaultValue={2}
                placeholder={labelRounds}
                onChange={event => {
                    setRounds(Number.parseInt(event.target.value));
                }}
            />
        </div>
    );
};

export const RemoveButton = ({ removeId }: { removeId: string }) => {
    const timersContext = useContext(TimersContext);
    return <RemoveButtonStyle onClick={() => timersContext.deleteTimer(removeId)}>❌</RemoveButtonStyle>;
};
