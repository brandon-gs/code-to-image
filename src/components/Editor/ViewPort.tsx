import CodeEditorWindow from "./CodeEditorWindow";
import { useEditor } from "./EditorContext";

const ViewPort = () => {
  const { viewPortSettings, canvasRef } = useEditor();

  return (
    <div className="flex-1 h-full w-full flex items-start md:justify-center py-14 px-14 overflow-auto">
      <div
        ref={canvasRef}
        style={{
          backgroundColor: viewPortSettings.backgroundColor,
          padding: `${viewPortSettings.backgroundPadding.top}px ${viewPortSettings.backgroundPadding.left}px ${viewPortSettings.backgroundPadding.bottom}px ${viewPortSettings.backgroundPadding.right}px`,
          width: `${
            !viewPortSettings.customSize
              ? "auto"
              : `${viewPortSettings.size.width}px`
          }`,
          height: `${
            !viewPortSettings.customSize
              ? "auto"
              : `${viewPortSettings.size.height}px`
          }`,
        }}
      >
        <CodeEditorWindow />
      </div>
    </div>
  );
};

export default ViewPort;
