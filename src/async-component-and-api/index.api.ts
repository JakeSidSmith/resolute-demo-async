interface ExampleRequestData {
  example: string;
}

export const getExampleRequest = async () => {
  return new Promise<ExampleRequestData>((resolve) => {
    globalThis.setTimeout(() => {
      resolve({
        example: 'Example',
      });
    }, 1000);
  });
};
