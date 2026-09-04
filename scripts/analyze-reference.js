const fs = require('fs');

async function main() {
  const content = fs.readFileSync('C:/Users/shivr/.gemini/antigravity-ide/brain/0a2be183-75c8-4519-a2b7-7aeab7259c9b/.system_generated/steps/442/content.md', 'utf8');
  const urls = Array.from(new Set(content.match(/https:\/\/[^"'<>\s]+/g) || []));
  console.log('Total URLs:', urls.length);
  console.log('Sample URLs:', urls.slice(0, 20));

  // Also check search index if any
  const searchIndex = urls.find(u => u.includes('searchIndex'));
  if (searchIndex) {
    console.log('Fetching search index:', searchIndex);
    const r = await fetch(searchIndex);
    if (r.ok) {
      const idx = await r.json();
      console.log('Search Index Keys:', Object.keys(idx));
      console.log('Search Index Sample:', JSON.stringify(idx).slice(0, 500));
    }
  }
}

main().catch(console.error);
