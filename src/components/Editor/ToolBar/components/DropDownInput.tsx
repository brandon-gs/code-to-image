import React from "react";

const DropDownInput: React.FC<{
  name: string;
  value: { name: string; id: string };
  options: { name: string; id: string }[];
  onChange: (val: { name: string; id: string }) => void;
}> = ({ name, value, options, onChange }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      <p className="flex-1 z-50">{name}</p>
      <div className="flex-1">
        <select
          id={name}
          onChange={(value) => {
            onChange(
              options.filter((option) => option.id === value.target.value)[0]
            );
          }}
          value={value.id}
          className="flex flex-row items-center cursor-pointer border py-1 px-2 w-full outline-none justify-between rounded-md hover:bg-gray-100 active:bg-gray-200"
        >
          {options.map((option) => {
            return (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default DropDownInput;
