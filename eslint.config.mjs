import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

const files = ["**/*.{js,mjs,cjs,jsx}"];

export default [
  { files },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files,
    settings: {
      react: {
        version: 'detect',
      }
    }
  }
];
