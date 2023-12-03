export const InputPrimitive = {
  string: "string",
  number: "number",
  boolean: "boolean",
} as const;

export type InputKey = keyof typeof InputPrimitive;

export type InputType = string | number | boolean;

export type PositionalType = {
  type: "positional";
  argType: InputKey;
  description?: string;
};

export type OptionType = {
  type: "option";
  argType: InputKey;
  default: InputType;
  choices?: InputType[];
  description?: string;
};

export type Input = {
  name: string;
  params: PositionalType | OptionType;
};
