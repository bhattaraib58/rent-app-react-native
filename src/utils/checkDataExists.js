/**
 * Check Data exists in array.
 *
 * @param {*} dataArray
 * @param {*} data
 * @returns
 */
export function checkDataExists(dataArray, data) {
  const result = dataArray.filter(dataInfo => {
    return dataInfo.id === data.id;
  });

  return !(result.length === 0);
}
