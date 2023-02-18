import ITemplate from "core/ITemplate";

export default <ITemplate>[
  "import React, { FC{?withMemo|, memo?} } from 'react';",
  "",
  "const {{name}}: FC{?withProps|<{{name}}Props>?} = () => {",
  "  return <div></div>;",
  "};",
  "",
  "export default {?withMemo|memo({{name}})|{{name}}?};",
  "",
];
