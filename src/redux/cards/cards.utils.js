export const getCheapest = (cardItems) => {
  const cheapest = [...cardItems].sort((a, b) => a.price - b.price).shift();
  return cheapest;
};
