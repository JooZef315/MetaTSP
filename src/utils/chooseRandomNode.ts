export const chooseRandomNode = (nodes: number[]) => {
  const randomIndex = Math.floor(Math.random() * nodes.length);
  return nodes[randomIndex];
};
