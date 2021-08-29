import { toJpeg, toPng } from "html-to-image";
import React, {
  useContext,
  createContext,
  useState,
  useRef,
  useCallback,
} from "react";
import {
  defaultEditorSettings,
  defaultProjectSettings,
  defaultViewPortSettings,
  defaultWindowSettings,
} from "./data";

const EditorContext = createContext<any>(null);

export const useEditor = () => {
  return useContext(EditorContext);
};

export const EditorProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  const [projectSettings, setProjectSettings] = useState(
    defaultProjectSettings
  );
  const [windowSettings, setWindowSettings] = useState(defaultWindowSettings);
  const [viewPortSettings, setViewPortSettings] = useState(
    defaultViewPortSettings
  );
  const [editorSettings, setEditorSettings] = useState(defaultEditorSettings);

  const canvasRef = useRef<HTMLDivElement>(null);

  const resetAllSettings = () => {
    setProjectSettings(defaultProjectSettings);
    setWindowSettings(defaultWindowSettings);
    setViewPortSettings(defaultViewPortSettings);
    setEditorSettings(defaultEditorSettings);
  };
  const exportImage = useCallback(() => {
    if (!canvasRef || canvasRef.current === null) {
      return;
    }

    const options = {
      cacheBust: true,
      quality: projectSettings.quality * 0.01,
      canvasHeight:
        canvasRef.current.clientHeight * projectSettings.scaleFactor,
      canvasWidth: canvasRef.current.clientWidth * projectSettings.scaleFactor,
    };
    const fileName =
      (projectSettings.fileName || "Untitled") +
      `${
        projectSettings.scaleFactor > 1
          ? `_${projectSettings.scaleFactor}x`
          : ""
      }`;

    if (projectSettings.fileFormat === "png") {
      toPng(canvasRef.current, {
        ...options,
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = fileName;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (projectSettings.fileFormat === "jpeg") {
      toJpeg(canvasRef.current, {
        ...options,
      })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = fileName;
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [projectSettings]);

  const value = {
    projectSettings,
    setProjectSettings,
    windowSettings,
    setWindowSettings,
    viewPortSettings,
    setViewPortSettings,
    editorSettings,
    setEditorSettings,
    canvasRef,
    exportImage,
    resetAllSettings,
  };
  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};
