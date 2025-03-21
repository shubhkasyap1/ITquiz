import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import Split from "react-split";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../../utils/constants";
import Output from "./Output";
import Questions from "./CodingQuestions";

const EditorMain = () => {
  const editorRef = useRef();
  const [value, setValue] = useState(CODE_SNIPPETS["c"]); // Initialize with C snippet
  const [language, setLanguage] = useState("c");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    setValue(CODE_SNIPPETS[selectedLanguage] || ""); // Set default code snippet
  };

  return (
    <Split
      className="flex h-[75vh] w-full overflow-hidden"
      sizes={[50, 50]} // Adjust initial split size (Left 35%, Right 65%)
      minSize={200} // Minimum size of each section
      gutterSize={6} // Size of the resizable separator
    >
      {/* Left Side - Questions */}
      <div className="h-full border rounded-lg border-gray-700 p-2 overflow-auto">
        <Questions />
      </div>

      {/* Right Side - Editor & Output (Split) */}
      <Split
        className="flex flex-col h-full overflow-hidden"
        direction="vertical"
        sizes={[50, 50]} // Editor 65%, Output 35%
        minSize={100}
        gutterSize={6}
      >
        {/* Upper Half - Code Editor */}
        <div className="flex flex-col h-full border-b border-gray-700">
          <div className="p-2 border-b border-gray-700 flex justify-between items-center bg-gray-800">
            <span className="text-white text-sm">Language:</span>
            <LanguageSelector language={language} onSelect={onSelect} />
          </div>
          <div className="flex-grow overflow-hidden">
            <Editor
              options={{ minimap: { enabled: false } }}
              height="100%"
              theme="vs-dark"
              language={language}
              value={value}
              onMount={onMount}
              onChange={(newValue) => setValue(newValue)}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Lower Half - Output */}
        <div className="h-full border-t border-gray-700 p-2 bg-gray-900 overflow-auto">
          <Output editorRef={editorRef} language={language} code={value} />
        </div>
      </Split>
    </Split>
  );
};

export default EditorMain;
