import { AdjustmentsIcon, DownloadIcon } from "@heroicons/react/solid";
import React from "react";
import { useEditor } from "./EditorContext";

const TopBar: React.FC<{
  showToolBar: boolean;
  setShowToolBar: (value: boolean) => void;
}> = ({ showToolBar, setShowToolBar }) => {
  const { projectSettings, setProjectSettings, exportImage } = useEditor();
  return (
    <div className="w-full h-14 bg-primary-500 text-white flex">
      <div className="hidden md:flex md:w-80 flex-row items-center justify-start md:justify-center">
        <p className="text-xl font-medium">CodeToImg</p>
      </div>
      <div className="flex flex-row items-center justify-between flex-1 px-4">
        <button
          onClick={() => {
            setShowToolBar(!showToolBar);
          }}
          className="p-2 block md:hidden outline-none border-none"
        >
          <AdjustmentsIcon className="w-6 h-6 text-white" />
        </button>
        <div className="relative h-10 bg-opacity-50 text-white w-full max-w-lg rounded-md">
          <div className="absolute left-0 top-0 outline-none border-none bg-transparent py-2 px-4 md:block hidden">
            <p className="select-none">
              <span className="opacity-0">{projectSettings.fileName}</span>
              <span className="opacity-50">.{projectSettings.fileFormat}</span>
            </p>
          </div>

          <input
            type="text"
            className="absolute top-0 left-0 py-2 px-4  outline-none border-none bg-transparent w-full z-10 text-opacity-0"
            maxLength={40}
            value={projectSettings.fileName}
            autoCorrect="false"
            onChange={(e) => {
              setProjectSettings({
                ...projectSettings,
                fileName: e.target.value,
              });
            }}
            onBlur={() => {
              if (projectSettings.fileName === "") {
                setProjectSettings({
                  ...projectSettings,
                  fileName: "Untitled",
                });
              }
            }}
          />
        </div>
        <button
          onClick={exportImage}
          className="flex flex-row items-center space-x-2 bg-primary-50 hover:bg-primary-100 active:bg-primary-200 px-3 md:px-6 py-2 text-primary-900 font-semibold rounded-md"
          aria-label="Download Button"
        >
          <DownloadIcon className="w-4 h-4 md:w-5 md:h-5" />
          <p className="sm:block hidden">Download</p>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
