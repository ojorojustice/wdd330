var baseUrl = "https://swapi.dev/api/people/";
var allCoins = [];

async function getData() {
  const fetchUrl = await fetch(baseUrl);
  const coins = await fetchUrl.json();
  allCoins = coins;
}

async function renderTable() {
  await getData();
  console.log(allCoins);

  
}

renderTable();
