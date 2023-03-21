import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 148px;
`;

export const Content = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`;

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    text-align: justify;
    line-height: 28px;

    strong {
      color: ${theme.colors.pink[700]};
    }
  `}
`;

export const Img = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
`;
