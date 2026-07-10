import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';

const SCR = '/private/tmp/claude-501/-Users-bas-Development-Projects-bas-website/39e760e2-da24-4e42-b93c-b00f8c8b4df1/scratchpad';
const logo = readFileSync('./public/logo.svg', 'utf-8');
const logoDataUri = 'data:image/svg+xml;base64,' + Buffer.from(logo).toString('base64');
let html = readFileSync(`${SCR}/og.html`, 'utf-8').replace('LOGO_SRC', logoDataUri);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 2 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.waitForTimeout(600); // fonts settelen
await page.screenshot({ path: './public/og-image.png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log('og-image.png geschreven');
