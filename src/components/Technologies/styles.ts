import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 64px;

  @media (min-width: 800px) {
    margin-top: 148px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 48px;

  @media (min-width: 800px) {
    gap: 48px;
  }
`;

export const Content = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 8px;

    &:hover {
      h3 {
        color: ${theme.colors.pink[700]};
      }
    }
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css``}
`;

export const ImgTechs = styled(Image)`
  object-fit: cover;
`;
