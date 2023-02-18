import ITemplate from "core/ITemplate";

export default <ITemplate>[
  "import React, { memo } from 'react';",
  "",
  "const {{name}} = () => <div></div>;",
  "",
  "export default memo({{name}});",
  "",
];
