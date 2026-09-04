const fs = require('fs');

async function main() {
  const url = 'https://commons.wikimedia.org/wiki/File:Infinitely_wide_neural_network.webm';
  const res = await fetch(url, { headers: { 'User-Agent': 'PortfolioBot/1.0' } });
  const html = await res.text();
  const regex = /https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/[^"'<>\s]+/g;
  const matches = Array.from(new Set(html.match(regex) || []));
  const videoLinks = matches.filter(m => m.endsWith('.webm') || m.endsWith('.mp4'));
  console.log('Video links found:', videoLinks);

  // Download the highest resolution or 720p/1080p if available
  const vp9_720 = videoLinks.find(v => v.includes('720p.vp9.webm'));
  const targetUrl = vp9_720 || videoLinks[0];
  if (targetUrl) {
    console.log('Fetching high quality version from:', targetUrl);
    const vRes = await fetch(targetUrl, { headers: { 'User-Agent': 'PortfolioBot/1.0' } });
    if (vRes.ok) {
      const buf = Buffer.from(await vRes.arrayBuffer());
      fs.writeFileSync('./public/videos/developer-bg.webm', buf);
      console.log('Updated developer-bg.webm, size:', buf.length);
    }
  }
}

main().catch(console.error);
