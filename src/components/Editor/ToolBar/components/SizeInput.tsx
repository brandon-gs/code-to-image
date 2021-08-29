import { PencilIcon } from "@heroicons/react/solid";
import React from "react";
import { iSize } from "../../data";
import { useEditor } from "../../EditorContext";

const Field: React.FC<{
  name: string;
  value: number | "auto";
  onChange: (val: number) => void;
  disabled: boolean;
}> = ({ name, value, onChange, disabled }) => {
  return (
    <div className="flex-1 flex flex-col items-start">
      <p className="text-xs mb-1 select-none">{name}</p>
      <input
        disabled={disabled}
        className={`w-full p-1 border-l border-t border-b outline-none ${
          name === "Height" && "border-r rounded-r-md"
        } ${
          name === "Width" && "rounded-l-md"
        } focus:z-10 focus:ring-2 ring-primary-500 focus:border-transparent`}
        type="text"
        value={value === 0 ? "" : value}
        placeholder={value === 0 ? "auto" : ""}
        onChange={(e) => {
          let val: number = parseInt(e.target.value);
          if (typeof val !== "number") return;
          if (!val || isNaN(val)) val = 0;
          onChange(val);
        }}
      />
    </div>
  );
};

const SizeInput: React.FC<{
  name: string;
  customSize: boolean;

  size: iSize;
  onChange: (size: iSize, customSize: boolean) => void;
}> = ({ name, size, onChange, customSize }) => {
  const { canvasRef } = useEditor();
  return (
    <div>
      <div className="mb-2 flex flex-row items-center justify-between">
        <p className="select-none">{name}</p>
        <button
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            customSize
              ? "bg-primary-100 text-primary-500 hover:bg-primary-200 active:bg-purple-300"
              : "bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-400"
          }`}
          onClick={() => {
            onChange(
              {
                width: canvasRef.current.clientWidth,
                height: canvasRef.current.clientHeight,
              },
              !customSize
            );
          }}
          aria-label="Edit Button"
        >
          <PencilIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-row">
        <Field
          disabled={!customSize}
          name="Width"
          value={!customSize ? 0 : size.width}
          onChange={(val) => {
            onChange(
              {
                ...size,
                width: val,
              },
              customSize
            );
          }}
        />
        <Field
          disabled={!customSize}
          name="Height"
          value={!customSize ? 0 : size.height}
          onChange={(val) => {
            onChange(
              {
                ...size,
                height: val,
              },
              customSize
            );
          }}
        />
      </div>
    </div>
  );
};

export default SizeInput;
