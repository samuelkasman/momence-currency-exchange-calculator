import styled from "styled-components";

export const StateCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing(6)};
  text-align: center;
  color: ${({ theme }) => theme.colors.muted};
`;

export const RetryButton = styled.button`
  margin-top: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  border: none;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
