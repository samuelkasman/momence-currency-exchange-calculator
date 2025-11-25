import { Converter } from "../components/Converter";
import { ExchangeRateList } from "../components/ExchangeRateList";
import { Hero, Page, Subtitle, Title } from "./Home.styled";

export const Home = () => {
  return (
    <Page>
      <Hero>
        <Title>CNB Currency Exchange</Title>
        <Subtitle>Momence currency exchange calculator assignment</Subtitle>
      </Hero>

      <Converter />

      <ExchangeRateList />
    </Page>
  );
};
