const puppeteer = require('puppeteer');
const dirToJson = require('dir-to-json');
let lists;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

dirToJson("./works", { sortType: true })
	.then(function (dirTree) {
    lists = dirTree.children;
	})
	.catch(function (err) {
		throw err;
	});

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.setViewport({
    width: 1200,
    height: 630,
  });
  const url = 'http://localhost:3000';

  for (list of lists) {
    await page.goto(`${url}/works/${list.path}/`);
    await page.addStyleTag({url: `${url}/stylesheets/og.css`});
    await delay(1000);
    await page.screenshot({
      path: `works/${list.path}/og.png`,
      clip: {
        x: 0,
        y: 0,
        width: 1200,
        height: 630
    }});
    console.log('Done:', list.path);
  }
  await browser.close();
  console.log("Almost done!")
})();