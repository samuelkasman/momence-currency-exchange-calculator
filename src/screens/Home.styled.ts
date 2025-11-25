import styled from "styled-components";

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)};
  max-width: 786px;
  padding: ${({ theme }) => `${theme.spacing(10)} ${theme.spacing(4)}`};
  margin: 0 auto;
`;

export const Hero = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin: 0;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1rem;
  max-width: 640px;
  margin: 0;
`;
