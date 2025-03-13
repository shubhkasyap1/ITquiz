import { LANGUAGE_VERSIONS } from "../../utils/constants";
import { useState } from "react";

const languages = Object.entries(LANGUAGE_VERSIONS);
const ACTIVE_COLOR = "text-blue-400";

const LanguageSelector = ({ language, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-2 mb-4">
      <p className="mb-2 text-lg">Language:</p>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          {language}
        </button>
        {isOpen && (
          <ul className="absolute mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-10">
            {languages.map(([lang, version]) => (
              <li
                key={lang}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-800 ${
                  lang === language ? "bg-gray-900 text-blue-400" : "text-white"
                }`}
                onClick={() => {
                  onSelect(lang);
                  setIsOpen(false);
                }}
              >
                {lang} <span className="text-gray-600 text-sm">({version})</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;