import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  return (
    <div className="h-full flex flex-col bg-[#0e0e0f] border border-[#1f1f22] rounded-xl shadow-lg">

      {/* TOP TOOLBAR */}
      <div className="px-4 py-3 bg-[#141416] border-b border-[#232326] shadow-lg flex items-center justify-between rounded-t-xl">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="h-7 w-7 object-cover rounded"
          />

          {/* FIXED - NO TRANSPARENCY */}
          <select
            value={selectedLanguage}
            onChange={onLanguageChange}
            className="
              select select-sm 
              bg-[#1c1c1f] 
              text-white 
              border border-[#2c2c30]
              hover:border-primary 
              transition-all 
              rounded-md
              shadow-md
              focus:outline-none
              focus:ring-2 
              focus:ring-primary/40
            "
          >
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key} className="bg-[#1c1c1f] text-white">
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* RUN BUTTON */}
        <button
          className="
            btn btn-primary btn-sm gap-2 
            shadow-md 
            hover:shadow-primary/30 
            hover:scale-[1.04] 
            active:scale-[0.96]
            transition-all
            rounded-lg
          "
          disabled={isRunning}
          onClick={onRunCode}
        >
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run Code
            </>
          )}
        </button>
      </div>

      {/* MONACO EDITOR */}
      <div className="flex-1">
        <Editor
          height="100%"
          language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
          value={code}
          onChange={onCodeChange}
          theme="vs-dark"
          options={{
            fontSize: 16,
            fontFamily: "JetBrains Mono, monospace",
            lineNumbers: "on",
            minimap: { enabled: false },
            automaticLayout: true,
            scrollBeyondLastLine: false,
            smoothScrolling: true,
            cursorBlinking: "smooth",
            roundedSelection: true,
            padding: { top: 10 },
          }}
        />
      </div>
    </div>
  );
}

export default CodeEditorPanel;
