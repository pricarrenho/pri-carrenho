import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 54px;

  @media (min-width: 800px) {
    margin-top: 148px;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  flex-direction: column-reverse;

  @media (min-width: 800px) {
    flex-direction: initial;
    gap: 48px;
  }
`;

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    text-align: justify;
    line-height: 28px;

    strong {
      color: ${theme.colors.pink[700]};
    }

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.md};
    }
  `}
`;

export const Img = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
  width: 350px;
  height: 250px;

  @media (min-width: 800px) {
    width: 550px;
    height: 340px;
  }
`;
