/**
 * Check Data exists in array
 *
 * @export
 * @param {*} dataArray
 * @param {*} data
 * @returns
 */
export function checkDataExists(dataArray, data) {
  let result = dataArray.filter(dataInfo => {
    return dataInfo.id === data.id;
  });

  return !(result.length === 0);
}
