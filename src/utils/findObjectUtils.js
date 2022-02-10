export const findObjectWithIdFromList = (id, targetList) => {
  for (let obj of targetList) {
    if (id === obj.id) {
      return obj;
    }
  }
  return null;
};

export const findObjectWithTextFromList = (text, targetList) => {
  for (let obj of targetList) {
    const objText = obj.text || obj.name;
    if (text === objText) {
      return obj;
    }
  }
  return null;
};

export const findObjectListWithIdFromList = (idList, targetList) =>
  targetList.filter(({ id }) => idList.includes(id));
