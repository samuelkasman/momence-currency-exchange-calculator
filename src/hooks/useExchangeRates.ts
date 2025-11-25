import { useQuery } from "@tanstack/react-query";
import { fetchExchangeRates } from "../api/fetchRates";
import type { ExchangeRate } from "../utils/parseCnbText";

export const useExchangeRates = () =>
  useQuery<ExchangeRate[], Error>({
    queryKey: ["exchangeRates"],
    queryFn: fetchExchangeRates,
    staleTime: 1000 * 60 * 60, // 1 hour
  });
