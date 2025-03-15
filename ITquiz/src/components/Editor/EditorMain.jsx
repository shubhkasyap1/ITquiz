import { useRef, useState } from "react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../../utils/constants";
import Output from "./Output";
import Questions from "./CodingQuestions";

const EditorMain = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("c");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <div className="grid grid-cols-2 h-[85vh] gap-4 p-4">
      {/* Left Side - Questions */}
      <div className="h-full">
        <Questions />
      </div>

      {/* Right Side - Editor & Output */}
      <div className="grid grid-rows-2 border border-gray-700 rounded-lg h-full">
        {/* Upper Half - Code Editor */}
        <div className="border-b border-gray-700 flex flex-col h-full">
          <div className="p-2 border-b border-gray-700 flex justify-between items-center">
            <span className="text-white text-sm">Language:</span>
            <LanguageSelector language={language} onSelect={onSelect} />
          </div>
          <Editor
            options={{
              minimap: { enabled: false },
            }}
            height="100%"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
            className="flex-grow border-none"
          />
        </div>

        {/* Lower Half - Output */}
        <Output editorRef={editorRef} language={language} />
      </div>
    </div>
  );
};

export default EditorMain;