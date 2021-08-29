import React from "react";
import { useEditor } from "../EditorContext";
import CollapsableGroup from "./CollapsableGroup";
import NumberInput from "./components/NumberInput";

const ExportSettings = () => {
  const { projectSettings, setProjectSettings } = useEditor();

  return (
    <CollapsableGroup name="Export">
      <div className="flex flex-row items-center justify-between">
        <p className="select-none">File Format</p>
        <div className="flex flex-row border rounded-md">
          <button
            className={`px-2 py-1  border-r ${
              projectSettings.fileFormat === "png"
                ? "bg-primary-100 text-primary-600"
                : "hover:bg-gray-100 active:bg-gray-200 text-gray-600"
            }`}
            aria-label="png Button"
            onClick={() => {
              setProjectSettings({
                ...projectSettings,
                fileFormat: "png",
              });
            }}
          >
            PNG
          </button>
          <button
            onClick={() => {
              setProjectSettings({
                ...projectSettings,
                fileFormat: "jpeg",
              });
            }}
            aria-label="jpeg Button"
            className={`px-2 py-1 ${
              projectSettings.fileFormat === "jpeg"
                ? "bg-primary-100 text-primary-600"
                : "hover:bg-gray-100 active:bg-gray-200 text-gray-600"
            }`}
          >
            JPEG
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between">
        <p className="select-none">Scale</p>
        <div className="flex flex-row border rounded-md">
          <button
            className={`px-2 py-1  border-r ${
              projectSettings.scaleFactor === 1
                ? "bg-primary-100 text-primary-600"
                : "hover:bg-gray-100 active:bg-gray-200 text-gray-600"
            }`}
            onClick={() => {
              setProjectSettings({
                ...projectSettings,
                scaleFactor: 1,
              });
            }}
            aria-label="1x Button"
          >
            1x
          </button>
          <button
            onClick={() => {
              setProjectSettings({
                ...projectSettings,
                scaleFactor: 2,
              });
            }}
            aria-label="2x Button"
            className={`px-2 py-1 ${
              projectSettings.scaleFactor === 2
                ? "bg-primary-100 text-primary-600"
                : "hover:bg-gray-100 active:bg-gray-200 text-gray-600"
            }`}
          >
            2x
          </button>
          <button
            onClick={() => {
              setProjectSettings({
                ...projectSettings,
                scaleFactor: 3,
              });
            }}
            className={`px-2 py-1 ${
              projectSettings.scaleFactor === 3
                ? "bg-primary-100 text-primary-600"
                : "hover:bg-gray-100 active:bg-gray-200 text-gray-600"
            }`}
            aria-label="3x Button"
          >
            3x
          </button>
        </div>
      </div>
      <NumberInput
        name="Quality"
        value={projectSettings.quality}
        min={1}
        max={100}
        onChange={(quality) => {
          setProjectSettings({
            ...projectSettings,
            quality,
          });
        }}
      />
    </CollapsableGroup>
  );
};

export default ExportSettings;
