import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import bestPractices from 'eslint-config-airbnb-base/rules/best-practices';
import errors from 'eslint-config-airbnb-base/rules/errors';
import es6 from 'eslint-config-airbnb-base/rules/es6';
import node from 'eslint-config-airbnb-base/rules/node';
import strict from 'eslint-config-airbnb-base/rules/strict';
import style from 'eslint-config-airbnb-base/rules/style';
import variables from 'eslint-config-airbnb-base/rules/variables';

const bestPracticesRules = bestPractices.rules;
const errorsRules = errors.rules;
const es6Rules = es6.rules;
const nodeRules = node.rules;
const strictRules = strict.rules;
const styleRules = style.rules;
const variablesRules = variables.rules;

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      ...bestPracticesRules,
      ...errorsRules,
      ...es6Rules,
      ...nodeRules,
      ...strictRules,
      ...styleRules,
      ...variablesRules,
      "comma-dangle": ["error", "never"]
    }
  }
];
