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
        ether e6:8f:70:d2:8a:b3  txqueuelen 1000  (Ethernet)
