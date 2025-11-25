import { formatAmount, formatRate } from "../helpers/formatters";
import { useExchangeRates } from "../hooks/useExchangeRates";
import {
  Amount,
  Code,
  Container,
  Country,
  CurrencyInfo,
  CurrencyName,
  Heading,
  RateHeader,
  RateValue,
  Table,
  TableHeader,
  TableRow,
  Title,
} from "./ExchangeRateList.styled";
import { RetryButton, StateCard } from "./shared.styled";

export const ExchangeRateList = () => {
  const { data, isPending, isError, error, refetch } = useExchangeRates();

  if (isPending) {
    return <StateCard>Loading exchange rates…</StateCard>;
  }

  if (isError || !data) {
    return (
      <StateCard>
        <div>
          {error?.message ??
            "We could not load the exchange rates. Please try again."}
        </div>
        <RetryButton type="button" onClick={() => refetch()}>
          Retry
        </RetryButton>
      </StateCard>
    );
  }

  return (
    <Container>
      <Heading>
        <Title>Exchange Rates</Title>
      </Heading>

      <Table>
        <TableHeader>
          <span>Code</span>
          <span>Currency</span>
          <span>Amount</span>
          <RateHeader>Rate (CZK)</RateHeader>
        </TableHeader>

        {data.map((rate) => (
          <TableRow key={rate.code}>
            <Code>{rate.code}</Code>

            <CurrencyInfo>
              <CurrencyName>{rate.currency}</CurrencyName>
              <Country>{rate.country}</Country>
            </CurrencyInfo>

            <Amount>{formatAmount(rate.amount)}</Amount>

            <RateValue>{formatRate(rate.rate)}</RateValue>
          </TableRow>
        ))}
      </Table>
    </Container>
  );
};
