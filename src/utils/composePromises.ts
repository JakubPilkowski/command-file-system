export const composePromises = <T>(...ms: ((x: T) => Promise<T>)[]) => {
  return ms.reduceRight((f, g) => {
    return (x) => {
      return g(x).then(f);
    };
  });
};
