import { useEditor } from "../EditorContext";

const WindowTitleBar = () => {
  const { windowSettings, setWindowSettings } = useEditor();
  return (
    <div className="flex flex-row justify-between items-center px-3 h-10 space-x-2">
      {windowSettings.showButtons && (
        <div
          className={`flex flex-row space-x-2 ${
            windowSettings.buttonStyle === "mac" ? "visible" : "invisible"
          }`}
        >
          <div className="w-3 h-3 rounded-full bg-red-500 circle1"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 circle2"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 circle3"></div>
        </div>
      )}
      {windowSettings.showTitle && (
        <input
          type="text"
          value={windowSettings.windowName}
          onChange={(e) => {
            setWindowSettings({
              ...windowSettings,
              windowName: e.target.value,
            });
          }}
          className={`bg-transparent w-full outline-none border-none text-center text-sm`}
        />
      )}
      {windowSettings.showButtons && (
        <div
          className={`flex flex-row space-x-5 items-center ${
            windowSettings.buttonStyle === "windows" ? "visible" : "invisible"
          }`}
        >
          <div className="w-3 h-3 flex items-center justify-center opacity-70">
            <div
              className="w-full bg-white"
              style={{
                height: "1px",
              }}
            ></div>
          </div>
          <div className="w-2.5 h-2.5 border border-white opacity-70"></div>
          <div className="w-3 h-3 relative flex items-center justify-center">
            <div
              className="w-full bg-white absolute"
              style={{
                height: "1px",
                transform: "rotateZ(45deg)",
              }}
            ></div>
            <div
              className="w-full bg-white absolute"
              style={{
                height: "1px",
                transform: "rotateZ(-45deg)",
              }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WindowTitleBar;
