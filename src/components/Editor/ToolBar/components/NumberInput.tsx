import React from "react";

const Field: React.FC<{
  value: number;
  onChange: (val: number) => void;
  disabled: boolean;
  min?: number;
  max?: number;
}> = ({ value, onChange, disabled, min, max }) => {
  return (
    <div className="flex-1 flex flex-row items-center">
      <button
        className="h-full px-3 hover:bg-gray-100 active:bg-gray-200 py-1 border-t border rounded-l-md"
        onClick={() => {
          let val = value - 1;
          if (max && val > max) val = max;
          if (min && val < min) val = min;
          onChange(val);
        }}
        aria-label="minus Button"
      >
        -
      </button>
      <input
        disabled={disabled}
        className={`w-full p-1 border-t border-b outline-none focus:z-10 focus:ring-2 ring-primary-500 focus:border-transparent`}
        type="text"
        value={value}
        onChange={(e) => {
          let val = parseInt(e.target.value);
          if (typeof val !== "number") return;
          if (!val || isNaN(val)) val = 0;
          if (max && val > max) val = max;
          if (min && val < min) val = min;
          onChange(val);
        }}
      />
      <button
        className="h-full px-3 hover:bg-gray-100 active:bg-gray-200 py-1 border border-r rounded-r-md"
        onClick={() => {
          let val = value + 1;
          if (max && val > max) val = max;
          if (min && val < min) val = min;
          onChange(val);
        }}
        aria-label="plus Button"
      >
        +
      </button>
    </div>
  );
};

const NumberInput: React.FC<{
  name: string;
  value: number;

  min?: number;
  max?: number;
  onChange: (val: number) => void;
}> = ({ name, value, onChange, min, max }) => {
  return (
    <div className="flex flex-row items-center justify-between cursor-pointer py-1">
      <p className="select-none flex-1">{name}</p>
      <Field
        disabled={false}
        value={value}
        min={min}
        max={max}
        onChange={(val) => {
          onChange(val);
        }}
      />
    </div>
  );
};

export default NumberInput;
