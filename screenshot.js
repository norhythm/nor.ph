const lists = require('./list.json');
const puppeteer = require('puppeteer');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.setViewport({
    width: 1200,
    height: 630,
  });
  const url = 'http://localhost:8080';

  for (list of lists) {
    await page.goto(`${url}/${list}/`);
    page.addStyleTag({url: `${url}/stylesheets/og.css`});

    await page.screenshot({
      path: `${list}/og.png`,
      clip: {
        x: 0,
        y: 0,
        width: 1200,
        height: 630
    }});
    await delay(400);
  }
  await browser.close();
})();