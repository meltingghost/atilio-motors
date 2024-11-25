import React from "react";

interface SliderProps {
  defaultValue: [number, number];
  max: number;
  step: number;
  onValueChange: (value: [number, number]) => void;
}

export const Slider = ({
  defaultValue,
  max,
  step,
  onValueChange,
}: SliderProps) => {
  const [min, maxValue] = defaultValue;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedValue = [...defaultValue] as [number, number];
    updatedValue[index] = parseInt(e.target.value, 10);
    onValueChange(updatedValue);
  };

  return (
    <div className="flex items-center space-x-4">
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={min}
        onChange={(e) => handleChange(e, 0)}
        className="w-full"
      />
      <input
        type="range"
        min={0}
        max={max}
        step={step}
        value={maxValue}
        onChange={(e) => handleChange(e, 1)}
        className="w-full"
      />
    </div>
  );
};
