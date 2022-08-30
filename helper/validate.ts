export const checkEmptyOBJ = (obj: object): boolean => {
  const isEmpty = !Object.values(obj).every((x) => !!x);
  return isEmpty;
};
