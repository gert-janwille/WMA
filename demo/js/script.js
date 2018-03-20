
const init = () => {

  const wma = new WMA({
    source: [],
    keys: [
      {key: `alcohol`, m: 6},
      {key: `bitterheid`, m: 6},
      {key: 'kleur', m: 4}
    ]
  });
  console.log(wma);
};

init();
