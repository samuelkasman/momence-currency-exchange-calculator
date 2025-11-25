import styled from "styled-components";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
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
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  margin: 0;
`;

export const Form = styled.form`
  display: grid;
  gap: ${({ theme }) => theme.spacing(4)};
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  font-weight: 500;
`;

export const Input = styled.input`
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: 2px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Select = styled.select`
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ResultCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  color: #fff;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(5)};
`;

export const ResultLabel = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.8;
`;

export const ResultValue = styled.span`
  font-size: 2.5rem;
  font-weight: 600;
`;

export const ResultMeta = styled.span`
  font-size: 1rem;
  opacity: 0.9;
`;
