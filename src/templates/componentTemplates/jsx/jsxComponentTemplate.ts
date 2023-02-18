import ITemplate from "core/ITemplate";

export default <ITemplate>[
  "import React {?withMemo|,{ memo }?} from 'react';",
  "",
  //   "[%scripts%]",
  "const {{name}} = () => {",
  //   "[%body%]",
  "return <div></div>;",
  //   "return <div>[%html%]</div>;",
  "};",
  "",
  "export default {?withMemo|memo({{name}})|{{name}}?};",
  "",
];
