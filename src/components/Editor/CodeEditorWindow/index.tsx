import React, { useState } from "react";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useEditor } from "../EditorContext";
import "codemirror/lib/codemirror.css";

import "codemirror/theme/material.css";
import "codemirror/theme/3024-day.css";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/midnight.css";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/css/css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/sass/sass";
import "codemirror/mode/dart/dart";
import "codemirror/mode/swift/swift";
import "codemirror/mode/markdown/markdown";
import "codemirror/mode/php/php";
import "codemirror/mode/yaml/yaml";
import "codemirror/mode/jsx/jsx";
import "codemirror/mode/vue/vue";
import "codemirror/mode/livescript/livescript";
import "codemirror/mode/go/go";
import "codemirror/mode/shell/shell";

import WindowTitleBar from "./WindowTitleBar";

const CodeEditorWindow = (props: any) => {
  const [code, setCode] = useState(
    `// Write your code here
const sayHello = () => {
  console.log("Hello, World!");
}
export default sayHello;`
  );
  const { windowSettings, editorSettings } = useEditor();
  return (
    <div
      {...props}
      className={`overflow-hidden w-full h-full CodeMirror cm-s-${editorSettings.theme.id}`}
      style={{
        boxShadow: windowSettings.useDropShadow
          ? `${windowSettings.dropShadow.x}px ${windowSettings.dropShadow.y}px ${windowSettings.dropShadow.blur}px ${windowSettings.dropShadow.offset}px ${windowSettings.dropShadow.color}`
          : undefined,
        borderRadius: `${windowSettings.borderRadius.topLeft}px ${windowSettings.borderRadius.topRight}px ${windowSettings.borderRadius.bottomRight}px ${windowSettings.borderRadius.bottomLeft}px`,
        // backgroundColor: "#263238",
      }}
    >
      {windowSettings.showButtons || windowSettings.showTitle ? (
        <WindowTitleBar />
      ) : null}
      <div
        className="cursor-text"
        style={{
          padding: `${editorSettings.padding.top}px ${editorSettings.padding.right}px ${editorSettings.padding.bottom}px ${editorSettings.padding.left}px`,
          fontSize: `${editorSettings.fontSize}px`,
        }}
      >
        <ControlledEditor
          value={code}
          options={{
            mode: editorSettings.language.id,
            theme: editorSettings.theme.id,
            lineNumbers: editorSettings.showLineNumbers,
          }}
          onBeforeChange={(e, d, v) => {
            setCode(v);
          }}
          onChange={(e, d, v) => {}}
        />
      </div>
    </div>
  );
};

export default CodeEditorWindow;
