import React from "react";

const Switch: React.FC<{
  value: boolean;
  onChange: (value: boolean) => void;
}> = ({ value, onChange }) => {
  return (
    <div
      onClick={() => {
        onChange(!value);
      }}
      className={`${
        value ? "bg-primary-600" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span
        className={`${
          value ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </div>
  );
};

export default Switch;
