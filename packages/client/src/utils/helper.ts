export const arrayToggle = <T>(arr: T[], value: T) => {
  if (arr.includes(value)) {
    return arr.filter((v) => v !== value);
  }
  return [...arr, value];
};
