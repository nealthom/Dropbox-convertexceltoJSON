export default (array) => {
  const keys = array[0];
  const converted = [];
  console.log(keys);

  for (let i = 1; i < array.length; i++) {
    let newObj = {};
    for (let j = 0; j < keys.length; j++) {
      newObj[keys[j]] = array[i][j];
    }
    converted.push(newObj);
  }

  return converted;
};
