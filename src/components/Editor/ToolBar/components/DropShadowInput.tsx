import React from "react";
import InputColor from "react-input-color";
import { iDropShadow } from "../../data";
import SwitchItem from "./SwitchItem";

const Field: React.FC<{
  name: string;
  value: number;
  onChange: (val: number) => void;
  disabled: boolean;
}> = ({ name, value, onChange, disabled }) => {
  return (
    <div className="flex-1 flex flex-col items-start">
      <p className="text-xs mb-1 select-none">{name}</p>
      <input
        disabled={disabled}
        className={`w-full p-1 border-r outline-none focus:z-10 focus:ring-2 ring-primary-500 focus:border-transparent border-t border-b ${
          name === "x" && "border-l rounded-l-md"
        }`}
        type="text"
        value={value}
        onChange={(e) => {
          let val = parseInt(e.target.value);
          if (typeof val !== "number") return;
          if (!val || isNaN(val)) val = 0;
          onChange(val);
        }}
      />
    </div>
  );
};

const DropShadowInput: React.FC<{
  name: string;
  dropShadow: iDropShadow;
  useDropShadow: boolean;
  onChange: (dropshadow: iDropShadow, useDropShadow: boolean) => void;
}> = ({ name, dropShadow, onChange, useDropShadow }) => {
  return (
    <div>
      <div className="w-full">
        <SwitchItem
          name="Drop Shadow"
          value={useDropShadow}
          onChange={(val) => {
            onChange(dropShadow, !useDropShadow);
          }}
        />
      </div>
      <div className={`flex-row mt-2  ${useDropShadow ? "flex" : "hidden"}`}>
        <Field
          disabled={false}
          name="x"
          value={dropShadow.x}
          onChange={(val) => {
            onChange(
              {
                ...dropShadow,
                x: val,
              },
              useDropShadow
            );
          }}
        />
        <Field
          disabled={false}
          name="y"
          value={dropShadow.y}
          onChange={(val) => {
            onChange(
              {
                ...dropShadow,
                y: val,
              },
              useDropShadow
            );
          }}
        />
        <Field
          disabled={false}
          name="Blur"
          value={dropShadow.blur}
          onChange={(val) => {
            onChange(
              {
                ...dropShadow,
                blur: val,
              },
              useDropShadow
            );
          }}
        />
        <div className="flex-1 flex flex-col items-start">
          <p className="text-xs mb-1 select-none">Color</p>
          <div className="flex h-full w-full items-center justify-center border border-l-0 rounded-r-md">
            <InputColor
              initialValue={dropShadow.color}
              onChange={(val) => {
                onChange(
                  {
                    ...dropShadow,
                    color: val.hex,
                  },
                  useDropShadow
                );
              }}
              placement="right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropShadowInput;
