/*eslint no-undef: 0*/

const match = {
  id: `5gg210dfc13ae60c40000ea`,
  name: `Lau`,
  ebu: 0.24,
  alc: 43,
  color: `Red`,
  cdex: 0.0421,
  bitterheid: 0.2,
};


const init = ({data}) => {

  const wma = new WMA({
    source: data,
    output: 10,
    showOriginal: true,
    keys: [
      {key: `ebu`, m: 20},
      {key: `alc`, m: 50},
      {key: `cdex`, m: 80},
      // {key: `color`, m: 2},
      {key: `bitterheid`, m: 100}
    ]
  });

  console.log(wma.match(match));

};

const fetchData = () => {
  fetch(`./demo/data/full.json`)
    .then(r => r.json())
    .then(data => init(data));
};

fetchData();
