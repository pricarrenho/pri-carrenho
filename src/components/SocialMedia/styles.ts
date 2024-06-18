import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 16px;
    margin-left: 50px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 40px;
      border-bottom: 1px solid ${theme.colors.pink[700]};
      left: -60px;
      bottom: 50%;
    }
  `}
`;

export const ImgLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[400]};
    transition: color 0.2s;

    &:hover {
      color: ${theme.colors.white};
    }
  `}
`;
