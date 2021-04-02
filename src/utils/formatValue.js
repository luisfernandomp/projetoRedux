

const formatValue = (value) => {
  return Number(value)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&.');
}

export default formatValue;
