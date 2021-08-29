import { useEditor } from "../EditorContext";
import CanvasSettings from "./CanvasSettings";
import EditorSettings from "./EditorSettings";
import ExportSettings from "./ExportSettings";
import WindowSettings from "./WindowSettings";

const ToolBar: React.FC<{ showToolBar: boolean }> = ({ showToolBar }) => {
  const { resetAllSettings } = useEditor();
  return (
    <div
      className={`w-full md:w-80 h-full bg-white md:sticky flex z-50 absolute flex-col top-0 overflow-y-auto transition-all ease-in-out duration-300 ${
        showToolBar ? "left-0" : "-left-full"
      }`}
    >
      <CanvasSettings />
      <WindowSettings />
      <EditorSettings />
      <ExportSettings />
      <div className="p-4">
        <button
          onClick={resetAllSettings}
          className="w-full flex items-center justify-center p-2 rounded-md text-red-500 border border-red-500 bg-red-50 hover:bg-red-100 active:bg-red-200"
        >
          Reset All Settings
        </button>
      </div>
      <div className="w-full px-4 py-4 mt-auto border-t">
        <div className="flex flex-row items-center justify-evenly py-2 mb-4">
          <a
            href="https://github.com/brandon-gs/Code-To-Image/issues"
            target="_blank"
            rel="noreferrer"
          >
            Report Bugs 🐞
          </a>
          <a
            href="https://github.com/brandon-gs/Code-To-Image"
            target="_blank"
            rel="noreferrer"
          >
            Give a Star ⭐️
          </a>
        </div>
        <div className="flex flex-row items-center w-full space-x-2 px-4 py-2 rounded-md border">
          <img
            width="32px"
            height="32px"
            src="/img/avatar.png"
            alt="Brandon Garcia Avatar"
            className="w-8 h-8 rounded-full"
          />
          <p>BrandonGS</p>
          <div className="w-full pl-4 flex flex-row items-center justify-end space-x-4">
            <a
              href="https://github.com/brandon-gs"
              target="_blank"
              rel="noreferrer"
            >
              <img
                width="24px"
                height="24px"
                src="/svg/github.svg"
                alt="Github logo"
                className="w-6 h-6 object-contain"
              />
            </a>
          </div>
        </div>
        <div className="felx flex-col justify-center w-full text-center mt-4">
          <p className="text-gray-600">Made With ⬇</p>
          <div className="flex flex-row items-center justify-center space-x-4 mt-4">
            <img
              width="24px"
              height="24px"
              src="/img/react.png"
              alt="react logo"
              className="w-6 h-6 object-contain"
            />
            <img
              width="24px"
              height="24px"
              src="/img/typescript.png"
              alt="typescript logo"
              className="w-6 h-6 object-contain"
            />
            <img
              width="24px"
              height="24px"
              src="/svg/tailwindcss.svg"
              alt="tailwindcss logo"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
        <p className="text-center mt-4 text-gray-400 font-light text-sm">
          Version 1.0.1
        </p>
      </div>
    </div>
  );
};

export default ToolBar;
