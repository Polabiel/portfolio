import { RootObject } from "@/types";
import axios from "axios";
import { randomUUID } from "crypto";
import Link from "next/link";
import path from "path";
import puppeteer from "puppeteer";

async function captureScreenshot(url: string): Promise<string> {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const outputPath = await page.screenshot({
    path: path.join(__dirname, `screenshot-${randomUUID}.png`),
  });
  await browser.close();
  const
  return outputPath;
}

export default async function CardRepository() {
  const response = await axios.get<RootObject>(
    "https://api.github.com/users/polabiel/repos"
  );
  const data = response.data;

  return (
    <div>
      {Array.isArray(data) &&
        data.map(async (card: RootObject) => (
          <div key={card.id} className="bg-white p-5 m-1 *:text-black">
            {card.homepage && (
              <img src={(await captureScreenshot(card.homepage)).toString()} alt="" />
            )}
            <h1>{card.name}</h1>
            <p>{card.language}</p>
            {card.homepage && (
              <Link
                href={card.homepage}
                className="bg-green-400 p-1 rounded-lg "
              >
                Test Project
              </Link>
            )}
            <p>{card.description}</p>
            <Link href={card.html_url}>Link</Link>
          </div>
        ))}
    </div>
  );
}
