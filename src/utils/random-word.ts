export const randomWord = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};