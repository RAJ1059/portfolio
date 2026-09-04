const fs = require('fs');

async function main() {
  const url = 'https://framerusercontent.com/sites/3r1Xu4DXLtC5PUnDU2zspB/searchIndex-qOf6EBuQPBqh.json';
  const r = await fetch(url);
  const data = await r.json();
  console.log('Homepage data:', JSON.stringify(data['/'], null, 2));
}

main().catch(console.error);
