export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const Repeat = (props) => {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }

  return items;
};
