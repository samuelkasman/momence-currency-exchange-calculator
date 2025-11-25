import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useExchangeRates } from "../hooks/useExchangeRates";
import { theme } from "../theme";
import type { ExchangeRate } from "../utils/parseCnbText";
import { Converter } from "./Converter";

vi.mock("../hooks/useExchangeRates", () => ({
  useExchangeRates: vi.fn(),
}));

const mockRates: ExchangeRate[] = [
  { country: "EMU", currency: "euro", amount: 1, code: "EUR", rate: 24.5 },
  {
    country: "United States",
    currency: "dollar",
    amount: 1,
    code: "USD",
    rate: 22.0,
  },
  { country: "Japan", currency: "yen", amount: 100, code: "JPY", rate: 16.0 },
];

const formatResult = (value: number) =>
  new Intl.NumberFormat("cs-CZ", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);

const stripSpaces = (value: string) => value.replace(/\s/g, "");

type UseExchangeRatesReturn = ReturnType<typeof useExchangeRates>;

const createQueryState = (
  overrides: Partial<UseExchangeRatesReturn> = {},
): UseExchangeRatesReturn =>
  ({
    data: mockRates,
    isPending: false,
    isError: false,
    error: null,
    refetch: vi.fn(),
    ...overrides,
  }) as UseExchangeRatesReturn;

const mockedUseExchangeRates = vi.mocked(useExchangeRates);

beforeEach(() => {
  mockedUseExchangeRates.mockReset();
  mockedUseExchangeRates.mockReturnValue(createQueryState());
});

const renderWithProviders = () =>
  render(
    <ThemeProvider theme={theme}>
      <Converter />
    </ThemeProvider>,
  );

describe("<Converter />", () => {
  it("converts CZK to the selected currency using CNB formula", async () => {
    renderWithProviders();
    const user = userEvent.setup();

    const input = screen.getByLabelText(/Amount in CZK/i);
    await user.clear(input);
    await user.type(input, "1000");

    const result = screen.getByTestId("converted-value");
    const expected = `${formatResult((1000 / 24.5) * 1)}${mockRates[0].code}`;

    expect(stripSpaces(result.textContent ?? "")).toBe(stripSpaces(expected));
  });

  it("updates the converted value when selecting a different currency and typing", async () => {
    renderWithProviders();
    const user = userEvent.setup();

    const select = screen.getByLabelText(/Currency/i);
    await user.selectOptions(select, "JPY");

    const input = screen.getByLabelText(/Amount in CZK/i);
    await user.clear(input);
    await user.type(input, "5000");

    const result = screen.getByTestId("converted-value");
    const expected = `${formatResult((5000 / 16) * 100)}JPY`;

    expect(stripSpaces(result.textContent ?? "")).toBe(stripSpaces(expected));
  });

  it("formats the CZK input with spaces between thousands", async () => {
    renderWithProviders();
    const user = userEvent.setup();

    const input = screen.getByLabelText(/Amount in CZK/i);
    await user.clear(input);
    await user.type(input, "12345");

    expect(input).toHaveValue("12 345");
  });
});
