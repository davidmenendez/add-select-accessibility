export const getNormalizedData = (data, parentId) => {
  let normalizedData = {};
  for (let i = 0; i < data.length; i++) {
    const entry = data[i];
    normalizedData[entry.guid] = { ...entry };
    if (parentId) normalizedData[entry.guid].parentId = parentId;
    if (entry.children) {
      const childEntries = getNormalizedData(entry.children, entry.guid);
      normalizedData = {
        ...normalizedData,
        ...childEntries,
      };
    }
  }
  return normalizedData;
};
