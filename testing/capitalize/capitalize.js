const capitalize = (str) => {
  let string = String(str);
  return string[0].toUpperCase() + string.slice(1);
};

export default capitalize;
