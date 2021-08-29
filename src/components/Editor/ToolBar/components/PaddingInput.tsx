import React, { useState } from "react";
import { iPadding } from "../../data";
import LinkIcon from "@heroicons/react/solid/LinkIcon";

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
        className={`w-full p-1 border-l border-t border-b outline-none ${
          name === "Left" && "border-r rounded-r-md"
        } ${
          name === "Top" && "rounded-l-md"
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

const PaddingInput: React.FC<{
  name: string;
  padding: iPadding;
  onChange: (val: iPadding) => void;
}> = ({ name, padding, onChange }) => {
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
              top: padding.top,
              left: padding.top,
              right: padding.top,
              bottom: padding.top,
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
          name="Top"
          value={padding.top}
          onChange={(val) => {
            if (linked) {
              onChange({
                top: val,
                left: val,
                right: val,
                bottom: val,
              });
            } else {
              onChange({
                ...padding,
                top: val,
              });
            }
          }}
        />
        <Field
          disabled={linked}
          name="Right"
          value={padding.right}
          onChange={(val) => {
            onChange({
              ...padding,
              right: val,
            });
          }}
        />
        <Field
          disabled={linked}
          name="Bottom"
          value={padding.bottom}
          onChange={(val) => {
            onChange({
              ...padding,
              bottom: val,
            });
          }}
        />
        <Field
          disabled={linked}
          name="Left"
          value={padding.left}
          onChange={(val) => {
            onChange({
              ...padding,
              left: val,
            });
          }}
        />
      </div>
    </div>
  );
};

export default PaddingInput;
