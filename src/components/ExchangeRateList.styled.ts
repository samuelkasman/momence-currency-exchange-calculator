import styled from "styled-components";

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing(6)};
  box-shadow: ${({ theme }) => theme.shadow};
`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Table = styled.div`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.75fr 1fr;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.muted};
  text-transform: uppercase;
  padding: ${({ theme }) => theme.spacing(2)} 0;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 0.75fr 1fr;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(3)} 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Code = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

export const CurrencyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const CurrencyName = styled.span`
  font-weight: 500;
`;

export const Country = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.muted};
`;

export const Amount = styled.span`
  font-variation-settings: "wght" 550;
`;

export const RateHeader = styled.span`
  text-align: right;
`;

export const RateValue = styled.span`
  font-weight: 600;
  text-align: right;
`;
