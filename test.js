export const getData = async () => {
  let data = {},
    errors = {};
  try {
    const resp = await fetch("https://dummyjson.com/products");

    const result = await resp.json();
    data = result;
  } catch (error) {
    errors = { ...error };
  }

  return {
    data,
    errors,
  };
};
