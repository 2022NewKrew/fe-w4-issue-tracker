export const CSSIF = (
  conditon: boolean,
  trueValue: string,
  falseValue = ""
) => {
  return conditon ? trueValue : falseValue;
};
