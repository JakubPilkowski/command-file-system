export default abstract class Transformer {
  options: any;
  abstract transformTemplate(
    template: string,
    variables: Record<string, any>
  ): string;
}
