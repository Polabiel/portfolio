import { RootObject } from "@/types";
import axios, { AxiosResponse } from "axios";
import Link from "next/link";

export default async function CardRepository() {
  let response: AxiosResponse<RootObject> | undefined;

  try {
    if (!response) {
      response = await axios.get("https://api.github.com/users/polabiel/repos");
    }
  } catch (error) {
    console.error(error);
  }

  const data = response?.data;

  return (
    <div className="max-w-min">
      {Array.isArray(data) &&
        data.map(async (card: RootObject) => (
          <div key={card.id} className="bg-white p-5 m-1 *:text-black">
            {card.homepage && (
              <img
                src={""}
                alt=""
              />
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
