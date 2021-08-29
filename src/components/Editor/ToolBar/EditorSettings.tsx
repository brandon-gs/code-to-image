import { languages, themes } from "../data";
import { useEditor } from "../EditorContext";
import CollapsableGroup from "./CollapsableGroup";
import DropDownInput from "./components/DropDownInput";
import NumberInput from "./components/NumberInput";
import PaddingInput from "./components/PaddingInput";

const EditorSettings = () => {
  const { editorSettings, setEditorSettings } = useEditor();
  return (
    <CollapsableGroup name="Editor">
      <NumberInput
        name="Font Size"
        value={editorSettings.fontSize}
        min={6}
        max={32}
        onChange={(fontSize) => {
          setEditorSettings({
            ...editorSettings,
            fontSize,
          });
        }}
      />
      <PaddingInput
        name="Padding"
        padding={editorSettings.padding}
        onChange={(val) => {
          setEditorSettings({
            ...editorSettings,
            padding: val,
          });
        }}
      />
      <DropDownInput
        name="Language"
        value={editorSettings.language}
        options={languages}
        onChange={(val) => {
          setEditorSettings({
            ...editorSettings,
            language: val,
          });
        }}
      />
      <DropDownInput
        name="Theme"
        value={editorSettings.theme}
        options={themes}
        onChange={(val) => {
          setEditorSettings({
            ...editorSettings,
            theme: val,
          });
        }}
      />
    </CollapsableGroup>
  );
};

export default EditorSettings;
