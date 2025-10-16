import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules:{
      "react/react-in-jsx-scope": "off",
      "react/jsx-key": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-console": "warn",
      "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      "arrow-parens": ["error", "always"],
      "prefer-const": ["error", {
        destructuring: "all"
      }],
    }
  },
  
];

export default eslintConfig;
