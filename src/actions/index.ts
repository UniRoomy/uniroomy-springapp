export const increment = (num: number) => {
  return {
    type: "increment",
    payload: {
      size: num,
    },
  };
};

export const decrement = () => {
  return {
    type: "decrement",
  };
};
