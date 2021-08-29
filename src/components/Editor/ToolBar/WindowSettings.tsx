import React from "react";
import { useEditor } from "../EditorContext";
import CollapsableGroup from "./CollapsableGroup";
import BorderRadiusInput from "./components/BorderRadiusInput";
import DropShadowInput from "./components/DropShadowInput";
import SwitchItem from "./components/SwitchItem";

const WindowSettings = () => {
  const { windowSettings, setWindowSettings } = useEditor();
  return (
    <CollapsableGroup name="Window">
      <div className="flex flex-row items-center justify-between">
        <p className="select-none">Button Style</p>
        <div className="flex flex-row border rounded-md">
          <button
            className={`px-2 py-1  border-r ${
              windowSettings.buttonStyle === "mac"
                ? "bg-primary-100 text-primary-600"
                : "hover:bg-gray-100 active:bg-gray-200 text-gray-600"
            }`}
            onClick={() => {
              setWindowSettings({
                ...windowSettings,
                buttonStyle: "mac",
              });
            }}
            aria-label="mac OS Button"
          >
            mac OS
          </button>
          <button
            onClick={() => {
              setWindowSettings({
                ...windowSettings,
                buttonStyle: "windows",
              });
            }}
            className={`px-2 py-1 ${
              windowSettings.buttonStyle === "windows"
                ? "bg-primary-100 text-primary-600"
                : "hover:bg-gray-100 active:bg-gray-200 text-gray-600"
            }`}
            aria-label="Windows Button"
          >
            Windwos
          </button>
        </div>
      </div>
      <SwitchItem
        name="Show Title"
        value={windowSettings.showTitle}
        onChange={(val) => {
          setWindowSettings({
            ...windowSettings,
            showTitle: val,
          });
        }}
      />
      <BorderRadiusInput
        name="Border Radius"
        borderRadius={windowSettings.borderRadius}
        onChange={(val) => {
          setWindowSettings({
            ...windowSettings,
            borderRadius: val,
          });
        }}
      />
      <DropShadowInput
        name="Drop Shadow"
        dropShadow={windowSettings.dropShadow}
        useDropShadow={windowSettings.useDropShadow}
        onChange={(ds, useDropShadow) => {
          setWindowSettings({
            ...windowSettings,
            dropShadow: ds,
            useDropShadow: useDropShadow,
          });
        }}
      />
    </CollapsableGroup>
  );
};

export default WindowSettings;
