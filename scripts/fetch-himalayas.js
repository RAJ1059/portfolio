const fs = require('fs');

async function main() {
  const titles = [
    'File:The_Himalayan_-_Mount_Everest_Base_Camp_trek_HD_Time_Lapse.webm',
    'File:EVEREST.webm'
  ];

  for (const title of titles) {
    const url = 'https://commons.wikimedia.org/wiki/' + encodeURIComponent(title);
    const r = await fetch(url, { headers: { 'User-Agent': 'PortfolioBot/1.0' } });
    const html = await r.text();
    const regex = /https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"'<>\s]+\.webm/g;
    const matches = Array.from(new Set(html.match(regex) || []));
    console.log('=== ' + title + ' ===');
    console.log(matches);

    // Look for 1080p or 720p
    const hd = matches.find(m => m.includes('1080p') || m.includes('720p'));
    const chosen = hd || matches[0];
    if (chosen) {
      console.log('Downloading chosen HD Himalayas video:', chosen);
      const vRes = await fetch(chosen, { headers: { 'User-Agent': 'PortfolioBot/1.0' } });
      if (vRes.ok) {
        const buf = Buffer.from(await vRes.arrayBuffer());
        const outPath = './public/videos/himalayas-bg.webm';
        fs.writeFileSync(outPath, buf);
        console.log('Successfully saved HD Himalayas video at:', outPath, 'Bytes:', buf.length);
        return;
      }
    }
  }
}

main().catch(console.error);
