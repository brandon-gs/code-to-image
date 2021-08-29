export const languages: { name: string; id: string }[] = [
  {
    name: "JavaScript",
    id: "javascript",
  },
  {
    name: "Python",
    id: "python",
  },
  {
    name: "CSS",
    id: "css",
  },
  {
    name: "SASS",
    id: "sass",
  },
  {
    name: "XML",
    id: "xml",
  },
  {
    name: "Dart",
    id: "dart",
  },
  {
    name: "Swift",
    id: "swift",
  },
  {
    name: "Markdown",
    id: "markdown",
  },
  {
    name: "PHP",
    id: "php",
  },
  {
    name: "YAML",
    id: "ymal",
  },
  {
    name: "JSX",
    id: "jsx",
  },
  {
    name: "Vue",
    id: "vue",
  },
  {
    name: "LiveScript",
    id: "livescript",
  },
  {
    name: "GO",
    id: "go",
  },
  {
    name: "Shell",
    id: "shell",
  },
];

export const themes: { name: string; id: string }[] = [
  {
    name: "3024 Day",
    id: "3024-day",
  },
  {
    name: "Darcula",
    id: "darcula",
  },
  {
    name: "Dracula",
    id: "dracula",
  },
  {
    name: "Material Darker",
    id: "material-darker",
  },
  {
    name: "Material Ocean",
    id: "material-ocean",
  },
  {
    name: "Material Palenight",
    id: "material-palenight",
  },
  {
    name: "Material",
    id: "material",
  },
  {
    name: "Midnight",
    id: "midnight",
  },
];

export interface iProjectSettings {
  fileName: string;
  fileFormat: "png" | "jpeg";
  scaleFactor: 1 | 2 | 3;
  quality: number;
}
export const defaultProjectSettings: iProjectSettings = {
  fileName: "Untitled",
  fileFormat: "png",
  scaleFactor: 1,
  quality: 95,
};

export interface iWindowSettings {
  windowName: string;
  useDropShadow: boolean;
  dropShadow: iDropShadow;
  borderRadius: iBorderRadius;
  showTitle: boolean;
  showButtons: boolean;
  buttonStyle: "windows" | "mac";
}

export const defaultWindowSettings: iWindowSettings = {
  windowName: "hello.js",
  useDropShadow: true,
  borderRadius: {
    topLeft: 10,
    topRight: 10,
    bottomLeft: 10,
    bottomRight: 10,
  },
  showTitle: true,
  showButtons: true,
  buttonStyle: "mac",
  dropShadow: {
    x: 0,
    y: 4,
    offset: 0,
    blur: 12,
    color: "#00000080",
  },
};

export interface iViewPortSettings {
  backgroundColor: string;
  backgroundPadding: iPadding;
  customSize: boolean;
  size: iSize;
}

export const defaultViewPortSettings: iViewPortSettings = {
  backgroundColor: "#fff",
  backgroundPadding: {
    top: 32,
    right: 32,
    bottom: 32,
    left: 32,
  },
  customSize: false,
  size: {
    width: 0,
    height: 0,
  },
};

export interface iEditorSettings {
  padding: iPadding;
  fontSize: number;
  language: { name: string; id: string };
  showLineNumbers: boolean;
  theme: { name: string; id: string };
}

export const defaultEditorSettings: iEditorSettings = {
  padding: {
    top: 8,
    right: 8,
    bottom: 8,
    left: 8,
  },
  fontSize: 14,
  language: languages[0],
  showLineNumbers: true,
  theme: themes[6],
};

export interface iDropShadow {
  x: number;
  y: number;
  offset: number;
  blur: number;
  color: string;
}

export interface iBorderRadius {
  topLeft: number;
  topRight: number;
  bottomRight: number;
  bottomLeft: number;
}

export interface iSize {
  width: number;
  height: number;
}

export interface iPadding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
