import ITemplate from "core/ITemplate";

export default <ITemplate>[
  "[?jsxRuntime|import React,?] { FC[?isMemo|,memo?] } from 'react';",
  "",
  "const {{name}}: FC[?hasProps|<{{name}}Props>?] = () => {",
  "  return <div></div>;",
  "};",
  "",
  "export default [?isMemo|memo({{name}})|{{name}}?];",
  "",
];
