import Editor from "@monaco-editor/react";

export default function CodeEditor({ code, onChange }) {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue={code}
      onChange={onChange}
      theme="vs-dark"
    />
  );
}
