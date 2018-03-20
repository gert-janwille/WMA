/*eslint no-undef: 0*/
const match = {
  id: `5gg210dfc13ae60c40000ea`,
  name: `Gert-Jan Wille`,
  company: `Wille`,
  city: `Waregem`,
  country: `Belgium`,
  color: `Blue`,
  bitterheid: 0.51,
  alcohol: 0.21,
  image: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJ4SURBVDjLpZNLiFJRGMe/q1biA99UpqOilqALmYW6yM2MFLQtwU27bLbNLLSgidEethxcGLRTXIkbFyEYQlQu7qJNMD5AYXxcUZMRMhtf19s5NzRnExMdOPfAOff//f7fOd9HMAwD/zN4/ypIJpPMbDaD+XwOaL1PFAoF1sJisQCaps9M/NP6xEKj0QgOhwO63S6k0+kjHk7B5XKxgr+N6XQKqVSqbbPZ1LVaDbLZ7DEKGONhcrVaBaFQCK1WC9RqNdTrddBqtey+Xq+HSqUCJpMJJBKJutlsQqlUwgEfBAKBPM/tdhP5fJ4RCAQwGAyc6IDs9/vOyWRCIpvO8XhMdjoddm232+z+aDTC6VDYGQd/cH4ikQi7IDFZLBaTmIyIJCbLZDLSYrGAXC4nrVYrBmEHLawlls+YyWQYj8cD6FKh1+s5sRiTsZiiKKdSqSSRfadKpSIbjQaEQiFi5QAPZGm/WCyCwWBgyWazGaRSKUtWKBQkujzAQex2O6aviodYL6REIsEsn2vtrdmp6X6ByxQJvEEPRnwh8GfDJ7dy89fEeSqx4NMFxRp1+PqW9+IlgxVOv+ag+Ok9PSiXdtlKjMfjNxBlDxEfLonrDjZ/jGBzywv82geAjy9AIJGCXqfjnlSY3wFQTl6/378TjUZLSPAICQ+DweDh0kF+++WCf8VAwJ29Pz1wcBW4C0LPphCLxZ4i4XONRsMWEK60crm8cnHz6C1s370HwsY7mJx24CcKMPzOhXINqDN3EIlElo2yGw6HVw4++64dXBCL9jcUMw6P04Lhtzkcd7n0bMw8I87bzgXfxuPRSXuHSxM6mstQSPXmdm7+6heR5oijWAuHSQAAAABJRU5ErkJggg==`,
  code: `69152-0065`,
  totalMatches: 1,
  idMatches: [],
  pending: false,
  isActive: null,
  created: `1996-12-12 01:32:21`
};

const init = ({beers}) => {

  const wma = new WMA({
    source: beers,
    keys: [
      {key: `alcohol`, m: 4},
      {key: `bitterheid`, m: 6}
    ]
  });

  wma.match(match);
  
};

const fetchData = () => {
  fetch(`./demo/data/dataset.json`)
    .then(r => r.json())
    .then(data => init(data));
};

fetchData();
