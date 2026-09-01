const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    channel: 'chrome',
    headless: true
  });
  
  const page = await browser.newPage();
  
  page.on('response', response => {
    if (response.status() === 404) {
      console.log('404 Not Found:', response.url());
    }
  });
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle0' });
    console.log('Page loaded successfully');
  } catch (e) {
    console.log('Error navigating:', e);
  }
  
  await browser.close();
})();
