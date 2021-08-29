import React, { useState } from "react";
import { iBorderRadius } from "../../data";
import LinkIcon from "@heroicons/react/solid/LinkIcon";

const Field: React.FC<{
  name: string;
  value: number;
  onChange: (val: number) => void;
  disabled: boolean;
}> = ({ name, value, onChange, disabled }) => {
  return (
    <div className="flex-1 flex flex-col items-start">
      <p className="text-xs mb-1 w-full pr-1 select-none">{name}</p>
      <input
        disabled={disabled}
        className={`w-full p-1 border-l border-t border-b outline-none ${
          name === "B-L" && "border-r rounded-r-md"
        } ${
          name === "T-L" && "rounded-l-md"
        } focus:z-10 focus:ring-2 ring-primary-500 focus:border-transparent`}
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

const BorderRadiusInput: React.FC<{
  name: string;
  borderRadius: iBorderRadius;
  onChange: (val: iBorderRadius) => void;
}> = ({ name, borderRadius, onChange }) => {
  const [linked, setLinked] = useState(false);
  return (
    <div>
      <div className="mb-2 flex flex-row items-center justify-between">
        <p className="select-none">{name}</p>
        <button
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            linked
              ? "bg-primary-100 text-primary-500 hover:bg-primary-200 active:bg-purple-300"
              : "bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-400"
          }`}
          onClick={() => {
            setLinked(!linked);
            onChange({
              topLeft: borderRadius.topLeft,
              topRight: borderRadius.topRight,
              bottomLeft: borderRadius.bottomLeft,
              bottomRight: borderRadius.bottomRight,
            });
          }}
          aria-label="Link Button"
        >
          <LinkIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-row">
        <Field
          disabled={false}
          name="T-L"
          value={borderRadius.topLeft}
          onChange={(val) => {
            if (linked) {
              onChange({
                topLeft: val,
                topRight: val,
                bottomLeft: val,
                bottomRight: val,
              });
            } else {
              onChange({
                ...borderRadius,
                topLeft: val,
              });
            }
          }}
        />
        <Field
          disabled={linked}
          name="T-R"
          value={borderRadius.topRight}
          onChange={(val) => {
            onChange({
              ...borderRadius,
              topRight: val,
            });
          }}
        />
        <Field
          disabled={linked}
          name="B-R"
          value={borderRadius.bottomRight}
          onChange={(val) => {
            onChange({
              ...borderRadius,
              bottomRight: val,
            });
          }}
        />
        <Field
          disabled={linked}
          name="B-L"
          value={borderRadius.bottomLeft}
          onChange={(val) => {
            onChange({
              ...borderRadius,
              bottomLeft: val,
            });
          }}
        />
      </div>
    </div>
  );
};

export default BorderRadiusInput;
