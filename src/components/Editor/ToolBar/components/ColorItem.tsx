import React from "react";
import InputColor from "react-input-color";

const ColorItem: React.FC<{
  name: string;
  value: string;
  onChange: (val: string) => void;
}> = ({ name, value, onChange }) => {
  return (
    <div className="flex flex-row items-center justify-between cursor-pointer py-1">
      <p className="select-none">{name}</p>
      <InputColor
        initialValue={value}
        onChange={(val) => {
          onChange(val.hex);
        }}
        placement="right"
      />
    </div>
  );
};

export default ColorItem;
