export interface IVariables {
  $name: string;
  $templateName: string;
  [key: string]: unknown;
}

export default abstract class Variable {
  options: any;
  abstract createVariable(args: IVariables): Record<string, any>;
}
