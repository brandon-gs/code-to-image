import { useEditor } from "../EditorContext";
import CollapsableGroup from "./CollapsableGroup";
import ColorItem from "./components/ColorItem";
import PaddingInput from "./components/PaddingInput";
import SizeInput from "./components/SizeInput";

const CanvasSettings = () => {
  const { viewPortSettings, setViewPortSettings } = useEditor();
  return (
    <CollapsableGroup name="Canvas">
      <ColorItem
        name="Background Color"
        value={viewPortSettings.backgroundColor}
        onChange={(val: string) => {
          setViewPortSettings({
            ...viewPortSettings,
            backgroundColor: val,
          });
        }}
      />
      <PaddingInput
        name="Padding"
        padding={viewPortSettings.backgroundPadding}
        onChange={(val) => {
          setViewPortSettings({
            ...viewPortSettings,
            backgroundPadding: val,
          });
        }}
      />
      <SizeInput
        name="Size"
        size={viewPortSettings.size}
        customSize={viewPortSettings.customSize}
        onChange={(size, customSize) => {
          setViewPortSettings({
            ...viewPortSettings,
            size,
            customSize,
          });
        }}
      />
    </CollapsableGroup>
  );
};

export default CanvasSettings;
