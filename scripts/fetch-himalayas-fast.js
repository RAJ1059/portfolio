const fs = require('fs');

async function main() {
  const url = 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b6/The_Himalayan_-_Mount_Everest_Base_Camp_trek_HD_Time_Lapse.webm/The_Himalayan_-_Mount_Everest_Base_Camp_trek_HD_Time_Lapse.webm.480p.vp9.webm';
  console.log('Downloading optimized fast-loading version...');
  const res = await fetch(url, { headers: { 'User-Agent': 'PortfolioBot/1.0' } });
  if (res.ok) {
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync('./public/videos/himalayas-bg-fast.webm', buf);
    console.log('Saved himalayas-bg-fast.webm, bytes:', buf.length);
  }
}

main().catch(console.error);
