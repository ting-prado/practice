const analyzeArray = (arr) => {
  const filterArray = () => {
    const newArr = arr.filter((cur) => {
      return !isNaN(cur);
    });
    return newArr;
  };

  const filteredArr = filterArray();

  const getAverage = () => {
    const sum = filteredArr.reduce((prev, cur) => {
      return prev + Number(cur);
    }, 0);
    return Number((sum / filteredArr.length).toFixed(1));
  };

  const getMin = () => Math.min(...filteredArr);
  const getMax = () => Math.max(...filteredArr);

  return {
    average: getAverage(),
    min: getMin(),
    max: getMax(),
    length: arr.length,
  };
};

export default analyzeArray;
