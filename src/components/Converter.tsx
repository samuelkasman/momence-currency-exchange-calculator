import { useEffect, useId, useMemo, useState } from "react";

import {
  CZK_AMOUNT_PLACEHOLDER,
  CZK_AMOUNT_STEP,
  DEFAULT_CZK_AMOUNT,
  MIN_CZK_AMOUNT,
} from "../constants/converter";
import {
  formatAmount,
  formatConvertedAmount,
  formatRate,
} from "../helpers/formatters";
import { useExchangeRates } from "../hooks/useExchangeRates";
import type { ExchangeRate } from "../utils/parseCnbText";
import {
  Card,
  Description,
  Form,
  FormField,
  Heading,
  Input,
  ResultCard,
  ResultLabel,
  ResultMeta,
  ResultValue,
  Select,
  Title,
} from "./Converter.styled";
import { RetryButton, StateCard } from "./shared.styled";

const getDefaultCurrency = (rates?: ExchangeRate[]) => rates?.[0]?.code ?? "";

export const Converter = () => {
  const { data, isPending, isError, error, refetch } = useExchangeRates();
  const amountFieldId = useId();
  const currencyFieldId = useId();
  const [czkAmount, setCzkAmount] = useState(DEFAULT_CZK_AMOUNT);
  const [selectedCode, setSelectedCode] = useState("");

  useEffect(() => {
    if (!data?.length) {
      return;
    }

    const hasSelectedCurrency = data.some((rate) => rate.code === selectedCode);

    if (!selectedCode || !hasSelectedCurrency) {
      setSelectedCode(getDefaultCurrency(data));
    }
  }, [data, selectedCode]);

  const selectedRate = useMemo(
    () => data?.find((rate) => rate.code === selectedCode),
    [data, selectedCode],
  );

  const parsedAmount = Number.parseFloat(czkAmount.replace(",", "."));

  const isValidAmount =
    Number.isFinite(parsedAmount) && parsedAmount >= MIN_CZK_AMOUNT;

  const convertedAmount =
    selectedRate && isValidAmount
      ? (parsedAmount / selectedRate.rate) * selectedRate.amount
      : null;

  if (isPending) {
    return <StateCard>Loading converter…</StateCard>;
  }

  if (isError || !data?.length) {
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
    <Card>
      <Heading>
        <Title>CZK → Foreign Currency</Title>

        <Description>
          Enter an amount in Czech koruna and pick a currency to convert
          instantly.
        </Description>
      </Heading>

      <Form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <FormField htmlFor={amountFieldId}>
          <span>Amount in CZK</span>
          <Input
            id={amountFieldId}
            type="number"
            min={MIN_CZK_AMOUNT}
            step={CZK_AMOUNT_STEP}
            value={czkAmount}
            onChange={(event) => setCzkAmount(event.target.value)}
            placeholder={CZK_AMOUNT_PLACEHOLDER}
          />
        </FormField>

        <FormField htmlFor={currencyFieldId}>
          <span>Currency</span>
          <Select
            id={currencyFieldId}
            value={selectedCode}
            onChange={(event) => setSelectedCode(event.target.value)}
          >
            {data.map((rate) => (
              <option key={rate.code} value={rate.code}>
                {rate.code} — {rate.currency} ({rate.country})
              </option>
            ))}
          </Select>
        </FormField>
      </Form>

      <ResultCard>
        <ResultLabel>Converted amount</ResultLabel>

        <ResultValue data-testid="converted-value">
          {convertedAmount !== null
            ? formatConvertedAmount(convertedAmount)
            : "—"}
        </ResultValue>

        {selectedRate && (
          <ResultMeta>
            {formatAmount(selectedRate.amount)} {selectedRate.code} ={" "}
            {formatRate(selectedRate.rate)} CZK
          </ResultMeta>
        )}
      </ResultCard>
    </Card>
  );
};
