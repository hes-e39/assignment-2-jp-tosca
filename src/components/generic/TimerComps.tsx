import { useState } from 'react';

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
};

export const TimerTypeSelect = ({ timerTypes }: selectTimerProps) => {
    const [selected, setSelected] = useState(0);
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
