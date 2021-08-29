import { ChevronUpIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

const CollapsableGroup: React.FC<{
  children?: JSX.Element[] | JSX.Element;
  name: string;
}> = ({ children, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="w-full flex flex-row items-center justify-between px-4 py-2 bg-white text-gray-800 border-b border-gray-200"
        aria-label="Collapse Button"
      >
        <p className="select-none">{name}</p>
        <ChevronUpIcon
          className={`${isOpen ? "transform rotate-180" : ""} w-5 h-5`}
        />
      </button>
      {isOpen && (
        <div className="p-4 text-sm font-light flex flex-col space-y-4 border-b border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default CollapsableGroup;
