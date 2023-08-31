import puppeteer from "puppeteer";

export default async (port: number, output: string) => {
  // Create a browser instance
  // const browser = await puppeteer.launch({ headless: "new" });
  const browser = await puppeteer.launch({
    headless: "new",
  });

  // Create a new page
  const page = await browser.newPage();
  await page.setViewport({ width: 595, height: 842, deviceScaleFactor: 2 });
  await page.setUserAgent(
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36"
  );

  const url = `http://localhost:${port}`;
  await page.goto(url, { waitUntil: "networkidle0" });

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType("screen");

  // Download the PDF
  await page.pdf({
    path: output,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    printBackground: true,
    format: "A4",
  });

  // Close the browser instance
  await browser.close();
};
