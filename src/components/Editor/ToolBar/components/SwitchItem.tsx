import React from "react";
import Switch from "../../../inputs/Switch";

const SwitchItem: React.FC<{
  name: string;
  value: boolean;
  onChange: (val: boolean) => void;
}> = ({ name, value, onChange }) => {
  return (
    <div
      onClick={() => onChange(!value)}
      className="flex flex-row items-center justify-between cursor-pointer py-1"
    >
      <p className="select-none">{name}</p>
      <Switch value={value} onChange={() => {}} />
    </div>
  );
};

export default SwitchItem;
