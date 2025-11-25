type ProxyResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): ProxyResponse;
  send(body: string): void;
  json(body: unknown): void;
};

const CNB_DAILY_URL =
  "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";

export default async function handler(_: unknown, res: ProxyResponse) {
  try {
    const response = await fetch(CNB_DAILY_URL);

    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.status(200).send(text);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch CNB data" });
  }
}
