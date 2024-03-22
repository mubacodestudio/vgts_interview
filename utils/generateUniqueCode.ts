export const generateUniqueCode = (): string => {
  const generatedCodes: Set<string> = new Set();

  const getRandomCode = (): string => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };

  let code: string;
  do {
    code = getRandomCode();
  } while (generatedCodes.has(code));

  generatedCodes.add(code);

  return code;
};
