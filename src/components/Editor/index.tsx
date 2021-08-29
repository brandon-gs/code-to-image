import TopBar from "./TopBar";
import ViewPort from "./ViewPort";
import ToolBar from "./ToolBar";
import "./style.scss";
import { EditorProvider } from "./EditorContext";
import { useState } from "react";

const Editor = () => {
  const [showToolBar, setShowToolBar] = useState(false);
  return (
    <EditorProvider>
      <div className={`w-screen h-screen relative flex flex-col bg-gray-100`}>
        <TopBar showToolBar={showToolBar} setShowToolBar={setShowToolBar} />
        <div className="flex-1 w-full flex flex-row h-full overflow-hidden relative">
          <ToolBar showToolBar={showToolBar} />
          <ViewPort />
        </div>
      </div>
    </EditorProvider>
  );
};

export default Editor;
